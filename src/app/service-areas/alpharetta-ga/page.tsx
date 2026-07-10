import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import FAQSection from "@/components/FAQSection";
import { ALPHARETTA_FAQS } from "@/lib/faq-data";

export const metadata = {
  title: "Alpharetta GA Remodeling & Restoration Contractor",
  description:
    "Kitchen, bathroom, and high-end home remodeling in Alpharetta, GA by TopFlight Builders. Serving Avalon area and surrounding Fulton County communities. Licensed, insured. (404) 369-7129.",
  openGraph: {
    title: "Alpharetta GA Remodeling & Restoration Contractor | TopFlight Builders",
    description: "Kitchen, bathroom, and high-end home remodeling in Alpharetta, GA by TopFlight Builders. Serving Avalon area and surrounding Fulton County communities. Licensed, insured. (404) 369-7129.",
    images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: "Remodeling contractor in Alpharetta, GA — TopFlight Builders" }],
  },
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/alpharetta-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Alpharetta", addressRegion: "GA" },
};

export default function AlpharettaPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Alpharetta, GA", href: "/service-areas/alpharetta-ga" },
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
            Alpharetta, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Windward, Avalon, and Alpharetta&rsquo;s premier communities with high-end remodeling. Licensed, insured.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Alpharetta &amp; Fulton County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Alpharetta is one of the most prosperous markets in Metro Atlanta — home to a dense concentration of technology companies, corporate headquarters, and the professionals who work for them. Avalon, the mixed-use development that has become the anchor of Alpharetta&rsquo;s upscale identity, sets the design standard for the community. Downtown Alpharetta&rsquo;s Main Street, a revitalized historic core, draws residents who appreciate quality and craftsmanship.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Big Creek Greenway trail system and the Windward community — a large master-planned subdivision with established homes now ready for renovation — represent the outdoor lifestyle and established residential density that makes Alpharetta one of our best markets. Haynes Bridge Road and Webb Bridge Road corridors, along with Fulton County School District (Alpharetta High School and Milton High School zones), attract exactly the type of homeowner who expects a higher-end finish level. TopFlight is fully equipped to deliver — premium appliances, custom cabinetry, quartz or stone countertops, and the craftsmanship to match.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Alpharetta
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Windward master-planned community</li>
            <li>Avalon &amp; Downtown Alpharetta Main Street</li>
            <li>Big Creek Greenway area</li>
            <li>Haynes Bridge Rd &amp; Webb Bridge Rd corridors</li>
            <li>Alpharetta High &amp; Milton High school zones</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Alpharetta
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Alpharetta", href: "/services/kitchen-remodeling/alpharetta-ga" },
              { label: "Bathroom Remodeling in Alpharetta", href: "/services/bathroom-remodeling/alpharetta-ga" },
              { label: "Full Home Remodeling in Alpharetta", href: "/services/full-home-remodeling/alpharetta-ga" },
              { label: "Basement Finishing in Alpharetta", href: "/services/basement-finishing/alpharetta-ga" },
              { label: "Home Additions in Alpharetta", href: "/services/home-additions/alpharetta-ga" },
              { label: "Restoration in Alpharetta", href: "/services/restoration/alpharetta-ga" },
              { label: "Roofing in Alpharetta", href: "/services/roofing/alpharetta-ga" },
              { label: "Decks in Alpharetta", href: "/services/decks/alpharetta-ga" },
              { label: "Age in Place Remodeling in Alpharetta", href: "/services/age-in-place/alpharetta-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Alpharetta Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Alpharetta — check back soon or{" "}
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
            From Marietta: Take I-285 E to GA-400 N, then exit at Haynes Bridge or Windward Pkwy — approximately 28 miles, 35–40 minutes in normal traffic. We schedule Alpharetta jobs to avoid peak GA-400 congestion.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Alpharetta
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in Windward and other large Alpharetta subdivisions?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — Windward and similar large communities in Alpharetta are within our regular service area. Many of these homes were built in the 1990s and early 2000s and are excellent candidates for kitchen and bath renovations.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                What finish level do your Alpharetta projects typically involve?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Alpharetta clients generally want premium finishes — custom or semi-custom cabinetry, quartz or stone surfaces, upscale fixtures. We are fully equipped for that level and source from the same suppliers used by luxury builders.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you handle Fulton County permits for Alpharetta projects?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we manage all Fulton County permitting and work within the City of Alpharetta&rsquo;s requirements as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Alpharetta+GA&output=embed"
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
            Ready to Start Your Alpharetta Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We deliver premium remodeling throughout Alpharetta and Fulton County.
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

      <FAQSection faqs={ALPHARETTA_FAQS} />
      <ContactBanner />
    </>
  );
}
