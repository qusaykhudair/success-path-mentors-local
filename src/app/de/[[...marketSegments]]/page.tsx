import { redirect } from 'next/navigation';
import { requireMarketRoute } from '@/lib/market-route-boundary';
import { getMarketLocalePath } from '@/lib/market-routing';

// The static folder reserves the configured Germany slug. Tests enforce parity.
// Catch all descendants so invalid/deeper paths cannot fall into the NA boundary.
export default async function MarketPage({ params }: {
  params: Promise<{ marketSegments?: string[] }>;
}) {
  const { marketSegments } = await params;
  const route = requireMarketRoute('germany', marketSegments);
  if (route.kind === 'entry') redirect(getMarketLocalePath(route.market.id, route.language));

  // Future market-scoped content/messages belong here, not in global next-intl.
  // Even an enabled fixture renders no marketing UI in this infrastructure unit.
  return null;
}
