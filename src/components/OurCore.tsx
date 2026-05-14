import Link from "next/link";

export default function OurCore() {
  return (
    <section className="py-20 px-6 bg-[#0D1B2E]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "5★", label: "5 Star Google Rating" },
            { value: "500+", label: "Projects Completed" },
            { value: "Local", label: "Locally Owned & Operated" },
            { value: "ATL", label: "Serving Greater Atlanta" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="font-sans text-4xl font-extrabold text-[#4A7FE8] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div>
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Core
          </p>
          <h2 className="font-sans text-4xl font-extrabold text-white leading-tight mb-6">
            Building better homes and better futures
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At TopFlight Builders, we believe that exceptional remodeling goes beyond the finished product. We are committed to building lasting relationships with our clients based on trust, transparency, and outstanding craftsmanship.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Whether you&apos;re transforming a single bathroom or reimagining your entire home, we bring the same level of dedication and professionalism to every project we take on in the Greater Atlanta area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
