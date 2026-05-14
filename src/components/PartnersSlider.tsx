const partners = [
  { name: "Home Depot",         logo: "/images/partners/home-depot.png" },
  { name: "Lowe's",             logo: "/images/partners/lowes.png" },
  { name: "Sherwin-Williams",   logo: "/images/partners/sherwin-williams.png" },
  { name: "Floor & Decor",      logo: "/images/partners/floor-and-decor.png" },
  { name: "Ferguson",           logo: "/images/partners/ferguson.png" },
  { name: "Mohawk",             logo: "/images/partners/mohawk.png" },
  { name: "MSI",                logo: "/images/partners/msi.png" },
  { name: "Daltile",            logo: "/images/partners/daltile.png" },
  { name: "Life Art Cabinetry", logo: "/images/partners/lifeart.png" },
  { name: "ROC Cabinetry",      logo: "/images/partners/roc-cabinetry.png" },
  { name: "The Tile Shop",      logo: "/images/partners/the-tile-shop.png" },
  { name: "Schluter Systems",   logo: "/images/partners/schluter.png" },
  { name: "Benjamin Moore",     logo: "/images/partners/benjamin-moore.svg" },
];

const BASE = "/Top-Flight-Builders";

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

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track marquee-track--no-pause">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="mx-5 shrink-0 flex items-center justify-center bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#1E4FBF]/30 transition-all h-20 w-40"
            >
              <img
                src={`${BASE}${p.logo}`}
                alt={p.name}
                className="max-h-10 max-w-[120px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
