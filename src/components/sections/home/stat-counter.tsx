'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setCount(end);
      return;
    }

    let animationFrameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          observer.disconnect();

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOut * end);

            setCount(currentVal);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            }
          };

          animationFrameId = requestAnimationFrame(step);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  const accessibleValue = `${end}${suffix}`;
  const displayValue = count !== null ? `${count}${suffix}` : accessibleValue;

  return (
    <span ref={ref}>
      <span className="sr-only">{accessibleValue}</span>
      <span aria-hidden="true">{displayValue}</span>
    </span>
  );
}