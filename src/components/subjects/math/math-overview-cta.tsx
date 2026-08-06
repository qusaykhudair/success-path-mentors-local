import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

import type {
  MathOverviewCtaCopy,
} from '@/types/math-overview';

interface MathOverviewCtaProps {
  copy:
    MathOverviewCtaCopy;
  primaryHref: string;
  secondaryHref: string;
}

export function MathOverviewCta({
  copy,
  primaryHref,
  secondaryHref,
}: MathOverviewCtaProps) {
  return (
    <section
      className="
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            isolate
            overflow-hidden
            rounded-[2rem]
            bg-[#071426]
            px-6
            py-10
            text-white
            shadow-[0_32px_90px_rgba(2,6,23,0.20)]
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -end-24
              -top-32
              -z-10
              h-72
              w-72
              rounded-full
              bg-[#16C7C7]/20
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              -start-24
              -z-10
              h-72
              w-72
              rounded-full
              bg-[#4F89AB]/20
              blur-3xl
            "
          />

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-end
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-caption
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#A4F4F1]
                "
              >
                <Sparkles
                  aria-hidden="true"
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />

                {copy.eyebrow}
              </p>

              <h2
                className="
                  mt-4
                  text-h2
                  font-black
                  text-white
                "
              >
                {copy.title}
              </h2>

              <p
                className="
                  mt-4
                  text-body
                  leading-8
                  text-white/70
                "
              >
                {
                  copy.description
                }
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                lg:flex-col
                xl:flex-row
              "
            >
              <Link
                href={primaryHref}
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#16C7C7]
                  px-7
                  py-4
                  text-small
                  font-bold
                  text-[#071426]
                  transition-[background-color,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#0FA8A8]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#67E8E5]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                {copy.primaryAction}

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

              <Link
                href={secondaryHref}
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-7
                  py-4
                  text-small
                  font-bold
                  text-white
                  transition-[background-color,border-color,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-white/30
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#67E8E5]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />

                {
                  copy.secondaryAction
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}