"use client";

import { useState } from "react";
import Link from "next/link";
import { posts, tagColors } from "@/lib/blog-posts";
import ContactBanner from "@/components/ContactBanner";
import LogoWatermark from "@/components/LogoWatermark";

const categories = [
  { key: "all", label: "All" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bathroom", label: "Bathroom" },
  { key: "fullhome", label: "Full Home" },
  { key: "restoration", label: "Restoration" },
  { key: "flooring", label: "Flooring" },
  { key: "outdoor", label: "Outdoor" },
  { key: "basement", label: "Basement" },
  { key: "electrical", label: "Electrical" },
  { key: "roofing", label: "Roofing" },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? posts : posts.filter((p) => p.cat === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6">
        <LogoWatermark />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Resources & Insights</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-4 leading-tight">TFB Remodeling Blog</h1>
          <p className="text-gray-300 text-lg max-w-xl">Expert guides for Atlanta homeowners — kitchens, bathrooms, full-home remodels, and beyond.</p>
        </div>
      </section>


      {/* Filter bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-[69px] z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveFilter(c.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
                activeFilter === c.key
                  ? "bg-[#1E4FBF] text-white border-[#1E4FBF]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog grid */}
      <section className="bg-[#F7F8FA] py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => {
            const isFeatured = post.featured && activeFilter === "all" && i === 0;
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#1E4FBF]/20 transition-all flex flex-col overflow-hidden ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Thumb */}
                <div
                  className={`bg-gradient-to-br from-[#0D1B2E] to-[#1E4FBF] flex items-center justify-center relative flex-shrink-0 ${
                    isFeatured ? "h-44" : "h-32"
                  }`}
                >
                  <span className="font-sans font-extrabold text-6xl text-white/10 select-none">TFB</span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${
                        tagColors[post.cat] ?? "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {post.catLabel}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>

                  <h2
                    className={`font-sans font-bold text-[#0D1B2E] leading-snug mb-2 group-hover:text-[#1E4FBF] transition-colors ${
                      isFeatured ? "text-xl" : "text-base"
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

                  <span className="self-start inline-flex items-center gap-1 text-[#1E4FBF] font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
