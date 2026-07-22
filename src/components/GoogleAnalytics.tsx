"use client";
import { useEffect } from "react";
import { CONSENT_KEY } from "./ConsentBanner";

// ── SWAP THIS when you have the real Measurement ID ──────────────────────────
const GA_ID = "G-2LK6KF7J88";
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGA() {
  // Don't double-inject
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  // Update Consent Mode to granted
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  // Inject GA4 async loader
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Init gtag queue (may already exist from the consent-defaults head script)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(CONSENT_KEY) !== "granted") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load immediately if consent was already granted in a previous visit
    if (localStorage.getItem(CONSENT_KEY) === "granted") loadGA();

    // Load when user accepts in this session
    window.addEventListener("topflight:consent-granted", loadGA);
    return () => window.removeEventListener("topflight:consent-granted", loadGA);
  }, []);

  return null;
}
