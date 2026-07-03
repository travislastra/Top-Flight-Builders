import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { KITCHEN_FAQS } from "@/lib/faq-data";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Kitchen Remodeling in Marietta GA | TopFlight Builders",
  description: "Kitchen remodeling in Marietta and Canton, GA by TopFlight Builders. Custom cabinetry, countertops, and layout redesign. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/services/kitchen-remodeling",
  },
};

export default function KitchenPage() {
  const kitchenProjects = getProjectsByService("kitchen");

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      ]} />
      <ServiceSchema
        serviceType="Kitchen Remodeling"
        description="Full kitchen remodels in Marietta and Canton, GA including custom cabinetry, countertops, tile, flooring, lighting, and plumbing."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Kitchen Remodeling</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Kitchen Remodeling in Atlanta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Custom cabinetry, countertops, layout redesign — we build kitchens that work as beautifully as they look.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">A kitchen that fits your life</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Kitchen remodeling is the process of updating a kitchen&apos;s cabinetry, countertops, flooring, appliances, and layout to improve both function and appearance. TopFlight Builders handles complete kitchen remodels across Greater Atlanta — from custom cabinetry and quartz countertops through finish work and final punch-list. Whether you want a sleek modern kitchen or a warm, traditional space, our team works with you from concept to completion.</p>
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
              <Img src="/images/kitchen-remodel-dark-shaker-cabinets-marietta-ga.jpg" alt="Kitchen remodel" fill priority className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/kitchen-remodel-white-shaker-black-granite-atlanta-ga.jpg" alt="Kitchen remodel with white shaker cabinets and black granite" fill className="object-cover" />
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

      <FAQSection faqs={KITCHEN_FAQS} />
      <ServiceAreaLinks matrixSlug="kitchen-remodeling" serviceName="Kitchen Remodeling" />
      <ServiceBlogLinks cat="kitchen" heading="Kitchen Remodeling Guides" />
      <ContactBanner />
    </>
  );
}
