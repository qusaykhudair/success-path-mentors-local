import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const component = read(
  'src/components/internal/authority-distribution-links.tsx'
);

const subjectPages = {
  math: read('src/app/[locale]/(catalog)/subjects/math/page.tsx'),
  english: read('src/app/[locale]/(catalog)/subjects/english/page.tsx'),
  science: read('src/app/[locale]/(catalog)/subjects/general-science/page.tsx'),
  chemistry: read('src/app/[locale]/(catalog)/subjects/chemistry/page.tsx'),
  physics: read('src/app/[locale]/(catalog)/subjects/physics/page.tsx'),
  french: read('src/app/[locale]/(catalog)/subjects/french/page.tsx'),
};

test('authority distribution links point to canonical service owners', () => {
  assert.match(component, /href: '\/en\/services\/homework-help'/);
  assert.match(component, /href: '\/en\/services\/exam-preparation'/);
  assert.match(component, /href: '\/en\/subjects\/general-science'/);
});

test('English-only service routes are not rendered on Arabic subject pages', () => {
  assert.match(component, /if \(locale !== 'en'\) \{\s*return null;/);
});

test('core subject pillars mount the authority distribution block', () => {
  assert.match(subjectPages.math, /context="math"/);
  assert.match(subjectPages.english, /context="english"/);
  assert.match(subjectPages.science, /context="general-science"/);
  assert.match(subjectPages.chemistry, /context="chemistry"/);
  assert.match(subjectPages.physics, /context="physics"/);
});

test('French owner distributes explicit service intent without creating a new route', () => {
  assert.match(subjectPages.french, /href: '\/en\/services\/homework-help'/);
  assert.match(subjectPages.french, /href: '\/en\/services\/exam-preparation'/);
  assert.match(subjectPages.french, /href: '\/en\/curriculum\/ontario'/);
});

test('Phase 6.8 changed subject files do not introduce city-service or city-course doorway destinations', () => {
  const changedSource = [component, ...Object.values(subjectPages)].join('\n');

  assert.doesNotMatch(
    changedSource,
    /\/locations\/[^'"\s]+\/(?:services|subjects)\//
  );
  assert.doesNotMatch(
    changedSource,
    /\/(?:milton|hamilton|toronto)\/(?:homework-help|exam-preparation|mhf4u|sch4u|sph4u)/i
  );
});

test('existing course and specialist authority blocks remain present', () => {
  assert.match(subjectPages.math, /OntarioCourseSupportBlock/);
  assert.match(subjectPages.chemistry, /OntarioCourseSupportBlock/);
  assert.match(subjectPages.physics, /OntarioCourseSupportBlock/);
  assert.match(subjectPages.science, /Chemistry Tutoring/);
  assert.match(subjectPages.science, /Physics Tutoring/);
});
