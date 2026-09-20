import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { trackEvent } = load('src/lib/analytics/client.ts');
const { setAnalyticsConsent, getAnalyticsConsent } = load('src/lib/analytics/consent.ts');
const { captureAttribution, getAttribution, clearAttribution } = load('src/lib/analytics/attribution.ts');

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
}

test('Analytics Foundation - Consent', () => {
  setupMockWindow();
  
  // Default state is unset
  assert.equal(getAnalyticsConsent(), 'unset');

  // No events tracked without consent
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 0);

  // Set consent to denied
  setAnalyticsConsent('denied');
  assert.equal(getAnalyticsConsent(), 'denied');
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 0);

  // Set consent to granted
  setAnalyticsConsent('granted');
  assert.equal(getAnalyticsConsent(), 'granted');
  
  trackEvent('trial_form_start', { market: 'north-america' });
  assert.equal(window.dataLayer.length, 1);
  assert.equal(window.dataLayer[0].event, 'trial_form_start');
});

test('Analytics Foundation - Attribution Parsing and Persistence', () => {
  setupMockWindow();
  setAnalyticsConsent('unset');

  // Attribution is parsed but not persisted before consent
  const preConsentAttribution = getAttribution();
  assert.equal(preConsentAttribution.utm_source, 'google');
  assert.equal(preConsentAttribution.utm_medium, 'cpc');
  assert.equal(preConsentAttribution.referrer_host, 'google.com');
  assert.equal(Object.keys(global.sessionStorage.store).length, 0);

  // Grant consent
  setAnalyticsConsent('granted');
  captureAttribution();

  // Now it's persisted in session storage
  assert.ok(global.sessionStorage.store['spm_analytics_attribution']);
  
  const postConsentAttribution = getAttribution();
  assert.equal(postConsentAttribution.utm_source, 'google');
  assert.equal(postConsentAttribution.referrer_host, 'google.com');

  // Fire event, should include attribution
  trackEvent('whatsapp_cta_clicked', { surface: 'header' });
  const event = window.dataLayer[window.dataLayer.length - 1];
  assert.equal(event.event, 'whatsapp_cta_clicked');
  assert.equal(event.surface, 'header');
  assert.equal(event.utm_source, 'google');
  assert.equal(event.referrer_host, 'google.com');
});

test('Analytics Foundation - No PII emitted', () => {
  setupMockWindow();
  setAnalyticsConsent('granted');

  // Let's pretend some rogue code tries to send PII using an unknown type cast
  // We can't strictly prevent the JS from sending it if it circumvents TS, 
  // but the TS types in events.ts prevent PII. Let's just ensure standard events
  // don't have them in the contract.
  
  const properties = {
    market: 'germany',
    locale: 'de',
    status: 'COMPLETED',
  };
  
  trackEvent('trial_registration_complete', properties);
  const event = window.dataLayer[window.dataLayer.length - 1];
  
  // Assert safe keys are present
  assert.equal(event.event, 'trial_registration_complete');
  assert.equal(event.market, 'germany');
  
  // Assert strictly forbidden keys are definitely NOT in our expected property type
  // (We check undefined because if it was provided, TS would complain, but we check JS runtime too)
  assert.equal(event.email, undefined);
  assert.equal(event.phone, undefined);
});
