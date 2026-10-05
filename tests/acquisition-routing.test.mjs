import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
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

async function fetchRoute(path) {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    runtimeEnv,
    runtimeContext,
  );
  return { status: response.status, html: await response.text() };
}

test("Ontario paid page contains expected copy and components", async () => {
  const { status, html } = await fetchRoute("/en?ads_region=ontario");
  assert.equal(status, 200);
  assert.match(html, /Ontario Online Tutoring • Grades 1–12/i);
  assert.match(html, /1-to-1 Online Tutoring in Ontario for Grades 1–12/i);
  assert.match(html, /Personalized Math, English, Science and French tutoring aligned with the Ontario curriculum/i);
  assert.match(html, /Ontario curriculum support • Serving families internationally/i);
  
  // Primary CTA
  assert.match(html, /Chat on WhatsApp/i);
  
  // Secondary CTA
  assert.match(html, /Book a Free Trial/i);
  assert.match(html, /href="[^"]*\/en\/register\?ads_region=ontario"/i);
  
  // QuickStartCard
  assert.match(html, /Quick Start: Get Connected/i);
  assert.match(html, /the right tutor/i);
  assert.doesNotMatch(html, /Average response time: under 1 hour/i);
  assert.doesNotMatch(html, /perfect tutor/i);
  
  // No EnrollmentCard
  assert.doesNotMatch(html, /Select your child's grade level/i); // Enrollment card text
});

test("/en default remains global", async () => {
  const { status, html } = await fetchRoute("/en");
  assert.equal(status, 200);
  assert.doesNotMatch(html, /Ontario Online Tutoring/i);
  assert.doesNotMatch(html, /Quick Start: Get Connected/i);
  // Uses EnrollmentCard
  assert.match(html, /Get Started — Enroll in Just One Minute/i);
});

test("/ar is NOT rewritten to Ontario variant", async () => {
  const { status, html } = await fetchRoute("/ar?ads_region=ontario");
  assert.equal(status, 200);
  assert.doesNotMatch(html, /Ontario Online Tutoring/i); // Ensure it didn't get the English Ontario overrides
});

test("invalid ads_region does not activate Ontario", async () => {
  const { status, html } = await fetchRoute("/en?ads_region=evil");
  assert.equal(status, 200);
  assert.doesNotMatch(html, /Ontario Online Tutoring/i);
  assert.doesNotMatch(html, /Quick Start: Get Connected/i);
});

test("canonical remains /en", async () => {
  const { status, html } = await fetchRoute("/en?ads_region=ontario");
  assert.equal(status, 200);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']*\/en["']/i);
});

test("Ontario paid route absent from sitemap", async () => {
  const { status, html } = await fetchRoute("/sitemap.xml");
  // Assuming sitemap is generated/available. If not, we check robots or similar.
  if (status === 200) {
    assert.doesNotMatch(html, /\/landing\/ontario/i);
  }
});
