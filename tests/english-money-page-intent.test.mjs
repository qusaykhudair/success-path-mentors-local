import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageContent = readFileSync(
  `${root}src/content/subjects/english/english-page-content.ts`,
  'utf8'
);
const pageSource = readFileSync(
  `${root}src/app/[locale]/(catalog)/subjects/english/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

const duplicateBroadEnglishRoutes = [
  `${root}src/app/[locale]/(catalog)/subjects/english-tutoring/page.tsx`,
  `${root}src/app/[locale]/(catalog)/english-tutoring/page.tsx`,
];

test('ENGLISH OWNER: canonical English page owns broad Canada tutoring intent with verified Grades 1–12 scope', () => {
  assert.match(
    pageContent,
    /Online English Tutoring in Canada \\| Grades 1–12/
  );
  assert.match(
    pageContent,
    /Online English Tutoring for Grades 1–12/
  );
  assert.match(
    pageContent,
    /Ontario curriculum support/
  );
});

test('ENGLISH CONVERSION: free trial is the primary hero action and strand exploration remains available', () => {
  assert.match(
    pageContent,
    /primaryAction:\s*\n\s*'Book a free trial'/
  );
  assert.match(
    pageContent,
    /secondaryAction:\s*\n\s*'Explore English strands'/
  );
  assert.match(
    pageSource,
    /primaryHref=\{bookingHref\}/
  );
  assert.match(
    pageSource,
    /secondaryHref="#english-strands"/
  );
});

test('ENGLISH ARCHITECTURE: sitemap keeps one broad English owner and no duplicate broad route exists', () => {
  assert.match(
    sitemapSource,
    /'\/subjects\/english'/
  );
  assert.equal(
    sitemapSource.includes("'/subjects/english-tutoring'"),
    false
  );
  assert.equal(
    duplicateBroadEnglishRoutes.some((path) => existsSync(path)),
    false
  );
});
