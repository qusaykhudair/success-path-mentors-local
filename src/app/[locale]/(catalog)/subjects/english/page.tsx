import type {
  Metadata,
} from 'next';
import {
  notFound,
} from 'next/navigation';

import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  EnglishOverviewCta,
} from '@/components/subjects/english/english-overview-cta';
import {
  EnglishStrandGrid,
} from '@/components/subjects/english/english-strand-grid';
import {
  EnglishSubjectHero,
} from '@/components/subjects/english/english-subject-hero';
import {
  getEnglishBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getEnglishPageContent,
} from '@/content/subjects/english/english-page-content';
import {
  getPublicEnglishOverview,
} from '@/lib/english/get-public-english-overview';
import {
  buildEnglishServiceSchema,
} from '@/lib/seo/english-subject-schema';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface EnglishPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: EnglishPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getEnglishPageContent(locale)
        .seo,
  });
}

export default async function EnglishPage({
  params,
}: EnglishPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getEnglishPageContent(locale);

  const overview =
    getPublicEnglishOverview(locale);

  const bookingHref =
    getEnglishBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'english'
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          content.hero.homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          content.hero
            .subjectsLabel,
        href:
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          content.hero
            .currentLabel,
      },
    ];

  return (
    <>
      <JsonLd
        id="english-breadcrumb-schema"
        data={
          buildBreadcrumbSchema(
            breadcrumbs.map(
              (item, index) => ({
                ...item,
                href:
                  item.href ??
                  (
                    index ===
                    breadcrumbs.length - 1
                      ? pageHref
                      : undefined
                  ),
              })
            )
          )
        }
      />

      <JsonLd
        id="english-service-schema"
        data={
          buildEnglishServiceSchema({
            locale,
            pathname:
              content.seo.pathname,
            name:
              content.schema
                .serviceName,
            description:
              content.schema
                .serviceDescription,
            overview,
          })
        }
      />

      <EnglishSubjectHero
        copy={content.hero}
        breadcrumbs={breadcrumbs}
        primaryHref="#english-strands"
        secondaryHref={bookingHref}
      />

      <EnglishStrandGrid
        locale={locale}
        strands={overview.strands}
        copy={content.strands}
      />

      <EnglishOverviewCta
        copy={content.cta}
        primaryHref={bookingHref}
        secondaryHref={
          routePath.contact(locale)
        }
      />
    </>
  );
}
