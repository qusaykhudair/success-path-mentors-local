'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { buttonVariants } from '@/components/ui/button';
import { PhoneInput } from '@/components/ui/phone-input';
import { defaultPhoneCountry, type CountryCode } from '@/lib/phone';
import { SocialAuthButtons } from './social-auth-buttons';
import { authInputClass, Notice } from './auth-ui';
import type { AuthLocale } from './auth-contracts';

export function SignupMethods({ locale, onExistingForm }: { locale: AuthLocale; onExistingForm: () => void }) {
  const ar = locale === 'ar';
  const [method, setMethod] = useState<'email' | 'whatsapp' | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState<CountryCode>(defaultPhoneCountry);
  const [pending, setPending] = useState(false);
  return <div className="mx-auto w-full max-w-xl">
    <h1 className="text-h2 font-black text-primary-950">{ar ? 'إنشاء حساب جديد' : 'Create your account'}</h1>
    <p className="mt-3 text-small leading-7 text-muted-foreground">{ar ? 'اختر طريقة التسجيل. يبدأ المسار بالتحقق من هويتك، ثم إكمال بيانات حسابك.' : 'Choose a sign-up method. Verify your identity first, then complete your account details.'}</p>
    <SocialAuthButtons locale={locale} onPendingChange={setPending} />
    <div className="mt-3 space-y-3" role="group" aria-label={ar ? 'طريقة إنشاء الحساب' : 'Sign-up method'}>
      <button type="button" disabled={pending} aria-pressed={method === 'email'} onClick={() => setMethod('email')} className={buttonVariants({ variant: method === 'email' ? 'accent' : 'outline', size: 'lg', className: 'w-full gap-3' })}><Mail aria-hidden="true" className="h-5 w-5 shrink-0" />{ar ? 'إنشاء حساب بالبريد الإلكتروني' : 'Sign up with Email'}</button>
      <button type="button" disabled={pending} aria-pressed={method === 'whatsapp'} onClick={() => setMethod('whatsapp')} className={buttonVariants({ variant: method === 'whatsapp' ? 'accent' : 'outline', size: 'lg', className: 'w-full gap-3' })}><FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0" />{ar ? 'إنشاء حساب بواسطة واتساب' : 'Sign up with WhatsApp'}</button>
    </div>
    {method && <section className="mt-6 space-y-4" aria-label={ar ? 'التحقق من بيانات التواصل' : 'Verify your contact'}>
      {method === 'email' ? <div><label htmlFor="signup-email" className="mb-2 block text-small font-bold">{ar ? 'البريد الإلكتروني' : 'Email address'}</label><input id="signup-email" type="email" dir="ltr" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={pending} className={authInputClass} /></div> : <PhoneInput id="signup-whatsapp" label="WhatsApp" locale={locale} country={country} onCountryChange={setCountry} value={phone} onChange={setPhone} disabled={pending} required className={authInputClass} />}
      <Notice>{ar ? 'التحقق قبل إنشاء الحساب غير متاح حاليًا. لم يتم إرسال رمز أو إنشاء حساب. يمكنك استخدام نموذج التسجيل الحالي أدناه.' : 'Verification before account creation is currently unavailable. No code has been sent and no account has been created. You can use the current registration form below.'}</Notice>
      <button type="button" disabled className={buttonVariants({ variant: 'accent', size: 'lg', className: 'w-full gap-3' })}>{method === 'email' ? <Mail aria-hidden="true" className="h-5 w-5" /> : <FaWhatsapp aria-hidden="true" className="h-5 w-5" />}{ar ? 'إرسال رمز التحقق — غير متاح حاليًا' : 'Send verification code — currently unavailable'}</button>
    </section>}
    <div className="mt-8 space-y-4 text-small">
      <button type="button" disabled={pending} onClick={onExistingForm} className="font-bold text-accent-700 underline underline-offset-4">{ar ? 'استخدام نموذج التسجيل الحالي' : 'Use the current registration form'}</button>
      <p>{ar ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}<a href={`/${locale}/login`} className="font-bold text-accent-700 underline underline-offset-4">{ar ? 'تسجيل الدخول' : 'Sign in'}</a></p>
    </div>
  </div>;
}
