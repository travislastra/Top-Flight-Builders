import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";

export const metadata = { title: "Bathroom Remodeling | TopFlight Builders" };

export default function BathroomPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Bathroom Remodeling</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Your Personal Sanctuary</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Spa-inspired bathrooms with premium tile, custom showers, and expert craftsmanship.</p>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Img src="/images/complete-home-remodel-duluth.jpg" alt="Bathroom remodel" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden mt-6">
              <Img src="/images/bathroom-chamblee-remodel.jpg" alt="Luxury shower" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-[#0D1B2E] mb-5">Bathrooms built to impress</h2>
            <p className="text-gray-600 leading-relaxed mb-4">From a simple refresh to a complete master bath overhaul, we design and build bathrooms that combine beauty with function. Every tile, every fixture, every finish is selected with care.</p>
            <ul className="space-y-3 mb-8">
              {["Custom shower & tub surrounds", "Frameless glass enclosures", "Tile floors & walls", "Vanity & storage design", "Premium fixture installation", "Lighting & ventilation upgrades"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-[#1E4FBF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3.5 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
