import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import ProjectCard from "@/components/ProjectCard";
import FAQSection from "@/components/FAQSection";
import { CITIES, SERVICES, UNIQUE_HOOKS } from "@/lib/service-city-data";
import { projects } from "@/lib/projects";

interface Props {
  citySlug: string;
  serviceSlug: string;
}

// Service-specific FAQ timelines
function getTimeline(serviceSlug: string): string {
  const timelines: Record<string, string> = {
    "kitchen-remodeling": "Most kitchen remodels run 6–10 weeks from demo to punch list, depending on cabinet lead time. Custom cabinetry orders are the primary schedule driver — we start the order process at contract signing to minimize waiting.",
    "bathroom-remodeling": "A standard bathroom remodel takes 2–4 weeks. Master suite builds with custom tile work and frameless glass run 3–6 weeks. We sequence trades efficiently so the project moves without unnecessary holds.",
    "full-home-remodeling": "Whole-home renovations typically run 3–6 months depending on scope. We phase the work to minimize disruption and sequence trades so no one is waiting on another to finish.",
    "basement-finishing": "Most basement finishing projects take 4–8 weeks. Projects that include a full bathroom or wet bar run on the longer end. Egress window installation can add 1–2 weeks if the opening needs to be cut.",
    "home-additions": "Home additions typically take 4–6 months from permit approval to final inspection. Permit and plan review in Cobb and Cherokee counties adds 6–10 weeks before construction begins — we factor this into the overall timeline from day one.",
    "restoration": "Restoration timelines depend heavily on damage scope. Water extraction and drying takes 3–5 days. Structural and finish repair follows — a moderate water intrusion event typically resolves in 3–6 weeks. Larger fire or structural damage scopes can run 2–4 months.",
    "roofing": "Most residential roof replacements take 1–3 days for the physical installation. Permit and inspection scheduling adds a few days on either end. Insurance-related projects may take longer depending on adjuster scheduling.",
    "decks": "A standard deck replacement typically takes 3–5 days once materials are on-site. New builds with pergolas, stairs, and custom railing run 1–2 weeks. Permit approval adds 1–2 weeks to the start date — we factor that into the schedule upfront.",
    "age-in-place": "Targeted modifications like a bathroom conversion take 1–2 weeks. Comprehensive whole-home accessibility projects — doorway widening, ramp construction, full bathroom conversion — typically run 4–6 weeks.",
  };
  return timelines[serviceSlug] ?? "Timeline varies by scope — we provide a detailed project schedule during the estimate process.";
}

