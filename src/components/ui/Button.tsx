import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
  accent: 'bg-accent text-white-900 hover:bg-accent-600 active:bg-accent-700',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary-50',
  ghost: 'text-primary bg-transparent hover:bg-primary-50',
} as const;

const sizeStyles = {
  sm: 'text-small px-4 py-2',
  md: 'text-body px-6 py-3',
  lg: 'text-body px-8 py-4',
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonOwnProps & { className?: string } = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

type ButtonProps = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';

type ButtonLinkProps = ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <a
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);
ButtonLink.displayName = 'ButtonLink';
