export * from "./use-breakpoint";
export * from "./use-debounce";
export * from "./use-media-query";
export * from "./use-mounted";
export * from "./use-scroll";
export * from "./use-window-size";

// Note: no useLocale hook here — next-intl already exports one
// (`import { useLocale } from "next-intl"`). Re-implementing it would
// violate the "Composition Over Duplication" rule in Architecture.md.
