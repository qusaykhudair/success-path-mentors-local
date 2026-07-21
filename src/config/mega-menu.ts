/**
 * Structural content for the three required mega menus (Subjects,
 * Services, Locations). Per docs/24 - Navigation & Mega Menu
 * Specification.md, which specifies these exact column layouts and
 * item names — this is real, spec-defined site taxonomy (subject/
 * service/city names to link to), not fabricated business data.
 *
 * Slugs match the URL patterns in docs/04 - SEO Strategy
 * Specification.md (e.g. "subjects/math-tutoring"). Display text is
 * never stored here — only IDs/slugs — actual copy lives in
 * messages/*.json under `megaMenu.*`, per the translation rule in
 * Architecture.md.
 *
 * The linked detail pages (e.g. /subjects/math-tutoring) don't exist
 * yet — they're a later implementation phase. Linking to them now is
 * correct and expected: the docs' own SEO strategy calls for the full
 * site structure to exist in navigation/sitemap terms from day one.
 */

export type MegaMenuLink = { slug: string; nameKey: string };

// --- Subjects mega menu: 4 columns ---
export const popularSubjects: MegaMenuLink[] = [
  { slug: "math-tutoring", nameKey: "math" },
  { slug: "english-tutoring", nameKey: "english" },
  { slug: "french-tutoring", nameKey: "french" },
  { slug: "science-tutoring", nameKey: "science" },
];

export const advancedSubjects: MegaMenuLink[] = [
  { slug: "physics-tutoring", nameKey: "physics" },
  { slug: "chemistry-tutoring", nameKey: "chemistry" },
  { slug: "biology-tutoring", nameKey: "biology" },
  { slug: "history-tutoring", nameKey: "history" },
  { slug: "geography-tutoring", nameKey: "geography" },
];

// "Popular Resources" column links to blog categories (the closest
// existing/planned destination — docs/19 - Blog System Specification.md
// defines a Categories feature). No dedicated resource pages exist yet.
export const popularResources: { nameKey: string; href: string }[] = [
  { nameKey: "studyTips", href: "/blog" },
  { nameKey: "homeworkHelp", href: "/blog" },
  { nameKey: "examPreparation", href: "/blog" },
  { nameKey: "learningGuides", href: "/blog" },
];

// --- Services mega menu: single list + featured CTA ---
export const services: MegaMenuLink[] = [
  { slug: "private-tutoring", nameKey: "privateTutoring" },
  { slug: "online-tutoring", nameKey: "onlineTutoring" },
  { slug: "in-home-tutoring", nameKey: "inHomeTutoring" },
  { slug: "exam-preparation", nameKey: "examPreparationService" },
  { slug: "catch-up-assistance", nameKey: "catchUpAssistance" },
  { slug: "homework-support", nameKey: "homeworkSupport" },
  { slug: "summer-tutoring", nameKey: "summerTutoring" },
  { slug: "summer-school", nameKey: "summerSchool" },
];

// --- Locations mega menu: featured cities grid ---
export const featuredLocations: MegaMenuLink[] = [
  { slug: "toronto", nameKey: "toronto" },
  { slug: "montreal", nameKey: "montreal" },
  { slug: "ottawa", nameKey: "ottawa" },
  { slug: "vancouver", nameKey: "vancouver" },
  { slug: "calgary", nameKey: "calgary" },
  { slug: "laval", nameKey: "laval" },
];
