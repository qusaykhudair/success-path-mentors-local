/**
 * Converts a string into a URL-safe, SEO-friendly slug.
 * Per docs/04 - SEO Strategy Specification.md URL rules: short, readable,
 * keyword-rich, never IDs or query strings.
 *
 * Example: slugify("Math Tutoring") -> "math-tutoring"
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
