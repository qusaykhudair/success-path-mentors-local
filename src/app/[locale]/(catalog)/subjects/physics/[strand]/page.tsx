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
  approvedPhysicsStrands,
} from '@/content/subjects/physics/physics-strands';
import {
  getPublicPhysicsStrand,
} from '@/lib/physics/get-public-physics-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface PhysicsStrandPageProps {
  params: Promise<{
    locale: string;
    strand: string;
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return approvedPhysicsStrands.map(
    (strand) => ({
      strand:
        strand.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: PhysicsStrandPageProps): Promise<Metadata> {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const strand =
    getPublicPhysicsStrand(
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
          ? `${strand.title} حسب الصف | أكاديمية مصطفى`
          : `${strand.title} by Grade | Mustafa Academy`,
      description:
        locale === 'ar'
          ? `استعرض الموضوعات الرئيسية والفرعية في ${strand.title} حسب الصفوف المتاحة.`
          : `Explore ${strand.title} Main Topics and Subtopics by available grade level.`,
      pathname:
        `/subjects/physics/${strand.slug}`,
    },
  });
}

export default async function PhysicsStrandPage({
  params,
}: PhysicsStrandPageProps) {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const strand =
    getPublicPhysicsStrand(
      strandSlug,
      locale
    );

  if (!strand) {
    notFound();
  }

  const physicsContent =
    getPhysicsPageContent(
      locale
    );

  const pageHref =
    routePath.scienceStrand(
      locale,
      'physics',
      strand.slug
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          physicsContent.hero
            .homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          physicsContent.hero
            .subjectsLabel,
        href:
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          physicsContent.hero
            .currentLabel,
        href:
          routePath.subject(
            locale,
            'physics'
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
        id="physics-strand-breadcrumb-schema"
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
        id="physics-strand-page-schema"
        data={pageSchema}
      />

      <ScienceStrandPageContent
        locale={locale}
        strand={strand}
        breadcrumbs={breadcrumbs}
        bookingHref={
          getPhysicsBookingHref(
            locale,
            siteConfig.bookingUrl
          )
        }
        subjectSlug="physics"
        subjectTitle={
          physicsContent.hero
            .currentLabel
        }
      />
    </>
  );
}
