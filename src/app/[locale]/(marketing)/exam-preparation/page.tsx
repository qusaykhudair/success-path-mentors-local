import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SeoGapPageLayout } from '@/components/internal/seo-gap-page-layout';
import { isSupportedLocale } from '@/config/site';
import { getSeoGapPageContent } from '@/content/pages/seo-gap-pages';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

const PAGE_KEY = 'exam-preparation';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // English-only acquisition page. Arabic route must not exist or be indexed.
  if (!isSupportedLocale(locale) || locale !== 'en') {
    return {};
  }

  const content = getSeoGapPageContent(PAGE_KEY);

  return buildPageMetadata({
    locale,
    seo: content.seo,
  });
}

export default async function ExamPreparationPage({
  params,
}: PageProps) {
  const { locale } = await params;

  // Enforce English-only until a genuine Arabic translation is produced and approved
  if (!isSupportedLocale(locale) || locale !== 'en') {
    notFound();
  }

  const content = getSeoGapPageContent(PAGE_KEY);

  return <SeoGapPageLayout content={content} locale={locale} />;
}
