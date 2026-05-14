import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";

export const metadata = {
  title: "Full Home Remodeling Atlanta GA | TopFlight Builders",
  description: "Complete home renovations in Atlanta, GA. From design to finish — kitchens, bathrooms, additions, and whole-house remodels. Free estimates. Call (404) 369-7129.",
};

export default function FullHomePage() {
  const fullHomeProjects = getProjectsByService("full-home");

  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Full Home Remodeling</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Full Home Remodeling in Atlanta, GA</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Complete home renovations — cohesive design, seamless execution, stunning results.</p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">A full home remodel is the ultimate investment in your property and your lifestyle. Our team manages every phase — from initial design through final walkthrough — so you can enjoy the journey, not just the result.</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { step: "01", title: "Design Consultation", desc: "We meet, listen, and develop a plan that reflects your vision and budget." },
              { step: "02", title: "Project Execution", desc: "Our experienced crew handles every trade with precision and respect for your home." },
              { step: "03", title: "Final Walkthrough", desc: "We don't stop until every detail is perfect and you're completely satisfied." },
            ].map((s) => (
              <div key={s.step} className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100 text-center">
                <div className="font-sans text-3xl font-extrabold text-[#1E4FBF] mb-3">{s.step}</div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
            Start Your Renovation
          </Link>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Full Home Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullHomeProjects.map((project) => (
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
