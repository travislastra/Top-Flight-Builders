import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import {
  COMMERCIAL_CANTON_FAQS,
  COMMERCIAL_MARIETTA_FAQS,
  COMMERCIAL_GENERAL_FAQS,
} from "@/lib/faq-data";
import type { FAQ } from "@/components/FAQSection";

const BASE = "https://topflightbuilders.net";

interface CommercialCity {
  slug: string;
  name: string;
  county: string;
  permitAuthority: string;
  commercialCorridors: string[];
  directAnswer: string;
  whyUs: string;
  localSection: { heading: string; body: string };
  faqs: FAQ[];
  metadata: { title: string; description: string };
}

const COMMERCIAL_CITIES: CommercialCity[] = [
  {
    slug: "canton-ga",
    name: "Canton",
    county: "Cherokee",
    permitAuthority: "City of Canton or Cherokee County (depending on address)",
    commercialCorridors: [
      "Downtown Canton and the Riverstone Pkwy corridor",
      "Holly Springs commercial district",
      "Hickory Flat retail and office centers",
      "Sixes Road commercial corridor",
      "GA-20 and GA-140 business routes",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovations for offices, retail spaces, and restaurants across Canton and Cherokee County. We coordinate every trade, pull the permits through the Cherokee County and City of Canton offices, and work around your opening date so you can get the space in service.",
    whyUs:
      "We are a local, owner-run general contractor, not a national franchise routing your job through a call center. For a tenant improvement, that means one accountable point of contact, a schedule built around your lease and opening date, and a crew that already knows the Cherokee County permit and inspection process. We handle the coordination of framing, electrical, plumbing, HVAC, finishes, and final inspection so you are managing your business, not your buildout.",
    localSection: {
      heading: "Serving Canton and Cherokee County",
      body: "We work throughout Canton, including Downtown Canton, Hickory Flat, Holly Springs, and the Riverstone and Sixes Road commercial corridors. Because our home base is nearby in Marietta, we mobilize quickly for site visits and stay responsive through the life of the project.",
    },
    faqs: COMMERCIAL_CANTON_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in Canton, GA",
      description:
        "Tenant improvements, interior buildouts, and commercial renovation in Canton and Cherokee County, GA. Offices, retail, and restaurants. Licensed, insured, locally owned. (404) 369-7129.",
    },
  },
  {
    slug: "marietta-ga",
    name: "Marietta",
    county: "Cobb",
    permitAuthority: "City of Marietta or Cobb County Building Inspections (depending on address)",
    commercialCorridors: [
      "South Marietta Pkwy (GA-120) corridor",
      "Roswell Road commercial district",
      "Canton Road corridor",
      "Powers Ferry and Delk Road nodes",
      "Franklin Gateway commercial strip",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovation for offices, retail spaces, and restaurants in Marietta and Cobb County. Marietta is our home market: we pull permits through the City of Marietta and Cobb County Building Inspections and know the inspection schedules and documentation requirements here better than anywhere else.",
    whyUs:
      "Being based in Marietta is a real operational advantage for your project. We can mobilize for site visits the same week you call, respond quickly to issues during construction, and maintain consistent daily oversight without travel time eating into your schedule. One accountable point of contact from permit submittal through certificate of occupancy.",
    localSection: {
      heading: "Serving Marietta and Cobb County",
      body: "We work throughout Marietta's commercial corridors: Roswell Road, Canton Road, South Marietta Pkwy, and the Franklin Gateway area, as well as unincorporated Cobb County commercial properties. We confirm the correct permitting authority at the walkthrough since addresses near city limits can fall under either jurisdiction.",
    },
    faqs: COMMERCIAL_MARIETTA_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in Marietta, GA",
      description:
        "Tenant improvements, office renovations, and commercial build-outs in Marietta and Cobb County, GA. Licensed general contractor, locally based. (404) 369-7129.",
    },
  },
  {
    slug: "kennesaw-ga",
    name: "Kennesaw",
    county: "Cobb",
    permitAuthority: "Cobb County Building Inspections",
    commercialCorridors: [
      "Barrett Pkwy commercial corridor",
      "Town Center Mall area retail and office",
      "Chastain Road commercial strip",
      "Bells Ferry Road corridor",
      "George Busbee Pkwy office and retail",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovation for offices, retail, and restaurants in Kennesaw and northwest Cobb County. We permit through Cobb County Building Inspections and coordinate every trade from framing through finishes, so your space is ready for occupancy on your schedule.",
    whyUs:
      "The Barrett Pkwy and Town Center Mall corridors in Kennesaw represent some of the busiest commercial real estate activity in Cobb County, and we have experience working in active commercial centers where minimizing disruption to neighboring tenants matters. We schedule trades efficiently and manage the inspection sequence so your project doesn't stall between approvals.",
    localSection: {
      heading: "Serving Kennesaw and Northwest Cobb County",
      body: "Kennesaw's Barrett Pkwy corridor and the Town Center Mall area anchor the market we serve here, from national chain fit-outs to local professional office renovations. The Chastain Road and George Busbee Pkwy corridors are also active markets where we work regularly. All commercial permits in Kennesaw run through Cobb County Building Inspections.",
    },
    faqs: COMMERCIAL_GENERAL_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in Kennesaw, GA",
      description:
        "Tenant improvements, office renovations, and commercial build-outs in Kennesaw and Cobb County, GA. Licensed general contractor. (404) 369-7129.",
    },
  },
  {
    slug: "acworth-ga",
    name: "Acworth",
    county: "Cobb",
    permitAuthority: "City of Acworth or Cobb County Building Inspections (depending on address)",
    commercialCorridors: [
      "US-41 (Cobb Pkwy) commercial corridor",
      "Main Street and Historic Downtown Acworth",
      "I-75 commercial interchange areas",
      "Lake Acworth Drive retail nodes",
      "Wade Green Road commercial strip",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovation for offices, retail, and restaurants in Acworth and the surrounding Cobb County area. We navigate permitting through the City of Acworth or Cobb County depending on your address, and we coordinate every trade to keep your project on schedule.",
    whyUs:
      "Acworth's mix of historic downtown storefronts and I-75 corridor commercial space means commercial projects here range from character-sensitive renovations in older buildings to standard buildouts in modern retail strips. We've worked in both contexts and adapt our approach to the building type, the lease requirements, and the local permit process.",
    localSection: {
      heading: "Serving Acworth and Lake City Commercial Properties",
      body: "We work in Acworth's Historic Downtown district, along the US-41 and I-75 corridors, and in the commercial nodes along Lake Acworth Drive and Wade Green Road. The correct permitting authority depends on whether your property falls within the City of Acworth limits or in unincorporated Cobb County; we confirm this at the walkthrough so there are no surprises at submittal.",
    },
    faqs: COMMERCIAL_GENERAL_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in Acworth, GA",
      description:
        "Tenant improvements, office renovations, and commercial build-outs in Acworth, GA. Cobb County licensed general contractor. (404) 369-7129.",
    },
  },
  {
    slug: "woodstock-ga",
    name: "Woodstock",
    county: "Cherokee",
    permitAuthority: "City of Woodstock or Cherokee County (depending on address)",
    commercialCorridors: [
      "Downtown Woodstock Main Street district",
      "Woodstock Town Center and GA-92 corridor",
      "Towne Lake Pkwy retail and office",
      "I-575 commercial interchange areas",
      "Arnold Mill Road commercial strip",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovation for offices, retail spaces, and restaurants in Woodstock and Cherokee County. We work through the City of Woodstock or Cherokee County permit office depending on your address, and we coordinate every trade so your space opens on schedule.",
    whyUs:
      "Woodstock's Downtown district has seen significant commercial investment over the past decade, and we've been part of that activity: renovating storefronts, reconfiguring office suites, and building out restaurant and retail spaces on and near Main Street. The Towne Lake Pkwy and GA-92 corridors are more standard retail environments where we execute efficient, cost-effective buildouts.",
    localSection: {
      heading: "Serving Woodstock and Cherokee County Commercial Properties",
      body: "We work throughout Woodstock's commercial areas: Downtown Main Street, the GA-92 and Towne Lake Pkwy corridors, and properties along I-575. The correct permitting authority is either the City of Woodstock (Downtown and adjacent areas) or Cherokee County (unincorporated commercial properties). We confirm this at the walkthrough before any permit work begins.",
    },
    faqs: COMMERCIAL_GENERAL_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in Woodstock, GA",
      description:
        "Tenant improvements, office renovations, and commercial build-outs in Woodstock and Cherokee County, GA. Licensed general contractor. (404) 369-7129.",
    },
  },
  {
    slug: "east-cobb-ga",
    name: "East Cobb",
    county: "Cobb",
    permitAuthority: "Cobb County Building Inspections",
    commercialCorridors: [
      "Johnson Ferry Road commercial nodes",
      "Roswell Road (Marietta) commercial strip",
      "Sandy Plains Road commercial corridor",
      "Paper Mill Road office and retail",
      "Sewell Mill Road professional suites",
    ],
    directAnswer:
      "TopFlight Builders handles tenant improvements, interior buildouts, and light commercial renovation for offices, retail, and professional service businesses in the East Cobb area of Cobb County. All commercial permits in unincorporated East Cobb run through Cobb County Building Inspections, and we manage that process from submittal through final inspection.",
    whyUs:
      "East Cobb's commercial tenants are largely professional services (medical, legal, financial, and specialty retail) where the finish level of the space matters to clients and reflects on the business. We build and renovate commercial spaces that communicate the quality of the business inside, using the same level of execution we bring to the residential high-end market in this area.",
    localSection: {
      heading: "Serving East Cobb Commercial Properties",
      body: "East Cobb's commercial activity centers on the Johnson Ferry and Roswell Road corridors, with professional office parks along Sandy Plains Road and Paper Mill Road. These are unincorporated Cobb County properties, so all commercial permits route through Cobb County Building Inspections. We're well-versed in that process and manage it as part of the project.",
    },
    faqs: COMMERCIAL_GENERAL_FAQS,
    metadata: {
      title: "Commercial Construction & Tenant Improvement in East Cobb, GA",
      description:
        "Tenant improvements, office renovations, and commercial build-outs in East Cobb and Cobb County, GA. Licensed general contractor. (404) 369-7129.",
    },
  },
];

