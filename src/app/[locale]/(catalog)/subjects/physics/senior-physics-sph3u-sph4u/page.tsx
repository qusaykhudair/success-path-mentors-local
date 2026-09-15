import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SeoGapPageShell } from '@/components/internal/seo-gap-page-shell';
import { routePath } from '@/config/routes';
import { isSupportedLocale, siteConfig } from '@/config/site';
import { getSeoGapPage } from '@/content/pages/seo-gap-pages';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface PhysicsCoursePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const PAGE_KEY = 'senior-physics-sph3u-sph4u';
const content = getSeoGapPage(PAGE_KEY);

export async function generateMetadata({
  params,
}: PhysicsCoursePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    return {};
  }

  const canonical = new URL(`/${locale}${content.pathname}`, siteConfig.url).toString();

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description: content.seo.description,
      pathname: content.pathname,
      languages: {
        'en-CA': canonical,
        'x-default': canonical,
      },
    },
  });
}

export default async function SeniorPhysicsPage({
  params,
}: PhysicsCoursePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: routePath.home(locale) },
    { label: 'Subjects', href: routePath.subjects(locale) },
    { label: 'Physics', href: routePath.subject(locale, 'physics') },
    { label: 'Senior Physics (SPH3U & SPH4U)' },
  ];

  const canonicalUrl = new URL(`/${locale}${content.pathname}`, siteConfig.url).toString();
  const bookingHref = siteConfig.bookingUrl.trim() || routePath.contact(locale);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${canonicalUrl}#course`,
      name: content.hero.title,
      description: content.seo.description,
      courseCode: 'SPH3U / SPH4U',
      provider: {
        '@type': 'EducationalOrganization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        inLanguage: 'en',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: content.hero.title,
      description: content.seo.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: 'Senior Physics Tutoring',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
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
