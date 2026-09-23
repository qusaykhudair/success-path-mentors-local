import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const homeFaqSource = readFileSync(
  `${root}src/components/sections/home/faq.tsx`,
  'utf8'
);
const enMessages = readFileSync(`${root}messages/en.json`, 'utf8');
const arMessages = readFileSync(`${root}messages/ar.json`, 'utf8');
const locationPageSource = readFileSync(
  `${root}src/app/[locale]/(catalog)/locations/[...segments]/page.tsx`,
  'utf8'
);
const locationContentSource = readFileSync(
  `${root}src/components/locations/location-page-content.tsx`,
  'utf8'
);
const locationSchemaSource = readFileSync(
  `${root}src/lib/locations/schemas.ts`,
  'utf8'
);
const localAvailabilitySource = readFileSync(
  `${root}src/components/local/local-availability-block.tsx`,
  'utf8'
);

const enLocalFaqQuestions = [
  'Do you provide online tutoring for students in Milton?',
  'Can students in Toronto book one-to-one online tutoring?',
  'Do you support the Ontario curriculum?',
  'Which grades and subjects do you support in Ontario?',
];

const arLocalFaqQuestions = [
  'هل تقدمون دروسًا خصوصية عبر الإنترنت للطلاب في ميلتون؟',
  'هل يمكن للطلاب في تورونتو حجز دروس خصوصية فردية عبر الإنترنت؟',
  'هل تدعمون منهج مقاطعة أونتاريو الدراسي؟',
  'ما هي الصفوف والمواد التي تدعمونها في أونتاريو؟',
];

test('PHASE 4.5 HOME FAQ PARITY: visible accordion and FAQPage schema use the same final items collection', () => {
  assert.match(homeFaqSource, /const rawItems = t\.raw\('items'\)/);
  assert.match(homeFaqSource, /const items = Array\.isArray\(rawItems\)/);
  assert.match(homeFaqSource, /mainEntity: items\.map\(/);
  assert.match(homeFaqSource, /<FaqAccordion items=\{items\} \/>/);
});

test('PHASE 4.5 LOCAL FAQ ALIGNMENT: English and Arabic retain the same four approved local FAQ intents', () => {
  for (const question of enLocalFaqQuestions) {
    assert.equal(
      enMessages.includes(question),
      true,
      `English FAQ should retain: ${question}`
    );
  }

  for (const question of arLocalFaqQuestions) {
    assert.equal(
      arMessages.includes(question),
      true,
      `Arabic FAQ should retain: ${question}`
    );
  }
});

test('PHASE 4.5 HAMILTON GATE: Hamilton remains an internal-authority/location owner signal, not a speculative homepage FAQ expansion', () => {
  assert.match(
    localAvailabilitySource,
    /routePath\.location\(siteLocale, 'canada', 'ontario', 'hamilton'\)/
  );
  assert.match(localAvailabilitySource, /name: 'Hamilton'/);
  assert.equal(
    enMessages.includes('Do you provide online tutoring for students in Hamilton?'),
    false
  );
  assert.equal(
    arMessages.includes('هل تقدمون دروسًا خصوصية عبر الإنترنت للطلاب في هاملتون؟'),
    false
  );
});

test('PHASE 4.5 LOCATION FAQ PARITY: visible location FAQs and location FAQPage schema both use page.faqs', () => {
  assert.match(locationContentSource, /page\.faqs\.map\(/);
  assert.match(locationSchemaSource, /mainEntity:\s*page\.faqs\.map\(/);
  assert.match(locationPageSource, /buildLocationPageSchemas\(\{\s*locale,\s*page,\s*childLocations,/s);
  assert.match(locationPageSource, /id="location-faq-schema"/);
  assert.match(locationPageSource, /data=\{schemas\.faq\}/);
});

test('PHASE 4.5 OWNER GUARDRAIL: no Hamilton city-subject/service doorway URL is introduced by the local authority block', () => {
  const forbiddenPatterns = [
    '/math-tutor-hamilton',
    '/hamilton/math',
    '/hamilton/chemistry',
    '/hamilton/french-tutor',
    '/hamilton/homework-help',
    '/hamilton/exam-preparation',
  ];

  for (const pattern of forbiddenPatterns) {
    assert.equal(
      localAvailabilitySource.includes(pattern),
      false,
      `local authority block must not introduce ${pattern}`
    );
  }
});
