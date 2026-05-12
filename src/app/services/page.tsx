import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Services | TopFlight Builders",
  description: "Kitchen remodeling, bathroom renovations, restoration, full home remodeling, and commercial services in Greater Atlanta.",
};

const services = [
  { title: "Kitchen Remodeling", href: "/services/kitchen-remodeling", icon: "🍳", desc: "Transform your kitchen into a stylish, functional space with custom cabinetry, countertops, and layout design." },
  { title: "Bathroom Remodeling", href: "/services/bathroom-remodeling", icon: "🚿", desc: "Create a personal sanctuary with spa-inspired features, custom tile work, and premium fixtures." },
  { title: "Restoration", href: "/services/restoration", icon: "🔧", desc: "Expert restoration services — water damage, structural repairs, and full property recovery." },
  { title: "Full Home Remodeling", href: "/services/full-home-remodeling", icon: "🏠", desc: "Reimagine your entire home from top to bottom with cohesive design and flawless execution." },
  { title: "Commercial", href: "/services/commercial", icon: "🏢", desc: "Professional commercial renovation and build-out services for Atlanta-area businesses." },
  { title: "Flooring & Finishes", href: "/services", icon: "🪵", desc: "Premium flooring installation and expert finishing touches throughout your space." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Our Services</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">From single rooms to complete renovations — we handle every detail.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#1E4FBF]/20 transition-all">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h2 className="font-sans font-bold text-xl text-[#0D1B2E] mb-3 group-hover:text-[#1E4FBF] transition-colors">{s.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <span className="text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
