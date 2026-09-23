import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AuthorityLink {
  title: string;
  description: string;
  href: string;
}

type AuthorityContext =
  | 'math'
  | 'english'
  | 'general-science'
  | 'chemistry'
  | 'physics';

interface AuthorityDistributionLinksProps {
  locale: string;
  context: AuthorityContext;
}

const homeworkHelp: AuthorityLink = {
  title: 'Homework help for ongoing assignments',
  description:
    'Use the Homework Help service when the immediate goal is assignment guidance, concept clarification, and stronger study routines.',
  href: '/en/services/homework-help',
};

const examPreparation: AuthorityLink = {
  title: 'Exam preparation support',
  description:
    'Use the Exam Preparation service when the student needs structured review, exam-style practice, and test-taking strategy.',
  href: '/en/services/exam-preparation',
};

const generalScience: AuthorityLink = {
  title: 'Broader General Science support',
  description:
    'Return to the General Science hub when the student needs integrated science support rather than a single specialist subject.',
  href: '/en/subjects/general-science',
};

const linksByContext: Record<AuthorityContext, AuthorityLink[]> = {
  math: [homeworkHelp, examPreparation],
  english: [homeworkHelp, examPreparation],
  'general-science': [homeworkHelp, examPreparation],
  chemistry: [homeworkHelp, examPreparation, generalScience],
  physics: [homeworkHelp, examPreparation, generalScience],
};

export function AuthorityDistributionLinks({
  locale,
  context,
}: AuthorityDistributionLinksProps) {
  // The service owners below are currently English-only production routes.
  // Arabic pages keep their existing curriculum/local links and never point
  // users to an English-only service destination.
  if (locale !== 'en') {
    return null;
  }

  const links = linksByContext[context];

  return (
    <section
      aria-labelledby={`${context}-support-pathways`}
      className="border-t border-border/60 bg-muted/20 py-12 sm:py-14"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-caption font-bold uppercase tracking-wider text-accent-700">
            Choose the right support path
          </p>
          <h2
            id={`${context}-support-pathways`}
            className="mt-2 text-h2 font-bold text-foreground"
          >
            Continue to the service that matches the student&apos;s immediate goal
          </h2>
          <p className="mt-3 text-body leading-7 text-muted-foreground">
            Keep broad subject tutoring on this page. When the need becomes specifically about daily assignments or an upcoming assessment, use the dedicated service owner below.
          </p>
        </div>

        <div
          className={`mt-7 grid gap-4 ${
            links.length === 3
              ? 'md:grid-cols-3'
              : 'sm:grid-cols-2'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card"
            >
              <h3 className="text-body font-bold text-foreground group-hover:text-primary">
                {link.title}
              </h3>
              <p className="mt-2 text-small leading-6 text-muted-foreground">
                {link.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-small font-bold text-accent-700">
                View this support option
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
