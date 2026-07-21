import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { Link } from "@/i18n/navigation";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonOwnProps & {
  href: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
  secondary:
    "bg-secondary text-secondary-foreground hover:opacity-90 focus-visible:outline-secondary",
  outline:
    "border border-border text-foreground hover:bg-surface focus-visible:outline-primary",
  ghost: "text-foreground hover:bg-surface focus-visible:outline-primary",
  link: "text-primary underline-offset-4 hover:underline p-0 h-auto focus-visible:outline-primary",
  danger:
    "bg-danger text-danger-foreground hover:opacity-90 focus-visible:outline-danger",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2.5",
};

/**
 * Per docs/07 - Component Library Specification.md — Button Component.
 * Variants: primary, secondary, outline, ghost, link, danger.
 *
 * Polymorphic: pass `href` to render a real <Link> styled as a button
 * (semantic navigation, per the SEO Rules in the same doc — "use
 * semantic links when navigation is intended") instead of a <button>.
 * Never nest one inside the other.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    leftIcon,
    rightIcon,
    className,
    children,
  } = props;

  const classes = cn(
    "focus-visible:outline-offset-2 inline-flex items-center justify-center rounded-button font-medium transition-colors duration-200 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      className={classes}
      disabled={buttonProps.disabled || loading}
      aria-busy={loading || undefined}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
