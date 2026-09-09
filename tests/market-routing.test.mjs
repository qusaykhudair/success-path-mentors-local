import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createLoader } from './helpers/ts-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const load = createLoader(root);
const markets = load('src/config/markets.ts');
const routing = load('src/lib/market-routing.ts');
const germany = markets.getMarketConfig('germany');
const notFoundError = new Error('NOT_FOUND');
const navigation = {
  notFound: () => { throw notFoundError; },
  redirect: (path) => { throw Object.assign(new Error('REDIRECT'), { path }); },
};

test('Germany market slug, languages, default entry and RTL are distinct concepts', () => {
  assert.equal(germany.publicSlug, 'de');
  assert.equal(germany.enabled, false);
  assert.equal(germany.defaultLanguage, 'de');
  assert.deepEqual(germany.supportedLanguages, ['de', 'ar', 'en']);
  assert.equal(routing.getMarketRootPath('germany'), '/de');
  assert.equal(routing.getMarketLocalePath('germany'), '/de/de');
  for (const [language, path, direction] of [
    ['de', '/de/de', 'ltr'], ['en', '/de/en', 'ltr'], ['ar', '/de/ar', 'rtl'],
  ]) {
    assert.equal(routing.getMarketLocalePath('germany', language), path);
    const route = routing.resolveMarketRoute('germany', [language]);
    assert.equal(route.market.id, 'germany');
    assert.equal(route.language, language);
    assert.equal(route.direction, direction);
    assert.equal(route.kind, 'locale');
  }
  assert.equal(routing.resolveMarketRoute('germany').kind, 'entry');
  assert.equal(existsSync(new URL(`../src/app${routing.getMarketRootPath('germany')}/[[...marketSegments]]/page.tsx`, import.meta.url)), true);
});

test('unsupported languages are rejected', () => {
  for (const language of ['fr', 'es', 'xyz', 'foo', '', 'DE', '../en', undefined, null, 0, {}]) {
    assert.equal(routing.isMarketLanguage('germany', language), false);
    assert.equal(routing.resolveMarketRoute('germany', [language]), undefined);
    if (language !== undefined) assert.throws(() => routing.getMarketLocalePath('germany', language), RangeError);
  }
});

test('child routes are structurally resolved and generated for supported languages', () => {
  for (const language of germany.supportedLanguages) {
    const route = routing.resolveMarketRoute('germany', [language, 'trial']);
    assert.equal(route.kind, 'child');
    assert.equal(route.language, language);
    assert.deepEqual(route.childSegments, ['trial']);
    assert.equal(routing.getMarketChildPath('germany', language, ['trial']), `/de/${language}/trial`);
  }
  const contactRoute = routing.resolveMarketRoute('germany', ['en', 'contact']);
  assert.equal(contactRoute.kind, 'child');
  assert.deepEqual(contactRoute.childSegments, ['contact']);
});

test('namespace classification reserves disabled markets independently of language validity', () => {
  for (const path of ['/de', '/de/', '/de/de', '/de/en', '/de/ar', '/de/fr', '/de/anything']) {
    assert.equal(routing.getMarketFromPathname(path), germany);
    assert.equal(routing.isReservedMarketPathname(path), true);
  }
  for (const path of ['/en', '/ar', '/fr', '/fr/programme-francais', '/', '/deutsch', '/debug', '/en/de', 'de']) {
    assert.equal(routing.getMarketFromPathname(path), undefined);
    assert.equal(routing.isReservedMarketPathname(path), false);
  }
});

test('all disabled Germany requests stop at the actual page boundary without redirecting', async () => {
  const boundaryLoad = createLoader(root, { 'next/navigation': navigation });
  const page = boundaryLoad('src/app/de/[[...marketSegments]]/page.tsx').default;
  for (const segments of [undefined, [], ['de'], ['en'], ['ar'], ['fr'], ['es'], ['xyz'], ['en', 'contact'], ['de', 'trial']]) {
    await assert.rejects(page({ params: Promise.resolve({ marketSegments: segments }) }), (error) => error === notFoundError);
  }
  const localNotFound = boundaryLoad('src/app/de/not-found.tsx').default;
  assert.equal(localNotFound(), null);
  assert.deepEqual(boundaryLoad('src/app/de/layout.tsx').metadata.robots, { index: false, follow: false });
});

