import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageSource = readFileSync(
  `${root}src/app/[locale]/(catalog)/subjects/french/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

const duplicateBroadFrenchRoutes = [
  `${root}src/app/[locale]/(catalog)/subjects/french-tutoring/page.tsx`,
  `${root}src/app/[locale]/(catalog)/french-tutoring/page.tsx`,
];

test('FRENCH OWNER: canonical French page owns broad Canada tutoring intent with verified Grades 1–12 scope', () => {
  assert.match(
    pageSource,
    /Online French Tutoring in Canada \\| Grades 1–12/
  );
  assert.match(
    pageSource,
    /Online French Tutoring for Grades 1–12/
  );
  assert.match(
    pageSource,
    /French Immersion, Extended French, and Core French/
  );
  assert.match(
    pageSource,
    /Ontario FSL/
  );
});

test('FRENCH CONVERSION: free trial remains the primary hero action and unsupported DELF claims are not surfaced', () => {
  assert.match(
    pageSource,
    /primaryAction:\s*\n\s*'Book a Free Trial Session'/
  );
  assert.equal(
    pageSource.includes('DELF'),
    false
  );
});

test('FRENCH ARCHITECTURE: sitemap keeps one broad French owner and no duplicate broad route exists', () => {
  assert.match(
    sitemapSource,
    /'\/subjects\/french'/
  );
  assert.equal(
    sitemapSource.includes("'/subjects/french-tutoring'"),
    false
  );
  assert.equal(
    duplicateBroadFrenchRoutes.some((path) => existsSync(path)),
    false
  );
});
