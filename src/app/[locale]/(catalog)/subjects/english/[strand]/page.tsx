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
  EnglishStrandPageContent,
} from '@/components/subjects/english/english-strand-page-content';
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
  approvedEnglishStrands,
} from '@/content/subjects/english/english-strands';
import {
  getPublicEnglishStrand,
} from '@/lib/english/get-public-english-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface EnglishStrandPageProps {
  params: Promise<{
    locale: string;
    strand: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return approvedEnglishStrands.map(
    (strand) => ({
      strand: strand.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: EnglishStrandPageProps): Promise<Metadata> {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const strand =
    getPublicEnglishStrand(
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
          ? `استعرض الموضوعات الرئيسية والمهارات في ${strand.title} للصفوف من الأول إلى الثاني عشر.`
          : `Explore ${strand.title} Main Topics, Subtopics, and Skills for Grades 1–12.`,
      pathname:
        `/subjects/english/${strand.slug}`,
    },
  });
}

export default async function EnglishStrandPage({
  params,
}: EnglishStrandPageProps) {
  const {
    locale,
    strand: strandSlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const strand =
    getPublicEnglishStrand(
      strandSlug,
      locale
    );

  if (!strand) {
    notFound();
  }

  const englishContent =
    getEnglishPageContent(locale);

  const pageHref =
    routePath.englishStrand(
      locale,
      strand.slug
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          englishContent.hero
            .homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          englishContent.hero
            .subjectsLabel,
        href:
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          englishContent.hero
            .currentLabel,
        href:
          routePath.subject(
            locale,
            'english'
          ),
      },
      {
        label: strand.title,
      },
    ];

  const pageUrl = new URL(
    pageHref,
    siteConfig.url
  ).toString();

  const pageSchema = {
    '@context':
      'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: strand.title,
    description:
      strand.description,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
    },
    about: {
      '@type': 'Course',
      name: strand.title,
      description:
        strand.description,
      educationalLevel:
        'Grades 1–12',
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
        id="english-strand-breadcrumb-schema"
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
        id="english-strand-page-schema"
        data={pageSchema}
      />

      <EnglishStrandPageContent
        locale={locale}
        strand={strand}
        breadcrumbs={breadcrumbs}
        bookingHref={
          getEnglishBookingHref(
            locale,
            siteConfig.bookingUrl
          )
        }
      />
    </>
  );
}
