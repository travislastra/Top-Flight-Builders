"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const CONSENT_KEY = "topflight-consent-v1";

// Stored values: "granted" and "denied" are explicit choices. "dismissed"
// means the visitor closed the opt-out notice; it is NOT consent, so the
// region defaults set in layout.tsx still apply.
export function getConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function hasGlobalPrivacyControl(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

// Whether GA may load. Explicit "granted" always loads it. Otherwise, explicit
// "denied", Global Privacy Control, and opt-in time zones (European or US
// Pacific; a missing value fails closed) keep GA off entirely until Accept.
// Everyone else loads it, and the region default in layout.tsx still denies
// storage for EEA/UK/CH and US-CA visitors whose time zone does not match.
export function analyticsAllowed(): boolean {
  const saved = getConsent();
  if (saved === "granted") return true;
  if (saved === "denied") return false;
  if (hasGlobalPrivacyControl()) return false;
  return window.topflightOptInTz === false;
}

type Mode = "opt-in" | "opt-out" | null;

export default function ConsentBanner() {
  const [mode, setMode] = useState<Mode>(null);

  useEffect(() => {
    const saved = getConsent();

    // Set by the inline consent default; a missing value fails closed (opt-in).
    // GPC visitors who open Cookie Settings get the opt-in banner.
    const gpc = hasGlobalPrivacyControl();
    const optInMode: Mode = !gpc && window.topflightOptInTz === false ? "opt-out" : "opt-in";

    // Honor Global Privacy Control — auto-deny without prompting
    if (gpc) {
      if (saved !== "granted" && saved !== "denied") {
        localStorage.setItem(CONSENT_KEY, "denied");
      }
    } else {
      const explicit = saved === "granted" || saved === "denied";
      if (!explicit && !(saved === "dismissed" && optInMode === "opt-out")) setMode(optInMode);
    }

    const handleOpen = () => setMode(optInMode);
    window.addEventListener("topflight:open-consent", handleOpen);
    return () => window.removeEventListener("topflight:open-consent", handleOpen);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setMode(null);
    window.dispatchEvent(new Event("topflight:consent-granted"));
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setMode(null);
    // GA may already be running for opt-out visitors; stop it storing anything.
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
  }

  function dismiss() {
    localStorage.setItem(CONSENT_KEY, "dismissed");
    setMode(null);
  }

  if (!mode) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      // Sits above MobileCallBar (56px) on mobile; flush with bottom on desktop
      className="fixed bottom-[56px] lg:bottom-0 left-0 right-0 z-50 bg-[#0D1B2E] border-t border-[#1E4FBF]/40 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-gray-300 text-sm leading-relaxed flex-1">
          We use Google Analytics to understand how visitors find and use our site. No advertising, session recording, or behavioral tracking is used.
          {mode === "opt-out" && " You can opt out at any time."}{" "}
          <Link href="/privacy-policy" className="text-[#4A7FE8] underline">
            Privacy Policy
          </Link>
        </p>
        {mode === "opt-in" ? (
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="bg-[#1E4FBF] hover:bg-[#163A99] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
            >
              Accept Analytics
            </button>
          </div>
        ) : (
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400 transition-colors"
            >
              Opt Out
            </button>
            <button
              onClick={dismiss}
              className="bg-[#1E4FBF] hover:bg-[#163A99] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
            >
              Got It
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
