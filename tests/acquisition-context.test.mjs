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
  const props1 = { ads_region: 'ontario', foo: 'bar', utm_source: 'google' };
  const sanitized1 = sanitizeEventProperties('trial_form_start', props1);
  assert.equal(sanitized1.ads_region, 'ontario');
  assert.equal(sanitized1.foo, undefined);
  assert.equal(sanitized1.utm_source, 'google');

  // evil -> rejected
  const props2 = { ads_region: 'evil', foo: 'bar', utm_source: 'google' };
  const sanitized2 = sanitizeEventProperties('trial_form_start', props2);
  assert.equal(sanitized2.ads_region, undefined);

  // random -> rejected
  const props3 = { ads_region: 'random', foo: 'bar', utm_source: 'google' };
  const sanitized3 = sanitizeEventProperties('trial_form_start', props3);
  assert.equal(sanitized3.ads_region, undefined);

  // <script> -> rejected
  const props4 = { ads_region: '<script>', foo: 'bar', utm_source: 'google' };
  const sanitized4 = sanitizeEventProperties('trial_form_start', props4);
  assert.equal(sanitized4.ads_region, undefined);
});

test('Analytics Foundation - PII stripping', () => {
  const { sanitizeEventProperties } = load('src/lib/analytics/events.ts');
  const props = { email: 'test@example.com', market: 'north-america' };
  const sanitized = sanitizeEventProperties('registration_flow_start', props);
  assert.equal(sanitized.email, undefined);
  assert.equal(sanitized.market, 'north-america');
});
