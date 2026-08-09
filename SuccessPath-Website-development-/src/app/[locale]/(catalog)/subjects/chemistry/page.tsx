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
  getChemistryBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getChemistryPageContent,
} from '@/content/subjects/chemistry/chemistry-page-content';
import {
  getPublicChemistryOverview,
} from '@/lib/chemistry/get-public-chemistry-overview';
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

interface ChemistryPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: ChemistryPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getChemistryPageContent(
        locale
      ).seo,
  });
}

export default async function ChemistryPage({
  params,
}: ChemistryPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getChemistryPageContent(
      locale
    );

  const overview =
    getPublicChemistryOverview(
      locale
    );

  const bookingHref =
    getChemistryBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'chemistry'
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
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          content.hero.currentLabel,
      },
    ];

  return (
    <>
      <JsonLd
        id="chemistry-breadcrumb-schema"
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
        id="chemistry-service-schema"
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
        primaryHref="#chemistry-strands"
        secondaryHref={
          bookingHref
        }
        subjectIconKey="flask"
      />

      <ScienceStrandGrid
        locale={locale}
        subjectSlug="chemistry"
        strands={
          overview.strands
        }
        copy={
          content.strands
        }
      />

      <ScienceOverviewCta
        copy={content.cta}
        primaryHref={
          bookingHref
        }
        secondaryHref={
          routePath.contact(
            locale
          )
        }
      />
    </>
  );
}
