import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";

export const metadata = {
  title: "Kitchen Remodeling Atlanta GA | TopFlight Builders",
  description: "Custom kitchen remodeling in Atlanta, GA. Cabinets, countertops, layout redesign, and full renovation. Free estimates from Marietta's trusted contractors. Call (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/kitchen-remodeling",
  },
};

export default function KitchenPage() {
  const kitchenProjects = getProjectsByService("kitchen");

  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Kitchen Remodeling</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Kitchen Remodeling in Atlanta, GA</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Custom cabinetry, countertops, layout redesign — we build kitchens that work as beautifully as they look.</p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">A kitchen that fits your life</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Whether you want a sleek modern kitchen or a warm, traditional space, our team works with you from concept to completion. We handle everything — design, demolition, installation, and finish work.</p>
            <ul className="space-y-3 mb-8">
              {["Custom cabinetry & storage", "Granite, quartz & marble countertops", "Backsplash tile installation", "New flooring & lighting", "Appliance coordination", "Island & peninsula additions"].map((item) => (
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
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Img src="/images/home-run-2.jpg" alt="Kitchen remodel" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/portfolio-maggie.jpg" alt="Kitchen renovation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Kitchen Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitchenProjects.map((project) => (
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
