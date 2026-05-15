"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Img from "@/components/Img";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { label: "Full Home Remodeling", href: "/services/full-home-remodeling" },
      { label: "Restoration", href: "/services/restoration" },
      { label: "Basements & Additions", href: "/services" },
      { label: "Age in Place", href: "/services/age-in-place" },
      { label: "Commercial", href: "/services/commercial" },
      { label: "Flooring & Finishes", href: "/services" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#0D1B2E] shadow-lg"
    >
      {/* Top bar */}
      <div className="hidden lg:flex justify-end items-center px-8 py-2 bg-[#091523] text-sm text-white gap-6 font-bold">
        <a href="tel:4043697129" className="text-white hover:text-blue-200 transition-colors">
          (404) 369-7129
        </a>
        <a
          href="mailto:Admin@TopFlightBuilders.net"
          className="text-white hover:text-blue-200 transition-colors"
        >
          Admin@TopFlightBuilders.net
        </a>
        <span>Marietta, GA 30066</span>
      </div>

      {/* Main nav — flex on mobile, 3-col grid on desktop */}
      <div className="flex items-center justify-between lg:grid lg:grid-cols-3 px-4 lg:px-10 py-1">

        {/* Col 1: Logo */}
        <Link href="/" className="flex items-center">
          <Img
            src="/logo.png"
            alt="TopFlight Builders"
            width={180}
            height={60}
            className="h-24 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Col 2: Nav links — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-lg font-semibold text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors uppercase tracking-wide"
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-lg font-semibold text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors uppercase tracking-wide block"
                >
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full w-52 bg-white rounded-lg shadow-xl py-1 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1E4FBF] hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Col 3: Socials + CTA — right aligned */}
        <div className="hidden lg:flex items-center justify-end gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/TopFlightBuildersLLC" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/topflightbuildersllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190" target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L0 6.93v10.14L12 24l12-6.93V6.93L12 0zm-1.5 17.25V13.5H7.5v3.75H6V6.75l6-3.46 6 3.46v10.5h-1.5V13.5h-3v3.75h-1.5z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@topflightbuildersatl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
              </svg>
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold text-lg px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile: hamburger right */}
        <div className="lg:hidden flex justify-end">
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#152438] border-t border-white/10">
          <div className="px-5 py-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-4 text-base font-bold text-white uppercase tracking-wide border-b border-white/10"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="bg-[#0D1B2E]/40 rounded-lg my-1 py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-base font-bold text-white uppercase tracking-wide border-b border-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-5 mb-2 block text-center bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold text-base px-5 py-4 rounded-lg uppercase tracking-wide transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-white/10 mt-2">
              <a href="https://www.facebook.com/TopFlightBuildersLLC" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/topflightbuildersllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190" target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L0 6.93v10.14L12 24l12-6.93V6.93L12 0zm-1.5 17.25V13.5H7.5v3.75H6V6.75l6-3.46 6 3.46v10.5h-1.5V13.5h-3v3.75h-1.5z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@topflightbuildersatl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.45a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
