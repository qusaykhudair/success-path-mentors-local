/**
 * Global site configuration.
 * Per docs/02 - Folder Structure Specification.md (config/site.ts).
 *
 * NOTE: Placeholder values (URL, socials, contact info) — replace with
 * real business data before launch. Never hardcode these values inside
 * components; always import from here.
 */
export const siteConfig = {
  name: "Success Path Mentors",
  shortName: "SPM",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.successpathmentors.com",
  description:
    "Success Path Mentors provides expert private tutoring in math, science, languages, and more, online and in-home.",
  locales: ["en", "ar"] as const,
  defaultLocale: "en" as const,
  contact: {
    email: "info@successpathmentors.com",
    phone: "+1-000-000-0000",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
