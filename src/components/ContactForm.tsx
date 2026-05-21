"use client";
import { useState } from "react";
import Link from "next/link";

// Drop NEXT_PUBLIC_W3F_KEY into GitHub → Settings → Secrets → Actions
// then add it to the `env:` block in .github/workflows/deploy.yml
// Sign up free at https://web3forms.com to get a key
const W3F_KEY = process.env.NEXT_PUBLIC_W3F_KEY ?? "";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Full Home Remodeling",
  "Basements & Additions",
  "Restoration (Water / Storm / Fire)",
  "Roofing",
  "Siding",
  "Age in Place Remodeling",
  "Commercial",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", W3F_KEY);
    data.append("subject", "New Estimate Request — TopFlight Builders");
    data.append("from_name", "TopFlight Builders Website");

    if (!W3F_KEY) {
      // Key not configured yet — log locally so the build works in dev
      console.info("ContactForm: NEXT_PUBLIC_W3F_KEY not set. Submission data:", Object.fromEntries(data));
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sans font-extrabold text-xl text-[#0D1B2E] mb-2">Message sent!</h3>
        <p className="text-gray-500 text-sm mb-6">
          We&apos;ll be in touch within 1 business day. For urgent needs, call us directly.
        </p>
        <a
          href="tel:4043697129"
          className="inline-flex items-center gap-2 text-[#1E4FBF] font-bold hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (404) 369-7129
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Your Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#1E4FBF] transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="jane@example.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#1E4FBF] transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Phone <span className="text-red-400">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="(404) 555-0000"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#1E4FBF] transition-colors"
        />
      </div>

      {/* Project type */}
      <div>
        <label htmlFor="project_type" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Project Type <span className="text-red-400">*</span>
        </label>
        <select
          id="project_type"
          name="project_type"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#1E4FBF] transition-colors text-gray-700 bg-white"
        >
          <option value="">Select a service...</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Rough timeline, scope, any specifics that would help us prepare..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#1E4FBF] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {!W3F_KEY
            ? "Form not yet configured. Please call us at "
            : "Something went wrong. Please try again or call us at "}
          <a href="tel:4043697129" className="font-bold underline">(404) 369-7129</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1E4FBF] hover:bg-[#163A99] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-wide text-sm min-h-[52px]"
      >
        {status === "loading" ? "Sending…" : "Get a Free Estimate"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Or call us directly:{" "}
        <a href="tel:4043697129" className="text-[#1E4FBF] font-semibold hover:underline">
          (404) 369-7129
        </a>
      </p>
    </form>
  );
}
