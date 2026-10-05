import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { RESTORATION_FAQS } from "@/lib/faq-data";
import EstimateCtaLink from "@/components/EstimateCtaLink";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Water Damage Restoration in Marietta, GA",
  description: "Water damage restoration in Marietta, Roswell and Canton, GA. We take emergency water damage jobs, plus storm and fire repair. Call (404) 369-7129.",
  openGraph: {
    title: "Water Damage Restoration in Marietta, GA | TopFlight Builders",
    description: "Water damage restoration in Marietta, Roswell and Canton, GA. We take emergency water damage jobs, plus storm and fire repair. Call (404) 369-7129.",
    images: [{ url: "https://topflightbuilders.net/images/storm-damage-restoration-fallen-tree-marietta-ga.jpg", width: 1200, height: 630, alt: "Storm damage restoration by TopFlight Builders in Marietta, GA" }],
  },
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
      {/* TODO(owner): add "structural drying" / "mold remediation" back only if the owner confirms TopFlight does that work in-house. */}
      <ServiceSchema
        serviceType="Water Damage Restoration"
        description="Emergency water damage restoration and repair in Marietta, Roswell, Canton and Greater Atlanta, plus storm and fire damage repair and full rebuild."
        url="https://topflightbuilders.net/services/restoration"
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Water Damage Restoration</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Water Damage Restoration in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">Burst pipe, leaking water heater, or water in the basement? We take emergency water damage jobs across Cobb, Cherokee and North Fulton, and we handle the repair and rebuild after. Storm and fire damage too.</p>
          {/* TODO(owner): if after-hours calls are forwarded or get a callback promise, say so here. No 24/7 or response-time claims until confirmed. */}
          <div data-section="restoration_hero" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4043697129" className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Call (404) 369-7129
            </a>
            <EstimateCtaLink source="restoration_hero" className="inline-block border-2 border-white/70 text-white hover:bg-white hover:text-[#0D1B2E] font-bold px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Request an Estimate
            </EstimateCtaLink>
          </div>
          <p className="text-gray-400 text-sm mt-5">Emergency water damage? Call. Talking to us directly is the fastest way to get help.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5 text-center">Water damage restoration and repair</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">Water damage restoration means stopping the source, getting wet materials out or dried, and rebuilding what the water ruined. That&apos;s drywall, subfloor, flooring, cabinets and trim. We handle water damage from burst and leaking pipes, failed supply lines, water heaters, appliance leaks, roof leaks, and basement water. Then we put the room back the way it was, or better.</p>
          {/* TODO(owner): add "Water extraction and structural drying" if done in-house; if a drying partner is used, say "We coordinate drying and handle the full rebuild." */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {["Emergency water damage response", "Damage assessment and photo documentation", "Wet drywall, insulation and flooring removal", "Subfloor and framing repair", "Drywall, paint and trim matched to the house", "Flooring and cabinet replacement"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#F7F8FA] rounded-xl p-5 border border-gray-100">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#F7F8FA] rounded-xl p-6 border border-gray-100 mb-10">
            <p className="font-sans font-bold text-[#0D1B2E] mb-2">First steps after water damage</p>
            <p className="text-gray-600 leading-relaxed">Shut off the water, take photos before you move anything, call your insurer, then call us. Not sure whether you need a pro? Read <Link href="/blog/water-damage-restoration-pro-vs-diy" className="text-[#1E4FBF] hover:underline font-semibold">water damage: when to call a pro vs. DIY</Link>.</p>
          </div>
          <div className="text-center">
            <EstimateCtaLink source="restoration_hub_cta" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Contact Us Now
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Storm and fallen tree damage repair</h2>
            <p className="text-gray-600 leading-relaxed">When a tree comes through the roof or a storm opens up the house, we stabilize it first, then rebuild: framing, roofing, siding and the finished interior. You can see some of those rebuilds below. For roof work on its own, see our <Link href="/services/roofing" className="text-[#1E4FBF] hover:underline font-semibold">roof repair and replacement</Link> page.</p>
          </div>
          <div>
            {/* TODO(owner): add "smoke odor" / "contents cleaning" wording only if confirmed. */}
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Fire and smoke damage repair</h2>
            <p className="text-gray-600 leading-relaxed">After a fire, we handle the structural repair and the full rebuild, and we work with your adjuster on scope.</p>
          </div>
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Working with your insurance company</h2>
            <p className="text-gray-600 leading-relaxed">We document damage with photos and a written scope and can talk to your adjuster directly. If we find more damage once walls are open, we stop, document it, and send a supplement.</p>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {restorationProjects.length > 0 && (
        <section className="py-16 px-6 bg-white">
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
