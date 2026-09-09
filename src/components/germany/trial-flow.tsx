'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { ChevronRight, ArrowLeft, User, Users, GraduationCap, Target, Speech, BookOpen, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

type Step = 1 | 2 | 3 | 4 | 'success';

export function TrialFlow() {
  const t = useTranslations('trialFlow');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  
  const [step, setStep] = React.useState<Step>(1);
  const [formData, setFormData] = React.useState({
    subject: '',
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
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep('success');
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-primary-900/5 sm:p-12">
      {step !== 'success' && (
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('back')}
              </button>
            ) : (
              <div /> // placeholder for layout
            )}
            <div className="text-sm font-medium text-primary-400">
              {step} / 4
            </div>
          </div>
          
          <div className="mt-6 flex h-2 w-full overflow-hidden rounded-full bg-primary-50">
            <div 
              className="h-full bg-accent-500 transition-all duration-500 ease-out"
              style={{ width: `${(step as number) * 25}%` }}
            />
          </div>
        </div>
      )}

      <div className="min-h-[400px]">
        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
              {t('step1Title')}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { id: 'german', icon: Speech, label: 'Deutsch' },
                { id: 'english', icon: Speech, label: 'English' },
                { id: 'arabic', icon: BookOpen, label: 'العربية' },
                { id: 'french', icon: Speech, label: 'Français' },
              ].map((subject) => {
                const Icon = subject.icon;
                const isSelected = formData.subject === subject.id;
                return (
                  <button
                    key={subject.id}
                    onClick={() => { updateForm('subject', subject.id); setTimeout(nextStep, 300); }}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all hover:border-accent-200 hover:bg-accent-50",
                      isSelected ? "border-accent-500 bg-accent-50 ring-1 ring-accent-500" : "border-primary-100 bg-white"
                    )}
                  >
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                      isSelected ? "bg-accent-500 text-white" : "bg-primary-50 text-primary-500"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-primary-900">{subject.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
              {t('step2Title')}
            </h2>
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
                    onClick={() => { updateForm('learner', learner.id); setTimeout(nextStep, 300); }}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all hover:border-accent-200 hover:bg-accent-50",
                      isSelected ? "border-accent-500 bg-accent-50 ring-1 ring-accent-500" : "border-primary-100 bg-white"
                    )}
                  >
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg transition-colors shrink-0",
                      isSelected ? "bg-accent-500 text-white" : "bg-primary-50 text-primary-500"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-primary-900">{learner.label}</span>
                      <span className="text-sm text-primary-500">{learner.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                    onClick={() => { updateForm('goal', goal.id); setTimeout(nextStep, 300); }}
                    className={cn(
                      "flex flex-col gap-4 rounded-xl border-2 p-5 text-left transition-all hover:border-accent-200 hover:bg-accent-50",
                      isSelected ? "border-accent-500 bg-accent-50 ring-1 ring-accent-500" : "border-primary-100 bg-white"
                    )}
                  >
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                      isSelected ? "bg-accent-500 text-white" : "bg-primary-50 text-primary-500"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-primary-900">{goal.label}</span>
                      <span className="text-xs text-primary-500 leading-tight">{goal.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
              {t('step4Title')}
            </h2>
            <form 
              onSubmit={(e) => { e.preventDefault(); nextStep(); }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-primary-900">{t('contact.firstName')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => updateForm('firstName', e.target.value)}
                    className="rounded-lg border border-primary-200 px-4 py-2.5 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-primary-900">{t('contact.lastName')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => updateForm('lastName', e.target.value)}
                    className="rounded-lg border border-primary-200 px-4 py-2.5 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-primary-900">{t('contact.email')}</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="rounded-lg border border-primary-200 px-4 py-2.5 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-primary-900">{t('contact.phone')}</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="rounded-lg border border-primary-200 px-4 py-2.5 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <p className="text-xs text-primary-400 mt-2">
                {t('contact.privacy')}
              </p>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-accent-600 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-accent-700 hover:-translate-y-0.5"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="flex h-[400px] flex-col items-center justify-center gap-6 text-center animate-in zoom-in-95 duration-500">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-green-500 ring-8 ring-green-50/50">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-primary-950">
                {locale === 'de' ? 'Vielen Dank!' : locale === 'ar' ? 'شكراً لك!' : 'Thank you!'}
              </h2>
              <p className="max-w-[280px] text-lg text-primary-600">
                {t('contact.success')}
              </p>
            </div>
            <a 
              href={`/de/${locale}`}
              className="mt-4 rounded-xl bg-primary-50 px-6 py-2.5 font-bold text-primary-700 transition-colors hover:bg-primary-100 hover:text-primary-900"
            >
              {t('back', { fallback: 'Go back' })}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
