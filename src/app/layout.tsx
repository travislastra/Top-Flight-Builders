import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FloatingEstimateCta from "@/components/FloatingEstimateCta";
import ConsentBanner from "@/components/ConsentBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://topflightbuilders.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Remodeling and Restoration Contractor | Marietta and Canton GA | TopFlight Builders",
    template: "%s | TopFlight Builders",
  },
  description:
    "Remodeling and restoration in Marietta and Canton, GA by TopFlight Builders. Kitchen, bath, and full-home experts. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
  keywords: [
    "kitchen remodeling Atlanta",
    "bathroom remodeling Atlanta",
    "home remodeling Marietta GA",
    "general contractor Atlanta",
    "remodeling company Atlanta GA",
    "TopFlight Builders",
  ],
  alternates: {
    canonical: BASE_URL + "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL + "/",
    siteName: "TopFlight Builders",
    title: "Remodeling and Restoration Contractor | Marietta and Canton GA | TopFlight Builders",
    description:
      "Remodeling and restoration in Marietta and Canton, GA by TopFlight Builders. Kitchen, bath, and full-home experts. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
    images: [
      {
        url: BASE_URL + "/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg",
        width: 1200,
        height: 630,
        alt: "TopFlight Builders — Atlanta remodeling experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remodeling and Restoration Contractor | Marietta and Canton GA | TopFlight Builders",
    description:
      "Remodeling and restoration in Marietta and Canton, GA by TopFlight Builders. Kitchen, bath, and full-home experts. Licensed, insured, 50+ five-star reviews. Free estimate: (404) 369-7129.",
    images: [BASE_URL + "/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg"],
  },
};

const DOMAIN = "https://topflightbuilders.net";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${DOMAIN}/#business`,
  "name": "TopFlight Builders LLC",
  "alternateName": "TopFlight Builders",
  "url": DOMAIN,
  "logo": `${DOMAIN}/logo.png`,
  "image": `${DOMAIN}/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg`,
  "telephone": "+1-404-369-7129",
  "email": "Admin@TopFlightBuilders.net",
  "priceRange": "$$-$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marietta",
    "addressRegion": "GA",
    "postalCode": "30066",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.9526",
    "longitude": "-84.5499",
  },
  "areaServed": [
    { "@type": "City", "name": "Marietta" },
    { "@type": "City", "name": "Canton" },
    { "@type": "City", "name": "Kennesaw" },
    { "@type": "City", "name": "Acworth" },
    { "@type": "City", "name": "Woodstock" },
    { "@type": "City", "name": "Roswell" },
    { "@type": "City", "name": "Alpharetta" },
    { "@type": "City", "name": "Smyrna" },
    { "@type": "City", "name": "East Cobb" },
    { "@type": "City", "name": "Milton" },
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "18:00",
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "64",
    "bestRating": "5",
    "worstRating": "1",
  },
  "sameAs": [
    "https://www.facebook.com/TopFlightBuildersLLC",
    "https://www.instagram.com/topflightbuildersllc/",
    "https://www.houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190",
    "https://www.tiktok.com/@topflightbuildersatl",
    "https://www.yelp.com/biz/topflight-builders-marietta-2",
    "https://www.bbb.org/us/ga/marietta/profile/construction-services/topflight-builders-llc-0443-28183084",
    "https://maps.app.goo.gl/G4ZZUXj5a9LV4m8TA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/*
          Consent Mode v2 defaults — MUST be synchronous and first in <head>
          so defaults are set before any analytics script can initialize.
          GA4 is NOT loaded here; GoogleAnalytics component injects it only
          after the visitor grants consent via the ConsentBanner.
        */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* pb-[56px] reserves space for the mobile sticky call bar on small screens */}
        <main className="flex-1 pb-[56px] lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <FloatingEstimateCta />
        <ConsentBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
