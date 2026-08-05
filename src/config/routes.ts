import type {
  SiteLocale,
} from '@/config/site';
import { buildTrialLessonMessage, buildWhatsAppHref } from '@/lib/whatsapp';

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
    return locale === 'ar' ? '/ar/المواد-الدراسية' : '/en/subjects';
  },

  subject(
    locale: SiteLocale,
    slug: string
  ): string {
    return locale === 'ar' ? `/ar/المواد-الدراسية/${slug}` : `/en/subjects/${slug}`;
  },

  mathPathway(
    locale: SiteLocale,
    pathwaySlug: string
  ): string {
    return locale === 'ar' ? `/ar/المواد-الدراسية/math/${pathwaySlug}` : `/en/subjects/math/${pathwaySlug}`;
  },

  englishStrand(
    locale: SiteLocale,
    strandSlug: string
  ): string {
    return locale === 'ar' ? `/ar/المواد-الدراسية/english/${strandSlug}` : `/en/subjects/english/${strandSlug}`;
  },

  scienceStrand(
    locale: SiteLocale,
    subjectSlug:
      | 'chemistry'
      | 'physics'
      | 'general-science',
    strandSlug: string
  ): string {
    return locale === 'ar' ? `/ar/المواد-الدراسية/${subjectSlug}/${strandSlug}` : `/en/subjects/${subjectSlug}/${strandSlug}`;
  },

  about(locale: SiteLocale): string {
    return `/${locale}/about`;
  },

  howItWorks(locale: SiteLocale): string {
    return locale === 'ar'
      ? '/ar/آلية-العمل'
      : '/en/how-it-works';
  },

  locations(locale: SiteLocale): string {
    return `/${locale}/locations`;
  },

  location(
    locale: SiteLocale,
    ...segments: string[]
  ): string {
    const path = segments
      .filter(Boolean)
      .join('/');

    return path
      ? `/${locale}/locations/${path}`
      : `/${locale}/locations`;
  },

  programs(locale: SiteLocale): string {
    return `/${locale}#programs`;
  },

  services(locale: SiteLocale): string {
    return `/${locale}#services`;
  },

  packages(locale: SiteLocale): string {
    return `/${locale}#pricing`;
  },

  pricing(locale: SiteLocale): string {
    return routePath.packages(locale);
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

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'الرياضيات' : 'Mathematics' })
  );
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

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'اللغة الإنجليزية' : 'English' })
  );
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

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'الكيمياء' : 'Chemistry' })
  );
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

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'الفيزياء' : 'Physics' })
  );
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

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { subject: locale === 'ar' ? 'العلوم العامة' : 'General Science' })
  );
}
