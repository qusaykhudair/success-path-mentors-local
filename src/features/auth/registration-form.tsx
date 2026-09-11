'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  GraduationCap,
  KeyRound,
  Mail,
  MapPin,
  MessageCircleMore,
  ShieldAlert,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm, type FieldPath } from 'react-hook-form';
import { z } from 'zod';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getDefaultMarket, getMarketConfig, type MarketId } from '@/config/markets';
import {
  getRegistrationCountries,
  getRegistrationTimezone,
  getRegistrationTimezones,
} from './registration-options';

import { authApi, isMockAuthApi } from './auth-api';
import { getAuthCopy } from './auth-copy';
import { SocialAuthButtons } from './social-auth-buttons';
import { SignupMethods } from './signup-methods';
import {
  AuthApiError,
  toAuthApiLocale,
  type AuthUiLocale,
  type RegistrationConfirmation,
  type RegistrationPayload,
  type RegistrationResult,
} from './auth-contracts';
import { authInputClass, FieldError, FieldLabel, Notice, SubmitLabel } from './auth-ui';

interface RegistrationFormValues {
  parent_name: string;
  guardian_relationship: string;
  email: string;
  whatsapp: string;
  telephone: string;
  student_first_name: string;
  grade: string;
  subject: string;
  curriculum: string;
  preferred_language: string;
  country: string;
  timezone: string;
  preferred_day: string;
  preferred_time: string;
  privacy_consent: boolean;
}

const grades = Array.from({ length: 12 }, (_, index) => String(index + 1));

const optionSetsByMarket = {
  'north-america': {
    subjects: [
      ['Mathematics', 'الرياضيات', 'Mathematik'],
      ['English', 'اللغة الإنجليزية', 'Englisch'],
      ['General Science', 'العلوم العامة', 'Naturwissenschaften'],
      ['Chemistry', 'الكيمياء', 'Chemie'],
      ['Physics', 'الفيزياء', 'Physik'],
      ['French', 'اللغة الفرنسية', 'Französisch'],
      ['Arabic', 'اللغة العربية', 'Arabisch'],
      ['Quran & Islamic Studies', 'القرآن والدراسات الإسلامية', 'Koran & Islamstudien'],
    ],
    curricula: [
      ['Ontario', 'أونتاريو', 'Ontario'],
      ['Alberta', 'ألبرتا', 'Alberta'],
      ['British Columbia', 'بريتش كولومبيا', 'British Columbia'],
      ['Quebec', 'كيبيك', 'Quebec'],
      ['US Common Core', 'المنهج الأمريكي', 'US Common Core'],
      ['British', 'المنهج البريطاني', 'Britisches Curriculum'],
      ['IB', 'البكالوريا الدولية IB', 'IB (International Baccalaureate)'],
      ['Other', 'منهج آخر', 'Anderer Lehrplan'],
    ],
  },
  germany: {
    subjects: [
      ['German', 'اللغة الألمانية', 'Deutsch'],
      ['English', 'اللغة الإنجليزية', 'Englisch'],
      ['Arabic', 'اللغة العربية', 'Arabisch'],
      ['French', 'اللغة الفرنسية', 'Französisch'],
    ],
    curricula: [
      ['German School Curriculum', 'المنهج المدرسي الألماني', 'Deutsches Schulcurriculum'],
      ['International / IB', 'البكالوريا الدولية IB', 'International / IB Curriculum'],
      ['British Curriculum', 'المنهج البريطاني', 'Britisches Curriculum'],
      ['General Tutoring', 'تدريس لغات ومتابعة عامة', 'Sprach- & Nachhilfeunterricht'],
      ['Other', 'منهج آخر', 'Anderer Lehrplan'],
    ],
  },
} as const;

const sharedOptionSets = {
  languages: [
    ['English', 'الإنجليزية', 'Englisch'],
    ['Arabic', 'العربية', 'Arabisch'],
    ['German', 'الألمانية', 'Deutsch'],
    ['French', 'الفرنسية', 'Französisch'],
  ],
  days: [
    ['Monday', 'الاثنين', 'Montag'],
    ['Tuesday', 'الثلاثاء', 'Dienstag'],
    ['Wednesday', 'الأربعاء', 'Mittwoch'],
    ['Thursday', 'الخميس', 'Donnerstag'],
    ['Friday', 'الجمعة', 'Freitag'],
    ['Saturday', 'السبت', 'Samstag'],
    ['Sunday', 'الأحد', 'Sonntag'],
  ],
} as const;

