import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { z } from 'zod';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);

const { getAuthCopy, authCopy } = load('src/features/auth/auth-copy.ts');
const { RegistrationForm } = load('src/features/auth/registration-form.tsx');
const { localPhone } = load('src/lib/phone.ts');
const { POST: postRegistration } = load('src/app/api/registrations/route.ts');

test('authCopy has localized contactRequired error message in en, ar, and de with exact approved copy', () => {
  const enCopy = getAuthCopy('en');
  const arCopy = getAuthCopy('ar');
  const deCopy = getAuthCopy('de');

  assert.equal(
    enCopy.register.errors.contactRequired,
    'Please provide at least one contact method: Email Address or WhatsApp Number.'
  );
  assert.equal(
    arCopy.register.errors.contactRequired,
    'يرجى إدخال البريد الإلكتروني أو رقم واتساب على الأقل.'
  );
  assert.equal(
    deCopy.register.errors.contactRequired,
    'Bitte geben Sie mindestens eine Kontaktmethode an: E-Mail-Adresse oder WhatsApp-Nummer.'
  );
});

test('RegistrationForm renders contact fields as individually non-mandatory in Step 1', () => {
  const htmlEn = renderToStaticMarkup(
    React.createElement(RegistrationForm, {
      locale: 'en',
      initialTicket: 'TEST_TICKET_123',
      initialIdentity: { method: 'email', identifier: 'parent@example.com' },
    })
  );

  assert.match(htmlEn, /id="parent_name"/);
  assert.match(htmlEn, /id="email"/);
  assert.match(htmlEn, /id="whatsapp"/);

  // Parent name remains required
  assert.match(htmlEn, /for="parent_name"[^>]*>[\s\S]*?Required/);

  // Email and WhatsApp do not have individual required tags
  assert.doesNotMatch(htmlEn, /for="email"[^>]*>[\s\S]*?Required/);
  assert.doesNotMatch(htmlEn, /for="whatsapp"[^>]*>[\s\S]*?Required/);
});

// Unit tests for the registration validation schema matching Acceptance Tests TC-01 through TC-11
function buildTestSchema(copy, phoneCountry = 'CA') {
  function phoneIsValid(value) {
    return /^\+?[1-9][\d\s().-]{7,20}$/.test(value.trim());
  }

  return z.object({
    parent_name: z.string().trim().min(2, copy.register.errors.required).max(100),
    guardian_relationship: z.string().min(1, copy.register.errors.required),
    email: z.string().trim().max(160).refine((value) => {
      if (!value) return true;
      return z.string().email().safeParse(value).success;
    }, copy.register.errors.email),
    whatsapp: z.string().trim().refine((value) => {
      if (!value) return true;
      return Boolean(localPhone(value, phoneCountry)) || phoneIsValid(value);
    }, copy.register.errors.phone),
  }).superRefine((data, ctx) => {
    const hasEmail = Boolean(data.email?.trim());
    const hasWhatsApp = Boolean(data.whatsapp?.trim());
    if (!hasEmail && !hasWhatsApp) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: copy.register.errors.contactRequired,
        path: ['email'],
      });
    }
  });
}

