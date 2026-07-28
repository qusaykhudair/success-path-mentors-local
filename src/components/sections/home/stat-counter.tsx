'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function StatCounter({
  end,
  suffix = '',
  duration = 1.6,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-10%',
  });

  const accessibleValue = `${end}${suffix}`;

  return (
    <span ref={ref}>
      <span className="sr-only">
        {accessibleValue}
      </span>

      <span aria-hidden="true">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            suffix={suffix}
            preserveValue
          />
        ) : (
          accessibleValue
        )}
      </span>
    </span>
  );
}