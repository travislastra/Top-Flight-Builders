import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Testimonials | TopFlight Builders",
  description: "See what Greater Atlanta homeowners say about TopFlight Builders.",
};

const testimonials = [
  { name: "Sarah M.", location: "Marietta, GA", rating: 5, text: "TopFlight Builders completely transformed our master bathroom. The craftsmanship is incredible — every tile was placed perfectly. They finished on time and on budget. Highly recommend!" },
  { name: "James T.", location: "Duluth, GA", rating: 5, text: "We hired TopFlight for a full kitchen remodel and couldn't be happier. Professional, communicative, and the quality of work is outstanding. Our kitchen looks like it belongs in a magazine." },
  { name: "Maria L.", location: "Chamblee, GA", rating: 5, text: "From the first consultation to the final walkthrough, TopFlight made the process smooth and stress-free. They listened to what we wanted and delivered beyond our expectations." },
  { name: "David R.", location: "Alpharetta, GA", rating: 5, text: "I've used several contractors over the years and TopFlight is by far the best. Honest pricing, no surprises, and the end result was beautiful. Will definitely use them again." },
  { name: "Karen P.", location: "Smyrna, GA", rating: 5, text: "The team was respectful of our home and kept the work area clean throughout the project. The bathroom renovation exceeded our expectations. Quality workmanship at a fair price." },
  { name: "Robert H.", location: "Roswell, GA", rating: 5, text: "TopFlight handled our full home remodel and we couldn't be more thrilled. They coordinated everything seamlessly and the results speak for themselves. Truly top flight!" },
  { name: "Angela W.", location: "Sandy Springs, GA", rating: 5, text: "Our kitchen went from outdated to absolutely stunning. The team was knowledgeable, professional, and genuinely cared about getting every detail right. Exceptional experience." },
  { name: "Michael C.", location: "Kennesaw, GA", rating: 5, text: "Honest, reliable, and talented. TopFlight gave us a fair quote, stuck to it, and delivered a beautiful bathroom renovation. We'll be calling them again for our kitchen next year." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Client Reviews</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">What Our Customers Say</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Real reviews from real Atlanta homeowners.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-sans font-bold text-[#0D1B2E] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm">
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
