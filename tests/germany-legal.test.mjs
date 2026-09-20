import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const routing = load('src/lib/market-routing.ts');
const { germanyLegalConfig, hasCompleteLegalEntityDetails } = load('src/config/germany-legal.ts');
const { germanyPrivacyPolicyContent, getGermanyPrivacyPolicy } = load('src/content/legal/germany/privacy-policy.ts');
const { germanyTermsContent, getGermanyTerms } = load('src/content/legal/germany/terms.ts');

test('Germany market routes resolve privacy and terms child routes for all supported locales', () => {
  const supportedLocales = ['de', 'en', 'ar'];

  for (const locale of supportedLocales) {
    // Test privacy route
    const privacyRoute = routing.resolveMarketRoute('germany', [locale, 'privacy']);
    assert.ok(privacyRoute, `Route /de/${locale}/privacy should resolve`);
    assert.equal(privacyRoute.kind, 'child');
    assert.equal(privacyRoute.language, locale);
    assert.deepEqual(privacyRoute.childSegments, ['privacy']);

    // Test terms route
    const termsRoute = routing.resolveMarketRoute('germany', [locale, 'terms']);
    assert.ok(termsRoute, `Route /de/${locale}/terms should resolve`);
    assert.equal(termsRoute.kind, 'child');
    assert.equal(termsRoute.language, locale);
    assert.deepEqual(termsRoute.childSegments, ['terms']);
  }

  // Unsupported language /de/fr/privacy falls back to default language child route fr/privacy (will 404 in page.tsx)
  const frRoute = routing.resolveMarketRoute('germany', ['fr', 'privacy']);
  assert.equal(frRoute.kind, 'child');
  assert.equal(frRoute.language, 'de');
  assert.deepEqual(frRoute.childSegments, ['fr', 'privacy']);
});

test('Germany central legal config contains required placeholders, contacts, and gate function', () => {
  assert.ok(germanyLegalConfig.brandName.includes('Europe'));
  assert.equal(germanyLegalConfig.contactEmail, 'europe@successpathmentors.net');
  assert.equal(germanyLegalConfig.whatsapp, '+49 1512 3974353');
  assert.equal(germanyLegalConfig.effectiveDate, 'September 2026');

  // Without environment overrides, hasCompleteLegalEntityDetails must return false (legal gate active)
  assert.equal(hasCompleteLegalEntityDetails(), false);
});

test('Germany Privacy Policy content is localized in de, en, ar and contains GDPR required sections', () => {
  const locales = ['de', 'en', 'ar'];

  for (const locale of locales) {
    const doc = getGermanyPrivacyPolicy(locale);
    assert.ok(doc, `Privacy doc for ${locale} must exist`);
    assert.ok(doc.seo.title.length > 0);
    assert.ok(doc.seo.description.length > 0);
    assert.ok(doc.hero.title.length > 0);
    assert.ok(doc.sections.length >= 10, `${locale} must have comprehensive GDPR sections`);

    // Verify presence of crucial GDPR section topics
    const sectionIds = doc.sections.map((s) => s.id);
    assert.ok(sectionIds.includes('controller'), 'Must have controller section');
    assert.ok(sectionIds.includes('scope'), 'Must have scope section');
    assert.ok(sectionIds.includes('legal-bases'), 'Must have legal bases section');
    assert.ok(sectionIds.includes('children-minors'), 'Must have minors protection section');
    assert.ok(sectionIds.includes('rights'), 'Must have data subject rights section');

    // Verify contact email is present in document
    const controllerSection = doc.sections.find((s) => s.id === 'controller');
    assert.ok(
      controllerSection.paragraphs.some((p) => p.includes('europe@successpathmentors.net')),
      `Controller section in ${locale} must include europe@successpathmentors.net`
    );
  }
});

test('Germany Terms of Service content includes statutory 14-day withdrawal and Model Withdrawal Form', () => {
  const locales = ['de', 'en', 'ar'];

  for (const locale of locales) {
    const doc = getGermanyTerms(locale);
    assert.ok(doc, `Terms doc for ${locale} must exist`);
    assert.ok(doc.seo.title.length > 0);
    assert.ok(doc.sections.length >= 10, `${locale} must have comprehensive terms sections`);

    const sectionIds = doc.sections.map((s) => s.id);
    assert.ok(sectionIds.includes('provider'), 'Must have provider section');
    assert.ok(sectionIds.includes('withdrawal'), 'Must have statutory withdrawal section');
    assert.ok(sectionIds.includes('satisfaction-complaints'), 'Must have satisfaction remedies section');
    assert.ok(sectionIds.includes('dispute-resolution'), 'Must have dispute resolution section');

    // Statutory Model Withdrawal Form must be present
    assert.ok(doc.modelWithdrawalForm, `Model withdrawal form must exist for ${locale}`);
    assert.ok(doc.modelWithdrawalForm.title.length > 0);
    assert.ok(doc.modelWithdrawalForm.recipientText.some((line) => line.includes('europe@successpathmentors.net')));
    assert.ok(doc.modelWithdrawalForm.noticeStatement.length > 0);

    // Verify that NO unconditional money-back guarantee is advertised in terms
    const allText = JSON.stringify(doc).toLowerCase();
    assert.ok(
      !allText.includes('unconditional 100% money-back guarantee'),
      'Must NOT promise unconditional money-back guarantee'
    );
  }
});

test('North America legal routes remain completely untouched and independent', () => {
  // Check that market-routing doesn't interfere with North America paths
  assert.equal(routing.getMarketRootPath('north-america'), '/');
  const naRouteEn = routing.resolveMarketRoute('north-america', ['en', 'privacy']);
  assert.ok(naRouteEn);
  assert.equal(naRouteEn.market.id, 'north-america');
  assert.equal(naRouteEn.language, 'en');
  assert.deepEqual(naRouteEn.childSegments, ['privacy']);

  const naRouteAr = routing.resolveMarketRoute('north-america', ['ar', 'terms']);
  assert.ok(naRouteAr);
  assert.equal(naRouteAr.market.id, 'north-america');
  assert.equal(naRouteAr.language, 'ar');
  assert.deepEqual(naRouteAr.childSegments, ['terms']);
});
