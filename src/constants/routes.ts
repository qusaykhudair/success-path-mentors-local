/**
 * Route path constants (locale-independent — the [locale] segment and
 * next-intl handle localization on top of these). Use with
 * src/i18n/navigation Link/router rather than raw strings where possible.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  subjects: "/subjects",
  subjectDetails: (slug: string) => `/subjects/${slug}`,
  services: "/services",
  serviceDetails: (slug: string) => `/services/${slug}`,
  locations: "/locations",
  locationDetails: (slug: string) => `/locations/${slug}`,
  blog: "/blog",
  blogArticle: (slug: string) => `/blog/${slug}`,
  contact: "/contact",
  becomeTutor: "/become-tutor",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
} as const;
