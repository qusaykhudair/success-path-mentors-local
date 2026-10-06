import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

import fs from 'node:fs';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { trackEvent } = load('src/lib/analytics/client.ts');
const { setAnalyticsConsent, getAnalyticsConsent } = load('src/lib/analytics/consent.ts');
const { captureAttribution, getAttribution, clearAttribution } = load('src/lib/analytics/attribution.ts');
const { isAnalyticsEventName, sanitizeEventProperties } = load('src/lib/analytics/events.ts');
const { getMarketChildPath, getMarketLocalePath } = load('src/lib/market-routing.ts');
const { isValidGtmId, getAnalyticsPrivacyHref } = load('src/lib/analytics/config.ts');

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
  assert.equal(isAnalyticsEventName('phone_cta_clicked'), true);
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

test('Analytics Foundation - GTM Config Validation', () => {
  assert.equal(isValidGtmId(undefined), false);
  assert.equal(isValidGtmId(''), false);
  assert.equal(isValidGtmId('G-ABC'), false);
  assert.equal(isValidGtmId('bad-id'), false);
  assert.equal(isValidGtmId('GTM-TEST1234'), true);
});

test('Analytics Foundation - Privacy Route Resolution', () => {
  assert.equal(getAnalyticsPrivacyHref('/en', 'en'), '/en/privacy');
  assert.equal(getAnalyticsPrivacyHref('/ar', 'ar'), '/ar/privacy');
  assert.equal(getAnalyticsPrivacyHref('/de', 'de'), '/de/privacy');
  assert.equal(getAnalyticsPrivacyHref('/de/en', 'en'), '/de/en/privacy');
  assert.equal(getAnalyticsPrivacyHref('/de/ar', 'ar'), '/de/ar/privacy');
  assert.equal(getAnalyticsPrivacyHref('/fr/programme-francais', 'fr'), '/en/privacy');
  
  // ensure no /de/de or /fr/privacy
  const dePrivacy = getAnalyticsPrivacyHref('/de', 'de');
  assert.doesNotMatch(dePrivacy, /\/de\/de/);
  
  const frPrivacy = getAnalyticsPrivacyHref('/fr/programme-francais', 'fr');
  assert.doesNotMatch(frPrivacy, /\/fr\/privacy/);
});

test('Analytics Foundation - Conversion Guards (Source Contract)', () => {
  const regFormPath = path.join(root, 'src/features/auth/registration-form.tsx');
  const regFormSrc = fs.readFileSync(regFormPath, 'utf8');

  // Assert dedupe variables exist
  assert.match(regFormSrc, /hasFiredFlowStart\.current/);
  assert.match(regFormSrc, /hasFiredRegistrationComplete\.current/);

  // Assert registration complete requires confirmation
  assert.match(regFormSrc, /if\s*\(\s*confirmation\s*&&\s*!hasFiredRegistrationComplete\.current\s*\)/);
  
  // Assert flow start is guarded
  assert.match(regFormSrc, /if\s*\(\s*verifiedTicket\s*&&\s*verifiedIdentity\s*&&\s*!hasFiredFlowStart\.current\s*\)/);
});

test('Analytics Foundation - Provider Pre-Consent Contract (Source Contract)', () => {
  const providerPath = path.join(root, 'src/components/analytics/analytics-provider.tsx');
  const providerSrc = fs.readFileSync(providerPath, 'utf8');

  // Assert GTM script is guarded by both consent and gtmId
  assert.match(providerSrc, /\{\s*consent\s*===\s*'granted'\s*&&\s*gtmId\s*&&/);
});

test('Analytics Foundation - French Programme Coverage (Source Contract)', () => {
  const layoutPath = path.join(root, 'src/app/fr/layout.tsx');
  const layoutSrc = fs.readFileSync(layoutPath, 'utf8');

  // assert EXACTLY ONE AnalyticsProvider in layout
  const providerMatches = layoutSrc.match(/<AnalyticsProvider\s*\/>/g);
  assert.equal(providerMatches?.length, 1, 'French layout should contain exactly one AnalyticsProvider');

  const footerPath = path.join(root, 'src/components/programme-francais/french-program-footer.tsx');
  const footerSrc = fs.readFileSync(footerPath, 'utf8');

  // Assert both Email and Booking CTAs have data-analytics-event="contact_cta_clicked" and data-analytics-surface="footer"
  const eventMatches = footerSrc.match(/data-analytics-event="contact_cta_clicked"/g);
  assert.equal(eventMatches?.length, 2, 'French footer should have exactly 2 contact_cta_clicked events');

  const surfaceMatches = footerSrc.match(/data-analytics-surface="footer"/g);
  assert.equal(surfaceMatches?.length, 2, 'French footer should have exactly 2 footer surface labels');
});



test('Analytics Foundation - Contact CTA instrumentation contract', () => {
  const mobilePath = path.join(root, 'src/components/layout/mobile-nav.tsx');
  const mobileSrc = fs.readFileSync(mobilePath, 'utf8');
  assert.match(mobileSrc, /data-analytics-event="phone_cta_clicked"/);
  assert.match(mobileSrc, /data-analytics-surface="mobile_nav_booking"/);

  const finalCtaPath = path.join(root, 'src/components/sections/home/final-cta.tsx');
  const finalCtaSrc = fs.readFileSync(finalCtaPath, 'utf8');
  assert.match(finalCtaSrc, /data-analytics-event="whatsapp_cta_clicked"/);
  assert.match(finalCtaSrc, /data-analytics-surface="final_cta"/);
});
