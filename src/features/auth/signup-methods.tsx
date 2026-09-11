'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, KeyRound, Mail, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';
import { SocialAuthButtons } from './social-auth-buttons';
import { getAuthCopy } from './auth-copy';
import type { AuthUiLocale } from './auth-contracts';
import type { MarketId } from '@/config/markets';
import { authInputClass, FieldError, FieldLabel, Notice, SubmitLabel } from './auth-ui';
import { cn } from '@/lib/utils';
import type { VerifiedIdentity } from './signup-transaction';
import { PhoneInput } from '@/components/ui/phone-input';
import { dialCode, localPhone, type CountryCode } from '@/lib/phone';

export interface SignupMethodsProps {
  locale: AuthUiLocale;
  marketId?: MarketId;
  loginHref?: string;
  onVerified?: (params: { ticket: string; identity: VerifiedIdentity }) => void;
  onSelectMethod?: (method: 'email' | 'whatsapp') => void;
  disabled?: boolean;
}

type SignupStep = 'method_select' | 'email_input' | 'whatsapp_input' | 'otp_verify';

interface OtpChallengeState {
  challenge_id: string;
  channel: 'EMAIL' | 'WHATSAPP';
  masked_destination: string;
  expires_in_seconds: number;
  resend_after_seconds: number;
}

