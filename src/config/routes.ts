import type {
  SiteLocale,
} from '@/config/site';

const WHATSAPP_NUMBER = '16477875999';

function localizedContactPath(
  locale: SiteLocale
): string {
  return locale === 'ar'
    ? '/ar/تواصل-معنا'
    : '/en/contact';
}

export const routePath = {
  home(locale: SiteLocale): string {
    return `/${locale}`;
  },

  subjects(locale: SiteLocale): string {
    return `/${locale}#programs`;
  },

  subject(
    locale: SiteLocale,
    slug: string
  ): string {
    return `/${locale}/subjects/${slug}`;
  },

  mathPathway(
    locale: SiteLocale,
    pathwaySlug: string
  ): string {
    return `/${locale}/subjects/math/${pathwaySlug}`;
  },

  contact(locale: SiteLocale): string {
    return localizedContactPath(
      locale
    );
  },
} as const;

export function getBookingHref(
  locale: SiteLocale,
  configuredBookingUrl?: string
): string {
  const configured =
    configuredBookingUrl?.trim();

  if (configured) {
    return configured;
  }

  const message =
    locale === 'ar'
      ? 'مرحبًا، أود حجز حصة تجريبية مجانية في الرياضيات.'
      : 'Hello, I would like to book a free mathematics trial lesson.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
