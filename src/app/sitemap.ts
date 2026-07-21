import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { subjects } from "@/data/subjects";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

/**
 * Per docs/04 - SEO Strategy Specification.md: sitemap must include all
 * static pages plus programmatic subject/service/location/blog pages,
 * for every supported locale, and must exclude 404/private routes.
 *
 * Subject/service/location entries are generated from the data layer
 * (src/data/*), so this file needs no changes once that content is
 * populated in later phases — it will simply be empty until then.
 */

const staticPaths = [
  "",
  "/about",
  "/subjects",
  "/services",
  "/locations",
  "/blog",
  "/faq",
  "/contact",
  "/become-tutor",
  "/privacy",
  "/terms",
];

function localizedEntries(path: string): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.flatMap(localizedEntries);
  const subjectEntries = subjects.flatMap((s) => localizedEntries(`/subjects/${s.slug}`));
  const serviceEntries = services.flatMap((s) => localizedEntries(`/services/${s.slug}`));
  const locationEntries = locations.flatMap((l) =>
    localizedEntries(`/locations/${l.slug}`),
  );

  return [...staticEntries, ...subjectEntries, ...serviceEntries, ...locationEntries];
}