export function SignupMethods({
  locale,
  marketId = 'north-america',
  loginHref,
  onVerified,
  onSelectMethod,
  disabled = false,
}: SignupMethodsProps) {
  const copy = getAuthCopy(locale);
  const socialCopy = copy.social;
  const isRtl = locale === 'ar';
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const [step, setStep] = useState<SignupStep>('method_select');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState<CountryCode>(marketId === 'germany' ? 'DE' : 'CA');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [challenge, setChallenge] = useState<OtpChallengeState | null>(null);
  const [secondsToResend, setSecondsToResend] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [devOtp, setDevOtp] = useState('');

  const effectiveLoginHref =
    loginHref ||
    (marketId === 'germany' ? `/de/${locale}/login` : `/${locale}/login`);

  useEffect(() => {
    if (step !== 'otp_verify' || secondsToResend <= 0) return;
    const interval = window.setInterval(
      () => setSecondsToResend((current) => Math.max(0, current - 1)),
      1000
    );
    return () => window.clearInterval(interval);
  }, [secondsToResend, step]);

  async function handleRequestOtp(channel: 'EMAIL' | 'WHATSAPP') {
    setErrorMessage('');
    let identifier = '';
    if (channel === 'EMAIL') {
      identifier = email.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
        setErrorMessage(copy.register.errors.email);
        return;
      }
    } else {
      const parsed = localPhone(phone, country);
      if (!parsed && phone.replace(/\D/g, '').length < 7) {
        setErrorMessage(copy.register.errors.phone);
        return;
      }
      identifier = parsed?.phoneE164 || (phone.trim().startsWith('+') ? phone.trim() : `${dialCode(country)}${phone.trim()}`);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/signup/otp/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel,
          identifier,
          market: marketId,
          ui_locale: locale,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as Record<string, any>;
      if (!response.ok) {
        throw new Error(data.message || copy.common.apiError);
      }

      if (data._dev_otp) {
        setDevOtp(data._dev_otp);
        console.log(
          `%c[SPM SIGNUP OTP CODE]: ${data._dev_otp}`,
          'background: #0b1f3a; color: #16c7c7; font-size: 18px; font-weight: bold; padding: 6px 14px; border-radius: 6px;'
        );
      }

      setChallenge({
        challenge_id: data.challenge_id,
        channel: data.channel,
        masked_destination: data.masked_destination,
        expires_in_seconds: data.expires_in_seconds,
        resend_after_seconds: data.resend_after_seconds,
      });
      setSecondsToResend(data.resend_after_seconds || 60);
      setOtp('');
      setStep('otp_verify');
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : copy.common.apiError);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp() {
    if (!challenge) return;
    setErrorMessage('');

    const cleanOtp = otp.trim().replace(/\D/g, '');
    if (cleanOtp.length !== 6) {
      setErrorMessage(copy.common.invalidOtp);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/signup/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challenge_id: challenge.challenge_id,
          code: cleanOtp,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as Record<string, any>;
      if (!response.ok) {
        throw new Error(data.message || copy.common.invalidOtp);
      }

      // Verification successful!
      if (onVerified) {
        onVerified({
          ticket: data.signup_ticket,
          identity: data.verified_identity,
        });
      } else if (onSelectMethod) {
        onSelectMethod(challenge.channel === 'EMAIL' ? 'email' : 'whatsapp');
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : copy.common.apiError);
    } finally {
      setIsSubmitting(false);
    }
  }

  // State 2a: Email entry
  if (step === 'email_input') {
    return (
      <div className="mx-auto w-full max-w-xl">
        <button
          type="button"
          onClick={() => { setStep('method_select'); setErrorMessage(''); }}
          className="inline-flex items-center gap-2 text-caption font-bold text-accent-700 hover:text-accent-800"
        >
          <BackIcon className="h-4 w-4" />
          <span>{socialCopy.changeMethod}</span>
        </button>

        <h1 className="mt-4 text-h2 font-black text-primary-950">{socialCopy.emailInputTitle}</h1>
        <p className="mt-2 text-small leading-7 text-muted-foreground">{socialCopy.emailInputDescription}</p>

        {errorMessage ? <div className="mt-4"><Notice variant="error">{errorMessage}</Notice></div> : null}

        <form onSubmit={(e) => { e.preventDefault(); void handleRequestOtp('EMAIL'); }} className="mt-6" noValidate>
          <FieldLabel htmlFor="signup-input-email" label={copy.register.email} requirement={copy.common.required} />
          <div className="relative">
            <Mail aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="signup-input-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              disabled={isSubmitting}
              className={authInputClass + ' ps-12'}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-6 w-full' })}
          >
            <SubmitLabel loading={isSubmitting} idle={socialCopy.sendVerificationCode} pending={copy.common.loading} />
            {!isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
          </button>
        </form>
      </div>
    );
  }

  // State 2b: WhatsApp entry
  if (step === 'whatsapp_input') {
    return (
      <div className="mx-auto w-full max-w-xl">
        <button
          type="button"
          onClick={() => { setStep('method_select'); setErrorMessage(''); }}
          className="inline-flex items-center gap-2 text-caption font-bold text-accent-700 hover:text-accent-800"
        >
          <BackIcon className="h-4 w-4" />
          <span>{socialCopy.changeMethod}</span>
        </button>

        <h1 className="mt-4 text-h2 font-black text-primary-950">{socialCopy.whatsappInputTitle}</h1>
        <p className="mt-2 text-small leading-7 text-muted-foreground">{socialCopy.whatsappInputDescription}</p>

        {errorMessage ? <div className="mt-4"><Notice variant="error">{errorMessage}</Notice></div> : null}

        <form onSubmit={(e) => { e.preventDefault(); void handleRequestOtp('WHATSAPP'); }} className="mt-6" noValidate>
          <FieldLabel htmlFor="signup-input-whatsapp" label={copy.register.whatsapp} requirement={copy.common.required} />
          <PhoneInput
            id="signup-input-whatsapp"
            label={copy.register.whatsapp}
            locale={locale as 'en' | 'ar' | 'de'}
            country={country}
            value={phone}
            onCountryChange={setCountry}
            onChange={setPhone}
            disabled={isSubmitting}
            required
            className={authInputClass}
          />

          <button
            type="submit"
            disabled={isSubmitting || !phone.trim()}
            className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-6 w-full' })}
          >
            <SubmitLabel loading={isSubmitting} idle={socialCopy.sendVerificationCode} pending={copy.common.loading} />
            {!isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
          </button>
        </form>
      </div>
    );
  }

  // State 2c: OTP Verification
  if (step === 'otp_verify' && challenge) {
    return (
      <div className="mx-auto w-full max-w-xl">
        <button
          type="button"
          onClick={() => {
            setStep(challenge.channel === 'EMAIL' ? 'email_input' : 'whatsapp_input');
            setErrorMessage('');
          }}
          className="inline-flex items-center gap-2 text-caption font-bold text-accent-700 hover:text-accent-800"
        >
          <BackIcon className="h-4 w-4" />
          <span>{copy.login.useDifferent}</span>
        </button>

        <h1 className="mt-4 text-h2 font-black text-primary-950">{socialCopy.otpTitle}</h1>
        <p className="mt-2 text-small leading-7 text-muted-foreground">
          {socialCopy.otpDescription}{' '}
          <strong className="font-black text-primary-950" dir="ltr">{challenge.masked_destination}</strong>
        </p>

        {errorMessage ? <div className="mt-4"><Notice variant="error">{errorMessage}</Notice></div> : null}

        <form onSubmit={(e) => { e.preventDefault(); void handleVerifyOtp(); }} className="mt-6" noValidate>
          <FieldLabel htmlFor="signup-otp" label={copy.login.codeLabel} requirement={copy.common.required} />
          <div className="relative">
            <KeyRound aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="signup-otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              className={cn(authInputClass, 'ps-12 text-center font-mono text-xl tracking-[0.3em]')}
              autoFocus
            />
          </div>

          {devOtp && (
            <div className="mt-3 flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-3.5 py-2.5 text-small">
              <span className="font-semibold text-primary">
                {locale === 'ar' ? 'رمز التحقق (للتطوير والعرض):' : 'Verification code (Dev / Demo):'}{' '}
                <strong className="text-accent-800 font-mono text-base">{devOtp}</strong>
              </span>
              <button
                type="button"
                onClick={() => setOtp(devOtp)}
                className="font-bold text-accent-700 hover:text-accent-900 underline text-xs cursor-pointer"
              >
                {locale === 'ar' ? 'تعبئة الرمز' : 'Fill code'}
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || otp.trim().length !== 6}
            className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-6 w-full' })}
          >
            <SubmitLabel loading={isSubmitting} idle={socialCopy.verifyAndContinue} pending={copy.common.loading} />
            {!isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
          </button>

          <div className="mt-4 flex items-center justify-between gap-3 text-small font-bold">
            <button
              type="button"
              disabled={secondsToResend > 0 || isSubmitting}
              onClick={() => void handleRequestOtp(challenge.channel)}
              className="min-h-touch rounded-full px-3 text-accent-700 transition-colors hover:bg-accent-50 disabled:text-muted-foreground"
            >
              {secondsToResend > 0
                ? copy.login.resendIn.replace('{seconds}', String(secondsToResend))
                : copy.login.resend}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // State 1: Method Selection (Default landing)
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-primary-950">{copy.register.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{socialCopy.signupSubtitle}</p>
      </div>

      <div className="mt-8">
        <SocialAuthButtons
          locale={locale}
          marketId={marketId}
          mode="register"
          disabled={disabled || isSubmitting}
          showOrDivider={true}
        />

        <div className="space-y-3" role="group" aria-label={socialCopy.signupSubtitle}>
          <button
            type="button"
            disabled={disabled || isSubmitting}
            onClick={() => {
              if (onSelectMethod) onSelectMethod('email');
              setStep('email_input');
              setErrorMessage('');
            }}
            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3 font-semibold' })}
          >
            <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-700" />
            <span>{socialCopy.signupWithEmail}</span>
          </button>

          <button
            type="button"
            disabled={disabled || isSubmitting}
            onClick={() => {
              if (onSelectMethod) onSelectMethod('whatsapp');
              setStep('whatsapp_input');
              setErrorMessage('');
            }}
            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3 font-semibold' })}
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0 text-[#25D366]" />
            <span>{socialCopy.signupWithWhatsapp}</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            {socialCopy.alreadyHaveAccount}{' '}
            <a
              href={effectiveLoginHref}
              className="font-bold text-accent-700 underline underline-offset-4 hover:text-accent-800"
            >
              {socialCopy.signIn}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