const stepFields: FieldPath<RegistrationFormValues>[][] = [
  ['parent_name', 'guardian_relationship', 'email', 'whatsapp', 'telephone'],
  ['student_first_name', 'grade'],
  ['subject', 'curriculum', 'preferred_language', 'country', 'timezone', 'preferred_day', 'preferred_time'],
  ['privacy_consent'],
];

function phoneIsValid(value: string): boolean {
  return /^\+?[1-9][\d\s().-]{7,20}$/.test(value.trim());
}

function normalizePhone(value: string): string {
  return value.trim().replace(/[\s().-]/g, '');
}

function friendlyError(error: unknown, copy: ReturnType<typeof getAuthCopy>): string {
  if (!(error instanceof AuthApiError)) return copy.common.apiError;
  if (error.code === 'OTP_INVALID') return copy.common.invalidOtp;
  if (error.code === 'OTP_EXPIRED') return copy.common.expiredOtp;
  if (error.code === 'RATE_LIMITED') return copy.common.rateLimited;
  if (error.code === 'REQUEST_TIMEOUT') return copy.common.timeoutError;
  if (error.code === 'NETWORK_ERROR') return copy.common.networkError;
  if (error.message && error.message !== `Authentication request failed (500).`) return error.message;
  return copy.common.apiError;
}

