"use client";
import { useEffect } from "react";
import { analyticsAllowed, getConsent } from "./ConsentBanner";

// ── SWAP THIS when you have the real Measurement ID ──────────────────────────
const GA_ID = "G-2LK6KF7J88";
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    topflightOptInTz?: boolean;
  }
}

function loadGA() {
  // An explicit Accept overrides the region default (EEA/UK/CH, US-CA), which
  // denies analytics_storage. Ad signals stay denied for everyone.
  if (getConsent() === "granted" && typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  // Don't double-inject
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  // Inject GA4 async loader
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!analyticsAllowed()) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load unless the visitor opted out (explicit "denied" or Global Privacy
    // Control). Consent Mode defaults in layout.tsx decide what is stored.
    if (analyticsAllowed()) loadGA();

    // Load when user accepts in this session
    window.addEventListener("topflight:consent-granted", loadGA);
    return () => window.removeEventListener("topflight:consent-granted", loadGA);
  }, []);

  return null;
}
