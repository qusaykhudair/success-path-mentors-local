import { isIanaTimezone, normalizePhone, type PhoneDetails } from './phone';

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid registration body');
  return value as Record<string, unknown>;
}

/** Validate the website envelope, then retain the existing external service contract. */
export function validateRegistrationPhone(value: unknown): Record<string, unknown> {
  const body = record(value);
  const guardian = record(body.guardian);
  const registration = record(body.registration);
  const details = body.phoneDetails === undefined ? undefined : record(body.phoneDetails);
  const phone = normalizePhone(guardian.phone, details?.countryCode);
  if (!phone) throw new Error('Enter a valid phone number for the selected country');
  if (details) {
    for (const key of ['countryCode', 'dialCode', 'phoneNumber', 'phoneE164'] as const) {
      if (details[key] !== phone[key as keyof PhoneDetails]) throw new Error('Phone details do not match the international phone number');
    }
  }
  if (!isIanaTimezone(registration.timezone)) throw new Error('Select a valid IANA timezone');
  if (body.country !== undefined && (typeof body.country !== 'string' || !body.country.trim() || body.country.length > 100)) throw new Error('Invalid country');
  if (body.secondaryPhoneDetails !== undefined) {
    const secondary = record(body.secondaryPhoneDetails);
    const normalized = normalizePhone(secondary.phoneE164, secondary.countryCode);
    if (!normalized || Object.keys(normalized).some((key) => secondary[key] !== normalized[key as keyof PhoneDetails])) throw new Error('Invalid secondary phone number');
  }
  // These fields are website-only until the upstream service supports structured data.
  const upstream = { ...body };
  delete upstream.phoneDetails;
  delete upstream.secondaryPhoneDetails;
  delete upstream.country;
  return { ...upstream, guardian: { ...guardian, phone: phone.phoneE164 } };
}
