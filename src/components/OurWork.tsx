import Link from "next/link";
import Img from "@/components/Img";

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
            At TopFlight Builders, we take pride in creating beautiful, functional spaces that are built to last. From full home renovations to custom kitchens, bathrooms, basements, and additions, every project is completed with attention to detail, quality craftsmanship, and clear communication from start to finish. We work closely with our clients to bring their vision to life while making the remodeling process as smooth and stress-free as possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our team is committed to delivering high-end results that not only improve the look of a home, but also increase comfort, functionality, and value. Whether it&apos;s a modern kitchen transformation or a complete home remodel, we approach every project with professionalism, reliability, and a passion for great work.
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
            <Img
              src="/images/complete-home-remodel-duluth.jpg"
              alt="Bathroom remodel — frameless glass shower"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden lg:mt-8">
            <Img
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
