import Link from "next/link";

const BASE = "/Top-Flight-Builders";

const photos = [
  "/images/projects/more-from-us/05.jpg",
  "/images/projects/more-from-us/11.jpg",
  "/images/projects/more-from-us/17.jpg",
  "/images/projects/more-from-us/23.jpg",
  "/images/projects/more-from-us/29.jpg",
  "/images/projects/more-from-us/33.jpg",
];

export default function TeamContact() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#1E4FBF] font-semibold text-sm uppercase tracking-widest mb-3">
          Let&apos;s Connect
        </p>
        <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#0D1B2E] mb-6 leading-tight">
          Talk with our team
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
          Your dream home is closer than you think. Whether you&apos;re planning a full renovation or a single room refresh, our experts are ready to help you bring it to life.
        </p>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          We offer free estimates and a no-pressure consultation process. Let&apos;s talk about what&apos;s possible for your space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/contact"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            Contact Us
          </Link>
          <a
            href="tel:4043697129"
            className="bg-[#F7F8FA] hover:bg-[#E8EAED] text-[#0D1B2E] font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm w-full sm:w-auto text-center"
          >
            (404) 369-7129
          </a>
        </div>
      </div>

      {/* Photo strip */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-3 rounded-2xl overflow-hidden">
        {photos.map((src, i) => (
          <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
            <img
              src={`${BASE}${src}`}
              alt={`TopFlight Builders project ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
