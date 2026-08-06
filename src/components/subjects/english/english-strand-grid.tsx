import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
} from 'lucide-react';

import {
  EnglishStrandIcon,
} from './english-strand-icon';

import {
  routePath,
} from '@/config/routes';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  EnglishStrandSummary,
} from '@/types/english-overview';

interface EnglishStrandGridProps {
  locale: SiteLocale;
  strands:
    EnglishStrandSummary[];
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    openAction: string;
    pendingLabel: string;
    availableLabel: string;
    gradeRangeLabel: string;
  };
}

export function EnglishStrandGrid({
  locale,
  strands,
  copy,
}: EnglishStrandGridProps) {
  return (
    <section
      id="english-strands"
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
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {strands.map(
            (strand) =>
              strand.status ===
              'approved' ? (
                <Link
                  key={strand.slug}
                  href={
                    routePath.englishStrand(
                      locale,
                      strand.slug
                    )
                  }
                  className="
                    group
                    flex
                    min-h-[17rem]
                    flex-col
                    rounded-[1.25rem]
                    border
                    border-[#C9DDEA]
                    bg-white
                    p-6
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
                  <CardHeader
                    strand={strand}
                    statusLabel={
                      copy.availableLabel
                    }
                    active
                  />

                  <h3
                    className="
                      mt-5
                      text-[1.15rem]
                      font-black
                      leading-7
                      text-[#0B1F3A]
                    "
                  >
                    {strand.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-small
                      leading-7
                      text-[#475569]
                    "
                  >
                    {strand.description}
                  </p>

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
                      className="h-4 w-4 rtl:-scale-x-100"
                    />
                  </span>
                </Link>
              ) : (
                <article
                  key={strand.slug}
                  className="
                    flex
                    min-h-[17rem]
                    flex-col
                    rounded-[1.25rem]
                    border
                    border-[#E2E8F0]
                    bg-white/70
                    p-6
                  "
                >
                  <CardHeader
                    strand={strand}
                    statusLabel={
                      copy.pendingLabel
                    }
                    active={false}
                  />

                  <h3
                    className="
                      mt-5
                      text-[1.15rem]
                      font-black
                      leading-7
                      text-[#334155]
                    "
                  >
                    {strand.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-small
                      leading-7
                      text-[#64748B]
                    "
                  >
                    {strand.description}
                  </p>

                  <span
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-6
                      text-caption
                      font-bold
                      text-[#64748B]
                    "
                  >
                    <Clock3
                      aria-hidden="true"
                      className="h-4 w-4"
                    />

                    {copy.pendingLabel}
                  </span>
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
}

function CardHeader({
  strand,
  statusLabel,
  active,
}: {
  strand: EnglishStrandSummary;
  statusLabel: string;
  active: boolean;
}) {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-4
      "
    >
      <span
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          ${
            active
              ? 'bg-[#ECFEFD] text-[#108686] ring-1 ring-[#CFFAF8]'
              : 'bg-[#F1F5F9] text-[#64748B]'
          }
        `}
      >
        <EnglishStrandIcon
          iconKey={strand.iconKey}
          className="h-6 w-6"
        />
      </span>

      <span
        className={`
          rounded-full
          px-3
          py-1.5
          text-[0.7rem]
          font-black
          ${
            active
              ? 'bg-[#ECFEFD] text-[#126A6A]'
              : 'bg-[#F1F5F9] text-[#64748B]'
          }
        `}
      >
        {statusLabel}
      </span>
    </div>
  );
}
