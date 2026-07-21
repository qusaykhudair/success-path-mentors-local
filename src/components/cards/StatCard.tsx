"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

/**
 * Per docs/07 - Component Library Specification.md — Statistic Card:
 * "Icon, Number, Label, CountUp Animation." Animates once, when
 * scrolled into view (docs/27 - Motion & Animation Guidelines.md —
 * Statistics: "Statistics should animate using CountUp").
 */
export function StatCard({ value, suffix = "", label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="border-border bg-surface rounded-card flex flex-col items-center gap-1 border p-6 text-center"
    >
      <span className="text-primary text-3xl font-bold sm:text-4xl">
        {inView ? <CountUp end={value} duration={1.6} suffix={suffix} /> : `0${suffix}`}
      </span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  );
}
