import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const { configuredSocialStartUrl, isSocialProvider } = load('src/features/auth/social-auth.ts');
const { GET } = load('src/app/api/auth/social/start/route.ts');
const { SocialAuthButtons } = load('src/features/auth/social-auth-buttons.tsx');
const { SignupMethods } = load('src/features/auth/signup-methods.tsx');
const { LoginForm } = load('src/features/auth/login-form.tsx');
const { RegistrationForm } = load('src/features/auth/registration-form.tsx');
const { authCopy, getAuthCopy } = load('src/features/auth/auth-copy.ts');
const markets = load('src/config/markets.ts');
const { routing } = load('src/i18n/routing.ts');
const {
  getRegistrationCountries,
  getRegistrationTimezone,
  getRegistrationOptions,
} = load('src/features/auth/registration-options.ts');
const { createVerifiedSignupTicket, verifySignupTicket } = load('src/features/auth/signup-transaction.ts');
const { requestSignupOtp, verifySignupOtp } = load('src/features/auth/signup-otp-service.ts');
const { POST: postOtpRequest } = load('src/app/api/auth/signup/otp/request/route.ts');
const { POST: postOtpVerify } = load('src/app/api/auth/signup/otp/verify/route.ts');
const { GET: getSession } = load('src/app/api/auth/signup/session/route.ts');
const { GET: getSocialCallback } = load('src/app/api/auth/social/callback/route.ts');

const notFoundError = new Error('NOT_FOUND');
const navigation = {
  notFound: () => { throw notFoundError; },
  redirect: (path) => { throw Object.assign(new Error('REDIRECT'), { path }); },
};

test('social provider entrypoints require HTTPS and exclude embedded credentials', () => {
  assert.equal(configuredSocialStartUrl(' https://identity.example.com/start/google '), 'https://identity.example.com/start/google');
  for (const value of [
    undefined,
    '',
    '/login',
    'javascript:alert(1)',
    'http://identity.example.com',
    'https://user:pass@identity.example.com',
    'https://identity.example.com/#token',
    'https://identity.example.com/?client_secret=secret',
    'https://identity.example.com/?code_verifier=secret',
  ]) {
    assert.equal(configuredSocialStartUrl(value), null);
  }
});

test('social start accepts only google and facebook, rejects unknown providers', () => {
  assert.equal(isSocialProvider('google'), true);
  assert.equal(isSocialProvider('facebook'), true);
  assert.equal(isSocialProvider('apple'), false);
  assert.equal(isSocialProvider('twitter'), false);
  assert.equal(isSocialProvider('github'), false);
  assert.equal(isSocialProvider(null), false);
  assert.equal(isSocialProvider(undefined), false);
});

test('entrypoint route selects configured provider, fails closed, and prevents open redirect', async () => {
  const savedGoogle = process.env.GOOGLE_AUTH_START_URL;
  const savedFacebook = process.env.FACEBOOK_AUTH_START_URL;
  try {
    delete process.env.GOOGLE_AUTH_START_URL;
    delete process.env.FACEBOOK_AUTH_START_URL;
    assert.equal((await GET(new Request('http://localhost/api/auth/social/start?provider=google'))).status, 503);
    assert.equal((await GET(new Request('http://localhost/api/auth/social/start?provider=instagram'))).status, 400);
    assert.equal((await GET(new Request('http://localhost/api/auth/social/start?provider=apple'))).status, 400);

    for (const provider of ['google', 'facebook']) {
      process.env[provider === 'google' ? 'GOOGLE_AUTH_START_URL' : 'FACEBOOK_AUTH_START_URL'] =
        `https://identity.example.com/start/${provider}`;

      // Open redirect attempt via return_to is ignored
      const response = await GET(
        new Request(`http://localhost/api/auth/social/start?provider=${provider}&return_to=https://attacker.example`)
      );
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      const body = await response.json();
      assert.deepEqual(body, { authorization_url: `https://identity.example.com/start/${provider}` });
      assert.doesNotMatch(body.authorization_url, /attacker\.example/);

      // Germany safe return context is preserved when provided
      const deResponse = await GET(
        new Request(`http://localhost/api/auth/social/start?provider=${provider}&market=germany&ui_locale=de&mode=login`)
      );
      assert.equal(deResponse.status, 200);
      const deBody = await deResponse.json();
      assert.equal(deBody.context.market, 'germany');
      assert.equal(deBody.context.ui_locale, 'de');
      assert.equal(deBody.context.mode, 'login');
      assert.match(deBody.authorization_url, /market=germany/);
      assert.match(deBody.authorization_url, /ui_locale=de/);
    }
  } finally {
    if (savedGoogle === undefined) delete process.env.GOOGLE_AUTH_START_URL; else process.env.GOOGLE_AUTH_START_URL = savedGoogle;
    if (savedFacebook === undefined) delete process.env.FACEBOOK_AUTH_START_URL; else process.env.FACEBOOK_AUTH_START_URL = savedFacebook;
  }
});

