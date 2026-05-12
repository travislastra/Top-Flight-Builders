import Link from "next/link";

export default function QuoteBar() {
  return (
    <section className="bg-[#1E4FBF] py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-semibold text-base md:text-lg text-center md:text-left">
          Have a project in mind?{" "}
          <span className="text-blue-100">Want a free estimate for your project?</span>
        </p>
        <Link
          href="/contact"
          className="shrink-0 bg-white text-[#1E4FBF] font-bold text-sm px-7 py-3 rounded-lg hover:bg-gray-100 transition-colors uppercase tracking-wide"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
