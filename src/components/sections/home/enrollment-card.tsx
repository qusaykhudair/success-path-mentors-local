'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Loader2, PartyPopper } from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   Data contract — this is the exact shape the frontend will POST.
   Give this to whoever builds the backend endpoint so it matches.
   ──────────────────────────────────────────────────────────── */
export interface EnrollmentPayload {
  parentName: string;
  whatsapp: string;
  email: string;
  studentAge: number | null;
  country: 'usa' | 'canada' | '';
  province: string;
  subjects: string[];        // e.g. ['english','math']
  teachingLanguage: 'english' | 'french' | '';
  notes: string;
}

interface Option {
  value: string;
  label: string;
}

interface EnrollmentCardCopy {
  title: string;
  reassurance: string;
  next: string;
  back: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
 stepOf: string;
  labels: {
    parentName: string;
    whatsapp: string;
    email: string;
    studentAge: string;
    country: string;
    province: string;
    subjects: string;
    teachingLanguage: string;
    notes: string;
  };
  placeholders: {
    parentName: string;
    whatsapp: string;
    email: string;
    studentAge: string;
    province: string;
    notes: string;
  };
  errors: {
    required: string;
    email: string;
    age: string;
    subjects: string;
  };
  countries: Option[];      // [{value:'usa',label:'...'}, {value:'canada',label:'...'}]
  subjectOptions: Option[]; // english/math/science/...
  languages: Option[];      // english / french
}

interface EnrollmentCardProps {
  copy: EnrollmentCardCopy;
}

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

export function EnrollmentCard({ copy }: EnrollmentCardProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<EnrollmentPayload>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const progress = status === 'success' ? 100 : Math.round((step / TOTAL_STEPS) * 100);

  function update<K extends keyof EnrollmentPayload>(key: K, value: EnrollmentPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  }

  function toggleSubject(value: string) {
    setData((d) => ({
      ...d,
      subjects: d.subjects.includes(value)
        ? d.subjects.filter((s) => s !== value)
        : [...d.subjects, value],
    }));
    setErrors((e) => ({ ...e, subjects: '' }));
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
    if (!validateStep(3)) return;
    setStatus('submitting');
    try {
      // ============================================================
      // >>> BACKEND HOOK — replace this block with the real call.
      // The endpoint must accept `data` (EnrollmentPayload) as JSON
      // and persist it into the LMS. Frontend does NOT know the LMS
      // schema; the backend maps this payload onto it.
      //
      // Example (to be implemented by backend):
      //   const res = await fetch('/api/enrollment', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(data),
      //   });
      //   if (!res.ok) throw new Error('Request failed');
      //
      // For now, simulate a successful submit so the UI flow works:
      await new Promise((r) => setTimeout(r, 900));
      // ============================================================
      setStatus('success');
    } catch {
      setStatus('error');
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
    
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 translate-y-4 rounded-[2rem] bg-gradient-to-br from-accent-300 to-primary-300 opacity-40 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-2xl ring-1 ring-primary-900/5">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent-600 px-6 py-4 text-center">
          <p className="text-small font-bold text-white">{copy.title}</p>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <PartyPopper className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-h4 font-bold text-primary">{copy.successTitle}</h2>
              <p className="mt-2 text-small text-ink-secondary">{copy.successBody}</p>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-primary-100"
                  role="progressbar"
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

              {/* ---------- STEP 2: Student & location ---------- */}
              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.studentAge}</label>
                    <input
                      type="number"
                      min={3}
                      max={99}
                      inputMode="numeric"
                      value={data.studentAge ?? ''}
                      onChange={(e) => update('studentAge', e.target.value === '' ? null : Number(e.target.value))}
                      placeholder={copy.placeholders.studentAge}
                      className={`${inputBase} ${errors.studentAge ? 'border-red-400' : 'border-primary-100'}`}
                    />
                    {fieldError('studentAge')}
                  </div>
                  <div>
                    <span className="mb-1.5 block text-caption font-semibold text-primary">{copy.labels.country}</span>
                    <div className="grid grid-cols-2 gap-2">
                      {copy.countries.map((c) => (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => update('country', c.value as EnrollmentPayload['country'])}
                          aria-pressed={data.country === c.value}
                          className={`rounded-xl px-3 py-2.5 text-small font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${
                            data.country === c.value
                              ? 'bg-primary text-white'
                              : 'bg-primary-50 text-primary hover:bg-accent-50 hover:text-accent-700'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                    {fieldError('country')}
                  </div>
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.province}</label>
                    <input
                      type="text"
                      value={data.province}
                      onChange={(e) => update('province', e.target.value)}
                      placeholder={copy.placeholders.province}
                      className={`${inputBase} border-primary-100`}
                    />
                  </div>
                </div>
              )}

              {/* ---------- STEP 3: Subjects & language ---------- */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <span className="mb-1.5 block text-caption font-semibold text-primary">{copy.labels.subjects}</span>
                    <div className="grid grid-cols-2 gap-2">
                      {copy.subjectOptions.map((s) => {
                        const on = data.subjects.includes(s.value);
                        return (
                          <button
                            key={s.value}
                            type="button"
                            onClick={() => toggleSubject(s.value)}
                            aria-pressed={on}
                            className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2 text-caption font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${
                              on ? 'bg-primary text-white' : 'bg-primary-50 text-primary hover:bg-accent-50 hover:text-accent-700'
                            }`}
                          >
                            {on && <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />}
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                    {fieldError('subjects')}
                  </div>
                  <div>
                    <span className="mb-1.5 block text-caption font-semibold text-primary">{copy.labels.teachingLanguage}</span>
                    <div className="grid grid-cols-2 gap-2">
                      {copy.languages.map((l) => (
                        <button
                          key={l.value}
                          type="button"
                          onClick={() => update('teachingLanguage', l.value as EnrollmentPayload['teachingLanguage'])}
                          aria-pressed={data.teachingLanguage === l.value}
                          className={`rounded-xl px-3 py-2.5 text-small font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${
                            data.teachingLanguage === l.value
                              ? 'bg-primary text-white'
                              : 'bg-primary-50 text-primary hover:bg-accent-50 hover:text-accent-700'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                    {fieldError('teachingLanguage')}
                  </div>
                  <div>
                    <label className="mb-1 block text-caption font-semibold text-primary">{copy.labels.notes}</label>
                    <textarea
                      rows={2}
                      value={data.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder={copy.placeholders.notes}
                      className={`${inputBase} resize-none border-primary-100`}
                    />
                  </div>
                </div>
              )}

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
            </>
          )}
        </div>
      </div>
    </div>
  );
}