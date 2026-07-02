"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const CONSENT_KEY = "topflight-consent-v1";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Honor Global Privacy Control — auto-deny without prompting
    if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) {
      if (!localStorage.getItem(CONSENT_KEY)) {
        localStorage.setItem(CONSENT_KEY, "denied");
      }
      return;
    }

    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);

    const handleOpen = () => setVisible(true);
    window.addEventListener("topflight:open-consent", handleOpen);
    return () => window.removeEventListener("topflight:open-consent", handleOpen);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setVisible(false);
    window.dispatchEvent(new Event("topflight:consent-granted"));
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  }

  if (!visible) return null;

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
          We use Google Analytics to understand how visitors find and use our site. No advertising, session recording, or behavioral tracking is used.{" "}
          <Link href="/privacy-policy" className="text-[#4A7FE8] hover:underline">
            Privacy Policy
          </Link>
        </p>
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
      </div>
    </div>
  );
}
