import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import FAQSection from "@/components/FAQSection";
import { ACWORTH_FAQS } from "@/lib/faq-data";

export const metadata = {
  title: "Acworth GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and home remodeling in Acworth, GA by TopFlight Builders. Serving Lake Acworth and Lake Allatoona communities. Licensed, insured, 50+ reviews. (404) 369-7129.",
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/acworth-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Acworth", addressRegion: "GA" },
};

export default function AcworthPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Acworth, GA", href: "/service-areas/acworth-ga" },
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
            Acworth, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving The Lake City — Lake Acworth, Lake Allatoona, and Historic Downtown Acworth. Licensed, insured, 50+ reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Acworth &amp; Lake Communities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Acworth — known locally as &ldquo;The Lake City&rdquo; — is home to Lake Acworth and sits at the gateway to Lake Allatoona, giving it a character unlike anywhere else in Cobb County. The Historic Downtown Acworth district features bungalows and craftsman-style homes with architectural character worth preserving, while the Lake Acworth waterfront communities and Lake Allatoona-adjacent neighborhoods in the 30101 zip code often have older lakefront or lake-view homes that are due for renovation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cobb County School District serves most of Acworth (Allatoona High School zone), and the I-75 corridor has brought significant new development while still leaving the older core of the city with homes that need love. Waterfront and lake-adjacent homes often come with specific challenges — moisture management, aging systems, and unique site conditions — that TopFlight handles well.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Acworth
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Historic Downtown Acworth</li>
            <li>Lake Acworth waterfront communities</li>
            <li>Lake Allatoona-adjacent neighborhoods</li>
            <li>30101 and 30102 zip codes</li>
            <li>I-75 corridor new developments</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Acworth
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Acworth", href: "/services/kitchen-remodeling/acworth-ga" },
              { label: "Bathroom Remodeling in Acworth", href: "/services/bathroom-remodeling/acworth-ga" },
              { label: "Full Home Remodeling in Acworth", href: "/services/full-home-remodeling/acworth-ga" },
              { label: "Basement Finishing in Acworth", href: "/services/basement-finishing/acworth-ga" },
              { label: "Home Additions in Acworth", href: "/services/home-additions/acworth-ga" },
              { label: "Restoration in Acworth", href: "/services/restoration/acworth-ga" },
              { label: "Roofing in Acworth", href: "/services/roofing/acworth-ga" },
              { label: "Decks in Acworth", href: "/services/decks/acworth-ga" },
              { label: "Age in Place Remodeling in Acworth", href: "/services/age-in-place/acworth-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Acworth Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Acworth — check back soon or{" "}
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
            From Marietta: Take I-75 N approximately 20 miles to Acworth. Total drive time is typically 25–30 minutes depending on traffic. We serve Acworth regularly and schedule crews efficiently for the I-75 corridor.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Acworth
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in the Lake Acworth and Lake Allatoona communities?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — including the waterfront neighborhoods and lake-adjacent subdivisions in the 30101 and 30102 zip codes. We&rsquo;re comfortable with the unique considerations that come with lakefront properties.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you handle water damage in Acworth, especially from lake flooding?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Water intrusion and flood-related restoration is part of our core restoration service. We handle extraction, drying, mold remediation, and full rebuild.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                What&rsquo;s a typical project scope in Historic Downtown Acworth?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Older Acworth homes often need kitchen layout redesigns, updated plumbing and electrical alongside cosmetic renovations, and bathroom expansions. We enjoy working with the character of these older homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Acworth+GA&output=embed"
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
            Ready to Start Your Acworth Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We serve all of Acworth and the surrounding lake communities.
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

      <FAQSection faqs={ACWORTH_FAQS} />
      <ContactBanner />
    </>
  );
}
