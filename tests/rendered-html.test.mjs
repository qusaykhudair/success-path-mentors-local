import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const hasWorker = existsSync(workerUrl);

async function loadWorker() {
  const url = new URL(workerUrl.href);
  url.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(url.href)).default;
}

const runtimeEnv = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const runtimeContext = {
  waitUntil() {},
  passThroughOnException() {},
};

test("redirects the unlocalized root to the default locale", { skip: !hasWorker ? 'Cloudflare worker artifact dist/server/index.js not present' : false }, async () => {
  const worker = await loadWorker();

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    runtimeEnv,
    runtimeContext,
  );

  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location")).pathname, "/en");
});

for (const page of [
  {
    name: "English login",
    path: "/en/login",
    content: /Welcome back/i,
    direction: /<html[^>]+dir=["']ltr["']/i,
  },
  {
    name: "Arabic registration",
    path: "/ar/register",
    content: /أنشئ حساب الأسرة/i,
    direction: /<html[^>]+dir=["']rtl["']/i,
  },
]) {
  test(`renders ${page.name} with localized direction`, { skip: !hasWorker ? 'Cloudflare worker artifact dist/server/index.js not present' : false }, async () => {
    const worker = await loadWorker();
    const response = await worker.fetch(
      new Request(`http://localhost${page.path}`, {
        headers: { accept: "text/html" },
      }),
      runtimeEnv,
      runtimeContext,
    );

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, page.content);
    assert.match(html, page.direction);
  });
}

test("auth pages emit the no-index protection required for identity routes", { skip: !hasWorker ? 'Cloudflare worker artifact dist/server/index.js not present' : false }, async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request("http://localhost/en/login", {
      headers: { accept: "text/html" },
    }),
    runtimeEnv,
    runtimeContext,
  );

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(
    html,
    /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)[^>]*>/i,
  );
});
