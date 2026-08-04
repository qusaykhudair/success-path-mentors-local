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
  getPhysicsBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getPhysicsPageContent,
} from '@/content/subjects/physics/physics-page-content';
import {
  getPublicPhysicsOverview,
} from '@/lib/physics/get-public-physics-overview';
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

interface PhysicsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: PhysicsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getPhysicsPageContent(
        locale
      ).seo,
  });
}

export default async function PhysicsPage({
  params,
}: PhysicsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getPhysicsPageContent(
      locale
    );

  const overview =
    getPublicPhysicsOverview(
      locale
    );

  const bookingHref =
    getPhysicsBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'physics'
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
        id="physics-breadcrumb-schema"
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
        id="physics-service-schema"
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
        primaryHref="#physics-strands"
        secondaryHref={
          bookingHref
        }
        subjectIconKey="physics"
      />

      <ScienceStrandGrid
        locale={locale}
        subjectSlug="physics"
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
