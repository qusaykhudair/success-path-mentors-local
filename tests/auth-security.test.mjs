import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';

const load = createLoader(fileURLToPath(new URL('../', import.meta.url)));
const { redactAuthResponse } = load('src/lib/auth-response.ts');
const requestRoute = load('src/app/api/portal/auth/login/request/route.ts');
const verifyRoute = load('src/app/api/portal/auth/login/verify/route.ts');

test('OTP debug values are removed recursively without deleting protocol error codes or sessions', () => {
  const input = { _dev_otp: '123456', otp_code: '654321', code: 'OTP_INVALID', portal_token: 'opaque-session-fixture', contact_method_id: 27, nested: [{ OTP: '111111', verification_code: '222222', masked_contact: 'a***@example.com' }] };
  assert.deepEqual(redactAuthResponse(input), { code: 'OTP_INVALID', portal_token: 'opaque-session-fixture', contact_method_id: 27, nested: [{ masked_contact: 'a***@example.com' }] });
  assert.equal(input._dev_otp, '123456', 'input is not mutated');
});

test('login request rejects malformed input locally without requesting an OTP', async () => {
  for (const body of [null, [], {}, { identifier: '123' }, { identifier: 'invalid-email' }, { identifier: '+970123' }]) {
    const response = await requestRoute.POST(new Request('http://localhost/api/portal/auth/login/request', { method: 'POST', body: JSON.stringify(body) }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { code: 'INVALID_IDENTIFIER' });
  }
});

test('verification route rejects malformed challenge IDs and OTP syntax locally', async () => {
  for (const body of [null, {}, { contact_method_id: -1, code: '123456' }, { contact_method_id: 1, code: '123' }, { contact_method_id: 1, code: 'abcdef' }]) {
    const response = await verifyRoute.POST(new Request('http://localhost/api/portal/auth/login/verify', { method: 'POST', body: JSON.stringify(body) }));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).code, 'OTP_INVALID');
  }
});

test('frontend contains no OTP logging or fake registration verification success', () => {
  const source = readFileSync(new URL('../src/features/auth/auth-api.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /_dev_otp|console\.log|mockVerify|createId/);
  assert.match(source, /!res\.success \|\| !res\.account_activated/);
  assert.match(source, /localStorage\.setItem\('portal_token'/, 'existing session boundary is retained');
});