export function generateStaticParams() {
  return COMMERCIAL_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = COMMERCIAL_CITIES.find((c) => c.slug === citySlug);
  if (!city) return {};
  return {
    title: city.metadata.title,
    description: city.metadata.description,
    openGraph: {
      title: `${city.metadata.title} | TopFlight Builders`,
      description: city.metadata.description,
      images: [
        {
          url: `${BASE}/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg`,
          width: 1200,
          height: 630,
          alt: `Commercial contractor in ${city.name}, GA by TopFlight Builders`,
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/services/commercial/${city.slug}`,
    },
  };
}

const PROCESS_STEPS = [
  "Walkthrough and scope: we assess the existing space, your lease requirements, and your build-out allowance.",
  "Budget and timeline: clear pricing tied to the scope, with the schedule mapped to your target opening.",
  "Permits and drawings: we prepare and submit through the correct local authority.",
  "Build: demolition, rough-in, finishes, and fixtures, coordinated as one team.",
  "Inspection and handover: we schedule inspections and deliver a space ready for occupancy.",
];

const SERVICES_LIST = [
  "Tenant improvements and interior buildouts for leased space",
  "Office renovations and reconfiguration",
  "Retail fit-outs and storefront refreshes",
  "Restaurant and food-service buildouts",
  "Light commercial remodeling and repairs",
  "Post-damage commercial restoration",
];

export default async function CommercialCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = COMMERCIAL_CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <div className="py-40 text-center text-gray-500">
        <p>Page not available. Contact us at (404) 369-7129.</p>
      </div>
    );
  }

  const pageUrl = `${BASE}/services/commercial/${city.slug}`;

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial", href: "/services/commercial" },
          { name: `Commercial in ${city.name}`, href: `/services/commercial/${city.slug}` },
        ]}
      />
      <ServiceSchema
        serviceType="Commercial Construction and Tenant Improvement"
        description={`Tenant improvements, interior buildouts, and light commercial renovation in ${city.name}, GA.`}
        areaServedSingle={city.name}
        url={pageUrl}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            Commercial Construction
          </p>
          <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Commercial Construction &amp; Tenant Improvement in {city.name}, GA
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Serving {city.county} County businesses. Licensed, insured, locally owned.
          </p>
          <a
            href="tel:4043697129"
            className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Call (404) 369-7129
          </a>
        </div>
      </section>

      {/* Nav breadcrumb pills */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 text-sm">
          <Link
            href="/services/commercial"
            className="inline-flex items-center gap-1.5 text-[#1E4FBF] font-semibold hover:underline"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Commercial Services
          </Link>
          <span className="text-gray-300">·</span>
          <Link
            href={`/service-areas/${city.slug}`}
            className="inline-flex items-center gap-1.5 text-[#1E4FBF] font-semibold hover:underline"
          >
            All Services in {city.name}
          </Link>
        </div>
      </div>

      {/* Direct answer + services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-10">{city.directAnswer}</p>

          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            Commercial Work We Do in {city.name}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-14">
            {SERVICES_LIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-5">
            Why {city.name} Businesses Work With Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-14">{city.whyUs}</p>

          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            Our Tenant-Improvement Process
          </h2>
          <ol className="space-y-4 mb-14">
            {PROCESS_STEPS.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#1E4FBF] text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">
            {city.localSection.heading}
          </h2>
          <div className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">Commercial corridors we serve:</span>
            </p>
            <ul className="space-y-2">
              {city.commercialCorridors.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">{city.localSection.body}</p>
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Permitting:</span> {city.permitAuthority}
          </p>
        </div>
      </section>

      <FAQSection faqs={city.faqs} heading={`Commercial Build-Out FAQs: ${city.name}`} />
      <ContactBanner />
    </>
  );
}
