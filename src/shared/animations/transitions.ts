/**
 * Shared transition tokens (durations/easings) referenced by variants.ts
 * and any component-level Framer Motion usage, to keep motion consistent.
 */
export const transitions = {
  fast: { duration: 0.2, ease: "easeOut" },
  base: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.45, ease: "easeOut" },
} as const;
