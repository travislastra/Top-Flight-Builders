import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";
import { reviews } from "@/lib/reviews";

export const metadata = {
  title: "Testimonials | TopFlight Builders",
  description: "See what Greater Atlanta homeowners say about TopFlight Builders — 32 five-star Google reviews.",
  alternates: {
    canonical: "https://travislastra.github.io/Top-Flight-Builders/testimonials",
  },
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Google Reviews</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">What Our Customers Say</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-2xl">5.0</span>
          <span className="text-gray-400">· {reviews.length} Google Reviews</span>
        </div>
        <p className="text-gray-400 text-sm">Real reviews from real Greater Atlanta homeowners.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                  style={{ backgroundColor: review.color }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-sans font-bold text-[#0D1B2E] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-100">
                <GoogleIcon />
                <span className="text-xs text-gray-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
