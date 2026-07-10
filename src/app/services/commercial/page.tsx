import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { COMMERCIAL_FAQS } from "@/lib/faq-data";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: "Commercial Construction and TI in Marietta GA",
  description: "Commercial construction and tenant improvements in Marietta and Canton, GA by TopFlight Builders. Office, retail, and investment properties. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/services/commercial",
  },
};

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Commercial", href: "/services/commercial" },
      ]} />
      <ServiceSchema
        serviceType="Commercial Construction and Tenant Improvements"
        description="Commercial construction and tenant improvements in Marietta and Canton, GA including office renovations, retail build-outs, and investment property upgrades."
      />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Commercial</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Commercial Renovation in Marietta, GA</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Professional build-outs and renovations for businesses across the Greater Atlanta area.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Commercial remodeling means renovating or building out commercial spaces — office environments, retail locations, investment properties, and multi-unit buildings — to meet operational, aesthetic, or code requirements. TopFlight Builders handles commercial projects throughout Greater Atlanta, from office renovations and retail build-outs to property management upgrades and investment property work, on time and within budget.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {["Office renovations & build-outs", "Retail space remodeling", "Property management projects", "Investment property renovations", "Multi-unit upgrades", "Commercial restoration"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#F7F8FA] rounded-xl p-5 border border-gray-100">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
            Request a Commercial Quote
          </Link>
        </div>
      </section>

      <FAQSection faqs={COMMERCIAL_FAQS} />
      <ServiceBlogLinks cat="fullhome" heading="Renovation Planning Guides" />
      <ContactBanner />
    </>
  );
}
