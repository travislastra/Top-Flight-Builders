import Link from "next/link";

const services = [
  {
    icon: "🍳",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a stylish, functional space with custom cabinetry, countertops, and layout design.",
    href: "/services/kitchen-remodeling",
  },
  {
    icon: "🚿",
    title: "Bathroom Remodeling",
    description: "Create a personal sanctuary with spa-inspired features, custom tile work, and premium fixtures.",
    href: "/services/bathroom-remodeling",
  },
  {
    icon: "🔧",
    title: "Restoration",
    description: "Expert restoration services to bring your home back to life — water damage, structural repairs, and more.",
    href: "/services/restoration",
  },
  {
    icon: "🏠",
    title: "Full Home Remodeling",
    description: "Reimagine your entire home from top to bottom with a cohesive design and flawless execution.",
    href: "/services/full-home-remodeling",
  },
  {
    icon: "🏗️",
    title: "Basements & Additions",
    description: "Expand your living space with a fully finished basement or home addition — designed and built to seamlessly match your existing home.",
    href: "/services",
  },
  {
    icon: "♿",
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
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1E4FBF]/20 transition-all group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-sans text-lg font-bold text-[#0D1B2E] mb-2 group-hover:text-[#1E4FBF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
