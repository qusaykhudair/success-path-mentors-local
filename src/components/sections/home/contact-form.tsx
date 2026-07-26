'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { submitLead } from '@/app/[locale]/actions/submit-lead';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const inputStyles =
  'w-full rounded-md border border-primary-200 bg-surface px-4 py-3 text-body text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none';

const labelStyles = 'mb-2 block text-small font-semibold text-primary';
const errorStyles = 'mt-1 text-caption text-red-600';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    const result = await submitLead(values);
    if (result.success) {
      setSubmitted(true);
      return;
    }
    if (result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        setError(field as keyof ContactFormValues, { message });
      }
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-card border border-primary-100 bg-primary-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-600" aria-hidden />
        <p className="mt-4 text-h4 text-primary">Thank you — we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="parentName" className={labelStyles}>{t('parentName')}</label>
        <input id="parentName" className={inputStyles} {...register('parentName')} />
        {errors.parentName && <p className={errorStyles}>{errors.parentName.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelStyles}>{t('whatsapp')}</label>
        <input id="whatsapp" type="tel" className={inputStyles} {...register('whatsapp')} />
        {errors.whatsapp && <p className={errorStyles}>{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>{t('email')}</label>
        <input id="email" type="email" className={inputStyles} {...register('email')} />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="childAge" className={labelStyles}>{t('childAge')}</label>
        <input id="childAge" type="number" min={3} max={19} className={inputStyles} {...register('childAge')} />
        {errors.childAge && <p className={errorStyles}>{errors.childAge.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className={labelStyles}>{t('country')}</label>
        <select id="country" className={cn(inputStyles, 'bg-surface')} {...register('country')}>
          <option value="">—</option>
          {t.raw('countryOptions').map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.country && <p className={errorStyles}>{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="state" className={labelStyles}>{t('state')}</label>
        <input id="state" className={inputStyles} {...register('state')} />
        {errors.state && <p className={errorStyles}>{errors.state.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className={labelStyles}>{t('subject')}</label>
        <select id="subject" className={cn(inputStyles, 'bg-surface')} {...register('subject')}>
          <option value="">—</option>
          {t.raw('subjectOptions').map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.subject && <p className={errorStyles}>{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="teachingLanguage" className={labelStyles}>{t('teachingLanguage')}</label>
        <select id="teachingLanguage" className={cn(inputStyles, 'bg-surface')} {...register('teachingLanguage')}>
          <option value="">—</option>
          {t.raw('teachingLanguageOptions').map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.teachingLanguage && <p className={errorStyles}>{errors.teachingLanguage.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="notes" className={labelStyles}>{t('notes')}</label>
        <textarea id="notes" rows={4} className={inputStyles} {...register('notes')} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? '…' : t('submit')}
        </Button>
      </div>
    </form>
  );
}
