import { type AttributionProperties } from './events';
import { getAnalyticsConsent } from './consent';

const ATTRIBUTION_SESSION_KEY = 'spm_analytics_attribution';

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  const attribution: AttributionProperties = {
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
    utm_term: searchParams.get('utm_term') || undefined,
    landing_path: window.location.pathname,
  };

  // Safe referrer
  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      if (referrerUrl.hostname !== window.location.hostname) {
        attribution.referrer_host = referrerUrl.hostname;
      }
    } catch {
      // ignore
    }
  }

  // Only persist if consent is granted
  if (getAnalyticsConsent() === 'granted') {
    try {
      const existingStr = sessionStorage.getItem(ATTRIBUTION_SESSION_KEY);
      if (!existingStr) {
        sessionStorage.setItem(ATTRIBUTION_SESSION_KEY, JSON.stringify(attribution));
      }
    } catch {
      // ignore
    }
  }
}

export function getAttribution(): AttributionProperties {
  if (typeof window === 'undefined') return {};

  if (getAnalyticsConsent() !== 'granted') {
    // If no consent, read directly from URL/Document but don't persist
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    const attribution: AttributionProperties = {
      utm_source: searchParams.get('utm_source') || undefined,
      utm_medium: searchParams.get('utm_medium') || undefined,
      utm_campaign: searchParams.get('utm_campaign') || undefined,
      utm_content: searchParams.get('utm_content') || undefined,
      utm_term: searchParams.get('utm_term') || undefined,
      landing_path: window.location.pathname,
    };

    if (document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        if (referrerUrl.hostname !== window.location.hostname) {
          attribution.referrer_host = referrerUrl.hostname;
        }
      } catch {
        // ignore
      }
    }

    return attribution;
  }

  try {
    const existingStr = sessionStorage.getItem(ATTRIBUTION_SESSION_KEY);
    if (existingStr) {
      return JSON.parse(existingStr) as AttributionProperties;
    }
  } catch {
    // ignore
  }

  return {};
}

export function clearAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(ATTRIBUTION_SESSION_KEY);
  } catch {
    // ignore
  }
}
