import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import FAQSection from "@/components/FAQSection";
import { ROSWELL_FAQS } from "@/lib/faq-data";

export const metadata = {
  title: "Roswell GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and whole-home remodeling in Roswell, GA by TopFlight Builders. Serving Historic Roswell and surrounding Fulton County communities. Licensed, insured. (404) 369-7129.",
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/roswell-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Roswell", addressRegion: "GA" },
};

export default function RoswellPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Roswell, GA", href: "/service-areas/roswell-ga" },
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
            Roswell, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Historic Roswell, Canton Street, Mountain Park, and surrounding Fulton County communities. Licensed and insured.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Roswell &amp; Fulton County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Roswell combines a genuinely historic character — with a downtown and mill village that dates to the 1830s — with some of the Atlanta area&rsquo;s most desirable newer neighborhoods. The Historic Roswell district and Canton Street anchor the city&rsquo;s social identity: Canton Street is one of North Atlanta&rsquo;s premier dining and entertainment destinations, surrounded by homes that homeowners take seriously.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vickery Creek and the Chattahoochee River corridor provide popular trail access and anchor some of the city&rsquo;s most sought-after neighborhoods. The Mountain Park community in the 30075 zip code and the Roswell High School and Centennial High School zones (Fulton County School District) draw families who invest in their properties. Roswell&rsquo;s historic homes present interesting renovation challenges — older plumbing and electrical systems, non-standard room dimensions — that require experienced contractors who can work with a home&rsquo;s existing character rather than against it. That&rsquo;s exactly what TopFlight does.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Roswell
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Historic Roswell district &amp; Canton Street area</li>
            <li>Vickery Creek &amp; Chattahoochee River corridor</li>
            <li>Mountain Park (30075)</li>
            <li>Roswell High &amp; Centennial High school zones</li>
            <li>Fulton County communities east of Roswell Rd</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Roswell
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Roswell", href: "/services/kitchen-remodeling/roswell-ga" },
              { label: "Bathroom Remodeling in Roswell", href: "/services/bathroom-remodeling/roswell-ga" },
              { label: "Full Home Remodeling in Roswell", href: "/services/full-home-remodeling/roswell-ga" },
              { label: "Basement Finishing in Roswell", href: "/services/basement-finishing/roswell-ga" },
              { label: "Home Additions in Roswell", href: "/services/home-additions/roswell-ga" },
              { label: "Restoration in Roswell", href: "/services/restoration/roswell-ga" },
              { label: "Roofing in Roswell", href: "/services/roofing/roswell-ga" },
              { label: "Decks in Roswell", href: "/services/decks/roswell-ga" },
              { label: "Age in Place Remodeling in Roswell", href: "/services/age-in-place/roswell-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Roswell Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Roswell — check back soon or{" "}
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
            From Marietta: Head east on GA-120 (Marietta Pkwy to Roswell Road) approximately 20 miles. Drive time is typically 25–35 minutes depending on traffic along the GA-120 corridor.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Roswell
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in Historic Roswell and the Canton Street area?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — including the older homes in and around the historic district. We have experience working with older construction, non-standard layouts, and the permit requirements that come with historic Roswell properties.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Can you work in Mountain Park?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — Mountain Park and the surrounding 30075 areas are within our regular service zone.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you pull permits through Fulton County and the City of Roswell?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes, we handle permitting for both Fulton County and City of Roswell projects depending on jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Roswell+GA&output=embed"
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
            Ready to Start Your Roswell Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We serve Historic Roswell, Mountain Park, and surrounding communities.
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

      <FAQSection faqs={ROSWELL_FAQS} />
      <ContactBanner />
    </>
  );
}
