import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { BASEMENTS_FAQS } from "@/lib/faq-data";
import EstimateCtaLink from "@/components/EstimateCtaLink";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Basements and Home Additions in Marietta GA",
  description: "Basement finishing and home additions in Marietta and Canton, GA by TopFlight Builders. Full build-out from framing to final finish. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
  openGraph: {
    title: "Basements and Home Additions in Marietta GA | TopFlight Builders",
    description: "Basement finishing and home additions in Marietta and Canton, GA by TopFlight Builders. Full build-out from framing to final finish. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
    images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: "TopFlight Builders — basement and home addition contractor in Marietta, GA" }],
  },
  alternates: {
    canonical: "https://topflightbuilders.net/services/basements-and-additions",
  },
};

export default function BasementsPage() {
  const basementProjects = getProjectsByService("basements");

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Basements & Additions", href: "/services/basements-and-additions" },
      ]} />
      <ServiceSchema
        serviceType="Basement Finishing and Home Additions"
        description="Basement finishing and home additions in Marietta and Canton, GA including framing, insulation, drywall, flooring, lighting, and full build-out."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Basements & Additions</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Basements &amp; Home Additions in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Expand your living space — finished basements, home additions, and new square footage built to match your home.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Img src="/images/projects/basement-east-cobb/basement-finishing-east-cobb-ga-05.jpg" alt="Finished basement" fill priority className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/projects/home-addition-atlanta/home-addition-atlanta-ga-13.jpg" alt="Home addition exterior" fill priority className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">More space, more value</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Basement finishing converts an unfinished basement into usable living space by adding insulation, framed walls, drywall, flooring, lighting, and often a bathroom or wet bar. Home additions expand the home&apos;s footprint with new framing, roofline, and finish work tied into the existing structure. TopFlight Builders handles both throughout Greater Atlanta — from permits and framing through flooring and final finishes, designed to flow with your existing home.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Basement finishing & build-out",
                "Home additions & room expansions",
                "Framing, insulation & drywall",
                "Flooring, lighting & trim",
                "Wet bars & entertainment spaces",
                "Permit coordination & inspections",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <EstimateCtaLink source="basements_hub_cta" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Estimate
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {basementProjects.length > 0 && (
        <section className="py-16 px-6 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Basement & Addition Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {basementProjects.map((project) => (
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

      <FAQSection faqs={BASEMENTS_FAQS} />
      <ServiceAreaLinks matrixSlug="basement-finishing" serviceName="Basement Finishing" />
      <ServiceAreaLinks matrixSlug="home-additions" serviceName="Home Additions" />
      <ServiceBlogLinks cat="basement" heading="Basement &amp; Addition Guides" />
      <ContactBanner />
    </>
  );
}
