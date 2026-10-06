'use client';

import { useEffect, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';
import { Notice, SubmitLabel } from './auth-ui';
import type { AuthUiLocale } from './auth-contracts';
import { getAuthCopy } from './auth-copy';
import { configuredSocialStartUrl, type AuthMode, type SocialProvider } from './social-auth';
import type { MarketId } from '@/config/markets';
import type { VerifiedIdentity } from './signup-transaction';

const GOOGLE_CLIENT_ID =
  '541344539683-mfeio08fjgkh4fu2u1um2bqddt2h00cl.apps.googleusercontent.com';
const GOOGLE_GIS_SCRIPT_ID = 'spm-google-gis';
const GOOGLE_GIS_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

interface GoogleTokenResponse {
  access_token?: string;
  expires_in?: number;
  scope?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
}

interface GoogleTokenClient {
  requestAccessToken: (options?: { prompt?: string }) => void;
}

interface GoogleOAuth2 {
  initTokenClient: (config: {
    client_id: string;
    scope: string;
    callback: (response: GoogleTokenResponse) => void;
    error_callback?: (error: { type?: string; message?: string }) => void;
  }) => GoogleTokenClient;
}

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: GoogleOAuth2;
      };
    };
  }
}

let googleScriptPromise: Promise<void> | null = null;

function loadGoogleIdentityServices(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Identity Services requires a browser'));
  }

  if (window.google?.accounts?.oauth2) {
    return Promise.resolve();
  }

  if (googleScriptPromise) return googleScriptPromise;

  googleScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(GOOGLE_GIS_SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => {
      if (window.google?.accounts?.oauth2) {
        resolve();
      } else {
        googleScriptPromise = null;
        reject(new Error('Google Identity Services did not initialize'));
      }
    };

    const handleError = () => {
      googleScriptPromise = null;
      reject(new Error('Unable to load Google Identity Services'));
    };

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.id = GOOGLE_GIS_SCRIPT_ID;
    script.src = GOOGLE_GIS_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.referrerPolicy = 'no-referrer-when-downgrade';
    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });
    document.head.appendChild(script);
  });

  return googleScriptPromise;
}

function safeLocalRedirect(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith('/') || trimmed.startsWith('//')) return null;
  return trimmed;
}

interface SocialAuthButtonsProps {
  locale: AuthUiLocale;
  marketId?: MarketId;
  mode?: AuthMode;
  disabled?: boolean;
  onPendingChange?: (pending: boolean) => void;
  onGoogleVerified?: (params: { ticket: string; identity: VerifiedIdentity }) => void;
  showOrDivider?: boolean;
}