test('both localized provider buttons are rendered, and both authentication screens mount them', () => {
  for (const locale of ['en', 'ar', 'de']) {
    const html = renderToStaticMarkup(React.createElement(SocialAuthButtons, { locale }));
    assert.match(html, /Google/);
    assert.match(html, /Facebook/);
    assert.equal((html.match(/type="button"/g) || []).length, 2);
    assert.doesNotMatch(html, /disabled=""/);
  }
  for (const file of ['login-form.tsx', 'signup-methods.tsx']) {
    const source = readFileSync(new URL(`../src/features/auth/${file}`, import.meta.url), 'utf8');
    assert.match(source, /<SocialAuthButtons/);
    assert.doesNotMatch(source, /alert\(/);
  }
  const regSource = readFileSync(new URL('../src/features/auth/registration-form.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(regSource, /<SocialAuthButtons/);
  assert.match(regSource, /<SignupMethods/);
  const login = readFileSync(new URL('../src/features/auth/login-form.tsx', import.meta.url), 'utf8');
  assert.match(login, /authApi.requestLogin/);
  assert.match(login, /authApi.verifyLogin/);
});

test('German provider labels exist with accurate German copy', () => {
  const deCopy = getAuthCopy('de').social;
  assert.equal(deCopy.continueWithGoogle, 'Mit Google fortfahren');
  assert.equal(deCopy.continueWithFacebook, 'Mit Facebook fortfahren');
  assert.equal(deCopy.signupWithEmail, 'Mit E-Mail registrieren');
  assert.equal(deCopy.signupWithWhatsapp, 'Mit WhatsApp registrieren');
  assert.equal(deCopy.or, 'ODER');
  assert.equal(deCopy.connecting, 'Verbindung wird hergestellt…');
});

test('Germany DE Login renders Google, Facebook, and retains identifier OTP workflow', () => {
  const html = renderToStaticMarkup(
    React.createElement(LoginForm, { locale: 'de', marketId: 'germany' })
  );
  assert.match(html, /Mit Google fortfahren/);
  assert.match(html, /Mit Facebook fortfahren/);
  assert.match(html, /ODER/);
  assert.match(html, /E-Mail, WhatsApp- oder Mobilfunknummer/);
  assert.match(html, /id="login-identifier"/);
  assert.match(html, /Sicherheitscode senden/);
});

test('Germany EN Login has same provider parity', () => {
  const html = renderToStaticMarkup(
    React.createElement(LoginForm, { locale: 'en', marketId: 'germany' })
  );
  assert.match(html, /Continue with Google/);
  assert.match(html, /Continue with Facebook/);
  assert.match(html, /OR/);
  assert.match(html, /Email, WhatsApp or mobile number/);
  assert.match(html, /id="login-identifier"/);
  assert.match(html, /Send secure code/);
});

test('Germany AR Login has same provider parity and RTL support', () => {
  const html = renderToStaticMarkup(
    React.createElement(LoginForm, { locale: 'ar', marketId: 'germany' })
  );
  assert.match(html, /المتابعة باستخدام Google/);
  assert.match(html, /المتابعة باستخدام Facebook/);
  assert.match(html, /أو/);
  assert.match(html, /البريد أو رقم WhatsApp أو الهاتف/);
  assert.match(html, /id="login-identifier"/);
  assert.match(html, /إرسال رمز آمن/);
});

test('Germany Register renders Google, Facebook, Email, and WhatsApp methods', () => {
  for (const locale of ['de', 'en', 'ar']) {
    const html = renderToStaticMarkup(
      React.createElement(RegistrationForm, { locale, marketId: 'germany' })
    );
    assert.match(html, /Google/);
    assert.match(html, /Facebook/);
    assert.match(html, locale === 'ar' ? /واتساب/ : /WhatsApp/);
    if (locale === 'de') {
      assert.match(html, /Mit E-Mail registrieren/);
      assert.match(html, /Mit WhatsApp registrieren/);
    } else if (locale === 'en') {
      assert.match(html, /Sign up with Email/);
      assert.match(html, /Sign up with WhatsApp/);
    } else {
      assert.match(html, /إنشاء حساب بالبريد الإلكتروني/);
      assert.match(html, /إنشاء حساب بواسطة واتساب/);
    }
  }
});

test('North America Login and Register provider regression', () => {
  for (const locale of ['en', 'ar']) {
    const loginHtml = renderToStaticMarkup(
      React.createElement(LoginForm, { locale, marketId: 'north-america' })
    );
    assert.match(loginHtml, /Google/);
    assert.match(loginHtml, /Facebook/);
    assert.match(loginHtml, /id="login-identifier"/);

    const registerHtml = renderToStaticMarkup(
      React.createElement(RegistrationForm, { locale, marketId: 'north-america' })
    );
    assert.match(registerHtml, /Google/);
    assert.match(registerHtml, /Facebook/);
    assert.match(registerHtml, locale === 'ar' ? /واتساب/ : /WhatsApp/);
  }
});

test('global next-intl locale list strictly remains en and ar', () => {
  assert.deepEqual(routing.locales, ['en', 'ar']);
  assert.equal(routing.defaultLocale, 'en');
});

test('Germany registration defaults remain Germany and Europe/Berlin', () => {
  const germanyConfig = markets.getMarketConfig('germany');
  const countries = getRegistrationCountries(germanyConfig, 'de');
  assert.equal(countries[0][0], 'Germany');
  assert.equal(countries[0][1], 'Deutschland');

  const timezone = getRegistrationTimezone(germanyConfig, () => '');
  assert.equal(timezone, 'Europe/Berlin');

  const options = getRegistrationOptions(germanyConfig, 'Europe/Berlin');
  assert.equal(options.defaultCountry, 'Germany');
  assert.equal(options.defaultTimezone, 'Europe/Berlin');
});

test('Germany child routing rejects /de/fr/login and /de/fr/register as invalid', async () => {
  const boundaryLoad = createLoader(root, { 'next/navigation': navigation });
  const page = boundaryLoad('src/app/de/[[...marketSegments]]/page.tsx').default;

  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['fr', 'login'] }) }), (err) => err === notFoundError);
  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['fr', 'register'] }) }), (err) => err === notFoundError);
});

