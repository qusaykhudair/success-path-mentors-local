'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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

interface GoogleCredentialResponse {
  credential?: string;
  select_by?: string;
}

interface GoogleAccountsId {
  initialize: (config: {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
    auto_select?: boolean;
    cancel_on_tap_outside?: boolean;
    context?: 'signin' | 'signup' | 'use';
    ux_mode?: 'popup';
    itp_support?: boolean;
    use_fedcm_for_prompt?: boolean;
    use_fedcm_for_button?: boolean;
  }) => void;
  renderButton: (
    parent: HTMLElement,
    options: {
      type: 'standard';
      theme: 'outline';
      size: 'large';
      text: 'continue_with' | 'signup_with';
      shape: 'pill';
      logo_alignment: 'left';
      width: number;
      locale: string;
    }
  ) => void;
  cancel: () => void;
}

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: GoogleAccountsId;
      };
    };
  }
}

let googleScriptPromise: Promise<void> | null = null;

function loadGoogleIdentityServices(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Identity Services requires a browser'));
  }

  if (window.google?.accounts?.id) {
    return Promise.resolve();
  }

  if (googleScriptPromise) return googleScriptPromise;

  googleScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(GOOGLE_GIS_SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => {
      if (window.google?.accounts?.id) {
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

    if (existing) existing.remove();

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
  const [googleLoadFailed, setGoogleLoadFailed] = useState(false);
  const [retryNonce, setRetryNonce] = useState(0);
  const requestRef = useRef<AbortController | null>(null);
  const googleButtonRef = useRef<HTMLDivElement | null>(null);

  const finish = useCallback(
    (provider: SocialProvider, failed = false) => {
      if (failed) setError(true);
      setPending(null);
      onPendingChange?.(false);
    },
    [onPendingChange]
  );

  const handleGoogleCredential = useCallback(
    async (credentialResponse: GoogleCredentialResponse) => {
      const credential = credentialResponse.credential?.trim();
      if (!credential) {
        finish('google', true);
        return;
      }

      setPending('google');
      onPendingChange?.(true);
      setError(false);

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
            credential,
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
          code?: string;
          signup_ticket?: unknown;
          redirect_to?: unknown;
          identity?: VerifiedIdentity;
        };

        if (!response.ok) {
          console.warn('[SPM Google Auth] Server verification failed', {
            status: response.status,
            code: data.code || 'UNKNOWN',
          });
          throw new Error(data.code || 'Google authentication failed');
        }

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
      } catch (authError) {
        console.warn('[SPM Google Auth] Sign-in failed', authError);
        finish('google', true);
      }
    },
    [finish, locale, marketId, mode, onGoogleVerified, onPendingChange]
  );

  useEffect(() => {
    let cancelled = false;

    const mountGoogleButton = async () => {
      try {
        await loadGoogleIdentityServices();
        if (cancelled) return;

        const googleId = window.google?.accounts?.id;
        const buttonRoot = googleButtonRef.current;
        if (!googleId || !buttonRoot) {
          throw new Error('Google Identity Services button unavailable');
        }

        googleId.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response) => {
            if (!cancelled) void handleGoogleCredential(response);
          },
          auto_select: false,
          cancel_on_tap_outside: true,
          context: mode === 'register' ? 'signup' : 'signin',
          ux_mode: 'popup',
          itp_support: true,
          use_fedcm_for_prompt: true,
          use_fedcm_for_button: true,
        });

        buttonRoot.replaceChildren();
        const width = Math.min(
          400,
          Math.max(240, Math.round(buttonRoot.getBoundingClientRect().width || 334))
        );

        googleId.renderButton(buttonRoot, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: mode === 'register' ? 'signup_with' : 'continue_with',
          shape: 'pill',
          logo_alignment: 'left',
          width,
          locale,
        });

        if (!cancelled) {
          setGoogleReady(true);
          setGoogleLoadFailed(false);
        }
      } catch (loadError) {
        console.warn('[SPM Google Auth] GIS load failed', loadError);
        if (!cancelled) {
          setGoogleReady(false);
          setGoogleLoadFailed(true);
        }
      }
    };

    void mountGoogleButton();

    return () => {
      cancelled = true;
      window.google?.accounts?.id?.cancel();
    };
  }, [handleGoogleCredential, locale, mode, retryNonce]);

  useEffect(
    () => () => {
      const controller = requestRef.current;
      requestRef.current = null;
      controller?.abort();
    },
    []
  );

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

  function retryGoogle() {
    setError(false);
    setGoogleReady(false);
    setGoogleLoadFailed(false);
    googleScriptPromise = null;
    setRetryNonce((value) => value + 1);
  }

  return (
    <div className="mt-6 space-y-3" aria-busy={Boolean(pending)}>
      <div className="relative min-h-[44px] w-full overflow-hidden rounded-full">
        <div
          ref={googleButtonRef}
          className={disabled || Boolean(pending) ? 'pointer-events-none opacity-60' : ''}
          aria-hidden={!googleReady}
        />

        {!googleReady ? (
          <button
            type="button"
            disabled={disabled || Boolean(pending) || !googleLoadFailed}
            onClick={retryGoogle}
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'absolute inset-0 w-full gap-3',
            })}
          >
            <FcGoogle aria-hidden="true" className="h-5 w-5 shrink-0" />
            <SubmitLabel
              loading={!googleLoadFailed}
              idle={copy.continueWithGoogle}
              pending={copy.connecting}
            />
          </button>
        ) : null}

        {pending === 'google' ? (
          <div className="absolute inset-0 flex items-center justify-center rounded-full border border-border bg-background/95 text-sm font-bold text-primary-950">
            {copy.connecting}
          </div>
        ) : null}
      </div>

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

      {error ? <Notice variant="error">{copy.unavailableError}</Notice> : null}

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