export function SocialAuthButtons({
  locale,
  marketId = 'north-america',
  mode = 'login',
  disabled = false,
  onPendingChange,
  onGoogleVerified,
  showOrDivider = true,
}: SocialAuthButtonsProps) {
  const copy = getAuthCopy(locale).social;
  const [pending, setPending] = useState<SocialProvider | null>(null);
  const [error, setError] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const requestRef = useRef<AbortController | null>(null);
  const googleTimeoutRef = useRef<number | null>(null);

  function finish(provider: SocialProvider, failed = false) {
    if (provider === 'google' && googleTimeoutRef.current !== null) {
      window.clearTimeout(googleTimeoutRef.current);
      googleTimeoutRef.current = null;
    }
    if (failed) setError(true);
    setPending(null);
    onPendingChange?.(false);
  }

  useEffect(() => {
    let cancelled = false;

    void loadGoogleIdentityServices()
      .then(() => {
        if (!cancelled) setGoogleReady(true);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
      const controller = requestRef.current;
      requestRef.current = null;
      controller?.abort();

      if (googleTimeoutRef.current !== null) {
        window.clearTimeout(googleTimeoutRef.current);
        googleTimeoutRef.current = null;
      }
    };
  }, []);

  function startGoogle() {
    if (disabled || pending || !googleReady) return;

    setPending('google');
    onPendingChange?.(true);
    setError(false);

    try {
      const oauth2 = window.google?.accounts?.oauth2;
      if (!oauth2) throw new Error('Google Identity Services unavailable');

      googleTimeoutRef.current = window.setTimeout(() => {
        finish('google', true);
      }, 60_000);

      const client = oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: 'openid email profile',
        callback: async (tokenResponse) => {
          if (tokenResponse.error || !tokenResponse.access_token) {
            finish('google', true);
            return;
          }

          try {
            const response = await fetch('/api/auth/social/google', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              credentials: 'same-origin',
              cache: 'no-store',
              body: JSON.stringify({
                access_token: tokenResponse.access_token,
                market: marketId,
                ui_locale: locale,
                mode,
                browser_timezone: (() => {
                  try {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
                  } catch {
                    return undefined;
                  }
                })(),
                browser_locale:
                  typeof navigator !== 'undefined' && navigator.language
                    ? navigator.language
                    : locale,
              }),
            });

            const data = (await response.json().catch(() => ({}))) as {
              signup_ticket?: unknown;
              redirect_to?: unknown;
              identity?: VerifiedIdentity;
            };

            if (!response.ok) throw new Error('Google authentication failed');

            if (
              mode === 'register' &&
              onGoogleVerified &&
              typeof data.signup_ticket === 'string' &&
              data.signup_ticket &&
              data.identity?.method === 'google' &&
              typeof data.identity.identifier === 'string'
            ) {
              onGoogleVerified({
                ticket: data.signup_ticket,
                identity: data.identity,
              });
              finish('google');
              return;
            }

            const redirectTo = safeLocalRedirect(data.redirect_to);
            if (!redirectTo) throw new Error('Invalid Google redirect');

            window.location.assign(redirectTo);
          } catch {
            finish('google', true);
          }
        },
        error_callback: () => finish('google', true),
      });

      client.requestAccessToken({ prompt: 'select_account' });
    } catch {
      finish('google', true);
    }
  }

  async function startFacebook() {
    if (disabled || requestRef.current || pending) return;
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    setPending('facebook');
    onPendingChange?.(true);
    setError(false);

    try {
      const query = new URLSearchParams({
        provider: 'facebook',
        market: marketId,
        ui_locale: locale,
        mode,
      });

      const response = await fetch(`/api/auth/social/start?${query.toString()}`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: controller.signal,
      });

      if (!response.ok) throw new Error('Social authentication unavailable');

      const data: unknown = await response.json();
      const candidate =
        data && typeof data === 'object' && 'authorization_url' in data
          ? data.authorization_url
          : undefined;
      const target = typeof candidate === 'string' ? configuredSocialStartUrl(candidate) : null;
      if (!target) throw new Error('Invalid authorization URL');

      window.location.assign(target);
    } catch {
      if (requestRef.current === controller) setError(true);
    } finally {
      window.clearTimeout(timeout);
      if (requestRef.current === controller) {
        requestRef.current = null;
        setPending(null);
        onPendingChange?.(false);
      }
    }
  }

  return (
    <div className="mt-6 space-y-3" aria-busy={Boolean(pending)}>
      <button
        type="button"
        disabled={disabled || Boolean(pending) || !googleReady}
        onClick={startGoogle}
        className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}
      >
        <FcGoogle aria-hidden="true" className="h-5 w-5 shrink-0" />
        <SubmitLabel
          loading={pending === 'google'}
          idle={copy.continueWithGoogle}
          pending={copy.connecting}
        />
      </button>

      <button
        type="button"
        disabled={disabled || Boolean(pending)}
        onClick={() => void startFacebook()}
        className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}
      >
        <FaFacebook aria-hidden="true" className="h-5 w-5 shrink-0 text-[#1877F2]" />
        <SubmitLabel
          loading={pending === 'facebook'}
          idle={copy.continueWithFacebook}
          pending={copy.connecting}
        />
      </button>

      {error ? (
        <Notice variant="error">{copy.unavailableError}</Notice>
      ) : null}

      {showOrDivider ? (
        <div
          className="flex items-center gap-4 py-3 text-caption font-bold text-muted-foreground"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-border" />
          {copy.or}
          <span className="h-px flex-1 bg-border" />
        </div>
      ) : null}
    </div>
  );
}
