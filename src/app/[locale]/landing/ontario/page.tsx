import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { generateMetadata as homeGenerateMetadata } from '@/app/[locale]/page';
import { HomePageContent } from '@/components/sections/home/home-page-content';
import { parseAcquisitionContext } from '@/config/acquisition-contexts';
import { SITE_URL } from '@/lib/constants';

interface OntarioLandingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: OntarioLandingPageProps
): Promise<Metadata> {
  const baseMeta = await homeGenerateMetadata(props);
  const pageUrl = new URL('/en', SITE_URL).toString();

  return {
    ...baseMeta,
    alternates: {
      ...baseMeta.alternates,
      canonical: pageUrl,
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  };
}

export default async function OntarioLandingPage({
  params,
}: OntarioLandingPageProps) {
  const { locale } = await params;
  
  if (locale !== 'en') {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <HomePageContent 
      locale={locale} 
      acquisitionContext={parseAcquisitionContext('ontario')} 
    />
  );
}
