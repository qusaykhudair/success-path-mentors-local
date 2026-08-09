export default function LocationsLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading locations"
    >
      <div
        className="min-h-[34rem] animate-pulse bg-[#071426]"
      />
      <div
        className="bg-[#F8FAFC] py-20"
      >
        <div
          className="mx-auto grid w-full max-w-[82rem] gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8"
        >
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="h-[18rem] animate-pulse rounded-[1.5rem] border border-[#E2E8F0] bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