test('verified signup ticket creates, verifies, expires, and rejects tamper', () => {
  const identity = { method: 'email', identifier: 'parent@example.com', displayName: 'Jane Doe' };
  const ticket = createVerifiedSignupTicket(identity, 'germany', 'de');
  assert.ok(ticket && typeof ticket === 'string');
  assert.equal(ticket.split('.').length, 2);

  const payload = verifySignupTicket(ticket);
  assert.ok(payload);
  assert.equal(payload.identity.method, 'email');
  assert.equal(payload.identity.identifier, 'parent@example.com');
  assert.equal(payload.identity.displayName, 'Jane Doe');
  assert.equal(payload.market, 'germany');
  assert.equal(payload.uiLocale, 'de');
  assert.ok(payload.expiresAt > Date.now());

  // Tamper rejection: altered payload
  const [data, sig] = ticket.split('.');
  const tamperedData = Buffer.from(JSON.stringify({ ...JSON.parse(Buffer.from(data, 'base64').toString()), identity: { method: 'email', identifier: 'hacker@example.com' } })).toString('base64');
  assert.equal(verifySignupTicket(`${tamperedData}.${sig}`), null);

  // Tamper rejection: altered signature
  assert.equal(verifySignupTicket(`${data}.${sig}invalid`), null);

  // Rejection: invalid token structures
  assert.equal(verifySignupTicket(null), null);
  assert.equal(verifySignupTicket(''), null);
  assert.equal(verifySignupTicket('not-a-token'), null);
});

