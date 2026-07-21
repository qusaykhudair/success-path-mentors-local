import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages, getTimeZone, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getDirection } from "@/i18n/direction";
import { AppProviders } from "@/providers/AppProviders";
import { MainLayout } from "@/layouts/MainLayout";
import { JsonLd } from "@/components/common/JsonLd";
import { organizationSchema, websiteSchema } from "@/shared/seo/json-ld";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@/styles/globals.css";

/**
 * Font
 * -----------------------------------------------------------------------
 * Per docs/Overview.md the stack calls for `next/font/local` (i.e. a
 * self-hosted Tajawal), and no font files were included in the supplied
 * documentation. `next/font/google` was tried first but requires a live
 * fetch to fonts.googleapis.com at build time, which fails in offline/
 * sandboxed environments — the exact opposite of "local".
 *
 * This uses `@fontsource/tajawal` instead: it ships the same Tajawal
 * woff2 files self-hosted in node_modules, with correct per-weight,
 * per-subset (latin/arabic) unicode-range declarations already authored
 * — something next/font/local's API can't replicate when combining two
 * subsets under one variable. True zero-network self-hosting.
 */

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#16213e" },
  ],
};

/**
 * Site-wide metadata defaults. Per docs/04 - SEO Strategy Specification.md
 * every *page* must still override title/description/canonical via
 * src/shared/seo/build-metadata.ts — this is only the global fallback
 * (icons, manifest, OG/Twitter/robots defaults) applied before that.
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seoConfig.defaultTitle,
      template: seoConfig.titleTemplate,
    },
    description: seoConfig.defaultDescription,
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: seoConfig.ogType,
      siteName: siteConfig.name,
      images: [seoConfig.ogImage],
    },
    twitter: {
      card: seoConfig.twitterCard,
    },
    robots: seoConfig.robots,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale (next-intl requirement).
  setRequestLocale(locale);

  const messages = await getMessages();
  const timeZone = await getTimeZone();

  return (
    <html lang={locale} dir={getDirection(locale as Locale)} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Site-wide structured data — page-specific schemas (FAQPage,
            BreadcrumbList, Article, etc.) are added per-page in later
            phases via the same <JsonLd> component. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <AppProviders locale={locale} timeZone={timeZone} messages={messages}>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
