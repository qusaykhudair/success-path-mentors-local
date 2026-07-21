import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves conflicting Tailwind utility classes.
 * The single utility every component in components/ should use for
 * conditional/merged className props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
