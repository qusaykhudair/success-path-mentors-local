'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getAnalyticsConsent, setAnalyticsConsent, type ConsentState } from '@/lib/analytics/consent';
import { captureAttribution } from '@/lib/analytics/attribution';
import { trackEvent } from '@/lib/analytics/client';
import type { AnalyticsEventName } from '@/lib/analytics/events';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export function AnalyticsProvider() {
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

      const eventName = trackable.getAttribute('data-analytics-event') as AnalyticsEventName;
      const surface = trackable.getAttribute('data-analytics-surface') || 'unknown';
      const market = window.location.pathname.startsWith('/de') ? 'germany' : 'north-america';
      const locale = document.documentElement.lang || 'en';

      if (eventName) {
        trackEvent(eventName, { market, locale, surface });
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

  return (
    <>
      {consent === 'unset' && (
        <div className="fixed bottom-0 start-0 end-0 z-[100] border-t border-border bg-background p-4 shadow-lg sm:p-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-small text-muted-foreground">
              We use cookies and similar technologies to measure site performance and improve your experience. 
              By clicking "Accept", you consent to our use of these analytics tools. 
              <a href="/privacy" className="ms-1 font-semibold text-primary-600 hover:underline">
                Read our Privacy Policy
              </a>.
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setAnalyticsConsent('denied')}
                className="rounded-full px-4 py-2 text-small font-bold text-muted-foreground hover:bg-surface-sunken"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => setAnalyticsConsent('granted')}
                className="rounded-full bg-primary-600 px-5 py-2 text-small font-bold text-white hover:bg-primary-700"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
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
