import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const componentSource = readFileSync(
  `${root}src/components/subjects/ontario-course-support-block.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(`${root}src/app/sitemap.ts`, 'utf8');

const subjectHubPaths = [
  'src/app/[locale]/(catalog)/subjects/math/page.tsx',
  'src/app/[locale]/(catalog)/subjects/chemistry/page.tsx',
  'src/app/[locale]/(catalog)/subjects/physics/page.tsx',
];

const subjectHubSources = subjectHubPaths.map((path) => ({
  path,
  source: readFileSync(`${root}${path}`, 'utf8'),
}));

const courseOwners = [
  'math/grade-9-math-mth1w',
  'math/grade-10-math-mpm2d',
  'math/grade-11-functions-mcr3u',
  'math/grade-12-advanced-functions-mhf4u',
  'math/grade-12-calculus-vectors-mcv4u',
  'math/grade-12-data-management-mdm4u',
  'chemistry/senior-chemistry-sch3u-sch4u',
  'physics/senior-physics-sph3u-sph4u',
];

test('PHASE 4.4 OWNERS: existing Ontario course owners are surfaced through the reusable block', () => {
  for (const owner of courseOwners) {
    assert.match(componentSource, new RegExp(owner.replaceAll('/', '\\/')));
  }

  for (const code of ['MTH1W', 'MPM2D', 'MCR3U', 'MHF4U', 'MCV4U', 'MDM4U', 'SCH3U / SCH4U', 'SPH3U / SPH4U']) {
    assert.ok(componentSource.includes(code), `missing course code ${code}`);
  }
});

test('PHASE 4.4 HUBS: Math, Chemistry and Physics mount the course-support block', () => {
  for (const { path, source } of subjectHubSources) {
    assert.match(source, /OntarioCourseSupportBlock/, `${path} must import or mount OntarioCourseSupportBlock`);
  }

  assert.match(subjectHubSources[0].source, /subject="math"/);
  assert.match(subjectHubSources[1].source, /subject="chemistry"/);
  assert.match(subjectHubSources[2].source, /subject="physics"/);
});

test('PHASE 4.4 SITEMAP: all dedicated course owners remain indexable English-only gap paths', () => {
  for (const owner of courseOwners) {
    assert.ok(
      sitemapSource.includes(`'/subjects/${owner}'`),
      `sitemap must retain /subjects/${owner}`
    );
  }
});

test('PHASE 4.4 LOCALE: course discovery block stays English-only while owners are English-only', () => {
  assert.match(componentSource, /if \(locale !== 'en'\) \{/);
  assert.match(componentSource, /return null;/);
});

test('PHASE 4.4 CANNIBALIZATION: no city-course doorway routes are introduced', () => {
  const forbiddenRoutes = [
    'src/app/[locale]/(catalog)/locations/canada/ontario/hamilton/mhf4u/page.tsx',
    'src/app/[locale]/(catalog)/locations/canada/ontario/milton/mhf4u/page.tsx',
    'src/app/[locale]/(catalog)/locations/canada/ontario/toronto/mhf4u/page.tsx',
    'src/app/[locale]/(marketing)/hamilton-mhf4u/page.tsx',
    'src/app/[locale]/(marketing)/milton-mhf4u/page.tsx',
    'src/app/[locale]/(marketing)/toronto-mhf4u/page.tsx',
  ];

  assert.equal(forbiddenRoutes.some((path) => existsSync(`${root}${path}`)), false);
});
