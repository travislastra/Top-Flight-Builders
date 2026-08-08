"use client";
import Link from "next/link";

interface Props {
  source?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function EstimateCtaLink({ href = "/contact", className, children }: Props) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
