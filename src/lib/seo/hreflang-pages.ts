import { approvedChemistryStrands } from '@/content/subjects/chemistry/chemistry-strands';
import { approvedEnglishStrands } from '@/content/subjects/english/english-strands';
import { approvedGeneralScienceStrands } from '@/content/subjects/general-science/general-science-strands';
import { publicMathPathways } from '@/content/subjects/math/math-pathways';
import { approvedPhysicsStrands } from '@/content/subjects/physics/physics-strands';

// Audited EN/AR content pairs. A routing entry alone is not translation evidence.
// Locations and the separate French program deliberately do not participate.
export const hreflangPagePaths = new Set([
  '',
  '/about',
  '/how-it-works',
  '/contact',
  '/tutor-matching',
  '/privacy',
  '/terms',
  '/cancellation-policy',
  '/data-deletion',
  '/subjects',
  '/subjects/math',
  '/subjects/english',
  '/subjects/general-science',
  '/subjects/chemistry',
  '/subjects/physics',
  ...publicMathPathways.map(({ slug }) => `/subjects/math/${slug}`),
  ...approvedEnglishStrands.map(({ slug }) => `/subjects/english/${slug}`),
  ...approvedGeneralScienceStrands.map(({ slug }) => `/subjects/general-science/${slug}`),
  ...approvedChemistryStrands.map(({ slug }) => `/subjects/chemistry/${slug}`),
  ...approvedPhysicsStrands.map(({ slug }) => `/subjects/physics/${slug}`),
]);
