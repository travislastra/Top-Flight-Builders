"use client";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("topflight:open-consent"))}
      className="hover:text-gray-300 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
