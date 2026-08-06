import { forwardRef } from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

const variantStyles = {
  primary: [
    'bg-primary',
    'text-white',
    'shadow-button-primary',
    'hover:bg-primary-800',
    'hover:shadow-lg',
    'active:bg-primary-950',
  ].join(' '),

  accent: [
    'bg-accent',
    'text-accent-foreground',
    'shadow-button-accent',
    'hover:bg-accent-600',
    'hover:shadow-lg',
    'active:bg-accent-700',
  ].join(' '),

  outline: [
    'border',
    'border-border',
    'bg-background',
    'text-foreground',
    'shadow-xs',
    'hover:border-primary-300',
    'hover:bg-primary-50',
    'active:bg-primary-100',
  ].join(' '),

  ghost: [
    'bg-transparent',
    'text-foreground',
    'hover:bg-muted',
    'active:bg-primary-100',
  ].join(' '),
} as const;

const sizeStyles = {
  sm: 'min-h-touch px-4 py-2 text-small',
  md: 'min-h-12 px-6 py-3 text-body',
  lg: 'min-h-14 px-8 py-4 text-body',
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

const baseStyles = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'rounded-full',
  'font-semibold',
  'leading-none',
  'transition-[background-color,color,border-color,box-shadow,transform]',
  'duration-200',
  'ease-out',
  'hover:-translate-y-0.5',
  'active:translate-y-0',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-accent-500',
  'focus-visible:ring-offset-2',
  'focus-visible:ring-offset-background',
  'disabled:pointer-events-none',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  'motion-reduce:transition-none',
  'motion-reduce:hover:translate-y-0',
].join(' ');

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonOwnProps & { className?: string } = {}) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );
}

type ButtonProps = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      type = 'button',
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={buttonVariants({
        variant,
        size,
        className,
      })}
      {...props}
    />
  )
);

Button.displayName = 'Button';

type ButtonLinkProps = ButtonOwnProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  ButtonLinkProps
>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      'aria-disabled': ariaDisabled,
      tabIndex,
      ...props
    },
    ref
  ) => {
    const isDisabled =
      ariaDisabled === true ||
      ariaDisabled === 'true';

    return (
      <a
        ref={ref}
        href={isDisabled ? undefined : href}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : tabIndex}
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
          isDisabled &&
            'pointer-events-none cursor-not-allowed opacity-50'
        )}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = 'ButtonLink';