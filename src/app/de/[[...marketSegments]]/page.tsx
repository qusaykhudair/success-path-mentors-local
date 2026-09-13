import type { Metadata } from 'next';
import { redirect, notFound } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketLocalePath, resolveMarketRoute } from '@/lib/market-routing';

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
import { AuthShell } from '@/features/auth/auth-shell';
import { LoginForm } from '@/features/auth/login-form';
import { RegistrationForm } from '@/features/auth/registration-form';
import { GermanyLegalPage } from '@/components/germany/germany-legal-page';
import { getGermanyPrivacyPolicy } from '@/content/legal/germany/privacy-policy';
import { getGermanyTerms } from '@/content/legal/germany/terms';
import type { AuthUiLocale } from '@/features/auth/auth-contracts';

export async function generateMetadata({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}): Promise<Metadata> {
  const { marketSegments } = await params;
  const route = resolveMarketRoute('germany', marketSegments);
  if (!route) return {};

  if (route.kind === 'child' && route.childSegments?.length === 1) {
    const child = route.childSegments[0];
    const locale = route.language as 'de' | 'en' | 'ar';
    if (child === 'privacy') {
      const doc = getGermanyPrivacyPolicy(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: `https://successpathmentors.net/de/${locale}/privacy`,
        },
      };
    }
    if (child === 'terms') {
      const doc = getGermanyTerms(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: `https://successpathmentors.net/de/${locale}/terms`,
        },
      };
    }
  }

  return {};
}

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

    if (child === 'privacy') {
      const lang = route.language as 'de' | 'en' | 'ar';
      const doc = getGermanyPrivacyPolicy(lang);
      return (
        <GermanyLegalPage
          document={doc}
          locale={lang}
          documentType="privacy"
        />
      );
    }

    if (child === 'terms') {
      const lang = route.language as 'de' | 'en' | 'ar';
      const doc = getGermanyTerms(lang);
      return (
        <GermanyLegalPage
          document={doc}
          locale={lang}
          documentType="terms"
        />
      );
    }
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
