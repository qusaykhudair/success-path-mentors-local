'use client';

import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

import {
  getProgrammeFrancaisBookingHref,
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

const navigation = [
  {
    label:
      'Programme',
    href:
      programmeFrancaisRoutes.home,
  },
  {
    label:
      'Français',
    href:
      programmeFrancaisRoutes.subject(
        'francais'
      ),
  },
  {
    label:
      'Mathématiques en français',
    href:
      programmeFrancaisRoutes.subject(
        'mathematiques-en-francais'
      ),
  },
];

export function FrenchProgramHeader() {
  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    const previous =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    function handleEscape(
      event: KeyboardEvent
    ) {
      if (
        event.key === 'Escape'
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previous;

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [mobileOpen]);

  const bookingHref =
    getProgrammeFrancaisBookingHref();

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[#DCE5EC]/80
        bg-white/92
        shadow-[0_6px_24px_rgba(7,20,38,0.05)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-16
          w-full
          max-w-[82rem]
          items-center
          justify-between
          gap-3
          px-4
          sm:px-6
          lg:min-h-20
          lg:px-8
        "
      >
        <Link
          href={
            programmeFrancaisRoutes.home
          }
          aria-label="Accueil du Programme français"
          className="
            inline-flex
            shrink-0
            items-center
            rounded-xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#16C7C7]
            focus-visible:ring-offset-2
          "
        >
          <Image
            src="/images/logo.png"
            alt="Mustafa Academy"
            width={160}
            height={47}
            priority
            sizes="(max-width: 1024px) 130px, 160px"
            className="
              h-8
              w-auto
              object-contain
              lg:h-9
            "
          />
        </Link>

        <nav
          aria-label="Navigation du Programme français"
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
        >
          {navigation.map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  inline-flex
                  min-h-11
                  items-center
                  rounded-xl
                  px-3
                  text-small
                  font-bold
                  text-[#475569]
                  transition-colors
                  hover:bg-[#F1F5F9]
                  hover:text-[#0B1F3A]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                "
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href={
              programmeFrancaisRoutes.mainSite
            }
            className="
              inline-flex
              min-h-11
              items-center
              rounded-xl
              px-3
              text-small
              font-bold
              text-[#475569]
              transition-colors
              hover:bg-[#F1F5F9]
              hover:text-[#0B1F3A]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#16C7C7]
            "
          >
            Site principal
          </Link>
        </nav>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#16C7C7]
              px-5
              py-2.5
              text-small
              font-black
              text-[#071426]
              transition-colors
              hover:bg-[#2DD4D1]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#108686]
              focus-visible:ring-offset-2
              sm:inline-flex
            "
          >
            Cours d’essai

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </a>

          <button
            type="button"
            onClick={() =>
              setMobileOpen(
                (current) =>
                  !current
              )
            }
            aria-expanded={
              mobileOpen
            }
            aria-controls="french-program-mobile-nav"
            aria-label={
              mobileOpen
                ? 'Fermer le menu'
                : 'Ouvrir le menu'
            }
            className="
              inline-flex
              min-h-11
              min-w-11
              items-center
              justify-center
              rounded-xl
              text-[#0B1F3A]
              transition-colors
              hover:bg-[#F1F5F9]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#16C7C7]
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X
                aria-hidden="true"
                className="h-5 w-5"
              />
            ) : (
              <Menu
                aria-hidden="true"
                className="h-5 w-5"
              />
            )}
          </button>
        </div>
      </div>

      <div
        aria-hidden={
          !mobileOpen
        }
        onClick={() =>
          setMobileOpen(false)
        }
        className={`
          fixed
          inset-0
          top-16
          z-30
          bg-[#071426]/45
          backdrop-blur-sm
          transition-opacity
          lg:hidden
          ${
            mobileOpen
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      <div
        id="french-program-mobile-nav"
        aria-hidden={
          !mobileOpen
        }
        inert={
          !mobileOpen
        }
        className={`
          fixed
          inset-x-0
          top-16
          z-40
          max-h-[calc(100dvh-4rem)]
          overflow-y-auto
          border-t
          border-[#DCE5EC]
          bg-white
          p-5
          shadow-[0_20px_55px_rgba(7,20,38,0.14)]
          transition-[transform,opacity]
          lg:hidden
          ${
            mobileOpen
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }
        `}
      >
        <nav
          aria-label="Navigation mobile du Programme français"
          className="
            grid
            gap-1
          "
        >
          {navigation.map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  flex
                  min-h-12
                  items-center
                  rounded-xl
                  px-4
                  text-body
                  font-bold
                  text-[#0B1F3A]
                  transition-colors
                  hover:bg-[#F1F5F9]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#16C7C7]
                "
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href={
              programmeFrancaisRoutes.mainSite
            }
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              flex
              min-h-12
              items-center
              rounded-xl
              px-4
              text-body
              font-bold
              text-[#0B1F3A]
              transition-colors
              hover:bg-[#F1F5F9]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#16C7C7]
            "
          >
            Site principal
          </Link>

          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              mt-3
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#16C7C7]
              px-5
              py-3
              text-small
              font-black
              text-[#071426]
              hover:bg-[#2DD4D1]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#108686]
            "
          >
            Réserver un cours d’essai

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
