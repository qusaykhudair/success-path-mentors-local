export default function ProgrammeFrancaisLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Chargement du Programme français"
    >
      <div
        className="
          min-h-[36rem]
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
            gap-7
            px-4
            sm:px-6
            lg:grid-cols-2
            lg:px-8
          "
        >
          <div
            className="
              h-[28rem]
              animate-pulse
              rounded-[1.5rem]
              bg-white
            "
          />

          <div
            className="
              h-[28rem]
              animate-pulse
              rounded-[1.5rem]
              bg-white
            "
          />
        </div>
      </div>
    </div>
  );
}
