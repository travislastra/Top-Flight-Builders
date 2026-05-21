import Link from "next/link";
import { posts } from "@/lib/blog-posts";

interface Props {
  cat: string;
  heading?: string;
}

export default function ServiceBlogLinks({ cat, heading = "From Our Blog" }: Props) {
  const related = posts.filter((p) => p.cat === cat);
  if (related.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-2">{heading}</h2>
        <p className="text-gray-500 mb-8">Tips, guides, and project insights from our team.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#F7F8FA] rounded-xl p-5 border border-gray-100 hover:border-[#1E4FBF]/40 hover:shadow-sm transition-all"
            >
              <p className="text-xs text-gray-400 mb-1.5">{post.date}</p>
              <p className="font-sans font-semibold text-[#0D1B2E] text-sm leading-snug group-hover:text-[#1E4FBF] transition-colors">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/blog" className="text-[#1E4FBF] font-semibold text-sm hover:underline">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
