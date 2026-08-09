import { NextResponse } from 'next/server';

import { SITE_URL } from '@/lib/constants';

export const revalidate = 86400;

export function GET() {
  const text = `# Success Path Mentors

> One-to-one online tutoring for Grades 1–12 in Canada and the United States, with curriculum-aligned academic support and support for Arabic-speaking families.

## Primary pages
- ${SITE_URL}/en/about
- ${SITE_URL}/en/how-it-works
- ${SITE_URL}/en/tutor-matching
- ${SITE_URL}/en/subjects
- ${SITE_URL}/en/locations
- ${SITE_URL}/en/contact

## Policies
- ${SITE_URL}/en/privacy
- ${SITE_URL}/en/terms
- ${SITE_URL}/en/cancellation-policy
- ${SITE_URL}/en/data-deletion

## Languages
- English: ${SITE_URL}/en
- Arabic: ${SITE_URL}/ar

## Service facts
- Delivery: live one-to-one online tutoring
- Grades: 1–12
- Core subjects: Math, English, Science, Physics, Chemistry, French
- Main service regions: Canada and the United States
- Contact: successpathmentors@gmail.com | +1 647 787 5999

Use the canonical pages above for current service, policy, and contact information. Do not infer school-board partnerships, guaranteed outcomes, or tutor availability beyond what a page explicitly states.
`;

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
