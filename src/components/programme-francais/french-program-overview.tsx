import Link from 'next/link';

import {
  ArrowRight,
  BookOpenCheck,
  Check,
  GraduationCap,
  Layers3,
} from 'lucide-react';

import {
  ProgrammeFrancaisIcon,
} from '@/components/programme-francais/programme-francais-icon';
import {
  getProgrammeFrancaisBookingHref,
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';
import type {
  ProgrammeFrancaisOverview,
} from '@/types/programme-francais';

interface FrenchProgramOverviewProps {
  overview:
    ProgrammeFrancaisOverview;
}

export function FrenchProgramOverview({
  overview,
}: FrenchProgramOverviewProps) {
  return (
    <>
      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[#071426]
          py-16
          text-white
          sm:py-20
          lg:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-36
            -top-48
            -z-10
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-[#16C7C7]/22
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-56
            -start-36
            -z-10
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-[#4F89AB]/25
            blur-3xl
          "
        />

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[82rem]
            gap-12
            px-4
            sm:px-6
            lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.72fr)]
            lg:items-center
            lg:px-8
          "
        >
          <div>
            <p
              className="
                text-caption
                font-black
                uppercase
                tracking-[0.13em]
                text-[#67E8E5]
              "
            >
              Programme entièrement en français
            </p>

            <h1
              className="
                mt-5
                max-w-4xl
                text-h1
                font-black
                leading-[1.08]
                text-white
              "
            >
              Français et mathématiques
              enseignés en français
            </h1>

            <p
              className="
                mt-6
                max-w-3xl
                text-body
                leading-8
                text-white/74
                sm:text-lg
              "
            >
              Une carte curriculaire structurée
              de la 1re à la 12e année, avec
              domaines, sujets principaux,
              sous-sujets, compétences visées
              et activités pédagogiques.
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
              <Link
                href={
                  programmeFrancaisRoutes.subject(
                    'francais'
                  )
                }
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#16C7C7]
                  px-7
                  py-3.5
                  text-small
                  font-black
                  text-[#071426]
                  transition-[background-color,transform]
                  hover:-translate-y-0.5
                  hover:bg-[#2DD4D1]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                Explorer le français

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href={
                  programmeFrancaisRoutes.subject(
                    'mathematiques-en-francais'
                  )
                }
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-7
                  py-3.5
                  text-small
                  font-black
                  text-white
                  transition-[background-color,border-color,transform]
                  hover:-translate-y-0.5
                  hover:border-[#67E8E5]
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                Explorer les mathématiques

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          <div role="list"
            className="
              grid
              gap-3
              rounded-[1.75rem]
              border
              border-white/12
              bg-white/[0.07]
              p-5
              shadow-[0_26px_75px_rgba(0,0,0,0.25)]
              backdrop-blur-sm
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >
            <OverviewStat
              icon={BookOpenCheck}
              value={
                overview.totals
                  .subjectCount
                  .toLocaleString(
                    'fr-CA'
                  )
              }
              label="matières"
            />

            <OverviewStat
              icon={Layers3}
              value={
                overview.totals
                  .domainCount
                  .toLocaleString(
                    'fr-CA'
                  )
              }
              label="domaines curriculaires"
            />

            <OverviewStat
              icon={GraduationCap}
              value="1re–12e"
              label="années scolaires"
            />

            <OverviewStat
              icon={Check}
              value={
                overview.totals
                  .subtopicCount
                  .toLocaleString(
                    'fr-CA'
                  )
              }
              label="sous-sujets publics"
            />
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#F8FAFC]
          py-16
          sm:py-20
          lg:py-24
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
              Deux parcours complémentaires
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              Choisir la matière
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-[#64748B]
              "
            >
              Chaque matière possède sa
              propre page, ses domaines et
              ses pages curriculaires
              organisées par niveau.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-7
              lg:grid-cols-2
            "
          >
            {overview.subjects.map(
              (subject) => (
                <article
                  key={
                    subject.subject
                      .key
                  }
                  className="
                    flex
                    h-full
                    flex-col
                    rounded-[1.5rem]
                    border
                    border-[#DCE5EC]
                    bg-white
                    p-6
                    shadow-[0_16px_44px_rgba(7,20,38,0.06)]
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
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
                        bg-[#ECFEFD]
                        text-[#108686]
                        ring-1
                        ring-[#CFFAF8]
                      "
                    >
                      <ProgrammeFrancaisIcon
                        iconKey={
                          subject.subject
                            .iconKey
                        }
                        className="h-8 w-8"
                      />
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#CFFAF8]
                        bg-[#ECFEFD]
                        px-3
                        py-1.5
                        text-caption
                        font-black
                        text-[#126A6A]
                      "
                    >
                      {
                        subject.totals
                          .domainCount
                      }
                      {' '}
                      domaines
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      text-h3
                      font-black
                      text-[#0B1F3A]
                    "
                  >
                    {
                      subject.subject
                        .title
                    }
                  </h3>

                  <p
                    className="
                      mt-3
                      text-small
                      leading-7
                      text-[#64748B]
                    "
                  >
                    {
                      subject.subject
                        .description
                    }
                  </p>

                  <ul
                    className="
                      mt-5
                      grid
                      gap-2
                      sm:grid-cols-2
                    "
                  >
                    {subject.domains.map(
                      (domain) => (
                        <li
                          key={
                            domain.slug
                          }
                          className="
                            flex
                            items-start
                            gap-2.5
                            rounded-xl
                            border
                            border-[#E2E8F0]
                            bg-[#F8FAFC]
                            px-3
                            py-3
                            text-caption
                            font-bold
                            leading-5
                            text-[#475569]
                          "
                        >
                          <span
                            aria-hidden="true"
                            className="
                              mt-1.5
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#16C7C7]
                            "
                          />

                          {domain.title}
                        </li>
                      )
                    )}
                  </ul>

                  <Link
                    href={
                      programmeFrancaisRoutes.subject(
                        subject.subject
                          .key
                      )
                    }
                    className="
                      group
                      mt-auto
                      inline-flex
                      min-h-12
                      items-center
                      gap-2
                      pt-7
                      text-small
                      font-black
                      text-[#108686]
                    "
                  >
                    Ouvrir le parcours

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="
          bg-white
          py-16
          sm:py-20
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
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-start
            "
          >
            <div>
              <p
                className="
                  text-caption
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#108686]
                "
              >
                Structure pédagogique
              </p>

              <h2
                className="
                  mt-3
                  text-h2
                  font-black
                  text-[#0B1F3A]
                "
              >
                Une carte claire et exploitable
              </h2>

              <p
                className="
                  mt-4
                  text-body
                  leading-8
                  text-[#64748B]
                "
              >
                Chaque parcours présente une
                progression claire par niveau,
                avec les compétences et les
                activités utiles pour guider
                l’apprentissage.
              </p>
            </div>

            <ol
              className="
                grid
                gap-3
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >
              {[
                'Niveau',
                'Domaine',
                'Sujet principal',
                'Sous-sujet',
                'Compétence visée',
                'Activité pédagogique',
              ].map(
                (label, index) => (
                  <li
                    key={label}
                    className="
                      rounded-2xl
                      border
                      border-[#DCE5EC]
                      bg-[#F8FAFC]
                      p-5
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#0B1F3A]
                        text-caption
                        font-black
                        text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <strong
                      className="
                        mt-4
                        block
                        text-small
                        text-[#0B1F3A]
                      "
                    >
                      {label}
                    </strong>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#F8FAFC]
          py-16
          sm:py-20
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
          <div
            className="
              rounded-[1.75rem]
              bg-[linear-gradient(115deg,#071426_0%,#0B1F3A_58%,#108686_100%)]
              p-7
              text-white
              shadow-[0_22px_60px_rgba(7,20,38,0.16)]
              sm:p-10
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  text-caption
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#A4F4F1]
                "
              >
                Accompagnement personnalisé
              </p>

              <h2
                className="
                  mt-3
                  text-h2
                  font-black
                  text-white
                "
              >
                Choisir le bon point de départ
              </h2>

              <p
                className="
                  mt-4
                  text-body
                  leading-8
                  text-white/72
                "
              >
                Indiquez le niveau de l’élève,
                la matière et les objectifs.
                L’équipe pourra proposer un
                parcours et un enseignant
                adaptés.
              </p>
            </div>

            <a
              href={
                getProgrammeFrancaisBookingHref()
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                min-h-12
                shrink-0
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
                lg:mt-0
              "
            >
              Réserver un cours d’essai

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function OverviewStat({
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
      <p
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
      </p>

      <p
        className="
          mt-2
          text-h4
          font-black
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}
