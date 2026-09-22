import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

const frenchPage = readFileSync(
  `${root}src/app/[locale]/(catalog)/subjects/french/page.tsx`,
  'utf8'
);
const facebookPlan = readFileSync(
  `${root}reports/seo-phase-4/FACEBOOK-LINK-PLAN.md`,
  'utf8'
);
const reconciliation = readFileSync(
  `${root}reports/seo-phase-4/PHASE-4-POST-PHASE3-RECONCILIATION.md`,
  'utf8'
);

test('PHASE 4 FRENCH: active French owner receives shared local authority support', () => {
  assert.match(
    frenchPage,
    /LocalAvailabilityBlock/
  );
  assert.match(
    frenchPage,
    /subjectName="French"/
  );
  assert.match(
    frenchPage,
    /<SeoGapPageShell/
  );
});

test('PHASE 4 SOCIAL LINKS: Facebook plan uses current Phase 3 canonical owners', () => {
  assert.match(
    facebookPlan,
    /https:\/\/successpathmentors\.net\/en\/services\/exam-preparation/
  );
  assert.match(
    facebookPlan,
    /https:\/\/successpathmentors\.net\/en\/curriculum\/ontario/
  );
  assert.equal(
    facebookPlan.includes('https://successpathmentors.net/en/exam-preparation'),
    false
  );
  assert.equal(
    facebookPlan.includes('https://successpathmentors.net/en/locations/canada/ontario/curriculum'),
    false
  );
});

test('PHASE 4 RECONCILIATION: current owner map preserves geographic owners and records superseded decisions', () => {
  assert.match(reconciliation, /\/en\/locations\/canada\/ontario\/milton/);
  assert.match(reconciliation, /\/en\/locations\/canada\/ontario\/toronto/);
  assert.match(reconciliation, /\/en\/curriculum\/ontario/);
  assert.match(reconciliation, /\/en\/subjects\/french/);
  assert.match(reconciliation, /\/en\/services\/exam-preparation/);
  assert.match(reconciliation, /Phase 3 superseded the former HOLD decision/);
});
