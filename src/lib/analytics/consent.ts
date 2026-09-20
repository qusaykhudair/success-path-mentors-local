const CONSENT_KEY = 'spm_analytics_consent';

export type ConsentState = 'granted' | 'denied' | 'unset';

export function getAnalyticsConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unset';
  
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'granted' || value === 'denied') {
      return value;
    }
    return 'unset';
  } catch {
    return 'unset';
  }
}

export function setAnalyticsConsent(state: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CONSENT_KEY, state);
    // Dispatch a custom event so the provider can react
    window.dispatchEvent(new CustomEvent('spm_analytics_consent_changed', { detail: state }));
  } catch (e) {
    console.warn('Unable to persist analytics consent', e);
  }
}
