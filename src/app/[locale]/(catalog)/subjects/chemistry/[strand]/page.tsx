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
  approvedChemistryStrands,
} from '@/content/subjects/chemistry/chemistry-strands';
import {
  getPublicChemistryStrand,
} from '@/lib/chemistry/get-public-chemistry-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface ChemistryStrandPageProps {
  params: Promise<{
    locale: string;
    strand: string;
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return approvedChemistryStrands.map(
    (strand) => ({
      strand:
        strand.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: ChemistryStrandPageProps): Promise<Metadata> {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const strand =
    getPublicChemistryStrand(
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
        `/subjects/chemistry/${strand.slug}`,
    },
  });
}

export default async function ChemistryStrandPage({
  params,
}: ChemistryStrandPageProps) {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const strand =
    getPublicChemistryStrand(
      strandSlug,
      locale
    );

  if (!strand) {
    notFound();
  }

  const chemistryContent =
    getChemistryPageContent(
      locale
    );

  const pageHref =
    routePath.scienceStrand(
      locale,
      'chemistry',
      strand.slug
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          chemistryContent.hero
            .homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          chemistryContent.hero
            .subjectsLabel,
        href:
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          chemistryContent.hero
            .currentLabel,
        href:
          routePath.subject(
            locale,
            'chemistry'
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
        id="chemistry-strand-breadcrumb-schema"
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
        id="chemistry-strand-page-schema"
        data={pageSchema}
      />

      <ScienceStrandPageContent
        locale={locale}
        strand={strand}
        breadcrumbs={breadcrumbs}
        bookingHref={
          getChemistryBookingHref(
            locale,
            siteConfig.bookingUrl
          )
        }
        subjectSlug="chemistry"
        subjectTitle={
          chemistryContent.hero
            .currentLabel
        }
      />
    </>
  );
}
