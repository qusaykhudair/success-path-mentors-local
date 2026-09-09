import { getMarketConfig, marketIds, type MarketId, type MarketLanguage } from '@/config/markets';
import { getMarketFromPathname, isMarketLanguage, getMarketChildPath, getMarketLanguageDirection, getMarketLocalePath } from '@/lib/market-routing';

export interface LanguageNavigationOption {
  readonly code: MarketLanguage;
  readonly label: string;
  readonly direction: 'ltr' | 'rtl';
  readonly destination: string;
  readonly isActive: boolean;
}

export interface MarketNavigationOption {
  readonly id: MarketId;
  readonly displayName: string;
  readonly destination: string;
  readonly isActive: boolean;
  readonly isEnabled: boolean;
}

export interface NavigationContext {
  readonly marketId: MarketId | undefined;
  readonly locale: string;
  readonly childSegments: readonly string[];
  readonly isFrenchProgramme: boolean;
}

// Hardcoded default translations for navigation since this is the global infrastructure.
const LANGUAGE_DISPLAY_NAMES: Record<string, string> = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  // French is NOT a market-locale option. It is retained internally for separate-programme handling.
  fr: 'Français',
};

/**
 * Extracts navigation context from a raw pathname.
 * Properly identifies North America (default) vs Germany (slug /de),
 * and isolates French programme (/fr).
 */
export function parseNavigationContext(pathname: string): NavigationContext {
  const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments[0] === 'fr') {
    return {
      marketId: undefined,
      locale: 'fr',
      childSegments: segments.slice(1),
      isFrenchProgramme: true,
    };
  }

  const market = getMarketFromPathname(normalizedPath);
  
  if (market && market.publicSlug) {
    // Germany market (or any future prefixed market)
    // Example: /de/en/trial -> segments: ['de', 'en', 'trial']
    // Root segment matches market.publicSlug.
    const languageSegment = segments.length > 1 ? segments[1] : market.defaultLanguage;
    const isSupported = isMarketLanguage(market.id, languageSegment);
    
    // If not supported, we assume it's just a malformed or default path
    const resolvedLanguage = isSupported ? languageSegment : market.defaultLanguage;
    const childSegments = isSupported ? segments.slice(2) : segments.slice(1);

    return {
      marketId: market.id,
      locale: resolvedLanguage,
      childSegments,
      isFrenchProgramme: false,
    };
  }

  // North America (Global Default Market without a publicSlug)
  // Segments could be ['en', 'about']
  const globalLocales = ['en', 'ar']; // Matches routing.ts locales
  const potentialLocale = segments[0];

  if (globalLocales.includes(potentialLocale)) {
    return {
      marketId: 'north-america',
      locale: potentialLocale,
      childSegments: segments.slice(1),
      isFrenchProgramme: false,
    };
  }

  // Default fallback for /
  return {
    marketId: 'north-america',
    locale: 'en',
    childSegments: segments,
    isFrenchProgramme: false,
  };
}

/**
 * Gets a safe destination path when switching to a different language within the current market.
 */
export function getLanguageSwitchPath(context: NavigationContext, targetLocale: MarketLanguage): string {
  if (context.isFrenchProgramme) {
    throw new Error('French programme does not support market language switching');
  }

  const marketId = context.marketId || 'north-america';
  const market = getMarketConfig(marketId);

  if (!isMarketLanguage(marketId, targetLocale)) {
    throw new RangeError(`Unsupported language '${targetLocale}' for market '${marketId}'`);
  }

  if (marketId === 'germany') {
    if (context.childSegments.length === 0) {
      return getMarketLocalePath(marketId, targetLocale);
    }
    return getMarketChildPath(marketId, targetLocale, context.childSegments);
  }

  // North America / Global
  // Preserves child routes by simply prefixing the target locale
  const childPath = context.childSegments.join('/');
  return `/${targetLocale}${childPath ? `/${childPath}` : ''}`;
}

export interface MarketNavigationOptionsConfig {
  /** 
   * If true, includes options or allows switching to markets that are currently disabled.
   * Default is false, enforcing public safety boundaries.
   */
  readonly includeDisabled?: boolean;
}

/**
 * Gets a safe destination path when switching to an entirely different market.
 * We default to the market root / default locale to avoid 404s, unless we build explicit mappings.
 * Throws an error if the target market is disabled, unless explicitly permitted.
 */
export function getMarketSwitchPath(
  targetMarketId: MarketId,
  options: MarketNavigationOptionsConfig = {}
): string {
  const market = getMarketConfig(targetMarketId);
  
  if (!market.enabled && !options.includeDisabled) {
    throw new Error(`Market '${targetMarketId}' is disabled and cannot be publicly switched to.`);
  }

  if (targetMarketId === 'germany') {
    return `/${market.publicSlug}/${market.defaultLanguage}`;
  }
  // North America (Global)
  return `/${market.defaultLanguage}`;
}

/**
 * Returns available language options for the current market to build a language switcher UI.
 */
export function getLanguageNavigationOptions(context: NavigationContext): LanguageNavigationOption[] {
  if (context.isFrenchProgramme) {
    return []; // No language switching in /fr
  }

  const marketId = context.marketId || 'north-america';
  const market = getMarketConfig(marketId);

  return market.supportedLanguages.map(lang => ({
    code: lang,
    label: LANGUAGE_DISPLAY_NAMES[lang] || lang,
    direction: getMarketLanguageDirection(lang),
    destination: getLanguageSwitchPath(context, lang),
    isActive: context.locale === lang,
  }));
}

/**
 * Returns available market options to build a market switcher UI.
 * Respects the 'enabled' configuration to prevent exposing disabled markets in production.
 */
export function getMarketNavigationOptions(
  context: NavigationContext,
  options: MarketNavigationOptionsConfig = {}
): MarketNavigationOption[] {
  return marketIds
    .map(id => {
      const market = getMarketConfig(id);
      return {
        id: market.id,
        displayName: market.name,
        // Calculate destination safely internally so the object is fully formed
        destination: getMarketSwitchPath(id, { includeDisabled: true }),
        isActive: context.marketId === id,
        isEnabled: market.enabled,
      };
    })
    .filter(option => option.isEnabled || options.includeDisabled);
}
