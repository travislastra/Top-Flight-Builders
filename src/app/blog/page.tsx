import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata = {
  title: "Blog | TopFlight Builders",
  description: "Remodeling tips, project spotlights, and industry insights from TopFlight Builders.",
};

const posts = [
  { title: "5 Kitchen Remodeling Trends Dominating Atlanta Homes in 2025", date: "April 15, 2025", tag: "Kitchen", excerpt: "From waterfall islands to smart appliances, here's what Atlanta homeowners are choosing for their kitchen renovations this year." },
  { title: "How to Choose the Right Tile for Your Bathroom Renovation", date: "March 28, 2025", tag: "Bathroom", excerpt: "Porcelain vs. ceramic, large format vs. mosaic — we break down what works best for showers, floors, and accent walls." },
  { title: "What to Expect During a Full Home Remodel: A Week-by-Week Guide", date: "March 10, 2025", tag: "Full Home", excerpt: "Understanding the remodeling timeline helps you plan ahead and stay stress-free throughout the process." },
  { title: "The True Cost of a Kitchen Remodel in Atlanta (2025 Guide)", date: "February 20, 2025", tag: "Kitchen", excerpt: "A realistic breakdown of what a kitchen renovation costs across different budget levels in the Greater Atlanta market." },
  { title: "Water Damage Restoration: When to Call a Pro vs. DIY", date: "February 5, 2025", tag: "Restoration", excerpt: "Not all water damage is the same. Here's how to assess the situation and know when you need professional help." },
  { title: "Before & After: Master Bathroom Transformation in Chamblee, GA", date: "January 22, 2025", tag: "Bathroom", excerpt: "We walk through a complete master bath renovation — from the initial consultation to the final tile installation." },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0D1B2E] py-20 px-6 text-center">
        <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Resources & Insights</p>
        <h1 className="font-sans text-5xl font-extrabold text-white mb-5">Our Blog</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">Remodeling tips, project spotlights, and expert advice from the TopFlight team.</p>
      </section>

      <section className="py-20 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-40 bg-gradient-to-br from-[#0D1B2E] to-[#1E4FBF] flex items-center justify-center">
                <span className="text-white/20 font-sans font-extrabold text-6xl">TFB</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#1E4FBF]/10 text-[#1E4FBF] text-xs font-bold px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h2 className="font-sans font-bold text-[#0D1B2E] text-base mb-2 leading-snug group-hover:text-[#1E4FBF] transition-colors">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link href="/blog" className="text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
