import Link from "next/link";

const cards = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Request a Quote",
    description: "Tell us about your project and we'll provide a detailed, no-obligation estimate.",
    cta: "Get Started",
    href: "/contact",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Explore Our Services",
    description: "Browse our full range of remodeling and construction services for your home or business.",
    cta: "View Services",
    href: "/services",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "See Our Work",
    description: "View our portfolio of completed projects across the Greater Atlanta area.",
    cta: "View Portfolio",
    href: "/portfolio",
    highlight: false,
  },
];

export default function GetStarted() {
  return (
    <section className="py-20 px-6 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
            Ready to Begin?
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#0D1B2E] mb-4">
            How to Get Started
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-8 text-center border ${
                card.highlight
                  ? "bg-[#1E4FBF] border-[#1E4FBF] text-white shadow-lg"
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 ${
                  card.highlight ? "bg-white/20" : "bg-[#F7F8FA]"
                }`}
              >
                <div className={card.highlight ? "text-white" : "text-[#1E4FBF]"}>
                  {card.icon}
                </div>
              </div>
              <h3
                className={`font-sans font-bold text-xl mb-3 ${
                  card.highlight ? "text-white" : "text-[#0D1B2E]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-7 ${
                  card.highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {card.description}
              </p>
              <Link
                href={card.href}
                className={`inline-block font-bold text-sm px-6 py-3 rounded-lg transition-colors uppercase tracking-wide ${
                  card.highlight
                    ? "bg-white text-[#1E4FBF] hover:bg-gray-100"
                    : "bg-[#1E4FBF] text-white hover:bg-[#163A99]"
                }`}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
