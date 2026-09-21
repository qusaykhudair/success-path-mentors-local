import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { toAuthApiLocale } = load('src/features/auth/auth-contracts.ts');
const { getAuthCopy, authCopy } = load('src/features/auth/auth-copy.ts');
const {
  getRegistrationCountries,
  getRegistrationTimezone,
  getRegistrationTimezones,
  getRegistrationOptions
} = load('src/features/auth/registration-options.ts');
const markets = load('src/config/markets.ts');
const routing = load('src/lib/market-routing.ts');

const notFoundError = new Error('NOT_FOUND');
const navigation = {
  notFound: () => { throw notFoundError; },
  redirect: (path) => { throw Object.assign(new Error('REDIRECT'), { path }); },
};

test('toAuthApiLocale maps UI locales cleanly to backend supported API locales', () => {
  assert.equal(toAuthApiLocale('de'), 'en');
  assert.equal(toAuthApiLocale('en'), 'en');
  assert.equal(toAuthApiLocale('ar'), 'ar');
});

test('authCopy contains complete German (de) copy with full parity', () => {
  assert.ok(authCopy.de, 'authCopy.de must exist');
  assert.ok(authCopy.en, 'authCopy.en must exist');
  assert.ok(authCopy.ar, 'authCopy.ar must exist');

  const deCopy = getAuthCopy('de');
  assert.equal(deCopy.login.title, 'Willkommen zurück');
  assert.equal(deCopy.login.requestCode, 'Sicherheitscode senden');
  assert.equal(deCopy.register.title, 'Familienkonto erstellen');
  assert.equal(deCopy.common.backHome, 'Zurück zur Website');

  function compareKeys(objA, objB, prefix = '') {
    const keysA = Object.keys(objA).sort();
    const keysB = Object.keys(objB).sort();
    assert.deepEqual(keysA, keysB, `Key mismatch at ${prefix}`);
    for (const key of keysA) {
      if (typeof objA[key] === 'object' && objA[key] !== null) {
        compareKeys(objA[key], objB[key], `${prefix}.${key}`);
      }
    }
  }

  compareKeys(authCopy.en, authCopy.de, 'authCopy.de');
});

test('market-aware registration options provide Germany defaults while preserving North America', () => {
  const germanyConfig = markets.getMarketConfig('germany');
  const naConfig = markets.getMarketConfig('north-america');

  const naCountries = getRegistrationCountries(naConfig);
  assert.equal(naCountries[0][0], 'Canada');
  assert.equal(getRegistrationTimezone(() => '', naConfig), 'America/Toronto');

  assert.deepEqual(getRegistrationCountries(), naCountries);
  assert.equal(getRegistrationTimezone(() => ''), 'America/Toronto');

  const deCountries = getRegistrationCountries(germanyConfig, 'de');
  assert.equal(deCountries[0][0], 'Germany');
  assert.equal(deCountries[0][1], 'Deutschland');

  const deCountriesAr = getRegistrationCountries(germanyConfig, 'ar');
  assert.equal(deCountriesAr[0][0], 'Germany');
  assert.equal(deCountriesAr[0][1], 'ألمانيا');

  assert.equal(getRegistrationTimezone(germanyConfig, () => ''), 'Europe/Berlin');

  const deOptions = getRegistrationOptions(germanyConfig, 'Europe/Berlin');
  assert.equal(deOptions.marketId, 'germany');
  assert.equal(deOptions.defaultCountry, 'Germany');
  assert.equal(deOptions.defaultTimezone, 'Europe/Berlin');
  assert.ok(deOptions.availableTimezones.includes('Europe/Berlin'));
});

test('Germany child routing serves login and register while rejecting invalid child paths and invalid /de/fr', async () => {
  const boundaryLoad = createLoader(root, { 'next/navigation': navigation });
  const page = boundaryLoad('src/app/de/[[...marketSegments]]/page.tsx').default;

  for (const lang of ['de', 'en', 'ar']) {
    const loginPage = await page({ params: Promise.resolve({ marketSegments: [lang, 'login'] }) });
    assert.ok(loginPage, `Expected login page to render for ${lang}`);

    const registerPage = await page({ params: Promise.resolve({ marketSegments: [lang, 'register'] }) });
    assert.ok(registerPage, `Expected register page to render for ${lang}`);
  }

  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['fr', 'login'] }) }), (err) => err === notFoundError);
  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['fr', 'register'] }) }), (err) => err === notFoundError);
  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['de', 'dashboard'] }) }), (err) => err === notFoundError);
});

test('Germany Header and Footer route auth strictly within Germany market', async () => {
  const { readFile } = await import('node:fs/promises');
  const headerContent = await readFile(new URL('../src/components/germany/market-header.tsx', import.meta.url), 'utf8');
  const footerContent = await readFile(new URL('../src/components/germany/market-footer.tsx', import.meta.url), 'utf8');

  assert.match(headerContent, /getMarketChildPath/);
  assert.match(footerContent, /getMarketChildPath/);
  assert.doesNotMatch(headerContent, /`\/de\/\$\{locale\}/);
  assert.doesNotMatch(footerContent, /`\/de\/\$\{locale\}/);
  assert.doesNotMatch(headerContent, /const authLocale =/);

  assert.equal(routing.getMarketChildPath('germany', 'de', ['login']), '/de/login');
  assert.equal(routing.getMarketChildPath('germany', 'de', ['register']), '/de/register');
  assert.equal(routing.getMarketChildPath('germany', 'de', ['trial']), '/de/trial');
  assert.equal(routing.getMarketChildPath('germany', 'en', ['login']), '/de/en/login');
  assert.equal(routing.getMarketChildPath('germany', 'ar', ['register']), '/de/ar/register');
});
