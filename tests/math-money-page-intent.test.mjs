import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageContent = readFileSync(
  `${root}src/content/subjects/math/math-page-content.ts`,
  'utf8'
);
const pageSource = readFileSync(
  `${root}src/app/[locale]/(catalog)/subjects/math/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

const duplicateBroadMathRoutes = [
  `${root}src/app/[locale]/(catalog)/subjects/math-tutoring/page.tsx`,
  `${root}src/app/[locale]/(catalog)/math-tutoring/page.tsx`,
];

test('MATH OWNER: canonical Math page owns broad Canada tutoring intent with verified Grades 2–12 scope', () => {
  assert.match(
    pageContent,
    /Online Math Tutoring in Canada \\| Grades 2–12/
  );
  assert.match(
    pageContent,
    /Online Math Tutoring for Grades 2–12/
  );
  assert.match(
    pageContent,
    /Ontario curriculum support/
  );
  assert.equal(
    pageContent.includes('Grades 1–12'),
    false
  );
});

test('MATH CONVERSION: free trial is the primary hero action and curriculum exploration remains available', () => {
  assert.match(
    pageContent,
    /primaryAction:\s*\n\s*'Book a free trial'/
  );
  assert.match(
    pageContent,
    /secondaryAction:\s*\n\s*'Explore the curriculum'/
  );
  assert.match(
    pageSource,
    /primaryHref=\{\s*bookingHref\s*\}/
  );
  assert.match(
    pageSource,
    /secondaryHref="#math-curriculum"/
  );
});

test('MATH ARCHITECTURE: sitemap keeps one broad Math owner and no duplicate broad route exists', () => {
  assert.match(
    sitemapSource,
    /'\/subjects\/math'/
  );
  assert.equal(
    sitemapSource.includes("'/subjects/math-tutoring'"),
    false
  );
  assert.equal(
    duplicateBroadMathRoutes.some((path) => existsSync(path)),
    false
  );
});
