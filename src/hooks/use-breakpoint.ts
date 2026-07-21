"use client";

import { useMediaQuery } from "./use-media-query";

/**
 * Breakpoints per docs/03 - Design System Specification.md grid system
 * (mobile / tablet / desktop).
 */
const breakpoints = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
} as const;

export function useBreakpoint() {
  const isMobile = useMediaQuery(breakpoints.mobile);
  const isTablet = useMediaQuery(breakpoints.tablet);
  const isDesktop = useMediaQuery(breakpoints.desktop);

  return { isMobile, isTablet, isDesktop };
}
