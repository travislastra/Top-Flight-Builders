import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio | TopFlight Builders",
  description: "Browse TopFlight Builders' portfolio of kitchen, bathroom, and home remodeling projects across Greater Atlanta.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/portfolio",
  },
};

const BASE = "/Top-Flight-Builders";

const serviceLabel: Record<string, string> = {
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  "full-home": "Full Home",
  restoration: "Restoration",
  basements: "Basements & Additions",
  "age-in-place": "Age in Place",
};

const moreFromUsPreview = [
  "/images/projects/more-from-us/01.jpg",
  "/images/projects/more-from-us/03.jpg",
  "/images/projects/more-from-us/06.jpg",
  "/images/projects/more-from-us/09.jpg",
  "/images/projects/more-from-us/12.jpg",
  "/images/projects/more-from-us/15.jpg",
  "/images/projects/more-from-us/18.jpg",
  "/images/projects/more-from-us/21.jpg",
];

// Real projects first, then placeholders
const ordered = [...projects].reverse();

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Portfolio</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">A showcase of renovations we&apos;re proud to have delivered across Greater Atlanta.</p>
      </section>

      {/* All Projects */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ordered.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${BASE}${p.hero}`}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1E4FBF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {serviceLabel[p.service] ?? p.service}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-sans font-bold text-[#0D1B2E] mb-1 group-hover:text-[#1E4FBF] transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{p.location}</p>
                  <span className="text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More From Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">And More</p>
            <h2 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-4">More From Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A selection of additional work from our projects across Greater Atlanta — kitchens, bathrooms, additions, and everything in between.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {moreFromUsPreview.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <img
                  src={`${BASE}${src}`}
                  alt={`TopFlight Builders project photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/more-from-us"
              className="inline-flex items-center gap-2 bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
            >
              See All Photos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
