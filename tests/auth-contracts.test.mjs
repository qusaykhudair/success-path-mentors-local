import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const apiSource = await readFile(
  new URL("../src/features/auth/auth-api.ts", import.meta.url),
  "utf8",
);
const contractSource = await readFile(
  new URL("../src/features/auth/auth-contracts.ts", import.meta.url),
  "utf8",
);
const registrationSource = await readFile(
  new URL("../src/features/auth/registration-form.tsx", import.meta.url),
  "utf8",
);

test("frontend uses only the documented HTTPS API boundary", () => {
  assert.match(apiSource, /NEXT_PUBLIC_API_BASE_URL/);
  assert.match(apiSource, /\/api\/registrations/);
  assert.match(apiSource, /\/api\/auth\/login\/request/);
  assert.match(apiSource, /\/api\/auth\/login\/verify/);
  assert.match(apiSource, /\/api\/auth\/me/);
  assert.match(apiSource, /credentials:\s*["']include["']/);
  assert.doesNotMatch(apiSource, /prisma|mongoose|createConnection|DATABASE_URL/i);
});

test("registration preserves duplicate-safe and admin-assigned trial states", () => {
  assert.match(contractSource, /MATCH_VERIFICATION_REQUIRED/);
  assert.match(contractSource, /IDENTITY_LINK_REVIEW/);
  assert.match(contractSource, /WAITING_FOR_ASSIGNMENT/);
  assert.match(registrationSource, /noAutoBooking/);
});

test("business MIDs are absent from authentication request payloads", () => {
  const loginPayload = contractSource.match(
    /export interface LoginRequestPayload \{([\s\S]*?)\n\}/,
  );
  assert.ok(loginPayload);
  assert.doesNotMatch(loginPayload[1], /mid|family_id|student_id/i);
});