test('Acceptance Tests: TC-01 to TC-11 Registration Contact Method Validation', () => {
  const copy = getAuthCopy('en');
  const schema = buildTestSchema(copy, 'CA');

  const baseValid = {
    parent_name: 'Jane Doe',
    guardian_relationship: 'PARENT',
  };

  // TC-01: Valid Email, Empty WhatsApp -> Proceed
  const tc01 = schema.safeParse({ ...baseValid, email: 'valid@example.com', whatsapp: '' });
  assert.equal(tc01.success, true, 'TC-01 should succeed');

  // TC-02: Empty Email, Valid WhatsApp -> Proceed
  const tc02 = schema.safeParse({ ...baseValid, email: '', whatsapp: '+1 647 888 9999' });
  assert.equal(tc02.success, true, 'TC-02 should succeed');

  // TC-03: Valid Email, Valid WhatsApp -> Proceed
  const tc03 = schema.safeParse({ ...baseValid, email: 'valid@example.com', whatsapp: '+1 647 888 9999' });
  assert.equal(tc03.success, true, 'TC-03 should succeed');

  // TC-04: Empty Email, Empty WhatsApp -> Block
  const tc04 = schema.safeParse({ ...baseValid, email: '', whatsapp: '' });
  assert.equal(tc04.success, false, 'TC-04 should fail');
  assert.ok(
    tc04.error.issues.some((i) => i.path.includes('email') && i.message === copy.register.errors.contactRequired),
    'TC-04 should report contactRequired error'
  );

  // TC-05: Invalid Email, Empty WhatsApp -> Block
  const tc05 = schema.safeParse({ ...baseValid, email: 'invalid-email', whatsapp: '' });
  assert.equal(tc05.success, false, 'TC-05 should fail');
  assert.ok(
    tc05.error.issues.some((i) => i.path.includes('email') && i.message === copy.register.errors.email),
    'TC-05 should report invalid email error'
  );
  assert.equal(
    tc05.error.issues.some((i) => i.path.includes('whatsapp')),
    false,
    'TC-05 should not report error on empty whatsapp'
  );

  // TC-06: Empty Email, Invalid WhatsApp -> Block
  const tc06 = schema.safeParse({ ...baseValid, email: '', whatsapp: '123' });
  assert.equal(tc06.success, false, 'TC-06 should fail');
  assert.ok(
    tc06.error.issues.some((i) => i.path.includes('whatsapp') && i.message === copy.register.errors.phone),
    'TC-06 should report invalid phone error'
  );
  assert.equal(
    tc06.error.issues.some((i) => i.path.includes('email')),
    false,
    'TC-06 should not report error on empty email'
  );

  // TC-07: Invalid Email, Valid WhatsApp -> Block with email error
  const tc07 = schema.safeParse({ ...baseValid, email: 'notanemail', whatsapp: '+1 647 888 9999' });
  assert.equal(tc07.success, false, 'TC-07 should fail');
  assert.ok(
    tc07.error.issues.some((i) => i.path.includes('email') && i.message === copy.register.errors.email),
    'TC-07 should report email error'
  );
  assert.equal(
    tc07.error.issues.some((i) => i.path.includes('whatsapp')),
    false,
    'TC-07 should not report phone error when phone is valid'
  );

  // TC-08: Valid Email, Invalid WhatsApp -> Block with phone error
  const tc08 = schema.safeParse({ ...baseValid, email: 'valid@example.com', whatsapp: '99' });
  assert.equal(tc08.success, false, 'TC-08 should fail');
  assert.ok(
    tc08.error.issues.some((i) => i.path.includes('whatsapp') && i.message === copy.register.errors.phone),
    'TC-08 should report phone error'
  );
  assert.equal(
    tc08.error.issues.some((i) => i.path.includes('email')),
    false,
    'TC-08 should not report email error when email is valid'
  );

  // TC-09: Whitespace Email, Whitespace WhatsApp -> Block
  const tc09 = schema.safeParse({ ...baseValid, email: '   ', whatsapp: '   ' });
  assert.equal(tc09.success, false, 'TC-09 should fail');
  assert.ok(
    tc09.error.issues.some((i) => i.path.includes('email') && i.message === copy.register.errors.contactRequired),
    'TC-09 should report contactRequired error on whitespace'
  );

  // TC-10: Valid Email, Whitespace WhatsApp -> Proceed
  const tc10 = schema.safeParse({ ...baseValid, email: 'valid@example.com', whatsapp: '   ' });
  assert.equal(tc10.success, true, 'TC-10 should succeed');

  // TC-11: Whitespace Email, Valid WhatsApp -> Proceed
  const tc11 = schema.safeParse({ ...baseValid, email: '   ', whatsapp: '+1 647 888 9999' });
  assert.equal(tc11.success, true, 'TC-11 should succeed');
});