// City-specific FAQ question derived from homesNote
function getCityQuestion(citySlug: string): { q: string; a: string } {
  const questions: Record<string, { q: string; a: string }> = {
    "marietta-ga": {
      q: "My home is a 1980s colonial in East Cobb — what should I know before starting a renovation?",
      a: "East Cobb colonials from the 1980s are solid homes, but they carry the hallmarks of their era: galley kitchens, fiberglass bathroom surrounds, aluminum wiring in some cases, and original HVAC systems that may need updating when walls are opened. We always assess these conditions upfront so we can budget accurately and avoid mid-project surprises.",
    },
    "canton-ga": {
      q: "Our Canton home was built around 2005 — are there specific renovation considerations for homes that age?",
      a: "Homes from the early 2000s building boom in Canton used mid-grade materials throughout — builder-grade windows, standard vinyl siding, and basic kitchen and bath packages. At 20 years old, many of these components are ready for their first major upgrade. The construction quality is generally sound, which makes renovation efficient — you're typically replacing finishes, not fixing underlying problems.",
    },
    "kennesaw-ga": {
      q: "Kennesaw homes from the 1980s and 1990s are common in our neighborhood — what conditions do contractors typically find behind the walls?",
      a: "The 1980s and 1990s construction in Kennesaw was solid, but at 30–40 years old, you're likely to find original plumbing (occasionally polybutylene), aluminum branch wiring in some homes, and HVAC systems that have been repaired but not replaced. We assess all of these during our initial walkthrough and flag anything that should be addressed alongside your renovation scope.",
    },
    "acworth-ga": {
      q: "We're near Lake Acworth — does the lakeside environment cause specific issues in older homes?",
      a: "Yes — the combination of Acworth's lake proximity and Georgia's humidity means moisture works harder on these homes than in drier inland markets. We find hidden tile failure, soft subfloor, and early mold growth more frequently in Acworth bathrooms and basements than elsewhere. Our process includes moisture probing and assessment before any finish work begins, so we address the underlying conditions rather than cover them up.",
    },
    "woodstock-ga": {
      q: "We're in Towne Lake — our home was built around 2005. What does first-generation renovation typically look like at this age?",
      a: "2005-era homes in Towne Lake and Eagle Watch are typically hitting their first major renovation cycle right now. The original builder finishes — vinyl flooring, ceramic countertops, fiberglass tub-showers — have held up but look dated. The underlying construction is sound, which means renovation is efficient. Most homeowners tackle kitchen, bathrooms, and flooring simultaneously since everything shows the same age.",
    },
    "east-cobb-ga": {
      q: "East Cobb homes hold significant value — how do you approach renovation scopes in high-equity markets?",
      a: "In East Cobb, renovation decisions have real financial stakes — a $40,000 kitchen renovation in a $900,000 home requires premium-grade execution, not just premium materials. We approach every East Cobb project with the expectation that the finished product needs to meet the bar set by the neighborhood, both because it's the right standard and because it protects your investment in the local market.",
    },
    "roswell-ga": {
      q: "Our Roswell home has non-standard dimensions from a mid-century addition — how do you handle projects in older homes with irregular layouts?",
      a: "Older Roswell homes regularly surprise contractors who aren't prepared for non-standard rough-in dimensions, out-of-plumb walls, and room configurations that don't follow modern construction conventions. We build extra discovery time into our planning for these projects, probe and measure before committing to a final scope, and price with realistic contingency for what we find rather than what we expect.",
    },
    "alpharetta-ga": {
      q: "Alpharetta homeowners often have specific material selections already in mind — how does your process accommodate that?",
      a: "We welcome homeowners who've done their research — it streamlines the selection phase significantly. We work from your specifications, confirm compatibility with the existing rough-in conditions, coordinate vendor deliveries into our project schedule, and apply the installation craftsmanship those materials deserve. The design direction is yours; the execution is ours.",
    },
  };
  return (
    questions[citySlug] ?? {
      q: "What should we know before starting a renovation project in this area?",
      a: "Each home is unique — we conduct a thorough walkthrough and assessment before committing to a final scope and price. That process protects both parties from surprises mid-project.",
    }
  );
}

