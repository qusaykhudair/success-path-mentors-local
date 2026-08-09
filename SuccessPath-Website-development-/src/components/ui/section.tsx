import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Container } from './container';

type SectionTone =
  | 'background'
  | 'surface'
  | 'muted'
  | 'accent'
  | 'primary'
  | 'dark'
  | 'transparent';

type SectionSpacing = 'none' | 'sm' | 'md' | 'lg';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  as?: 'section' | 'div';
  contained?: boolean;
  containerClassName?: string;
}

const toneStyles: Record<SectionTone, string> = {
  background: 'bg-background text-foreground',

  surface:
    'bg-surface text-foreground',

  muted:
    'bg-surface-sunken text-foreground',

  accent:
    'bg-section-accent text-foreground',

  primary:
    'bg-primary text-white',

  dark:
    'bg-brand-dark text-white',

  transparent:
    'bg-transparent text-foreground',
};

const spacingStyles: Record<SectionSpacing, string> = {
  none: '',
  sm: 'section-space-sm',
  md: 'section-space',
  lg: 'py-20 md:py-28 lg:py-32',
};

export function Section({
  className,
  tone = 'background',
  spacing = 'md',
  as: Tag = 'section',
  contained = true,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const content = contained ? (
    <Container className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Tag
      className={cn(
        toneStyles[tone],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      {content}
    </Tag>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  align?: 'center' | 'start';
  tone?: 'default' | 'inverse';
  className?: string;
  headingClassName?: string;
  subheadingClassName?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  tone = 'default',
  className,
  headingClassName,
  subheadingClassName,
}: SectionHeadingProps) {
  const isInverse = tone === 'inverse';

  return (
    <div
      className={cn(
        'mb-10',
        'max-w-content',
        'md:mb-12',

        align === 'center'
          ? 'mx-auto text-center'
          : 'text-start',

        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3',
            'text-small',
            'font-bold',
            'uppercase',
            'tracking-wide',

            isInverse
              ? 'text-accent-300'
              : 'text-accent-700'
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'text-h2',
          isInverse
            ? 'text-white'
            : 'text-foreground',
          headingClassName
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            'mt-4',
            'text-lead',

            isInverse
              ? 'text-white/75'
              : 'text-muted-foreground',

            subheadingClassName
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}