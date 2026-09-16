import { AlertCircle, CheckCircle2, Info, LoaderCircle } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export const authInputClass = cn(
  'form-control',
  'h-13',
  'rounded-xl',
  'border-border-strong/80',
  'bg-background',
  'px-4',
  'text-body',
  'shadow-xs',
  'placeholder:text-muted-foreground/65',
  'focus:border-accent-500',
  'focus:ring-0'
);

export function FieldLabel({
  htmlFor,
  label,
  requirement,
}: {
  htmlFor: string;
  label: string;
  requirement?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center justify-between gap-3 text-small font-black text-primary-950">
      <span>{label}</span>
      {requirement ? (
        <span className="text-caption font-semibold text-muted-foreground">{requirement}</span>
      ) : null}
    </label>
  );
}

export function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;

  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-caption font-semibold text-danger-600">
      <AlertCircle aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      {children}
    </p>
  );
}

export function Notice({
  variant = 'info',
  children,
}: {
  variant?: 'info' | 'success' | 'error';
  children: ReactNode;
}) {
  const Icon = variant === 'success' ? CheckCircle2 : variant === 'error' ? AlertCircle : Info;

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={cn(
        'flex items-start gap-3 rounded-2xl border px-4 py-3 text-small leading-6',
        variant === 'success' && 'border-success-200 bg-success-50 text-success-700',
        variant === 'error' && 'border-danger-200 bg-danger-50 text-danger-700',
        variant === 'info' && 'border-info-100 bg-info-50 text-primary-800'
      )}
    >
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}

export function SubmitLabel({ loading, idle, pending }: { loading: boolean; idle: string; pending: string }) {
  return loading ? (
    <>
      <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin motion-reduce:animate-none" />
      {pending}
    </>
  ) : (
    <>{idle}</>
  );
}
