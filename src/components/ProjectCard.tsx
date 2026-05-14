import Link from "next/link";
import Img from "@/components/Img";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={project.hero}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-semibold text-[#1E4FBF] bg-[#1E4FBF]/10 px-2.5 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="font-sans font-bold text-[#0D1B2E] text-lg mb-2 group-hover:text-[#1E4FBF] transition-colors leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </span>
          <span className="font-semibold text-[#1E4FBF]">{project.budget}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.excerpt}</p>
        <div className="mt-4 text-[#1E4FBF] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
