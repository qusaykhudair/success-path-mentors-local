import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const routing = read('src/i18n/routing.ts');
const urls = read('src/lib/seo/urls.ts');
const sitemap = read('src/app/sitemap.ts');
const frenchMetadata = read('src/lib/programme-francais/metadata.ts');
const germanyPage = read('src/app/de/[[...marketSegments]]/page.tsx');

test('core North America locale routing remains EN/AR only', () => {
  assert.match(routing, /export const locales = \['en', 'ar'\] as const;/);
  assert.doesNotMatch(routing, /export const locales = \[[^\]]*'fr'/);
  assert.doesNotMatch(routing, /export const locales = \[[^\]]*'de'/);
});

test('core hreflang helper preserves regional EN/AR alternates and x-default', () => {
  assert.match(urls, /'en-CA': enUrl/);
  assert.match(urls, /'ar-CA': arUrl/);
  assert.match(urls, /'x-default': buildAbsoluteUrl/);
});

test('sitemap reuses the canonical core hreflang helper', () => {
  assert.match(sitemap, /buildLanguageAlternates\(\s*path\s*\)/);
});

test('English-only owners do not advertise a nonexistent Arabic equivalent', () => {
  assert.match(sitemap, /'en-CA': `\$\{SITE_URL\}\/en\$\{path\}`/);

  const englishOnlyBlock = sitemap.match(
    /const englishGapEntries =[\s\S]*?const ontarioCurriculumAlternates =/
  )?.[0] ?? '';

  assert.doesNotMatch(englishOnlyBlock, /'ar-CA'/);
});

test('French programme remains a standalone fr-CA namespace', () => {
  assert.match(frenchMetadata, /'fr-CA':\s*canonical/);
  assert.doesNotMatch(frenchMetadata, /'en-CA'/);
  assert.doesNotMatch(frenchMetadata, /'ar-CA'/);

  const frenchBlock = sitemap.match(
    /const frenchEntries =[\s\S]*?const germanyRootEntries =/
  )?.[0] ?? '';

  assert.match(frenchBlock, /'fr-CA'/);
  assert.doesNotMatch(frenchBlock, /'en-CA'/);
  assert.doesNotMatch(frenchBlock, /'ar-CA'/);
});

test('Germany retains its market-specific multilingual cluster', () => {
  assert.match(germanyPage, /'de-DE'/);
  assert.match(germanyPage, /'en-DE'/);
  assert.match(germanyPage, /'ar-DE'/);
  assert.match(germanyPage, /'x-default'/);
  assert.match(germanyPage, /getMarketLocalePath\('germany'/);
});

test('Phase 6.9 source does not introduce language-local doorway patterns', () => {
  const changedSource = [sitemap, frenchMetadata].join('\n');

  assert.doesNotMatch(
    changedSource,
    /\/(?:milton|hamilton|toronto)\/(?:ar|fr|de)\/(?:subjects|services|math|french|homework-help|exam-preparation)/i
  );
  assert.doesNotMatch(
    changedSource,
    /\/locations\/[^'"`\s]+\/(?:ar|fr|de)\/(?:subjects|services)\//i
  );
});
