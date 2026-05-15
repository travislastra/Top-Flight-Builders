import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import ContactBanner from "@/components/ContactBanner";
import ProjectCard from "@/components/ProjectCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import { projects, getRelatedProjects } from "@/lib/projects";
import LogoWatermark from "@/components/LogoWatermark";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | TopFlight Builders`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, project.service);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D1B2E] py-20 px-6">
        <LogoWatermark />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            href={
              project.service === "full-home" ? "/services/full-home-remodeling" :
              project.service === "basements" ? "/services" :
              project.service === "age-in-place" ? "/services/age-in-place" :
              project.service === "restoration" ? "/services/restoration" :
              `/services/${project.service}-remodeling`
            }
            className="inline-flex items-center gap-1 text-[#4A7FE8] text-sm font-semibold mb-6 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-white">
              <svg className="w-4 h-4 text-[#4A7FE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>
            {project.community && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-white">
                <svg className="w-4 h-4 text-[#4A7FE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {project.community}
              </div>
            )}
            <div className="flex items-center gap-2 bg-[#1E4FBF] rounded-lg px-4 py-2 text-white font-bold">
              {project.budget}
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-gray-300">
              {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] max-h-[500px] overflow-hidden">
        <Img src={project.hero} alt={project.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-10">{project.description}</p>

            {project.tasks.map((task) => (
              <div key={task.area} className="mb-8">
                <h3 className="font-sans font-bold text-[#0D1B2E] text-lg mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#1E4FBF] rounded-full inline-block" />
                  {task.area}
                </h3>
                <ul className="space-y-2">
                  {task.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#1E4FBF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-gray-100 mt-6">
              <h3 className="font-sans font-bold text-[#0D1B2E] mb-2">Outcome</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h3 className="font-sans font-bold text-[#0D1B2E] mb-5">Project Details</h3>
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold text-[#0D1B2E]">{project.location}</span>
                </div>
                {project.community && (
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500">Community</span>
                    <span className="font-semibold text-[#0D1B2E] text-right max-w-[55%]">{project.community}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Investment</span>
                  <span className="font-bold text-[#1E4FBF]">{project.budget}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Completed</span>
                  <span className="font-semibold text-[#0D1B2E]">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Type</span>
                  <span className="font-semibold text-[#0D1B2E] capitalize">{project.service.replace("-", " ")}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center bg-[#1E4FBF] hover:bg-[#163A99] text-white font-bold px-5 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm"
              >
                Start Your Project
              </Link>
              <a
                href="tel:4043697129"
                className="block w-full text-center mt-3 border-2 border-[#1E4FBF] text-[#1E4FBF] hover:bg-[#1E4FBF] hover:text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm"
              >
                (404) 369-7129
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-12 px-6 bg-[#F7F8FA]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-8">Project Gallery</h2>
            <GalleryLightbox images={project.gallery} title={project.title} />
          </div>
        </section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-2xl font-extrabold text-[#0D1B2E] mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBanner />
    </>
  );
}
