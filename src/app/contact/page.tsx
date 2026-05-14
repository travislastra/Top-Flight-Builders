export const metadata = {
  title: "Contact | TopFlight Builders",
  description: "Get a free estimate from TopFlight Builders. Call (404) 369-7129 or fill out our contact form.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Let&apos;s Talk</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Contact Us</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Ready to start your project? Get in touch for a free, no-obligation estimate.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              {[
                { label: "Phone", value: "(404) 369-7129", href: "tel:4043697129", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                { label: "Email", value: "admin@topflightbuilders.net", href: "mailto:admin@topflightbuilders.net", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
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
                      <a href={item.href} className="font-semibold text-[#0D1B2E] hover:text-[#1E4FBF] transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-[#0D1B2E]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-sans font-bold text-[#0D1B2E] mb-2">Service Area</p>
              <p className="text-gray-500 text-sm leading-relaxed">We serve homeowners throughout the Greater Atlanta area including Atlanta, Decatur, Marietta, Dunwoody, Alpharetta, Canton, Kennesaw, Smyrna, Sandy Springs, Woodstock, Roswell, Tucker, Buckhead, Vinings, Brookhaven, Mableton, Acworth, Norcross, Duluth, and the surrounding areas.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="font-sans text-2xl font-bold text-[#0D1B2E] mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors" placeholder="(404) 555-0000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Service Interested In</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors text-gray-600">
                  <option value="">Select a service...</option>
                  <option>Kitchen Remodeling</option>
                  <option>Bathroom Remodeling</option>
                  <option>Restoration</option>
                  <option>Full Home Remodeling</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1E4FBF] transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
