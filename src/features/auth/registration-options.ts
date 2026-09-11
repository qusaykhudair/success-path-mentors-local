import {
  countryNames,
  getDefaultMarket,
  getMarketConfig,
  type CountryCode,
  type MarketConfig,
  type MarketId,
} from '@/config/markets';

const localizedCountryLabels: Record<string, { ar: string; de: string }> = {
  CA: { ar: 'كندا', de: 'Kanada' },
  US: { ar: 'الولايات المتحدة', de: 'USA' },
  DE: { ar: 'ألمانيا', de: 'Deutschland' },
};

function resolveMarket(marketOrId?: MarketConfig | MarketId): MarketConfig {
  if (!marketOrId) return getDefaultMarket();
  if (typeof marketOrId === 'string') return getMarketConfig(marketOrId);
  return marketOrId;
}

export function getRegistrationCountries(
  marketOrId?: MarketConfig | MarketId,
  locale?: 'en' | 'ar' | 'de'
): readonly (readonly [string, string])[] {
  const market = resolveMarket(marketOrId);
  const otherLabel = locale === 'en' ? 'Other' : locale === 'de' ? 'Anderes Land' : 'دولة أخرى';

  return [
    ...market.supportedCountries.map((code) => {
      const enName = countryNames[code];
      const localized =
        locale === 'en'
          ? enName
          : locale === 'de'
          ? localizedCountryLabels[code]?.de ?? enName
          : localizedCountryLabels[code]?.ar ?? enName;
      return [enName, localized] as const;
    }),
    ['Other', otherLabel],
  ];
}

export function getRegistrationTimezone(
  detectOrMarket?: (() => string) | MarketConfig | MarketId,
  maybeDetect?: () => string,
): string {
  let market: MarketConfig;
  let detect: () => string;

  if (typeof detectOrMarket === 'function') {
    detect = detectOrMarket;
    market = resolveMarket(undefined);
  } else {
    market = resolveMarket(detectOrMarket);
    detect = maybeDetect ?? (() => Intl.DateTimeFormat().resolvedOptions().timeZone);
  }

  try {
    return detect() || market.defaultTimezone;
  } catch {
    return market.defaultTimezone;
  }
}

export function getRegistrationTimezones(
  detectedTimezone: string,
  marketOrId?: MarketConfig | MarketId,
): string[] {
  const market = resolveMarket(marketOrId);
  return Array.from(new Set([detectedTimezone, ...market.supportedTimezones]));
}

export function getRegistrationOptions(
  marketOrId?: MarketConfig | MarketId,
  preferredTimezone?: string,
  locale: 'en' | 'ar' | 'de' = 'en',
) {
  const market = resolveMarket(marketOrId);
  const defaultTimezone = preferredTimezone || market.defaultTimezone;
  return {
    marketId: market.id,
    defaultCountry: market.registration.countryValue,
    defaultTimezone,
    availableCountries: getRegistrationCountries(market, locale),
    availableTimezones: getRegistrationTimezones(defaultTimezone, market),
    phonePlaceholder: market.phonePlaceholder,
  };
}
