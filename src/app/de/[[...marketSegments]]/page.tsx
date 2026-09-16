import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketChildPath, getMarketLocalePath, resolveMarketRoute } from '@/lib/market-routing';
import { getMarketMessages } from '@/lib/market-messages';

import { GermanyHero } from '@/components/germany/germany-hero';
import { TrustStrip } from '@/components/germany/trust-strip';
import { ChooseHowYouLearn } from '@/components/germany/choose-how-you-learn';
import { WhatToLearn } from '@/components/germany/what-to-learn';
import { PlacementAssessmentSection } from '@/components/germany/placement-assessment-section';
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
import { TutoringPageView } from '@/components/germany/tutoring-page-view';
import { getGermanyPrivacyPolicy } from '@/content/legal/germany/privacy-policy';
import { getGermanyTerms } from '@/content/legal/germany/terms';
import { getTutoringPage } from '@/content/germany-tutoring/pages';
import type { TutoringLocale } from '@/content/germany-tutoring/types';
import type { AuthUiLocale } from '@/features/auth/auth-contracts';

export async function generateMetadata({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}): Promise<Metadata> {
  const { marketSegments } = await params;
  const route = resolveMarketRoute('germany', marketSegments);
  if (!route) return {};

  const locale = route.language as 'de' | 'en' | 'ar';

  if (route.kind === 'child' && route.childSegments && route.childSegments.length > 0) {
    const childPath = route.childSegments.join('/');
    const canonicalPath = getMarketChildPath('germany', locale, route.childSegments);
    const canonicalUrl = `https://successpathmentors.net${canonicalPath}`;

    if (childPath === 'privacy') {
      const doc = getGermanyPrivacyPolicy(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: canonicalUrl,
        },
      };
    }
    if (childPath === 'terms') {
      const doc = getGermanyTerms(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: canonicalUrl,
        },
      };
    }

    // Tutoring service pages metadata
    const tutoringDoc = getTutoringPage(childPath, locale);
    if (tutoringDoc) {
      return {
        title: tutoringDoc.seo.title,
        description: tutoringDoc.seo.description,
        keywords: tutoringDoc.seo.keywords as string[],
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title: tutoringDoc.seo.title,
          description: tutoringDoc.seo.description,
          url: canonicalUrl,
          siteName: 'Success Path Mentors Europe',
          locale: locale === 'de' ? 'de_DE' : locale === 'ar' ? 'ar_AR' : 'en_US',
          type: 'website',
        },
      };
    }
  }

  // Locale homepage metadata (/de, /de/en, /de/ar)
  if (route.kind === 'locale') {
    try {
      const messages = await getMarketMessages('germany', locale);
      const canonicalPath = getMarketLocalePath('germany', locale);
      const canonicalUrl = `https://successpathmentors.net${canonicalPath}`;
      const title = `${messages.hero.headline} | Success Path Mentors Europe`;
      const description = messages.hero.subheadline;

      return {
        title,
        description,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title,
          description,
          url: canonicalUrl,
          siteName: 'Success Path Mentors Europe',
          locale: locale === 'de' ? 'de_DE' : locale === 'ar' ? 'ar_AR' : 'en_US',
          type: 'website',
        },
      };
    } catch {
      return {};
    }
  }

  return {};
}

export default async function MarketPage({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const route = requireMarketRoute('germany', marketSegments);
  
  if (route.kind === 'entry') {
    if (route.childSegments && route.childSegments.length > 0) {
      redirect(getMarketChildPath(route.market.id, route.language, route.childSegments));
    } else {
      redirect(getMarketLocalePath(route.market.id, route.language));
    }
  }

  // Handle market-scoped child routes
  if (route.kind === 'child' && route.childSegments && route.childSegments.length > 0) {
    const childPath = route.childSegments.join('/');
    const lang = route.language as TutoringLocale;

    // Trial Flow (supporting both /trial and /free-trial)
    if (childPath === 'trial' || childPath === 'free-trial') {
      return (
        <div className="flex min-h-screen items-center justify-center bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl">
            <TrialFlow />
          </div>
        </div>
      );
    }

    // Login
    if (childPath === 'login') {
      const authLang = route.language as AuthUiLocale;
      const homeHref = getMarketLocalePath('germany', authLang);
      const registerHref = getMarketChildPath('germany', authLang, ['register']);
      return (
        <AuthShell locale={authLang} homeHref={homeHref}>
          <LoginForm
            locale={authLang}
            marketId="germany"
            registerHref={registerHref}
            contactHref={`${homeHref}#contact`}
          />
        </AuthShell>
      );
    }

    // Registration
    if (childPath === 'register') {
      const authLang = route.language as AuthUiLocale;
      const homeHref = getMarketLocalePath('germany', authLang);
      const loginHref = getMarketChildPath('germany', authLang, ['login']);
      return (
        <AuthShell locale={authLang} homeHref={homeHref}>
          <RegistrationForm
            locale={authLang}
            marketId="germany"
            loginHref={loginHref}
            homeHref={homeHref}
          />
        </AuthShell>
      );
    }

    // Legal: Privacy Policy
    if (childPath === 'privacy') {
      const doc = getGermanyPrivacyPolicy(lang);
      return (
        <GermanyLegalPage
          document={doc}
          locale={lang}
          documentType="privacy"
        />
      );
    }

    // Legal: Terms of Service
    if (childPath === 'terms') {
      const doc = getGermanyTerms(lang);
      return (
        <GermanyLegalPage
          document={doc}
          locale={lang}
          documentType="terms"
        />
      );
    }

    // Tutoring Service Landing Pages
    const tutoringDoc = getTutoringPage(childPath, lang);
    if (tutoringDoc) {
      return <TutoringPageView page={tutoringDoc} locale={lang} />;
    }
  }

  // Any other child segments are not valid
  if (route.kind === 'child') notFound();

  // Homepage — kind === 'locale'
  return (
    <>
      <GermanyHero />
      <TrustStrip />
      <ChooseHowYouLearn />
      <WhatToLearn />
      <PlacementAssessmentSection />
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
