import Link from 'next/link';

import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

export default function FrenchNotFound() {
  return (
    <section
      className="
        flex
        min-h-[65vh]
        items-center
        bg-[#F8FAFC]
        py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-2xl
          px-4
          text-center
          sm:px-6
        "
      >
        <h1
          className="
            text-h1
            font-black
            text-[#0B1F3A]
          "
        >
          Page introuvable
        </h1>

        <p
          className="
            mt-5
            text-body
            leading-8
            text-[#64748B]
          "
        >
          La page demandée n’existe
          pas dans le Programme français.
        </p>

        <Link
          href={
            programmeFrancaisRoutes.home
          }
          className="
            mt-7
            inline-flex
            min-h-12
            items-center
            justify-center
            rounded-xl
            bg-[#0B1F3A]
            px-6
            py-3
            text-small
            font-black
            text-white
            hover:bg-[#123D68]
          "
        >
          Retour au Programme français
        </Link>
      </div>
    </section>
  );
}
