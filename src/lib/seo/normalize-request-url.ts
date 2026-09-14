const PRODUCTION_HOST = 'successpathmentors.net';

/** Normalize the public host without redirecting local or preview deployments. */
export function getNormalizedRequestUrl(
  requestUrl: string,
  host: string | null,
  forwardedProtocol: string | null
): string | null {
  const url = new URL(requestUrl);
  const hostname = (host ?? url.host).split(':')[0]?.toLowerCase();
  const isProductionHost =
    hostname === PRODUCTION_HOST || hostname === `www.${PRODUCTION_HOST}`;
  const protocol = forwardedProtocol?.split(',')[0]?.trim().toLowerCase();
  const publicProtocol = protocol === 'http' || protocol === 'https'
    ? `${protocol}:`
    : url.protocol;
  const normalizeHost = isProductionHost &&
    (hostname !== PRODUCTION_HOST || publicProtocol !== 'https:');
  const normalizeSlash = url.pathname !== '/' && url.pathname.endsWith('/');

  if (!normalizeHost && !normalizeSlash) return null;

  if (isProductionHost) {
    url.protocol = 'https:';
    url.hostname = PRODUCTION_HOST;
    url.port = '';
  }
  if (normalizeSlash) url.pathname = url.pathname.replace(/\/+$/, '');

  return url.toString();
}
