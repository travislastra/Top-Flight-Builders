"use client";
import { trackEvent } from "@/components/GoogleAnalytics";
export default function MobileCallBar() {
  return (
    <a
      href="tel:4043697129"
      onClick={() => trackEvent("contact", { method: "phone" })}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2.5 bg-[#1E4FBF] text-white font-bold text-base uppercase tracking-wide shadow-[0_-2px_10px_rgba(0,0,0,0.25)] lg:hidden"
      style={{ minHeight: "56px" }}
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call (404) 369-7129
    </a>
  );
}
