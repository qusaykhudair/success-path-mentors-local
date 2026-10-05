import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { parseAcquisitionContext } = load('src/config/acquisition-contexts.ts');
const { getAttribution } = load('src/lib/analytics/attribution.ts');

function setupMockWindow(href) {
  global.window = {
    location: {
      href,
      pathname: new URL(href).pathname,
    },
  };
  global.document = { referrer: '' };
}

test('Acquisition Context - Resolves ontario context correctly', () => {
  const ctx = parseAcquisitionContext('ontario');
  assert.ok(ctx);
  assert.equal(ctx.id, 'ontario');
  assert.equal(ctx.whatsapp.locationContext, 'Ontario');
});

test('Acquisition Context - Falls back to undefined for unknown region', () => {
  assert.equal(parseAcquisitionContext('evil'), undefined);
  assert.equal(parseAcquisitionContext('random'), undefined);
  assert.equal(parseAcquisitionContext('<script>alert()</script>'), undefined);
  assert.equal(parseAcquisitionContext(undefined), undefined);
  assert.equal(parseAcquisitionContext(null), undefined);
});

test('Acquisition Context - Analytics allowlist prevents arbitrary ads_region values', () => {
  setupMockWindow('https://successpathmentors.net/en?ads_region=evil');
  const attr1 = getAttribution();
  assert.equal(attr1.ads_region, undefined);

  setupMockWindow('https://successpathmentors.net/en?ads_region=random');
  const attr2 = getAttribution();
  assert.equal(attr2.ads_region, undefined);

  setupMockWindow('https://successpathmentors.net/en?ads_region=<script>');
  const attr3 = getAttribution();
  assert.equal(attr3.ads_region, undefined);

  setupMockWindow('https://successpathmentors.net/en?ads_region=ontario');
  const attr4 = getAttribution();
  assert.equal(attr4.ads_region, 'ontario');
});
