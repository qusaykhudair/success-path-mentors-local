'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageCircleMore,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { authApi, isMockAuthApi } from './auth-api';
import { getAuthCopy } from './auth-copy';
import {
  AuthApiError,
  toAuthApiLocale,
  type AuthenticatedUser,
  type LoginChallenge,
  type AuthUiLocale,
} from './auth-contracts';
import { authInputClass, FieldError, FieldLabel, Notice, SubmitLabel } from './auth-ui';
import { SocialAuthButtons } from './social-auth-buttons';
import type { MarketId } from '@/config/markets';

type LoginStage = 'identifier' | 'otp' | 'success';

function isLoginIdentifier(value: string): boolean {
  const normalized = value.trim();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = /^\+?[1-9][\d\s().-]{7,20}$/;
  return email.test(normalized) || phone.test(normalized);
}

function normalizeIdentifier(value: string): string {
  const trimmed = value.trim();
  return trimmed.includes('@')
    ? trimmed.toLowerCase()
    : trimmed.replace(/[\s().-]/g, '');
}

function friendlyError(error: unknown, copy: ReturnType<typeof getAuthCopy>): string {
  if (!(error instanceof AuthApiError)) return copy.common.apiError;

  if (error.code === 'OTP_INVALID') return copy.common.invalidOtp;
  if (error.code === 'OTP_EXPIRED') return copy.common.expiredOtp;
  if (error.code === 'RATE_LIMITED') return copy.common.rateLimited;
  if (error.code === 'REQUEST_TIMEOUT') return copy.common.timeoutError;
  if (error.code === 'NETWORK_ERROR') return copy.common.networkError;
  return copy.common.apiError;
}

