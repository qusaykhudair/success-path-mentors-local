import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Per docs/04 - SEO Strategy Specification.md: allow all public pages,
 * block API/private routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
