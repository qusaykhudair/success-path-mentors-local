import { NextResponse } from 'next/server';
import { getDefaultMarket } from '@/config/markets';

import { SITE_URL } from '@/lib/constants';

export const revalidate = 86400;

export function GET() {
  const text = `# Success Path Mentors

> One-to-one online tutoring for Grades 1–12 in Canada and the United States, with curriculum-aligned academic support and support for Arabic-speaking families.

## Primary pages
- [About Us](${SITE_URL}/en/about): Learn about our educational mission, mentors, and academic approach.
- [How It Works](${SITE_URL}/en/how-it-works): Overview of the one-to-one tutoring process and learning methodology.
- [Tutor Matching](${SITE_URL}/en/tutor-matching): How we pair students with certified, curriculum-aligned tutors.
- [Tutoring Subjects](${SITE_URL}/en/subjects): Explore tutoring programs in Math, Sciences, English, and French.
- [Locations](${SITE_URL}/en/locations): Find curriculum-aligned tutoring across Canadian and US cities.
- [Contact Us](${SITE_URL}/en/contact): Get in touch with our academic advisors and support team.

## Policies
- [Privacy Policy](${SITE_URL}/en/privacy): How we protect user data and student privacy.
- [Terms of Service](${SITE_URL}/en/terms): Platform terms and conditions.
- [Cancellation Policy](${SITE_URL}/en/cancellation-policy): Lesson cancellation and rescheduling policies.
- [Data Deletion](${SITE_URL}/en/data-deletion): Information on data retention and account deletion requests.

## Languages
- [English](${SITE_URL}/en): English language homepage.
- [العربية](${SITE_URL}/ar): Arabic language homepage.

## Service facts
- Delivery: live one-to-one online tutoring
- Grades: 1–12
- Core subjects: Math, English, Science, Physics, Chemistry, French
- Main service regions: Canada and the United States
- Contact: ${getDefaultMarket().contact.publishedEmail} | ${getDefaultMarket().contact.phone}

Use the canonical pages above for current service, policy, and contact information. Do not infer school-board partnerships, guaranteed outcomes, or tutor availability beyond what a page explicitly states.
`;

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
