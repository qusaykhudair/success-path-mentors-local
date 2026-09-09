import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createLoader } from './helpers/ts-loader.mjs';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
for (const name of ['window', 'document', 'HTMLElement', 'HTMLInputElement', 'Event', 'MouseEvent']) globalThis[name] = dom.window[name];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const require = createRequire(import.meta.url);
const React = require('react');
const { createRoot } = require('react-dom/client');
const load = createLoader(fileURLToPath(new URL('../', import.meta.url)));
const { PhoneInput } = load('src/components/ui/phone-input.tsx');
const { RegistrationForm, RegistrationCompletionForm } = load('src/features/auth/registration-form.tsx');
const { LoginForm } = load('src/features/auth/login-form.tsx');

async function change(input, value) {
  await React.act(async () => {
    if (input.tagName === 'INPUT') Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value').set.call(input, value);
    else input.value = value;
    input.dispatchEvent(new dom.window.Event(input.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true }));
  });
}
test('signup starts with four methods and never treats an unavailable challenge as verified', async () => {
  const container = document.createElement('div'); document.body.append(container);
  const root = createRoot(container);
  await React.act(async () => root.render(React.createElement(RegistrationForm, { locale: 'en' })));
  assert.equal(container.querySelector('#parent_name'), null);
  assert.doesNotMatch(container.textContent, /Use the current registration form/);
  for (const label of ['Sign up with Email', 'Sign up with WhatsApp']) {
    const button = [...container.querySelectorAll('button')].find((node) => node.textContent === label);
    assert.ok(button.querySelector('svg'), `${label} needs its icon`);
    await React.act(async () => button.click());
    assert.match(container.textContent, /No code has been sent/);
    assert.ok([...container.querySelectorAll('button')].find((node) => node.textContent.includes('Send verification code')).disabled);
    assert.equal(container.querySelector('#parent_name'), null);
  }
  assert.ok(container.querySelector('#signup-whatsapp'));
  await React.act(async () => root.unmount()); container.remove();
});
test('login exposes four methods and preserves separate email and phone drafts', async () => {
  const container = document.createElement('div'); document.body.append(container);
  const root = createRoot(container);
  await React.act(async () => root.render(React.createElement(LoginForm, { locale: 'en' })));
  const choose = async (label) => {
    const button = [...container.querySelectorAll('button')].find((node) => node.textContent.includes(label));
    assert.ok(button, `missing ${label}`);
    assert.ok(button.querySelector('svg'), `${label} needs its icon`);
    await React.act(async () => button.click());
  };
  assert.match(container.textContent, /Google/);
  assert.match(container.textContent, /Facebook/);
  await change(container.querySelector('input[type=email]'), 'parent@example.com');
  await choose('Continue with WhatsApp');
  await change(container.querySelector('select[aria-label$="Country and calling code"]'), 'PS');
  await change(container.querySelector('input[type=tel]'), '599123456');
  assert.equal(container.querySelector('input[type=tel]').validity.valid, true);
  await choose('Continue with Email');
  assert.equal(container.querySelector('input[type=email]').value, 'parent@example.com');
  await choose('Continue with WhatsApp');
  assert.equal(container.querySelector('input[type=tel]').value, '599123456');
  assert.equal(container.querySelector('select[aria-label$="Country and calling code"]').value, 'PS');
  await change(container.querySelector('input[type=tel]'), '123');
  assert.equal(container.querySelector('input[type=tel]').validity.valid, false);
  await React.act(async () => root.unmount()); container.remove();
});
test('search, country selection, untouched local input, native validity and canonical form value', async () => {
  const container = document.createElement('div'); document.body.append(container);
  const root = createRoot(container);
  function Harness() {
    const [country, setCountry] = React.useState('PS'); const [value, setValue] = React.useState('');
    return React.createElement(PhoneInput, { id: 'phone', name: 'phone', label: 'Phone', country, value, onCountryChange: setCountry, onChange: setValue, required: true });
  }
  await React.act(async () => root.render(React.createElement(Harness)));
  const input = container.querySelector('input[type=tel]');
  assert.equal(input.value, '');
  await change(container.querySelector('input[type=search]'), 'Palestine');
  assert.equal(container.querySelectorAll('option').length, 1);
  await change(input, '599123456');
  assert.equal(input.validity.valid, true);
  assert.equal(container.querySelector('input[name=phone]').value, '+970599123456');
  await change(container.querySelector('input[type=search]'), 'Egypt');
  await change(container.querySelector('select'), 'EG');
  assert.equal(input.value, '599123456');
  assert.equal(input.validity.valid, false);
  await change(input, '1001234567');
  assert.equal(input.validity.valid, true);
  assert.equal(container.querySelector('input[name=phone]').value, '+201001234567');
  await React.act(async () => root.unmount()); container.remove();
});
test('unmounted completion UI fills country/timezone, preserves manual overrides across steps and resets explicitly', async () => {
  window.scrollTo = () => {};
  const container = document.createElement('div'); document.body.append(container);
  const root = createRoot(container);
  await React.act(async () => root.render(React.createElement(RegistrationCompletionForm, { locale: 'en' })));
  await change(container.querySelector('select[aria-label="WhatsApp number: Country and calling code"]') || container.querySelector('select[aria-label$="Country and calling code"]'), 'PS');
  // Use the actual form controls to advance the registration wizard.
  for (const [id, value] of [['parent_name', 'Test Parent'], ['guardian_relationship', 'MOTHER'], ['email', 'test@example.com'], ['whatsapp', '599123456']]) {
    const input = container.querySelector(`#${id}`);
    if (input.tagName === 'SELECT') await change(input, [...input.options].find((option) => option.value)?.value);
    else await change(input, value);
  }
  const clickText = async (pattern) => {
    const button = [...container.querySelectorAll('button')].find((node) => pattern.test(node.textContent));
    assert.ok(button, `missing button ${pattern}`);
    await React.act(async () => button.click());
  };
  await clickText(/^Continue$/);
  await change(container.querySelector('#student_first_name'), 'Test Student');
  await change(container.querySelector('#grade'), '5');
  await clickText(/^Continue$/);
  assert.equal(container.querySelector('#country').value, 'Palestine');
  assert.equal(container.querySelector('#timezone').value, 'Asia/Gaza');
  await change(container.querySelector('#timezone'), 'Asia/Riyadh');
  await clickText(/^Back$/); await clickText(/^Back$/);
  await change(container.querySelector('select[aria-label$="Country and calling code"]'), 'EG');
  await change(container.querySelector('#whatsapp'), '1001234567');
  await clickText(/^Continue$/); await clickText(/^Continue$/);
  assert.equal(container.querySelector('#country').value, 'Egypt');
  assert.equal(container.querySelector('#timezone').value, 'Asia/Riyadh');
  await clickText(/Reset to country timezone/);
  assert.equal(container.querySelector('#timezone').value, 'Africa/Cairo');
  await React.act(async () => root.unmount()); container.remove();
});
