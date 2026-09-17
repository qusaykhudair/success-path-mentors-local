import type { Metadata } from 'next';
import { redirect, notFound } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketLocalePath, resolveMarketRoute } from '@/lib/market-routing';

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

  if (route.kind === 'child' && route.childSegments && route.childSegments.length > 0) {
    const childPath = route.childSegments.join('/');
    const locale = route.language as 'de' | 'en' | 'ar';

    if (childPath === 'privacy') {
      const doc = getGermanyPrivacyPolicy(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: `https://successpathmentors.net/de/${locale}/privacy`,
        },
      };
    }
    if (childPath === 'terms') {
      const doc = getGermanyTerms(locale);
      return {
        title: doc.seo.title,
        description: doc.seo.description,
        alternates: {
          canonical: `https://successpathmentors.net/de/${locale}/terms`,
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
          canonical: `https://successpathmentors.net/de/${locale}/${childPath}`,
        },
        openGraph: {
          title: tutoringDoc.seo.title,
          description: tutoringDoc.seo.description,
          url: `https://successpathmentors.net/de/${locale}/${childPath}`,
          siteName: 'Success Path Mentors Europe',
          locale: locale === 'de' ? 'de_DE' : locale === 'ar' ? 'ar_AR' : 'en_US',
          type: 'website',
        },
      };
    }
  }

  // Locale homepage metadata (/de, /de/en, /de/ar)
  if (route.kind === 'locale') {
    const locale = route.language as 'de' | 'en' | 'ar';
    const canonicalPath = getMarketLocalePath('germany', locale);
    // Explicitly enforce /de/de as canonical for German homepage as requested
    const canonicalUrl = locale === 'de' ? 'https://successpathmentors.net/de/de' : `https://successpathmentors.net${canonicalPath}`;

    const titleMap = {
      de: 'Online-Nachhilfe in Deutschland | Success Path Mentors',
      en: 'Online Tutoring in Germany | Success Path Mentors',
      ar: 'دروس خصوصية أونلاين في ألمانيا | Success Path Mentors'
    };
    const descriptionMap = {
      de: 'Individuelle Online-Nachhilfe für Schüler in Deutschland. Qualifizierte Lehrkräfte für alle Fächer.',
      en: 'Personalized online tutoring for students in Germany. Qualified teachers for all subjects.',
      ar: 'دروس خصوصية أونلاين فردية للطلاب في ألمانيا. معلمون مؤهلون في جميع المواد.'
    };
    
    return {
      title: titleMap[locale],
      description: descriptionMap[locale],
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'de-DE': 'https://successpathmentors.net/de/de',
          'en-DE': 'https://successpathmentors.net/de/en',
          'ar-DE': 'https://successpathmentors.net/de/ar',
          'x-default': 'https://successpathmentors.net/de/de',
        }
      },
      openGraph: {
        title: titleMap[locale],
        description: descriptionMap[locale],
        url: canonicalUrl,
        siteName: 'Success Path Mentors Europe',
        locale: locale === 'de' ? 'de_DE' : locale === 'ar' ? 'ar_AE' : 'en_DE',
        type: 'website',
      },
      robots: { index: true, follow: true }
    };
  }

  // Utility Pages (login, register, trial)
  if (route.kind === 'child' && route.childSegments && route.childSegments.length > 0) {
    const childPath = route.childSegments[0];
    const locale = route.language as 'de' | 'en' | 'ar';

    if (childPath === 'login') {
      const titles = { de: 'Anmelden', en: 'Login', ar: 'تسجيل الدخول' };
      return { 
        title: `${titles[locale]} | Success Path Mentors Germany`, 
        robots: { index: false, follow: true } 
      };
    }
    
    if (childPath === 'register') {
      const titles = { de: 'Konto erstellen', en: 'Register', ar: 'إنشاء حساب' };
      return { 
        title: `${titles[locale]} | Success Path Mentors Germany`, 
        robots: { index: false, follow: true } 
      };
    }
    
    if (childPath === 'trial' || childPath === 'free-trial') {
      const titles = { de: 'Kostenlose Probestunde', en: 'Free Trial', ar: 'جلسة تجريبية مجانية' };
      return { 
        title: `${titles[locale]} | Success Path Mentors Germany`, 
        robots: { index: false, follow: true } 
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
      return (
        <AuthShell locale={authLang} homeHref={`/de/${authLang}`}>
          <LoginForm
            locale={authLang}
            marketId="germany"
            registerHref={`/de/${authLang}/register`}
            contactHref={`/de/${authLang}#contact`}
          />
        </AuthShell>
      );
    }

    // Registration
    if (childPath === 'register') {
      const authLang = route.language as AuthUiLocale;
      return (
        <AuthShell locale={authLang} homeHref={`/de/${authLang}`}>
          <RegistrationForm
            locale={authLang}
            marketId="germany"
            loginHref={`/de/${authLang}/login`}
            homeHref={`/de/${authLang}`}
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
