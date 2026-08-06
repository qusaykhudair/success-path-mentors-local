import Link from 'next/link';
import {
  ArrowRight,
} from 'lucide-react';

import {
  ScienceStrandIcon,
} from '@/components/subjects/science/science-strand-icon';
import {
  routePath,
} from '@/config/routes';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  ScienceStrandSummary,
} from '@/types/science-overview';

interface ScienceStrandGridProps {
  locale: SiteLocale;
  subjectSlug:
    | 'chemistry'
    | 'physics'
    | 'general-science';
  strands: ScienceStrandSummary[];
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    openAction: string;
    availableLabel: string;
    gradeRangeLabel: string;
    topicsLabel: string;
    skillsLabel: string;
  };
}

export function ScienceStrandGrid({
  locale,
  subjectSlug,
  strands,
  copy,
}: ScienceStrandGridProps) {
  return (
    <section
      id={`${subjectSlug}-strands`}
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
            {copy.eyebrow}
          </p>

          <h2
            className="
              mt-3
              text-h2
              font-black
              text-[#0B1F3A]
            "
          >
            {copy.title}
          </h2>

          <p
            className="
              mt-4
              text-body
              leading-8
              text-[#475569]
            "
          >
            {copy.description}
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {strands.map(
            (strand) => (
              <Link
                key={strand.slug}
                href={
                  routePath.scienceStrand(
                    locale,
                    subjectSlug,
                    strand.slug
                  )
                }
                className="
                  group
                  flex
                  min-h-[18rem]
                  flex-col
                  rounded-[1.25rem]
                  border
                  border-[#C9DDEA]
                  bg-white
                  p-5
                  shadow-[0_8px_28px_rgba(7,20,38,0.06)]
                  transition-[border-color,box-shadow,transform]
                  hover:-translate-y-1
                  hover:border-[#16C7C7]
                  hover:shadow-[0_18px_42px_rgba(7,20,38,0.10)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#ECFEFD]
                      text-[#108686]
                      ring-1
                      ring-[#CFFAF8]
                    "
                  >
                    <ScienceStrandIcon
                      iconKey={
                        strand.iconKey
                      }
                      className="h-6 w-6"
                    />
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-[#ECFEFD]
                      px-3
                      py-1.5
                      text-[0.68rem]
                      font-black
                      text-[#126A6A]
                    "
                  >
                    {
                      copy.availableLabel
                    }
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-[1.05rem]
                    font-black
                    leading-6
                    text-[#0B1F3A]
                  "
                >
                  {strand.title}
                </h3>

                <p
                  className="
                    mt-3
                    line-clamp-3
                    text-caption
                    leading-6
                    text-[#475569]
                  "
                >
                  {strand.description}
                </p>

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  <span
                    className="
                      rounded-full
                      border
                      border-[#DCE5EC]
                      bg-[#F8FAFC]
                      px-2.5
                      py-1
                      text-[0.67rem]
                      font-bold
                      text-[#475569]
                    "
                  >
                    {copy.gradeRangeLabel}
                    {' '}
                    {
                      formatGradeCoverage(
                        strand.gradeLevels
                      )
                    }
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#DCE5EC]
                      bg-[#F8FAFC]
                      px-2.5
                      py-1
                      text-[0.67rem]
                      font-bold
                      text-[#475569]
                    "
                  >
                    {
                      strand.mainTopicCount
                    }
                    {' '}
                    {copy.topicsLabel}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#DCE5EC]
                      bg-[#F8FAFC]
                      px-2.5
                      py-1
                      text-[0.67rem]
                      font-bold
                      text-[#475569]
                    "
                  >
                    {
                      strand.subtopicCount
                    }
                    {' '}
                    {copy.skillsLabel}
                  </span>
                </div>

                <span
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-6
                    text-small
                    font-black
                    text-[#108686]
                  "
                >
                  {copy.openAction}

                  <ArrowRight
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      rtl:-scale-x-100
                    "
                  />
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function formatGradeCoverage(
  levels: number[]
): string {
  if (levels.length === 0) {
    return '—';
  }

  const groups:
    Array<{
      start: number;
      end: number;
    }> = [];

  levels.forEach((level) => {
    const current =
      groups.at(-1);

    if (
      current &&
      level === current.end + 1
    ) {
      current.end = level;
      return;
    }

    groups.push({
      start: level,
      end: level,
    });
  });

  return groups
    .map((group) =>
      group.start === group.end
        ? `${group.start}`
        : `${group.start}–${group.end}`
    )
    .join(', ');
}
