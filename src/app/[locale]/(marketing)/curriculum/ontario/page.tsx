import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SeoGapPageShell } from '@/components/internal/seo-gap-page-shell';
import { routePath } from '@/config/routes';
import { isSupportedLocale, siteConfig } from '@/config/site';
import { getSeoGapPage } from '@/content/pages/seo-gap-pages';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface CurriculumPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const PAGE_KEY = 'curriculum-ontario';
const content = getSeoGapPage(PAGE_KEY);

export async function generateMetadata({
  params,
}: CurriculumPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    return {};
  }

  const canonical = new URL(
    routePath.ontarioCurriculum('en'),
    siteConfig.url
  ).toString();
  const arabicUrl = new URL(
    routePath.ontarioCurriculum('ar'),
    siteConfig.url
  ).toString();

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description: content.seo.description,
      pathname: content.pathname,
      languages: {
        'en-CA': canonical,
        'ar-CA': arabicUrl,
        'x-default': canonical,
      },
    },
  });
}

export default async function OntarioCurriculumPage({
  params,
}: CurriculumPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: routePath.home(locale) },
    { label: 'Curriculum Standards' },
    { label: 'Ontario Curriculum' },
  ];

  const canonicalUrl = new URL(
    routePath.ontarioCurriculum(locale),
    siteConfig.url
  ).toString();
  const bookingHref = siteConfig.bookingUrl.trim() || routePath.contact(locale);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOccupationalCredential',
      '@id': `${canonicalUrl}#curriculum`,
      name: 'Ontario Ministry of Education Curriculum Alignment',
      description: content.seo.description,
      credentialCategory: 'Curriculum Alignment',
      recognizedBy: {
        '@type': 'EducationalOrganization',
        name: 'Ontario Ministry of Education',
      },
    },
  ];

  return (
    <SeoGapPageShell
      content={content}
      breadcrumbs={breadcrumbs}
      canonicalUrl={canonicalUrl}
      bookingHref={bookingHref}
      schemaData={schemas}
    />
  );
}
