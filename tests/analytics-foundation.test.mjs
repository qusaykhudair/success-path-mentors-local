import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { trackEvent } = load('src/lib/analytics/client.ts');
const { setAnalyticsConsent, getAnalyticsConsent } = load('src/lib/analytics/consent.ts');
const { captureAttribution, getAttribution, clearAttribution } = load('src/lib/analytics/attribution.ts');
const { isAnalyticsEventName, sanitizeEventProperties } = load('src/lib/analytics/events.ts');
const { getMarketChildPath, getMarketLocalePath } = load('src/lib/market-routing.ts');

function setupMockWindow() {
  global.window = {
    dataLayer: [],
    location: {
      href: 'https://successpathmentors.net/en?utm_source=google&utm_medium=cpc',
      hostname: 'successpathmentors.net',
      pathname: '/en',
    },
    dispatchEvent: () => {},
  };
  global.document = {
    referrer: 'https://google.com',
  };
  global.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value;
    },
    removeItem(key) {
      delete this.store[key];
    },
  };
  global.sessionStorage = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value;
    },
    removeItem(key) {
      delete this.store[key];
    },
  };
  process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST1234';
}

test('Analytics Foundation - Consent & GTM ID requirements', () => {
  setupMockWindow();
  
  assert.equal(getAnalyticsConsent(), 'unset');
  
  // No dataLayer push without consent
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 0);

  setAnalyticsConsent('denied');
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 0);

  // Grant consent
  setAnalyticsConsent('granted');
  
  // No dataLayer push without GTM ID
  delete process.env.NEXT_PUBLIC_GTM_ID;
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 0);

  // Valid configured + consented event pushes once
  process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST1234';
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 1);
  assert.equal(window.dataLayer[0].event, 'trial_form_start');
});

test('Analytics Foundation - Attribution Persistence', () => {
  setupMockWindow();
  setAnalyticsConsent('unset');

  // attribution does not persist pre-consent
  const preConsentAttribution = getAttribution();
  assert.equal(preConsentAttribution.utm_source, 'google');
  assert.equal(Object.keys(global.sessionStorage.store).length, 0);

  setAnalyticsConsent('granted');
  captureAttribution();

  assert.ok(global.sessionStorage.store['spm_analytics_attribution']);
  const postConsentAttribution = getAttribution();
  assert.equal(postConsentAttribution.utm_source, 'google');
  assert.equal(postConsentAttribution.referrer_host, 'google.com');

  trackEvent('whatsapp_cta_clicked', { surface: 'header' });
  const event = window.dataLayer[window.dataLayer.length - 1];
  assert.equal(event.event, 'whatsapp_cta_clicked');
  assert.equal(event.utm_source, 'google');
});

test('Analytics Foundation - Event Type & Runtime Property Allowlist', () => {
  setupMockWindow();
  setAnalyticsConsent('granted');

  assert.equal(isAnalyticsEventName('trial_form_start'), true);
  assert.equal(isAnalyticsEventName('unknown_event_name'), false);

  // PII keys stripped & unknown event properties stripped
  const rawPayload = {
    market: 'germany',
    locale: 'de',
    surface: 'hero',
    student_first_name: 'John',
    email: 'test@example.com',
    random_key: 'hacker',
    phone: '1234567890',
  };

  const safe = sanitizeEventProperties('trial_form_start', rawPayload);
  
  assert.equal(safe.market, 'germany');
  assert.equal(safe.locale, 'de');
  assert.equal(safe.surface, 'hero');
  
  assert.equal(safe.student_first_name, undefined);
  assert.equal(safe.email, undefined);
  assert.equal(safe.phone, undefined);
  assert.equal(safe.random_key, undefined);
});

test('Analytics Foundation - Germany Fallback Routes', () => {
  // Expected default German: home = /de, login = /de/login, privacy = /de/privacy. 
  assert.equal(getMarketLocalePath('germany', 'de'), '/de');
  assert.equal(getMarketChildPath('germany', 'de', ['login']), '/de/login');
  assert.equal(getMarketChildPath('germany', 'de', ['privacy']), '/de/privacy');

  // English: /de/en, /de/en/login, /de/en/privacy. 
  assert.equal(getMarketLocalePath('germany', 'en'), '/de/en');
  assert.equal(getMarketChildPath('germany', 'en', ['login']), '/de/en/login');
  assert.equal(getMarketChildPath('germany', 'en', ['privacy']), '/de/en/privacy');

  // Arabic: /de/ar, /de/ar/login, /de/ar/privacy.
  assert.equal(getMarketLocalePath('germany', 'ar'), '/de/ar');
  assert.equal(getMarketChildPath('germany', 'ar', ['login']), '/de/ar/login');
  assert.equal(getMarketChildPath('germany', 'ar', ['privacy']), '/de/ar/privacy');
});
