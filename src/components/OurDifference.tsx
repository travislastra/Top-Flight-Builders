import Link from "next/link";

const BASE = "/Top-Flight-Builders";

const differentiators = [
  {
    photo: "/images/projects/more-from-us/02.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Personalized Professional Service",
    description: "Every project is unique. We take time to understand your vision, lifestyle, and budget to deliver results tailored specifically to you.",
  },
  {
    photo: "/images/projects/more-from-us/07.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Unmatched Craftsmanship",
    description: "We hold ourselves to the highest standards of quality. From the framing to the final finish, every detail is executed with precision and care.",
  },
  {
    photo: "/images/projects/more-from-us/13.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Comprehensive Solutions",
    description: "From initial design consultation through final walkthrough, we manage every aspect of your renovation — one team, one point of contact.",
  },
  {
    photo: "/images/projects/more-from-us/19.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Atlanta Community Commitment",
    description: "We are proud to serve our Greater Atlanta neighbors. Supporting our local community and building lasting relationships is at the heart of everything we do.",
  },
];

export default function OurDifference() {
  return (
    <section className="py-20 px-6 bg-[#0D1B2E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
            Why TopFlight
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Difference
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            What sets us apart from the rest — and why Atlanta homeowners trust TopFlight Builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Photo background */}
              <img
                src={`${BASE}${d.photo}`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#0D1B2E]/80 to-[#0D1B2E]/60" />
              {/* Content */}
              <div className="relative p-7 border border-white/10 rounded-2xl h-full">
                <div className="text-[#4A7FE8] mb-4">{d.icon}</div>
                <h3 className="font-sans font-bold text-white text-base mb-3">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-5 gap-2 rounded-2xl overflow-hidden mb-12 h-28">
          {["/images/projects/more-from-us/04.jpg", "/images/projects/more-from-us/10.jpg", "/images/projects/more-from-us/16.jpg", "/images/projects/more-from-us/22.jpg", "/images/projects/more-from-us/28.jpg"].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={`${BASE}${src}`} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
