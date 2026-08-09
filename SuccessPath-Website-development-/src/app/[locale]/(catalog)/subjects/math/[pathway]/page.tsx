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
  MathPathwayPageContent,
} from '@/components/subjects/math/math-pathway-page-content';
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
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import {
  getPublicMathOverview,
} from '@/lib/math/get-public-math-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface MathPathwayPageProps {
  params: Promise<{
    locale: string;
    pathway: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return publicMathPathways.map(
    (pathway) => ({
      pathway:
        pathway.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: MathPathwayPageProps): Promise<Metadata> {
  const {
    locale,
    pathway: pathwaySlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const pathway =
    getPublicMathOverview(
      locale
    ).pathways.find(
      (item) =>
        item.slug ===
        pathwaySlug
    );

  if (!pathway) {
    return {};
  }

  const title =
    locale === 'ar'
      ? `${pathway.title} حسب الصف | Success Path Mentors`
      : `${pathway.title} by Grade | Success Path Mentors`;

  const description =
    locale === 'ar'
      ? `استعرض موضوعات ${pathway.title} المنظمة في خريطة كاملة للصفوف من 2 إلى 12 وفق ملف المنهج الموثق.`
      : `Explore ${pathway.title} curriculum topics in a complete Grade 2–12 map based on the documented curriculum source.`;

  return buildPageMetadata({
    locale,
    seo: {
      title,
      description,
      pathname:
        `/subjects/math/${pathway.slug}`,
    },
  });
}

export default async function MathPathwayPage({
  params,
}: MathPathwayPageProps) {
  const {
    locale,
    pathway: pathwaySlug,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const overview =
    getPublicMathOverview(
      locale
    );

  const pathway =
    overview.pathways.find(
      (item) =>
        item.slug ===
        pathwaySlug
    );

  if (!pathway) {
    notFound();
  }

  const mathContent =
    getMathPageContent(locale);

  const pageHref =
    routePath.mathPathway(
      locale,
      pathway.slug
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          mathContent.hero
            .homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          mathContent.hero
            .subjectsLabel,
        href:
          routePath.subjects(
            locale
          ),
      },
      {
        label:
          mathContent.hero
            .currentLabel,
        href:
          routePath.subject(
            locale,
            'math'
          ),
      },
      {
        label:
          pathway.title,
      },
    ];

  const relatedPathways =
    overview.pathways
      .filter(
        (item) =>
          item.slug !==
          pathway.slug
      )
      .slice(0, 3);

  const pageUrl =
    new URL(
      pageHref,
      siteConfig.url
    ).toString();

  const pageSchema = {
    '@context':
      'https://schema.org',
    '@type': 'WebPage',
    '@id':
      `${pageUrl}#webpage`,
    url: pageUrl,
    name:
      pathway.title,
    description:
      pathway.description,
    inLanguage:
      locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
    },
    about: {
      '@type': 'Service',
      name:
        pathway.title,
      serviceType:
        'One-to-one online mathematics tutoring',
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
        id={
          `math-${pathway.slug}-breadcrumb-schema`
        }
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
        id={
          `math-${pathway.slug}-page-schema`
        }
        data={pageSchema}
      />

      <MathPathwayPageContent
        locale={locale}
        pathway={pathway}
        relatedPathways={
          relatedPathways
        }
        breadcrumbs={
          breadcrumbs
        }
        bookingHref={
          getBookingHref(
            locale,
            siteConfig.bookingUrl
          )
        }
      />
    </>
  );
}
