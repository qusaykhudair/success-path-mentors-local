import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'content' | 'reading' | 'form' | 'full';
}

const sizeStyles = {
  default: 'max-w-container',
  content: 'max-w-content',
  reading: 'max-w-reading',
  form: 'max-w-form',
  full: 'max-w-none',
} as const;

export function Container({
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto',
        'w-full',
        'px-4',
        'sm:px-6',
        'lg:px-8',
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}