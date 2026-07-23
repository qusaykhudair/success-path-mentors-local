import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware Link, redirect, usePathname, useRouter — always use these
// instead of the Next.js defaults so localized pathnames stay correct.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
