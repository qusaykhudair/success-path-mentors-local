'use client';
import { Check } from 'lucide-react';
import type { EnrollmentPayload, EnrollmentCardCopy } from './enrollment-types';
interface Props {
  step: number;
  copy: EnrollmentCardCopy;
  data: EnrollmentPayload;
  errors: Record<string, string>;
  update: <K extends keyof EnrollmentPayload>(key: K, value: EnrollmentPayload[K]) => void;
}
export default function EnrollmentAdvancedFields({ step, copy, data, errors, update }: Props) {
  function toggleSubject(value: string) {
    update('subjects', data.subjects.includes(value) ? data.subjects.filter(s => s !== value) : [...data.subjects, value]);
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

  return <>              {/* ---------- STEP 2: Student & location ---------- */}
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

</>;
}
