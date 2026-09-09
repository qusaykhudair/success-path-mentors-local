import { getCountries, getCountryCallingCode, parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js/max';
import ct from 'countries-and-timezones';

export type { CountryCode } from 'libphonenumber-js';
export const phoneCountries = getCountries();
export const defaultPhoneCountry: CountryCode = 'CA';
export interface PhoneDetails {
  countryCode: CountryCode;
  dialCode: string;
  phoneNumber: string;
  phoneE164: string;
}
export function isPhoneCountry(value: unknown): value is CountryCode {
  return typeof value === 'string' && phoneCountries.includes(value as CountryCode);
}
export function dialCode(country: CountryCode): string {
  return `+${getCountryCallingCode(country)}`;
}
export function countryName(country: CountryCode, locale = 'en'): string {
  if (country === 'PS') return locale === 'ar' ? 'فلسطين' : 'Palestine';
  return new Intl.DisplayNames([locale], { type: 'region' }).of(country) || country;
}
export function countryFlag(country: CountryCode): string {
  return String.fromCodePoint(...[...country].map((letter) => 127397 + letter.charCodeAt(0)));
}
export function normalizePhone(value: unknown, country?: unknown): PhoneDetails | null {
  if (typeof value !== 'string' || value.length > 64 || (country !== undefined && !isPhoneCountry(country))) return null;
  if (!country && !value.trim().startsWith('+')) return null;
  const parsed = parsePhoneNumberFromString(value, { defaultCountry: country as CountryCode | undefined, extract: false });
  if (!parsed || !parsed.isValid() || parsed.ext || !parsed.country || (country && parsed.country !== country)) return null;
  return { countryCode: parsed.country, dialCode: `+${parsed.countryCallingCode}`, phoneNumber: parsed.nationalNumber, phoneE164: parsed.number };
}
export function localPhone(value: string, country: CountryCode): PhoneDetails | null {
  // A local input must not silently switch country on a pasted international number.
  if (value.trim().startsWith('+')) return null;
  return normalizePhone(value, country);
}
const preferredZones: Partial<Record<CountryCode, string>> = {
  PS: 'Asia/Gaza', EG: 'Africa/Cairo', JO: 'Asia/Amman', SA: 'Asia/Riyadh',
  AE: 'Asia/Dubai', GB: 'Europe/London', US: 'America/New_York', CA: 'America/Toronto',
};
export function countryTimezone(country: CountryCode, browserTimezone?: string): string {
  const zones: readonly string[] = ct.getCountry(country)?.timezones || [];
  if (browserTimezone && zones.includes(browserTimezone)) return browserTimezone;
  return preferredZones[country] || zones[0] || 'Etc/UTC';
}
export const allTimezones = [...new Set(['Etc/UTC', ...Object.keys(ct.getAllTimezones())])].sort();
export function isIanaTimezone(value: unknown): value is string {
  return typeof value === 'string' && allTimezones.includes(value);
}
export function phoneDefaults(country: CountryCode, timezone: string, manual: boolean, browserTimezone?: string) {
  return { country: countryName(country), timezone: manual ? timezone : countryTimezone(country, browserTimezone) };
}
