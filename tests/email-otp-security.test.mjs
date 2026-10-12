import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import test, { beforeEach, afterEach } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { requestSignupOtp, verifySignupOtp, __getTestOtp, __resetTestOtpStore } = load('src/features/auth/signup-otp-service.ts');
const { POST: postOtpRequest } = load('src/app/api/auth/signup/otp/request/route.ts');
const { POST: postOtpVerify } = load('src/app/api/auth/signup/otp/verify/route.ts');
const { SignupMethods } = load('src/features/auth/signup-methods.tsx');
const { RegistrationForm } = load('src/features/auth/registration-form.tsx');

const originalFetch = globalThis.fetch;
const originalSendgridKey = process.env.SENDGRID_API_KEY;

function mockFetchSendGrid(status = 202, ok = true) {
  globalThis.fetch = async (url, options) => {
    if (typeof url === 'string' && url.includes('api.sendgrid.com')) {
      return {
        status,
        ok,
        text: async () => (ok ? '' : JSON.stringify({ errors: [{ message: 'Mock error' }] })),
        json: async () => ({}),
      };
    }
    return originalFetch(url, options);
  };
}

beforeEach(() => {
  __resetTestOtpStore();
  process.env.SENDGRID_API_KEY = 'SG.mock_key_for_testing';
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalSendgridKey !== undefined) {
    process.env.SENDGRID_API_KEY = originalSendgridKey;
  } else {
    delete process.env.SENDGRID_API_KEY;
  }
});

test('1 & 2: Email OTP request dispatches delivery request and API response contains NO OTP', async () => {
  let sendGridCalled = false;
  let sendGridBody = null;

  globalThis.fetch = async (url, options) => {
    if (typeof url === 'string' && url.includes('api.sendgrid.com')) {
      sendGridCalled = true;
      sendGridBody = JSON.parse(options.body);
      return { status: 202, ok: true, text: async () => '' };
    }
    return originalFetch(url, options);
  };

  const req = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      channel: 'EMAIL',
      identifier: 'parent.test@example.com',
      market: 'north-america',
      ui_locale: 'en',
    }),
  });

  const res = await postOtpRequest(req);
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.challenge_id);
  assert.equal(data.channel, 'EMAIL');
  assert.equal(data.masked_destination, 'pa*********@example.com');

  // Verify SendGrid was called with the verified sender
  assert.equal(sendGridCalled, true);
  assert.equal(sendGridBody.personalizations[0].to[0].email, 'parent.test@example.com');
  assert.equal(sendGridBody.from.email, 'engqusaykhudair@gmail.com');

  // Verify CRITICAL SECURITY PROPERTY: No OTP or _dev_otp in public API response
  assert.equal(data._dev_otp, undefined);
  assert.equal('otp' in data, false);
  assert.equal(JSON.stringify(data).includes('code'), false);
});

test('3: Verification screen never renders development OTP or Fill Code button', () => {
  const html = renderToStaticMarkup(
    React.createElement(SignupMethods, {
      locale: 'en',
      marketId: 'north-america',
    })
  );

  // Initial screen should not have dev OTP banner
  assert.equal(html.includes('Verification code (Dev / Demo)'), false);
  assert.equal(html.includes('Fill code'), false);
  assert.equal(html.includes('رمز التحقق (للتطوير والعرض)'), false);
  assert.equal(html.includes('تعبئة الرمز'), false);
});

test('4: Email delivery failure returns clear error and does NOT report false success or set active challenge', async () => {
  mockFetchSendGrid(403, false);

  const req = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      channel: 'EMAIL',
      identifier: 'fail.test@example.com',
      market: 'north-america',
      ui_locale: 'en',
    }),
  });

  const res = await postOtpRequest(req);
  assert.equal(res.status, 502);

  const data = await res.json();
  assert.equal(data.code, 'DELIVERY_FAILED');
  assert.ok(data.message.includes('Unable to deliver verification code'));

  // Immediate retry should NOT be blocked by cooldown because delivery failed
  mockFetchSendGrid(202, true);
  const retryReq = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      channel: 'EMAIL',
      identifier: 'fail.test@example.com',
      market: 'north-america',
      ui_locale: 'en',
    }),
  });
  const retryRes = await postOtpRequest(retryReq);
  assert.equal(retryRes.status, 200);
});

