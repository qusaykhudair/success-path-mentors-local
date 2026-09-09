'use client';

import { useEffect, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';
import { Notice, SubmitLabel } from './auth-ui';
import type { AuthLocale } from './auth-contracts';
import { configuredSocialStartUrl, type SocialProvider } from './social-auth';

export function SocialAuthButtons({ locale, disabled = false, onPendingChange }: { locale: AuthLocale; disabled?: boolean; onPendingChange?: (pending: boolean) => void }) {
  const [pending, setPending] = useState<SocialProvider | null>(null);
  const [error, setError] = useState(false);
  const requestRef = useRef<AbortController | null>(null);
  const ar = locale === 'ar';
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
      const response = await fetch(`/api/auth/social/start?provider=${provider}`, {
        headers: { Accept: 'application/json' }, cache: 'no-store', signal: controller.signal,
      });
      if (!response.ok) throw new Error('Social authentication unavailable');
      const data: unknown = await response.json();
      const candidate = data && typeof data === 'object' && 'authorization_url' in data ? data.authorization_url : undefined;
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
      <button type="button" disabled={disabled || Boolean(pending)} onClick={() => void start('google')}
        className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}>
        <FcGoogle aria-hidden="true" className="h-5 w-5" />
        <SubmitLabel loading={pending === 'google'} idle={ar ? 'المتابعة باستخدام Google' : 'Continue with Google'} pending={ar ? 'جارٍ الاتصال…' : 'Connecting…'} />
      </button>
      <button type="button" disabled={disabled || Boolean(pending)} onClick={() => void start('facebook')}
        className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}>
        <FaFacebook aria-hidden="true" className="h-5 w-5 text-[#1877F2]" />
        <SubmitLabel loading={pending === 'facebook'} idle={ar ? 'المتابعة باستخدام Facebook' : 'Continue with Facebook'} pending={ar ? 'جارٍ الاتصال…' : 'Connecting…'} />
      </button>
      {error && <Notice variant="error">{ar ? 'تعذّر بدء تسجيل الدخول بهذه الطريقة حالياً. يمكنك المحاولة مجدداً أو استخدام البريد الإلكتروني أو الهاتف أدناه.' : 'This sign-in method is currently unavailable. Try again or use email or phone below.'}</Notice>}
      <div className="flex items-center gap-4 py-3 text-caption font-bold text-muted-foreground" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />{ar ? 'أو' : 'OR'}<span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
