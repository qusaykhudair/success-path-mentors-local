import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageSource = readFileSync(
  `${root}src/app/[locale]/(marketing)/services/exam-preparation/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

const duplicateExamPrepRoutes = [
  `${root}src/app/[locale]/(marketing)/exam-preparation/page.tsx`,
  `${root}src/app/[locale]/(marketing)/services/exam-prep/page.tsx`,
];

test('EXAM PREP OWNER: canonical service page owns Ontario high-school exam preparation intent', () => {
  assert.match(
    pageSource,
    /Exam Prep Tutoring Ontario \\| High School Exams/
  );
  assert.match(
    pageSource,
    /Online Exam Preparation Tutoring for Ontario High School Students/
  );
  assert.match(
    pageSource,
    /midterms, final exams, and culminating tasks/
  );
  assert.match(
    pageSource,
    /Exam-Style Practice/
  );
});

test('EXAM PREP CONVERSION: free trial remains primary and unsupported outcome language is removed from the page override', () => {
  assert.match(
    pageSource,
    /primaryAction:\s*\n\s*'Book a Free Trial Session'/
  );
  assert.equal(
    pageSource.includes('eliminate test anxiety'),
    false
  );
  assert.equal(
    pageSource.includes('Proven 4-Phase'),
    false
  );
  assert.equal(
    pageSource.includes('20% to 30%'),
    false
  );
});

test('EXAM PREP ARCHITECTURE: sitemap keeps the canonical owner and no new competing route is introduced', () => {
  assert.match(
    sitemapSource,
    /'\/services\/exam-preparation'/
  );
  assert.equal(
    duplicateExamPrepRoutes.some((path) => existsSync(path)),
    false
  );
});

test('EXAM PREP INTERNAL LINKS: Ontario curriculum and priority subject hubs are connected', () => {
  assert.match(pageSource, /href: '\/curriculum\/ontario'/);
  assert.match(pageSource, /href: '\/subjects\/math'/);
  assert.match(pageSource, /href: '\/subjects\/general-science'/);
  assert.match(pageSource, /href: '\/services\/homework-help'/);
});
