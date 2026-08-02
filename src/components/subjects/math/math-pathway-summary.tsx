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
  MathTopicSummary,
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface MathPathwaySummaryProps {
  pathway:
    PublicMathPathwaySummary;
  copy:
    MathExplorerCopy;
  bookingHref: string;
}

export function MathPathwaySummary({
  pathway,
  copy,
  bookingHref,
}: MathPathwaySummaryProps) {
  return (
    <section
      id="math-pathway-summary"
      aria-labelledby="math-pathway-summary-title"
      className="
        mt-10
        scroll-mt-24
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
          lg:p-10
        "
      >
        <div
          className="
            grid
            gap-7
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-caption
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#108686]
              "
            >
              {
                copy.selectedPathwayLabel
              }
            </p>

            <div
              className="
                mt-4
                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#16C7C7]
                  text-[#071426]
                "
              >
                <MathPathwayIcon
                  iconKey={
                    pathway.iconKey
                  }
                  className="h-7 w-7"
                />
              </span>

              <div className="min-w-0">
                <h3
                  id="math-pathway-summary-title"
                  className="
                    text-h3
                    font-black
                    text-[#0B1F3A]
                  "
                >
                  {pathway.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-3xl
                    text-body
                    leading-8
                    text-[#475569]
                  "
                >
                  {
                    pathway.description
                  }
                </p>

                <dl
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  <SummaryPill
                    icon={BookOpen}
                    value={
                      pathway.topicCount
                    }
                    label={
                      copy.topicsLabel
                    }
                  />

                  <SummaryPill
                    icon={Layers3}
                    value={
                      pathway.stageCount
                    }
                    label={
                      copy.stagesLabel
                    }
                  />

                  <div
                    className="
                      inline-flex
                      items-center
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
                    {
                      copy.gradeRangeLabel
                    }
                    {' '}
                    <strong
                      className="ms-1 text-[#0B1F3A]"
                    >
                      {
                        pathway.gradeRange.min
                      }
                      –
                      {
                        pathway.gradeRange.max
                      }
                    </strong>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <Link
            href={bookingHref}
            className="
              group
              inline-flex
              min-h-12
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
            {
              copy.bookTrialLabel
            }

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

      <div
        className="
          p-5
          sm:p-7
          lg:p-9
        "
      >
        <div className="max-w-4xl">
          <h4
            className="
              text-h3
              font-black
              text-[#0B1F3A]
            "
          >
            {copy.topicsHeading}
          </h4>

          <p
            className="
              mt-3
              text-body
              leading-8
              text-[#475569]
            "
          >
            {
              copy.topicsDescription
            }
          </p>
        </div>

        <div
          className="
            mt-9
            divide-y
            divide-[#DCE5EC]
          "
        >
          {pathway.stages.map(
            (stage) => (
              <article
                key={stage.id}
                className="
                  grid
                  gap-6
                  py-8
                  first:pt-0
                  last:pb-0
                  lg:grid-cols-[12rem_minmax(0,1fr)]
                  lg:gap-9
                "
              >
                <header
                  className="
                    lg:sticky
                    lg:top-24
                    lg:self-start
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                        bg-[#108686]
                        ring-4
                        ring-[#ECFEFD]
                      "
                    />

                    <h5
                      className="
                        text-[1.08rem]
                        font-black
                        text-[#0B1F3A]
                      "
                    >
                      {stage.label}
                    </h5>
                  </div>

                  <p
                    className="
                      mt-2
                      ps-6
                      text-caption
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {
                      stage.grades
                        .map(
                          (grade) =>
                            grade.shortLabel
                        )
                        .join(' · ')
                    }
                  </p>
                </header>

                <div
                  className="
                    grid
                    gap-4
                    md:grid-cols-2
                    2xl:grid-cols-3
                  "
                >
                  {stage.grades.map(
                    (grade) => (
                      <section
                        key={grade.grade}
                        aria-labelledby={
                          `${pathway.slug}-${grade.grade}-topics`
                        }
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
                            gap-3
                          "
                        >
                          <h6
                            id={
                              `${pathway.slug}-${grade.grade}-topics`
                            }
                            className="
                              text-[1rem]
                              font-black
                              text-[#0B1F3A]
                            "
                          >
                            {grade.label}
                          </h6>

                          <span
                            className="
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
                              grade.topicCount
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
                          {grade.topics.map(
                            (topic) => (
                              <TopicPill
                                key={
                                  topic.id
                                }
                                topic={topic}
                                copy={copy}
                              />
                            )
                          )}
                        </ul>
                      </section>
                    )
                  )}
                </div>
              </article>
            )
          )}
        </div>

        <p
          className="
            mt-8
            rounded-xl
            border
            border-[#CFFAF8]
            bg-[#ECFEFD]
            px-4
            py-3
            text-small
            leading-7
            text-[#126A6A]
          "
        >
          {
            copy.sourceTopicNamesNote
          }
        </p>
      </div>
    </section>
  );
}

function TopicPill({
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
        text-start
        text-[0.84rem]
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

function SummaryPill({
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
