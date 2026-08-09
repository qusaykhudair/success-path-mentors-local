import {
  defaultLocale,
  siteConfig,
  supportedLocales,
} from '@/config/site';
import {
  pathnames,
} from '@/i18n/routing';

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
  const normalizedPath =
    normalizePathname(pathname);

  const routeDefinition =
    pathnames[
      normalizedPath as keyof typeof pathnames
    ];

  let publicPath =
    normalizedPath;

  if (
    typeof routeDefinition ===
    'string'
  ) {
    publicPath =
      routeDefinition === '/'
        ? ''
        : routeDefinition;
  } else if (
    routeDefinition &&
    locale in routeDefinition
  ) {
    const localizedRoute =
      routeDefinition[
        locale as keyof typeof routeDefinition
      ];

    if (
      typeof localizedRoute ===
      'string'
    ) {
      publicPath =
        localizedRoute;
    }
  }

  return `/${locale}${publicPath}`;
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