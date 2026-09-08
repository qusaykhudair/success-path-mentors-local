import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';
import { captureMarketOutput } from './helpers/market-output.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const { getDefaultMarket } = load('src/config/markets.ts');
const market = getDefaultMarket();

test('legacy contact helpers preserve the Canadian numbers and formatting', () => {
  const whatsapp = load('src/lib/whatsapp.ts');
  const { CONTACT } = load('src/lib/constants.ts');
  const { getDefaultTelephoneHref } = load('src/lib/market-display.ts');
  assert.equal(whatsapp.WHATSAPP_NUMBER, '16477875999');
  assert.equal(whatsapp.WHATSAPP_DISPLAY_NUMBER, '+1 647 787 5999');
  assert.equal(CONTACT.phone, '+1 647 787 5999');
  assert.equal(CONTACT.whatsapp, '+1 647 787 5999');
  assert.equal(CONTACT.email, 'successpathmentors@gmail.com');
  assert.equal(getDefaultTelephoneHref(), 'tel:+16477875999');
  assert.equal(whatsapp.buildWhatsAppHref('  A & سؤال\nB  '),
    'https://wa.me/16477875999?text=A%20%26%20%D8%B3%D8%A4%D8%A7%D9%84%0AB');
});

test('registration keeps human-readable countries, Other, and browser timezone behavior', () => {
  const { getRegistrationCountries, getRegistrationTimezone, getRegistrationTimezones } = load('src/features/auth/registration-options.ts');
  assert.equal(market.registration.countryValue, 'Canada');
  assert.deepEqual(getRegistrationCountries(), [
    ['Canada', 'كندا'], ['United States', 'الولايات المتحدة'], ['Other', 'دولة أخرى'],
  ]);
  assert.equal(getRegistrationTimezone(() => ''), 'America/Toronto');
  assert.equal(getRegistrationTimezone(() => { throw new Error('unavailable'); }), 'America/Toronto');
  assert.equal(getRegistrationTimezone(() => 'Pacific/Auckland'), 'Pacific/Auckland');
  const expected = [
    'America/Toronto', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg',
    'America/Halifax', 'America/St_Johns', 'America/New_York', 'America/Chicago',
    'America/Denver', 'America/Los_Angeles', 'Africa/Cairo', 'Asia/Amman',
    'Asia/Riyadh', 'Asia/Dubai', 'Europe/London',
  ];
  assert.deepEqual(getRegistrationTimezones('America/Toronto'), expected);
  assert.deepEqual(getRegistrationTimezones('Pacific/Auckland'), ['Pacific/Auckland', ...expected]);
  assert.equal(market.phonePlaceholder, '+1 647 000 0000');
});

test('CAD package amounts and displayed prices stay identical', () => {
  const { pricingPlans } = load('src/content/pricing-plans.ts');
  const { formatMarketPrice } = load('src/lib/market-display.ts');
  assert.equal(market.currency, 'CAD');
  for (const locale of ['en', 'ar']) {
    assert.deepEqual(pricingPlans[locale].map(({ price, lessons }) => [price, lessons]), [[110, 4], [220, 8], [280, 12]]);
    assert.deepEqual(pricingPlans[locale].map(({ price }) => formatMarketPrice(price)), ['$110', '$220', '$280']);
    assert.deepEqual(pricingPlans[locale].map(({ price, lessons }) => formatMarketPrice(price / lessons)), ['$27.5', '$27.5', '$23.33']);
  }
});

async function withPublicEnvironment(values, action) {
  const names = ['NEXT_PUBLIC_CONTACT_EMAIL', 'NEXT_PUBLIC_BOOKING_URL', 'NEXT_PUBLIC_OG_IMAGE'];
  const saved = Object.fromEntries(names.map((name) => [name, process.env[name]]));
  try {
    for (const name of names) {
      if (values[name] === undefined) delete process.env[name];
      else process.env[name] = values[name];
    }
    return await action();
  } finally {
    for (const name of names) {
      if (saved[name] === undefined) delete process.env[name];
      else process.env[name] = saved[name];
    }
  }
}

test('email and booking overrides preserve missing, blank and trimmed semantics', async () => {
  for (const value of [undefined, '', '   ', ' https://example.com/booking ']) {
    await withPublicEnvironment({ NEXT_PUBLIC_BOOKING_URL: value, NEXT_PUBLIC_CONTACT_EMAIL: value }, () => {
      const fresh = createLoader(root);
      const config = fresh('src/config/site.ts').siteConfig;
      const contact = fresh('src/lib/constants.ts').CONTACT;
      assert.equal(config.email, value?.trim() ?? 'successpathmentors@gmail.com');
      assert.equal(config.bookingUrl, value?.trim() ?? '');
      assert.equal(contact.email, 'successpathmentors@gmail.com');
    });
  }
});

test('affected component output, metadata, contact copy and WhatsApp match the approved baseline', async () => {
  const expected = JSON.parse(readFileSync(new URL('./fixtures/market-output-baseline.json', import.meta.url), 'utf8'));
  for (const [scenario, env] of Object.entries({
    default: {},
    overridden: { NEXT_PUBLIC_CONTACT_EMAIL: ' custom@example.com ', NEXT_PUBLIC_BOOKING_URL: ' https://example.com/book ' },
    blank: { NEXT_PUBLIC_CONTACT_EMAIL: ' ', NEXT_PUBLIC_BOOKING_URL: ' ' },
  })) {
    await withPublicEnvironment(env, async () => {
      for (const locale of ['en', 'ar']) {
        assert.deepEqual(await captureMarketOutput(root, locale), expected[scenario][locale], `${scenario}/${locale} output changed`);
      }
    });
  }
});
