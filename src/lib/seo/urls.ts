import {
  defaultLocale,
  siteConfig,
  supportedLocales,
} from '@/config/site';

function normalizePathname(
  pathname: string
): string {
  const trimmed = pathname.trim();

  if (!trimmed || trimmed === '/') {
    return '';
  }

  return `/${trimmed
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')}`;
}

export function buildLocalizedPath(
  locale: string,
  pathname = ''
): string {
  return `/${locale}${normalizePathname(
    pathname
  )}`;
}

export function buildAbsoluteUrl(
  locale: string,
  pathname = ''
): string {
  return new URL(
    buildLocalizedPath(locale, pathname),
    siteConfig.url
  ).toString();
}

export function buildLanguageAlternates(
  pathname = ''
): Record<string, string> {
  const alternatives = Object.fromEntries(
    supportedLocales.map((locale) => [
      locale,
      buildAbsoluteUrl(locale, pathname),
    ])
  );

  return {
    ...alternatives,
    'x-default': buildAbsoluteUrl(
      defaultLocale,
      pathname
    ),
  };
}