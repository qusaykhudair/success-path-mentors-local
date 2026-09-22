import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageSource = readFileSync(
  `${root}src/app/[locale]/(marketing)/services/homework-help/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

const duplicateHomeworkRoutes = [
  `${root}src/app/[locale]/(marketing)/homework-help/page.tsx`,
  `${root}src/app/[locale]/(marketing)/services/homework-tutoring/page.tsx`,
];

test('HOMEWORK HELP OWNER: canonical service page owns Canada Grades 1–12 homework-help intent', () => {
  assert.match(
    pageSource,
    /Online Homework Help Canada \\| Grades 1–12 Tutoring/
  );
  assert.match(
    pageSource,
    /Online Homework Help for Grades 1–12 Students in Canada/
  );
  assert.match(
    pageSource,
    /1-on-1 Online Homework Help in Canada/
  );
  assert.match(
    pageSource,
    /assignment guidance, concept clarification, and practical study routines/
  );
});

test('HOMEWORK HELP CONVERSION: free trial is primary and student responsibility remains explicit', () => {
  assert.match(
    pageSource,
    /primaryAction:\s*\n\s*'Book a Free Trial Session'/
  );
  assert.match(
    pageSource,
    /student remains responsible for completing and submitting their own work/
  );
  assert.equal(
    pageSource.includes('Stress-Free Evenings'),
    false
  );
  assert.equal(
    pageSource.includes('guaranteed grade'),
    false
  );
});

test('HOMEWORK HELP ARCHITECTURE: sitemap keeps the canonical owner and no competing broad route exists', () => {
  assert.match(
    sitemapSource,
    /'\/services\/homework-help'/
  );
  assert.equal(
    duplicateHomeworkRoutes.some((path) => existsSync(path)),
    false
  );
});

test('HOMEWORK HELP INTERNAL LINKS: curriculum, priority subjects, and exam preparation are connected', () => {
  assert.match(pageSource, /href: '\/curriculum\/ontario'/);
  assert.match(pageSource, /href: '\/subjects\/math'/);
  assert.match(pageSource, /href: '\/subjects\/english'/);
  assert.match(pageSource, /href: '\/subjects\/general-science'/);
  assert.match(pageSource, /href: '\/services\/exam-preparation'/);
});

test('HOMEWORK HELP SCHEMA: service proposition remains Canada-focused and aligned with visible copy', () => {
  assert.match(
    pageSource,
    /serviceType: 'Online Homework Help Tutoring'/
  );
  assert.match(
    pageSource,
    /name: 'Canada'/
  );
});
