import { countryNames, getDefaultMarket, type CountryCode } from '@/config/markets';

// UI labels stay outside MarketConfig. Payload values remain English country names.
const arabicCountryLabels: Partial<Record<CountryCode, string>> = {
  CA: 'كندا',
  US: 'الولايات المتحدة',
};

export function getRegistrationCountries(): readonly (readonly [string, string])[] {
  return [
    ...getDefaultMarket().supportedCountries.map((code) => [
      countryNames[code], arabicCountryLabels[code] ?? countryNames[code],
    ] as const),
    ['Other', 'دولة أخرى'],
  ];
}

export function getRegistrationTimezone(
  detect: () => string = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
): string {
  try {
    return detect() || getDefaultMarket().defaultTimezone;
  } catch {
    return getDefaultMarket().defaultTimezone;
  }
}

export function getRegistrationTimezones(detectedTimezone: string): string[] {
  return Array.from(new Set([detectedTimezone, ...getDefaultMarket().supportedTimezones]));
}
