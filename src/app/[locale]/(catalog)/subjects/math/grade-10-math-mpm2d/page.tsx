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

const PAGE_KEY = 'math-grade-10-math-mpm2d';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getSeoGapPageContent(PAGE_KEY);

  return buildPageMetadata({
    locale,
    seo: content.seo,
  });
}

export default async function Grade10AcademicMathPage({
  params,
}: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getSeoGapPageContent(PAGE_KEY);

  return <SeoGapPageLayout content={content} locale={locale} />;
}
