import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const blockSource = readFileSync(
  `${root}src/components/local/local-availability-block.tsx`,
  'utf8'
);

const authoritySurfacePaths = [
  'src/components/sections/home/home-page-content.tsx',
  'src/app/[locale]/(catalog)/subjects/math/page.tsx',
  'src/app/[locale]/(catalog)/subjects/english/page.tsx',
  'src/app/[locale]/(catalog)/subjects/french/page.tsx',
  'src/app/[locale]/(catalog)/subjects/general-science/page.tsx',
  'src/app/[locale]/(catalog)/subjects/chemistry/page.tsx',
  'src/app/[locale]/(catalog)/subjects/physics/page.tsx',
];

const authoritySources = authoritySurfacePaths.map((path) => ({
  path,
  source: readFileSync(`${root}${path}`, 'utf8'),
}));

test('PHASE 4.3 HAMILTON: shared local block links the existing Hamilton owner through route helpers', () => {
  assert.match(
    blockSource,
    /routePath\.location\(siteLocale, 'canada', 'ontario', 'hamilton'\)/
  );
  assert.match(blockSource, /name: 'Hamilton'/);
  assert.match(blockSource, /online tutoring in Hamilton/);
  assert.match(blockSource, /name: 'هاملتون'/);
});

test('PHASE 4.3 PRESERVE: Ontario, Milton, Toronto and curriculum owner links remain present', () => {
  assert.match(
    blockSource,
    /routePath\.location\(siteLocale, 'canada', 'ontario'\)/
  );
  assert.match(
    blockSource,
    /routePath\.location\(siteLocale, 'canada', 'ontario', 'milton'\)/
  );
  assert.match(
    blockSource,
    /routePath\.location\(siteLocale, 'canada', 'ontario', 'toronto'\)/
  );
  assert.match(
    blockSource,
    /routePath\.location\(siteLocale, 'canada', 'ontario', 'curriculum'\)/
  );
});

test('PHASE 4.3 AUTHORITY SURFACES: homepage and priority subject owners mount the shared local block', () => {
  for (const { path, source } of authoritySources) {
    assert.match(
      source,
      /LocalAvailabilityBlock/,
      `${path} should keep the shared LocalAvailabilityBlock`
    );
  }
});

test('PHASE 4.3 CANNIBALIZATION: no city-subject doorway pattern is introduced', () => {
  const forbiddenPatterns = [
    '/math-tutor-hamilton',
    '/hamilton/math',
    '/hamilton/chemistry',
    '/hamilton/french-tutor',
    '/hamilton/homework-help',
  ];

  for (const pattern of forbiddenPatterns) {
    assert.equal(
      blockSource.includes(pattern),
      false,
      `shared local block must not introduce ${pattern}`
    );
  }
});

test('PHASE 4.3 LAYOUT: four local owner cards use a four-column desktop grid', () => {
  assert.match(
    blockSource,
    /sm:grid-cols-2 xl:grid-cols-4/
  );
});
