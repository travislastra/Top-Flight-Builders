import HeroPlaceholder from "@/components/HeroPlaceholder";
import OurWork from "@/components/OurWork";
import ServicesGrid from "@/components/ServicesGrid";
import TeamContact from "@/components/TeamContact";
import ReviewsSlider from "@/components/ReviewsSlider";
import OurDifference from "@/components/OurDifference";
import PortfolioSection from "@/components/PortfolioSection";
import PartnersSlider from "@/components/PartnersSlider";
import ContactBanner from "@/components/ContactBanner";

// LCP image: first hero slideshow slide
const BASE = "";
const LCP_BASE = `${BASE}/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-01`;
// imagesrcset must match the srcset in HeroPlaceholder exactly so the preload is used
const LCP_SRCSET = `${LCP_BASE}-480w.webp 480w, ${LCP_BASE}-800w.webp 800w, ${LCP_BASE}-1200w.webp 1200w, ${LCP_BASE}.webp 1920w`;

export default function Home() {
  return (
    <>
      {/* Preload LCP image — imagesrcset matches HeroPlaceholder srcset so browser reuses this fetch */}
      <link
        rel="preload"
        as="image"
        // @ts-ignore — imagesrcset/imagesizes/fetchpriority not yet in React's link types
        imagesrcset={LCP_SRCSET}
        imagesizes="100vw"
        type="image/webp"
        fetchpriority="high"
      />
      <HeroPlaceholder />
      <PartnersSlider />
      <OurWork />
      <ServicesGrid />
      <TeamContact />
      <OurDifference />
      <ReviewsSlider />
      <PortfolioSection />
      <ContactBanner />
    </>
  );
}
