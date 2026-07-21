import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Lightweight wrappers around Next.js navigation APIs
 * that consider the routing configuration (locale-aware).
 *
 * Always import Link, redirect, usePathname, useRouter from
 * "@/i18n/navigation" instead of "next/link" or "next/navigation"
 * so that locale prefixes are handled automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
