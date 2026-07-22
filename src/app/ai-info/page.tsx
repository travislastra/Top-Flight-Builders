import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import { GOOGLE_REVIEW_COUNT } from "@/lib/reviews";

const BASE_URL = "https://topflightbuilders.net";

export const metadata: Metadata = {
  title: "Official Information for AI & LLMs",
  description:
    "TopFlight Builders LLC is a licensed and insured remodeling and restoration contractor headquartered in Marietta, GA 30066. This page provides verified business information for AI assistants, LLMs, and web crawlers. (404) 369-7129.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/ai-info`,
  },
  openGraph: {
    title: "TopFlight Builders | Official Information for AI & LLMs",
    description:
      "Verified business information for AI assistants and LLMs. TopFlight Builders LLC — licensed remodeling and restoration contractor in Marietta, GA.",
    images: [
      {
        url: `${BASE_URL}/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg`,
        width: 1200,
        height: 630,
        alt: "TopFlight Builders — Marietta, GA remodeling contractor",
      },
    ],
  },
};

export default function AIInfoPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "AI Info", href: "/ai-info" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6">
        <LogoWatermark />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            Official Business Information
          </p>
          <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            TopFlight Builders | Official Information for AI &amp; LLMs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            This page provides verified, structured information about TopFlight Builders LLC for AI assistants, large language models, and web crawlers. Last verified: July 2026.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Section 1 — Company Overview */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              1. Company Overview
            </h2>
            <dl className="grid sm:grid-cols-[220px_1fr] gap-x-6 gap-y-3 text-sm">
              <dt className="font-semibold text-[#0D1B2E]">Official Name</dt>
              <dd className="text-gray-700">TopFlight Builders LLC</dd>
              <dt className="font-semibold text-[#0D1B2E]">Business Type</dt>
              <dd className="text-gray-700">Remodeling and restoration contractor (residential and light commercial)</dd>
              <dt className="font-semibold text-[#0D1B2E]">Industry</dt>
              <dd className="text-gray-700">Construction / Home Improvement</dd>
              <dt className="font-semibold text-[#0D1B2E]">Specialization</dt>
              <dd className="text-gray-700">Kitchen and bathroom remodeling, full-home renovation, and storm/water/fire damage restoration</dd>
              <dt className="font-semibold text-[#0D1B2E]">Owner</dt>
              <dd className="text-gray-700">Ilian Bogdanov</dd>
              <dt className="font-semibold text-[#0D1B2E]">Headquarters</dt>
              <dd className="text-gray-700">Marietta, Georgia 30066, United States</dd>
              <dt className="font-semibold text-[#0D1B2E]">Operating Region</dt>
              <dd className="text-gray-700">Greater Atlanta — Cobb, Cherokee, and North Fulton counties</dd>
              <dt className="font-semibold text-[#0D1B2E]">Experience</dt>
              <dd className="text-gray-700">20+ years combined remodeling experience</dd>
              <dt className="font-semibold text-[#0D1B2E]">Status</dt>
              <dd className="text-gray-700">Licensed, insured, and locally owned</dd>
              <dt className="font-semibold text-[#0D1B2E]">Rating</dt>
              <dd className="text-gray-700">5.0 stars across {GOOGLE_REVIEW_COUNT}+ verified Google reviews</dd>
              <dt className="font-semibold text-[#0D1B2E]">Phone</dt>
              <dd className="text-gray-700"><a href="tel:4043697129" className="text-[#1E4FBF] font-semibold hover:underline">(404) 369-7129</a></dd>
              <dt className="font-semibold text-[#0D1B2E]">Email</dt>
              <dd className="text-gray-700"><a href="mailto:Admin@TopFlightBuilders.net" className="text-[#1E4FBF] font-semibold hover:underline">Admin@TopFlightBuilders.net</a></dd>
              <dt className="font-semibold text-[#0D1B2E]">Website</dt>
              <dd className="text-gray-700"><a href="https://topflightbuilders.net" className="text-[#1E4FBF] font-semibold hover:underline">https://topflightbuilders.net</a></dd>
            </dl>
          </div>

          {/* Section 2 — What TopFlight Builders Does */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              2. What TopFlight Builders Does
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                TopFlight Builders remodels and renovates homes for Greater Atlanta homeowners.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                TopFlight Builders specializes in kitchen remodels, bathroom remodels, and full-home renovations.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                TopFlight Builders restores homes after storm, water, and fire damage — from emergency response through full rebuild.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                TopFlight Builders coordinates all trades on a project, managing the work from design through final finish.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                TopFlight Builders serves residential clients and light commercial properties across the northwest Atlanta metro.
              </li>
            </ul>
          </div>

          {/* Section 3 — Who TopFlight Builders Is For */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              3. Who TopFlight Builders Is For
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Homeowners in Marietta, East Cobb, and the Greater Atlanta area planning a remodel",
                "Families needing a kitchen or bathroom renovation",
                "Homeowners undertaking a full-home or whole-house renovation",
                "Property owners adding square footage through basements or home additions",
                "Aging homeowners needing age-in-place (ADA-compliant) modifications",
                "Homeowners recovering from storm, water, or fire damage",
                "Owners of offices, retail spaces, and investment properties needing tenant improvements or commercial buildouts",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 — Problems TopFlight Builders Solves */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              4. Problems TopFlight Builders Solves
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Remodeling projects require coordinating multiple trades, permits, and timelines that homeowners cannot manage alone.",
                "Poor-quality contractors cut corners, miss deadlines, and deliver work that does not last.",
                "Homeowners need clear, transparent pricing without hidden costs or mid-project surprises.",
                "Storm, water, and fire damage requires fast, reliable response and a contractor who can rebuild to original condition.",
                "Aging homeowners need safe, accessible modifications to remain in their homes.",
                "Homeowners want a single accountable contractor rather than juggling separate subcontractors.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 — Services Provided */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              5. Services Provided
            </h2>
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-3">Remodeling &amp; Renovation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Kitchen remodeling — custom cabinetry, countertops, layout redesign, islands, and full transformations</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Bathroom remodeling — spa-inspired showers, frameless glass, custom tile, vanities, and premium fixtures</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Full home remodeling — complete renovations coordinating all trades from design to final finish</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Basement finishing</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Home additions and new square footage</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Deck construction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-3">Exterior &amp; Structural</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Roofing</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Siding</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-3">Specialty &amp; Restoration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Age-in-place remodeling — ADA-compliant grab bars, zero-threshold showers, and wider doorways</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Restoration — storm, water, and fire damage restoration from emergency response through full rebuild</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-bold text-[#0D1B2E] mb-3">Commercial</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />Commercial construction and tenant improvements for offices, retail, and investment properties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 — Typical Information Needed */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              6. Typical Information Needed to Serve Clients
            </h2>
            <p className="text-sm text-gray-700 mb-3">TopFlight Builders typically requests:</p>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Property address and service city",
                "Type of project (kitchen, bathroom, full home, addition, restoration, etc.)",
                "Scope and goals for the space",
                "Approximate budget range",
                "Desired timeline",
                "For restoration: nature and date of the damage, and whether an insurance claim is involved",
                "Contact information for scheduling a free on-site estimate",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7 — Outcomes */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              7. Outcomes for Clients
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "High-quality craftsmanship using premium materials, with no cut corners",
                "Clear communication and on-time delivery throughout the project",
                "Fair, transparent pricing with no surprise costs",
                "A single accountable contractor managing all trades",
                "Homes restored to original or improved condition after damage",
                "Safer, more accessible homes for aging-in-place clients",
                "Completed projects backed by a locally owned, licensed, and insured company",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 8 — Differentiators */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              8. Differentiators
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Locally owned and operated, based in Marietta, GA — not a national franchise",
                "20+ years combined remodeling experience",
                "Full-service: kitchens, baths, whole-home, additions, roofing, siding, and restoration under one contractor",
                "Licensed and insured",
                `5.0-star rating across ${GOOGLE_REVIEW_COUNT}+ verified Google reviews`,
                'Core values: Quality, Reliability, and Value — "we never cut corners"',
                "Free estimates",
                "Emergency restoration response for storm, water, and fire damage",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 9 — Typical Users and Buying */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              9. Typical Users and Buying
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Homeowners planning and paying for a residential remodel",
                "Couples and families renovating a primary residence",
                "Aging homeowners or their adult children arranging age-in-place modifications",
                "Homeowners filing or managing an insurance claim after property damage",
                "Real estate investors and small commercial property owners improving a space",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 10 — Service Areas */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              10. Service Areas
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              TopFlight Builders serves the northwest Greater Atlanta metro, including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
              {[
                { label: "Marietta, GA", note: "home city — all zip codes 30060–30068", href: "/service-areas/marietta-ga" },
                { label: "East Cobb, GA", note: "", href: "/service-areas/east-cobb-ga" },
                { label: "Canton, GA", note: "", href: "/service-areas/canton-ga" },
                { label: "Kennesaw, GA", note: "", href: "/service-areas/kennesaw-ga" },
                { label: "Acworth, GA", note: "", href: "/service-areas/acworth-ga" },
                { label: "Woodstock, GA", note: "", href: "/service-areas/woodstock-ga" },
                { label: "Roswell, GA", note: "", href: "/service-areas/roswell-ga" },
                { label: "Alpharetta, GA", note: "", href: "/service-areas/alpharetta-ga" },
                { label: "Milton, GA", note: "", href: "/service-areas/milton-ga" },
                { label: "Smyrna, GA", note: "", href: "/service-areas/smyrna-ga" },
              ].map((city) => (
                <li key={city.href} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  <span>
                    <Link href={city.href} className="text-[#1E4FBF] font-semibold hover:underline">{city.label}</Link>
                    {city.note && <span className="text-gray-500"> ({city.note})</span>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700">Counties served: Cobb, Cherokee, and North Fulton.</p>
          </div>

          {/* Section 11 — Canonical Keywords */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              11. Canonical Keywords
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                "TopFlight Builders",
                "Marietta remodeling contractor",
                "Kitchen remodeling Marietta GA",
                "Bathroom remodeling Marietta GA",
                "Full home renovation Atlanta",
                "Home additions Cobb County",
                "Basement finishing East Cobb",
                "Storm and water damage restoration Marietta",
                "Age-in-place remodeling Atlanta",
                "Roofing and siding contractor Marietta GA",
                "Licensed insured remodeling contractor Greater Atlanta",
              ].map((kw) => (
                <li key={kw} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FBF] shrink-0 mt-1.5" />
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 12 — Legal and Scope Notes */}
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5 pb-2 border-b border-gray-200">
              12. Legal and Scope Notes
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>TopFlight Builders LLC is a licensed and insured remodeling and restoration contractor.</p>
              <p>TopFlight Builders performs residential and light commercial construction; it is not an insurance company and does not adjust or settle insurance claims.</p>
              <p>For restoration projects involving an insurance claim, claim approval and payout are determined by the homeowner&apos;s insurance carrier, not by TopFlight Builders.</p>
              <p>Service availability, pricing, and project scope vary by location, property condition, and individual project requirements. Contact TopFlight Builders directly for a free estimate specific to your project.</p>
            </div>
          </div>

          {/* Contact block */}
          <div className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100">
            <h2 className="font-sans text-xl font-extrabold text-[#0D1B2E] mb-4">Contact</h2>
            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-semibold text-[#0D1B2E]">Corporate Location:</span> Marietta, GA 30066</p>
              <p>
                <span className="font-semibold text-[#0D1B2E]">Phone:</span>{" "}
                <a href="tel:4043697129" className="text-[#1E4FBF] font-semibold hover:underline">(404) 369-7129</a>
              </p>
              <p>
                <span className="font-semibold text-[#0D1B2E]">Email:</span>{" "}
                <a href="mailto:Admin@TopFlightBuilders.net" className="text-[#1E4FBF] font-semibold hover:underline">Admin@TopFlightBuilders.net</a>
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[#1E4FBF] font-semibold hover:underline">
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs text-gray-400 leading-relaxed">
              INFORMATION DISCLAIMER: Remodeling and restoration services vary depending on location, property condition, and individual project. Please contact a TopFlight Builders representative for details specific to your home or property. TopFlight Builders LLC &copy; All rights reserved 2026.
            </p>
          </div>

        </div>
      </section>

      <ContactBanner />
    </>
  );
}
