import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { DECK_FAQS } from "@/lib/faq-data";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Deck Building & Replacement in Marietta GA",
  description: "Deck building and replacement in Marietta and Greater Atlanta, GA by TopFlight Builders. Composite and pressure-treated decks, pergolas, and custom railings. Licensed, insured. Free estimate: (404) 369-7129.",
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
        serviceType="Deck Building and Replacement"
        description="Deck building and replacement in Marietta and Greater Atlanta, GA including composite decking, pressure-treated lumber, custom railings, pergolas, and structural repairs."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Decks</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Deck Building &amp; Replacement in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Composite and pressure-treated decks, custom railings, pergolas — built to code with full permitting and inspections.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">
            Deck construction and replacement means building or rebuilding an outdoor platform attached to the home — including concrete footings, framing, decking boards, railing, and stairs — to create usable outdoor living space. TopFlight Builders installs and replaces decks across Greater Atlanta using composite materials like Trex and TimberTech or pressure-treated lumber, with every project permitted and inspected from footings to railing.
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
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Deck Estimate
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={DECK_FAQS} />
      <ServiceAreaLinks matrixSlug="decks" serviceName="Decks" />
      <ServiceBlogLinks cat="restoration" heading="Exterior &amp; Outdoor Guides" />
      <ContactBanner />
    </>
  );
}
