import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import FAQSection from "@/components/FAQSection";
import { SMYRNA_FAQS } from "@/lib/faq-data";

export const metadata = {
  title: "Smyrna GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and whole-home remodeling in Smyrna, GA by TopFlight Builders. Serving Smyrna Village, Vinings, and Cumberland communities. Licensed, insured. (404) 369-7129.",
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/smyrna-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Smyrna", addressRegion: "GA" },
};

export default function SmyrnaPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Smyrna, GA", href: "/service-areas/smyrna-ga" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            Service Area
          </p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">
            Smyrna, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Smyrna Market Village, Vinings, and Cumberland — just 10 miles from our Marietta HQ. Licensed, insured.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Smyrna &amp; Vinings
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Smyrna sits at a prime location in Cobb County — close to the energy of The Battery Atlanta and Truist Park, accessible from I-285 and I-75, and home to a diverse range of homes from older bungalows in the historic Village area to newer townhomes near the Cumberland corridor. Smyrna Market Village, the downtown district with a village green and community events, anchors a community that values local character and investment in their homes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vinings — the upscale enclave on Smyrna&rsquo;s east side bordering the Chattahoochee River — represents one of Cobb County&rsquo;s most valuable residential markets. The Cumberland area and its proximity to The Battery Atlanta and Truist Park continues to appreciate rapidly. Silver Comet Trail runs through Smyrna and draws active homeowners who invest in their living spaces. Cobb County School District (Campbell High School zone for most of Smyrna) and the 30080 and 30082 zip codes make Smyrna one of the most rapidly appreciating markets in Cobb County — homeowners are investing in renovations to capture rising equity.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Smyrna
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Smyrna Market Village &amp; village green area</li>
            <li>Vinings (east Smyrna / Chattahoochee River)</li>
            <li>Cumberland corridor &amp; The Battery Atlanta area</li>
            <li>Silver Comet Trail neighborhoods</li>
            <li>30080 and 30082 zip codes</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Smyrna
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
              { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
              { label: "Full Home Remodeling", href: "/services/full-home-remodeling" },
              { label: "Basements &amp; Additions", href: "/services/basements-and-additions" },
              { label: "Restoration", href: "/services/restoration" },
              { label: "Age in Place", href: "/services/age-in-place" },
            ].map((s) => (
              <li key={s.href} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <Link href={s.href} className="text-[#1E4FBF] font-semibold hover:underline" dangerouslySetInnerHTML={{ __html: s.label }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Smyrna Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Smyrna — check back soon or{" "}
            <Link href="/portfolio" className="text-[#1E4FBF] font-semibold hover:underline">
              view our full portfolio
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-sans text-lg font-bold text-[#0D1B2E] mb-2">Getting There from Our Marietta HQ</h3>
          <p className="text-gray-600">
            From Marietta: Smyrna is approximately 10 miles south via I-285 W (toward Atlanta) or South Cobb Drive. Total drive time is 15–20 minutes — one of our closest markets outside of Marietta itself.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Smyrna
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you serve the Vinings area of Smyrna?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — including Vinings and the Smyrna neighborhoods adjacent to the Chattahoochee River. We serve all of the 30080 and 30082 zip codes.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                What renovations are most popular in Smyrna right now?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kitchen remodels and bathroom renovations are most common, often in older homes in the Market Village area that are being updated to reflect current market values. We also do a lot of full-home flooring replacements and interior refreshes.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                How quickly can you start a project in Smyrna?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Because Smyrna is just 10–15 minutes from our Marietta HQ, we can mobilize quickly and visit for an estimate at short notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Smyrna+GA&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0D1B2E] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Smyrna Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. Smyrna is one of our closest markets — we respond fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4043697129"
              className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
            >
              Call (404) 369-7129
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0D1B2E] font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={SMYRNA_FAQS} />
      <ContactBanner />
    </>
  );
}
