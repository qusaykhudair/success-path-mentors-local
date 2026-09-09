import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const {
  parseNavigationContext,
  getLanguageSwitchPath,
  getMarketSwitchPath,
  getLanguageNavigationOptions,
  getMarketNavigationOptions
} = load('src/lib/market-navigation.ts');

test('parseNavigationContext extracts correct context for North America', () => {
  assert.deepEqual(parseNavigationContext('/en'), {
    marketId: 'north-america',
    locale: 'en',
    childSegments: [],
    isFrenchProgramme: false
  });

  assert.deepEqual(parseNavigationContext('/ar/contact'), {
    marketId: 'north-america',
    locale: 'ar',
    childSegments: ['contact'],
    isFrenchProgramme: false
  });
});

test('parseNavigationContext extracts correct context for Germany', () => {
  assert.deepEqual(parseNavigationContext('/de/de'), {
    marketId: 'germany',
    locale: 'de',
    childSegments: [],
    isFrenchProgramme: false
  });

  assert.deepEqual(parseNavigationContext('/de/en/trial'), {
    marketId: 'germany',
    locale: 'en',
    childSegments: ['trial'],
    isFrenchProgramme: false
  });

  assert.deepEqual(parseNavigationContext('/de/ar/contact'), {
    marketId: 'germany',
    locale: 'ar',
    childSegments: ['contact'],
    isFrenchProgramme: false
  });
});

test('parseNavigationContext extracts correct context for French programme', () => {
  assert.deepEqual(parseNavigationContext('/fr'), {
    marketId: undefined,
    locale: 'fr',
    childSegments: [],
    isFrenchProgramme: true
  });
});

test('getLanguageSwitchPath works correctly for North America', () => {
  const ctxEnAbout = parseNavigationContext('/en/about');
  assert.equal(getLanguageSwitchPath(ctxEnAbout, 'ar'), '/ar/about');

  const ctxAr = parseNavigationContext('/ar');
  assert.equal(getLanguageSwitchPath(ctxAr, 'en'), '/en');
});

test('getLanguageSwitchPath works correctly for Germany', () => {
  const ctxDeDe = parseNavigationContext('/de/de');
  assert.equal(getLanguageSwitchPath(ctxDeDe, 'en'), '/de/en');

  const ctxDeEnTrial = parseNavigationContext('/de/en/trial');
  assert.equal(getLanguageSwitchPath(ctxDeEnTrial, 'ar'), '/de/ar/trial');

  const ctxDeArTrial = parseNavigationContext('/de/ar/trial');
  assert.equal(getLanguageSwitchPath(ctxDeArTrial, 'de'), '/de/de/trial');
});

test('getLanguageSwitchPath handles unsupported and invalid cases deterministically', () => {
  const ctxDeDe = parseNavigationContext('/de/de');
  assert.throws(() => getLanguageSwitchPath(ctxDeDe, 'fr'), /Unsupported language 'fr' for market 'germany'/);

  const ctxFr = parseNavigationContext('/fr');
  assert.throws(() => getLanguageSwitchPath(ctxFr, 'en'), /French programme does not support market language switching/);
});

test('getMarketSwitchPath routes to market defaults', () => {
  assert.equal(getMarketSwitchPath('north-america'), '/en');
});

test('getMarketSwitchPath rejects switching to a disabled market by default', () => {
  assert.throws(() => getMarketSwitchPath('germany'), /Market 'germany' is disabled and cannot be publicly switched to/);
});

test('getMarketSwitchPath allows switching to a disabled market when explicitly requested', () => {
  assert.equal(getMarketSwitchPath('germany', { includeDisabled: true }), '/de/de');
});

test('getMarketNavigationOptions respects enabled flag and defaults to safe public options', () => {
  const ctx = parseNavigationContext('/en');
  
  // Default behavior (Public safety)
  const publicOptions = getMarketNavigationOptions(ctx);
  assert.equal(publicOptions.find(o => o.id === 'north-america')?.isEnabled, true);
  assert.equal(publicOptions.find(o => o.id === 'germany'), undefined, 'Disabled Germany must not be in public options');

  // Internal / explicit override behavior
  const internalOptions = getMarketNavigationOptions(ctx, { includeDisabled: true });
  assert.equal(internalOptions.find(o => o.id === 'germany')?.isEnabled, false, 'Germany is included but remains disabled');
});

test('getLanguageNavigationOptions exposes RTL correctly', () => {
  const ctx = parseNavigationContext('/en');
  const options = getLanguageNavigationOptions(ctx);

  const ar = options.find(o => o.code === 'ar');
  assert.equal(ar.direction, 'rtl');

  const en = options.find(o => o.code === 'en');
  assert.equal(en.direction, 'ltr');
});
