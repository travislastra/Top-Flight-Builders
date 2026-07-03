"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { resolveImg, toWebP, buildWebPSrcSet } from "@/lib/image-utils";

const BASE_SLIDES = [
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-01.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-04.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-08.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-12.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-16.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-20.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-24.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-28.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-32.jpg",
  "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-35.jpg",
];

// Pre-resolve URLs so render is pure
const SLIDES = BASE_SLIDES.map((src) => ({
  jpg: resolveImg(src),
  webp: toWebP(resolveImg(src)),
  srcSet: buildWebPSrcSet(toWebP(resolveImg(src))),
}));

export default function HeroPlaceholder() {
  const [active, setActive] = useState(0);
  const bgLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgLogoRef.current) return;
      const scrollY = window.scrollY;
      bgLogoRef.current.style.transform = `translateX(-50%) translateY(${scrollY * 0.8}px)`;
      bgLogoRef.current.style.opacity = String(Math.max(0, 0.08 - Math.max(0, scrollY - 600) * 0.0004));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0D1B2E] flex flex-col items-center justify-center overflow-hidden">

      {SLIDES.map(({ jpg, webp, srcSet }, i) => (
        <picture key={jpg} style={{ display: "contents" }}>
          {/* First slide: preloaded with matching imagesrcset — use same srcset here so browser reuses the fetch */}
          {/* Other slides: full srcset for bandwidth savings when lazy-loaded */}
          <source srcSet={srcSet} sizes="100vw" type="image/webp" />
          <img
            src={jpg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: i === active ? 0.28 : 0 }}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            // @ts-ignore — fetchpriority valid HTML, not yet in React types
            fetchpriority={i === 0 ? "high" : undefined}
          />
        </picture>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2E]/80 via-[#0D1B2E]/65 to-[#0D1B2E]/85 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,79,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,79,191,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={bgLogoRef}
        className="absolute left-1/2 pointer-events-none select-none"
        style={{ top: "-6%", opacity: 0.08, transform: "translateX(-50%)", width: "min(90vw, 900px)" }}
        aria-hidden="true"
      >
        <img
          src="/logo.png"
          alt=""
          className="w-full brightness-0 invert"
          draggable={false}
        />
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === active ? "white" : "rgba(255,255,255,0.35)", transform: i === active ? "scale(1.4)" : "scale(1)" }}
          />
        ))}
      </div>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}
