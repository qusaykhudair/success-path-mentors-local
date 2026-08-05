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
  ScienceStrandPageContent,
} from '@/components/subjects/science/science-strand-page-content';
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
  approvedGeneralScienceStrands,
} from '@/content/subjects/general-science/general-science-strands';
import {
  getPublicGeneralScienceStrand,
} from '@/lib/general-science/get-public-general-science-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface GeneralScienceStrandPageProps {
  params: Promise<{
    locale: string;
    strand: string;
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return approvedGeneralScienceStrands.map(
    (strand) => ({
      strand:
        strand.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: GeneralScienceStrandPageProps): Promise<Metadata> {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const strand =
    getPublicGeneralScienceStrand(
      strandSlug,
      locale
    );

  if (!strand) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo: {
      title:
        locale === 'ar'
          ? `${strand.title} حسب الصف | Success Path Mentors`
          : `${strand.title} by Grade | Success Path Mentors`,
      description:
        locale === 'ar'
          ? `استعرض الموضوعات الرئيسية والفرعية في ${strand.title} حسب الصفوف المتاحة.`
          : `Explore ${strand.title} Main Topics and Subtopics by available grade level.`,
      pathname:
        `/subjects/general-science/${strand.slug}`,
    },
  });
}

export default async function GeneralScienceStrandPage({
  params,
}: GeneralScienceStrandPageProps) {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const strand =
    getPublicGeneralScienceStrand(
      strandSlug,
      locale
    );

  if (!strand) {
    notFound();
  }

  const subjectContent =
    getGeneralSciencePageContent(
      locale
    );

  const pageHref =
    routePath.scienceStrand(
      locale,
      'general-science',
      strand.slug
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          subjectContent.hero
            .homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          subjectContent.hero
            .subjectsLabel,
        href:
          routePath.subjects(locale),
      },
      {
        label:
          subjectContent.hero
            .currentLabel,
        href:
          routePath.subject(
            locale,
            'general-science'
          ),
      },
      {
        label:
          strand.title,
      },
    ];

  const pageUrl =
    new URL(
      pageHref,
      siteConfig.url
    ).toString();

  const pageSchema = {
    '@context':
      'https://schema.org',
    '@type':
      'WebPage',
    '@id':
      `${pageUrl}#webpage`,
    url:
      pageUrl,
    name:
      strand.title,
    description:
      strand.description,
    inLanguage:
      locale,
    isPartOf: {
      '@type':
        'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
    },
    about: {
      '@type':
        'Course',
      name:
        strand.title,
      description:
        strand.description,
      educationalLevel:
        strand.gradeLevels.map(
          (grade) =>
            `Grade ${grade}`
        ),
      provider: {
        '@type':
          'EducationalOrganization',
        '@id':
          `${siteConfig.url}/#organization`,
      },
    },
  };

  return (
    <>
      <JsonLd
        id="general-science-strand-breadcrumb-schema"
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
        id="general-science-strand-page-schema"
        data={pageSchema}
      />

      <ScienceStrandPageContent
        locale={locale}
        strand={strand}
        breadcrumbs={breadcrumbs}
        bookingHref={
          getGeneralScienceBookingHref(
            locale,
            siteConfig.bookingUrl
          )
        }
        subjectSlug="general-science"
        subjectTitle={
          subjectContent.hero
            .currentLabel
        }
      />
    </>
  );
}
