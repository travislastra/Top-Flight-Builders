"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingEstimateCta() {
  const pathname = usePathname();
  // Hide on contact page — user is already there
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className={[
        "fixed z-40 right-4 lg:right-6",
        // On mobile: sits above the 56px call bar + 8px gap
        "bottom-[72px] lg:bottom-6",
        "flex items-center gap-2",
        "bg-[#0D1B2E] hover:bg-[#1E4FBF] text-white font-bold text-sm uppercase tracking-wide",
        "px-5 py-3 rounded-full shadow-xl transition-colors duration-200",
        // Minimum tap target
        "min-h-[44px]",
      ].join(" ")}
      aria-label="Get a free estimate"
    >
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <span>Free Estimate</span>
    </Link>
  );
}
