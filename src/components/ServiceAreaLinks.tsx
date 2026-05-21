import Link from "next/link";

const MATRIX_CITIES = [
  { label: "Marietta, GA",   slug: "marietta-ga" },
  { label: "East Cobb, GA",  slug: "east-cobb-ga" },
  { label: "Canton, GA",     slug: "canton-ga" },
  { label: "Kennesaw, GA",   slug: "kennesaw-ga" },
  { label: "Acworth, GA",    slug: "acworth-ga" },
  { label: "Woodstock, GA",  slug: "woodstock-ga" },
  { label: "Roswell, GA",    slug: "roswell-ga" },
  { label: "Alpharetta, GA", slug: "alpharetta-ga" },
];

interface Props {
  /** URL slug used in /services/[slug]/[city] routes (may differ from page URL) */
  matrixSlug: string;
  /** Human-readable service name, e.g. "Kitchen Remodeling" */
  serviceName: string;
}

export default function ServiceAreaLinks({ matrixSlug, serviceName }: Props) {
  return (
    <section className="py-16 px-6 bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-2">
          {serviceName} Across Greater Atlanta
        </h2>
        <p className="text-gray-500 mb-8">
          We serve homeowners throughout Cobb, Cherokee, and North Fulton counties.
          Choose your city for local pricing context and project examples.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MATRIX_CITIES.map(({ label, slug }) => (
            <Link
              key={slug}
              href={`/services/${matrixSlug}/${slug}`}
              className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm hover:border-[#1E4FBF]/40 hover:shadow-md transition-all text-sm font-semibold text-[#0D1B2E] hover:text-[#1E4FBF]"
            >
              <svg className="w-3.5 h-3.5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {serviceName} in {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
