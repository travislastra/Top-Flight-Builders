export interface ProjectTask {
  area: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  community?: string;
  budget: string;
  year: number;
  service: "kitchen" | "bathroom" | "restoration" | "full-home" | "basements" | "age-in-place";
  categories: string[];
  tags: string[];
  hero: string;
  gallery: string[];
  excerpt: string;
  description: string;
  tasks: ProjectTask[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "kitchen-laundry-remodel-east-cobb",
    title: "Kitchen & Laundry Room Remodel — East Cobb",
    location: "East Cobb, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "kitchen",
    categories: ["Kitchens", "Featured"],
    tags: ["Cabinets", "Countertops", "Laundry Room", "Tile", "Modern"],
    hero: "/images/projects/kitchen-laundry-east-cobb/01.jpg",
    gallery: ["/images/projects/kitchen-laundry-east-cobb/01.jpg", "/images/projects/kitchen-laundry-east-cobb/02.jpg", "/images/projects/kitchen-laundry-east-cobb/03.jpg", "/images/projects/kitchen-laundry-east-cobb/04.jpg", "/images/projects/kitchen-laundry-east-cobb/05.jpg", "/images/projects/kitchen-laundry-east-cobb/06.jpg", "/images/projects/kitchen-laundry-east-cobb/07.jpg", "/images/projects/kitchen-laundry-east-cobb/08.jpg", "/images/projects/kitchen-laundry-east-cobb/09.jpg", "/images/projects/kitchen-laundry-east-cobb/10.jpg", "/images/projects/kitchen-laundry-east-cobb/11.jpg", "/images/projects/kitchen-laundry-east-cobb/12.jpg", "/images/projects/kitchen-laundry-east-cobb/13.jpg", "/images/projects/kitchen-laundry-east-cobb/14.jpg", "/images/projects/kitchen-laundry-east-cobb/15.jpg", "/images/projects/kitchen-laundry-east-cobb/16.jpg"],
    excerpt: "Full kitchen and laundry room remodel in East Cobb — new cabinetry, countertops, tile, and a completely refreshed laundry space.",
    description: "This East Cobb homeowner wanted a comprehensive update to both their kitchen and laundry room. TopFlight Builders handled every detail of both spaces — from cabinet demolition to final finish work — delivering a cohesive, modern result throughout.",
    tasks: [
      {
        area: "Kitchen",
        items: ["Removed existing cabinetry and appliances", "Installed new shaker cabinetry with soft-close hardware", "Quartz countertops and tile backsplash", "Updated lighting and fixtures"],
      },
      {
        area: "Laundry Room",
        items: ["New cabinetry for storage", "Tile flooring installation", "Updated utility connections and fixtures"],
      },
    ],
    outcome: "Both spaces transformed to match the homeowner's vision — clean, functional, and built to last.",
  },
  {
    slug: "whole-home-renovation-east-cobb",
    title: "Whole-Home Renovation — East Cobb",
    location: "East Cobb, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "full-home",
    categories: ["Full Home", "Featured"],
    tags: ["Kitchen", "Bathrooms", "Flooring", "Paint", "Modern"],
    hero: "/images/projects/whole-home-east-cobb/02.jpg",
    gallery: ["/images/projects/whole-home-east-cobb/01.jpg", "/images/projects/whole-home-east-cobb/02.jpg", "/images/projects/whole-home-east-cobb/03.jpg", "/images/projects/whole-home-east-cobb/04.jpg", "/images/projects/whole-home-east-cobb/05.jpg", "/images/projects/whole-home-east-cobb/06.jpg", "/images/projects/whole-home-east-cobb/07.jpg", "/images/projects/whole-home-east-cobb/08.jpg", "/images/projects/whole-home-east-cobb/09.jpg", "/images/projects/whole-home-east-cobb/10.jpg", "/images/projects/whole-home-east-cobb/11.jpg", "/images/projects/whole-home-east-cobb/12.jpg", "/images/projects/whole-home-east-cobb/13.jpg", "/images/projects/whole-home-east-cobb/14.jpg", "/images/projects/whole-home-east-cobb/15.jpg"],
    excerpt: "A top-to-bottom whole-home renovation in East Cobb covering kitchen, bathrooms, flooring, and full interior updates.",
    description: "This East Cobb whole-home renovation gave the property a complete refresh from the ground up. TopFlight Builders coordinated all trades across multiple rooms simultaneously, delivering a cohesive finished product that transformed the entire home.",
    tasks: [
      {
        area: "Kitchen & Bathrooms",
        items: ["Full kitchen cabinet and countertop replacement", "Bathroom tile, vanity, and fixture updates throughout"],
      },
      {
        area: "Flooring & Finishes",
        items: ["New flooring installed throughout all living areas", "Full interior repaint — walls, ceilings, and trim", "Updated lighting fixtures sitewide"],
      },
    ],
    outcome: "A complete home transformation completed on schedule. The homeowners moved into a space that felt entirely brand new.",
  },
  {
    slug: "bathroom-remodel-brookhaven",
    title: "Bathroom Remodel — Brookhaven",
    location: "Brookhaven, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "bathroom",
    categories: ["Bathrooms", "Featured"],
    tags: ["Tile", "Shower", "Vanity", "Modern", "Plumbing"],
    hero: "/images/projects/bathroom-brookhaven/08.jpg",
    gallery: ["/images/projects/bathroom-brookhaven/01.jpg", "/images/projects/bathroom-brookhaven/02.jpg", "/images/projects/bathroom-brookhaven/03.jpg", "/images/projects/bathroom-brookhaven/04.jpg", "/images/projects/bathroom-brookhaven/05.jpg", "/images/projects/bathroom-brookhaven/06.jpg", "/images/projects/bathroom-brookhaven/07.jpg", "/images/projects/bathroom-brookhaven/08.jpg"],
    excerpt: "A full bathroom remodel in Brookhaven featuring custom tile work, a new walk-in shower, and a modern double vanity.",
    description: "This Brookhaven bathroom remodel replaced an outdated space with a fully custom renovation. TopFlight Builders built a new walk-in shower with detailed tile work, installed a modern double vanity, and updated all fixtures and lighting throughout.",
    tasks: [
      {
        area: "Shower & Tile",
        items: ["Demolished existing shower and tub", "Built new walk-in shower with custom tile", "Tile flooring throughout bathroom"],
      },
      {
        area: "Vanity & Fixtures",
        items: ["Installed new double vanity with quartz countertop", "All-new plumbing fixtures and hardware", "Updated recessed lighting and mirrors"],
      },
    ],
    outcome: "A beautiful, functional bathroom that the homeowners describe as their favorite room in the house.",
  },
  {
    slug: "home-addition-atlanta",
    title: "Home Addition — Atlanta",
    location: "Atlanta, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "basements",
    categories: ["Basements & Additions", "Featured"],
    tags: ["Addition", "Framing", "Drywall", "Flooring", "Exterior"],
    hero: "/images/projects/home-addition-atlanta/13.jpg",
    gallery: ["/images/projects/home-addition-atlanta/01.jpg", "/images/projects/home-addition-atlanta/02.jpg", "/images/projects/home-addition-atlanta/03.jpg", "/images/projects/home-addition-atlanta/04.jpg", "/images/projects/home-addition-atlanta/05.jpg", "/images/projects/home-addition-atlanta/06.jpg", "/images/projects/home-addition-atlanta/07.jpg", "/images/projects/home-addition-atlanta/08.jpg", "/images/projects/home-addition-atlanta/09.jpg", "/images/projects/home-addition-atlanta/10.jpg", "/images/projects/home-addition-atlanta/11.jpg", "/images/projects/home-addition-atlanta/12.jpg", "/images/projects/home-addition-atlanta/13.jpg", "/images/projects/home-addition-atlanta/14.jpg", "/images/projects/home-addition-atlanta/15.jpg", "/images/projects/home-addition-atlanta/16.jpg", "/images/projects/home-addition-atlanta/17.jpg", "/images/projects/home-addition-atlanta/18.jpg", "/images/projects/home-addition-atlanta/19.jpg"],
    excerpt: "A full home addition in Atlanta — expanding the footprint with new framing, roofing, and finished interior space.",
    description: "This Atlanta homeowner needed more space and chose to expand rather than move. TopFlight Builders designed and built a full home addition — handling everything from permits and foundation to framing, roofing, insulation, drywall, and finished interior.",
    tasks: [
      {
        area: "Structure",
        items: ["Foundation prep and framing", "Roof tie-in and exterior weatherproofing", "Window and door installation"],
      },
      {
        area: "Interior Finish",
        items: ["Insulation and drywall throughout", "Flooring to match existing home", "Paint, trim, and final finish work"],
      },
    ],
    outcome: "The addition seamlessly extended the home's living space, adding significant square footage and value.",
  },
  {
    slug: "bathroom-remodel-buckhead",
    title: "Bathroom Remodel — Buckhead",
    location: "Buckhead, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "bathroom",
    categories: ["Bathrooms"],
    tags: ["Tile", "Shower", "Vanity", "Luxury", "Modern"],
    hero: "/images/projects/bathroom-buckhead/01.jpg",
    gallery: ["/images/projects/bathroom-buckhead/01.jpg", "/images/projects/bathroom-buckhead/02.jpg", "/images/projects/bathroom-buckhead/03.jpg", "/images/projects/bathroom-buckhead/04.jpg", "/images/projects/bathroom-buckhead/05.jpg", "/images/projects/bathroom-buckhead/06.jpg", "/images/projects/bathroom-buckhead/07.jpg"],
    excerpt: "A high-end bathroom renovation in Buckhead — premium tile, frameless glass, and a refined modern aesthetic throughout.",
    description: "This Buckhead bathroom renovation called for a high-end finish that matched the quality of the surrounding home. TopFlight Builders delivered a refined, modern space with premium tile selections, frameless glass, and carefully coordinated fixtures.",
    tasks: [
      {
        area: "Demo & Waterproofing",
        items: ["Full gut of existing bathroom", "Schluter waterproofing system installed"],
      },
      {
        area: "Build & Finish",
        items: ["Premium tile shower with frameless glass enclosure", "New vanity, mirrors, and lighting", "Heated tile floor installation"],
      },
    ],
    outcome: "A luxury bathroom finish that exceeded the homeowner's expectations and elevated the entire master suite.",
  },
  {
    slug: "basement-finishing-east-cobb",
    title: "Basement Finishing — East Cobb",
    location: "East Cobb, GA",
    budget: "Contact for Pricing",
    year: 2025,
    service: "basements",
    categories: ["Basements & Additions", "Featured"],
    tags: ["Basement", "Drywall", "LVP Flooring", "Lighting", "Entertainment"],
    hero: "/images/projects/basement-east-cobb/01.jpg",
    gallery: ["/images/projects/basement-east-cobb/01.jpg", "/images/projects/basement-east-cobb/02.jpg", "/images/projects/basement-east-cobb/03.jpg", "/images/projects/basement-east-cobb/04.jpg", "/images/projects/basement-east-cobb/05.jpg", "/images/projects/basement-east-cobb/06.jpg", "/images/projects/basement-east-cobb/07.jpg", "/images/projects/basement-east-cobb/08.jpg", "/images/projects/basement-east-cobb/09.jpg", "/images/projects/basement-east-cobb/10.jpg", "/images/projects/basement-east-cobb/11.jpg", "/images/projects/basement-east-cobb/12.jpg", "/images/projects/basement-east-cobb/13.jpg"],
    excerpt: "An unfinished East Cobb basement converted into a fully finished living space — framing, drywall, flooring, and lighting throughout.",
    description: "This East Cobb homeowner had an unfinished basement they wanted to turn into usable living space. TopFlight Builders handled the full build-out from framing to final finish — creating an open entertainment area with LVP flooring, recessed lighting, and clean drywall throughout.",
    tasks: [
      {
        area: "Framing & Rough-In",
        items: ["Interior wall framing throughout", "Electrical rough-in for lighting and outlets", "Egress window installation"],
      },
      {
        area: "Drywall & Finish",
        items: ["Insulation and drywall installation", "LVP flooring throughout", "Recessed lighting and trim work"],
      },
    ],
    outcome: "A completely finished basement that added significant usable square footage to the home.",
  },
];

export function getProjectsByService(service: Project["service"]): Project[] {
  return projects.filter((p) => p.service === service);
}

export function getRelatedProjects(slug: string, service: Project["service"]): Project[] {
  return projects.filter((p) => p.slug !== slug && p.service === service).slice(0, 3);
}
