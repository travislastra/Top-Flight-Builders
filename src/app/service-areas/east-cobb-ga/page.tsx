import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactBanner from "@/components/ContactBanner";
import FAQSection from "@/components/FAQSection";
import { EAST_COBB_FAQS } from "@/lib/faq-data";
import LogoWatermark from "@/components/LogoWatermark";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "East Cobb GA Remodeling & Restoration Contractor | TopFlight Builders",
  description:
    "Kitchen, bathroom, and whole-home remodeling in East Cobb, GA by TopFlight Builders. Serving Lassiter, Pope, and Walton school zones. Licensed, insured, 50+ reviews. (404) 369-7129.",
  alternates: {
    canonical:
      "https://travislastra.github.io/Top-Flight-Builders/service-areas/east-cobb-ga",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://topflightbuilders.net/#business",
  name: "TopFlight Builders LLC",
  url: "https://topflightbuilders.net",
  telephone: "+1-404-369-7129",
  areaServed: { "@type": "City", name: "East Cobb", addressRegion: "GA" },
};

const cityProjects = projects.filter((p) =>
  [
    "kitchen-laundry-remodel-east-cobb",
    "whole-home-renovation-east-cobb",
    "basement-finishing-east-cobb",
    "kitchen-deck-east-cobb",
  ].includes(p.slug)
);

export default function EastCobbPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: "East Cobb, GA", href: "/service-areas/east-cobb-ga" },
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
            East Cobb, GA Remodeling &amp; Restoration Contractor
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our single most active market. Serving Lassiter, Pope, and Walton school zones with premium renovations. Licensed, insured, 50+ reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">
            East Cobb&rsquo;s Most Experienced Remodeling Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            East Cobb is our single most active market. As an unincorporated community in Cobb County, East Cobb is defined by its school zones more than its boundaries — and the Lassiter, Pope, and Walton high school districts consistently rank among the best in Georgia. This draws families who invest heavily in their properties, and TopFlight has completed more projects in East Cobb than anywhere else.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Sewell Mill and Paper Mill Road corridors anchor the area&rsquo;s established neighborhoods with larger homes on generous lots. The Shallowford Road and Johnson Ferry Road areas, and the Chattahoochee River National Recreation Area trails and the neighborhoods adjacent to it, round out a market that spans ZIP codes 30062, 30066, and 30068. Renovations here often involve premium materials, high-end appliances, and careful attention to resale value — and our portfolio reflects it.
          </p>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3 mt-8">
            Neighborhoods &amp; Areas We Serve in East Cobb
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Lassiter, Pope &amp; Walton school zones</li>
            <li>Sewell Mill &amp; Paper Mill Road corridors</li>
            <li>Shallowford Road &amp; Johnson Ferry Road areas</li>
            <li>Chattahoochee River NRA adjacent neighborhoods</li>
            <li>30062, 30066, and 30068 zip codes</li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-[#0D1B2E] mb-3">
            Services We Offer in East Cobb
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
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">East Cobb Projects</h2>
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
          <h3 className="font-sans text-lg font-bold text-[#0D1B2E] mb-2">Getting There from Our Marietta HQ</h3>
          <p className="text-gray-600">
            East Cobb is adjacent to our Marietta HQ — just 10–15 minutes east via Johnson Ferry Road, Roswell Road (GA-120), or Sandy Plains Road. Our crews start East Cobb jobs early and run efficiently in this familiar territory.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">
            Frequently Asked Questions — East Cobb
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Which specific East Cobb neighborhoods do you serve?
              </p>
              <p className="text-gray-600 leading-relaxed">
                All of them — including the Lassiter, Pope, and Walton school zones, the Sewell Mill area, the Paper Mill Road corridor, and neighborhoods along Johnson Ferry Road and Shallowford Road.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you handle high-end whole-home renovations in East Cobb?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yes — it&rsquo;s actually our specialty in this market. East Cobb homeowners often want premium finishes, and we&rsquo;re experienced with that level of project management and craftsmanship.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                How do I handle permits for an East Cobb project?
              </p>
              <p className="text-gray-600 leading-relaxed">
                East Cobb is unincorporated Cobb County, so permits are pulled through Cobb County. We manage all permitting and inspections.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#0D1B2E] mb-2">
                Do you do basement finishing in East Cobb?
              </p>
              <p className="text-gray-600 leading-relaxed">
                Absolutely — we&rsquo;ve finished several East Cobb basements and it&rsquo;s a great ROI improvement in this market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://maps.google.com/maps?q=East+Cobb+GA&output=embed"
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
            Ready to Start Your East Cobb Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Call us or request a free estimate online. East Cobb is our home territory.
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

      <FAQSection faqs={EAST_COBB_FAQS} />
      <ContactBanner />
    </>
  );
}
