"use client";
import { useState } from "react";

const HOUZZ_FORM_URL =
  "https://www.houzz.com/contact-forms/view/6cfb11ee-037b-45f3-aa6d-74c7ea3e6e36";

export default function ContactForm() {
  const [blocked, setBlocked] = useState(false);

  return (
    <div className="w-full">
      {!blocked ? (
        <iframe
          src={HOUZZ_FORM_URL}
          title="Request a Free Estimate"
          className="w-full rounded-xl border-0"
          style={{ minHeight: 680 }}
          onError={() => setBlocked(true)}
          loading="lazy"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        />
      ) : (
        /* Fallback if Houzz blocks the iframe */
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm mb-6">
            Our estimate form is hosted on Houzz. Click below to open it.
          </p>
          <a
            href={HOUZZ_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Request a Free Estimate
          </a>
          <p className="mt-6 text-xs text-gray-400">
            Or call us directly:{" "}
            <a href="tel:4043697129" className="text-[#1E4FBF] font-semibold hover:underline">
              (404) 369-7129
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
