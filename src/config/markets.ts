export const marketIds = ['north-america', 'germany'] as const;
export type MarketId = (typeof marketIds)[number];
export type MarketCode = 'NA' | 'DE';
export type LanguageCode = 'en' | 'ar' | 'de';
export type CountryCode = 'CA' | 'US' | 'DE';
export type CurrencyCode = 'CAD' | 'EUR';

/** API/structured-data country names, not translated page copy. */
export const countryNames: Readonly<Record<CountryCode, string>> = {
  CA: 'Canada',
  US: 'United States',
  DE: 'Germany',
};

export interface MarketConfig {
  readonly id: MarketId;
  readonly code: MarketCode;
  readonly name: string;
  /** Omitted for markets spanning multiple countries. */
  readonly countryCode?: CountryCode;
  /** Reserved slug only; null preserves the unprefixed North America URLs. */
  readonly publicSlug: string | null;
  /** Business availability only. This registry never activates routes. */
  readonly enabled: boolean;
  readonly defaultLanguage: LanguageCode;
  readonly supportedLanguages: readonly LanguageCode[];
  readonly defaultCountry: CountryCode;
  readonly supportedCountries: readonly CountryCode[];
  readonly defaultTimezone: string;
  /** Suggested choices, not a restriction on browser-detected timezones. */
  readonly supportedTimezones: readonly string[];
  readonly currency: CurrencyCode;
  readonly contact: {
    readonly email: string;
    /** Fixed published address; legacy footers/schema never used the env override. */
    readonly publishedEmail: string;
    /** Null when a separate voice phone channel has not been confirmed. */
    readonly phone: string | null;
    /** International digits only, suitable for wa.me. */
    readonly whatsapp: string;
    readonly whatsappDisplay: string;
  };
  readonly seo: {
    readonly region: CountryCode;
    readonly locales: Readonly<Partial<Record<LanguageCode, `${LanguageCode}_${CountryCode}`>>>;
  };
  readonly organization: {
    readonly areaServed: readonly { readonly '@type': 'Country'; readonly name: string }[];
    readonly legalName?: string;
  };
  readonly registration: {
    /** Preferred language follows the page language; country/timezone fallbacks above. */
    readonly languageStrategy: 'page-language';
    readonly timezoneStrategy: 'browser-with-market-fallback' | 'market-default';
    /** Existing API expects country names, not ISO codes. */
    readonly countryValue: string;
  };
  readonly phonePlaceholder: string;
  readonly bookingUrl?: string;
  readonly legalBusinessConfigRef?: string;
}

// Leaf configuration: never import compatibility facades or business helpers.
// Public language routing remains independently controlled by next-intl.
const northAmericaEmail = 'successpathmentors@gmail.com';
const northAmericaPhone = '+1 647 787 5999';
const northAmericaTimezone = 'America/Toronto';
const northAmericaCountries = ['CA', 'US'] as const;
const northAmerica = {
  id: marketIds[0],
  code: 'NA',
  name: 'North America',
  publicSlug: null,
  enabled: true,
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'ar'],
  defaultCountry: 'CA',
  supportedCountries: northAmericaCountries,
  defaultTimezone: northAmericaTimezone,
  // Matches registration-form.tsx, including families outside the service region.
  supportedTimezones: [
    northAmericaTimezone, 'America/Vancouver', 'America/Edmonton',
    'America/Winnipeg', 'America/Halifax', 'America/St_Johns',
    'America/New_York', 'America/Chicago', 'America/Denver',
    'America/Los_Angeles', 'Africa/Cairo', 'Asia/Amman',
    'Asia/Riyadh', 'Asia/Dubai', 'Europe/London',
  ],
  currency: 'CAD',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? northAmericaEmail,
    publishedEmail: northAmericaEmail,
    phone: northAmericaPhone,
    whatsapp: northAmericaPhone.replace(/\D/g, ''),
    whatsappDisplay: northAmericaPhone,
  },
  seo: { region: 'CA', locales: { en: 'en_CA', ar: 'ar_CA' } },
  organization: {
    areaServed: northAmericaCountries.map((code) => ({ '@type': 'Country' as const, name: countryNames[code] })),
    legalName: 'Commenda Inc. operating as Success Path Mentors',
  },
  registration: {
    languageStrategy: 'page-language',
    timezoneStrategy: 'browser-with-market-fallback',
    countryValue: countryNames.CA,
  },
  phonePlaceholder: '+1 647 000 0000',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? '',
} as const satisfies MarketConfig;

const germanyEmail = 'europe@successpathmentors.net';
const germany = {
  id: marketIds[1],
  code: 'DE',
  name: 'Germany',
  countryCode: 'DE',
  publicSlug: 'de',
  enabled: false,
  defaultLanguage: 'de',
  supportedLanguages: ['de', 'ar', 'en'],
  defaultCountry: 'DE',
  supportedCountries: ['DE'],
  defaultTimezone: 'Europe/Berlin',
  supportedTimezones: ['Europe/Berlin'],
  currency: 'EUR',
  contact: {
    email: germanyEmail,
    publishedEmail: germanyEmail,
    phone: null,
    whatsapp: '4915123974353',
    whatsappDisplay: '+49 1512 3974353',
  },
  seo: { region: 'DE', locales: { de: 'de_DE', ar: 'ar_DE', en: 'en_DE' } },
  organization: { areaServed: [{ '@type': 'Country', name: 'Germany' }] },
  registration: {
    languageStrategy: 'page-language',
    timezoneStrategy: 'market-default',
    countryValue: 'Germany',
  },
  phonePlaceholder: '+49 1512 3456789',
} as const satisfies MarketConfig;

const markets: Readonly<Record<MarketId, MarketConfig>> = {
  [northAmerica.id]: northAmerica,
  [germany.id]: germany,
};

export const defaultMarketId: MarketId = marketIds[0];

export function getMarketConfig(id: MarketId = defaultMarketId): MarketConfig {
  return markets[id];
}

export function getDefaultMarket(): MarketConfig {
  return getMarketConfig();
}

export function isMarketId(value: unknown): value is MarketId {
  return typeof value === 'string' && marketIds.some((id) => id === value);
}

/** Exact market codes only; language/country detection belongs to future consumers. */
export function getMarketByCode(code: string): MarketConfig | undefined {
  return Object.values(markets).find((market) => market.code === code);
}
