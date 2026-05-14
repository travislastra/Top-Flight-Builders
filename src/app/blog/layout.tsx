import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remodeling Blog — Tips & Guides | TopFlight Builders",
  description: "Expert remodeling tips, cost guides, and project inspiration for Greater Atlanta homeowners. Kitchen, bathroom, basement, and full home renovation advice from TopFlight Builders.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
