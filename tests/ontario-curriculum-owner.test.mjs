import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const {
  isOntarioCurriculumLocationSegments,
  routePath,
} = load('src/config/routes.ts');

const ontarioSegments = [
  'canada',
  'ontario',
  'curriculum',
];

test('ONTARIO OWNER: English location links resolve to the dedicated curriculum owner', () => {
  assert.equal(
    isOntarioCurriculumLocationSegments(
      ontarioSegments
    ),
    true
  );
  assert.equal(
    routePath.location(
      'en',
      ...ontarioSegments
    ),
    '/en/curriculum/ontario'
  );
  assert.equal(
    routePath.ontarioCurriculum('en'),
    '/en/curriculum/ontario'
  );
});

test('ONTARIO OWNER: Arabic keeps its existing localized location owner', () => {
  assert.equal(
    routePath.location(
      'ar',
      ...ontarioSegments
    ),
    '/ar/المواقع/canada/ontario/curriculum'
  );
  assert.equal(
    routePath.ontarioCurriculum('ar'),
    '/ar/المواقع/canada/ontario/curriculum'
  );
});

test('ONTARIO LEGACY: English location page permanently redirects while Arabic is not redirected', () => {
  const source = readFileSync(
    `${root}src/app/[locale]/(catalog)/locations/[...segments]/page.tsx`,
    'utf8'
  );

  assert.match(
    source,
    /locale === 'en'[\s\S]*isOntarioCurriculumLocationSegments[\s\S]*permanentRedirect/
  );
  assert.match(
    source,
    /routePath\.ontarioCurriculum/
  );
});

test('ONTARIO LIVE ROUTING: proxy enforces the production legacy redirect and preserves query strings', () => {
  const source = readFileSync(
    `${root}src/proxy.ts`,
    'utf8'
  );

  assert.match(
    source,
    /pathname === '\/en\/locations\/canada\/ontario\/curriculum'/
  );
  assert.match(
    source,
    /'\/en\/curriculum\/ontario' \+ request\.nextUrl\.search/
  );
  assert.match(
    source,
    /NextResponse\.redirect\(destinationUrl, 301\)/
  );
});

test('ONTARIO SITEMAP: duplicate English location owner is excluded and locale-specific owners are explicit', () => {
  const source = readFileSync(
    `${root}src/app/sitemap.ts`,
    'utf8'
  );

  assert.match(
    source,
    /!isOntarioCurriculumLocationSegments/
  );
  assert.match(
    source,
    /ontarioCurriculumEntries/
  );
  assert.match(
    source,
    /'en-CA'/
  );
  assert.match(
    source,
    /'ar-CA'/
  );
  assert.equal(
    source.includes("  '/curriculum/ontario',"),
    false
  );
});

test('ONTARIO HREFLANG: dedicated English owner points to the real Arabic counterpart', () => {
  const source = readFileSync(
    `${root}src/app/[locale]/(marketing)/curriculum/ontario/page.tsx`,
    'utf8'
  );

  assert.match(
    source,
    /'ar-CA': arabicUrl/
  );
  assert.match(
    source,
    /routePath\.ontarioCurriculum\('ar'\)/
  );
  assert.equal(
    source.includes('/ar/curriculum/ontario'),
    false
  );
});
