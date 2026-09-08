import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
};

export const pathnames = {
  '/': '/',
  '/about': { en: '/about', ar: '/عن-المنصة' },
  '/how-it-works': { en: '/how-it-works', ar: '/آلية-العمل' },
  '/subjects': { en: '/subjects', ar: '/المواد-الدراسية' },
  '/subjects/[subject]': { en: '/subjects/[subject]', ar: '/المواد-الدراسية/[subject]' },
  '/subjects/[subject]/[strand]': { en: '/subjects/[subject]/[strand]', ar: '/المواد-الدراسية/[subject]/[strand]' },
  '/locations': { en: '/locations', ar: '/المواقع' },
  '/services': { en: '/services', ar: '/الخدمات' },
  '/blog': { en: '/blog', ar: '/المدونة' },
  '/faq': { en: '/faq', ar: '/الأسئلة-الشائعة' },
  '/contact': { en: '/contact', ar: '/تواصل-معنا' },
  '/login': { en: '/login', ar: '/login' },
  '/register': { en: '/register', ar: '/register' },
  '/become-tutor': { en: '/become-tutor', ar: '/انضم-كمعلم' },
  '/find-tutor': { en: '/find-tutor', ar: '/ابحث-عن-معلم' },
  '/privacy': { en: '/privacy', ar: '/سياسة-الخصوصية' },
  '/terms': { en: '/terms', ar: '/الشروط-والأحكام' },
  '/data-deletion': { en: '/data-deletion', ar: '/حذف-البيانات' },
} as const;

export type AppPathname = keyof typeof pathnames;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
});
