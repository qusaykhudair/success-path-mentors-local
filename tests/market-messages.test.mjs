import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const { getMarketMessages } = load('src/lib/market-messages.ts');
const { getMarketLanguageDirection } = load('src/lib/market-routing.ts');
const routing = load('src/i18n/routing.ts');
const siteConfig = load('src/config/site.ts');

function getKeysDeep(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return [...acc, ...getKeysDeep(obj[key], path)];
    }
    return [...acc, path];
  }, []);
}

test('Germany messages load successfully for supported languages', async () => {
  const de = await getMarketMessages('germany', 'de');
  const en = await getMarketMessages('germany', 'en');
  const ar = await getMarketMessages('germany', 'ar');

  assert.equal(de.hero.entryQuestion, 'Wobei brauchst du Hilfe?');
  assert.equal(en.hero.entryQuestion, 'What would you like help with?');
  assert.equal(ar.hero.entryQuestion, 'بم تود أن نساعدك؟');
});

test('Schema and key parity across Germany DE, EN, and AR dictionaries', () => {
  const deJson = JSON.parse(readFileSync(new URL('../messages/markets/germany/de.json', import.meta.url), 'utf-8'));
  const enJson = JSON.parse(readFileSync(new URL('../messages/markets/germany/en.json', import.meta.url), 'utf-8'));
  const arJson = JSON.parse(readFileSync(new URL('../messages/markets/germany/ar.json', import.meta.url), 'utf-8'));

  const deKeys = getKeysDeep(deJson).sort();
  const enKeys = getKeysDeep(enJson).sort();
  const arKeys = getKeysDeep(arJson).sort();

  assert.deepEqual(deKeys, enKeys, 'DE keys do not match EN keys');
  assert.deepEqual(arKeys, enKeys, 'AR keys do not match EN keys');
});

test('Directionality helpers return expected values', () => {
  assert.equal(getMarketLanguageDirection('ar'), 'rtl');
  assert.equal(getMarketLanguageDirection('de'), 'ltr');
  assert.equal(getMarketLanguageDirection('en'), 'ltr');
});

test('Unsupported Germany languages throw deterministically', async () => {
  await assert.rejects(getMarketMessages('germany', 'fr'), /Unsupported language 'fr' for market 'germany'/);
});

test('Global routing locales remain strictly en and ar', () => {
  assert.deepEqual(routing.locales, ['en', 'ar']);
  assert.equal(routing.defaultLocale, 'en');
});

test('Global isSupportedLocale does not allow Germany UI languages to leak into global', () => {
  assert.equal(siteConfig.isSupportedLocale('de'), false);
  assert.equal(siteConfig.isSupportedLocale('en'), true);
  assert.equal(siteConfig.isSupportedLocale('ar'), true);
});
