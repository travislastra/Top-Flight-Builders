import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { SIDING_FAQS } from "@/lib/faq-data";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Siding Replacement in Marietta GA | TopFlight Builders",
  description: "Siding replacement and installation in Marietta and Greater Atlanta, GA by TopFlight Builders. James Hardie fiber cement, LP SmartSide, and premium vinyl. Licensed, insured. Free estimate: (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/siding",
  },
};

export default function SidingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Siding", href: "/services/siding" },
      ]} />
      <ServiceSchema
        serviceType="Siding Replacement and Installation"
        description="Siding replacement and installation in Marietta and Greater Atlanta, GA including James Hardie fiber cement, LP SmartSide, premium vinyl, house wrap, and trim work."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Siding</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Siding Replacement in Atlanta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">James Hardie fiber cement, LP SmartSide, and premium vinyl — installed right with proper house wrap and trim work.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">
            Your siding is your home's primary moisture barrier. Failing siding doesn't just look bad — it allows water intrusion that rots framing and sheathing behind walls you can't see. TopFlight Builders installs James Hardie fiber cement board as our primary recommendation: it handles Atlanta's humidity, holds paint far longer than wood or vinyl, and carries a 30-year manufacturer warranty.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Full siding replacement (all materials)",
              "James Hardie fiber cement board",
              "LP SmartSide engineered wood",
              "Premium vinyl siding systems",
              "House wrap and moisture barrier installation",
              "Trim, corner boards, and window casing",
              "Wood rot repair behind existing siding",
              "Paint-ready finish and caulking",
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
              Get a Free Siding Estimate
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={SIDING_FAQS} />
      <ServiceAreaLinks matrixSlug="siding" serviceName="Siding" />
      <ServiceBlogLinks cat="restoration" heading="Exterior &amp; Restoration Guides" />
      <ContactBanner />
    </>
  );
}
