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
    return locale === 'ar' ? '/ar/عن-المنصة' : '/en/about';
  },

  howItWorks(locale: SiteLocale): string {
    return locale === 'ar'
      ? '/ar/آلية-العمل'
      : '/en/how-it-works';
  },

  locations(locale: SiteLocale): string {
    return locale === 'ar' ? '/ar/المواقع' : '/en/locations';
  },

  location(
    locale: SiteLocale,
    ...segments: string[]
  ): string {
    const path = segments
      .filter(Boolean)
      .join('/');

    if (!path) {
      return locale === 'ar' ? '/ar/المواقع' : '/en/locations';
    }

    return locale === 'ar' ? `/ar/المواقع/${path}` : `/en/locations/${path}`;
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

  login(locale: SiteLocale): string {
    return `/${locale}/login`;
  },

  register(locale: SiteLocale): string {
    return `/${locale}/register`;
  },

  privacy(locale: SiteLocale): string {
    return locale === 'ar' ? '/ar/سياسة-الخصوصية' : '/en/privacy';
  },

  terms(locale: SiteLocale): string {
    return locale === 'ar' ? '/ar/الشروط-والأحكام' : '/en/terms';
  },

  dataDeletion(locale: SiteLocale): string {
    return locale === 'ar' ? '/ar/حذف-البيانات' : '/en/data-deletion';
  },

  cancellationPolicy(locale: SiteLocale): string {
    return locale === 'ar' ? '/ar/سياسة-الإلغاء' : '/en/cancellation-policy';
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