export default function ServiceCityPage({ citySlug, serviceSlug }: Props) {
  const city = CITIES.find((c) => c.slug === citySlug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const hookKey = `${citySlug}-${serviceSlug}`;
  const hooks = UNIQUE_HOOKS[hookKey];

  // Graceful fallback — should never fire in production but prevents hard crashes
  if (!city || !service || !hooks) {
    return (
      <div className="py-40 text-center text-gray-500">
        <p>Page data unavailable. Please contact us directly at (404) 369-7129.</p>
      </div>
    );
  }

  // Filter projects by city name match
  const cityProjects = projects
    .filter((p) => p.location.toLowerCase().includes(city.name.toLowerCase()))
    .slice(0, 3);

  const cityQuestion = getCityQuestion(citySlug);
  const timeline = getTimeline(serviceSlug);

  return (
    <>
      {/* Breadcrumb schema */}
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: service.parentPageUrl },
          {
            name: `${service.shortName} in ${city.name}`,
            href: `/services/${serviceSlug}/${citySlug}`,
          },
        ]}
      />

      {/* Service JSON-LD — provider @id links to the single LocalBusiness node in layout.tsx */}
      <ServiceSchema
        serviceType={service.name}
        areaServedSingle={city.name}
        url={`https://topflightbuilders.net/services/${serviceSlug}/${citySlug}`}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            {service.shortName} · {city.name}, GA
          </p>
          <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {service.name} in {city.name}, GA
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Serving {city.county} County — {city.schoolDistricts}.
          </p>
          <a
            href="tel:4043697129"
            className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Call (404) 369-7129
          </a>
        </div>
      </section>

      {/* ── PARENT NAV PILLS ──────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 text-sm">
          <Link
            href={service.parentPageUrl}
            className="inline-flex items-center gap-1.5 text-[#1E4FBF] font-semibold hover:underline"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All {service.name}
          </Link>
          <span className="text-gray-300">·</span>
          <Link
            href={`/service-areas/${citySlug}`}
            className="inline-flex items-center gap-1.5 text-[#1E4FBF] font-semibold hover:underline"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            All Services in {city.name}
          </Link>
        </div>
      </div>

      {/* ── UNIQUE CONTENT ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-gray-600 max-w-none mb-14">
            <p className="text-gray-700 leading-relaxed mb-5">{hooks.openingHook}</p>
            <p className="text-gray-600 leading-relaxed">{hooks.localContext}</p>
          </div>

          {/* Process Steps */}
          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            Our {service.shortName} Process in {city.name}
          </h2>
          <ol className="space-y-4 mb-14">
            {service.processSteps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#1E4FBF] text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>

          {/* Materials */}
          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            Materials We Use
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.keyMaterials.map((material) => (
              <li key={material} className="flex items-center gap-3 text-gray-700 text-sm">
                <svg
                  className="w-5 h-5 text-[#1E4FBF] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {material}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── NEARBY PROJECTS ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">
              Recent Projects Near {city.name}
            </h2>
          </div>
          {cityProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                We actively serve {city.name} and {city.county} County — our portfolio includes
                projects throughout the Greater Atlanta area. Visit our{" "}
                <Link href="/portfolio" className="text-[#1E4FBF] font-semibold hover:underline">
                  full portfolio
                </Link>{" "}
                to see completed work, or call us at{" "}
                <a href="tel:4043697129" className="text-[#1E4FBF] font-semibold hover:underline">
                  (404) 369-7129
                </a>{" "}
                to discuss your project.
              </p>
            </div>
          )}
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

      {/* ── DRIVE TIME & LOGISTICS ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            Serving {city.name} from Our Marietta HQ
          </h2>
          <div className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">Drive from our Marietta headquarters:</span>{" "}
              {city.driveFromMarietta}.
            </p>
            <p className="text-gray-600 leading-relaxed">
              {city.slug === "marietta-ga"
                ? "Operating from Marietta means we can mobilize same-day for estimates, respond quickly to questions during your project, and maintain consistent daily oversight — advantages that compound over a multi-week renovation."
                : `The drive to ${city.name} is well within our regular service range — our crews make the trip consistently, which means your project gets the same level of oversight and responsiveness as a job in our own backyard. We don't pad timelines or reduce site visits because of distance.`}
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICE RANGE & URGENCY ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-6">
            What to Expect — Investment Range
          </h2>
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">{service.typicalRange}.</p>
            {(city.priceLevel === "luxury") && (
              <p className="text-gray-600 leading-relaxed">
                Projects in {city.name} consistently trend toward the higher end of that range —
                the market expectation here is premium materials and execution, and the home values
                justify that investment.
              </p>
            )}
            {(city.priceLevel === "premium") && (
              <p className="text-gray-600 leading-relaxed">
                {city.name} projects typically land in the mid-to-upper portion of that range,
                reflecting the neighborhood expectations and the quality of finish that protects
                home values in this market.
              </p>
            )}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-900 font-semibold text-sm leading-relaxed">
                {service.urgencyNote}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={[
            {
              q: `How long does a ${service.shortName.toLowerCase()} project take in ${city.name}?`,
              a: timeline,
            },
            cityQuestion,
            {
              q: `Do you pull permits in ${city.county} County?`,
              a: `Yes — we handle all permitting for projects in ${city.county} County. We prepare the documentation, submit the application, schedule all required inspections, and keep you informed at each stage. You don't need to manage the permit process — that's part of what you're hiring us to do.`,
            },
          ]} />
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
