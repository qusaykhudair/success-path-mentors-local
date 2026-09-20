import { type AnalyticsEventName, type AnalyticsEventMap } from './events';
import { getAnalyticsConsent } from './consent';
import { getAttribution } from './attribution';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function trackEvent<K extends AnalyticsEventName>(
  eventName: K,
  properties?: AnalyticsEventMap[K]
): void {
  if (typeof window === 'undefined') return;

  // Check consent
  if (getAnalyticsConsent() !== 'granted') return;

  // Initialize dataLayer if missing
  window.dataLayer = window.dataLayer || [];

  const attribution = getAttribution();

  const payload = {
    event: eventName,
    ...attribution,
    ...properties,
  };

  try {
    window.dataLayer.push(payload);
  } catch (error) {
    console.warn('Analytics error', error);
  }
}
