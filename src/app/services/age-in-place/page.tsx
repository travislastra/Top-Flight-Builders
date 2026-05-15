import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByService } from "@/lib/projects";

export const metadata = {
  title: "Age in Place Remodeling Atlanta GA | TopFlight Builders",
  description: "ADA-compliant age in place remodeling in Greater Atlanta. Grab bars, zero-threshold showers, wider doorways, ramps, and accessible kitchen modifications. Call (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/services/age-in-place",
  },
};

const modifications = [
  {
    area: "Bathroom",
    desc: "The bathroom is the highest-priority room for most age-in-place projects. We design for safety without sacrificing style.",
    items: [
      "Zero-threshold walk-in showers",
      "Grab bars at shower, toilet & vanity",
      "Comfort-height toilets",
      "Handheld & adjustable shower heads",
      "Walk-in tubs",
      "Roll-under accessible vanities",
      "Non-slip tile flooring",
      "Fold-down shower benches",
    ],
  },
  {
    area: "Kitchen",
    desc: "Accessible kitchens make daily living easier and safer — without looking clinical.",
    items: [
      "Lowered countertop sections for seated use",
      "Pull-out shelving and drawer organizers",
      "D-ring and lever-style cabinet hardware",
      "Under-counter appliance placement",
      "Lever-handle faucets",
      "Improved task lighting",
      "Knee clearance under sink",
      "Contrasting edge treatments for visibility",
    ],
  },
  {
    area: "Doorways & Hallways",
    desc: "Standard doorways don't accommodate walkers or wheelchairs. We widen openings and remove barriers throughout.",
    items: [
      "Doorway widening to 32\"–36\" ADA clearance",
      "Removal of threshold transitions",
      "Pocket doors where space is limited",
      "Lever-style door handles throughout",
      "Improved corridor lighting",
    ],
  },
  {
    area: "Entryways & Exterior",
    desc: "Safe entry and exit from the home is foundational — we create no-step solutions that look built-in.",
    items: [
      "No-step entry ramps with matching finishes",
      "Handrails on both sides of all steps",
      "Motion-sensor exterior lighting",
      "Wider garage entry doors",
      "Slip-resistant exterior surfaces",
    ],
  },
  {
    area: "Whole-Home Safety",
    desc: "Small upgrades throughout the home make a big difference in day-to-day confidence and independence.",
    items: [
      "Stair lifts and handrail reinforcement",
      "First-floor bedroom & bathroom conversions",
      "Motion-activated lighting in hallways",
      "Smart home controls for lights & locks",
      "Flooring transitions eliminated",
      "Rocker-style light switches",
    ],
  },
];

export default function AgeInPlacePage() {
  const projects = getProjectsByService("age-in-place");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Age in Place Remodeling</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Age in Place Remodeling in Atlanta, GA</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Stay in the home you love — safely and independently. We design and build ADA-compliant modifications that blend seamlessly with your existing home.
        </p>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">Your home. Your independence.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Age in place remodeling is about designing your home to support you as your needs change over time — without having to leave the neighborhood, the memories, or the life you've built. The goal is always a home that feels normal, not institutional.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              TopFlight Builders specializes in modifications that improve safety, accessibility, and comfort. Every project is tailored to the specific homeowner — we start with a thorough walkthrough and build a plan that fits both your current needs and future ones.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "ADA", label: "Compliant Builds" },
                { value: "100%", label: "Custom to Your Home" },
                { value: "ATL", label: "Serving Greater Atlanta" },
                { value: "5★", label: "Google Rated" },
              ].map((s) => (
                <div key={s.label} className="bg-[#F7F8FA] rounded-xl p-4 text-center border border-gray-100">
                  <div className="font-sans text-2xl font-extrabold text-[#1E4FBF] mb-1">{s.value}</div>
                  <div className="text-gray-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Schedule a Walkthrough
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Img src="/images/ada1.jpg" alt="Age in place bathroom modification — accessible shower" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md lg:mt-10">
              <Img src="/images/ada2.jpg" alt="Age in place remodel — grab bars and accessible design" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Modifications by area */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-4">Modifications By Area</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every age-in-place project is different. Below are the most common modifications we perform — your plan will be built around your home and your goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modifications.map((mod) => (
              <div key={mod.area} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-sans font-bold text-[#0D1B2E] text-lg mb-2">{mod.area}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{mod.desc}</p>
                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#1E4FBF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {projects.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E]">Recent Age in Place Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBanner />
    </>
  );
}
