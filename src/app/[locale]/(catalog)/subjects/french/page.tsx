import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SeoGapPageShell } from '@/components/internal/seo-gap-page-shell';
import { LocalAvailabilityBlock } from '@/components/local/local-availability-block';
import { routePath } from '@/config/routes';
import { isSupportedLocale, siteConfig } from '@/config/site';
import {
  getSeoGapPage,
  type SeoGapPageContent,
} from '@/content/pages/seo-gap-pages';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface FrenchSubjectPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const PAGE_KEY = 'french';
const baseContent = getSeoGapPage(PAGE_KEY);

const content = {
  ...baseContent,
  seo: {
    ...baseContent.seo,
    title:
      'Online French Tutoring in Canada | Grades 1–12 | Success Path Mentors',
    description:
      'One-to-one online French tutoring for Grades 1–12 in Canada, including Ontario French Immersion, Extended French, Core French, reading, grammar, writing, and oral communication.',
  },
  hero: {
    ...baseContent.hero,
    eyebrow:
      'One-to-One French Tutoring in Canada',
    title:
      'Online French Tutoring for Grades 1–12',
    description:
      'Personalized one-to-one French support for students in Canada, including Ontario French Immersion, Extended French, and Core French, with help for reading, grammar, writing, oral communication, homework, and school assignments.',
    primaryAction:
      'Book a Free Trial Session',
    secondaryAction:
      'Explore French Curriculum Support',
    highlights: [
      {
        value: 'Grades 1–12',
        label:
          'French Immersion, Extended & Core French',
      },
      {
        value: '1-on-1 Support',
        label:
          'Reading, writing & oral communication',
      },
      {
        value: 'Ontario FSL',
        label:
          'Curriculum-aware school support',
      },
    ],
  },
  overview: {
    ...baseContent.overview,
    eyebrow:
      'French tutoring for Ontario students',
    title:
      'One-to-One Support for French Immersion, Extended French & Core French',
  },
} satisfies SeoGapPageContent;

export async function generateMetadata({
  params,
}: FrenchSubjectPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    return {};
  }

  const canonical = new URL(
    `/${locale}${content.pathname}`,
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
        'x-default': canonical,
      },
    },
  });
}

export default async function FrenchSubjectPage({
  params,
}: FrenchSubjectPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const breadcrumbs = [
    {
      label: 'Home',
      href: routePath.home(locale),
    },
    {
      label: 'Subjects',
      href: routePath.subjects(locale),
    },
    {
      label: 'French Tutoring',
    },
  ];

  const canonicalUrl = new URL(
    `/${locale}${content.pathname}`,
    siteConfig.url
  ).toString();
  const bookingHref =
    siteConfig.bookingUrl.trim() ||
    routePath.contact(locale);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${canonicalUrl}#course`,
      name: content.hero.title,
      description: content.seo.description,
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
      serviceType: 'French Tutoring',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
    },
  ];

  return (
    <>
      <SeoGapPageShell
        content={content}
        breadcrumbs={breadcrumbs}
        canonicalUrl={canonicalUrl}
        bookingHref={bookingHref}
        schemaData={schemas}
      />

      <LocalAvailabilityBlock
        locale={locale}
        subjectName="French"
      />
    </>
  );
}
