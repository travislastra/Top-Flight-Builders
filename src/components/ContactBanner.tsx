export default function ContactBanner() {
  return (
    <section className="bg-[#1E4FBF] py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <div className="text-white/70 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Call Us</p>
            <a href="tel:4043697129" className="text-white font-semibold hover:text-blue-100 transition-colors">
              (404) 369-7129
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <div className="text-white/70 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Email Us</p>
            <a href="mailto:Admin@TopFlightBuilders.net" className="text-white font-semibold hover:text-blue-100 transition-colors text-sm">
              Admin@TopFlightBuilders.net
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <div className="text-white/70 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Location</p>
            <p className="text-white font-semibold">Marietta, GA 30066</p>
            <p className="text-blue-200 text-xs">Serving Greater Atlanta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
