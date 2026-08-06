export default function EnglishPageLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading English page"
    >
      <div
        className="
          min-h-[34rem]
          animate-pulse
          bg-[#071426]
        "
      />

      <div
        className="
          bg-[#F8FAFC]
          py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[82rem]
            gap-6
            px-4
            sm:grid-cols-2
            sm:px-6
            xl:grid-cols-3
            lg:px-8
          "
        >
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <div
              key={index}
              className="
                h-[17rem]
                animate-pulse
                rounded-[1.25rem]
                border
                border-[#E2E8F0]
                bg-white
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
