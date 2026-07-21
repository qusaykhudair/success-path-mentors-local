"use client";

import { useEffect } from "react";
import "@/styles/globals.css";

/**
 * Last-resort error boundary: only triggers when the error occurs in
 * app/[locale]/layout.tsx itself (i.e. something the normal
 * app/[locale]/error.tsx can't catch, since that boundary lives inside
 * the same layout). Per Next.js convention this file must render its
 * own <html>/<body> and replaces the entire page.
 *
 * Deliberately self-contained: no next-intl (the failure could be in
 * the i18n provider itself), no Navbar/Footer, no design-system
 * components that might share the same failure. Plain, hardcoded
 * English copy and inline-safe Tailwind classes only.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white p-8 font-sans text-slate-900">
        <div className="flex max-w-sm flex-col items-center gap-4 text-center">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <p className="text-sm text-slate-600">
            The application failed to load. Please try again.
          </p>
          <button
            onClick={reset}
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
