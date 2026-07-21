import { NotFound } from "@/components/feedback/NotFound";

/**
 * Per docs/02 - Folder Structure Specification.md (app/[locale]/not-found.tsx).
 * Rendered inside [locale]/layout.tsx, so Navbar/Footer stay mounted.
 */
export default function LocaleNotFound() {
  return <NotFound />;
}
