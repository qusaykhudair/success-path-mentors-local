'use client';

import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function StatCounter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} duration={1.6} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
