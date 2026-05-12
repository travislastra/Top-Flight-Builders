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
  { label: "Our Team", href: "/about/our-team" },
  { label: "Financing", href: "/about/financing" },
  { label: "Portfolio", href: "/portfolio" },
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
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Link href="/">
            <Img
              src="/logo.png"
              alt="TopFlight Builders"
              width={160}
              height={54}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
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

        {/* Get Started + Contact */}
        <div>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-4">Get Started</h4>
          <ul className="space-y-2 mb-6">
            {getStarted.map((g) => (
              <li key={g.label}>
                <Link href={g.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-sans font-bold text-white uppercase tracking-wider text-xs mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/TopFlightBuildersLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
            <a
              href="https://www.houzz.com/pro/ilian_bogdanov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Houzz"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L0 6.93v10.14L12 24l12-6.93V6.93L12 0zm-1.5 17.25V13.5H7.5v3.75H6V6.75l6-3.46 6 3.46v10.5h-1.5V13.5h-3v3.75h-1.5z" />
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
