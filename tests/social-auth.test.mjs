import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const load = createLoader(fileURLToPath(new URL('../', import.meta.url)));
const { configuredSocialStartUrl } = load('src/features/auth/social-auth.ts');
const { GET } = load('src/app/api/auth/social/start/route.ts');
const { SocialAuthButtons } = load('src/features/auth/social-auth-buttons.tsx');

test('social provider entrypoints require HTTPS and exclude embedded credentials', () => {
  assert.equal(configuredSocialStartUrl(' https://identity.example.com/start/google '), 'https://identity.example.com/start/google');
  for (const value of [undefined, '', '/login', 'javascript:alert(1)', 'http://identity.example.com', 'https://user:pass@identity.example.com', 'https://identity.example.com/#token', 'https://identity.example.com/?client_secret=secret']) {
    assert.equal(configuredSocialStartUrl(value), null);
  }
});

test('entrypoint route selects configured provider, fails closed, and ignores browser redirect targets', async () => {
  const savedGoogle = process.env.GOOGLE_AUTH_START_URL;
  const savedFacebook = process.env.FACEBOOK_AUTH_START_URL;
  try {
    delete process.env.GOOGLE_AUTH_START_URL;
    delete process.env.FACEBOOK_AUTH_START_URL;
    assert.equal((await GET(new Request('http://localhost/api/auth/social/start?provider=google'))).status, 503);
    assert.equal((await GET(new Request('http://localhost/api/auth/social/start?provider=instagram'))).status, 400);
    for (const provider of ['google', 'facebook']) {
      process.env[provider === 'google' ? 'GOOGLE_AUTH_START_URL' : 'FACEBOOK_AUTH_START_URL'] = `https://identity.example.com/start/${provider}`;
      const response = await GET(new Request(`http://localhost/api/auth/social/start?provider=${provider}&return_to=https://attacker.example`));
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      assert.deepEqual(await response.json(), { authorization_url: `https://identity.example.com/start/${provider}` });
    }
  } finally {
    if (savedGoogle === undefined) delete process.env.GOOGLE_AUTH_START_URL; else process.env.GOOGLE_AUTH_START_URL = savedGoogle;
    if (savedFacebook === undefined) delete process.env.FACEBOOK_AUTH_START_URL; else process.env.FACEBOOK_AUTH_START_URL = savedFacebook;
  }
});

test('both localized provider buttons are rendered, and both authentication screens mount them', () => {
  for (const locale of ['en', 'ar']) {
    const html = renderToStaticMarkup(React.createElement(SocialAuthButtons, { locale }));
    assert.match(html, /Google/); assert.match(html, /Facebook/);
    assert.equal((html.match(/type="button"/g) || []).length, 2);
    assert.doesNotMatch(html, /disabled=""/);
  }
  for (const file of ['login-form.tsx', 'registration-form.tsx']) {
    const source = readFileSync(new URL(`../src/features/auth/${file}`, import.meta.url), 'utf8');
    assert.match(source, /<SocialAuthButtons locale=\{locale\}/);
    assert.doesNotMatch(source, /alert\(/);
  }
  const login = readFileSync(new URL('../src/features/auth/login-form.tsx', import.meta.url), 'utf8');
  assert.match(login, /authApi.requestLogin/);
  assert.match(login, /authApi.verifyLogin/);
});
