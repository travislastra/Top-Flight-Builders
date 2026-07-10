export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog-posts";
import { CITIES, SERVICES } from "@/lib/service-city-data";

const BASE = "https://topflightbuilders.net";
const SITE_LAUNCH = new Date("2026-05-21");
const SERVICE_UPDATE = new Date("2026-06-15");

// Service-area city pages (10 cities — includes Milton and Smyrna which are not in the matrix)
const SERVICE_AREA_CITIES = [
  "marietta-ga",
  "east-cobb-ga",
  "canton-ga",
  "kennesaw-ga",
  "acworth-ga",
  "woodstock-ga",
  "roswell-ga",
  "alpharetta-ga",
  "milton-ga",
  "smyrna-ga",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ---------- Core pages ----------
  const core: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: SERVICE_UPDATE, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/contact`,            lastModified: SITE_LAUNCH,   changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`,           lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`,          lastModified: SERVICE_UPDATE, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/testimonials`,       lastModified: SITE_LAUNCH,   changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/about`,              lastModified: SITE_LAUNCH,   changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,               lastModified: SERVICE_UPDATE, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/more-from-us`,       lastModified: SITE_LAUNCH,   changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy-policy`,     lastModified: SITE_LAUNCH,   changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/terms`,              lastModified: SITE_LAUNCH,   changeFrequency: "yearly",  priority: 0.2 },
  ];

  // ---------- Standalone service pages ----------
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/services/kitchen-remodeling`,      lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/bathroom-remodeling`,     lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/full-home-remodeling`,    lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/basements-and-additions`, lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/restoration`,             lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/age-in-place`,            lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/roofing`,                 lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/decks`,                   lastModified: SERVICE_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/commercial`,              lastModified: SITE_LAUNCH,   changeFrequency: "monthly", priority: 0.8 },
  ];

  // ---------- Service-area city pages ----------
  const serviceAreaPages: MetadataRoute.Sitemap = SERVICE_AREA_CITIES.map((city) => ({
    url: `${BASE}/service-areas/${city}`,
    lastModified: SERVICE_UPDATE,
    changeFrequency: "monthly" as const,
    // Primary markets (Marietta, East Cobb) get slightly higher priority
    priority: city === "marietta-ga" || city === "east-cobb-ga" ? 0.85 : 0.8,
  }));

  // ---------- Service × city matrix (9 services × 8 cities = 72 pages) ----------
  const matrixPages: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    CITIES.map((city) => ({
      url: `${BASE}/services/${service.slug}/${city.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  // ---------- Project pages ----------
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    lastModified: SITE_LAUNCH,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ---------- Blog posts ----------
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...core,
    ...servicePages,
    ...serviceAreaPages,
    ...matrixPages,
    ...projectPages,
    ...blogPages,
  ];
}
