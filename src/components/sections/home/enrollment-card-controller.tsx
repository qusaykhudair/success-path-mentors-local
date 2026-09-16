'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

import dynamic from 'next/dynamic';
import type { EnrollmentPayload, EnrollmentCardProps } from './enrollment-types';
const AdvancedFields = dynamic(() => import('./enrollment-advanced-fields'));

const EMPTY: EnrollmentPayload = {
  parentName: '',
  whatsapp: '',
  email: '',
  studentAge: null,
  country: '',
  province: '',
  subjects: [],
  teachingLanguage: '',
  notes: '',
};

const TOTAL_STEPS = 3;

export function EnrollmentCardController({ copy, locale = 'en' }: EnrollmentCardProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<EnrollmentPayload>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  function update<K extends keyof EnrollmentPayload>(key: K, value: EnrollmentPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  }

  function validateStep(current: number): boolean {
    const e: Record<string, string> = {};
    if (current === 1) {
      if (!data.parentName.trim()) e.parentName = copy.errors.required;
      if (!data.whatsapp.trim()) e.whatsapp = copy.errors.required;
      if (!data.email.trim()) e.email = copy.errors.required;
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = copy.errors.email;
    }
    if (current === 2) {
      if (data.studentAge === null || data.studentAge < 3 || data.studentAge > 99)
        e.studentAge = copy.errors.age;
      if (!data.country) e.country = copy.errors.required;
    }
    if (current === 3) {
      if (data.subjects.length === 0) e.subjects = copy.errors.subjects;
      if (!data.teachingLanguage) e.teachingLanguage = copy.errors.required;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    if (status === 'submitting') return;
    if (!validateStep(3)) return;

    setStatus('submitting');

    // Safe conversion handoff to registration page:
    // Missing legal and academic requirements (guardian relationship, student name,
    // curriculum, schedule preferences, privacy consent) must not be fabricated.
    // Transition cleanly to /register with zero PII in query parameters.
    const targetUrl = `/${locale}/register`;
    try {
      router.push(targetUrl);
    } catch {
      if (typeof window !== 'undefined') {
        window.location.assign(targetUrl);
      }
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-primary-50/50 px-3.5 py-2.5 text-small text-primary placeholder:text-ink-secondary/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent';

  function fieldError(key: string) {
    return errors[key] ? (
      <p className="mt-1 text-caption text-red-600" role="alert">
        {errors[key]}
      </p>
    ) : null;
  }

  return (
    <div className="p-6">
      {/* Progress */}
              <div className="mb-6">
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-primary-100"
                  role="progressbar"
                  aria-label={copy.stepOf.replace('#CURRENT#', String(step)).replace('#TOTAL#', String(TOTAL_STEPS))}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-500 ease-out motion-reduce:transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>
               <p className="mt-2 text-caption font-medium text-ink-secondary">
  {copy.stepOf.replace('#CURRENT#', String(step)).replace('#TOTAL#', String(TOTAL_STEPS))}
</p>
              </div>

              {/* ---------- STEP 1: Contact ---------- */}
              {step === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.parentName}</label>
                    <input
                      type="text"
                      value={data.parentName}
                      onChange={(e) => update('parentName', e.target.value)}
                      placeholder={copy.placeholders.parentName}
                      className={`${inputBase} ${errors.parentName ? 'border-red-400' : 'border-primary-100'}`}
                    />
                    {fieldError('parentName')}
                  </div>
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.whatsapp}</label>
                    <input
                      type="tel"
                      inputMode="tel"
                      dir="ltr"
                      value={data.whatsapp}
                      onChange={(e) => update('whatsapp', e.target.value)}
                      placeholder={copy.placeholders.whatsapp}
                      className={`${inputBase} ${errors.whatsapp ? 'border-red-400' : 'border-primary-100'}`}
                    />
                    {fieldError('whatsapp')}
                  </div>
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.email}</label>
                    <input
                      type="email"
                      inputMode="email"
                      dir="ltr"
                      value={data.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder={copy.placeholders.email}
                      className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-primary-100'}`}
                    />
                    {fieldError('email')}
                  </div>
                </div>
              )}

              {step > 1 && <AdvancedFields step={step} copy={copy} data={data} errors={errors} update={update} />}

              {status === 'error' && (
                <p className="mt-3 text-caption text-red-600" role="alert">
                  {copy.errors.required}
                </p>
              )}

              {/* Navigation */}
              <div className="mt-6 flex items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-primary-200 px-4 py-3 text-small font-semibold text-primary transition-colors duration-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  >
                    <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" strokeWidth={2.5} aria-hidden="true" />
                    {copy.back}
                  </button>
                )}
                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={next}
                    className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 px-4 py-3 text-small font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-accent-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  >
                    {copy.next}
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={2.5} aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'submitting'}
                    className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 px-4 py-3 text-small font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-accent-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} aria-hidden="true" />
                        {copy.submitting}
                      </>
                    ) : (
                      copy.submit
                    )}
                  </button>
                )}
              </div>

              <p className="mt-4 text-center text-caption text-ink-secondary">{copy.reassurance}</p>
    </div>
  );
}