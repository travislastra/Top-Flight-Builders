"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Team", href: "/about/our-team" },
      { label: "Financing", href: "/about/financing" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { label: "Restoration", href: "/services/restoration" },
      { label: "Full Home Remodeling", href: "/services/full-home-remodeling" },
      { label: "Commercial", href: "/services/commercial" },
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
      <div className="hidden lg:flex justify-end items-center px-8 py-2 bg-[#091523] text-sm text-gray-400 gap-6">
        <a href="tel:4043697129" className="hover:text-white transition-colors">
          (404) 369-7129
        </a>
        <a
          href="mailto:admin@topflightbuilders.net"
          className="hover:text-white transition-colors"
        >
          admin@topflightbuilders.net
        </a>
        <span>Marietta, GA 30066</span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="TopFlight Builders"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors uppercase tracking-wide"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors uppercase tracking-wide block"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div
                  className="absolute left-0 top-full mt-1 w-52 bg-white rounded-lg shadow-xl py-1 z-50"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
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

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#152438] border-t border-white/10 px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold text-gray-200 uppercase tracking-wide border-b border-white/5"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white"
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
                  className="block py-3 text-sm font-semibold text-gray-200 uppercase tracking-wide border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center bg-[#1E4FBF] text-white font-bold text-sm px-5 py-3 rounded-lg uppercase tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
