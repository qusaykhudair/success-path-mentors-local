import { notFound } from 'next/navigation';
import type { MarketId } from '@/config/markets';
import { resolveMarketRoute, type MarketRoute } from './market-routing';

/** Application boundary: disabled markets never redirect or render their children. */
export function requireMarketRoute(id: MarketId, segments: readonly string[] = []): MarketRoute {
  const route = resolveMarketRoute(id, segments);
  if (!route || !route.market.enabled) notFound();
  return route;
}
