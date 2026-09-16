import { EnrollmentCardController } from './enrollment-card-controller';
import type { EnrollmentCardProps } from './enrollment-types';
export type { EnrollmentPayload } from './enrollment-types';

/** Keep the visible card shell in the server component tree. */
export function EnrollmentCard({ copy, locale = 'en' }: EnrollmentCardProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 translate-y-4 rounded-[2rem] bg-gradient-to-br from-accent-300 to-primary-300 opacity-40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-2xl ring-1 ring-primary-900/5">
        <div className="bg-gradient-to-r from-primary to-accent-600 px-6 py-4 text-center">
          <p className="text-small font-bold text-white">{copy.title}</p>
        </div>
        <EnrollmentCardController copy={copy} locale={locale} />
      </div>
    </div>
  );
}