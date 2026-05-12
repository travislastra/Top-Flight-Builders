import Link from "next/link";
import Image from "next/image";

export default function OurWork() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#0D1B2E] leading-tight mb-6">
            Make your dream a reality
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We transform your vision into beautifully crafted spaces. From custom kitchens and spa-inspired bathrooms to complete home renovations — our team brings over 20 years of combined experience to every project.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Serving homeowners and businesses across the Greater Atlanta area, we deliver quality craftsmanship that stands the test of time.
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            View Portfolio
          </Link>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/images/complete-home-remodel-duluth.jpg"
              alt="Bathroom remodel — frameless glass shower"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-8">
            <Image
              src="/images/portfolio-kris.jpg"
              alt="Kitchen remodel — dark shaker cabinets"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
