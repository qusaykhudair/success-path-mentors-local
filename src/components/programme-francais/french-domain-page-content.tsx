import Link from 'next/link';

import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  GraduationCap,
} from 'lucide-react';

import {
  ProgrammeFrancaisIcon,
} from '@/components/programme-francais/programme-francais-icon';
import {
  getProgrammeFrancaisBookingHref,
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';
import type {
  ProgrammeFrancaisDomainCurriculum,
  ProgrammeFrancaisMainTopic,
  ProgrammeFrancaisSubjectDefinition,
} from '@/types/programme-francais';

interface FrenchDomainPageContentProps {
  subject:
    ProgrammeFrancaisSubjectDefinition;
  curriculum:
    ProgrammeFrancaisDomainCurriculum;
}

export function FrenchDomainPageContent({
  subject,
  curriculum,
}: FrenchDomainPageContentProps) {
  const niveaux =
    curriculum.niveaux.filter(
      (niveau) =>
        niveau.sujetsPrincipaux
          .length > 0
    );

  return (
    <>
      <div
        className="
          border-b
          border-[#DCE5EC]
          bg-white
        "
      >
        <nav
          aria-label="Fil d’Ariane"
          className="
            mx-auto
            flex
            min-h-12
            w-full
            max-w-[82rem]
            items-center
            gap-2
            overflow-x-auto
            px-4
            text-caption
            text-[#64748B]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:px-6
            lg:px-8
          "
        >
          <Link
            href={
              programmeFrancaisRoutes.home
            }
            className="
              shrink-0
              font-bold
              hover:text-[#108686]
            "
          >
            Programme français
          </Link>

          <ChevronRight
            aria-hidden="true"
            className="
              h-4
              w-4
              shrink-0
            "
          />

          <Link
            href={
              programmeFrancaisRoutes.subject(
                subject.key
              )
            }
            className="
              shrink-0
              font-bold
              hover:text-[#108686]
            "
          >
            {subject.title}
          </Link>

          <ChevronRight
            aria-hidden="true"
            className="
              h-4
              w-4
              shrink-0
            "
          />

          <span
            aria-current="page"
            className="
              shrink-0
              font-black
              text-[#0B1F3A]
            "
          >
            {curriculum.domaine.titre}
          </span>
        </nav>
      </div>

      <section
        className="
          relative
          overflow-hidden
          bg-[#071426]
          py-12
          text-white
          sm:py-16
          lg:py-18
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-32
            -top-44
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#16C7C7]/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-[82rem]
            gap-10
            px-4
            sm:px-6
            lg:grid-cols-[minmax(0,1fr)_23rem]
            lg:items-center
            lg:px-8
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#16C7C7]
                  text-[#071426]
                "
              >
                <ProgrammeFrancaisIcon
                  iconKey={
                    curriculum.domaine
                      .iconKey
                  }
                  className="h-8 w-8"
                />
              </span>

              <div>
                <p
                  className="
                    text-caption
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-[#67E8E5]
                  "
                >
                  Domaine curriculaire
                </p>

                <p
                  className="
                    mt-1
                    text-small
                    font-bold
                    text-white/55
                  "
                >
                  {subject.title}
                </p>
              </div>
            </div>

            <h1
              className="
                mt-6
                text-h1
                font-black
                leading-tight
                text-white
              "
            >
              {curriculum.domaine.titre}
            </h1>

            <p
              className="
                mt-5
                max-w-3xl
                text-body
                leading-8
                text-white/72
              "
            >
              {
                curriculum.domaine
                  .description
              }
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              <a
                href={
                  getProgrammeFrancaisBookingHref(
                    subject.title
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#16C7C7]
                  px-6
                  py-3
                  text-small
                  font-black
                  text-[#071426]
                  hover:bg-[#2DD4D1]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                Trouver un enseignant

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </a>

              <Link
                href={
                  programmeFrancaisRoutes.subject(
                    subject.key
                  )
                }
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-6
                  py-3
                  text-small
                  font-black
                  text-white
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Retour à {subject.shortTitle}
              </Link>
            </div>
          </div>

          <aside
            className="
              rounded-[1.5rem]
              border
              border-white/10
              bg-white/[0.06]
              p-5
              shadow-[0_22px_60px_rgba(0,0,0,0.24)]
              backdrop-blur-sm
            "
          >
            <div
              className="
                grid
                gap-3
                sm:grid-cols-3
                lg:grid-cols-1
              "
            >
              <DomainStat
                icon={GraduationCap}
                value={
                  niveaux.length
                    .toLocaleString(
                      'fr-CA'
                    )
                }
                label="niveaux disponibles"
              />

              <DomainStat
                icon={BookOpenCheck}
                value={
                  curriculum.metadata
                    .mainTopicPlacementCount
                    .toLocaleString(
                      'fr-CA'
                    )
                }
                label="sujets principaux"
              />

              <DomainStat
                icon={Check}
                value={
                  curriculum.metadata
                    .subtopicPlacementCount
                    .toLocaleString(
                      'fr-CA'
                    )
                }
                label="sous-sujets"
              />
            </div>

            <nav
              aria-label="Accès rapide aux niveaux"
              className="
                mt-5
                grid
                grid-cols-4
                gap-2
              "
            >
              {niveaux.map(
                (niveau) => (
                  <a
                    key={niveau.niveau}
                    href={
                      `#niveau-${niveau.niveau}`
                    }
                    className="
                      inline-flex
                      min-h-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#16C7C7]/35
                      bg-[#16C7C7]/10
                      px-2
                      py-2
                      text-caption
                      font-black
                      text-[#A4F4F1]
                      hover:bg-[#16C7C7]/20
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#16C7C7]
                    "
                  >
                    {niveau.niveau}
                  </a>
                )
              )}
            </nav>
          </aside>
        </div>
      </section>

      <section
        className="
          bg-[#F8FAFC]
          py-14
          sm:py-18
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[82rem]
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-caption
                font-black
                uppercase
                tracking-[0.12em]
                text-[#108686]
              "
            >
              Progression par niveau
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              Sujets, compétences et activités
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-[#64748B]
              "
            >
              Les répétitions entre niveaux
              sont conservées lorsqu’elles
              représentent une progression ou
              un approfondissement pédagogique.
            </p>
          </div>

          <div
            className="
              mt-10
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#DCE5EC]
              bg-white
              shadow-[0_16px_44px_rgba(7,20,38,0.06)]
            "
          >
            {niveaux.map(
              (niveau, index) => (
                <article
                  key={niveau.niveau}
                  id={
                    `niveau-${niveau.niveau}`
                  }
                  className={`
                    scroll-mt-24
                    p-5
                    sm:p-7
                    lg:grid
                    lg:grid-cols-[14rem_minmax(0,1fr)]
                    lg:gap-10
                    lg:p-9
                    ${
                      index > 0
                        ? 'border-t border-[#DCE5EC]'
                        : ''
                    }
                  `}
                >
                  <header
                    className="
                      mb-5
                      lg:sticky
                      lg:top-24
                      lg:mb-0
                      lg:self-start
                    "
                  >
                    <p
                      className="
                        text-caption
                        font-black
                        uppercase
                        tracking-[0.1em]
                        text-[#108686]
                      "
                    >
                      Niveau scolaire
                    </p>

                    <h3
                      className="
                        mt-2
                        text-[1.3rem]
                        font-black
                        leading-tight
                        text-[#0B1F3A]
                        sm:text-[1.5rem]
                      "
                    >
                      {niveau.label}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-caption
                        leading-6
                        text-[#64748B]
                      "
                    >
                      {
                        niveau.nombreSujetsPrincipaux
                      }
                      {' '}
                      sujets principaux ·
                      {' '}
                      {
                        niveau.nombreSousSujets
                      }
                      {' '}
                      sous-sujets
                    </p>
                  </header>

                  <div
                    className="
                      grid
                      gap-3
                    "
                  >
                    {niveau.sujetsPrincipaux.map(
                      (topic) => (
                        <TopicAccordion
                          key={topic.id}
                          topic={topic}
                        />
                      )
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function TopicAccordion({
  topic,
}: {
  topic:
    ProgrammeFrancaisMainTopic;
}) {
  return (
    <details
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#DCE5EC]
        bg-white
      "
    >
      <summary
        className="
          flex
          min-h-16
          cursor-pointer
          list-none
          items-center
          justify-between
          gap-4
          px-5
          py-4
          font-black
          text-[#0B1F3A]
          transition-colors
          hover:bg-[#F8FAFC]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-[#16C7C7]
          [&::-webkit-details-marker]:hidden
        "
      >
        <span
          className="
            flex
            min-w-0
            items-center
            gap-3
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#ECFEFD]
              text-[#108686]
            "
          >
            <ClipboardList
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.8}
            />
          </span>

          <span className="leading-6">
            {topic.titre}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className="
            h-5
            w-5
            shrink-0
            text-[#108686]
            transition-transform
            group-open:rotate-180
          "
        />
      </summary>

      <div
        className="
          border-t
          border-[#E7EDF2]
          bg-[#F8FAFC]
          p-4
          sm:p-5
        "
      >
        <div
          className="
            grid
            gap-4
          "
        >
          {topic.sousSujets.map(
            (subtopic) => (
              <article
                key={
                  `${topic.id}-${subtopic.id}-${subtopic.sourceRow}`
                }
                className="
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  p-4
                  sm:p-5
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <h4
                    className="
                      text-small
                      font-black
                      leading-6
                      text-[#0B1F3A]
                    "
                  >
                    {subtopic.titre}
                  </h4>

                  <span
                    className={`
                      shrink-0
                      self-start
                      rounded-full
                      px-3
                      py-1.5
                      text-[0.68rem]
                      font-black
                      ${
                        subtopic.statut ===
                        'observe'
                          ? 'bg-[#E8F5EE] text-[#166534]'
                          : 'bg-[#ECFEFD] text-[#126A6A]'
                      }
                    `}
                  >
                    {subtopic.statut ===
                    'observe'
                      ? 'Observé'
                      : 'Référentiel enrichi'}
                  </span>
                </div>

                <div
                  className="
                    mt-4
                    grid
                    gap-3
                    lg:grid-cols-2
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      p-4
                    "
                  >
                    <p
                      className="
                        flex
                        items-center
                        gap-2
                        text-caption
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-[#64748B]
                      "
                    >
                      <Check
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          text-[#108686]
                        "
                      />

                      Compétence visée
                    </p>

                    <p
                      className="
                        mt-2
                        text-small
                        leading-6
                        text-[#334155]
                      "
                    >
                      {
                        subtopic.competence
                      }
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      p-4
                    "
                  >
                    <p
                      className="
                        flex
                        items-center
                        gap-2
                        text-caption
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-[#64748B]
                      "
                    >
                      <BookOpenCheck
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          text-[#108686]
                        "
                      />

                      Activité pédagogique
                    </p>

                    <p
                      className="
                        mt-2
                        text-small
                        leading-6
                        text-[#334155]
                      "
                    >
                      {
                        subtopic.activite
                      }
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </details>
  );
}

function DomainStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BookOpenCheck;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-white/[0.05]
        p-4
      "
    >
      <dt
        className="
          flex
          items-center
          gap-2
          text-caption
          font-bold
          text-white/55
        "
      >
        <Icon
          aria-hidden="true"
          className="
            h-4
            w-4
            text-[#67E8E5]
          "
          strokeWidth={1.8}
        />

        {label}
      </dt>

      <dd
        className="
          mt-2
          text-h4
          font-black
          text-white
        "
      >
        {value}
      </dd>
    </div>
  );
}
