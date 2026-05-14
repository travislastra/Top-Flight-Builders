"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const BASE = "/Top-Flight-Builders";

export default function HeroPlaceholder() {
  const bgLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgLogoRef.current) return;
      const scrollY = window.scrollY;
      // Parallax: logo moves up at 35% of scroll speed (slower = deeper feel)
      const translateY = scrollY * 0.35;
      // Fade: starts at 0.13 opacity, fades out as hero leaves view
      const opacity = Math.max(0, 0.13 - scrollY * 0.00025);
      bgLogoRef.current.style.transform = `translateY(${translateY}px) translateX(-50%)`;
      bgLogoRef.current.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0D1B2E] flex flex-col items-center justify-center overflow-hidden">

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2E] via-[#152438] to-[#0D1B2E]" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,79,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,79,191,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large background logo — parallax + fade on scroll */}
      <div
        ref={bgLogoRef}
        className="absolute top-1/2 left-1/2 pointer-events-none select-none"
        style={{
          opacity: 0.13,
          transform: "translateY(-50%) translateX(-50%)",
          width: "min(90vw, 900px)",
        }}
        aria-hidden="true"
      >
        <img
          src={`${BASE}/logo.png`}
          alt=""
          className="w-full brightness-0 invert"
          draggable={false}
        />
      </div>

      {/* Floating accent glows */}
      <div className="absolute top-1/4 right-16 w-72 h-72 bg-[#1E4FBF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-16 w-56 h-56 bg-[#1E4FBF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-4">
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
          <Link
            href="/services"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
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
