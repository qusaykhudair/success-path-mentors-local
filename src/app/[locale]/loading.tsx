import { PageSkeleton } from "@/components/loaders/PageSkeleton";

/**
 * Automatically shown by Next.js while a route segment under [locale]
 * is loading (navigation or async data fetching in a page/layout).
 * Rendered inside MainLayout (the Navbar/Footer stay mounted), so this
 * only needs to fill the <main> content area.
 */
export default function Loading() {
  return <PageSkeleton />;
}
