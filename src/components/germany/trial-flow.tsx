'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, User, Users, GraduationCap, Target, Speech, BookOpen, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getMarketConfig } from '@/config/markets';
import { LANGUAGE_BADGES } from './language-icons';
import { PhoneInput } from '@/components/ui/phone-input';
import { type CountryCode, internationalPhone, localPhone } from '@/lib/phone';

type Step = 1 | 2 | 3 | 4 | 'contactReady';

const VALID_SUBJECTS = ['german', 'english', 'arabic', 'french'] as const;
type ValidSubject = typeof VALID_SUBJECTS[number];

function TrialFlowContent() {
  const t = useTranslations('trialFlow');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject')?.toLowerCase() as ValidSubject | undefined;
  const initialSubject = subjectParam && VALID_SUBJECTS.includes(subjectParam) ? subjectParam : '';

  const [step, setStep] = React.useState<Step>(initialSubject ? 2 : 1);
  const [formData, setFormData] = React.useState({
    subject: initialSubject,
    learner: '',
    goal: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [phoneCountry, setPhoneCountry] = React.useState<CountryCode>('DE');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const updateForm = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const validateField = (field: string, value: string, country = phoneCountry): string => {
    switch (field) {
      case 'firstName': {
        const trimmed = value.trim();
        if (!trimmed || trimmed.length < 2) {
          return t('contact.errors.firstName');
        }
        return '';
      }
      case 'lastName': {
        const trimmed = value.trim();
        if (!trimmed || trimmed.length < 2) {
          return t('contact.errors.lastName');
        }
        return '';
      }
      case 'email': {
        const trimmed = value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmed || !emailRegex.test(trimmed)) {
          return t('contact.errors.email');
        }
        return '';
      }
      case 'phone': {
        const trimmed = value.trim();
        if (!trimmed || !localPhone(trimmed, country)) {
          return t('contact.errors.phone');
        }
        return '';
      }
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    updateForm(field, value);
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleCountryChange = (country: CountryCode) => {
    setPhoneCountry(country);
    if (touched.phone) {
      const error = validateField('phone', formData.phone, country);
      setErrors((prev) => ({ ...prev, phone: error }));
    }
  };

  const handleStep4Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone, phoneCountry),
    };

    const activeErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, val]) => Boolean(val))
    );

    setTouched({ firstName: true, lastName: true, email: true, phone: true });
    setErrors(activeErrors);

    if (Object.keys(activeErrors).length === 0) {
      setStep('contactReady');
    }
  };

  const nextStep = () => {
    if (step === 1 && formData.subject) setStep(2);
    else if (step === 2 && formData.learner) setStep(3);
    else if (step === 3 && formData.goal) setStep(4);
    else if (step === 4) handleStep4Submit({ preventDefault: () => {} } as React.FormEvent);
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  };

  // Human-readable labels for WhatsApp summary and display
  const getSubjectLabel = (id: string) => {
    try {
      return t(`subjects.${id}`);
    } catch {
      return id;
    }
  };

  const getLearnerLabel = (id: string) => {
    switch (id) {
      case 'myself': return t('learner.myself.title');
      case 'child': return t('learner.child.title');
      default: return id;
    }
  };

  const getGoalLabel = (id: string) => {
    switch (id) {
      case 'grades': return t('goals.grades.title');
      case 'speaking': return t('goals.speaking.title');
      case 'exam': return t('goals.exam.title');
      case 'basics': return t('goals.basics.title');
      default: return id;
    }
  };

  const constructWhatsAppMessage = () => {
    const parsed = localPhone(formData.phone, phoneCountry);
    const formattedPhone = parsed ? parsed.phoneE164 : formData.phone;
    const lines = [
      t('contactReady.whatsAppGreeting'),
      `- ${t('subjectLabel')}: ${getSubjectLabel(formData.subject)}`,
      `- ${t('learnerLabel')}: ${getLearnerLabel(formData.learner)}`,
      `- ${t('goalLabel')}: ${getGoalLabel(formData.goal)}`,
      `- ${t('nameLabel')}: ${formData.firstName} ${formData.lastName}`,
    ];
    if (formattedPhone) {
      lines.push(`- ${t('phoneLabel')}: ${formattedPhone}`);
    }
    return lines.join('\n');
  };

  const currentStepNumber = typeof step === 'number' ? step : 4;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-primary-900/5 sm:p-10">
      {step !== 'contactReady' && (
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <BackIcon className="h-4 w-4" />
                <span>{t('back')}</span>
              </button>
            ) : (
              <div />
            )}
            <div className="text-sm font-bold text-primary-400">
              {currentStepNumber} / 4
            </div>
          </div>
          
          <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-primary-100">
            <div 
              className="h-full bg-accent-500 transition-all duration-300 ease-out"
              style={{ width: `${currentStepNumber * 25}%` }}
            />
          </div>
        </div>
      )}

      <div className="min-h-[380px]">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
                {t('step1Title')}
              </h2>
              <p className="text-sm text-primary-500">
                {t('subheadline', { fallback: 'Select the subject for your free trial session.' })}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { id: 'german' as const, badge: LANGUAGE_BADGES.german, label: t('subjects.german') },
                { id: 'english' as const, badge: LANGUAGE_BADGES.english, label: t('subjects.english') },
                { id: 'arabic' as const, badge: LANGUAGE_BADGES.arabic, label: t('subjects.arabic') },
                { id: 'french' as const, badge: LANGUAGE_BADGES.french, label: t('subjects.french') },
              ].map((subject) => {
                const Badge = subject.badge;
                const isSelected = formData.subject === subject.id;
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => updateForm('subject', subject.id)}
                    className={cn(
                      "flex min-h-[44px] items-center gap-4 rounded-xl border-2 p-3.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isSelected ? "border-accent-500 bg-accent-50/70 ring-1 ring-accent-500 shadow-sm" : "border-primary-100 bg-white hover:border-primary-300 hover:bg-primary-50/50"
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg shrink-0">
                      <Badge className="h-9 w-9 drop-shadow-xs" />
                    </div>
                    <span className="font-bold text-primary-900 text-base">{subject.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Explicit Continue Button */}
            <div className="pt-4 border-t border-primary-100">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.subject}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-accent-600 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-700 disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>{t('continue')}</span>
                <NextIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Learner Context */}
        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
                {t('step2Title')}
              </h2>
              <p className="text-sm text-primary-500">
                {t('subjectLabel')}: <strong className="text-primary-900">{getSubjectLabel(formData.subject)}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'myself', icon: User, label: t('learner.myself.title'), desc: t('learner.myself.desc') },
                { id: 'child', icon: Users, label: t('learner.child.title'), desc: t('learner.child.desc') },
              ].map((learner) => {
                const Icon = learner.icon;
                const isSelected = formData.learner === learner.id;
                return (
                  <button
                    key={learner.id}
                    type="button"
                    onClick={() => updateForm('learner', learner.id)}
                    className={cn(
                      "flex min-h-[44px] items-center gap-4 rounded-xl border-2 p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isSelected ? "border-accent-500 bg-accent-50 ring-1 ring-accent-500 shadow-sm" : "border-primary-100 bg-white hover:border-primary-300 hover:bg-primary-50/50"
                    )}
                  >
                    <div className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-lg transition-colors shrink-0",
                      isSelected ? "bg-accent-500 text-white" : "bg-primary-100 text-primary-600"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-primary-900 text-base">{learner.label}</span>
                      <span className="text-xs text-primary-500">{learner.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explicit Continue Button */}
            <div className="pt-4 border-t border-primary-100">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.learner}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-accent-600 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-700 disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>{t('continue')}</span>
                <NextIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Learning Goal */}
        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
              {t('step3Title')}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { id: 'grades', icon: GraduationCap, label: t('goals.grades.title'), desc: t('goals.grades.desc') },
                { id: 'speaking', icon: Speech, label: t('goals.speaking.title'), desc: t('goals.speaking.desc') },
                { id: 'exam', icon: Target, label: t('goals.exam.title'), desc: t('goals.exam.desc') },
                { id: 'basics', icon: BookOpen, label: t('goals.basics.title'), desc: t('goals.basics.desc') },
              ].map((goal) => {
                const Icon = goal.icon;
                const isSelected = formData.goal === goal.id;
                return (
                  <button
                    key={goal.id}
                    type="button"
                    onClick={() => updateForm('goal', goal.id)}
                    className={cn(
                      "flex min-h-[44px] flex-col gap-3 rounded-xl border-2 p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isSelected ? "border-accent-500 bg-accent-50 ring-1 ring-accent-500 shadow-sm" : "border-primary-100 bg-white hover:border-primary-300 hover:bg-primary-50/50"
                    )}
                  >
                    <div className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                      isSelected ? "bg-accent-500 text-white" : "bg-primary-100 text-primary-600"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-primary-900 text-sm">{goal.label}</span>
                      <span className="text-xs text-primary-500 leading-tight">{goal.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explicit Continue Button */}
            <div className="pt-4 border-t border-primary-100">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.goal}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-accent-600 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-700 disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>{t('continue')}</span>
                <NextIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Information */}
        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
                {t('step4Title')}
              </h2>
              <p className="text-sm text-primary-500">
                {t('step4Description')}
              </p>
            </div>

            <form 
              onSubmit={handleStep4Submit}
              noValidate
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="trial-first-name" className="text-xs font-bold text-primary-800">
                    {t('contact.firstName')} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    id="trial-first-name"
                    required
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                    onBlur={() => handleBlur('firstName')}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'trial-first-name-error' : undefined}
                    className={cn(
                      "rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors",
                      errors.firstName 
                        ? "border-rose-500 ring-1 ring-rose-500/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20" 
                        : "border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    )}
                  />
                  {errors.firstName && (
                    <p id="trial-first-name-error" role="alert" className="text-xs font-semibold text-rose-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="trial-last-name" className="text-xs font-bold text-primary-800">
                    {t('contact.lastName')} <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    id="trial-last-name"
                    required
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                    onBlur={() => handleBlur('lastName')}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'trial-last-name-error' : undefined}
                    className={cn(
                      "rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors",
                      errors.lastName 
                        ? "border-rose-500 ring-1 ring-rose-500/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20" 
                        : "border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    )}
                  />
                  {errors.lastName && (
                    <p id="trial-last-name-error" role="alert" className="text-xs font-semibold text-rose-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="trial-email" className="text-xs font-bold text-primary-800">
                  {t('contact.email')} <span className="text-rose-500">*</span>
                </label>
                <input 
                  id="trial-email"
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'trial-email-error' : undefined}
                  className={cn(
                    "rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors",
                    errors.email 
                      ? "border-rose-500 ring-1 ring-rose-500/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20" 
                      : "border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                  )}
                />
                {errors.email && (
                  <p id="trial-email-error" role="alert" className="text-xs font-semibold text-rose-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="trial-phone-input" className="text-xs font-bold text-primary-800">
                  {t('contact.phone')} <span className="text-rose-500">*</span>
                </label>
                <PhoneInput
                  id="trial-phone-input"
                  label={t('contact.phone')}
                  locale={locale as 'en' | 'ar' | 'de'}
                  country={phoneCountry}
                  value={formData.phone}
                  onCountryChange={handleCountryChange}
                  onChange={(val) => handleFieldChange('phone', val)}
                  onBlur={() => handleBlur('phone')}
                  error={errors.phone}
                  required
                  className="rounded-xl border border-primary-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-white"
                />
              </div>

              <p className="text-xs text-primary-500 mt-1">
                {t('contact.privacy')}
              </p>

              <button
                type="submit"
                className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-xl bg-accent-600 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-accent-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        )}

        {/* Final Action: Truthful WhatsApp Coordination */}
        {step === 'contactReady' && (
          <div className="flex flex-col items-center justify-center gap-6 py-6 text-center animate-in fade-in duration-300">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-8 ring-accent-100">
              <MessageCircle className="h-9 w-9" />
            </div>

            <div className="flex flex-col gap-2 max-w-md">
              <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
                {t('contactReady.title')}
              </h2>
              <p className="text-sm text-primary-600 leading-relaxed">
                {t('contactReady.description')}
              </p>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-3">
              <a 
                href={`https://wa.me/${getMarketConfig('germany').contact.whatsapp}?text=${encodeURIComponent(constructWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-emerald-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t('contactReady.whatsappButton')}</span>
              </a>

              <a 
                href={`/de/${locale}`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary-100 px-6 py-2.5 text-sm font-bold text-primary-800 transition-colors hover:bg-primary-200"
              >
                {t('contactReady.backHome')}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TrialFlow() {
  return (
    <React.Suspense fallback={
      <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-500 border-t-transparent" />
      </div>
    }>
      <TrialFlowContent />
    </React.Suspense>
  );
}
