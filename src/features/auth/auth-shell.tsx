import Image from 'next/image';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { getAuthCopy } from './auth-copy';
import type { AuthUiLocale } from './auth-contracts';

interface AuthShellProps {
  locale: AuthUiLocale;
  homeHref?: string;
  children: ReactNode;
}

export function AuthShell({ locale, homeHref, children }: AuthShellProps) {
  const copy = getAuthCopy(locale);
  const isRtl = locale === 'ar';
  const BackIcon = isRtl ? ChevronRight : ChevronLeft;

  return (
    <section
      data-auth-page
      className="relative isolate overflow-hidden bg-surface-sunken px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[calc(100vh-5rem)] lg:px-8 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_12%_16%,rgba(22,199,199,0.18),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(11,31,58,0.12),transparent_34%)]"
      />

      <div className="mx-auto w-full max-w-[1180px]">
        <a
          href={homeHref || `/${locale}`}
          className="mb-5 inline-flex min-h-touch items-center gap-2 rounded-full px-3 text-small font-bold text-primary transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-accent-500 sm:mb-7"
        >
          <BackIcon aria-hidden="true" className="h-4 w-4" />
          {copy.common.backHome}
        </a>

        <div className="grid overflow-hidden rounded-[2rem] border border-border/80 bg-background shadow-[0_28px_90px_rgba(7,20,38,0.14)] lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="relative hidden min-h-[720px] overflow-hidden bg-primary p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
            <div
              aria-hidden="true"
              className="absolute -end-24 -top-28 h-72 w-72 rounded-full border-[54px] border-accent/15"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -start-20 h-64 w-64 rounded-full bg-accent/10 blur-2xl"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-caption font-bold text-accent-200 backdrop-blur">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                {copy.common.secure}
              </div>

              <p className="mt-8 text-small font-bold uppercase tracking-[0.16em] text-accent-300">
                {copy.shell.eyebrow}
              </p>
              <h2 className="mt-4 max-w-lg text-[clamp(2rem,3vw,3.1rem)] font-black leading-[1.15] text-white">
                {copy.shell.title}
              </h2>
              <p className="mt-5 max-w-md text-body leading-8 text-white/72">
                {copy.shell.description}
              </p>

              <ul className="mt-8 space-y-4">
                {copy.shell.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-small font-semibold text-white/90">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Users aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-small font-black text-white">{copy.shell.family}</p>
                    <p className="text-caption text-white/55">{copy.shell.guardianA} · {copy.shell.guardianB}</p>
                  </div>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-success-500 shadow-[0_0_0_5px_rgba(34,197,94,0.12)]" />
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3">
                <GraduationCap aria-hidden="true" className="h-5 w-5 text-accent-300" />
                <p className="text-caption font-bold text-white/75">{copy.shell.students}</p>
                <span className="ms-auto rounded-full bg-accent/15 px-2.5 py-1 text-caption font-black text-accent-200">2</span>
              </div>
            </div>
          </aside>

          <div className="relative p-5 sm:p-8 lg:p-10 xl:p-12">
            <div className="mb-7 flex items-center justify-between gap-4 lg:hidden">
              <Image
                src="/images/logo.png"
                alt="Success Path Mentors"
                width={150}
                height={49}
                className="h-9 w-auto object-contain"
                priority
              />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-caption font-bold text-accent-800">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                {copy.common.secure}
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
