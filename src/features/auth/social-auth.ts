export type SocialProvider = 'google' | 'facebook';

export function isSocialProvider(value: unknown): value is SocialProvider {
  return value === 'google' || value === 'facebook';
}

export type AuthMode = 'login' | 'register';

export interface SocialAuthContext {
  market: 'germany' | 'north-america';
  uiLocale: 'de' | 'en' | 'ar';
  mode: AuthMode;
}

export function sanitizeAuthMarket(value: unknown): 'germany' | 'north-america' {
  return value === 'germany' ? 'germany' : 'north-america';
}

export function sanitizeAuthUiLocale(value: unknown): 'de' | 'en' | 'ar' {
  if (value === 'de') return 'de';
  if (value === 'ar') return 'ar';
  return 'en';
}

export function sanitizeAuthMode(value: unknown): AuthMode {
  return value === 'register' ? 'register' : 'login';
}

/** The identity service owns OAuth state, callbacks, verification and MID linking. */
export function configuredSocialStartUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.username || url.password || url.hash) return null;
    // This must be an authorization-start URL, never a credential or token URL.
    for (const key of url.searchParams.keys()) {
      if (/token|secret|password|code_verifier/i.test(key)) return null;
    }
    return url.href;
  } catch {
    return null;
  }
}