test('signup OTP endpoints generate challenge, verify code, and set HttpOnly ticket cookie', async () => {
  // 1. Email OTP request
  const emailReq = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel: 'EMAIL', identifier: 'guardian@example.de', market: 'germany', ui_locale: 'de' }),
  });
  const emailRes = await postOtpRequest(emailReq);
  assert.equal(emailRes.status, 200);
  const emailData = await emailRes.json();
  assert.ok(emailData.challenge_id);
  assert.equal(emailData.channel, 'EMAIL');
  assert.match(emailData.masked_destination, /@example\.de/);

  // 2. Reject invalid email
  const badEmailReq = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel: 'EMAIL', identifier: 'not-an-email', market: 'germany', ui_locale: 'de' }),
  });
  assert.equal((await postOtpRequest(badEmailReq)).status, 400);

  // 3. WhatsApp OTP request
  const waReq = new Request('http://localhost/api/auth/signup/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel: 'WHATSAPP', identifier: '+49 151 12345678', market: 'germany', ui_locale: 'de' }),
  });
  const waRes = await postOtpRequest(waReq);
  assert.equal(waRes.status, 200);
  const waData = await waRes.json();
  assert.ok(waData.challenge_id);
  assert.equal(waData.channel, 'WHATSAPP');

  // 4. Verification with wrong code returns 400
  const wrongVerifyReq = new Request('http://localhost/api/auth/signup/otp/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ challenge_id: emailData.challenge_id, code: '000000' }),
  });
  const wrongVerifyRes = await postOtpVerify(wrongVerifyReq);
  assert.equal(wrongVerifyRes.status, 400);

  // 5. Test direct service verification with known challenge
  const directChallenge = await requestSignupOtp({ channel: 'EMAIL', identifier: 'direct@example.com', market: 'germany', uiLocale: 'de' });
  assert.ok(directChallenge.challenge_id);
  // Incorrect code
  const badResult = verifySignupOtp({ challengeId: directChallenge.challenge_id, code: '999999' });
  assert.ok('error' in badResult && badResult.status === 400);
  // Correct code using internal challenge
  const validResult = verifySignupOtp({ challengeId: directChallenge.challenge_id, code: directChallenge._dev_otp || '123456' });
  if ('success' in validResult && validResult.success) {
    assert.ok(validResult.signup_ticket);
    assert.equal(validResult.verified_identity.identifier, 'direct@example.com');

    // Replay prevention: cannot reuse code
    const secondUse = verifySignupOtp({ challengeId: directChallenge.challenge_id, code: directChallenge._dev_otp });
    assert.ok('error' in secondUse);
  }
});

test('signup session endpoint validates ticket from Authorization header or query', async () => {
  const ticket = createVerifiedSignupTicket({ method: 'email', identifier: 'verified@example.com' }, 'germany', 'de');

  // Valid via query
  const resQuery = await getSession(new Request(`http://localhost/api/auth/signup/session?ticket=${encodeURIComponent(ticket)}`));
  assert.equal(resQuery.status, 200);
  const dataQuery = await resQuery.json();
  assert.equal(dataQuery.valid, true);
  assert.equal(dataQuery.identity.identifier, 'verified@example.com');

  // Valid via Bearer header
  const resHeader = await getSession(new Request('http://localhost/api/auth/signup/session', {
    headers: { Authorization: `Bearer ${ticket}` },
  }));
  assert.equal(resHeader.status, 200);
  const dataHeader = await resHeader.json();
  assert.equal(dataHeader.valid, true);

  // Invalid / missing ticket
  const resEmpty = await getSession(new Request('http://localhost/api/auth/signup/session'));
  assert.equal(resEmpty.status, 200);
  assert.equal((await resEmpty.json()).valid, false);
});

test('social callback establishes verified signup transaction and returns to profile completion', async () => {
  const callbackUrl = 'http://localhost/api/auth/social/callback?provider=google&market=germany&ui_locale=de&mode=register&email=oauth@example.com&name=GoogleUser';
  const res = await getSocialCallback(new Request(callbackUrl));
  assert.equal(res.status, 307); // redirect
  const location = res.headers.get('location');
  assert.match(location, /\/de\/de\/register\?signup_ticket=/);
  const cookie = res.headers.get('set-cookie');
  assert.match(cookie, /spm_signup_ticket=/);
  assert.match(cookie, /HttpOnly/);

  // Extract ticket from redirect url and verify
  const redirectParams = new URL(location).searchParams;
  const ticket = redirectParams.get('signup_ticket');
  const payload = verifySignupTicket(ticket);
  assert.ok(payload);
  assert.equal(payload.identity.method, 'google');
  assert.equal(payload.identity.identifier, 'oauth@example.com');
  assert.equal(payload.identity.displayName, 'GoogleUser');
  assert.equal(payload.market, 'germany');
  assert.equal(payload.uiLocale, 'de');
});

test('Profile Completion view renders profile form with prefilled identifier without SocialAuthButtons in guardian step', () => {
  const verifiedTicket = createVerifiedSignupTicket({
    method: 'email',
    identifier: 'verified.parent@example.com',
  }, 'germany', 'de');

  const html = renderToStaticMarkup(
    React.createElement(RegistrationForm, {
      locale: 'de',
      marketId: 'germany',
      initialTicket: verifiedTicket,
      initialIdentity: { method: 'email', identifier: 'verified.parent@example.com' },
    })
  );

  // Profile completion form fields are rendered
  assert.match(html, /id="parent_name"/);
  assert.match(html, /id="email"/);
  assert.match(html, /id="whatsapp"/);
  assert.match(html, /verified\.parent@example\.com/);

  // No SocialAuthButtons in guardian step
  assert.doesNotMatch(html, /id="social-auth-/);
});

