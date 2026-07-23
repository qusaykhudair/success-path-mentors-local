
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Opt-in richer hover treatment (lift + accent glow + colored ring).
   * Defaults to false so every OTHER usage of <Card> across the site
   * keeps its exact current appearance — nothing changes for them.
   */
  interactive?: boolean;
}

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-primary-100 bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover',
        interactive &&
          'group relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className
      )}
      {...props}
    />
  );
}