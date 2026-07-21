import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import type { Locale } from "@/i18n/routing";

type BuildMetadataParams = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
  noIndex?: boolean;
};

/**
 * Builds a fully-formed Metadata object (title, description, canonical,
 * OpenGraph, Twitter, robots, hreflang alternates) for a single page.
 *
 * Per docs/04 - SEO Strategy Specification.md: every page must generate
 * unique metadata dynamically — never reuse a static metadata object.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  image,
  noIndex = false,
}: BuildMetadataParams): Metadata {
  const url = `${siteConfig.url}/${locale}${path === "/" ? "" : path}`;
  const ogImage = image ?? seoConfig.ogImage.url;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [
          l,
          `${siteConfig.url}/${l}${path === "/" ? "" : path}`,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: seoConfig.ogType,
      images: [
        {
          url: ogImage,
          width: seoConfig.ogImage.width,
          height: seoConfig.ogImage.height,
        },
      ],
    },
    twitter: {
      card: seoConfig.twitterCard,
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: seoConfig.robots.index, follow: seoConfig.robots.follow },
  };
}
