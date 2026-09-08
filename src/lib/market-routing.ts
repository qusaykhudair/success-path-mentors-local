import { getMarketConfig, marketIds, type MarketConfig, type MarketId } from '@/config/markets';

export type MarketSlug = NonNullable<MarketConfig['publicSlug']>;
export type MarketLanguage = MarketConfig['supportedLanguages'][number];
export type MarketPath = `/${string}`;

export interface MarketRoute {
  readonly market: MarketConfig;
  readonly kind: 'entry' | 'locale';
  readonly language: MarketLanguage;
  readonly direction: 'ltr' | 'rtl';
}

export function isMarketLanguage(id: MarketId, value: string): value is MarketLanguage {
  return getMarketConfig(id).supportedLanguages.some((language) => language === value);
}

/** Null slugs retain the existing unprefixed North America namespace. */
export function getMarketRootPath(id: MarketId): MarketPath {
  const slug: MarketSlug | null = getMarketConfig(id).publicSlug;
  return slug ? `/${slug}` : '/';
}

/** Describes the contract, including disabled markets; it does not activate routes. */
export function getMarketLocalePath(
  id: MarketId,
  language: MarketLanguage = getMarketConfig(id).defaultLanguage,
): MarketPath {
  if (!isMarketLanguage(id, language)) throw new RangeError(`Unsupported language for market ${id}`);
  const root = getMarketRootPath(id);
  return `${root === '/' ? '' : root}/${language}`;
}

export function getMarketLanguageDirection(language: MarketLanguage): 'ltr' | 'rtl' {
  return language === 'ar' ? 'rtl' : 'ltr';
}

/** Registered slugs are reserved even while disabled. Match whole path segments. */
export function isReservedMarketPathname(pathname: string): boolean {
  return marketIds.some((id) => {
    if (!getMarketConfig(id).publicSlug) return false;
    const root = getMarketRootPath(id);
    return pathname === root || pathname.startsWith(`${root}/`);
  });
}

/** Only entry and language roots exist in this unit; deeper content is not defined. */
export function resolveMarketRoute(id: MarketId, segments: readonly string[] = []): MarketRoute | undefined {
  const market = getMarketConfig(id);
  if (segments.length > 1) return undefined;
  const language = segments.length === 0 ? market.defaultLanguage : segments[0];
  if (language === undefined || !isMarketLanguage(id, language)) return undefined;
  return {
    market,
    kind: segments.length === 0 ? 'entry' : 'locale',
    language,
    direction: getMarketLanguageDirection(language),
  };
}
