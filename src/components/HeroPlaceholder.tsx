export default function HeroPlaceholder() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#0D1B2E] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated placeholder box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-[#0D1B2E] via-[#152438] to-[#0D1B2E] hero-placeholder" />
      </div>

      {/* Placeholder label */}
      <div className="absolute top-6 left-6 bg-[#1E4FBF]/80 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10">
        Primary Animation — Placeholder
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,79,191,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,79,191,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating brand accent */}
      <div className="absolute top-1/4 right-12 w-64 h-64 bg-[#1E4FBF]/20 rounded-full blur-3xl hero-placeholder" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-12 w-48 h-48 bg-[#1E4FBF]/15 rounded-full blur-3xl hero-placeholder" style={{ animationDelay: "2s" }} />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-4">
          Greater Atlanta&apos;s Construction Experts
        </p>
        <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          We Are Your Trusted Local{" "}
          <span className="text-[#4A7FE8]">Design to Build</span> Partner
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience a faster, smoother, and genuine remodeling process — from design to finish. Quality · Reliability · Value.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/services"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
