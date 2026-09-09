import { redirect, notFound } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketLocalePath } from '@/lib/market-routing';

import { GermanyHero } from '@/components/germany/germany-hero';
import { TrustStrip } from '@/components/germany/trust-strip';
import { GermanyServiceGrid } from '@/components/germany/germany-service-grid';
import { WhySpm } from '@/components/germany/why-spm';
import { UseCases } from '@/components/germany/use-cases';
import { TeacherQuality } from '@/components/germany/teacher-quality';
import { HowItWorks } from '@/components/germany/how-it-works';
import { PricingSection } from '@/components/germany/pricing-section';
import { Testimonials } from '@/components/germany/testimonials';
import { FaqSection } from '@/components/germany/faq-section';
import { ContactSection } from '@/components/germany/contact-section';
import { GermanyConversionCTA } from '@/components/germany/germany-conversion-cta';
import { TrialFlow } from '@/components/germany/trial-flow';

export default async function MarketPage({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const route = requireMarketRoute('germany', marketSegments);
  
  if (route.kind === 'entry') redirect(getMarketLocalePath(route.market.id, route.language));

  // Handle /de/{locale}/trial
  if (route.kind === 'child' && route.childSegments?.length === 1 && route.childSegments[0] === 'trial') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <TrialFlow />
        </div>
      </div>
    );
  }

  // Any other child segments are not valid
  if (route.kind === 'child') notFound();

  // Homepage — kind === 'locale'
  return (
    <>
      <GermanyHero />
      <TrustStrip />
      <GermanyServiceGrid />
      <WhySpm />
      <UseCases />
      <TeacherQuality />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <GermanyConversionCTA />
    </>
  );
}
