import Link from 'next/link';

import {
  ArrowRight,
  BookOpenCheck,
  ChevronRight,
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
  ProgrammeFrancaisSubjectOverview,
} from '@/types/programme-francais';

interface FrenchSubjectOverviewProps {
  overview:
    ProgrammeFrancaisSubjectOverview;
}

export function FrenchSubjectOverview({
  overview,
}: FrenchSubjectOverviewProps) {
  const subject =
    overview.subject;

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

          <span
            aria-current="page"
            className="
              shrink-0
              font-black
              text-[#0B1F3A]
            "
          >
            {subject.title}
          </span>
        </nav>
      </div>

      <section
        className="
          relative
          overflow-hidden
          bg-[#071426]
          py-14
          text-white
          sm:py-18
          lg:py-20
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-32
            -top-40
            h-[28rem]
            w-[28rem]
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
            lg:grid-cols-[minmax(0,1fr)_22rem]
            lg:items-center
            lg:px-8
          "
        >
          <div>
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
                  subject.iconKey
                }
                className="h-8 w-8"
              />
            </span>

            <p
              className="
                mt-6
                text-caption
                font-black
                uppercase
                tracking-[0.12em]
                text-[#67E8E5]
              "
            >
              Parcours du Programme français
            </p>

            <h1
              className="
                mt-3
                text-h1
                font-black
                leading-tight
                text-white
              "
            >
              {subject.title}
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
              {subject.description}
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <a
                href="#domaines"
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
                Explorer les domaines

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </a>

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
                Réserver un cours d’essai
              </a>
            </div>
          </div>

          <dl
            className="
              grid
              gap-3
              rounded-[1.5rem]
              border
              border-white/10
              bg-white/[0.06]
              p-5
              shadow-[0_22px_60px_rgba(0,0,0,0.24)]
            "
          >
            <SubjectStat
              icon={Layers3}
              value={
                overview.totals
                  .domainCount
                  .toLocaleString(
                    'fr-CA'
                  )
              }
              label="domaines"
            />

            <SubjectStat
              icon={BookOpenCheck}
              value={
                overview.totals
                  .subtopicCount
                  .toLocaleString(
                    'fr-CA'
                  )
              }
              label="sous-sujets"
            />

            <SubjectStat
              icon={GraduationCap}
              value="1re–12e"
              label="années couvertes"
            />
          </dl>
        </div>
      </section>

      <section
        id="domaines"
        className="
          scroll-mt-24
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
              Carte curriculaire
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              Domaines de {subject.shortTitle}
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-[#64748B]
              "
            >
              Ouvrez un domaine pour
              consulter les sujets principaux,
              les sous-sujets, les compétences
              et les activités par niveau.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {overview.domains.map(
              (domain) => (
                <Link
                  key={domain.slug}
                  href={
                    programmeFrancaisRoutes.domain(
                      subject.key,
                      domain.slug
                    )
                  }
                  className="
                    group
                    flex
                    min-h-[19rem]
                    flex-col
                    rounded-[1.4rem]
                    border
                    border-[#C9DDEA]
                    bg-white
                    p-5
                    shadow-[0_8px_28px_rgba(7,20,38,0.06)]
                    transition-[border-color,box-shadow,transform]
                    hover:-translate-y-1
                    hover:border-[#16C7C7]
                    hover:shadow-[0_18px_42px_rgba(7,20,38,0.10)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#16C7C7]
                    focus-visible:ring-offset-2
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-12
                        w-12
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
                          domain.iconKey
                        }
                        className="h-6 w-6"
                      />
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#ECFEFD]
                        px-3
                        py-1.5
                        text-[0.68rem]
                        font-black
                        text-[#126A6A]
                      "
                    >
                      {
                        domain.gradeLevels
                          .length
                      }
                      {' '}
                      niveaux
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[1.05rem]
                      font-black
                      leading-6
                      text-[#0B1F3A]
                    "
                  >
                    {domain.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-caption
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {domain.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-[#DCE5EC]
                        bg-[#F8FAFC]
                        px-2.5
                        py-1
                        text-[0.67rem]
                        font-bold
                        text-[#475569]
                      "
                    >
                      {
                        domain.mainTopicCount
                      }
                      {' '}
                      sujets principaux
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#DCE5EC]
                        bg-[#F8FAFC]
                        px-2.5
                        py-1
                        text-[0.67rem]
                        font-bold
                        text-[#475569]
                      "
                    >
                      {
                        domain.subtopicCount
                      }
                      {' '}
                      sous-sujets
                    </span>
                  </div>

                  <span
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-6
                      text-small
                      font-black
                      text-[#108686]
                    "
                  >
                    Ouvrir le domaine

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function SubjectStat({
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
