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

interface SocialAuthButtonsProps {
  locale: AuthUiLocale;
  marketId?: MarketId;
  mode?: AuthMode;
  disabled?: boolean;
  onPendingChange?: (pending: boolean) => void;
  showOrDivider?: boolean;
}

export function SocialAuthButtons({
  locale,
  marketId = 'north-america',
  mode = 'login',
  disabled = false,
  onPendingChange,
  showOrDivider = true,
}: SocialAuthButtonsProps) {
  const copy = getAuthCopy(locale).social;
  const [pending, setPending] = useState<SocialProvider | null>(null);
  const [error, setError] = useState(false);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => () => {
    const controller = requestRef.current;
    requestRef.current = null;
    controller?.abort();
  }, []);

  async function start(provider: SocialProvider) {
    if (disabled || requestRef.current) return;
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    setPending(provider);
    onPendingChange?.(true);
    setError(false);

    try {
      const query = new URLSearchParams({
        provider,
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
        disabled={disabled || Boolean(pending)}
        onClick={() => void start('google')}
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
        onClick={() => void start('facebook')}
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
