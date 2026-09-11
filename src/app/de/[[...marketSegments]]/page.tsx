import { redirect, notFound } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketLocalePath } from '@/lib/market-routing';

import { GermanyHero } from '@/components/germany/germany-hero';
import { SupportedCountries } from '@/components/ui/supported-countries';
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
import { AuthShell } from '@/features/auth/auth-shell';
import { LoginForm } from '@/features/auth/login-form';
import { RegistrationForm } from '@/features/auth/registration-form';
import type { AuthUiLocale } from '@/features/auth/auth-contracts';

export default async function MarketPage({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const route = requireMarketRoute('germany', marketSegments);
  
  if (route.kind === 'entry') redirect(getMarketLocalePath(route.market.id, route.language));

  // Handle market-scoped child routes
  if (route.kind === 'child' && route.childSegments?.length === 1) {
    const child = route.childSegments[0];

    if (child === 'trial') {
      return (
        <div className="flex min-h-screen items-center justify-center bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl">
            <TrialFlow />
          </div>
        </div>
      );
    }

    if (child === 'login') {
      const lang = route.language as AuthUiLocale;
      return (
        <AuthShell locale={lang} homeHref={`/de/${lang}`}>
          <LoginForm
            locale={lang}
            marketId="germany"
            registerHref={`/de/${lang}/register`}
            contactHref={`/de/${lang}#contact`}
          />
        </AuthShell>
      );
    }

    if (child === 'register') {
      const lang = route.language as AuthUiLocale;
      return (
        <AuthShell locale={lang} homeHref={`/de/${lang}`}>
          <RegistrationForm
            locale={lang}
            marketId="germany"
            loginHref={`/de/${lang}/login`}
            homeHref={`/de/${lang}`}
          />
        </AuthShell>
      );
    }
  }

  // Any other child segments are not valid
  if (route.kind === 'child') notFound();

  // Homepage — kind === 'locale'
  return (
    <>
      <GermanyHero />
      <SupportedCountries locale={route.language as 'de' | 'en' | 'ar'} />
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
