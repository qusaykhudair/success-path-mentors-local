import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Layers3,
} from 'lucide-react';

import {
  MathPathwayIcon,
} from './math-pathway-icon';

import type {
  MathExplorerCopy,
  MathGradeSummary,
  MathTopicSummary,
} from '@/types/math-overview';

interface MathGradeBrowserProps {
  grades:
    MathGradeSummary[];
  selectedGrade:
    MathGradeSummary['grade'];
  onSelect: (
    grade:
      MathGradeSummary['grade']
  ) => void;
  copy:
    MathExplorerCopy;
  bookingHref: string;
}

export function MathGradeBrowser({
  grades,
  selectedGrade,
  onSelect,
  copy,
  bookingHref,
}: MathGradeBrowserProps) {
  const selected =
    grades.find(
      (grade) =>
        grade.grade ===
        selectedGrade
    ) ?? grades[0];

  if (!selected) {
    return null;
  }

  return (
    <div>
      <div
        className="
          -mx-4
          overflow-x-auto
          px-4
          pb-3
          sm:mx-0
          sm:px-0
        "
      >
        <div
          className="
            flex
            min-w-max
            gap-2
          "
          role="list"
          aria-label={
            copy.gradesAriaLabel
          }
        >
          {grades.map(
            (grade) => (
              <button
                key={grade.grade}
                type="button"
                aria-pressed={
                  selectedGrade ===
                  grade.grade
                }
                onClick={() =>
                  onSelect(
                    grade.grade
                  )
                }
                className={`
                  min-h-11
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-small
                  font-bold
                  transition-[background-color,border-color,color,box-shadow]
                  duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                  ${
                    selectedGrade ===
                    grade.grade
                      ? `
                        border-[#0B1F3A]
                        bg-[#0B1F3A]
                        text-white
                        shadow-[0_8px_22px_rgba(7,20,38,0.13)]
                      `
                      : `
                        border-[#DCE5EC]
                        bg-white
                        text-[#334155]
                        hover:border-[#67E8E5]
                        hover:bg-[#ECFEFD]
                        hover:text-[#0B1F3A]
                      `
                  }
                `}
              >
                {grade.shortLabel}
              </button>
            )
          )}
        </div>
      </div>

      <section
        aria-labelledby="selected-grade-title"
        className="
          mt-5
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[#DCE5EC]
          bg-white
          shadow-[0_16px_44px_rgba(7,20,38,0.07)]
        "
      >
        <div
          className="
            border-b
            border-[#DCE5EC]
            bg-gradient-to-br
            from-[#F1F6FA]
            via-white
            to-[#ECFEFD]
            p-6
            sm:p-8
          "
        >
          <p
            className="
              text-caption
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#108686]
            "
          >
            {copy.selectedGradeLabel}
          </p>

          <div
            className="
              mt-3
              grid
              gap-6
              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-center
            "
          >
            <div>
              <h3
                id="selected-grade-title"
                className="
                  text-h2
                  font-black
                  text-[#0B1F3A]
                "
              >
                {selected.label}
              </h3>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-body
                  leading-8
                  text-[#475569]
                "
              >
                {
                  copy.gradeOverviewDescription
                }
              </p>
            </div>

            <div role="list"
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              <GradeMetaPill
                icon={BookOpen}
                value={
                  selected.topicCount
                }
                label={
                  copy.gradeTopicsLabel
                }
              />

              <GradeMetaPill
                icon={Layers3}
                value={
                  selected.pathwayCount
                }
                label={
                  copy.learningAreasLabel
                }
              />
            </div>
          </div>
        </div>

        <div
          className="
            p-5
            sm:p-7
          "
        >
          <div
            className="
              grid
              gap-4
              lg:grid-cols-2
            "
          >
            {selected.pathways.map(
              (pathway) => (
                <article
                  key={pathway.slug}
                  className="
                    rounded-2xl
                    border
                    border-[#DCE5EC]
                    bg-[#F8FAFC]
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#ECFEFD]
                          text-[#108686]
                          ring-1
                          ring-[#CFFAF8]
                        "
                      >
                        <MathPathwayIcon
                          iconKey={
                            pathway.iconKey
                          }
                          className="h-5 w-5"
                        />
                      </span>

                      <h4
                        className="
                          text-[1rem]
                          font-black
                          text-[#0B1F3A]
                        "
                      >
                        {pathway.title}
                      </h4>
                    </div>

                    <span
                      className="
                        shrink-0
                        rounded-full
                        bg-[#ECFEFD]
                        px-2.5
                        py-1
                        text-[0.72rem]
                        font-bold
                        text-[#126A6A]
                      "
                    >
                      {
                        pathway.topicCount
                      }
                      {' '}
                      {
                        copy.topicsInGradeLabel
                      }
                    </span>
                  </div>

                  <ul
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {pathway.topics.map(
                      (topic) => (
                        <GradeTopicPill
                          key={topic.id}
                          topic={topic}
                          copy={copy}
                        />
                      )
                    )}
                  </ul>
                </article>
              )
            )}
          </div>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-[#CFFAF8]
              bg-[#ECFEFD]
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-small
                leading-7
                text-[#126A6A]
              "
            >
              {copy.gradeOverviewDescription}
            </p>

            <Link
              href={bookingHref}
              className="
                group
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0B1F3A]
                px-6
                py-3
                text-small
                font-black
                text-white
                transition-[background-color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#24475F]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#16C7C7]
                focus-visible:ring-offset-2
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              {copy.bookTrialLabel}

              <ArrowRight
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-0.5
                  rtl:-scale-x-100
                  rtl:group-hover:-translate-x-0.5
                  motion-reduce:transition-none
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function GradeTopicPill({
  topic,
  copy,
}: {
  topic: MathTopicSummary;
  copy: MathExplorerCopy;
}) {
  const topicOnly =
    topic.status ===
    'topic-only';

  return (
    <li
      title={
        topicOnly
          ? copy.topicOverviewLabel
          : undefined
      }
      className={`
        inline-flex
        max-w-full
        items-center
        rounded-full
        border
        px-3.5
        py-2
        text-[0.82rem]
        font-bold
        leading-5
        ${
          topicOnly
            ? `
              border-amber-200
              bg-amber-50
              text-amber-900
            `
            : `
              border-[#DCE5EC]
              bg-white
              text-[#0B1F3A]
            `
        }
      `}
    >
      {topic.title}
    </li>
  );
}

function GradeMetaPill({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BookOpen;
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#DCE5EC]
        bg-white/85
        px-3.5
        py-2
        text-caption
        font-bold
        text-[#475569]
      "
    >
      <Icon
        aria-hidden="true"
        className="h-3.5 w-3.5 text-[#108686]"
        strokeWidth={1.8}
      />

      <strong
        className="text-[#0B1F3A]"
      >
        {value.toLocaleString()}
      </strong>

      {label}
    </div>
  );
}
