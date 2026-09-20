import { type AnalyticsEventName, type AnalyticsEventMap, sanitizeEventProperties } from './events';
import { getAnalyticsConsent } from './consent';
import { getAttribution } from './attribution';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent<K extends AnalyticsEventName>(
  eventName: K,
  properties?: AnalyticsEventMap[K]
): void {
  if (typeof window === 'undefined') return;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId || gtmId.trim() === '') return;

  // Check consent
  if (getAnalyticsConsent() !== 'granted') return;

  // Initialize dataLayer if missing
  window.dataLayer = window.dataLayer || [];

  const attribution = getAttribution();

  const rawPayload = {
    ...attribution,
    ...properties,
  };

  const safePayload = sanitizeEventProperties(eventName, rawPayload);
  safePayload.event = eventName;

  try {
    window.dataLayer.push(safePayload);
  } catch (error) {
    console.warn('Analytics error', error);
  }
}
