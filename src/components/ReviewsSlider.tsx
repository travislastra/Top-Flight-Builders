"use client";

import Link from "next/link";
import { reviews } from "@/lib/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
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

export default function ReviewsSlider() {
  return (
    <section className="py-14 px-0 bg-[#0D1B2E] overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">
          Google Reviews
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-2">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-lg">5.0</span>
          <span className="text-gray-400 text-sm">· {reviews.length} reviews</span>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D1B2E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D1B2E] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track" style={{ animationDuration: "80s" }}>
          {[...reviews, ...reviews].map((review, i) => (
            <div key={`${review.name}-${i}`} className="mx-4 shrink-0 w-72">
              <div className="bg-white rounded-2xl p-5 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[#0D1B2E] text-sm leading-tight">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.date}</p>
                  </div>
                </div>
                <Stars />
                <p className="text-gray-600 text-xs leading-relaxed mt-3 flex-1 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
                  <GoogleIcon />
                  <span className="text-xs text-gray-400">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/testimonials"
          className="inline-block border-2 border-white/20 text-white hover:bg-white/10 font-bold px-7 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
        >
          Read All Reviews
        </Link>
      </div>
    </section>
  );
}
