import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { RESTORATION_FAQS } from "@/lib/faq-data";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Storm, Water and Fire Restoration in Marietta GA | TopFlight Builders",
  description: "Storm, water, and fire restoration in Marietta and Canton, GA by TopFlight Builders. Fast response, expert crews, full rebuild. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/services/restoration",
  },
};

export default function RestorationPage() {
  const restorationProjects = getProjectsByService("restoration");

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Restoration", href: "/services/restoration" },
      ]} />
      <ServiceSchema
        serviceType="Storm, Water, and Fire Restoration"
        description="Storm, water, and fire damage restoration in Marietta and Canton, GA including emergency response, structural drying, mold remediation, and full rebuild."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Restoration</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Home Restoration Services in Atlanta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Expert restoration services for water damage, structural repairs, and full property recovery.</p>
        </div>
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

      <FAQSection faqs={RESTORATION_FAQS} />
      <ServiceAreaLinks matrixSlug="restoration" serviceName="Restoration" />
      <ServiceBlogLinks cat="restoration" heading="Restoration &amp; Damage Recovery Guides" />
      <ContactBanner />
    </>
  );
}
