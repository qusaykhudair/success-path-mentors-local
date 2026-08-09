'use client';

import {
  GraduationCap,
  Route,
} from 'lucide-react';
import {
  useState,
} from 'react';

import {
  MathGradeBrowser,
} from './math-grade-browser';
import {
  MathPathwayGrid,
} from './math-pathway-grid';

import type {
  SiteLocale,
} from '@/config/site';
import type {
  MathCurriculumOverview,
  MathExplorerCopy,
} from '@/types/math-overview';

interface MathCurriculumExplorerProps {
  overview:
    MathCurriculumOverview;
  copy:
    MathExplorerCopy;
  bookingHref: string;
  locale: SiteLocale;
}

export function MathCurriculumExplorer({
  overview,
  copy,
  bookingHref,
  locale,
}: MathCurriculumExplorerProps) {
  const [
    mode,
    setMode,
  ] = useState<
    'pathways' | 'grades'
  >('pathways');

  const [
    selectedGrade,
    setSelectedGrade,
  ] = useState(
    overview.grades[0]
      ?.grade ?? 'G2'
  );

  return (
    <section
      id="math-curriculum"
      className="
        scroll-mt-24
        bg-[#F8FAFC]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[82rem]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-caption
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#108686]
              "
            >
              {copy.sectionEyebrow}
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              {copy.sectionTitle}
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-[#475569]
              "
            >
              {
                copy.sectionDescription
              }
            </p>
          </div>

          <div
            role="group"
            aria-label={
              mode === 'pathways'
                ? copy.pathwaysAriaLabel
                : copy.gradesAriaLabel
            }
            className="
              inline-flex
              w-full
              max-w-md
              rounded-2xl
              border
              border-[#C9DDEA]
              bg-white
              p-1.5
              shadow-[0_8px_24px_rgba(7,20,38,0.06)]
              lg:w-auto
            "
          >
            <ModeButton
              active={
                mode === 'pathways'
              }
              label={
                copy.pathwaysTab
              }
              icon={Route}
              onClick={() =>
                setMode('pathways')
              }
            />

            <ModeButton
              active={
                mode === 'grades'
              }
              label={copy.gradesTab}
              icon={GraduationCap}
              onClick={() =>
                setMode('grades')
              }
            />
          </div>
        </div>

        <div
          className="mt-10"
          aria-live="polite"
        >
          {mode ===
          'pathways' ? (
            <MathPathwayGrid
              pathways={
                overview.pathways
              }
              locale={locale}
              copy={copy}
            />
          ) : (
            <MathGradeBrowser
              grades={
                overview.grades
              }
              selectedGrade={
                selectedGrade
              }
              onSelect={
                setSelectedGrade
              }
              copy={copy}
              bookingHref={
                bookingHref
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ModeButton({
  active,
  label,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: typeof Route;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`
        inline-flex
        min-h-11
        flex-1
        items-center
        justify-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        text-small
        font-bold
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#16C7C7]
        focus-visible:ring-offset-2
        motion-reduce:transition-none
        ${
          active
            ? `
              bg-[#0B1F3A]
              text-white
            `
            : `
              text-[#475569]
              hover:bg-[#ECFEFD]
              hover:text-[#0B1F3A]
            `
        }
      `}
    >
      <Icon
        aria-hidden="true"
        className="h-4 w-4"
        strokeWidth={1.8}
      />

      {label}
    </button>
  );
}
