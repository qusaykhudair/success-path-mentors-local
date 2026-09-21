import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const {
  resolveMarketRoute,
  getMarketLocalePath,
  getMarketChildPath
} = load('src/lib/market-routing.ts');
const { getMarketSwitchPath } = load('src/lib/market-navigation.ts');

test('LAYOUT: Germany default routes resolve locale correctly', () => {
  assert.equal(resolveMarketRoute('germany', ['register']).language, 'de');
  assert.equal(resolveMarketRoute('germany', ['login']).language, 'de');
  assert.equal(resolveMarketRoute('germany', ['privacy']).language, 'de');
  assert.equal(resolveMarketRoute('germany', ['en', 'register']).language, 'en');
  assert.equal(resolveMarketRoute('germany', ['ar', 'register']).language, 'ar');
});

test('AUTH LINKS: German registration/login/home links contain NO /de/de', () => {
  assert.equal(getMarketLocalePath('germany', 'de'), '/de');
  assert.equal(getMarketChildPath('germany', 'de', ['register']), '/de/register');
  assert.equal(getMarketChildPath('germany', 'de', ['login']), '/de/login');
  assert.equal(getMarketChildPath('germany', 'en', ['register']), '/de/en/register');
  assert.equal(getMarketChildPath('germany', 'ar', ['register']), '/de/ar/register');
});

test('MARKET SWITCH: Germany market switch routes to /de', () => {
  assert.equal(getMarketSwitchPath('germany'), '/de');
});

test('GERMANY HOMEPAGE LINKS: rendered homepage components do not manually construct /de/de paths', () => {
  const files = [
    'src/components/germany/market-header.tsx',
    'src/components/germany/market-footer.tsx',
    'src/components/germany/choose-how-you-learn.tsx',
    'src/components/germany/what-to-learn.tsx',
    'src/components/germany/placement-assessment-section.tsx',
    'src/components/germany/why-spm.tsx',
    'src/components/germany/use-cases.tsx',
    'src/components/germany/teacher-quality.tsx',
    'src/components/germany/how-it-works.tsx',
    'src/components/germany/pricing-section.tsx',
    'src/components/germany/contact-section.tsx',
    'src/components/germany/germany-conversion-cta.tsx',
  ];

  for (const relativePath of files) {
    const source = readFileSync(`${root}${relativePath}`, 'utf8');
    assert.equal(source.includes('`/de/${locale}'), false, `${relativePath} manually builds /de/${locale}`);
    assert.equal(source.includes('`/de/${context.locale}'), false, `${relativePath} manually builds /de/${context.locale}`);
  }
});

test('GERMANY ROUTE HELPERS: canonical child paths preserve locale semantics', () => {
  assert.equal(getMarketChildPath('germany', 'de', ['tutoring', 'one-to-one']), '/de/tutoring/one-to-one');
  assert.equal(getMarketChildPath('germany', 'en', ['tutoring', 'one-to-one']), '/de/en/tutoring/one-to-one');
  assert.equal(getMarketChildPath('germany', 'ar', ['languages', 'english']), '/de/ar/languages/english');
});

test('METADATA URL generation keeps German canonical path unprefixed by a second locale', () => {
  const childPath = 'tutoring/one-to-one';
  const locale = 'de';
  const openGraphUrl = locale === 'de'
    ? `https://successpathmentors.net/de/${childPath}`
    : `https://successpathmentors.net/de/${locale}/${childPath}`;

  assert.equal(openGraphUrl, 'https://successpathmentors.net/de/tutoring/one-to-one');
  assert.equal(getMarketLocalePath('germany', 'de'), '/de');
});
