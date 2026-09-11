'use client';

import { useState } from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';
import { SocialAuthButtons } from './social-auth-buttons';
import { getAuthCopy } from './auth-copy';
import type { AuthUiLocale } from './auth-contracts';
import type { MarketId } from '@/config/markets';

export interface SignupMethodsProps {
  locale: AuthUiLocale;
  marketId?: MarketId;
  loginHref?: string;
  onSelectMethod: (method: 'email' | 'whatsapp') => void;
  disabled?: boolean;
}

export function SignupMethods({
  locale,
  marketId = 'north-america',
  loginHref,
  onSelectMethod,
  disabled = false,
}: SignupMethodsProps) {
  const copy = getAuthCopy(locale);
  const socialCopy = copy.social;
  const [pending, setPending] = useState(false);

  const effectiveLoginHref =
    loginHref ||
    (marketId === 'germany' ? `/de/${locale}/login` : `/${locale}/login`);

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-caption font-bold text-primary-800">
        <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-700" />
        {copy.common.secure}
      </div>

      <h1 className="mt-5 text-h2 font-black text-primary-950">{copy.register.title}</h1>
      <p className="mt-3 text-small leading-7 text-muted-foreground">{socialCopy.signupSubtitle}</p>

      <SocialAuthButtons
        locale={locale}
        marketId={marketId}
        mode="register"
        disabled={disabled || pending}
        onPendingChange={setPending}
        showOrDivider={true}
      />

      <div className="space-y-3" role="group" aria-label={socialCopy.signupSubtitle}>
        <button
          type="button"
          disabled={disabled || pending}
          onClick={() => onSelectMethod('email')}
          className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}
        >
          <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-700" />
          <span>{socialCopy.signupWithEmail}</span>
        </button>

        <button
          type="button"
          disabled={disabled || pending}
          onClick={() => onSelectMethod('whatsapp')}
          className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full gap-3' })}
        >
          <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0 text-[#25D366]" />
          <span>{socialCopy.signupWithWhatsapp}</span>
        </button>
      </div>

      {marketId === 'germany' && (
        <div className="mt-6 rounded-2xl border border-accent-200/80 bg-accent-50/60 p-4.5 text-small">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent-700 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-primary-950">
                {socialCopy.adultNoticeTitle}
              </p>
              <p className="text-xs text-primary-700 leading-relaxed">
                {socialCopy.adultNoticeDescription}
              </p>
              <a
                href={`/de/${locale}/trial`}
                className="mt-1 inline-flex items-center gap-1 text-xs font-black text-accent-800 underline-offset-4 hover:underline"
              >
                {socialCopy.adultNoticeAction}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-border text-small text-muted-foreground">
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
  );
}
