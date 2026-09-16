import {
  Award,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

import {
  frenchProgrammeExternalResources,
} from '@/content/programme-francais/external-resources';

interface FrenchReferenceResourcesProps {
  compact?: boolean;
}

export function FrenchReferenceResources({
  compact = false,
}: FrenchReferenceResourcesProps) {
  return (
    <section
      aria-labelledby="french-reference-resources-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8">
        <div
          className={
            compact
              ? 'max-w-3xl'
              : 'max-w-4xl'
          }
        >
          <p className="text-caption font-black uppercase tracking-[0.12em] text-[#108686]">
            Références externes
          </p>

          <h2
            id="french-reference-resources-title"
            className="mt-3 text-h2 font-black text-[#0B1F3A]"
          >
            Ressources sur le DELF et la compétence en français
          </h2>

          <p className="mt-4 text-body leading-8 text-[#64748B]">
            Consultez ces ressources de conseils scolaires pour mieux comprendre les évaluations de compétence en français et le DELF. Les critères, l’admissibilité et les dates peuvent varier selon le conseil scolaire et l’année.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {frenchProgrammeExternalResources.map(
            (resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[1.4rem] border border-[#C9DDEA] bg-[#F8FAFC] p-5 shadow-[0_8px_28px_rgba(7,20,38,0.05)] transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-[#16C7C7] hover:shadow-[0_16px_38px_rgba(7,20,38,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7] focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686] ring-1 ring-[#CFFAF8]">
                    <Award
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </span>

                  <ExternalLink
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#108686] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <h3 className="mt-5 text-[1.02rem] font-black leading-6 text-[#0B1F3A]">
                  {resource.name}
                </h3>

                <p className="mt-2 text-caption font-bold leading-6 text-[#108686]">
                  {resource.organization}
                </p>

                <p className="mt-3 text-caption leading-6 text-[#64748B]">
                  {resource.description}
                </p>
              </a>
            )
          )}
        </div>

        <p className="mt-6 flex items-start gap-3 rounded-xl border border-[#F1DCA5] bg-[#FFF8E8] px-4 py-3 text-caption leading-6 text-[#775A18]">
          <ShieldCheck
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0"
            strokeWidth={1.8}
          />
          Ces liens sont fournis à titre de référence. Vérifiez toujours les exigences actuelles auprès de l’école ou du conseil scolaire concerné.
        </p>
      </div>
    </section>
  );
}
