// Run against production after deployment, or pass a local production server.
// node scripts/hreflang-verify.cjs https://successpathmentors.net live
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const mod = { exports: {} };
  cache.set(file, mod);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const localRequire = name => name.startsWith('@/') || name.startsWith('.')
    ? load(path.resolve(name.startsWith('@/') ? path.join(root, 'src') : path.dirname(file), name.replace(/^@\//, '')) + '.ts')
    : require(name);
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename: file })(localRequire, mod, mod.exports);
  return mod.exports;
}
const { hreflangPagePaths } = load(path.join(root, 'src/lib/seo/hreflang-pages.ts'));
const { buildLanguageAlternates } = load(path.join(root, 'src/lib/seo/urls.ts'));
const production = 'https://successpathmentors.net';
const base = (process.argv[2] || production).replace(/\/$/, '');
const label = process.argv[3] || 'live';
assert.match(label, /^[a-z0-9-]+$/);
const output = path.join(root, 'reports/hreflang', label);
fs.mkdirSync(output, { recursive: true });
for (const skipped of ['/locations', '/locations/canada', '/fr/programme-francais', '/services', '/blog', '/subjects/science', '/subjects/math/missing']) {
  assert.deepEqual(buildLanguageAlternates(skipped), {}, `Unverified pair: ${skipped}`);
}
assert.deepEqual(buildLanguageAlternates(), {
  'en-CA': production + '/en', 'ar-CA': production + '/ar', 'x-default': production + '/en',
});
const pairs = [...hreflangPagePaths].map(p => ({ path: p, expected: buildLanguageAlternates(p) }));
const jobs = pairs.flatMap(pair => ['en-CA', 'ar-CA'].map(lang => ({ ...pair, lang, url: pair.expected[lang] })));
const results = new Map();
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2].replaceAll('&amp;', '&')]));
async function inspect(job, index) {
  const row = { url: job.url, status: null, canonical: null, languages: {}, issues: [] };
  try {
    const response = await fetch(base + new URL(job.url).pathname, { redirect: 'manual', signal: AbortSignal.timeout(60000) });
    row.status = response.status;
    row.location = response.headers.get('location');
    row.linkHeader = response.headers.get('link');
    const html = await response.text();
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
    if (!head) row.issues.push('No rendered HTML head');
    fs.writeFileSync(path.join(output, `${index}.head.html`), head || '');
    row.headFile = `${index}.head.html`;
    const links = [...(head || '').matchAll(/<link\b[^>]*>/gi)].map(m => attributes(m[0]));
    const canonicals = links.filter(l => l.rel === 'canonical');
    row.canonical = canonicals[0]?.href || null;
    if (canonicals.length !== 1 || row.canonical !== job.url) row.issues.push('Canonical mismatch');
    for (const link of links.filter(l => l.rel === 'alternate' && l.hreflang)) {
      if (row.languages[link.hreflang]) row.issues.push(`Duplicate hreflang: ${link.hreflang}`);
      row.languages[link.hreflang] = link.href;
    }
    if (response.status !== 200) row.issues.push(`HTTP ${response.status}`);
    if (JSON.stringify(Object.entries(row.languages).sort()) !== JSON.stringify(Object.entries(job.expected).sort())) row.issues.push('Hreflang set mismatch');
    if (row.linkHeader && /hreflang=/i.test(row.linkHeader)) row.issues.push('Additional automatic HTTP hreflang header');
  } catch (error) { row.issues.push(error.message); }
  results.set(job.url, row);
}
(async () => {
  let next = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (next < jobs.length) { const index = next++; await inspect(jobs[index], index); }
  }));
  const rows = jobs.map(job => {
    const row = results.get(job.url);
    row.targets = Object.fromEntries(Object.entries(job.expected).map(([lang, url]) => [lang, { url, status: results.get(url)?.status ?? null }]));
    row.reciprocal = Object.values(job.expected).every(url => {
      const target = results.get(url);
      return target?.status === 200 && target.canonical === url && Object.entries(job.expected).every(([lang, href]) => target.languages[lang] === href);
    }) ? 'YES' : 'NO';
    if (row.reciprocal === 'NO') row.issues.push('Missing valid reciprocal references');
    row.result = row.issues.length ? 'FAIL' : 'PASS';
    return row;
  });
  const tracked = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' }).trim().split(/\r?\n/);
  const protectedFiles = tracked.filter(p => /locations|location-navigation|locations-menu|programme-francais|^src\/app\/fr\/|^src\/app\/sitemap\.ts$/.test(p));
  for (const file of protectedFiles) {
    const original = execFileSync('git', ['show', `HEAD:${file}`], { cwd: root, maxBuffer: 16 * 1024 * 1024 }).toString('utf8').replaceAll('\r\n', '\n');
    assert.equal(fs.readFileSync(path.join(root, file), 'utf8').replaceAll('\r\n', '\n'), original, `Protected file changed: ${file}`);
  }
  const summary = { checkedAt: new Date().toISOString(), base, pairs: pairs.length, pages: rows.length, passed: rows.filter(r => r.result === 'PASS').length, failed: rows.filter(r => r.result === 'FAIL').length, protectedFilesUnchanged: protectedFiles.length };
  fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ summary, rows }, null, 2));
  const table = ['# Rendered HTML hreflang validation', '', `Checked: ${summary.checkedAt}. Server: ${base}. ${summary.passed}/${summary.pages} PASS.`, '', 'Targets use the production origin; HTTP requests use the server above. Redirects are not followed.', '', '| URL | Canonical | en-CA | ar-CA | x-default | Reciprocal | Target HTTP (EN / AR / default) | Result |', '|---|---|---|---|---|---|---|---|', ...rows.map(r => `| ${r.url} | ${r.canonical || 'MISSING'} | ${r.languages['en-CA'] || 'MISSING'} | ${r.languages['ar-CA'] || 'MISSING'} | ${r.languages['x-default'] || 'MISSING'} | ${r.reciprocal} | ${Object.values(r.targets).map(t => t.status ?? 'ERROR').join(' / ')} | ${r.result} |`)];
  fs.writeFileSync(path.join(output, 'results.md'), table.join('\n') + '\n');
  console.log(JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(rows.filter(r => r.result === 'FAIL').map(r => ({ url: r.url, issues: r.issues })), null, 2));
  if (summary.failed) process.exitCode = 1;
})();