test('an isolated enabled fixture follows configured entry behavior, but still rejects invalid locales', async () => {
  const fixtureLoad = createLoader(root, {
    'next/navigation': navigation,
    '@/config/markets': {
      ...markets,
      getMarketConfig: (id) => id === germany.id ? { ...germany, enabled: true } : markets.getMarketConfig(id),
    },
  });
  const page = fixtureLoad('src/app/de/[[...marketSegments]]/page.tsx').default;
  await assert.rejects(page({ params: Promise.resolve({}) }), (error) => error.message === 'REDIRECT' && error.path === '/de/de');
  for (const language of germany.supportedLanguages) {
    assert.equal(await page({ params: Promise.resolve({ marketSegments: [language] }) }), null);
    await assert.rejects(page({ params: Promise.resolve({ marketSegments: [language, 'trial'] }) }), (error) => error === notFoundError);
  }
  await assert.rejects(page({ params: Promise.resolve({ marketSegments: ['fr'] }) }), (error) => error === notFoundError);
  assert.equal(markets.getMarketConfig('germany').enabled, false);
});

test('helpers derive slug, supported languages and default from configuration', () => {
  const fixtureLoad = createLoader(root, {
    '@/config/markets': {
      ...markets,
      getMarketConfig: (id) => id === germany.id
        ? { ...germany, publicSlug: 'example-market', defaultLanguage: 'en', supportedLanguages: ['en'] }
        : markets.getMarketConfig(id),
    },
  });
  const helpers = fixtureLoad('src/lib/market-routing.ts');
  assert.equal(helpers.getMarketRootPath('germany'), '/example-market');
  assert.equal(helpers.getMarketLocalePath('germany'), '/example-market/en');
  assert.equal(helpers.isReservedMarketPathname('/example-market/fr'), true);
  assert.equal(helpers.getMarketFromPathname('/example-market/fr').id, germany.id);
  assert.equal(helpers.isReservedMarketPathname('/de'), false);
  assert.equal(helpers.isMarketLanguage('germany', 'de'), false);
});

test('proxy bypasses global next-intl only for whole registered market namespaces', () => {
  const intlCalls = [];
  const proxyLoad = createLoader(root, {
    'next-intl/middleware': (config) => {
      assert.deepEqual(config.locales, ['en', 'ar']);
      return (request) => {
        intlCalls.push(request.nextUrl.pathname);
        return new Response(null, { headers: { 'x-test-intl': '1' } });
      };
    },
  });
  const proxy = proxyLoad('src/proxy.ts').default;
  const request = (pathname) => ({ url: `https://successpathmentors.net${pathname}`, nextUrl: new URL(`https://successpathmentors.net${pathname}`) });
  for (const path of ['/de', '/de/', '/de/de', '/de/en', '/de/ar', '/de/fr', '/de/es', '/de/anything', '/de/en/contact']) {
    const response = proxy(request(path));
    assert.equal(response.headers.get('x-middleware-next'), '1');
    assert.equal(response.headers.get('location'), null);
    assert.equal(response.headers.get('x-test-intl'), null);
    assert.equal(response.headers.get('X-Content-Type-Options'), 'nosniff');
  }
  assert.deepEqual(intlCalls, []);
  for (const path of ['/', '/en', '/ar', '/en/login', '/ar/login', '/en/register', '/ar/register', '/deutsch', '/debug', '/en/de']) {
    assert.equal(proxy(request(path)).headers.get('x-test-intl'), '1');
    assert.equal(routing.isReservedMarketPathname(path), false);
  }
  const beforeFrench = intlCalls.length;
  for (const path of ['/fr', '/fr/', '/fr/programme-francais', '/fr/programme-francais/math']) {
    assert.equal(proxy(request(path)).headers.get('x-middleware-next'), '1');
  }
  assert.equal(new URL(proxy(request('/fr/other')).headers.get('location')).pathname, '/fr/programme-francais');
  assert.equal(intlCalls.length, beforeFrench);
});

