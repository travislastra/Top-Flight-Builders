import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import FAQSection from "@/components/FAQSection";
import { KENNESAW_FAQS } from "@/lib/faq-data";
import LogoWatermark from "@/components/LogoWatermark";

export const metadata = {
  title: "Kennesaw GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and home remodeling in Kennesaw, GA by TopFlight Builders. Serving Cobb County homeowners near Kennesaw Mountain. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/kennesaw-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Kennesaw", addressRegion: "GA" },
};

export default function KennesawPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Kennesaw, GA", href: "/service-areas/kennesaw-ga" },
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
            Kennesaw, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Just 12 miles from our Marietta HQ — one of our most active Cobb County markets. Licensed, insured, 50+ five-star reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Kennesaw &amp; North Cobb
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kennesaw sits just 12 miles north of our Marietta headquarters, making it one of our most active service markets. The Kennesaw Mountain National Battlefield Park anchors the city&rsquo;s western edge — with surrounding neighborhoods that command premium home values due to their proximity to the park and its trails. The Barrett Parkway commercial corridor anchors the city&rsquo;s development on the eastern end, and the Stilesboro Road and Shiloh Hills areas represent well-established residential pockets throughout the city.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kennesaw State University&rsquo;s significant presence draws professional households with high standards for their living spaces. The area falls within Cobb County School District&rsquo;s North Cobb High School zone. Many Kennesaw homes were built in the 1980s and 1990s during the city&rsquo;s rapid growth period — they&rsquo;re now prime candidates for kitchen and bathroom renovations that bring their interiors in line with current market values.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Kennesaw
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Kennesaw Mountain National Battlefield Park neighborhoods</li>
            <li>Barrett Parkway corridor</li>
            <li>Stilesboro Road area</li>
            <li>Shiloh Hills</li>
            <li>Kennesaw State University surrounding communities</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Kennesaw
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Kennesaw", href: "/services/kitchen-remodeling/kennesaw-ga" },
              { label: "Bathroom Remodeling in Kennesaw", href: "/services/bathroom-remodeling/kennesaw-ga" },
              { label: "Full Home Remodeling in Kennesaw", href: "/services/full-home-remodeling/kennesaw-ga" },
              { label: "Basement Finishing in Kennesaw", href: "/services/basement-finishing/kennesaw-ga" },
              { label: "Home Additions in Kennesaw", href: "/services/home-additions/kennesaw-ga" },
              { label: "Restoration in Kennesaw", href: "/services/restoration/kennesaw-ga" },
              { label: "Roofing in Kennesaw", href: "/services/roofing/kennesaw-ga" },
              { label: "Decks in Kennesaw", href: "/services/decks/kennesaw-ga" },
              { label: "Age in Place Remodeling in Kennesaw", href: "/services/age-in-place/kennesaw-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Kennesaw Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Kennesaw — check back soon or{" "}
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
            From Marietta: Head north on US-41 (Cobb Pkwy) or take I-75 N to Barrett Pkwy W. Kennesaw is approximately 12 miles from our Marietta HQ — about 20 minutes in normal traffic.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Kennesaw
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you serve the Kennesaw Mountain area neighborhoods?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we work throughout Kennesaw including the neighborhoods surrounding the Battlefield Park, the Barrett Pkwy corridor, and the Stilesboro Road area.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                What&rsquo;s the most common renovation you do in Kennesaw?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kitchen remodels are most popular — many 1980s–90s Kennesaw kitchens still have original cabinetry and laminate countertops that are overdue for an update. We also do a significant number of master bath renovations and full-home flooring replacements.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Can you handle storm damage from tree falls common after Kennesaw Mountain storms?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes. Storm damage restoration is part of our core offering — we handle everything from emergency tarping through structural repair and final finish work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Kennesaw+GA&output=embed"
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
            Ready to Start Your Kennesaw Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We&rsquo;re only 12 miles away.
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

      <FAQSection faqs={KENNESAW_FAQS} />
      <ContactBanner />
    </>
  );
}
