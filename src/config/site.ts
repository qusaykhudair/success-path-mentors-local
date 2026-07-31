export const supportedLocales = ['en', 'ar'] as const;

export type SiteLocale =
  (typeof supportedLocales)[number];

export const defaultLocale: SiteLocale = 'en';

function normalizeSiteUrl(value: string): string {
  return value.trim().replace(/\/+$/, '');
}

export const siteConfig = {
  name: 'Mustafa Academy',
  organizationName: 'Success Path Mentors',
  description:
    'Personalized one-to-one online tutoring for students in Grades 1–12.',
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ??
      'https://successpathmentors.net'
  ),
  locales: supportedLocales,
  defaultLocale,
  defaultOgImage:
    process.env.NEXT_PUBLIC_OG_IMAGE?.trim() ?? '',
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? '',
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ??
    'successpathmentors@gmail.com',
} as const;

export function isSupportedLocale(
  locale: string
): locale is SiteLocale {
  return supportedLocales.includes(
    locale as SiteLocale
  );
}