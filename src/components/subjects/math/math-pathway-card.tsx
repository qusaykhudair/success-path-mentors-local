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
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface MathPathwayCardProps {
  pathway:
    PublicMathPathwaySummary;
  href: string;
  copy: MathExplorerCopy;
}

export function MathPathwayCard({
  pathway,
  href,
  copy,
}: MathPathwayCardProps) {
  return (
    <Link
      href={href}
      id={
        `pathway-card-${pathway.slug}`
      }
      className="
        group
        relative
        flex
        h-full
        min-h-[17rem]
        w-full
        flex-col
        overflow-hidden
        rounded-[1.25rem]
        border
        border-[#DCE5EC]
        bg-white
        p-6
        text-start
        shadow-[0_6px_20px_rgba(7,20,38,0.045)]
        transition-[border-color,box-shadow,transform]
        duration-200
        hover:-translate-y-1
        hover:border-[#67E8E5]
        hover:shadow-[0_16px_38px_rgba(7,20,38,0.09)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#16C7C7]
        focus-visible:ring-offset-2
        motion-reduce:transition-none
        motion-reduce:hover:translate-y-0
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          -end-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-[#16C7C7]/10
          blur-2xl
        "
      />

      <div
        className="
          relative
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <span
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-[#ECFEFD]
            text-[#108686]
            ring-1
            ring-[#CFFAF8]
            transition-colors
            group-hover:bg-[#16C7C7]
            group-hover:text-[#071426]
          "
        >
          <MathPathwayIcon
            iconKey={
              pathway.iconKey
            }
            className="h-5 w-5"
          />
        </span>

        <span
          className="
            rounded-full
            border
            border-[#DCE5EC]
            bg-white/90
            px-3
            py-1.5
            text-caption
            font-bold
            text-[#475569]
          "
        >
          {
            copy.gradeRangeLabel
          }
          {' '}
          {
            pathway.gradeRange.min
          }
          –
          {
            pathway.gradeRange.max
          }
        </span>
      </div>

      <h3
        className="
          relative
          mt-5
          text-[1.2rem]
          font-black
          leading-[1.45]
          text-[#0B1F3A]
        "
      >
        {pathway.title}
      </h3>

      <p
        className="
          relative
          mt-3
          text-[0.93rem]
          leading-7
          text-[#475569]
        "
      >
        {pathway.description}
      </p>

      <div
        className="
          relative
          mt-auto
          pt-6
        "
      >
        <div role="list"
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          <MetaPill
            icon={BookOpen}
            value={
              pathway.topicCount
            }
            label={
              copy.topicsLabel
            }
          />

          <MetaPill
            icon={Layers3}
            value={
              pathway.stageCount
            }
            label={
              copy.stagesLabel
            }
          />
        </div>

        <span
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-[0.88rem]
            font-black
            text-[#108686]
          "
        >
          {
            copy.pathwayCardAction
          }

          <ArrowRight
            aria-hidden="true"
            className="
              h-4
              w-4
              transition-transform
              group-hover:translate-x-1
              rtl:-scale-x-100
              rtl:group-hover:-translate-x-1
              motion-reduce:transition-none
            "
          />
        </span>
      </div>
    </Link>
  );
}

function MetaPill({
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
        bg-white/80
        px-3
        py-1.5
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

      <span className="text-[#0B1F3A]">
        {value.toLocaleString()}
      </span>

      <span>{label}</span>
    </div>
  );
}
