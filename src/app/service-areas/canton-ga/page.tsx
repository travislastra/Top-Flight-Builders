import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import FAQSection from "@/components/FAQSection";
import { CANTON_FAQS } from "@/lib/faq-data";
import LogoWatermark from "@/components/LogoWatermark";

export const metadata = {
  title: "Canton GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and whole-home remodeling in Canton, GA by TopFlight Builders. Serving Cherokee County homeowners. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical:
      "https://travislastra.github.io/Top-Flight-Builders/service-areas/canton-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Canton", addressRegion: "GA" },
};

export default function CantonPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Canton, GA", href: "/service-areas/canton-ga" },
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
            Canton, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Cherokee County homeowners throughout Canton, Holly Springs, and Hickory Flat. Licensed, insured, 50+ five-star reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Canton &amp; Cherokee County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Canton is one of Cherokee County&rsquo;s fastest-growing cities and a market we&rsquo;ve expanded into significantly over the past several years. Downtown Canton&rsquo;s River Street district along the Etowah River anchors the historic core, while the surrounding Holly Springs and Hickory Flat communities in unincorporated Cherokee County represent the broader market that many Canton-area homeowners identify with as home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cherokee County School District serves this area — with schools like Sequoyah, Etowah, and Cherokee High Schools drawing families who invest heavily in their homes. The Canton Marketplace corridor has brought significant new development alongside established neighborhoods, and the mix of older and newer construction characterizes the area well. Many Canton homeowners purchased homes in the early 2000s that are now ready for their first serious kitchen or bathroom renovation — exactly the sweet spot TopFlight Builders is built for.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Canton
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Downtown Canton &amp; River Street district</li>
            <li>Holly Springs</li>
            <li>Hickory Flat</li>
            <li>Canton Marketplace corridor</li>
            <li>Unincorporated Cherokee County communities</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Canton
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Canton", href: "/services/kitchen-remodeling/canton-ga" },
              { label: "Bathroom Remodeling in Canton", href: "/services/bathroom-remodeling/canton-ga" },
              { label: "Full Home Remodeling in Canton", href: "/services/full-home-remodeling/canton-ga" },
              { label: "Basement Finishing in Canton", href: "/services/basement-finishing/canton-ga" },
              { label: "Home Additions in Canton", href: "/services/home-additions/canton-ga" },
              { label: "Restoration in Canton", href: "/services/restoration/canton-ga" },
              { label: "Roofing in Canton", href: "/services/roofing/canton-ga" },
              { label: "Decks in Canton", href: "/services/decks/canton-ga" },
              { label: "Age in Place Remodeling in Canton", href: "/services/age-in-place/canton-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Canton Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Canton — check back soon or{" "}
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
            From our Marietta HQ, Canton is approximately 35 miles north via I-575 N — typically a 40–45 minute drive depending on traffic. We schedule Canton jobs in the morning to avoid afternoon I-575 congestion.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Canton
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in the Holly Springs and Hickory Flat areas near Canton?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we serve all of Cherokee County including Holly Springs, Hickory Flat, and the unincorporated neighborhoods around Canton. If you&rsquo;re within the Cherokee County school district, you&rsquo;re in our service area.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you handle Cherokee County permits?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We pull all required permits through Cherokee County and coordinate inspections on your behalf.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Canton homes are a mix of older construction and new subdivisions. Can you handle both?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we regularly work on both older ranch and split-level homes from the 1980s–1990s and newer construction. The scope and approach differ, but our team handles both confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Canton+GA&output=embed"
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
            Ready to Start Your Canton Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We serve all of Cherokee County.
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

      <FAQSection faqs={CANTON_FAQS} />
      <ContactBanner />
    </>
  );
}
