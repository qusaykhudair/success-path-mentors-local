import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as homeGenerateMetadata } from '@/app/[locale]/page';
import { HomePageContent } from '@/components/sections/home/home-page-content';
import { parseAcquisitionContext } from '@/config/acquisition-contexts';

export const generateMetadata = homeGenerateMetadata;

export default async function OntarioLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <HomePageContent 
      locale={locale} 
      acquisitionContext={parseAcquisitionContext('ontario')} 
    />
  );
}
