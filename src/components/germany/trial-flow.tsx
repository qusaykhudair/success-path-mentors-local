'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight, User, Users, GraduationCap, Target, Speech, BookOpen, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buildWhatsAppHref } from '@/lib/whatsapp';

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

  const updateForm = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step === 1 && formData.subject) setStep(2);
    else if (step === 2 && formData.learner) setStep(3);
    else if (step === 3 && formData.goal) setStep(4);
    else if (step === 4) setStep('contactReady');
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
    const lines = [
      t('contactReady.whatsAppGreeting'),
      `- ${t('subjectLabel')}: ${getSubjectLabel(formData.subject)}`,
      `- ${t('learnerLabel')}: ${getLearnerLabel(formData.learner)}`,
      `- ${t('goalLabel')}: ${getGoalLabel(formData.goal)}`,
      `- ${t('nameLabel')}: ${formData.firstName} ${formData.lastName}`,
    ];
    if (formData.phone) {
      lines.push(`- ${t('phoneLabel')}: ${formData.phone}`);
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
                { id: 'german', icon: Speech, label: t('subjects.german') },
                { id: 'english', icon: Speech, label: t('subjects.english') },
                { id: 'arabic', icon: BookOpen, label: t('subjects.arabic') },
                { id: 'french', icon: Speech, label: t('subjects.french') },
              ].map((subject) => {
                const Icon = subject.icon;
                const isSelected = formData.subject === subject.id;
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => updateForm('subject', subject.id)}
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
              onSubmit={(e) => { e.preventDefault(); nextStep(); }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary-800">{t('contact.firstName')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => updateForm('firstName', e.target.value)}
                    className="rounded-xl border border-primary-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary-800">{t('contact.lastName')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => updateForm('lastName', e.target.value)}
                    className="rounded-xl border border-primary-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary-800">{t('contact.email')}</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="rounded-xl border border-primary-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary-800">{t('contact.phone')}</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="rounded-xl border border-primary-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
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
                href={buildWhatsAppHref(constructWhatsAppMessage())}
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
