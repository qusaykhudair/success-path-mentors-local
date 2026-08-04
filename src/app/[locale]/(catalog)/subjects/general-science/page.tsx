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
  ScienceOverviewCta,
} from '@/components/subjects/science/science-overview-cta';
import {
  ScienceStrandGrid,
} from '@/components/subjects/science/science-strand-grid';
import {
  ScienceSubjectHero,
} from '@/components/subjects/science/science-subject-hero';
import {
  getGeneralScienceBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getGeneralSciencePageContent,
} from '@/content/subjects/general-science/general-science-page-content';
import {
  getPublicGeneralScienceOverview,
} from '@/lib/general-science/get-public-general-science-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import {
  buildScienceServiceSchema,
} from '@/lib/seo/science-subject-schema';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface GeneralSciencePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: GeneralSciencePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getGeneralSciencePageContent(
        locale
      ).seo,
  });
}

export default async function GeneralSciencePage({
  params,
}: GeneralSciencePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getGeneralSciencePageContent(
      locale
    );

  const overview =
    getPublicGeneralScienceOverview(
      locale
    );

  const bookingHref =
    getGeneralScienceBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'general-science'
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
          content.hero.subjectsLabel,
        href:
          routePath.subjects(locale),
      },
      {
        label:
          content.hero.currentLabel,
      },
    ];

  return (
    <>
      <JsonLd
        id="general-science-breadcrumb-schema"
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
        id="general-science-service-schema"
        data={
          buildScienceServiceSchema({
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

      <ScienceSubjectHero
        copy={content.hero}
        breadcrumbs={breadcrumbs}
        primaryHref="#general-science-strands"
        secondaryHref={bookingHref}
        subjectIconKey="earth"
      />

      <ScienceStrandGrid
        locale={locale}
        subjectSlug="general-science"
        strands={overview.strands}
        copy={content.strands}
      />

      <ScienceOverviewCta
        copy={content.cta}
        primaryHref={bookingHref}
        secondaryHref={
          routePath.contact(locale)
        }
      />
    </>
  );
}
