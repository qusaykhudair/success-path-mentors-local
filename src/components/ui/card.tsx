import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Enables the interactive hover treatment.
   *
   * Use this only when the card is clickable or should visually
   * respond to user interaction.
   */
  interactive?: boolean;

  /**
   * Controls the internal padding.
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-6 md:p-8',
} as const;

export function Card({
  className,
  interactive = false,
  padding = 'md',
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card',
        'border',
        'border-border',
        'bg-card',
        'text-card-foreground',
        'shadow-card',
        paddingStyles[padding],

        interactive && [
          'group',
          'relative',
          'overflow-hidden',
          'transition-[transform,box-shadow,border-color]',
          'duration-300',
          'ease-out',
          'hover:-translate-y-1',
          'hover:border-accent-300',
          'hover:shadow-card-hover',
          'focus-within:border-accent-300',
          'focus-within:shadow-card-hover',
          'motion-reduce:transition-none',
          'motion-reduce:hover:translate-y-0',
        ],

        className
      )}
      {...props}
    />
  );
}