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

const GERMANY_VALID_ROOT_CHILD_SEGMENTS = new Set([
  'trial',
  'free-trial',
  'login',
  'register',
  'privacy',
  'terms',
  'adults',
  'tutoring',
  'languages',
  'school',
]);

export function isKnownMarketChildSegment(id: MarketId, segment: string | undefined): boolean {
  if (!segment) return false;
  if (id === 'germany') {
    return GERMANY_VALID_ROOT_CHILD_SEGMENTS.has(segment);
  }
  return false;
}

/** Describes the contract, including disabled markets; it does not activate routes. */
export function getMarketLocalePath(
  id: MarketId,
  language: MarketLanguage = getMarketConfig(id).defaultLanguage,
): MarketPath {
  if (!isMarketLanguage(id, language)) throw new RangeError(`Unsupported language for market ${id}`);
  const market = getMarketConfig(id);
  const root = getMarketRootPath(id);

  if (language === market.defaultLanguage) {
    return (root === '/' ? `/${language}` : root) as MarketPath;
  }
  return `${root === '/' ? '' : root}/${language}` as MarketPath;
}

export function getMarketChildPath(
  id: MarketId,
  language: MarketLanguage,
  childSegments: readonly string[],
): MarketPath {
  if (!isMarketLanguage(id, language)) throw new RangeError(`Unsupported language for market ${id}`);
  const market = getMarketConfig(id);
  const root = getMarketRootPath(id);
  const segments = childSegments.filter(Boolean).join('/');

  if (language === market.defaultLanguage) {
    const base = root === '/' ? `/${language}` : root;
    return (segments ? `${base}/${segments}` : base) as MarketPath;
  }
  const base = `${root === '/' ? '' : root}/${language}`;
  return (segments ? `${base}/${segments}` : base) as MarketPath;
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

/** Resolves public market segments into a canonical route description. */
export function resolveMarketRoute(id: MarketId, segments: readonly string[] = []): MarketRoute | undefined {
  const market = getMarketConfig(id);

  // [] => Default market locale homepage (e.g. /de renders German homepage directly)
  if (segments.length === 0) {
    const language = market.defaultLanguage;
    return {
      market,
      kind: 'locale',
      language,
      direction: getMarketLanguageDirection(language),
    };
  }

  const first = segments[0];

  // ['de'] or ['de', ...child] => Legacy default language alias (redirects to /de or /de/child)
  if (first === market.defaultLanguage) {
    const childSegments = segments.slice(1);
    return {
      market,
      kind: 'entry',
      language: market.defaultLanguage,
      direction: getMarketLanguageDirection(market.defaultLanguage),
      ...(childSegments.length > 0 ? { childSegments } : {}),
    };
  }

  // ['en'] or ['ar'] (supported non-default languages)
  if (isMarketLanguage(id, first)) {
    const childSegments = segments.slice(1);
    return {
      market,
      kind: childSegments.length === 0 ? 'locale' : 'child',
      language: first,
      direction: getMarketLanguageDirection(first),
      ...(childSegments.length > 0 ? { childSegments } : {}),
    };
  }

  // Known child route under the default language (e.g. ['register'], ['privacy'], ['terms'], ['free-trial'])
  if (isKnownMarketChildSegment(id, first)) {
    const language = market.defaultLanguage;
    return {
      market,
      kind: 'child',
      language,
      direction: getMarketLanguageDirection(language),
      childSegments: segments,
    };
  }

  // Unknown segment / unsupported language (e.g. ['fr'], ['es'], ['xyz'])
  return undefined;
}
