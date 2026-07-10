import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { ROOFING_FAQS } from "@/lib/faq-data";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Roofing Replacement & Repair in Marietta GA",
  description: "Roof replacement and storm damage repair in Marietta and Greater Atlanta, GA by TopFlight Builders. GAF and Owens Corning shingles, insurance claim support. Licensed, insured. Free estimate: (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/services/roofing",
  },
};

export default function RoofingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Roofing", href: "/services/roofing" },
      ]} />
      <ServiceSchema
        serviceType="Roofing Replacement and Repair"
        description="Roof replacement and storm damage repair in Marietta and Greater Atlanta, GA including GAF and Owens Corning shingles, ice and water shield, insurance claim documentation, and emergency tarping."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Roofing</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Roofing Replacement &amp; Repair in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Storm damage, aging roofs, and full replacements — we document, repair, and rebuild right.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">
            Roof replacement means removing a damaged or worn roof system — shingles, underlayment, and often decking — and installing new materials to protect the home&apos;s structure from water intrusion and weather damage. TopFlight Builders handles residential and commercial roof replacements throughout Greater Atlanta using GAF and Owens Corning architectural shingles, managing everything from insurance documentation to final inspection.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Full roof replacement (tear-off and install)",
              "Storm and hail damage repair",
              "Insurance claim documentation and adjuster coordination",
              "Emergency tarping and temporary weatherproofing",
              "Flat and low-slope membrane roofing",
              "Flashing replacement and chimney caps",
              "Gutter inspection and replacement",
              "Attic ventilation upgrades",
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
              Get a Free Roof Inspection
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={ROOFING_FAQS} />
      <ServiceAreaLinks matrixSlug="roofing" serviceName="Roofing" />
      <ServiceBlogLinks cat="roofing" heading="Roofing Guides &amp; Tips" />
      <ContactBanner />
    </>
  );
}
