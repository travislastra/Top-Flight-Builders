import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Services | TopFlight Builders",
  description: "Kitchen remodeling, bathroom renovations, full home remodeling, restoration, and basements & additions across Greater Atlanta. Free estimates. Call (404) 369-7129.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    desc: "Custom cabinetry, countertops, layout redesign, islands, and full kitchen transformations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M10 3v18M6 3v2m4-2v2m4-2v2M6 19v2m4-2v2m4-2v2" />
      </svg>
    ),
  },
  {
    title: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    desc: "Spa-inspired showers, frameless glass, custom tile work, vanities, and premium fixtures.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18v4a6 6 0 01-6 6H9a6 6 0 01-6-6v-4zm5-7v7M8 3a2 2 0 012-2h4a2 2 0 012 2v7" />
      </svg>
    ),
  },
  {
    title: "Full Home Remodeling",
    href: "/services/full-home-remodeling",
    desc: "Complete home renovations — cohesive design, coordinated trades, and flawless execution from start to finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Restoration",
    href: "/services/restoration",
    desc: "Water damage, fire damage, structural repairs, and full property recovery — fast response, expert crews.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Basements & Additions",
    href: "/services",
    desc: "Transform unused basement space or add square footage with a home addition — designed and built to match your home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Age in Place Remodeling",
    href: "/services/age-in-place",
    desc: "ADA-compliant modifications that let you stay in your home safely and independently — grab bars, zero-threshold showers, wider doorways, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Our Services</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">From single rooms to complete renovations — we handle every detail across Greater Atlanta.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#1E4FBF]/20 transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F7F8FA] text-[#1E4FBF] mb-5 group-hover:bg-[#1E4FBF] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h2 className="font-sans font-bold text-xl text-[#0D1B2E] mb-3 group-hover:text-[#1E4FBF] transition-colors">
                {s.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <span className="text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
