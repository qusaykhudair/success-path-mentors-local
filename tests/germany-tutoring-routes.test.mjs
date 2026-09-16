import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { TUTORING_PAGES, getTutoringPage, getAllTutoringSlugs, CEFR_DISCLAIMER } = load(
  'src/content/germany-tutoring/pages.ts'
);

const notFoundError = new Error('NOT_FOUND');
const navigation = {
  notFound: () => {
    throw notFoundError;
  },
  redirect: (path) => {
    throw Object.assign(new Error('REDIRECT'), { path });
  },
};

const boundaryLoad = createLoader(root, { 'next/navigation': navigation });
const { default: MarketPage, generateMetadata } = boundaryLoad(
  'src/app/de/[[...marketSegments]]/page.tsx'
);

test('TUTORING_PAGES registry contains all 11 required pages across de, en, ar', () => {
  const expectedSlugs = [
    'tutoring/one-to-one',
    'tutoring/small-groups',
    'tutoring/language-levels',
    'languages/english',
    'languages/german',
    'languages/french',
    'languages/arabic',
    'school/grades-1-6',
    'school/grades-7-9',
    'school/grades-10-12',
    'adults',
  ];

  const slugs = getAllTutoringSlugs();
  assert.equal(slugs.length, 11);

  for (const slug of expectedSlugs) {
    assert.ok(slugs.includes(slug), `Missing slug in registry: ${slug}`);
    for (const loc of ['de', 'en', 'ar']) {
      const page = getTutoringPage(slug, loc);
      assert.ok(page, `Missing page data for slug "${slug}" and locale "${loc}"`);
      assert.ok(page.hero.title, `Missing hero.title for ${slug} in ${loc}`);
      assert.ok(page.hero.headline, `Missing hero.headline for ${slug} in ${loc}`);
      assert.ok(page.hero.subheadline, `Missing hero.subheadline for ${slug} in ${loc}`);
      assert.ok(page.seo.title, `Missing seo.title for ${slug} in ${loc}`);
      assert.ok(page.seo.description, `Missing seo.description for ${slug} in ${loc}`);
      assert.ok(page.highlights.length >= 4, `Expected at least 4 highlights for ${slug} in ${loc}`);
      assert.ok(page.curriculumPillars.length >= 2, `Expected at least 2 curriculum pillars for ${slug} in ${loc}`);
      assert.ok(page.faqs.length >= 2, `Expected at least 2 FAQs for ${slug} in ${loc}`);
    }
  }
});

test('Strict Business Positioning & Anti-Accreditation Guardrails', () => {
  // Check CEFR Disclaimers exist in all 3 languages
  assert.ok(CEFR_DISCLAIMER.en.includes('Success Path Mentors uses CEFR levels as a reference'));
  assert.ok(CEFR_DISCLAIMER.en.includes('We do not issue official CEFR certificates or accredited language qualifications'));
  assert.ok(CEFR_DISCLAIMER.de.includes('ausschließlich als Orientierungsmaßstab'));
  assert.ok(CEFR_DISCLAIMER.de.includes('Wir stellen keine offiziellen GER-Zertifikate'));
  assert.ok(CEFR_DISCLAIMER.ar.includes('كمرجع تقريبي'));
  assert.ok(CEFR_DISCLAIMER.ar.includes('نحن لا نصدر شهادات لغة رسمية'));

  // Ensure Small Groups are strictly "up to 3"
  for (const loc of ['de', 'en', 'ar']) {
    const smallGroups = getTutoringPage('tutoring/small-groups', loc);
    assert.ok(smallGroups);
    const contentString = JSON.stringify(smallGroups);
    assert.ok(
      contentString.includes('3') || contentString.includes('٣'),
      `Small groups must emphasize up to 3 learners in ${loc}`
    );
    // Disallow claims of accredited diplomas or official certificates
    assert.ok(!contentString.includes('accredited diploma'));
    assert.ok(!contentString.includes('official certificate program'));
  }

  // School Grade Ranges must be non-overlapping 1–6, 7–9, 10–12
  const school1to6 = getTutoringPage('school/grades-1-6', 'en');
  const school7to9 = getTutoringPage('school/grades-7-9', 'en');
  const school10to12 = getTutoringPage('school/grades-10-12', 'en');

  assert.equal(school1to6.serviceId, 'grades-1-6');
  assert.equal(school7to9.serviceId, 'grades-7-9');
  assert.equal(school10to12.serviceId, 'grades-10-12');

  assert.ok(school1to6.hero.title.includes('Grades 1–6'));
  assert.ok(school7to9.hero.title.includes('Grades 7–9'));
  assert.ok(school10to12.hero.title.includes('Grades 10–12'));
});

test('Germany router renders all 11 tutoring pages and free-trial alias', async () => {
  const routesToTest = [
    { segments: ['tutoring', 'one-to-one'], id: 'one-to-one' },
    { segments: ['tutoring', 'small-groups'], id: 'small-groups' },
    { segments: ['tutoring', 'language-levels'], id: 'language-levels' },
    { segments: ['languages', 'english'], id: 'english' },
    { segments: ['languages', 'german'], id: 'german' },
    { segments: ['languages', 'french'], id: 'french' },
    { segments: ['languages', 'arabic'], id: 'arabic' },
    { segments: ['school', 'grades-1-6'], id: 'grades-1-6' },
    { segments: ['school', 'grades-7-9'], id: 'grades-7-9' },
    { segments: ['school', 'grades-10-12'], id: 'grades-10-12' },
    { segments: ['adults'], id: 'adults' },
  ];

  for (const locale of ['de', 'en', 'ar']) {
    for (const r of routesToTest) {
      const pageResult = await MarketPage({
        params: Promise.resolve({ marketSegments: [locale, ...r.segments] }),
      });
      assert.ok(pageResult, `Expected ${locale}/${r.segments.join('/')} to render successfully`);
    }

    // Free trial alias
    const freeTrialResult = await MarketPage({
      params: Promise.resolve({ marketSegments: [locale, 'free-trial'] }),
    });
    assert.ok(freeTrialResult, `Expected /${locale}/free-trial to render`);
  }
});

test('Germany generateMetadata returns accurate SEO metadata for tutoring routes', async () => {
  const metaDe = await generateMetadata({
    params: Promise.resolve({ marketSegments: ['de', 'languages', 'german'] }),
  });
  assert.ok(metaDe.title?.includes('Deutschnachhilfe'));
  assert.ok(metaDe.description);
  assert.equal(metaDe.alternates?.canonical, 'https://successpathmentors.net/de/de/languages/german');

  const metaEn = await generateMetadata({
    params: Promise.resolve({ marketSegments: ['en', 'tutoring', 'one-to-one'] }),
  });
  assert.ok(metaEn.title?.includes('One-to-One Tutoring'));
  assert.equal(metaEn.alternates?.canonical, 'https://successpathmentors.net/de/en/tutoring/one-to-one');

  const metaAr = await generateMetadata({
    params: Promise.resolve({ marketSegments: ['ar', 'school', 'grades-1-6'] }),
  });
  assert.ok(metaAr.title?.includes('المرحلة الابتدائية'));
  assert.equal(metaAr.alternates?.canonical, 'https://successpathmentors.net/de/ar/school/grades-1-6');
});
