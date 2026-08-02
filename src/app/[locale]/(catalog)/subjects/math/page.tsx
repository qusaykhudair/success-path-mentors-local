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
  MathCurriculumExplorer,
} from '@/components/subjects/math/math-curriculum-explorer';
import {
  MathOverviewCta,
} from '@/components/subjects/math/math-overview-cta';
import {
  MathSubjectHero,
} from '@/components/subjects/math/math-subject-hero';
import {
  getBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getMathPageContent,
} from '@/content/subjects/math/math-page-content';
import {
  getPublicMathOverview,
} from '@/lib/math/get-public-math-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildMathServiceSchema,
} from '@/lib/seo/math-subject-schema';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface MathPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: MathPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo: getMathPageContent(
      locale
    ).seo,
  });
}

export default async function MathPage({
  params,
}: MathPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getMathPageContent(locale);

  const overview =
    getPublicMathOverview(locale);

  const bookingHref =
    getBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'math'
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
        id="math-breadcrumb-schema"
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
        id="math-service-schema"
        data={
          buildMathServiceSchema({
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

      <MathSubjectHero
        copy={content.hero}
        breadcrumbs={breadcrumbs}
        primaryHref="#math-curriculum"
        secondaryHref={
          bookingHref
        }
        curriculumStats={{
          topicCount:
            overview.totals
              .topicCount,
          pathwayCount:
            overview.totals
              .publicPathwayCount,
          gradeRange:
            `${overview.totals.gradeMin}–${overview.totals.gradeMax}`,
        }}
      />

      <MathCurriculumExplorer
        overview={overview}
        copy={content.explorer}
        bookingHref={
          bookingHref
        }
      />

      <MathOverviewCta
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
