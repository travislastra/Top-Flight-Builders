"use client";

import { useState } from "react";

const partners = [
  { name: "Home Depot",         domain: "homedepot.com" },
  { name: "Lowe's",             domain: "lowes.com" },
  { name: "Sherwin-Williams",   domain: "sherwin-williams.com" },
  { name: "Floor & Decor",      domain: "flooranddecor.com" },
  { name: "Ferguson",           domain: "ferguson.com" },
  { name: "Mohawk",             domain: "mohawkflooring.com" },
  { name: "MSI",                domain: "msisurfaces.com" },
  { name: "Daltile",            domain: "daltile.com" },
  { name: "Life Art Cabinetry", domain: "lifeartcabinetry.com" },
  { name: "ROC Cabinetry",      domain: "roccabinetry.com" },
  { name: "The Tile Shop",      domain: "tileshop.com" },
  { name: "Schluter Systems",   domain: "schluter.com" },
  { name: "Benjamin Moore",     domain: "benjaminmoore.com" },
];

function PartnerCard({ name, domain }: { name: string; domain: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#1E4FBF]/30 transition-all flex flex-col items-center justify-center gap-2 min-w-[140px] h-[88px]">
      {!imgFailed && (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          className="h-7 w-auto max-w-[100px] object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
      <span className={`font-sans font-bold text-[#0D1B2E] text-xs whitespace-nowrap ${!imgFailed ? "text-gray-500 font-normal" : ""}`}>
        {name}
      </span>
    </div>
  );
}

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

        <div className="marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.name}-${i}`} className="mx-4 shrink-0">
              <PartnerCard name={p.name} domain={p.domain} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
