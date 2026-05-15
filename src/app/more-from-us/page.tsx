import type { Metadata } from "next";
import Link from "next/link";
import GalleryLightbox from "@/components/GalleryLightbox";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "More From Us | TopFlight Builders",
  description: "A look at more of our work across Greater Atlanta — kitchens, bathrooms, additions, renovations, and everything in between.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/more-from-us",
  },
};

const images = ["/images/projects/more-from-us/01.jpg", "/images/projects/more-from-us/02.jpg", "/images/projects/more-from-us/03.jpg", "/images/projects/more-from-us/04.jpg", "/images/projects/more-from-us/05.jpg", "/images/projects/more-from-us/06.jpg", "/images/projects/more-from-us/07.jpg", "/images/projects/more-from-us/08.jpg", "/images/projects/more-from-us/09.jpg", "/images/projects/more-from-us/10.jpg", "/images/projects/more-from-us/11.jpg", "/images/projects/more-from-us/12.jpg", "/images/projects/more-from-us/13.jpg", "/images/projects/more-from-us/14.jpg", "/images/projects/more-from-us/15.jpg", "/images/projects/more-from-us/16.jpg", "/images/projects/more-from-us/17.jpg", "/images/projects/more-from-us/18.jpg", "/images/projects/more-from-us/19.jpg", "/images/projects/more-from-us/20.jpg", "/images/projects/more-from-us/21.jpg", "/images/projects/more-from-us/22.jpg", "/images/projects/more-from-us/23.jpg", "/images/projects/more-from-us/24.jpg", "/images/projects/more-from-us/25.jpg", "/images/projects/more-from-us/26.jpg", "/images/projects/more-from-us/27.jpg", "/images/projects/more-from-us/28.jpg", "/images/projects/more-from-us/29.jpg", "/images/projects/more-from-us/30.jpg", "/images/projects/more-from-us/31.jpg", "/images/projects/more-from-us/32.jpg", "/images/projects/more-from-us/33.jpg", "/images/projects/more-from-us/34.jpg", "/images/projects/more-from-us/35.jpg"];

export default function MoreFromUsPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">More From Us</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A look at more of our work across Greater Atlanta — kitchens, bathrooms, additions, renovations, and everything in between.
        </p>
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
