"use client";

import { useEffect } from "react";

// Keyed by "eventName:href:placement" — prevents double-fires from nested spans
// and rapid repeated clicks within 500ms.
const lastFired = new Map<string, number>();

function canFire(key: string): boolean {
  const now = Date.now();
  if (now - (lastFired.get(key) ?? 0) < 500) return false;
  lastFired.set(key, now);
  return true;
}

function getPlacement(el: Element): string {
  if (el.closest('[data-placement="sticky_mobile_bar"]')) return "sticky_mobile_bar";
  if (el.closest('[data-placement="top_bar"]')) return "top_bar";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest('[data-placement="contact_page"]')) return "contact_page";
  return "inline_content";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Element;
      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const placement = getPlacement(link);

      if (href.startsWith("tel:")) {
        const phone = href.replace(/\D/g, "");
        const key = `phone_call_click:${href}:${placement}`;
        if (!canFire(key)) return;
        if (typeof window.gtag === "function") {
          window.gtag("event", "phone_call_click", { link_placement: placement, phone_number: phone });
        }
        return;
      }

      if (href.startsWith("mailto:")) {
        const key = `email_click:${href}:${placement}`;
        if (!canFire(key)) return;
        if (typeof window.gtag === "function") {
          window.gtag("event", "email_click", { link_placement: placement });
        }
        return;
      }

      if (href === "/contact" || href.startsWith("/contact/") || href.startsWith("/contact?")) {
        const text = (link.textContent ?? "").trim().slice(0, 60);
        const key = `quote_cta_click:${href}:${placement}`;
        if (!canFire(key)) return;
        if (typeof window.gtag === "function") {
          window.gtag("event", "quote_cta_click", { link_placement: placement, cta_text: text });
        }
        return;
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