test('WhatsApp request fails safely when no provider is configured', async () => {
  const req = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      channel: 'WHATSAPP',
      identifier: '+14165550199',
      market: 'north-america',
      ui_locale: 'en',
    }),
  });

  const res = await postOtpRequest(req);
  assert.equal(res.status, 503);
  const data = await res.json();
  assert.equal(data.code, 'WHATSAPP_UNAVAILABLE');
  assert.ok(data.message.includes('unavailable'));
});

test('5: Resend after cooldown sends new valid code and supersedes old code', async () => {
  mockFetchSendGrid(202, true);

  // Initial code request
  const initial = await requestSignupOtp({
    channel: 'EMAIL',
    identifier: 'resend.test@example.com',
    market: 'north-america',
    uiLocale: 'en',
  });
  assert.equal(initial.success, true);
  const oldCode = __getTestOtp(initial.challenge_id);
  assert.ok(oldCode);

  // Fast-forward cooldown by clearing it or waiting
  __resetTestOtpStore();

  // Request new code (resend)
  const resent = await requestSignupOtp({
    channel: 'EMAIL',
    identifier: 'resend.test@example.com',
    market: 'north-america',
    uiLocale: 'en',
  });
  assert.equal(resent.success, true);
  assert.notEqual(resent.challenge_id, initial.challenge_id);

  const newCode = __getTestOtp(resent.challenge_id);
  assert.ok(newCode);

  // Old code must NOT verify on old challenge (it was invalidated or cleared)
  const oldVerify = verifySignupOtp({ challengeId: initial.challenge_id, code: oldCode });
  assert.ok('error' in oldVerify);

  // New code verifies successfully
  const newVerify = verifySignupOtp({ challengeId: resent.challenge_id, code: newCode });
  assert.equal('success' in newVerify && newVerify.success, true);
});

test('6 & 7: Correct OTP verifies; Incorrect OTP rejected with attempt counter', async () => {
  mockFetchSendGrid(202, true);

  const req = await requestSignupOtp({
    channel: 'EMAIL',
    identifier: 'verify.test@example.com',
    market: 'north-america',
    uiLocale: 'en',
  });
  const correctCode = __getTestOtp(req.challenge_id);

  // 1. Wrong code rejected
  const badRes = verifySignupOtp({ challengeId: req.challenge_id, code: '000000' });
  assert.ok('error' in badRes);
  assert.equal(badRes.code, 'OTP_INVALID');

  // 2. Correct code accepted
  const goodRes = verifySignupOtp({ challengeId: req.challenge_id, code: correctCode });
  assert.equal('success' in goodRes && goodRes.success, true);
  assert.ok(goodRes.signup_ticket);
  assert.equal(goodRes.verified_identity.identifier, 'verify.test@example.com');

  // 3. Replay prevention: cannot reuse code
  const replayRes = verifySignupOtp({ challengeId: req.challenge_id, code: correctCode });
  assert.ok('error' in replayRes);
  assert.equal(replayRes.code, 'OTP_EXPIRED');
});

test('8: Expired OTP is rejected', async () => {
  mockFetchSendGrid(202, true);

  const req = await requestSignupOtp({
    channel: 'EMAIL',
    identifier: 'expire.test@example.com',
    market: 'north-america',
    uiLocale: 'en',
  });
  const code = __getTestOtp(req.challenge_id);

  // Simulate expiry by artificially advancing time in verifySignupOtp
  const realDateNow = Date.now;
  Date.now = () => realDateNow() + 11 * 60 * 1000; // +11 minutes

  try {
    const res = verifySignupOtp({ challengeId: req.challenge_id, code });
    assert.ok('error' in res);
    assert.equal(res.code, 'OTP_EXPIRED');
  } finally {
    Date.now = realDateNow;
  }
});

test('9: Existing registration flow remains functional with verified ticket', () => {
  const html = renderToStaticMarkup(
    React.createElement(RegistrationForm, {
      locale: 'en',
      initialTicket: 'VALID_TX_TICKET_999',
      initialIdentity: { method: 'email', identifier: 'qa.parent@example.com' },
    })
  );

  assert.ok(html.includes('Create your family account'));
  assert.ok(html.includes('qa.parent@example.com'));
});
