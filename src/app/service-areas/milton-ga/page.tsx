import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";

export const metadata = {
  title: "Milton GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and luxury home remodeling in Milton, GA by TopFlight Builders. Serving Crabapple and Birmingham Crossroads communities. Licensed, insured. (404) 369-7129.",
  alternates: {
    canonical:
      "https://travislastra.github.io/Top-Flight-Builders/service-areas/milton-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Milton", addressRegion: "GA" },
};

export default function MiltonPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Milton, GA", href: "/service-areas/milton-ga" },
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
            Milton, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Crabapple, Birmingham Crossroads, and Milton&rsquo;s premier equestrian and estate communities. Licensed, insured.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Milton &amp; Fulton County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Milton is one of the newest cities in Georgia — incorporated in 2006 — and is defined by a combination of spacious equestrian estates, large-lot single-family homes, and the vibrant Crabapple commercial district. Crabapple serves as Milton&rsquo;s downtown heart, home to local restaurants, the Crabapple Farmers Market, and boutiques that reflect the community&rsquo;s character.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Birmingham Crossroads in the northern part of Milton near the Cherokee County line represents the more rural, estate-style character of the city&rsquo;s upper end. The Deerfield/Windward area on Milton&rsquo;s south end borders Alpharetta and offers a different density profile. Milton High School (Fulton County School District, consistently one of the top-ranked high schools in Georgia) draws families who invest heavily in their homes. In the 30004 and 30009 zip codes, Milton&rsquo;s large, higher-value homes — many on 2+ acre lots — often require renovation scopes that go beyond a single room, including full kitchen transformations, primary suite renovations, and outdoor living additions.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Milton
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Crabapple district &amp; Crabapple Farmers Market area</li>
            <li>Birmingham Crossroads</li>
            <li>Deerfield/Windward area (south Milton)</li>
            <li>Milton High School zone</li>
            <li>30004 and 30009 zip codes</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Milton
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Milton Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Milton — check back soon or{" "}
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
            From Marietta: Take I-285 E to GA-400 N, continue north past Alpharetta to the Crabapple/Milton area — approximately 30 miles, 40 minutes in normal traffic. For Birmingham Crossroads, add another 5–10 minutes north.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Milton
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in the Crabapple area of Milton?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we serve all of Milton including the Crabapple district, Birmingham Crossroads, and the Deerfield area near the Alpharetta border.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                What&rsquo;s a typical project scope for a Milton home?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Milton homes tend to be larger and higher-value, so projects often encompass multiple rooms — a full kitchen and primary bath renovation, or a whole-home refresh. We&rsquo;re experienced managing these larger scopes efficiently.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you handle Fulton County permits for Milton projects?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — Milton is within Fulton County (though it has its own city government), and we manage all permitting and inspection coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Milton+GA&output=embed"
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
            Ready to Start Your Milton Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We serve all of Milton from Crabapple to Birmingham Crossroads.
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

      <ContactBanner />
    </>
  );
}
