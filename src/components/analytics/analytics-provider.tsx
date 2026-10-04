'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getAnalyticsConsent, setAnalyticsConsent, type ConsentState } from '@/lib/analytics/consent';
import { captureAttribution } from '@/lib/analytics/attribution';
import { trackEvent } from '@/lib/analytics/client';
import { isAnalyticsEventName, type AnalyticsLocale } from '@/lib/analytics/events';
import { getConfiguredGtmId, getAnalyticsPrivacyHref } from '@/lib/analytics/config';

const GOOGLE_ADS_ID = 'AW-18494343690';

const consentCopy = {
  en: {
    message: 'We use cookies and similar technologies to measure site performance and improve your experience. By clicking "Accept", you consent to our use of these analytics tools.',
    privacy: 'Read our Privacy Policy',
    accept: 'Accept',
    decline: 'Decline',
  },
  ar: {
    message: 'نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لقياس أداء الموقع وتحسين تجربتك. بالنقر على "قبول"، فإنك توافق على استخدامنا لأدوات التحليل هذه.',
    privacy: 'اقرأ سياسة الخصوصية',
    accept: 'قبول',
    decline: 'رفض',
  },
  de: {
    message: 'Wir verwenden Cookies und ähnliche Technologien, um die Leistung der Website zu messen und Ihre Erfahrung zu verbessern. Wenn Sie auf „Akzeptieren“ klicken, stimmen Sie der Verwendung dieser Analysetools zu.',
    privacy: 'Lesen Sie unsere Datenschutzrichtlinie',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
  },
  fr: {
    message: 'Nous utilisons des cookies et des technologies similaires pour mesurer les performances du site et améliorer votre expérience. En cliquant sur « Accepter », vous consentez à l\'utilisation de ces outils d\'analyse.',
    privacy: 'Lire notre politique de confidentialité',
    accept: 'Accepter',
    decline: 'Refuser',
  },
};

export function AnalyticsProvider() {
  const gtmId = getConfiguredGtmId();
  const [consent, setConsent] = useState<ConsentState>('unset');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialConsent = getAnalyticsConsent();
    setConsent(initialConsent);

    if (initialConsent === 'granted') {
      captureAttribution();
    }

    const handleConsentChange = (e: CustomEvent<ConsentState>) => {
      setConsent(e.detail);
      if (e.detail === 'granted') {
        captureAttribution();
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trackable = target.closest('[data-analytics-event]');
      if (!trackable) return;

      const rawEventName = trackable.getAttribute('data-analytics-event');
      const surface = trackable.getAttribute('data-analytics-surface') || 'unknown';
      const market = window.location.pathname.startsWith('/de') ? 'germany' : 'north-america';
      const locale = document.documentElement.lang || 'en';

      if (isAnalyticsEventName(rawEventName)) {
        trackEvent(rawEventName, { market, locale: locale as AnalyticsLocale, surface });
      }
    };

    window.addEventListener('spm_analytics_consent_changed', handleConsentChange as EventListener);
    document.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('spm_analytics_consent_changed', handleConsentChange as EventListener);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  if (!mounted) return null;

  const locale = (typeof document !== 'undefined' ? document.documentElement.lang : 'en') as keyof typeof consentCopy;
  const safeLocale = consentCopy[locale] ? locale : 'en';
  const copy = consentCopy[safeLocale];
  const privacyHref = typeof window !== 'undefined' ? getAnalyticsPrivacyHref(window.location.pathname, safeLocale) : `/${safeLocale}/privacy`;

  return (
    <>
      {consent === 'unset' && (
        <div className="fixed bottom-0 start-0 end-0 z-[100] border-t border-border bg-background p-4 shadow-lg sm:p-6" dir={safeLocale === 'ar' ? 'rtl' : 'ltr'}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-small text-muted-foreground">
              {copy.message}
              <a href={privacyHref} className="mx-1 font-semibold text-primary-600 hover:underline">
                {copy.privacy}
              </a>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setAnalyticsConsent('denied')}
                className="rounded-full border border-border bg-background px-5 py-2 text-small font-bold text-foreground hover:bg-surface-sunken"
              >
                {copy.decline}
              </button>
              <button
                type="button"
                onClick={() => setAnalyticsConsent('granted')}
                className="rounded-full border border-border bg-background px-5 py-2 text-small font-bold text-foreground hover:bg-surface-sunken"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {consent === 'granted' && (
        <>
          <Script
            id="google-ads-gtag-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-ads-gtag-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `,
            }}
          />
        </>
      )}

      {consent === 'granted' && gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
    </>
  );
}
