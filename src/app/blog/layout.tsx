import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Remodeling Tips and Guides | Marietta GA | TopFlight Builders",
  description: "Expert remodeling tips, cost guides, and project inspiration for Marietta and Canton, GA homeowners by TopFlight Builders. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
      ]} />
      {children}
    </>
  );
}
