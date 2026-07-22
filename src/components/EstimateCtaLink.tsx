"use client";
import Link from "next/link";
import { trackEvent } from "@/components/GoogleAnalytics";

interface Props {
  source: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function EstimateCtaLink({ source, href = "/contact", className, children }: Props) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("generate_lead", { source })}
      className={className}
    >
      {children}
    </Link>
  );
}
