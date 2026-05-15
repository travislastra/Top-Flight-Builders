import Link from "next/link";

const BASE = "/Top-Flight-Builders";

const services = [
  {
    photo: "/images/projects/kitchen-laundry-east-cobb/03.jpg",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a stylish, functional space with custom cabinetry, countertops, and layout design.",
    href: "/services/kitchen-remodeling",
  },
  {
    photo: "/images/projects/bathroom-brookhaven/02.jpg",
    title: "Bathroom Remodeling",
    description: "Create a personal sanctuary with spa-inspired features, custom tile work, and premium fixtures.",
    href: "/services/bathroom-remodeling",
  },
  {
    photo: "/images/home-run-1.jpg",
    title: "Restoration",
    description: "Expert restoration services to bring your home back to life — water damage, structural repairs, and more.",
    href: "/services/restoration",
  },
  {
    photo: "/images/projects/whole-home-east-cobb/04.jpg",
    title: "Full Home Remodeling",
    description: "Reimagine your entire home from top to bottom with a cohesive design and flawless execution.",
    href: "/services/full-home-remodeling",
  },
  {
    photo: "/images/projects/basement-east-cobb/03.jpg",
    title: "Basements & Additions",
    description: "Expand your living space with a fully finished basement or home addition — designed and built to seamlessly match your existing home.",
    href: "/services",
  },
  {
    photo: "/images/ada1.jpg",
    title: "Age in Place Remodeling",
    description: "ADA-compliant modifications that let you stay in your home safely and independently — grab bars, zero-threshold showers, wider doorways, and more.",
    href: "/services/age-in-place",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#0D1B2E] mb-4">
            A Few of Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From single-room renovations to complete home transformations — we handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden shadow-sm group min-h-[240px]"
            >
              {/* Background photo */}
              <img
                src={`${BASE}${service.photo}`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay — heavier at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />

              {/* Content */}
              <div className="relative p-7 flex flex-col justify-end h-full min-h-[240px]">
                <h3 className="font-sans text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-white font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group-hover:text-[#4A7FE8]"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
