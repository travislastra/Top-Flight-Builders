import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import FAQSection from "@/components/FAQSection";
import { WOODSTOCK_FAQS } from "@/lib/faq-data";

export const metadata = {
  title: "Woodstock GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and whole-home remodeling in Woodstock, GA by TopFlight Builders. Serving Cherokee County families. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical:
      "https://travislastra.github.io/Top-Flight-Builders/service-areas/woodstock-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Woodstock", addressRegion: "GA" },
};

export default function WoodstockPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Woodstock, GA", href: "/service-areas/woodstock-ga" },
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
            Woodstock, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serving Towne Lake, Eagle Watch, and Downtown Woodstock. Cherokee County&rsquo;s premier remodeling contractor. Licensed and insured.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Remodeling Contractors Serving Woodstock &amp; Cherokee County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Woodstock has undergone a remarkable transformation over the past decade — its revitalized Downtown Woodstock entertainment and dining district has made the city one of the most desirable in Cherokee County for young families. The &ldquo;New Downtown&rdquo; on Main Street, with its restaurants and boutiques, anchors a community that takes pride in quality and investment in their homes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Towne Lake, the large master-planned community in the 30189 zip code, features mid-2000s homes that are now hitting the 15–20 year mark — and kitchens and master bathrooms are consistently the first renovation these homeowners tackle. Eagle Watch, a golf course community with established homes, represents another strong market for renovation work. Rope Mill Park anchors the outdoor lifestyle that defines the community, and Cherokee County School District (Woodstock High and Etowah High zones) draws families who invest in their properties.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Woodstock
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Downtown Woodstock &amp; Main Street district</li>
            <li>Towne Lake (30189)</li>
            <li>Eagle Watch golf course community</li>
            <li>Rope Mill Park area</li>
            <li>Woodstock High &amp; Etowah High school zones</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Woodstock
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Woodstock", href: "/services/kitchen-remodeling/woodstock-ga" },
              { label: "Bathroom Remodeling in Woodstock", href: "/services/bathroom-remodeling/woodstock-ga" },
              { label: "Full Home Remodeling in Woodstock", href: "/services/full-home-remodeling/woodstock-ga" },
              { label: "Basement Finishing in Woodstock", href: "/services/basement-finishing/woodstock-ga" },
              { label: "Home Additions in Woodstock", href: "/services/home-additions/woodstock-ga" },
              { label: "Restoration in Woodstock", href: "/services/restoration/woodstock-ga" },
              { label: "Roofing in Woodstock", href: "/services/roofing/woodstock-ga" },
              { label: "Siding in Woodstock", href: "/services/siding/woodstock-ga" },
              { label: "Age in Place Remodeling in Woodstock", href: "/services/age-in-place/woodstock-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Woodstock Projects</h2>
          </div>
          <p className="text-gray-600">
            We&rsquo;re actively building our portfolio in Woodstock — check back soon or{" "}
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
            From Marietta: Take I-575 N approximately 22 miles to Woodstock. Typical drive time is 30 minutes. We schedule Woodstock jobs early morning to avoid the afternoon I-575 backup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — Woodstock
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you work in Towne Lake and Eagle Watch?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — we&rsquo;re very familiar with both communities. Towne Lake has a large concentration of mid-2000s homes ready for their first serious kitchen or bath renovation, and we&rsquo;ve completed work throughout that area.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                How do Cherokee County permits work for Woodstock projects?
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle all permitting through Cherokee County and the City of Woodstock, depending on your specific location. We manage the process start to finish.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Can you match new renovation work to my existing Woodstock home&rsquo;s style?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Always. We work within the existing architectural style of your home — whether that&rsquo;s the traditional look common in Towne Lake or something more contemporary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Woodstock+GA&output=embed"
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
            Ready to Start Your Woodstock Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We serve all of Cherokee County including Woodstock and Towne Lake.
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

      <FAQSection faqs={WOODSTOCK_FAQS} />
      <ContactBanner />
    </>
  );
}
