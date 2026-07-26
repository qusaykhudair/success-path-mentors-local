import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: 'surface' | 'tint' | 'primary';
  as?: 'section' | 'div';
}

const toneStyles = {
  surface: 'bg-surface',
  tint: 'bg-primary-50',
  primary: 'bg-primary text-white',
} as const;

export function Section({
  className,
  tone = 'surface',
  as: Tag = 'section',
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn('py-16 md:py-24', toneStyles[tone], className)} {...props}>
      <Container>{children}</Container>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'center',
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'center' | 'start';
}) {
  return (
    <div
      className={cn(
        'mb-12 max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-start'
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-small font-semibold uppercase tracking-wide text-accent-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2 text-primary">{heading}</h2>
      {subheading && <p className="mt-4 text-body text-ink/70">{subheading}</p>}
    </div>
  );
}
