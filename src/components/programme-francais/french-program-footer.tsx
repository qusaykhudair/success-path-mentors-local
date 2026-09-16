import Image from 'next/image';
import { getDefaultMarket } from '@/config/markets';
import Link from 'next/link';

import {
  ArrowUp,
  Mail,
  MessageCircle,
} from 'lucide-react';

import {
  getProgrammeFrancaisBookingHref,
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

export function FrenchProgramFooter() {
  const year =
    new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#071426]
        text-white
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          -end-36
          -top-40
          h-96
          w-96
          rounded-full
          bg-[#16C7C7]/14
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
          py-12
          sm:px-6
          md:grid-cols-2
          lg:grid-cols-[1.2fr_0.8fr_0.8fr]
          lg:px-8
        "
      >
        <section>
          <Link
            href={
              programmeFrancaisRoutes.home
            }
            className="
              inline-flex
              rounded-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#16C7C7]
            "
          >
            <Image
              src="/images/footer.png"
              alt="Success Path Mentors"
              width={180}
              height={53}
              className="
                h-14
                w-auto
                object-contain
              "
            />
          </Link>

          <p
            className="
              mt-5
              max-w-xl
              text-small
              leading-7
              text-white/70
            "
          >
            Programme d’accompagnement
            scolaire entièrement en français
            pour l’apprentissage du français
            et des mathématiques.
          </p>
        </section>

        <nav
          aria-label="Liens du Programme français"
        >
          <h2
            className="
              text-small
              font-black
              text-white
            "
          >
            Programme
          </h2>

          <ul
            className="
              mt-4
              grid
              gap-3
            "
          >
            <li>
              <Link
                href={
                  programmeFrancaisRoutes.subject(
                    'francais'
                  )
                }
                className="
                  text-small
                  text-white/68
                  transition-colors
                  hover:text-[#67E8E5]
                "
              >
                Français
              </Link>
            </li>

            <li>
              <Link
                href={
                  programmeFrancaisRoutes.subject(
                    'mathematiques-en-francais'
                  )
                }
                className="
                  text-small
                  text-white/68
                  transition-colors
                  hover:text-[#67E8E5]
                "
              >
                Mathématiques en français
              </Link>
            </li>

            <li>
              <Link
                href={
                  programmeFrancaisRoutes.mainSite
                }
                className="
                  text-small
                  text-white/68
                  transition-colors
                  hover:text-[#67E8E5]
                "
              >
                Site principal
              </Link>
            </li>
          </ul>
        </nav>

        <section>
          <h2
            className="
              text-small
              font-black
              text-white
            "
          >
            Nous contacter
          </h2>

          <div
            className="
              mt-4
              grid
              gap-3
            "
          >
            <a
              href={`mailto:${getDefaultMarket().contact.publishedEmail}`}
              className="
                inline-flex
                items-center
                gap-2
                text-small
                text-white/68
                transition-colors
                hover:text-[#67E8E5]
              "
            >
              <Mail
                aria-hidden="true"
                className="h-4 w-4"
              />

              {getDefaultMarket().contact.publishedEmail}
            </a>

            <a
              href={
                getProgrammeFrancaisBookingHref()
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-small
                text-white/68
                transition-colors
                hover:text-[#67E8E5]
              "
            >
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4"
              />

              Réserver un cours d’essai
            </a>
          </div>
        </section>
      </div>

      <div
        className="
          border-t
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[82rem]
            flex-col
            gap-3
            px-4
            py-5
            text-caption
            text-white/50
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
            lg:px-8
          "
        >
          <p>
            © {year} Success Path Mentors —
            Success Path Mentors.
          </p>

          <a
            href="#main-content"
            className="
              inline-flex
              items-center
              gap-2
              font-bold
              text-white/65
              hover:text-[#67E8E5]
            "
          >
            Retour en haut

            <ArrowUp
              aria-hidden="true"
              className="h-4 w-4"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
