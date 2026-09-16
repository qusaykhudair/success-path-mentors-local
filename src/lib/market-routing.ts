import { getMarketConfig, marketIds, type MarketConfig, type MarketId } from '@/config/markets';

export type { MarketId };
export type MarketSlug = NonNullable<MarketConfig['publicSlug']>;
export type MarketLanguage = MarketConfig['supportedLanguages'][number];
export type MarketPath = `/${string}`;

export interface MarketRoute {
  readonly market: MarketConfig;
  readonly kind: 'entry' | 'locale' | 'child';
  readonly language: MarketLanguage;
  readonly direction: 'ltr' | 'rtl';
  readonly childSegments?: readonly string[];
}

export function isMarketLanguage(id: MarketId, value: unknown): value is MarketLanguage {
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

export function getMarketChildPath(
  id: MarketId,
  language: MarketLanguage,
  childSegments: readonly string[],
): MarketPath {
  if (!isMarketLanguage(id, language)) throw new RangeError(`Unsupported language for market ${id}`);
  const root = getMarketRootPath(id);
  const base = `${root === '/' ? '' : root}/${language}`;
  return `${base}/${childSegments.join('/')}` as MarketPath;
}

export function getMarketLanguageDirection(language: MarketLanguage): 'ltr' | 'rtl' {
  return language === 'ar' ? 'rtl' : 'ltr';
}

/** Registered slugs are reserved even while disabled. Match whole path segments. */
export function getMarketFromPathname(pathname: string): MarketConfig | undefined {
  for (const id of marketIds) {
    const market = getMarketConfig(id);
    if (!market.publicSlug) continue;
    const root = getMarketRootPath(id);
    if (pathname === root || pathname.startsWith(`${root}/`)) return market;
  }
  return undefined;
}

export function isReservedMarketPathname(pathname: string): boolean {
  return getMarketFromPathname(pathname) !== undefined;
}

/** Only entry and language roots exist in this unit; deeper content is not defined. */
export function resolveMarketRoute(id: MarketId, segments: readonly string[] = []): MarketRoute | undefined {
  const market = getMarketConfig(id);
  const language = segments.length === 0 ? market.defaultLanguage : segments[0];
  if (language === undefined || !isMarketLanguage(id, language)) return undefined;

  const childSegments = segments.slice(1);
  return {
    market,
    kind: segments.length === 0 ? 'entry' : childSegments.length === 0 ? 'locale' : 'child',
    language,
    direction: getMarketLanguageDirection(language),
    ...(childSegments.length > 0 ? { childSegments } : {}),
  };
}
