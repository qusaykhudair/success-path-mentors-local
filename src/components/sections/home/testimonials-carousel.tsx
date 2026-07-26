'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image?: string;
}

function getInitials(name: string): string {
  return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '').join('');
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const rating = Math.max(0, Math.min(5, Math.round(item.rating)));
  return (
    <figure className="relative flex h-full w-[80vw] flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white p-6 shadow-card sm:w-[22rem]">
      <Quote aria-hidden="true" className="absolute -end-1 -top-1 h-16 w-16 rotate-180 fill-accent-500/[0.07] text-accent-500/[0.07] rtl:-scale-x-100" strokeWidth={0} />
      <div className="relative flex items-center gap-0.5" role="img" aria-label={`${rating}/5`}>
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} aria-hidden="true" className={`h-4 w-4 ${s < rating ? 'fill-accent-500 text-accent-500' : 'fill-primary-200 text-primary-200'}`} strokeWidth={0} />
        ))}
      </div>
      <blockquote className="relative mt-4 flex-1">
        <p className="text-body text-ink-secondary">{item.quote}</p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center gap-3 border-t border-primary-100 pt-4">
        {item.image ? (
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-100">
            <Image src={item.image} alt="" fill sizes="44px" className="object-cover" />
          </span>
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-100 to-primary-100 text-small font-bold text-primary" aria-hidden="true">
            {getInitials(item.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-small font-semibold text-primary">{item.name}</p>
          <p className="truncate text-caption text-ink-secondary">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsCarousel({ items }: { items: Testimonial[]; ratingLabel?: string }) {
  const setRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Ensure enough cards to overflow the widest viewport.
  const MIN = 6;
  const repeat = Math.max(2, Math.ceil(MIN / items.length));
  const oneSet = Array.from({ length: repeat }, () => items).flat();

  useEffect(() => {
    const isRtl = typeof document !== 'undefined' && document.documentElement.dir === 'rtl';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const SPEED = 60; // pixels per second — raise for faster

    function measure() {
      if (setRef.current) setWidthRef.current = setRef.current.scrollWidth;
    }
    measure();
    window.addEventListener('resize', measure);

    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && setWidthRef.current > 0) {
        offsetRef.current += SPEED * dt * (isRtl ? -1 : 1);
        // Wrap seamlessly by the measured width of ONE set.
        if (offsetRef.current >= setWidthRef.current) offsetRef.current -= setWidthRef.current;
        if (offsetRef.current <= -setWidthRef.current) offsetRef.current += setWidthRef.current;
        if (setRef.current?.parentElement) {
          setRef.current.parentElement.style.transform = `translateX(${-offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, items.length]);

  return (
    <div
      className="group relative mt-12 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 start-0 z-10 w-6 bg-gradient-to-r from-primary-50 to-transparent sm:w-10 rtl:bg-gradient-to-l" />
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 z-10 w-6 bg-gradient-to-l from-primary-50 to-transparent sm:w-10 rtl:bg-gradient-to-r" />

      {/* moving wrapper (transform applied here) */}
      <div className="flex w-max">
        {/* set #1 — measured */}
        <div ref={setRef} className="flex">
          {oneSet.map((item, i) => (
            <div key={`a-${i}`} className="shrink-0 px-3">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
        {/* set #2 — identical copy for seamless wrap */}
        <div className="flex" aria-hidden="true">
          {oneSet.map((item, i) => (
            <div key={`b-${i}`} className="shrink-0 px-3">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}