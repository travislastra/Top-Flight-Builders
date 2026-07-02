import type { Metadata } from "next";
import Link from "next/link";
import GalleryLightbox from "@/components/GalleryLightbox";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "More Projects | Marietta and Canton Remodeling | TopFlight Builders",
  description: "More remodeling work by TopFlight Builders across Marietta and Canton, GA. Kitchens, bathrooms, additions, and everything in between. Licensed, insured, 50+ five-star reviews. (404) 369-7129.",
  alternates: {
    canonical: "https://topflightbuilders.net/more-from-us",
  },
};

const images = ["/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-01.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-02.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-03.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-04.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-05.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-06.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-07.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-08.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-09.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-10.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-11.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-12.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-13.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-14.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-15.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-16.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-17.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-18.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-19.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-20.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-21.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-22.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-23.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-24.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-25.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-26.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-27.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-28.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-29.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-30.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-31.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-32.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-33.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-34.jpg", "/images/projects/more-from-us/topflight-builders-remodeling-project-marietta-ga-35.jpg", "/images/bathroom-remodel-frameless-glass-shower-marietta-ga.jpg", "/images/kitchen-remodel-dark-shaker-cabinets-marietta-ga.jpg", "/images/bathroom-remodel-custom-tile-shower-chamblee-ga.jpg", "/images/kitchen-renovation-maggie-marietta-ga.jpg", "/images/topflight-builders-client-testimonial-magi.jpg", "/images/age-in-place-accessible-shower-marietta-ga.jpg", "/images/age-in-place-grab-bars-accessible-bathroom-marietta-ga.jpg"];

export default function MoreFromUsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", href: "/" },
        { name: "More From Us", href: "/more-from-us" },
      ]} />
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6 text-center">
        <LogoWatermark />
        <div className="relative z-10">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-5">More From Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A look at more of our work across Greater Atlanta — kitchens, bathrooms, additions, renovations, and everything in between.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto">
          <GalleryLightbox images={images} title="More From Us" />
        </div>
      </section>

      <section className="py-14 px-6 bg-white text-center">
        <p className="text-gray-500 text-lg mb-6">Ready to start your project?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Get a Free Estimate
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
