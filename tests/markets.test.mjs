import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { getDefaultMarket, getMarketConfig, getMarketByCode, isMarketId, marketIds } = load('src/config/markets.ts');
const { siteConfig, supportedLocales, isSupportedLocale } = load('src/config/site.ts');
const { CONTACT } = load('src/lib/constants.ts');
const whatsapp = load('src/lib/whatsapp.ts');

test('default market preserves North America countries, language and contact sources', () => {
  const market = getDefaultMarket();
  assert.equal(market.id, 'north-america');
  assert.equal(getMarketConfig(), market);
  assert.equal(getMarketByCode('NA'), market);
  assert.equal(market.enabled, true);
  assert.equal(market.publicSlug, null);
  assert.equal(market.defaultCountry, 'CA');
  assert.deepEqual(market.supportedCountries, ['CA', 'US']);
  assert.equal(market.defaultLanguage, 'en');
  assert.deepEqual(market.supportedLanguages, ['en', 'ar']);
  assert.deepEqual(market.supportedLanguages, supportedLocales);
  assert.equal(market.currency, 'CAD');
  assert.deepEqual(market.contact, {
    email: siteConfig.email, phone: CONTACT.phone,
    publishedEmail: CONTACT.email,
    whatsapp: whatsapp.WHATSAPP_NUMBER, whatsappDisplay: whatsapp.WHATSAPP_DISPLAY_NUMBER,
  });
  assert.equal(market.bookingUrl, siteConfig.bookingUrl);
  assert.equal(market.registration.countryValue, 'Canada');
  assert.equal(market.registration.timezoneStrategy, 'browser-with-market-fallback');
  assert.equal(market.defaultTimezone, 'America/Toronto');
});

test('North America booking preserves configured URLs and Canadian WhatsApp fallback', () => {
  const { getBookingHref } = load('src/config/routes.ts');
  for (const locale of supportedLocales) {
    assert.equal(getBookingHref(locale, ' https://example.com/book '), 'https://example.com/book');
    assert.equal(getBookingHref(locale, ''), whatsapp.buildWhatsAppHref(
      whatsapp.buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'الرياضيات' : 'Mathematics' })
    ));
    assert.equal(getBookingHref(locale, getDefaultMarket().bookingUrl), getBookingHref(locale, siteConfig.bookingUrl));
  }
});

test('Germany is configured but inactive, with a separate Europe contact channel', () => {
  const market = getMarketConfig('germany');
  assert.equal(market.id, 'germany');
  assert.equal(market.code, 'DE');
  assert.equal(market.name, 'Germany');
  assert.equal(market.publicSlug, 'de');
  assert.equal(getMarketByCode('DE'), market);
  assert.equal(market.enabled, false);
  assert.equal(market.countryCode, 'DE');
  assert.equal(market.defaultTimezone, 'Europe/Berlin');
  assert.deepEqual(market.supportedTimezones, ['Europe/Berlin']);
  assert.equal(market.defaultCountry, 'DE');
  assert.deepEqual(market.supportedCountries, ['DE']);
  assert.equal(market.currency, 'EUR');
  assert.equal(market.defaultLanguage, 'de');
  assert.deepEqual(market.supportedLanguages, ['de', 'ar', 'en']);
  assert.equal(market.contact.email, 'europe@successpathmentors.net');
  assert.equal(market.contact.whatsapp, '4915123974353');
  assert.match(market.contact.whatsapp, /^[1-9]\d{7,14}$/);
  assert.equal(market.contact.whatsappDisplay, '+49 1512 3974353');
  assert.equal(market.contact.whatsappDisplay.replace(/\D/g, ''), market.contact.whatsapp);
  assert.equal(market.contact.phone, null);
  assert.deepEqual(market.seo, {
    region: 'DE', locales: { de: 'de_DE', ar: 'ar_DE', en: 'en_DE' },
  });
  assert.deepEqual(market.organization.areaServed, [{ '@type': 'Country', name: 'Germany' }]);
  assert.deepEqual(market.registration, {
    languageStrategy: 'page-language', timezoneStrategy: 'market-default', countryValue: 'Germany',
  });
  assert.equal(market.phonePlaceholder, '+49 1512 3456789');
  assert.equal(market.bookingUrl, undefined);
  assert.equal(market.legalBusinessConfigRef, undefined);
  assert.equal(market.organization.legalName, undefined);
});

test('typed registry guards reject unknown IDs and codes', () => {
  for (const id of marketIds) assert.equal(isMarketId(id), true);
  for (const value of ['de', 'NA', 'toString', '__proto__', '', null, 0, {}]) {
    assert.equal(isMarketId(value), false);
  }
  for (const code of ['de', 'CA', 'US', '', 'toString']) assert.equal(getMarketByCode(code), undefined);
  for (const id of marketIds) {
    const market = getMarketConfig(id);
    assert.ok(market.supportedCountries.includes(market.defaultCountry));
    assert.ok(market.supportedLanguages.includes(market.defaultLanguage));
    assert.ok(market.supportedTimezones.includes(market.defaultTimezone));
    for (const timeZone of market.supportedTimezones) {
      assert.doesNotThrow(() => new Intl.DateTimeFormat('en', { timeZone }));
    }
  }
});

test('existing EN/AR and French route contracts remain unchanged', () => {
  const { routing } = load('src/i18n/routing.ts');
  const { routePath } = load('src/config/routes.ts');
  const { programmeFrancaisRoutes } = load('src/lib/programme-francais/routes.ts');
  assert.deepEqual(routing.locales, ['en', 'ar']);
  assert.equal(routing.defaultLocale, 'en');
  assert.equal(routing.localePrefix, 'always');
  assert.equal(isSupportedLocale('de'), false);
  assert.equal(routePath.home('en'), '/en');
  assert.equal(routePath.home('ar'), '/ar');
  assert.equal(routePath.contact('ar'), '/ar/تواصل-معنا');
  assert.equal(routePath.about('ar'), '/ar/عن-المنصة');
  assert.equal(routePath.subjects('ar'), '/ar/المواد-الدراسية');
  assert.equal(routePath.locations('ar'), '/ar/المواقع');
  assert.equal(routePath.register('en'), '/en/register');
  assert.equal(routePath.register('ar'), '/ar/register');
  assert.equal(routePath.login('en'), '/en/login');
  assert.equal(routePath.login('ar'), '/ar/login');
  assert.equal(programmeFrancaisRoutes.home, '/fr/programme-francais');
});

test('Germany remains disabled without global German translations', () => {
  assert.equal(getMarketConfig('germany').enabled, false);
  assert.equal(existsSync(resolve(root, 'messages/de.json')), false);
});

test('login and registration do not send families to the external LMS login', () => {
  for (const path of [
    'src/app/[locale]/(auth)/login/page.tsx',
    'src/features/auth/registration-form.tsx',
  ]) {
    assert.equal(
      readFileSync(resolve(root, path), 'utf8').includes('lms.successpathmentors.net/login'),
      false,
      `${path} must preserve the website authentication journey`,
    );
  }
});
