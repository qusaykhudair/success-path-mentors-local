import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';

const load = createLoader(fileURLToPath(new URL('../', import.meta.url)));
const phone = load('src/lib/phone.ts');
const { validateRegistrationPhone } = load('src/lib/registration-phone.ts');
const cases = [
  ['PS', '599123456', '+970', 'Asia/Gaza', 'Palestine'],
  ['EG', '1001234567', '+20', 'Africa/Cairo', 'Egypt'],
  ['JO', '790123456', '+962', 'Asia/Amman', 'Jordan'],
  ['SA', '512345678', '+966', 'Asia/Riyadh', 'Saudi Arabia'],
  ['AE', '501234567', '+971', 'Asia/Dubai', 'United Arab Emirates'],
  ['GB', '7400123456', '+44', 'Europe/London', 'United Kingdom'],
  ['US', '2025550123', '+1', 'America/New_York', 'United States'],
];
for (const [code, local, dial, timezone, country] of cases) {
  test(`${code}: local input, E.164, country defaults and proxy contract`, () => {
    const details = phone.localPhone(local, code);
    assert.deepEqual(details, { countryCode: code, dialCode: dial, phoneNumber: local, phoneE164: dial + local });
    assert.equal(phone.dialCode(code), dial);
    assert.deepEqual(phone.phoneDefaults(code, '', false), { country, timezone });
    const input = { guardian: { phone: details.phoneE164, full_name: 'Test' }, registration: { timezone }, phoneDetails: details, country };
    const output = validateRegistrationPhone(input);
    assert.deepEqual(output, { guardian: input.guardian, registration: input.registration });
    assert.equal(input.country, country, 'validation does not mutate the request');
  });
}
test('timezone context is constrained to country and manual overrides survive country changes', () => {
  assert.equal(phone.countryTimezone('US', 'America/Los_Angeles'), 'America/Los_Angeles');
  assert.equal(phone.countryTimezone('US', 'Africa/Cairo'), 'America/New_York');
  assert.deepEqual(phone.phoneDefaults('EG', 'Asia/Riyadh', true), { country: 'Egypt', timezone: 'Asia/Riyadh' });
  assert.equal(phone.phoneDefaults('EG', 'Asia/Gaza', false).timezone, 'Africa/Cairo');
  assert.equal(phone.isIanaTimezone('GMT+2'), false);
  assert.equal(phone.isIanaTimezone('Asia/Gaza'), true);
});
test('strict validation rejects invalid numbers, shared-code mismatches, extensions and invalid metadata', () => {
  for (const value of ['', '123', '599123456 garbage', '+970599123456', '599123456 ext. 12']) assert.equal(phone.localPhone(value, 'PS'), null);
  assert.equal(phone.normalizePhone('+12025550123', 'CA'), null);
  assert.equal(phone.normalizePhone('+970599123456', 'XX'), null);
  assert.equal(phone.normalizePhone('+201001234567', 'PS'), null);
  const details = phone.localPhone('599123456', 'PS');
  const base = { guardian: { phone: details.phoneE164 }, registration: { timezone: 'Asia/Gaza' }, phoneDetails: details };
  for (const [key, value] of [['countryCode', 'EG'], ['dialCode', '+20'], ['phoneNumber', '123'], ['phoneE164', '+201001234567']]) {
    assert.throws(() => validateRegistrationPhone({ ...base, phoneDetails: { ...details, [key]: value } }));
  }
  assert.throws(() => validateRegistrationPhone({ ...base, registration: { timezone: 'Egypt Time' } }));
  for (const invalid of [null, [], {}, { guardian: null }]) assert.throws(() => validateRegistrationPhone(invalid));
});
test('existing international phone fields remain compatible; no inferred location or duplicate policy', () => {
  const legacy = { guardian: { phone: '+44 7400 123456' }, registration: { timezone: 'Asia/Riyadh' } };
  assert.equal(validateRegistrationPhone(legacy).guardian.phone, '+447400123456');
  assert.equal(validateRegistrationPhone(legacy).registration.timezone, 'Asia/Riyadh');
  assert.deepEqual(validateRegistrationPhone(legacy), validateRegistrationPhone(legacy), 'proxy leaves duplicate decisions to upstream');
  assert.equal(phone.localPhone('07400 123456', 'GB').phoneE164, '+447400123456');
});
