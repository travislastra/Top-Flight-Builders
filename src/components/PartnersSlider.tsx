const partners = [
  "Floor & Decor",
  "Ferguson Bath & Kitchen",
  "American Woodmark",
  "Caesarstone",
  "Kohler",
  "Moen",
  "Pella Windows",
  "Andersen Windows",
  "Delta Faucet",
  "Cambria",
  "Porcelanosa",
  "Emtek",
  "Daltile",
  "MS International",
  "Cabinet Depot",
  "Silestone",
  "Sherwin-Williams",
  "Benjamin Moore",
  "AJ Madison",
  "Bosch Appliances",
];

export default function PartnersSlider() {
  return (
    <section className="py-14 px-0 bg-[#F7F8FA] overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-2">
          Our Partners
        </p>
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#0D1B2E]">
          Our Procurement Partners
        </h2>
      </div>

      {/* Sliding banner */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex items-center justify-center mx-5 shrink-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#1E4FBF]/30 transition-all whitespace-nowrap">
                <span className="font-sans font-bold text-[#0D1B2E] text-sm">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
