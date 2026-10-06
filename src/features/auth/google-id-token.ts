const GOOGLE_JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const GOOGLE_ISSUERS = new Set(['accounts.google.com', 'https://accounts.google.com']);
const GOOGLE_CLIENT_ID =
  '541344539683-mfeio08fjgkh4fu2u1um2bqddt2h00cl.apps.googleusercontent.com';

interface GoogleJwtHeader {
  alg?: string;
  kid?: string;
  typ?: string;
}

export interface VerifiedGoogleIdToken {
  iss: string;
  sub: string;
  aud: string | string[];
  azp?: string;
  email: string;
  email_verified: boolean;
  exp: number;
  iat?: number;
  nbf?: number;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  locale?: string;
  hd?: string;
}

interface GoogleJwk extends JsonWebKey {
  kid?: string;
  alg?: string;
  use?: string;
}

interface GoogleJwksResponse {
  keys?: GoogleJwk[];
}

let cachedKeys: { keys: GoogleJwk[]; expiresAt: number } | null = null;

function base64UrlJson<T>(value: string): T {
  return JSON.parse(Buffer.from(value, 'base64url').toString('utf8')) as T;
}

function cacheMaxAge(cacheControl: string | null): number {
  const match = cacheControl?.match(/(?:^|,)\s*max-age=(\d+)/i);
  const seconds = match ? Number(match[1]) : 3600;
  return Number.isFinite(seconds) && seconds > 0 ? seconds * 1000 : 3600_000;
}

async function getGoogleJwks(): Promise<GoogleJwk[]> {
  const now = Date.now();
  if (cachedKeys && cachedKeys.expiresAt > now) return cachedKeys.keys;

  try {
    const response = await fetch(GOOGLE_JWKS_URL, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Google JWKS request failed (${response.status})`);
    }

    const body = (await response.json()) as GoogleJwksResponse;
    const keys = Array.isArray(body.keys) ? body.keys : [];
    if (!keys.length) throw new Error('Google JWKS response contained no keys');

    cachedKeys = {
      keys,
      expiresAt: now + cacheMaxAge(response.headers.get('cache-control')),
    };
    return keys;
  } catch (error) {
    // During a temporary Google/JWKS network issue, a recently cached public key
    // remains safe to use for a short grace period because the JWT still has its
    // own signature and exp validation.
    if (cachedKeys && cachedKeys.expiresAt + 6 * 60 * 60 * 1000 > now) {
      return cachedKeys.keys;
    }
    throw error;
  }
}

function audienceMatches(aud: string | string[] | undefined): boolean {
  if (typeof aud === 'string') return aud === GOOGLE_CLIENT_ID;
  return Array.isArray(aud) && aud.includes(GOOGLE_CLIENT_ID);
}

export async function verifyGoogleIdToken(
  credential: string
): Promise<VerifiedGoogleIdToken> {
  const parts = credential.split('.');
  if (parts.length !== 3) throw new Error('Malformed Google ID token');

  const headerPart = parts[0];
  const payloadPart = parts[1];
  const signaturePart = parts[2];
  if (!headerPart || !payloadPart || !signaturePart) {
    throw new Error('Malformed Google ID token');
  }

  const header = base64UrlJson<GoogleJwtHeader>(headerPart);
  const payload = base64UrlJson<Partial<VerifiedGoogleIdToken>>(payloadPart);

  if (header.alg !== 'RS256' || !header.kid) {
    throw new Error('Unexpected Google ID token header');
  }

  const keys = await getGoogleJwks();
  const jwk = keys.find((key) => key.kid === header.kid && (!key.alg || key.alg === 'RS256'));
  if (!jwk) throw new Error('Google signing key not found');

  const publicKey = await globalThis.crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify']
  );

  const verified = await globalThis.crypto.subtle.verify(
    { name: 'RSASSA-PKCS1-v1_5' },
    publicKey,
    Uint8Array.from(Buffer.from(signaturePart, 'base64url')),
    new TextEncoder().encode(`${headerPart}.${payloadPart}`)
  );

  if (!verified) throw new Error('Invalid Google ID token signature');

  const now = Math.floor(Date.now() / 1000);
  const clockSkew = 120;

  if (!payload.iss || !GOOGLE_ISSUERS.has(payload.iss)) {
    throw new Error('Invalid Google ID token issuer');
  }
  if (!audienceMatches(payload.aud)) {
    throw new Error('Invalid Google ID token audience');
  }
  if (payload.azp && payload.azp !== GOOGLE_CLIENT_ID) {
    throw new Error('Invalid Google ID token authorized party');
  }
  if (typeof payload.exp !== 'number' || payload.exp < now - clockSkew) {
    throw new Error('Expired Google ID token');
  }
  if (typeof payload.iat === 'number' && payload.iat > now + clockSkew) {
    throw new Error('Google ID token issued in the future');
  }
  if (typeof payload.nbf === 'number' && payload.nbf > now + clockSkew) {
    throw new Error('Google ID token not active yet');
  }
  if (!payload.sub || typeof payload.sub !== 'string') {
    throw new Error('Google ID token missing subject');
  }
  if (!payload.email || typeof payload.email !== 'string' || payload.email_verified !== true) {
    throw new Error('Google email is not verified');
  }

  return payload as VerifiedGoogleIdToken;
}
