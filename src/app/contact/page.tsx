import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact a Remodeling Contractor | Marietta and Canton GA | TopFlight Builders",
  description: "Contact TopFlight Builders for a free remodeling estimate in Marietta and Canton, GA. Kitchens, baths, full homes, and restoration. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]} />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Let&apos;s Talk</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Get a Free Estimate</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">No-obligation, no pressure — just an honest conversation about your project.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              {[
                { label: "Phone", value: "(404) 369-7129", href: "tel:4043697129", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                { label: "Email", value: "Admin@TopFlightBuilders.net", href: "mailto:Admin@TopFlightBuilders.net", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { label: "Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM", href: null, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Location", value: "Marietta, GA 30066", href: null, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="bg-[#1E4FBF]/10 rounded-xl p-3 shrink-0">
                    <svg className="w-5 h-5 text-[#1E4FBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-[#0D1B2E] hover:text-[#1E4FBF] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-[#0D1B2E]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-sans font-bold text-[#0D1B2E] mb-2">Service Area</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We serve homeowners throughout the Greater Atlanta area including Marietta, Alpharetta, Canton,
                Kennesaw, Smyrna, Sandy Springs, Woodstock, Roswell, East Cobb, Acworth, Milton, and surrounding communities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
