import Link from "next/link";
import Img from "@/components/Img";

const projects = [
  {
    image: "/images/complete-home-remodel-duluth.jpg",
    title: "Master Bathroom Renovation",
    location: "Duluth, GA",
    tag: "Bathroom",
  },
  {
    image: "/images/bathroom-chamblee-remodel.jpg",
    title: "Luxury Shower Transformation",
    location: "Chamblee, GA",
    tag: "Bathroom",
  },
  {
    image: "/images/portfolio-kris.jpg",
    title: "Custom Kitchen Remodel",
    location: "Marietta, GA",
    tag: "Kitchen",
  },
  {
    image: "/images/portfolio-maggie.jpg",
    title: "Open-Concept Kitchen Renovation",
    location: "Atlanta, GA",
    tag: "Kitchen",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#0D1B2E] mb-4">
            Latest Projects
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A snapshot of recent renovations we&apos;re proud to have delivered for our Atlanta-area clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Img
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1E4FBF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-sans font-bold text-[#0D1B2E] text-sm mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{p.location}</p>
                <Link
                  href="/portfolio"
                  className="text-[#1E4FBF] font-semibold text-xs inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View Project
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Start Your Project
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
