import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "About Us | TopFlight Builders",
  description: "Learn about TopFlight Builders — Greater Atlanta's trusted remodeling experts with 20+ years of combined experience.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#0D1B2E] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">About TopFlight</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Who We Are</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Greater Atlanta&apos;s construction experts — built on trust, driven by craftsmanship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-sans text-4xl font-extrabold text-[#0D1B2E] mb-6 leading-tight">
              20+ Years of Combined Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TopFlight Builders was founded on a simple belief: every homeowner deserves a remodeling partner they can truly trust. With over 20 years of combined experience in the Greater Atlanta area, our team has built a reputation for delivering exceptional results — on time, on budget, and beyond expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in kitchen and bathroom remodeling, full home renovations, restoration, and commercial build-outs. Whether you&apos;re dreaming of a spa-inspired master bath or a complete home transformation, we have the expertise to make it happen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our commitment to quality, reliability, and value has earned us the trust of hundreds of Atlanta-area homeowners and businesses.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm">
                Get a Quote
              </Link>
              <Link href="/portfolio" className="border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm">
                Our Work
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Years Combined Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "5★", label: "Average Client Rating" },
              { value: "ATL", label: "Greater Atlanta Proud" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F7F8FA] rounded-2xl p-7 text-center border border-gray-100">
                <div className="font-sans text-4xl font-extrabold text-[#1E4FBF] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="font-sans text-4xl font-extrabold text-[#0D1B2E]">Our Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Quality", desc: "We never cut corners. Every project is executed with precision and the finest materials available." },
            { title: "Reliability", desc: "We show up on time, communicate clearly, and deliver what we promise — every single time." },
            { title: "Value", desc: "Fair, transparent pricing with no surprises. You get exceptional craftsmanship at a price that makes sense." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <h3 className="font-sans font-extrabold text-2xl text-[#1E4FBF] mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

<ContactBanner />
    </>
  );
}
