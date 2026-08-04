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
    return `/${locale}/subjects`;
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

  englishStrand(
    locale: SiteLocale,
    strandSlug: string
  ): string {
    return `/${locale}/subjects/english/${strandSlug}`;
  },

  scienceStrand(
    locale: SiteLocale,
    subjectSlug:
      | 'chemistry'
      | 'physics'
      | 'general-science',
    strandSlug: string
  ): string {
    return `/${locale}/subjects/${subjectSlug}/${strandSlug}`;
  },

  about(locale: SiteLocale): string {
    return `/${locale}/about`;
  },

  programs(locale: SiteLocale): string {
    return `/${locale}#programs`;
  },

  services(locale: SiteLocale): string {
    return `/${locale}#services`;
  },

  pricing(locale: SiteLocale): string {
    return `/${locale}#pricing`;
  },

  faq(locale: SiteLocale): string {
    return `/${locale}#faq`;
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

export function getEnglishBookingHref(
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
      ? 'مرحبًا، أود حجز حصة تجريبية مجانية في اللغة الإنجليزية.'
      : 'Hello, I would like to book a free English trial lesson.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export function getChemistryBookingHref(
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
      ? 'مرحبًا، أود حجز حصة تجريبية مجانية في الكيمياء.'
      : 'Hello, I would like to book a free Chemistry trial lesson.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export function getPhysicsBookingHref(
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
      ? 'مرحبًا، أود حجز حصة تجريبية مجانية في الفيزياء.'
      : 'Hello, I would like to book a free Physics trial lesson.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export function getGeneralScienceBookingHref(
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
      ? 'مرحبًا، أود حجز حصة تجريبية مجانية في العلوم العامة.'
      : 'Hello, I would like to book a free General Science trial lesson.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
