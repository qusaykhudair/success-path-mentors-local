import Link from 'next/link';
import {
  ArrowRight,
  MessagesSquare,
} from 'lucide-react';

interface ScienceOverviewCtaProps {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  primaryHref: string;
  secondaryHref: string;
}

export function ScienceOverviewCta({
  copy,
  primaryHref,
  secondaryHref,
}: ScienceOverviewCtaProps) {
  return (
    <section
      className="
        bg-white
        py-16
        sm:py-20
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
            relative
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-br
            from-[#071426]
            via-[#0B1F3A]
            to-[#108686]
            px-6
            py-10
            text-white
            shadow-[0_24px_65px_rgba(7,20,38,0.16)]
            sm:px-10
            sm:py-12
            lg:px-14
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -end-24
              -top-28
              h-72
              w-72
              rounded-full
              bg-[#16C7C7]/25
              blur-3xl
            "
          />

          <div
            className="
              relative
              grid
              gap-8
              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-end
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  text-caption
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#A4F4F1]
                "
              >
                {copy.eyebrow}
              </p>

              <h2
                className="
                  mt-3
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
                  text-white/72
                "
              >
                {copy.description}
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                lg:flex-col
              "
            >
              <Link
                href={primaryHref}
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#16C7C7]
                  px-6
                  py-3
                  text-small
                  font-black
                  text-[#071426]
                  hover:bg-[#2DD4D1]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                {copy.primaryAction}

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    rtl:-scale-x-100
                  "
                />
              </Link>

              <Link
                href={secondaryHref}
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-6
                  py-3
                  text-small
                  font-black
                  text-white
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                <MessagesSquare
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                {copy.secondaryAction}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
