import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, tagColors } from "@/lib/blog-posts";
import ContactBanner from "@/components/ContactBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | TopFlight Builders`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.cat === post.cat && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2E] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4A7FE8] text-sm font-semibold hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${tagColors[post.cat] ?? ""}`}>
              {post.catLabel}
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <article>
              <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-[#1E4FBF] pl-4 mb-10 italic">
                {post.excerpt}
              </p>
              <div
                className="prose prose-gray max-w-none text-gray-700 leading-relaxed
                  [&_p]:mb-5 [&_p]:leading-relaxed
                  [&_strong]:text-[#0D1B2E] [&_strong]:font-bold
                  [&_a]:text-[#1E4FBF] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[#1E4FBF]/30 [&_a:hover]:decoration-[#1E4FBF]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="mt-12 bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100 text-center">
                <h3 className="font-sans font-extrabold text-xl text-[#0D1B2E] mb-2">
                  Ready to start your project?
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  Get a free, no-obligation estimate from Greater Atlanta&apos;s trusted remodeling experts.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-7 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-gray-100">
                <h3 className="font-sans font-bold text-[#0D1B2E] text-sm uppercase tracking-wider mb-4">
                  Contact TopFlight
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="tel:4043697129" className="flex items-center gap-2 text-[#1E4FBF] font-semibold hover:underline">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (404) 369-7129
                  </a>
                  <a href="mailto:admin@topflightbuilders.net" className="flex items-center gap-2 text-[#1E4FBF] font-semibold hover:underline break-all">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    admin@topflightbuilders.net
                  </a>
                </div>
              </div>

              {related.length > 0 && (
                <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-sans font-bold text-[#0D1B2E] text-sm uppercase tracking-wider mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.id} href={`/blog/${r.slug}`} className="block group">
                        <p className="text-sm font-semibold text-[#0D1B2E] group-hover:text-[#1E4FBF] leading-snug transition-colors">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{r.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-[#0D1B2E] rounded-2xl p-6 text-center">
                <p className="font-sans font-bold text-white text-sm mb-1">Quality · Reliability · Value</p>
                <p className="text-gray-400 text-xs mb-4">Greater Atlanta&apos;s trusted remodeling experts</p>
                <Link
                  href="/contact"
                  className="block bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors uppercase tracking-wide"
                >
                  Get a Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More articles */}
      {related.length > 0 && (
        <section className="py-14 px-6 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans font-extrabold text-2xl text-[#0D1B2E] mb-8">More {post.catLabel} Articles</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-[#0D1B2E] to-[#1E4FBF] flex items-center justify-center relative">
                    <span className="font-sans font-extrabold text-4xl text-white/10 select-none">TFB</span>
                    <span className="absolute bottom-2 left-3 text-xl">{r.icon}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gray-400">{r.date}</span>
                    <h3 className="font-sans font-bold text-[#0D1B2E] text-sm leading-snug mt-1 group-hover:text-[#1E4FBF] transition-colors">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-block border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-7 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactBanner />
    </>
  );
}
