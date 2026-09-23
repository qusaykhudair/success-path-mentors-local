import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const aboutPageSource = readFileSync(
  `${root}src/app/[locale]/(marketing)/about/page.tsx`,
  'utf8'
);
const trustContentSource = readFileSync(
  `${root}src/content/pages/trust-transparency.ts`,
  'utf8'
);
const legalConfigSource = readFileSync(
  `${root}src/config/legal.ts`,
  'utf8'
);
const marketConfigSource = readFileSync(
  `${root}src/config/markets.ts`,
  'utf8'
);
const schemaSource = readFileSync(
  `${root}src/lib/seo/schemas.ts`,
  'utf8'
);


test('PHASE 6.6 LEGAL IDENTITY: legal fallback derives from the configured market organization instead of the public brand alone', () => {
  assert.match(
    marketConfigSource,
    /legalName:\s*'Commenda Inc\. operating as Success Path Mentors'/
  );
  assert.match(
    legalConfigSource,
    /getDefaultMarket\(\)\.organization\.legalName/
  );
  assert.match(
    legalConfigSource,
    /replace\(\/\\s\+operating as\\s\+\.\+\$\/i, ''\)/
  );
  assert.match(
    legalConfigSource,
    /configuredLegalEntityName \|\|\s*siteConfig\.organizationName/
  );
});


test('PHASE 6.6 ABOUT TRUST LAYER: visible About content exposes verified identity and trust pathways', () => {
  assert.match(
    aboutPageSource,
    /getDefaultMarket\(\)\.organization\.legalName/
  );
  assert.match(
    aboutPageSource,
    /id="trust-transparency"/
  );

  for (const routeCall of [
    'routePath.howItWorks(locale)',
    'routePath.contact(locale)',
    'routePath.terms(locale)',
    'routePath.privacy(locale)',
  ]) {
    assert.equal(
      aboutPageSource.includes(routeCall),
      true,
      `About trust layer should link through ${routeCall}`
    );
  }

  assert.equal(
    aboutPageSource.includes('operated by Success Path Mentors'),
    false,
    'The live About page must not repeat the tautological operating statement.'
  );
});


test('PHASE 6.6 CLAIM SAFETY: trust copy avoids unsupported credential, review and outcome assertions', () => {
  const forbiddenClaims = [
    'background checked',
    'certified tutors',
    'licensed tutors',
    'guaranteed grade',
    'guaranteed results',
    'five-star',
    '5-star',
    'trusted by thousands',
  ];

  const normalized = trustContentSource.toLowerCase();

  for (const claim of forbiddenClaims) {
    assert.equal(
      normalized.includes(claim),
      false,
      `trust copy must not introduce unsupported claim: ${claim}`
    );
  }
});


test('PHASE 6.6 SCHEMA GUARDRAIL: reuse the existing organization entity and do not add review/rating schema without provenance', () => {
  assert.match(
    schemaSource,
    /`\$\{siteConfig\.url\}\/\#organization`/
  );
  assert.equal(
    aboutPageSource.includes('AggregateRating'),
    false
  );
  assert.equal(
    aboutPageSource.includes("'Review'"),
    false
  );
});
