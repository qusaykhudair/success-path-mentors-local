'use client';

import {
  useParams,
} from 'next/navigation';

export default function MathPageError({
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  const params =
    useParams<{
      locale?: string;
    }>();

  const isArabic =
    params.locale === 'ar';

  return (
    <div
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
            {isArabic
              ? 'تعذر تحميل صفحة الرياضيات'
              : 'The mathematics page could not load'}
          </h1>

          <p
            className="
              mt-4
              text-body
              leading-8
              text-[#475569]
            "
          >
            {isArabic
              ? 'حدث خطأ أثناء تجهيز بيانات المنهج. حاول إعادة تحميل القسم.'
              : 'An error occurred while preparing the curriculum data. Try loading the section again.'}
          </p>

          <button
            type="button"
            onClick={reset}
            className="
              mt-7
              min-h-12
              rounded-full
              bg-[#0B1F3A]
              px-7
              py-3
              text-small
              font-bold
              text-white
              transition-colors
              hover:bg-[#24475F]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#16C7C7]
              focus-visible:ring-offset-2
            "
          >
            {isArabic
              ? 'حاول مرة أخرى'
              : 'Try again'}
          </button>
        </div>
      </div>
    </div>
  );
}