export function LoginForm({
  locale,
  marketId = 'north-america',
  registerHref,
  contactHref,
}: {
  locale: AuthUiLocale;
  marketId?: string;
  registerHref?: string;
  contactHref?: string;
}) {
  const copy = getAuthCopy(locale);
  const isRtl = locale === 'ar';
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const identifierSchema = useMemo(
    () => z.object({
      identifier: z.string().trim().refine(isLoginIdentifier, copy.login.identifierHint),
    }),
    [copy.login.identifierHint]
  );
  const otpSchema = useMemo(
    () => z.object({ otp: z.string().regex(/^\d{6}$/, copy.common.invalidOtp) }),
    [copy.common.invalidOtp]
  );

  const identifierForm = useForm<{ identifier: string }>({
    resolver: zodResolver(identifierSchema),
    defaultValues: { identifier: '' },
  });
  const otpForm = useForm<{ otp: string }>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  const [stage, setStage] = useState<LoginStage>('identifier');
  const [challenge, setChallenge] = useState<LoginChallenge | null>(null);
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [secondsToResend, setSecondsToResend] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [socialPending, setSocialPending] = useState(false);

  useEffect(() => {
    if (stage !== 'otp' || secondsToResend <= 0) return;

    const interval = window.setInterval(
      () => setSecondsToResend((current) => Math.max(0, current - 1)),
      1000
    );

    return () => window.clearInterval(interval);
  }, [secondsToResend, stage]);

  async function requestCode(values: { identifier: string }) {
    setErrorMessage('');

    try {
      const nextChallenge = await authApi.requestLogin({
        identifier: normalizeIdentifier(values.identifier),
        locale: toAuthApiLocale(locale),
      });
      setChallenge(nextChallenge);
      setSecondsToResend(nextChallenge.resend_after_seconds);
      setStage('otp');
      otpForm.setFocus('otp');
    } catch (error) {
      setErrorMessage(friendlyError(error, copy));
    }
  }

  async function verifyCode(values: { otp: string }) {
    if (!challenge) return;
    setErrorMessage('');

    try {
      const authenticatedUser = await authApi.verifyLogin(
        { challenge_id: challenge.challenge_id, otp: values.otp },
        toAuthApiLocale(locale)
      );
      setUser(authenticatedUser);
      setStage('success');
    } catch (error) {
      setErrorMessage(friendlyError(error, copy));
    }
  }

  async function resendCode() {
    if (secondsToResend > 0 || isResending) return;
    setIsResending(true);
    setErrorMessage('');

    try {
      const nextChallenge = await authApi.requestLogin({
        identifier: normalizeIdentifier(identifierForm.getValues('identifier')),
        locale: toAuthApiLocale(locale),
      });
      setChallenge(nextChallenge);
      setSecondsToResend(nextChallenge.resend_after_seconds);
      otpForm.reset();
      otpForm.setFocus('otp');
    } catch (error) {
      setErrorMessage(friendlyError(error, copy));
    } finally {
      setIsResending(false);
    }
  }

  function resetLogin() {
    setStage('identifier');
    setChallenge(null);
    setUser(null);
    setErrorMessage('');
    setSecondsToResend(0);
    otpForm.reset();
    window.requestAnimationFrame(() => identifierForm.setFocus('identifier'));
  }

  if (stage === 'success' && user) {
    return (
      <div className="flex min-h-[520px] flex-col justify-center py-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-50 text-success-600 shadow-[0_0_0_12px_rgba(34,197,94,0.08)]">
          <Check aria-hidden="true" className="h-9 w-9" strokeWidth={3} />
        </div>
        <div className="mx-auto mt-7 max-w-md text-center">
          <h1 className="text-h2 font-black text-primary-950">{copy.login.successTitle}</h1>
          <p className="mt-4 text-body leading-8 text-muted-foreground">{copy.login.successDescription}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-small font-bold text-primary-800">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-700" />
            {user.authorized_student_count} {copy.shell.students}
          </div>
        </div>
        <a
          href={user.redirect_to}
          className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mx-auto mt-9 min-w-64' })}
        >
          {copy.login.enterPortal}
          <ForwardIcon aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-primary-950">
          {stage === 'otp' ? copy.login.codeTitle : copy.login.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {stage === 'otp' ? (
            <>
              {copy.login.codeDescription}{' '}
              <strong className="font-bold text-primary-950" dir="ltr">{challenge?.masked_destination}</strong>
            </>
          ) : copy.login.description}
        </p>
      </div>

      {errorMessage ? <div className="mt-6"><Notice variant="error">{errorMessage}</Notice></div> : null}

      {stage === 'identifier' ? (
        <div className="mt-8">
          <SocialAuthButtons locale={locale}
            marketId={marketId as MarketId}
            mode="login"
            disabled={socialPending || identifierForm.formState.isSubmitting}
            onPendingChange={setSocialPending}
          />
          <form onSubmit={identifierForm.handleSubmit(requestCode)} className="mt-4" noValidate>
            <FieldLabel htmlFor="login-identifier" label={copy.login.identifierLabel} requirement={copy.common.required} />
            <div className="relative">
              <Mail aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                id="login-identifier"
                type="text"
                inputMode="email"
                autoComplete="username"
                dir="ltr"
                disabled={socialPending || identifierForm.formState.isSubmitting}
                placeholder={copy.login.identifierPlaceholder}
                aria-invalid={Boolean(identifierForm.formState.errors.identifier)}
                aria-describedby="login-identifier-hint login-identifier-error"
                className={cn(authInputClass, 'ps-12')}
                {...identifierForm.register('identifier')}
              />
            </div>
            <p id="login-identifier-hint" className="mt-2 flex items-center gap-2 text-caption font-semibold text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-700" />
              {copy.login.identifierHint}
            </p>
            <FieldError id="login-identifier-error">{identifierForm.formState.errors.identifier?.message}</FieldError>

            <button
              type="submit"
              disabled={socialPending || identifierForm.formState.isSubmitting}
              className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-7 w-full' })}
            >
              <SubmitLabel
                loading={identifierForm.formState.isSubmitting}
                idle={copy.login.requestCode}
                pending={copy.common.loading}
              />
              {!identifierForm.formState.isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
            </button>
          </form>
        </div>
      ) : (
        <form onSubmit={otpForm.handleSubmit(verifyCode)} className="mt-8" noValidate>
          {isMockAuthApi ? <Notice>{copy.common.demo}</Notice> : null}
          <div className={isMockAuthApi ? 'mt-6' : ''}>
            <FieldLabel htmlFor="login-otp" label={copy.login.codeLabel} requirement={copy.common.required} />
            <div className="relative">
              <KeyRound aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                id="login-otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                dir="ltr"
                maxLength={6}
                placeholder={copy.login.codePlaceholder}
                aria-invalid={Boolean(otpForm.formState.errors.otp)}
                aria-describedby="login-otp-error"
                className={cn(authInputClass, 'ps-12 text-center text-xl font-black tracking-[0.45em]')}
                {...otpForm.register('otp', {
                  onChange: (event) => {
                    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 6);
                  },
                })}
              />
            </div>
            <FieldError id="login-otp-error">{otpForm.formState.errors.otp?.message}</FieldError>
          </div>

          <button
            type="submit"
            disabled={otpForm.formState.isSubmitting}
            className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-7 w-full' })}
          >
            <SubmitLabel
              loading={otpForm.formState.isSubmitting}
              idle={copy.login.verify}
              pending={copy.common.loading}
            />
            {!otpForm.formState.isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
          </button>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-small font-bold">
            <button type="button" onClick={resetLogin} className="inline-flex min-h-touch items-center gap-2 rounded-full px-3 text-primary hover:bg-primary-50">
              <BackIcon aria-hidden="true" className="h-4 w-4" />
              {copy.login.useDifferent}
            </button>
            <button
              type="button"
              disabled={secondsToResend > 0 || isResending}
              onClick={() => void resendCode()}
              className="min-h-touch rounded-full px-3 text-accent-700 transition-colors hover:bg-accent-50 disabled:text-muted-foreground"
            >
              {secondsToResend > 0
                ? copy.login.resendIn.replace('{seconds}', String(secondsToResend))
                : copy.login.resend}
            </button>
          </div>
        </form>
      )}

      <div className="my-8 h-px bg-border" />

      {(() => {
        const effectiveRegisterHref =
          registerHref ||
          (marketId === 'germany' ? `/de/${locale}/register` : `/${locale}/register`);
        const effectiveContactHref =
          contactHref ||
          (marketId === 'germany' ? `/de/${locale}#contact` : `/${locale}/contact`);

        return (
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={effectiveRegisterHref} className="group rounded-2xl border border-border p-4 transition-colors hover:border-accent-300 hover:bg-accent-50/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-800">
                  <MessageCircleMore aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-caption font-semibold text-muted-foreground">{copy.login.createAccount}</p>
                  <p className="text-small font-black text-primary-950 group-hover:text-accent-800">{copy.login.createAccountLink}</p>
                </div>
              </div>
            </a>
            <a href={effectiveContactHref} className="group rounded-2xl border border-border p-4 transition-colors hover:border-primary-300 hover:bg-primary-50/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Smartphone aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-caption font-semibold text-muted-foreground">{copy.login.recovery}</p>
                  <p className="text-small font-black text-primary-950 group-hover:text-primary-700">{copy.login.recoveryLink}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })()}
    </div>
  );
}
