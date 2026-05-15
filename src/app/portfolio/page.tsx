import Img from "@/components/Img";
import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Portfolio | TopFlight Builders",
  description: "Browse TopFlight Builders' portfolio of kitchen, bathroom, and home remodeling projects across Greater Atlanta.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/portfolio",
  },
};

const projects = [
  { image: "/images/home-run-1.jpg", title: "Master Bathroom Renovation", location: "Duluth, GA", tag: "Bathroom" },
  { image: "/images/bathroom-chamblee-remodel.jpg", title: "Luxury Shower Transformation", location: "Chamblee, GA", tag: "Bathroom" },
  { image: "/images/home-run-2.jpg", title: "Custom Kitchen Remodel", location: "Marietta, GA", tag: "Kitchen" },
  { image: "/images/portfolio-maggie.jpg", title: "Open-Concept Kitchen Renovation", location: "Atlanta, GA", tag: "Kitchen" },
  { image: "/images/portfolio-magi.jpg", title: "Modern Kitchen with Accent Wall", location: "Smyrna, GA", tag: "Kitchen" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Portfolio</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">A showcase of renovations we&apos;re proud to have delivered across Greater Atlanta.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1E4FBF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{p.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
            Start Your Project
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
