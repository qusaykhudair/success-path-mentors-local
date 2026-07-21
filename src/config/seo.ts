import { siteConfig } from "./site";

/**
 * SEO defaults shared across the metadata + JSON-LD helpers in
 * src/shared/seo. Per docs/04 - SEO Strategy Specification.md.
 */
export const seoConfig = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  defaultDescription: siteConfig.description,
  twitterCard: "summary_large_image" as const,
  ogType: "website" as const,
  ogImage: {
    url: `${siteConfig.url}/images/og-default.jpg`,
    width: 1200,
    height: 630,
  },
  robots: {
    index: true,
    follow: true,
  },
};
