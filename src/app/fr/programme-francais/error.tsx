'use client';

export default function ProgrammeFrancaisError({
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
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
        <div
          className="
            rounded-[1.75rem]
            border
            border-[#E2E8F0]
            bg-white
            p-8
            shadow-[0_14px_45px_rgba(7,20,38,0.08)]
            sm:p-10
          "
        >
          <h1
            className="
              text-h2
              font-black
              text-[#0B1F3A]
            "
          >
            Le programme n’a pas pu être chargé
          </h1>

          <p
            className="
              mt-4
              text-body
              leading-8
              text-[#64748B]
            "
          >
            Une erreur est survenue
            pendant la préparation de la
            carte curriculaire.
          </p>

          <button
            type="button"
            onClick={reset}
            className="
              mt-7
              min-h-12
              rounded-xl
              bg-[#0B1F3A]
              px-7
              py-3
              text-small
              font-black
              text-white
              hover:bg-[#123D68]
            "
          >
            Réessayer
          </button>
        </div>
      </div>
    </section>
  );
}