test('proxy is the only request convention and preserves security on every response branch', () => {
  for (const directory of ['', 'src/']) {
    for (const extension of ['ts', 'tsx', 'js', 'jsx']) {
      assert.equal(existsSync(new URL(`../${directory}middleware.${extension}`, import.meta.url)), false);
      assert.equal(existsSync(new URL(`../${directory}proxy.${extension}`, import.meta.url)), directory === 'src/' && extension === 'ts');
    }
  }
  const saved = process.env.NODE_ENV;
  try {
    for (const environment of ['production', 'development']) {
      process.env.NODE_ENV = environment;
      const proxyLoad = createLoader(root, {
        'next-intl/middleware': () => () => new Response(null),
      });
      const { default: proxy, config } = proxyLoad('src/proxy.ts');
      assert.deepEqual(config.matcher, ['/((?!api|_next|_vercel|.*\\..*).*)']);
      for (const pathname of ['/de', '/de/fr', '/en', '/ar', '/en/login', '/ar/login', '/en/register', '/ar/register', '/fr', '/fr/programme-francais', '/fr/other']) {
        const url = new URL(`https://successpathmentors.net${pathname}`);
        const { headers } = proxy({ url: url.href, nextUrl: url });
        const expectedCsp = [
          "default-src 'self'", "base-uri 'self'", "form-action 'self'",
          "frame-ancestors 'none'", "object-src 'none'", "img-src 'self' data: blob: https:",
          "font-src 'self' data:", "style-src 'self' 'unsafe-inline'",
          `script-src 'self' 'unsafe-inline'${environment === 'development' ? " 'unsafe-eval'" : ''}`,
          "connect-src 'self' https:", "media-src 'self' https:", "worker-src 'self' blob:",
          'upgrade-insecure-requests',
        ].join('; ');
        assert.equal(headers.get('Content-Security-Policy'), expectedCsp);
        for (const [name, value] of Object.entries({
          'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Resource-Policy': 'same-origin',
          'X-DNS-Prefetch-Control': 'on',
        })) assert.equal(headers.get(name), value, `${environment}/${pathname}/${name}`);
      }
    }
  } finally {
    if (saved === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = saved;
  }
});

test('North America and French route contracts remain outside Germany language routing', () => {
  const { routing: globalRouting } = load('src/i18n/routing.ts');
  const { isSupportedLocale } = load('src/config/site.ts');
  const { routePath } = load('src/config/routes.ts');
  assert.deepEqual(globalRouting.locales, ['en', 'ar']);
  assert.equal(globalRouting.defaultLocale, 'en');
  assert.equal(globalRouting.localePrefix, 'always');
  assert.equal(isSupportedLocale('de'), false);
  assert.equal(markets.getDefaultMarket().id, 'north-america');
  for (const language of ['en', 'ar']) {
    assert.equal(isSupportedLocale(language), true);
    const route = routing.resolveMarketRoute('north-america', [language]);
    assert.equal(route.market.id, 'north-america');
    assert.equal(route.language, language);
    assert.equal(routing.getMarketLocalePath('north-america', language), `/${language}`);
    assert.equal(routePath.home(language), `/${language}`);
    assert.equal(routePath.login(language), `/${language}/login`);
    assert.equal(routePath.register(language), `/${language}/register`);
  }
  assert.throws(() => routing.getMarketLocalePath('north-america', 'de'), RangeError);
  assert.equal(load('src/lib/programme-francais/routes.ts').programmeFrancaisRoutes.home, '/fr/programme-francais');
  assert.equal(existsSync(new URL('../messages/de.json', import.meta.url)), false);
  assert.equal(existsSync(new URL('../messages/markets/germany', import.meta.url)), true);
});
