import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// Minimal document/boundary infrastructure, independent of the EN/AR layout.
// No content, providers, translations or market SEO are introduced here.
export const metadata: Metadata = { robots: { index: false, follow: false } };

import '../globals.css';

export default function MarketNamespaceLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
