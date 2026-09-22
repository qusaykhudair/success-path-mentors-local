import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const pageContent = readFileSync(
  `${root}src/content/subjects/general-science/general-science-page-content.ts`,
  'utf8'
);
const pageSource = readFileSync(
  `${root}src/app/[locale]/(catalog)/subjects/general-science/page.tsx`,
  'utf8'
);
const sitemapSource = readFileSync(
  `${root}src/app/sitemap.ts`,
  'utf8'
);

test('SCIENCE OWNER: General Science owns broad online science tutoring intent for verified Grades 5–12 coverage', () => {
  assert.match(
    pageContent,
    /Online Science Tutoring Grades 5–12 \| General Science/
  );
  assert.match(
    pageContent,
    /Online Science Tutoring for Grades 5–12/
  );
  assert.equal(
    pageContent.includes('Online Science Tutoring Grades 5–10'),
    false
  );
});

test('SCIENCE CLUSTER: broad owner links to dedicated Chemistry and Physics owners', () => {
  assert.match(
    pageSource,
    /routePath\.subject\([\s\S]*'chemistry'/
  );
  assert.match(
    pageSource,
    /routePath\.subject\([\s\S]*'physics'/
  );
  assert.match(
    pageSource,
    /Chemistry Tutoring/
  );
  assert.match(
    pageSource,
    /Physics Tutoring/
  );
});

test('SCIENCE SITEMAP: canonical General Science, Chemistry and Physics owners remain explicit with no duplicate broad /subjects/science route', () => {
  assert.match(
    sitemapSource,
    /'\/subjects\/general-science'/
  );
  assert.match(
    sitemapSource,
    /'\/subjects\/chemistry'/
  );
  assert.match(
    sitemapSource,
    /'\/subjects\/physics'/
  );
  assert.equal(
    sitemapSource.includes("'/subjects/science'"),
    false
  );
});