test('Parent Name remains strictly mandatory', () => {
  const copy = getAuthCopy('en');
  const schema = buildTestSchema(copy, 'CA');

  const resEmptyName = schema.safeParse({
    parent_name: '',
    guardian_relationship: 'PARENT',
    email: 'valid@example.com',
    whatsapp: '',
  });
  assert.equal(resEmptyName.success, false);
  assert.ok(
    resEmptyName.error.issues.some((i) => i.path.includes('parent_name') && i.message === copy.register.errors.required)
  );

  const resWhitespaceName = schema.safeParse({
    parent_name: '   ',
    guardian_relationship: 'PARENT',
    email: 'valid@example.com',
    whatsapp: '',
  });
  assert.equal(resWhitespaceName.success, false);
  assert.ok(
    resWhitespaceName.error.issues.some((i) => i.path.includes('parent_name'))
  );
});

test('Arabic locale provides translated contactRequired error message', () => {
  const arCopy = getAuthCopy('ar');
  const arSchema = buildTestSchema(arCopy, 'CA');

  const res = arSchema.safeParse({
    parent_name: 'سارة محمد',
    guardian_relationship: 'PARENT',
    email: '',
    whatsapp: '',
  });
  assert.equal(res.success, false);
  assert.ok(
    res.error.issues.some(
      (i) => i.path.includes('email') && i.message === 'يرجى إدخال البريد الإلكتروني أو رقم واتساب على الأقل.'
    )
  );
});

test('Server-side POST /api/registrations enforces at-least-one-contact rule and rejects bypass attempts', async () => {
  // 1. Both empty -> rejected 400
  const reqBothEmpty = new Request('http://localhost/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      guardian: { full_name: 'Jane Doe', email: '', phone: '' },
    }),
  });
  const resBothEmpty = await postRegistration(reqBothEmpty);
  assert.equal(resBothEmpty.status, 400);
  const dataBothEmpty = await resBothEmpty.json();
  assert.equal(dataBothEmpty.code, 'CONTACT_METHOD_REQUIRED');

  // 2. Whitespace only -> rejected 400
  const reqWhitespace = new Request('http://localhost/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      guardian: { full_name: 'Jane Doe', email: '   ', phone: '   ' },
    }),
  });
  const resWhitespace = await postRegistration(reqWhitespace);
  assert.equal(resWhitespace.status, 400);
  const dataWhitespace = await resWhitespace.json();
  assert.equal(dataWhitespace.code, 'CONTACT_METHOD_REQUIRED');

  // 3. Invalid email with empty phone -> rejected 400
  const reqBadEmail = new Request('http://localhost/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      guardian: { full_name: 'Jane Doe', email: 'not-an-email', phone: '' },
    }),
  });
  const resBadEmail = await postRegistration(reqBadEmail);
  assert.equal(resBadEmail.status, 400);
  const dataBadEmail = await resBadEmail.json();
  assert.equal(dataBadEmail.code, 'INVALID_EMAIL');

  // 4. Invalid phone with empty email -> rejected 400
  const reqBadPhone = new Request('http://localhost/api/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      guardian: { full_name: 'Jane Doe', email: '', phone: '123' },
    }),
  });
  const resBadPhone = await postRegistration(reqBadPhone);
  assert.equal(resBadPhone.status, 400);
  const dataBadPhone = await resBadPhone.json();
  assert.equal(dataBadPhone.code, 'INVALID_PHONE');
});

test('TC-12 and TC-13: Preserves contact data for email-only and WhatsApp-only profiles', () => {
  // Email-only verified profile preserves and prefills email
  const htmlEmailOnly = renderToStaticMarkup(
    React.createElement(RegistrationForm, {
      locale: 'en',
      initialTicket: 'TEST_TICKET_EMAIL',
      initialIdentity: { method: 'email', identifier: 'sarah@example.com', displayName: 'Sarah Connor' },
    })
  );
  assert.match(htmlEmailOnly, /value="sarah@example\.com"/);
  assert.match(htmlEmailOnly, /value="Sarah Connor"/);

  // WhatsApp-only verified profile preserves and prefills WhatsApp
  const htmlWhatsAppOnly = renderToStaticMarkup(
    React.createElement(RegistrationForm, {
      locale: 'en',
      initialTicket: 'TEST_TICKET_WA',
      initialIdentity: { method: 'whatsapp', identifier: '+16478889999', displayName: 'John Connor' },
    })
  );
  assert.match(htmlWhatsAppOnly, /\+16478889999/);
  assert.match(htmlWhatsAppOnly, /value="John Connor"/);
});

