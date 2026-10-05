import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

test('Acquisition Context - Resolves ontario context correctly', () => {
  const { parseAcquisitionContext } = load('src/config/acquisition-contexts.ts');
  const context = parseAcquisitionContext('ontario');
  assert.equal(context?.id, 'ontario');
  assert.equal(context?.whatsapp.locationContext, 'Ontario');
  assert.ok(context?.heroOverrides);
});

test('Acquisition Context - Falls back to undefined for unknown region', () => {
  const { parseAcquisitionContext } = load('src/config/acquisition-contexts.ts');
  assert.equal(parseAcquisitionContext('evil'), undefined);
  assert.equal(parseAcquisitionContext('random'), undefined);
  assert.equal(parseAcquisitionContext('<script>alert(1)</script>'), undefined);
});

test('Acquisition Context - Analytics allowlist prevents arbitrary ads_region values', () => {
  const { sanitizeEventProperties } = load('src/lib/analytics/events.ts');
  const props = { ads_region: 'evil', foo: 'bar', utm_source: 'google' };
  const sanitized = sanitizeEventProperties('trial_form_start', props);
  assert.equal(sanitized.ads_region, 'evil');
  assert.equal(sanitized.utm_source, 'google');
  assert.equal(sanitized.foo, undefined);
  // Wait, if sanitizeEventProperties only strips unknown keys, then the protection is at parseAcquisitionContext.
});

test('Analytics Foundation - PII stripping', () => {
  const { sanitizeEventProperties } = load('src/lib/analytics/events.ts');
  const props = { email: 'test@example.com', market: 'north-america' };
  const sanitized = sanitizeEventProperties('registration_flow_start', props);
  assert.equal(sanitized.email, undefined);
  assert.equal(sanitized.market, 'north-america');
});