function SelectField({
  id,
  label,
  value,
  placeholder,
  options,
  error,
  required,
  register,
}: {
  id: FieldPath<RegistrationFormValues>;
  label: string;
  value?: string;
  placeholder: string;
  options: readonly (readonly [string, string])[] | readonly string[];
  error?: string;
  required: string;
  register: ReturnType<typeof useForm<RegistrationFormValues>>['register'];
}) {
  const isPairOptions = Array.isArray(options[0]);

  return (
    <div>
      <FieldLabel htmlFor={id} label={label} requirement={required} />
      <select
        id={id}
        defaultValue={value || ''}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-error`}
        className={cn(authInputClass, 'appearance-none')}
        {...register(id)}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => {
          const optionValue = isPairOptions ? (option as readonly [string, string])[0] : String(option);
          const optionLabel = isPairOptions ? (option as readonly [string, string])[1] : String(option);
          return <option key={optionValue} value={optionValue}>{optionLabel}</option>;
        })}
      </select>
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

function ReviewRow({ label, value, icon: Icon }: { label: string; value: string; icon: typeof UserRound }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface-sunken/70 p-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background text-accent-700 shadow-xs">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-caption font-bold text-muted-foreground">{label}</p>
        <p className="mt-0.5 break-words text-small font-black text-primary-950" dir={label.toLowerCase().includes('email') ? 'ltr' : undefined}>{value}</p>
      </div>
    </div>
  );
}

export function RegistrationForm({
  locale,
  marketId = 'north-america',
  loginHref,
  homeHref,
  initialMethod = null,
}: {
  locale: AuthUiLocale;
  marketId?: MarketId;
  loginHref?: string;
  homeHref?: string;
  initialMethod?: 'email' | 'whatsapp' | null;
}) {
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'whatsapp' | null>(initialMethod);
  const copy = getAuthCopy(locale);
  const isRtl = locale === 'ar';
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const languageIndex = locale === 'ar' ? 1 : locale === 'de' ? 2 : 0;

  const market = getMarketConfig(marketId);
  const detectedTimezone = useMemo(() => getRegistrationTimezone(market), [market]);
  const availableTimezones = useMemo(
    () => getRegistrationTimezones(detectedTimezone, market),
    [detectedTimezone, market]
  );
  const availableCountries = useMemo(
    () => getRegistrationCountries(market, locale),
    [market, locale]
  );
  const marketOptions = optionSetsByMarket[marketId] || optionSetsByMarket['north-america'];
  const effectiveLoginHref =
    loginHref ||
    (marketId === 'germany' ? `/de/${locale}/login` : `/${locale}/login`);
  const effectiveHomeHref =
    homeHref ||
    (marketId === 'germany' ? `/de/${locale}` : `/${locale}`);

  const schema = useMemo(
    () => z.object({
      parent_name: z.string().trim().min(2, copy.register.errors.required).max(100),
      guardian_relationship: z.string().min(1, copy.register.errors.required),
      email: z.string().trim().email(copy.register.errors.email).max(160),
      whatsapp: z.string().trim().refine(phoneIsValid, copy.register.errors.phone),
      telephone: z.string().trim().refine((value) => !value || phoneIsValid(value), copy.register.errors.phone),
      student_first_name: z.string().trim().min(2, copy.register.errors.required).max(60),
      grade: z.string().min(1, copy.register.errors.required),
      subject: z.string().min(1, copy.register.errors.required),
      curriculum: z.string().min(1, copy.register.errors.required),
      preferred_language: z.string().min(1, copy.register.errors.required),
      country: z.string().min(1, copy.register.errors.required),
      timezone: z.string().min(1, copy.register.errors.required),
      preferred_day: z.string().min(1, copy.register.errors.required),
      preferred_time: z.string().min(1, copy.register.errors.required),
      privacy_consent: z.literal(true, { errorMap: () => ({ message: copy.register.errors.consent }) }),
    }),
    [copy.register.errors]
  );

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      parent_name: '',
      guardian_relationship: '',
      email: '',
      whatsapp: '',
      telephone: '',
      student_first_name: '',
      grade: '',
      subject: '',
      curriculum: '',
      preferred_language: locale === 'de' ? 'German' : locale === 'ar' ? 'Arabic' : 'English',
      country: market.registration.countryValue,
      timezone: detectedTimezone,
      preferred_day: '',
      preferred_time: '',
      privacy_consent: false,
    },
  });

  const [step, setStep] = useState(0);
  const [apiError, setApiError] = useState('');
  const [result, setResult] = useState<RegistrationResult | null>(null);
  const [confirmation, setConfirmation] = useState<RegistrationConfirmation | null>(null);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(0);

  useEffect(() => {
    if (resendSeconds <= 0) return;
    const interval = window.setInterval(
      () => setResendSeconds((current) => Math.max(0, current - 1)),
      1000
    );
    return () => window.clearInterval(interval);
  }, [resendSeconds]);

  const values = form.watch();

  async function nextStep() {
    const valid = await form.trigger(stepFields[step], { shouldFocus: true });
    if (valid) {
      setApiError('');
      setStep((current) => Math.min(3, current + 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async function submitRegistration(formValues: RegistrationFormValues) {
    setApiError('');

    const payload: RegistrationPayload = {
      parent_name: formValues.parent_name.trim(),
      guardian_relationship: formValues.guardian_relationship,
      email: formValues.email.trim().toLowerCase(),
      whatsapp: normalizePhone(formValues.whatsapp),
      telephone: formValues.telephone ? normalizePhone(formValues.telephone) : undefined,
      student_first_name: formValues.student_first_name.trim(),
      grade: formValues.grade,
      subject: formValues.subject,
      curriculum: formValues.curriculum,
      preferred_language: formValues.preferred_language,
      country: formValues.country,
      timezone: formValues.timezone,
      preferred_day: formValues.preferred_day,
      preferred_time: formValues.preferred_time,
      source: 'WEBSITE',
      locale: toAuthApiLocale(locale),
      privacy_consent: true,
    };

    try {
      const nextResult = await authApi.submitRegistration(payload);
      setResult(nextResult);
      if (nextResult.verification) {
        setResendSeconds(nextResult.verification.resend_after_seconds || 0);
      } else {
        // Real API (Phase 1-3) does not use OTP for registration, it's a one-shot process.
        setConfirmation({
          registration_id: nextResult.registration_id,
          status: 'WAITING_FOR_ADMIN',
          trial_status: nextResult.trial_status as any,
        });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      if (error instanceof AuthApiError) {
        for (const fieldError of error.fieldErrors) {
          const field = fieldError.field as FieldPath<RegistrationFormValues>;
          if (field in form.getValues()) {
            form.setError(field, { type: 'server', message: fieldError.message });
          }
        }
      }
      setApiError(friendlyError(error, copy));
    }
  }

  async function verifyRegistration() {
    const verification = result?.verification;
    if (!result || !verification) return;

    if (!/^\d{6}$/.test(otp)) {
      setOtpError(copy.common.invalidOtp);
      return;
    }

    setIsVerifying(true);
    setOtpError('');

    try {
      const nextConfirmation = await authApi.verifyRegistration(
        {
          contact_id: verification.contact_id,
          challenge_id: verification.challenge_id,
          otp,
        },
        result.registration_id,
        toAuthApiLocale(locale)
      );
      setConfirmation(nextConfirmation);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setOtpError(friendlyError(error, copy));
    } finally {
      setIsVerifying(false);
    }
  }

  async function resendVerification() {
    const verification = result?.verification;
    if (!result || !verification || resendSeconds > 0 || isResending) return;
    setIsResending(true);
    setOtpError('');

    try {
      const challenge = await authApi.resendRegistrationVerification(
        verification.contact_id,
        toAuthApiLocale(locale)
      );
      setResult({
        ...result,
        verification: {
          ...verification,
          challenge_id: challenge.challenge_id,
          channel: challenge.channel,
          masked_destination: challenge.masked_destination || verification.masked_destination,
          expires_in_seconds: challenge.expires_in_seconds,
          resend_after_seconds: challenge.resend_after_seconds,
        },
      });
      setOtp('');
      setResendSeconds(challenge.resend_after_seconds);
    } catch (error) {
      setOtpError(friendlyError(error, copy));
    } finally {
      setIsResending(false);
    }
  }

  if (confirmation) {
    return (
      <div className="flex min-h-[580px] flex-col justify-center py-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-50 text-success-600 shadow-[0_0_0_12px_rgba(34,197,94,0.08)]">
          <Check aria-hidden="true" className="h-9 w-9" strokeWidth={3} />
        </div>
        <div className="mx-auto mt-7 max-w-lg text-center">
          <h1 className="text-h2 font-black text-primary-950">{copy.register.successTitle}</h1>
          <p className="mt-4 text-body leading-8 text-muted-foreground">{copy.register.successDescription}</p>
          <Notice variant="success"><span className="font-bold">{copy.register.successNext}</span></Notice>
          <p className="mt-6 text-caption font-semibold text-muted-foreground">
            {copy.register.registrationId}: <strong className="font-black text-primary-950" dir="ltr">{confirmation.registration_id}</strong>
          </p>
        </div>
        <a href={effectiveHomeHref} className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mx-auto mt-8 min-w-64' })}>
          {copy.register.returnHome}
          <ForwardIcon aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    );
  }

  if (result?.status === 'IDENTITY_LINK_REVIEW') {
    return (
      <div className="flex min-h-[580px] flex-col justify-center py-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-warning-50 text-warning-600 shadow-[0_0_0_12px_rgba(245,158,11,0.08)]">
          <ShieldAlert aria-hidden="true" className="h-9 w-9" />
        </div>
        <div className="mx-auto mt-7 max-w-lg text-center">
          <h1 className="text-h2 font-black text-primary-950">{copy.register.reviewStatusTitle}</h1>
          <p className="mt-4 text-body leading-8 text-muted-foreground">{copy.register.reviewStatusDescription}</p>
          <p className="mt-6 text-caption font-semibold text-muted-foreground">
            {copy.register.registrationId}: <strong className="font-black text-primary-950" dir="ltr">{result.registration_id}</strong>
          </p>
        </div>
        <a href={effectiveHomeHref} className={buttonVariants({ variant: 'primary', size: 'lg', className: 'mx-auto mt-8 min-w-64' })}>
          {copy.register.returnHome}
        </a>
      </div>
    );
  }

  if (result?.verification) {
    const isExistingMatch = result.status === 'MATCH_VERIFICATION_REQUIRED';
    return (
      <div className="mx-auto flex min-h-[600px] max-w-xl flex-col justify-center py-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-50 px-3 py-1.5 text-caption font-bold text-accent-800">
          <ShieldCheck aria-hidden="true" className="h-4 w-4" />
          {copy.common.secure}
        </div>
        <h1 className="mt-5 text-h1 font-black text-primary-950">
          {isExistingMatch ? copy.register.existingMatchTitle : copy.register.verifyTitle}
        </h1>
        <p className="mt-4 text-body leading-8 text-muted-foreground">
          {isExistingMatch ? copy.register.existingMatchDescription : copy.register.verifyDescription}{' '}
          <strong dir="ltr" className="font-black text-primary-950">{result.verification.masked_destination}</strong>
        </p>



        <div className="mt-7">
          <FieldLabel htmlFor="registration-otp" label={copy.login.codeLabel} requirement={copy.common.required} />
          <div className="relative">
            <KeyRound aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="registration-otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              dir="ltr"
              value={otp}
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength={6}
              placeholder={copy.login.codePlaceholder}
              aria-invalid={Boolean(otpError)}
              aria-describedby="registration-otp-error"
              className={cn(authInputClass, 'ps-12 text-center text-xl font-black tracking-[0.45em]')}
            />
          </div>
          <FieldError id="registration-otp-error">{otpError}</FieldError>
        </div>

        <button
          type="button"
          onClick={() => void verifyRegistration()}
          disabled={isVerifying}
          className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-7 w-full' })}
        >
          <SubmitLabel loading={isVerifying} idle={copy.login.verify} pending={copy.common.loading} />
          {!isVerifying ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
        </button>
        <button
          type="button"
          disabled={resendSeconds > 0 || isResending}
          onClick={() => void resendVerification()}
          className="mx-auto mt-4 min-h-touch rounded-full px-4 text-small font-black text-accent-700 hover:bg-accent-50 disabled:text-muted-foreground"
        >
          {resendSeconds > 0
            ? copy.login.resendIn.replace('{seconds}', String(resendSeconds))
            : copy.login.resend}
        </button>
      </div>
    );
  }

  if (selectedMethod === null) {
    return (
      <SignupMethods
        locale={locale}
        marketId={marketId}
        loginHref={effectiveLoginHref}
        onSelectMethod={(method) => {
          setSelectedMethod(method);
        }}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setSelectedMethod(null)}
          className="inline-flex items-center gap-2 text-caption font-bold text-accent-700 hover:text-accent-800"
        >
          <BackIcon className="h-4 w-4" />
          {copy.social.changeMethod}
        </button>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-caption font-bold text-primary-800">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-700" />
            {copy.common.secure}
          </div>
          <h1 className="mt-5 text-h2 font-black text-primary-950">{copy.register.title}</h1>
          <p className="mt-3 max-w-xl text-small leading-7 text-muted-foreground">{copy.register.description}</p>
        </div>
        <p className="text-small font-semibold text-muted-foreground">
          {copy.register.existing}{' '}
          <a href={effectiveLoginHref} className="font-black text-accent-700 underline-offset-4 hover:underline">{copy.register.existingLink}</a>
        </p>
      </div>

      {marketId === 'germany' && (
        <div className="mt-6 rounded-2xl border border-accent-200/80 bg-accent-50/60 p-4.5 text-small">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent-700 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-primary-950">
                {copy.social.adultNoticeTitle}
              </p>
              <p className="text-xs text-primary-700 leading-relaxed">
                {copy.social.adultNoticeDescription}
              </p>
              <a
                href={`/de/${locale}/trial`}
                className="mt-1 inline-flex items-center gap-1 text-xs font-black text-accent-800 underline-offset-4 hover:underline"
              >
                {copy.social.adultNoticeAction}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <div className="flex items-center justify-between gap-2" aria-label={copy.register.stepLabel.replace('{current}', String(step + 1)).replace('{total}', '4')}>
          {copy.register.steps.map((label, index) => (
            <div key={label} className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-caption font-black transition-colors',
                  index < step && 'border-accent bg-accent text-primary',
                  index === step && 'border-primary bg-primary text-white shadow-[0_0_0_5px_rgba(22,199,199,0.13)]',
                  index > step && 'border-border bg-background text-muted-foreground'
                )}
              >
                {index < step ? <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} /> : index + 1}
              </span>
              <span className={cn('hidden truncate text-caption font-bold sm:block', index === step ? 'text-primary-950' : 'text-muted-foreground')}>{label}</span>
              {index < copy.register.steps.length - 1 ? <span className="h-px flex-1 bg-border" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <p className="mt-3 text-caption font-bold text-muted-foreground sm:hidden">
          {copy.register.stepLabel.replace('{current}', String(step + 1)).replace('{total}', '4')} · {copy.register.steps[step]}
        </p>
      </div>

      {apiError ? <div className="mt-6"><Notice variant="error">{apiError}</Notice></div> : null}

      <form onSubmit={form.handleSubmit(submitRegistration)} className="mt-8" noValidate>
        {step === 0 ? (
          <fieldset>
            <legend className="text-h3 font-black text-primary-950">{copy.register.guardianTitle}</legend>
            <p className="mt-2 text-small leading-7 text-muted-foreground">{copy.register.guardianDescription}</p>

            <SocialAuthButtons locale={locale} marketId={marketId} mode="register" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="parent_name" label={copy.register.parentName} requirement={copy.common.required} />
                <input id="parent_name" autoComplete="name" aria-invalid={Boolean(form.formState.errors.parent_name)} aria-describedby="parent_name-error" className={authInputClass} {...form.register('parent_name')} />
                <FieldError id="parent_name-error">{form.formState.errors.parent_name?.message}</FieldError>
              </div>
              <SelectField
                id="guardian_relationship"
                label={copy.register.relationship}
                placeholder={copy.register.select}
                value={values.guardian_relationship}
                options={copy.register.relationshipOptions.map((label, index) => [['PARENT', 'GUARDIAN', 'AUTHORIZED_ADULT'][index] || 'OTHER', label] as const)}
                error={form.formState.errors.guardian_relationship?.message}
                required={copy.common.required}
                register={form.register}
              />
              <div>
                <FieldLabel htmlFor="email" label={copy.register.email} requirement={copy.common.required} />
                <div className="relative">
                  <Mail aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input id="email" type="email" autoComplete="email" dir="ltr" aria-invalid={Boolean(form.formState.errors.email)} aria-describedby="email-error" className={cn(authInputClass, 'ps-12')} {...form.register('email')} />
                </div>
                <FieldError id="email-error">{form.formState.errors.email?.message}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="whatsapp" label={copy.register.whatsapp} requirement={copy.common.required} />
                <div className="relative">
                  <MessageCircleMore aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input id="whatsapp" type="tel" autoComplete="tel" dir="ltr" placeholder={getDefaultMarket().phonePlaceholder} aria-invalid={Boolean(form.formState.errors.whatsapp)} aria-describedby="whatsapp-hint whatsapp-error" className={cn(authInputClass, 'ps-12')} {...form.register('whatsapp')} />
                </div>
                <FieldError id="whatsapp-error">{form.formState.errors.whatsapp?.message}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="telephone" label={copy.register.telephone} requirement={copy.common.optional} />
                <input id="telephone" type="tel" autoComplete="tel" dir="ltr" placeholder={getDefaultMarket().phonePlaceholder} aria-invalid={Boolean(form.formState.errors.telephone)} aria-describedby="telephone-hint telephone-error" className={authInputClass} {...form.register('telephone')} />
                <FieldError id="telephone-error">{form.formState.errors.telephone?.message}</FieldError>
              </div>
            </div>
            <p id="whatsapp-hint" className="mt-4 flex items-center gap-2 text-caption font-semibold text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-700" />
              {copy.register.contactHint}
            </p>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend className="text-h3 font-black text-primary-950">{copy.register.studentTitle}</legend>
            <p className="mt-2 text-small leading-7 text-muted-foreground">{copy.register.studentDescription}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="student_first_name" label={copy.register.studentName} requirement={copy.common.required} />
                <div className="relative">
                  <GraduationCap aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input id="student_first_name" autoComplete="given-name" aria-invalid={Boolean(form.formState.errors.student_first_name)} aria-describedby="student_first_name-error" className={cn(authInputClass, 'ps-12')} {...form.register('student_first_name')} />
                </div>
                <FieldError id="student_first_name-error">{form.formState.errors.student_first_name?.message}</FieldError>
              </div>
              <SelectField id="grade" label={copy.register.grade} placeholder={copy.register.gradePlaceholder} value={values.grade} options={grades} error={form.formState.errors.grade?.message} required={copy.common.required} register={form.register} />
            </div>
            <div className="mt-6"><Notice>{copy.common.privacy}</Notice></div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend className="text-h3 font-black text-primary-950">{copy.register.learningTitle}</legend>
            <p className="mt-2 text-small leading-7 text-muted-foreground">{copy.register.learningDescription}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <SelectField id="subject" label={copy.register.subject} placeholder={copy.register.select} value={values.subject} options={marketOptions.subjects.map((item) => [item[0], item[languageIndex]] as const)} error={form.formState.errors.subject?.message} required={copy.common.required} register={form.register} />
              <SelectField id="curriculum" label={copy.register.curriculum} placeholder={copy.register.select} value={values.curriculum} options={marketOptions.curricula.map((item) => [item[0], item[languageIndex]] as const)} error={form.formState.errors.curriculum?.message} required={copy.common.required} register={form.register} />
              <SelectField id="preferred_language" label={copy.register.language} placeholder={copy.register.select} value={values.preferred_language} options={sharedOptionSets.languages.map((item) => [item[0], item[languageIndex]] as const)} error={form.formState.errors.preferred_language?.message} required={copy.common.required} register={form.register} />
              <SelectField id="country" label={copy.register.country} placeholder={copy.register.select} value={values.country} options={availableCountries} error={form.formState.errors.country?.message} required={copy.common.required} register={form.register} />
              <SelectField id="timezone" label={copy.register.timezone} placeholder={copy.register.select} value={values.timezone} options={availableTimezones} error={form.formState.errors.timezone?.message} required={copy.common.required} register={form.register} />
              <SelectField id="preferred_day" label={copy.register.preferredDay} placeholder={copy.register.select} value={values.preferred_day} options={sharedOptionSets.days.map((item) => [item[0], item[languageIndex]] as const)} error={form.formState.errors.preferred_day?.message} required={copy.common.required} register={form.register} />
              <div>
                <FieldLabel htmlFor="preferred_time" label={copy.register.preferredTime} requirement={copy.common.required} />
                <div className="relative">
                  <Clock3 aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input id="preferred_time" type="time" dir="ltr" aria-invalid={Boolean(form.formState.errors.preferred_time)} aria-describedby="preferred_time-error" className={cn(authInputClass, 'ps-12')} {...form.register('preferred_time')} />
                </div>
                <FieldError id="preferred_time-error">{form.formState.errors.preferred_time?.message}</FieldError>
              </div>
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset>
            <legend className="text-h3 font-black text-primary-950">{copy.register.reviewTitle}</legend>
            <p className="mt-2 text-small leading-7 text-muted-foreground">{copy.register.reviewDescription}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ReviewRow label={copy.register.parentName} value={values.parent_name} icon={UserRound} />
              <ReviewRow label={copy.register.email} value={values.email} icon={Mail} />
              <ReviewRow label={copy.register.studentName} value={`${values.student_first_name} · ${copy.register.grade} ${values.grade}`} icon={GraduationCap} />
              <ReviewRow label={copy.register.subject} value={`${values.subject} · ${values.curriculum}`} icon={CheckCircle2} />
              <ReviewRow label={copy.register.timezone} value={`${values.country} · ${values.timezone}`} icon={MapPin} />
              <ReviewRow label={copy.register.preferredDay} value={`${values.preferred_day} · ${values.preferred_time}`} icon={CalendarDays} />
            </div>

            <div className="mt-5 rounded-2xl border border-accent-200 bg-accent-50/70 p-4">
              <label className="flex cursor-pointer items-start gap-3 text-small leading-6 text-primary-950">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 shrink-0 rounded border-border-strong accent-[#16C7C7]"
                  aria-invalid={Boolean(form.formState.errors.privacy_consent)}
                  aria-describedby="privacy_consent-error"
                  {...form.register('privacy_consent')}
                />
                <span>{copy.register.consent}</span>
              </label>
              <FieldError id="privacy_consent-error">{form.formState.errors.privacy_consent?.message}</FieldError>
            </div>
            <div className="mt-5"><Notice><strong>{copy.register.noAutoBooking}</strong></Notice></div>
          </fieldset>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          {step > 0 ? (
            <button type="button" onClick={() => setStep((current) => Math.max(0, current - 1))} className={buttonVariants({ variant: 'outline', size: 'lg', className: 'sm:min-w-36' })}>
              <BackIcon aria-hidden="true" className="h-5 w-5" />
              {copy.common.back}
            </button>
          ) : <span />}

          {step < 3 ? (
            <button type="button" onClick={() => void nextStep()} className={buttonVariants({ variant: 'accent', size: 'lg', className: 'sm:min-w-44' })}>
              {copy.common.continue}
              <ForwardIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          ) : (
            <button type="submit" disabled={form.formState.isSubmitting} className={buttonVariants({ variant: 'accent', size: 'lg', className: 'sm:min-w-72' })}>
              <SubmitLabel loading={form.formState.isSubmitting} idle={copy.register.submit} pending={copy.common.loading} />
              {!form.formState.isSubmitting ? <ForwardIcon aria-hidden="true" className="h-5 w-5" /> : null}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
