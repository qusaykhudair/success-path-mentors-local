import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { getNormalizedRequestUrl } from '../src/lib/seo/normalize-request-url.ts';

const canonical = 'https://successpathmentors.net';
let checked = 0;
for (const origin of ['http://successpathmentors.net', 'http://www.successpathmentors.net', 'https://www.successpathmentors.net']) {
  for (const path of ['/en', '/en/about/?a=1&b=two%20words', '/images/logo.png', '/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9/canada/?q=a%2Fb']) {
    const url = new URL(origin + path);
    const expected = canonical + url.pathname.replace(/\/+$/, '') + url.search;
    assert.equal(getNormalizedRequestUrl(url.href, url.host, url.protocol.slice(0,-1)), expected);
    checked++;
  }
}
assert.equal(getNormalizedRequestUrl(canonical + '/en', 'successpathmentors.net', 'https'), null);
assert.equal(getNormalizedRequestUrl('http://localhost:3100/en', 'successpathmentors.net', 'https'), null);
assert.equal(getNormalizedRequestUrl('http://localhost:3100/en/?q=a', 'successpathmentors.net', 'https'), canonical + '/en?q=a');
assert.equal(getNormalizedRequestUrl(canonical + '/en', 'successpathmentors.net', 'http'), canonical + '/en');
assert.equal(getNormalizedRequestUrl('http://localhost:3100/en', 'localhost:3100', null), null);
assert.equal(getNormalizedRequestUrl('https://preview.example/en', 'preview.example', 'http'), null);
assert.equal(getNormalizedRequestUrl('https://successpathmentors.net.evil.test/en', 'successpathmentors.net.evil.test', null), null);
assert.equal(getNormalizedRequestUrl(canonical + '/', 'successpathmentors.net', 'https'), null);
assert.equal(getNormalizedRequestUrl('http://www.successpathmentors.net/?x=1', 'www.successpathmentors.net', 'http'), canonical + '/?x=1');
checked += 9;

const tracked = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).trim().split(/\r?\n/);
const protectedFiles = tracked.filter(p => /(?:^|\/)locations(?:\/|\.)|location-navigation|locations-menu/.test(p));
const hashes = {};
for (const file of protectedFiles) {
  const original = execFileSync('git', ['show', `HEAD:${file}`], { maxBuffer: 16 * 1024 * 1024 });
  // Git can normalize line endings on Windows; content is compared after normalization.
  const current = fs.readFileSync(file, 'utf8').replaceAll('\r\n', '\n');
  assert.equal(current, original.toString('utf8').replaceAll('\r\n', '\n'), `Location source changed: ${file}`);
  hashes[file] = createHash('sha256').update(current).digest('hex');
}
fs.writeFileSync('reports/technical-seo/unit-checks.json', JSON.stringify({redirectCases: checked, protectedFiles: hashes},null,2));
console.log(`${checked} redirect cases passed; ${protectedFiles.length} location files unchanged.`);

