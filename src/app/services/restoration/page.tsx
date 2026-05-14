import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";

export const metadata = {
  title: "Home Restoration Services Atlanta GA | TopFlight Builders",
  description: "Water damage restoration, fire damage repair, and structural restoration in Atlanta, GA. Fast response, expert crews. Call TopFlight Builders at (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/restoration",
  },
};

export default function RestorationPage() {
  const restorationProjects = getProjectsByService("restoration");

  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Restoration</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Home Restoration Services in Atlanta, GA</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Expert restoration services for water damage, structural repairs, and full property recovery.</p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">When the unexpected happens, TopFlight Builders is here to help restore your property to its original condition — or better. We work quickly, efficiently, and with the same quality standards as our renovation projects.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {["Water damage restoration", "Fire & smoke damage repair", "Structural repairs", "Drywall & plaster restoration", "Flooring replacement", "Complete property recovery"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#F7F8FA] rounded-xl p-5 border border-gray-100">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {restorationProjects.length > 0 && (
        <section className="py-16 px-6 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Restoration Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restorationProjects.map((project) => (
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
      )}

      <ContactBanner />
    </>
  );
}
