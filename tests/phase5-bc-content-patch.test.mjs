import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const { applyLocationContentPatch } = load(
  'src/content/locations/location-content-patches.ts'
);

function pageFixture(id = 'british-columbia') {
  return {
    id,
    curriculumDescription: 'Generic curriculum description',
    curriculumPoints: ['Generic point'],
    assessmentsDescription: 'Generic assessment description',
    resources: [
      {
        name: 'Existing resource',
        description: 'Existing resource description',
        url: 'https://example.com/existing',
        type: 'education-authority',
      },
    ],
    reviewedAt: '2026-01-01',
  };
}

test('Phase 5.6 - patches only the English British Columbia owner', () => {
  const bc = pageFixture();
  const patched = applyLocationContentPatch(bc, 'en');

  assert.notStrictEqual(patched, bc);
  assert.match(patched.curriculumDescription, /Know–Do–Understand/);
  assert.deepEqual(patched.curriculumPoints, [
    'Big Ideas — the concepts and principles students are expected to understand',
    'Curricular Competencies — the skills, strategies and processes students develop',
    'Content — the subject knowledge and topics students are expected to know',
    'Core Competencies, literacy and numeracy foundations are central to B.C.’s K–12 curriculum',
  ]);
  assert.match(patched.assessmentsDescription, /Numeracy 10/);
  assert.match(patched.assessmentsDescription, /Literacy 10/);
  assert.match(patched.assessmentsDescription, /Literacy 12/);
  assert.equal(patched.reviewedAt, '2026-09-23');

  const urls = patched.resources.map((resource) => resource.url);
  assert.ok(urls.includes('https://curriculum.gov.bc.ca/curriculum/overview'));
  assert.ok(
    urls.includes(
      'https://www2.gov.bc.ca/gov/content/education-training/k-12/administration/program-management/assessment/graduation'
    )
  );
  assert.ok(urls.includes('https://example.com/existing'));
});

test('Phase 5.6 - leaves Arabic BC and unrelated owners unchanged', () => {
  const bcArabic = pageFixture();
  const ontarioEnglish = pageFixture('ontario');

  assert.strictEqual(applyLocationContentPatch(bcArabic, 'ar'), bcArabic);
  assert.strictEqual(applyLocationContentPatch(ontarioEnglish, 'en'), ontarioEnglish);
});

test('Phase 5.6 - location resolver applies the patch after resource enrichment', () => {
  const resolverSource = readFileSync(
    path.join(root, 'src/lib/locations/get-location-page.ts'),
    'utf8'
  );

  assert.match(
    resolverSource,
    /applyLocationContentPatch\(\s*withEducationResources\(page, locale\),\s*locale\s*\)/
  );
  assert.match(resolverSource, /return finalizeLocationPage\(/);
});
