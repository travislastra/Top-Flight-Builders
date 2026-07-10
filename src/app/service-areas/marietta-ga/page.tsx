import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import FAQSection from "@/components/FAQSection";
import { MARIETTA_FAQS } from "@/lib/faq-data";
import LogoWatermark from "@/components/LogoWatermark";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Marietta GA Remodeling & Restoration Contractor",
  description:
    "TopFlight Builders is Marietta's trusted remodeling contractor. Kitchens, bathrooms, full homes, and storm restoration in Marietta, GA. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  openGraph: {
    title: "Marietta GA Remodeling & Restoration Contractor | TopFlight Builders",
    description: "TopFlight Builders is Marietta's trusted remodeling contractor. Kitchens, bathrooms, full homes, and storm restoration in Marietta, GA. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
    images: [{ url: "https://topflightbuilders.net/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", width: 1200, height: 630, alt: "Remodeling contractor in Marietta, GA — TopFlight Builders" }],
  },
  alternates: {
    canonical:
      "https://topflightbuilders.net/service-areas/marietta-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "Marietta", addressRegion: "GA" },
};

const cityProjects = projects.filter((p) =>
  ["kitchen-remodel-marietta", "fallen-tree-remodel"].includes(p.slug)
);

export default function MariettaPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "Marietta, GA", href: "/service-areas/marietta-ga" },
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
            Marietta, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our home market. Licensed, insured, and trusted by Marietta homeowners across every zip code and neighborhood.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            Marietta&rsquo;s Trusted Home Remodeling Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            TopFlight Builders is headquartered in Marietta, GA 30066 — this is our home market and the city we know best. We have served Marietta homeowners across all zip codes and neighborhoods for years, from modest renovations to complete whole-home transformations. Whether you live near Marietta Square — the historic downtown district that anchors the city with year-round festivals and community events — or in the Kennesaw Mountain area with its wooded, higher-value neighborhoods, our crew knows the streets, the inspectors, and the building culture here.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our work spans East Cobb&rsquo;s Sewell Mill and Paper Mill Road neighborhoods, the WellStar Kennestone Hospital corridor, and both distinct school systems that serve Marietta homeowners: Marietta City Schools (serving the 30060 and 30064 zip codes) and Cobb County School District (serving 30062, 30066, 30067, 30068). No matter which part of Marietta you call home, TopFlight has worked there — and we bring that local knowledge to every project we take on.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in Marietta
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Marietta Square &amp; Historic Downtown</li>
            <li>East Cobb — Sewell Mill &amp; Paper Mill Road</li>
            <li>Kennesaw Mountain area</li>
            <li>WellStar Kennestone Hospital corridor</li>
            <li>30060, 30062, 30064, 30066, 30067, 30068 zip codes</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in Marietta
          </h3>
          <ul className="space-y-2 mb-8">
            {[
              { label: "Kitchen Remodeling in Marietta", href: "/services/kitchen-remodeling/marietta-ga" },
              { label: "Bathroom Remodeling in Marietta", href: "/services/bathroom-remodeling/marietta-ga" },
              { label: "Full Home Remodeling in Marietta", href: "/services/full-home-remodeling/marietta-ga" },
              { label: "Basement Finishing in Marietta", href: "/services/basement-finishing/marietta-ga" },
              { label: "Home Additions in Marietta", href: "/services/home-additions/marietta-ga" },
              { label: "Restoration in Marietta", href: "/services/restoration/marietta-ga" },
              { label: "Roofing in Marietta", href: "/services/roofing/marietta-ga" },
              { label: "Decks in Marietta", href: "/services/decks/marietta-ga" },
              { label: "Age in Place Remodeling in Marietta", href: "/services/age-in-place/marietta-ga" },
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Marietta Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-block border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-sans text-lg font-bold text-[#0D1B2E] mb-2">Getting to Us</h3>
          <p className="text-gray-600">
            N/A — this is our home city. Our crew is Marietta-based and knows every neighborhood. We can schedule your estimate quickly and mobilize without delay.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=Marietta+GA&output=embed"
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
            Ready to Start Your Marietta Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. We respond quickly — this is our home turf.
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

      <FAQSection faqs={MARIETTA_FAQS} />
      <ContactBanner />
    </>
  );
}
