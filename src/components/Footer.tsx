import Link from "next/link";
import Img from "@/components/Img";

const services = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Restoration", href: "/services/restoration" },
  { label: "Full Home Remodeling", href: "/services/full-home-remodeling" },
  { label: "Commercial", href: "/services/commercial" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "More From Us", href: "/more-from-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

const getStarted = [
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/contact" },
  { label: "Our Services", href: "/services" },
  { label: "View Portfolio", href: "/portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2E] text-gray-300">
      {/* Start Your Project strip */}
      <div className="bg-[#1E4FBF] py-10 px-6 text-center">
        <h3 className="font-sans text-2xl font-bold text-white mb-3">
          Ready to Start Your Project?
        </h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Contact us today for a free estimate. Greater Atlanta&apos;s trusted remodeling experts.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#1E4FBF] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm"
        >
          Start Your Project
        </Link>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/">
            <Img
              src="/logo.png"
              alt="TopFlight Builders"
              width={160}
              height={54}
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Greater Atlanta&apos;s construction experts. 20+ years of combined experience in remodeling and restoration.
          </p>
          <p className="text-sm font-semibold text-white italic">Quality · Reliability · Value</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-4">Company</h4>
          <ul className="space-y-2">
            {company.map((c) => (
              <li key={c.label}>
                <Link href={c.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-4">Get Started</h4>
          <ul className="space-y-2">
            {getStarted.map((g) => (
              <li key={g.label}>
                <Link href={g.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-4">Contact Us</h4>
          <div className="space-y-3 mb-6">
            <a href="tel:4043697129" className="flex items-center gap-2 text-sm text-white font-semibold hover:text-[#4A7FE8] transition-colors">
              <svg className="w-4 h-4 shrink-0 text-[#4A7FE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (404) 369-7129
            </a>
            <a href="mailto:Admin@TopFlightBuilders.net" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4 shrink-0 text-[#4A7FE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Admin@TopFlightBuilders.net
            </a>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 shrink-0 text-[#4A7FE8] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Marietta, GA 30066<br /><span className="text-gray-500">Serving Greater Atlanta</span></span>
            </div>
          </div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/TopFlightBuildersLLC" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/topflightbuildersllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190" target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L0 6.93v10.14L12 24l12-6.93V6.93L12 0zm-1.5 17.25V13.5H7.5v3.75H6V6.75l6-3.46 6 3.46v10.5h-1.5V13.5h-3v3.75h-1.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TopFlight Builders LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
