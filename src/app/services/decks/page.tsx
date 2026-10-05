import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { DECK_FAQS } from "@/lib/faq-data";
import EstimateCtaLink from "@/components/EstimateCtaLink";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Deck Builder in Marietta, GA",
  description: "Deck builder in Marietta, Roswell and Canton, GA. New decks and deck replacement, composite or pressure-treated, permitted and inspected. (404) 369-7129.",
  openGraph: {
    title: "Deck Builder in Marietta, GA | TopFlight Builders",
    description: "Deck builder in Marietta, Roswell and Canton, GA. New decks and deck replacement, composite or pressure-treated, permitted and inspected. (404) 369-7129.",
    // TODO(owner): replace with a real deck photo once the owner sends one.
    images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: "TopFlight Builders — deck builder and remodeling contractor in Marietta, GA" }],
  },
  alternates: {
    canonical: "https://topflightbuilders.net/services/decks",
  },
};

export default function DecksPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Decks", href: "/services/decks" },
      ]} />
      <ServiceSchema
        serviceType="Deck Building"
        description="Deck building and deck replacement in Marietta, Roswell, Canton and Greater Atlanta in composite or pressure-treated lumber, with permits and inspections."
        url="https://topflightbuilders.net/services/decks"
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Deck Builder</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Deck Builder in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">New decks and deck replacements across Cobb, Cherokee and North Fulton. Composite or pressure-treated, built to code with permits and inspections.</p>
          <div data-section="decks_hero" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4043697129" className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Call (404) 369-7129
            </a>
            <EstimateCtaLink source="decks_hero" className="inline-block border-2 border-white/70 text-white hover:bg-white hover:text-[#0D1B2E] font-bold px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Deck Estimate
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">
            We design and build decks, and we replace decks that have gone soft or unsafe. Every deck starts with proper footings and framing, then the decking, railing and stairs. We build with composite (Trex, TimberTech, Fiberon) or pressure-treated lumber, pull the permit, and get it inspected.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "New deck design and construction",
              "Full deck replacement and structural repair",
              "Composite decking (Trex, TimberTech, Fiberon)",
              "Pressure-treated lumber builds",
              "Pergolas and shade structures",
              "Cable, aluminum, and wood railing systems",
              "Built-in seating and planters",
              "Permit application and inspections included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#F7F8FA] rounded-xl p-5 border border-gray-100">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <EstimateCtaLink source="decks_hub_cta" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Deck Estimate
            </EstimateCtaLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Deck replacement or repair?</h2>
          <p className="text-gray-600 leading-relaxed">If your deck feels soft or bouncy, the framing underneath is usually the problem, not the boards. We check the ledger, joists and footings and tell you straight whether it can be repaired or needs replacing.</p>
        </div>
      </section>

      {/* TODO(owner): add a "Recent decks" projects section once the owner sends 4 to 8 finished-deck photos with town and year. */}
      <FAQSection faqs={DECK_FAQS} />
      <ServiceAreaLinks matrixSlug="decks" serviceName="Decks" />
      <ServiceBlogLinks cat="outdoor" heading="Outdoor Living Guides" />
      <ContactBanner />
    </>
  );
}
