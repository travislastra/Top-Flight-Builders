import HeroPlaceholder from "@/components/HeroPlaceholder";
import QuoteBar from "@/components/QuoteBar";
import OurWork from "@/components/OurWork";
import OurCore from "@/components/OurCore";
import ServicesGrid from "@/components/ServicesGrid";
import TeamContact from "@/components/TeamContact";
import ReviewsSlider from "@/components/ReviewsSlider";
import OurDifference from "@/components/OurDifference";
import PortfolioSection from "@/components/PortfolioSection";
import PartnersSlider from "@/components/PartnersSlider";
import GetStarted from "@/components/GetStarted";
import ContactBanner from "@/components/ContactBanner";

// LCP image: first hero slideshow slide — preloaded to maximize LCP score
const BASE = "/Top-Flight-Builders";
const LCP_WEBP = `${BASE}/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-01.webp`;
const LCP_JPG  = `${BASE}/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-01.jpg`;

export default function Home() {
  return (
    <>
      {/* Preload LCP image (WebP — supported by all modern browsers including Chrome/Lighthouse) */}
      <link rel="preload" as="image" href={LCP_WEBP} type="image/webp" />
      <HeroPlaceholder />
      <PartnersSlider />
      <QuoteBar />
      <OurWork />
      <OurCore />
      <ServicesGrid />
      <TeamContact />
      <ReviewsSlider />
      <OurDifference />
      <PortfolioSection />
      <GetStarted />
      <ContactBanner />
    </>
  );
}
