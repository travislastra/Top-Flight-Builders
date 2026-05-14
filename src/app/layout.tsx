import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const BASE_URL = "https://travislastra.github.io/Top-Flight-Builders";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kitchen & Bathroom Remodeling Atlanta GA | TopFlight Builders",
    template: "%s | TopFlight Builders",
  },
  description:
    "TopFlight Builders — Greater Atlanta's trusted remodeling experts. Kitchen remodeling, bathroom renovation, full home remodels, and restoration. Marietta, GA. Call (404) 369-7129.",
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
    title: "Kitchen & Bathroom Remodeling Atlanta GA | TopFlight Builders",
    description:
      "Greater Atlanta's trusted remodeling experts. Kitchens, bathrooms, full home renovations. 20+ years combined experience. Free estimates — (404) 369-7129.",
    images: [
      {
        url: BASE_URL + "/images/complete-home-remodel-duluth.jpg",
        width: 1200,
        height: 630,
        alt: "TopFlight Builders — Atlanta remodeling experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen & Bathroom Remodeling Atlanta GA | TopFlight Builders",
    description:
      "Greater Atlanta's trusted remodeling experts. Free estimates — (404) 369-7129.",
    images: [BASE_URL + "/images/complete-home-remodel-duluth.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "TopFlight Builders LLC",
  url: BASE_URL,
  logo: BASE_URL + "/logo.png",
  image: BASE_URL + "/images/complete-home-remodel-duluth.jpg",
  description:
    "Greater Atlanta's trusted remodeling experts specializing in kitchen remodeling, bathroom renovation, full home remodels, and restoration services.",
  telephone: "+1-404-369-7129",
  email: "admin@topflightbuilders.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marietta",
    addressLocality: "Marietta",
    addressRegion: "GA",
    postalCode: "30066",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.9526,
    longitude: -84.5499,
  },
  areaServed: [
    "Atlanta, GA",
    "Decatur, GA",
    "Marietta, GA",
    "Dunwoody, GA",
    "Alpharetta, GA",
    "Canton, GA",
    "Kennesaw, GA",
    "Smyrna, GA",
    "Sandy Springs, GA",
    "Woodstock, GA",
    "Roswell, GA",
    "Tucker, GA",
    "Buckhead, GA",
    "Vinings, GA",
    "Brookhaven, GA",
    "Mableton, GA",
    "Acworth, GA",
    "Norcross, GA",
    "Duluth, GA",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.facebook.com/TopFlightBuildersLLC",
    "https://www.instagram.com/topflightbuildersllc/",
    "https://www.houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
