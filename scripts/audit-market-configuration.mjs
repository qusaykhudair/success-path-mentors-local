import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

// Read-only source audit. First argument is the saved pre-unit project root.
const baseline = process.argv[2];
if (!baseline) throw new Error('Usage: node scripts/audit-market-configuration.mjs <baseline-root>');
const query = /Canada|Canadian|United States|USA|CAD|America\/Toronto|successpathmentors@gmail\.com|647|WHATSAPP_NUMBER|WHATSAPP_DISPLAY_NUMBER|CONTACT\.phone|CONTACT\.country|siteConfig\.email|siteConfig\.bookingUrl|en_CA|ar_CA|16477875999|\+1 000 000 0000|['"](?:CA|US)['"]/;
const literal = /Canada|Canadian|United States|USA|CAD|America\/Toronto|successpathmentors@gmail\.com|\+?1[ -]?647|16477875999|en_CA|ar_CA|\+1 000 000 0000|['"](?:CA|US)['"]/;

function classify(path, line) {
  if (/#64748B/i.test(line) || /^\s*647,?\s*$/.test(line) || /export type CurrencyCode/.test(line)) {
    return ['E', 'Color, dataset number, or type declaration'];
  }
  if (path.includes('registration-form') || path.includes('registration-options')) {
    return ['D', 'Registration defaults/options: preserve API names, Other, and browser timezone'];
  }
  if (path.endsWith('auth-copy.ts')) return ['B', 'Translated authentication example/help text'];
  if (path === 'src/content/pages/contact.ts') {
    if (/^\s*'successpathmentors@gmail.com',?\s*$/.test(line)) return ['A', 'Fixed direct-contact display email'];
    if (/Messages are sent|تصل الرسائل|Example:/.test(line)) return ['B', 'Translated prose/example'];
    return ['D', 'Contact form country/curriculum/timezone option or label; broader choices retained'];
  }
  if (path.includes('content/locations/location-pages')) return ['C', 'Location-specific page/SEO content'];
  if (path.includes('content/locations/location-navigation')) return ['B', 'Localized location navigation labels'];
  if (path.includes('content/')) return ['C', 'Editorial or educational content'];
  if (path.includes('llms.txt') && !line.includes('- Contact:')) return ['C', 'Service-region descriptive copy'];
  if (/Canadian provincial curricula|United States state curricula|provides one-to-one/.test(line)) {
    return ['C', 'SEO descriptive copy'];
  }
  return ['A', 'Business configuration or compatibility consumer'];
}

function audit(root) {
  const rows = [];
  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, entry.name);
      if (entry.isDirectory()) walk(file);
      else {
        const path = relative(root, file).replaceAll('\\', '/');
        readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, index) => {
          if (!query.test(line)) return;
          const [category, reason] = classify(path, line);
          rows.push({ path, line: index + 1, category, reason, text: line.trim(),
            businessLiteral: (category === 'A' || category === 'D') && literal.test(line) });
        });
      }
    }
  }
  walk(join(root, 'src'));
  return rows;
}

const before = audit(resolve(baseline));
const after = audit(process.cwd());
const count = (rows) => rows.filter((row) => row.businessLiteral).length;
const escape = (value) => String(value).replaceAll('|', '\\|').replaceAll('`', '\\`');
let report = '# GER-WEB-002 hardcoded-value audit\n\n';
report += 'Scope: every matching line across the complete src directory, before and after adoption. ';
report += 'A = business configuration/reference; B = localized marketing/help content; C = SEO/editorial content; D = form options/defaults; E = unrelated/type declarations.\n\n';
report += 'Measurement: one occurrence is one matching source line containing a literal business value in A or D. Multiple literals on one line count once. Reference-only lines are classified but excluded from the reduction metric. Authoritative market values and retained contact-form options are included. This is not a count of all prose mentions.\n\n';
report += `**BEFORE: ${count(before)} business literal-bearing lines. AFTER: ${count(after)}. Reduction: ${count(before) - count(after)}.**\n\n`;
report += '| Classification | Before matching lines | After matching lines |\n|---|---:|---:|\n';
for (const category of ['A', 'B', 'C', 'D', 'E']) {
  report += `| ${category} | ${before.filter((r) => r.category === category).length} | ${after.filter((r) => r.category === category).length} |\n`;
}
report += '\nRetained: fixed NA source values in markets.ts; registration label mapping; broader contact form country/curriculum/timezone options and distinct phone example; translated copy; location-specific SEO content; unrelated color/data matches. Existing siteConfig/CONTACT/WhatsApp references now use market-backed compatibility facades. The contact API still requires explicitly configured credentials and receives no market email fallback.\n';
for (const [title, rows] of [['Before', before], ['After', after]]) {
  report += `\n## ${title}: complete classified match inventory\n\n| Source | Class | Literal counted | Reason | Match |\n|---|---|---|---|---|\n`;
  for (const row of rows) {
    report += `| ${row.path}:${row.line} | ${row.category} | ${row.businessLiteral ? 'yes' : 'no'} | ${row.reason} | ${escape(row.text)} |\n`;
  }
}
writeFileSync('docs/GER-WEB-002-hardcoding-audit.md', report);
console.log(JSON.stringify({ before: count(before), after: count(after), beforeMatches: before.length, afterMatches: after.length }));
