import { getMarketChildPath, type MarketLanguage } from '@/lib/market-routing';

export function isValidGtmId(value: string | undefined | null): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  
  return /^GTM-[A-Z0-9]+$/.test(trimmed);
}

export function getConfiguredGtmId(): string | null {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (isValidGtmId(gtmId)) {
    return gtmId!.trim();
  }
  return null;
}

export function getAnalyticsPrivacyHref(pathname: string, locale: string): string {
  if (pathname.startsWith('/fr')) {
    // French programme fallback to global English privacy page
    return '/en/privacy';
  }

  if (pathname.startsWith('/de')) {
    // Germany market
    return getMarketChildPath('germany', locale as MarketLanguage, ['privacy']);
  }
  // North America
  return `/${locale}/privacy`;
}

