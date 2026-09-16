import assert from "node:assert/strict";
import test from "node:test";
import axe from "axe-core";
import { JSDOM } from "jsdom";

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("a11y", `${process.pid}-${path}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  return response.text();
}

for (const path of ["/en/login", "/ar/register"]) {
  test(`${path} has no serious static accessibility violations`, async () => {
    const html = await render(path);
    const dom = new JSDOM(html, {
      runScripts: "outside-only",
      pretendToBeVisual: true,
      url: `http://localhost${path}`,
    });
    dom.window.eval(axe.source);
    const result = await dom.window.axe.run(dom.window.document, {
      rules: {
        "color-contrast": { enabled: false },
      },
    });
    const blocking = result.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    assert.equal(
      blocking.length,
      0,
      JSON.stringify(
        blocking.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.length })),
      ),
    );
  });
}
