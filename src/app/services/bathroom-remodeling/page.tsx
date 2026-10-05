import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { BATHROOM_FAQS } from "@/lib/faq-data";
import EstimateCtaLink from "@/components/EstimateCtaLink";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import { SERVICES } from "@/lib/service-city-data";

export const metadata = {
  title: "Bathroom Remodel Contractor in Marietta, GA",
  description: "Bathroom remodeling and renovations in Marietta, Roswell and Canton, GA. Showers, tile, vanities and full primary baths. Free estimate: (404) 369-7129.",
  openGraph: {
    title: "Bathroom Remodel Contractor in Marietta, GA | TopFlight Builders",
    description: "Bathroom remodeling and renovations in Marietta, Roswell and Canton, GA. Showers, tile, vanities and full primary baths. Free estimate: (404) 369-7129.",
    images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: "Bathroom remodel with frameless glass shower by TopFlight Builders in Marietta, GA" }],
  },
  alternates: {
    canonical: "https://topflightbuilders.net/services/bathroom-remodeling",
  },
};

export default function BathroomPage() {
  const bathroomProjects = getProjectsByService("bathroom");
  const processSteps = SERVICES.find((s) => s.slug === "bathroom-remodeling")?.processSteps ?? [];

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      ]} />
      <ServiceSchema
        serviceType="Bathroom Remodeling"
        description="Bathroom remodeling and renovations in Marietta, Roswell, Canton and Greater Atlanta, including walk-in showers, frameless glass, tile, vanities and fixtures."
        url="https://topflightbuilders.net/services/bathroom-remodeling"
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Bathroom Remodeling</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Bathroom Remodeling Contractor in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">Bathroom remodels and renovations across Cobb, Cherokee and North Fulton. Walk-in showers, tile, vanities and full primary baths.</p>
          <div data-section="bath_hero" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4043697129" className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Call (404) 369-7129
            </a>
            <EstimateCtaLink source="bath_hero" className="inline-block border-2 border-white/70 text-white hover:bg-white hover:text-[#0D1B2E] font-bold px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Estimate
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Img src="/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg" alt="Bathroom remodel" fill priority className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/bathroom-remodel-custom-tile-shower-chamblee-ga.jpg" alt="Luxury shower" fill priority className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">Bathroom remodels and renovations</h2>
            {/* TODO(owner): add "One team runs the job from demo to final walkthrough" only if TopFlight manages the whole job in-house. */}
            <p className="text-gray-600 leading-relaxed mb-4">Bathroom remodeling means updating the shower, tub, tile, vanity, flooring and fixtures to make the room work better and look better. We handle everything from a tub-to-shower conversion to a full primary bath renovation with frameless glass and custom tile.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Looking for a specific area? See bathroom remodeling in <Link href="/services/bathroom-remodeling/east-cobb-ga" className="text-[#1E4FBF] hover:underline font-semibold">East Cobb</Link> and <Link href="/services/bathroom-remodeling/acworth-ga" className="text-[#1E4FBF] hover:underline font-semibold">Acworth</Link>.</p>
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
            <EstimateCtaLink source="bath_hub_cta" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Estimate
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            {/* TODO(owner): confirm the $12,000 to $45,000+ range (service-city-data.ts) before quoting a number here. */}
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">How much does a bathroom remodel cost?</h2>
            <p className="text-gray-600 leading-relaxed">It depends mostly on size, whether plumbing moves, and the tile and glass you pick. A cosmetic refresh and a full primary bath are very different jobs. Our <Link href="/blog/bathroom-remodel-cost-atlanta-2026" className="text-[#1E4FBF] hover:underline font-semibold">2026 bathroom remodel cost guide</Link> breaks it down for Marietta and Greater Atlanta, and we give you a written estimate after a walkthrough.</p>
          </div>
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Our bathroom remodel process</h2>
            <ol className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-3 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#1E4FBF] text-white font-bold flex items-center justify-center text-xs">{i + 1}</span>
                  <span className="text-gray-700 text-sm leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
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

      <FAQSection faqs={BATHROOM_FAQS} />
      <ServiceAreaLinks matrixSlug="bathroom-remodeling" serviceName="Bathroom Remodeling" />
      <ServiceBlogLinks cat="bathroom" heading="Bathroom Remodeling Guides" />
      <ContactBanner />
    </>
  );
}
