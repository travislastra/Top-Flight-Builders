import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";

export const metadata = {
  title: "Bathroom Remodeling Atlanta GA | TopFlight Builders",
  description: "Expert bathroom remodeling in Atlanta, GA. Custom showers, tile work, vanities, and full bath renovations. Serving Marietta, Duluth, Alpharetta. Call (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/bathroom-remodeling",
  },
};

export default function BathroomPage() {
  const bathroomProjects = getProjectsByService("bathroom");

  return (
    <>
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Bathroom Remodeling</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Bathroom Remodeling in Atlanta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Spa-inspired bathrooms with premium tile, custom showers, and expert craftsmanship.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Img src="/images/home-run-1.jpg" alt="Bathroom remodel" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/bathroom-chamblee-remodel.jpg" alt="Luxury shower" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">Bathrooms built to impress</h2>
            <p className="text-gray-600 leading-relaxed mb-4">From a simple refresh to a complete master bath overhaul, we design and build bathrooms that combine beauty with function. Every tile, every fixture, every finish is selected with care.</p>
            <ul className="space-y-3 mb-8">
              {["Custom shower & tub surrounds", "Frameless glass enclosures", "Tile floors & walls", "Vanity & storage design", "Premium fixture installation", "Lighting & ventilation upgrades"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Bathroom Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bathroomProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="inline-block border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
