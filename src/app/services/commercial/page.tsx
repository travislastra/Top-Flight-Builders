import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Commercial Renovation Atlanta GA | TopFlight Builders",
  description: "Commercial remodeling and build-out services in Atlanta, GA. Office renovations, retail spaces, investment properties. Licensed & insured. Call (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/commercial",
  },
};

export default function CommercialPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Commercial</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Commercial Renovation in Atlanta, GA</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Professional build-outs and renovations for businesses across the Greater Atlanta area.</p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">From office renovations to retail build-outs and property management projects, TopFlight Builders delivers commercial-grade results on time and within budget.</p>
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

      <ContactBanner />
    </>
  );
}
