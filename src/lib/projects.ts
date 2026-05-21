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
  beforePhotos?: string[];
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
    hero: "/images/projects/kitchen-laundry-east-cobb/09.jpg",
    beforePhotos: ["/images/projects/kitchen-laundry-east-cobb/before-01.jpg", "/images/projects/kitchen-laundry-east-cobb/before-02.jpg", "/images/projects/kitchen-laundry-east-cobb/before-03.jpg", "/images/projects/kitchen-laundry-east-cobb/before-04.jpg"],
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
    beforePhotos: ["/images/projects/whole-home-east-cobb/before-01.jpg", "/images/projects/whole-home-east-cobb/before-02.jpg", "/images/projects/whole-home-east-cobb/before-03.jpg", "/images/projects/whole-home-east-cobb/before-04.jpg", "/images/projects/whole-home-east-cobb/before-05.jpg"],
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
    beforePhotos: ["/images/projects/bathroom-brookhaven/before-01.jpg", "/images/projects/bathroom-brookhaven/before-02.jpg", "/images/projects/bathroom-brookhaven/before-03.jpg"],
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
    beforePhotos: ["/images/projects/home-addition-atlanta/before-01.jpg", "/images/projects/home-addition-atlanta/before-02.jpg"],
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
    beforePhotos: ["/images/projects/bathroom-buckhead/before-01.jpg"],
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
    beforePhotos: ["/images/projects/basement-east-cobb/before-01.jpg", "/images/projects/basement-east-cobb/before-02.jpg"],
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
  {
    slug: "bathroom-remodel-duluth",
    title: "Bathroom Remodel — Duluth",
    location: "Duluth, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "bathroom",
    categories: ["Bathrooms"],
    tags: ["Tile", "Shower", "Vanity", "Modern", "Plumbing"],
    hero: "/images/projects/bathroom-remodel-duluth/01.jpg",
    beforePhotos: ["/images/projects/bathroom-remodel-duluth/before-01.jpg", "/images/projects/bathroom-remodel-duluth/before-02.jpg"],
    gallery: ["/images/projects/bathroom-remodel-duluth/01.jpg", "/images/projects/bathroom-remodel-duluth/02.jpg", "/images/projects/bathroom-remodel-duluth/03.jpg", "/images/projects/bathroom-remodel-duluth/04.jpg", "/images/projects/bathroom-remodel-duluth/05.jpg", "/images/projects/bathroom-remodel-duluth/06.jpg", "/images/projects/bathroom-remodel-duluth/07.jpg", "/images/projects/bathroom-remodel-duluth/08.jpg", "/images/projects/bathroom-remodel-duluth/09.jpg"],
    excerpt: "A full bathroom remodel in Duluth — new tile, updated shower, modern vanity, and refreshed fixtures throughout.",
    description: "This Duluth homeowner wanted to fully transform their dated bathroom into a clean, modern space. TopFlight Builders gutted the existing bathroom and rebuilt it from the ground up — custom tile work, a new shower enclosure, updated vanity, and all-new fixtures and lighting.",
    tasks: [
      {
        area: "Demo & Waterproofing",
        items: ["Full demolition of existing bathroom", "Waterproofing system installed in shower area"],
      },
      {
        area: "Tile & Shower",
        items: ["Custom tile shower with new enclosure", "Tile flooring throughout", "Niche and bench built into shower"],
      },
      {
        area: "Vanity & Fixtures",
        items: ["New vanity with updated countertop", "All-new plumbing fixtures and hardware", "Refreshed lighting and mirrors"],
      },
    ],
    outcome: "A completely updated bathroom that the homeowners say feels like a different home.",
  },
  {
    slug: "kitchen-remodel-marietta",
    title: "Kitchen Remodel — Marietta",
    location: "Marietta, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "kitchen",
    categories: ["Kitchens"],
    tags: ["Cabinets", "Countertops", "Backsplash", "Modern", "Fixtures"],
    hero: "/images/projects/kitchen-remodel-marietta/01.jpg",
    beforePhotos: ["/images/projects/kitchen-remodel-marietta/before-01.jpg", "/images/projects/kitchen-remodel-marietta/before-02.jpg"],
    gallery: ["/images/projects/kitchen-remodel-marietta/01.jpg", "/images/projects/kitchen-remodel-marietta/02.jpg", "/images/projects/kitchen-remodel-marietta/03.jpg", "/images/projects/kitchen-remodel-marietta/04.jpg"],
    excerpt: "A complete kitchen remodel in Marietta — new cabinetry, countertops, backsplash, and modernized fixtures.",
    description: "This Marietta homeowner needed a kitchen that matched the quality of the rest of their home. TopFlight Builders delivered a full kitchen transformation — removing the existing cabinets and layout and replacing everything with new shaker cabinetry, quartz countertops, tile backsplash, and updated lighting.",
    tasks: [
      {
        area: "Cabinets & Layout",
        items: ["Removed existing cabinetry and appliances", "Installed new shaker-style cabinetry with soft-close hardware", "Optimized layout for improved workflow"],
      },
      {
        area: "Countertops & Backsplash",
        items: ["Quartz countertop installation", "Custom tile backsplash", "Updated sink and plumbing fixtures"],
      },
      {
        area: "Lighting & Finish",
        items: ["Recessed lighting throughout", "Under-cabinet lighting added", "Paint and trim refreshed"],
      },
    ],
    outcome: "A modern kitchen remodel that significantly improved both the function and feel of the home.",
  },
  {
    slug: "kitchen-flooring-bathroom",
    title: "Kitchen, Flooring & Bathroom Remodel",
    location: "Greater Atlanta, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "full-home",
    categories: ["Full Home"],
    tags: ["Kitchen", "Bathroom", "Flooring", "LVP", "Tile", "Modern"],
    hero: "/images/projects/kitchen-flooring-bathroom/01.jpg",
    beforePhotos: ["/images/projects/kitchen-flooring-bathroom/before-01.jpg", "/images/projects/kitchen-flooring-bathroom/before-02.jpg", "/images/projects/kitchen-flooring-bathroom/before-03.jpg"],
    gallery: ["/images/projects/kitchen-flooring-bathroom/01.jpg", "/images/projects/kitchen-flooring-bathroom/02.jpg", "/images/projects/kitchen-flooring-bathroom/03.jpg", "/images/projects/kitchen-flooring-bathroom/04.jpg", "/images/projects/kitchen-flooring-bathroom/05.jpg", "/images/projects/kitchen-flooring-bathroom/06.jpg", "/images/projects/kitchen-flooring-bathroom/07.jpg", "/images/projects/kitchen-flooring-bathroom/08.jpg", "/images/projects/kitchen-flooring-bathroom/09.jpg", "/images/projects/kitchen-flooring-bathroom/10.jpg"],
    excerpt: "A multi-room renovation covering kitchen, bathroom, and full flooring replacement throughout the home.",
    description: "This homeowner tackled multiple major updates at once — a full kitchen remodel, bathroom renovation, and new flooring throughout. TopFlight Builders coordinated all three scopes simultaneously, minimizing disruption and delivering a cohesive finished result across every room.",
    tasks: [
      {
        area: "Kitchen",
        items: ["New cabinetry and countertops", "Tile backsplash and updated fixtures", "Lighting and hardware refresh"],
      },
      {
        area: "Bathroom",
        items: ["Full bathroom gut and rebuild", "Custom tile shower and flooring", "New vanity and fixtures"],
      },
      {
        area: "Flooring",
        items: ["LVP flooring installed throughout all living areas", "Transitions and trim work completed", "Existing subfloor prepped and leveled"],
      },
    ],
    outcome: "Three major scopes completed under one contract — the homeowner got a fully refreshed home without juggling multiple contractors.",
  },
  {
    slug: "kitchen-bathroom-feature-wall",
    title: "Kitchen, Bathroom & Feature Wall",
    location: "Greater Atlanta, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "full-home",
    categories: ["Full Home"],
    tags: ["Kitchen", "Bathroom", "Feature Wall", "Tile", "Modern", "Accent"],
    hero: "/images/projects/kitchen-bathroom-feature-wall/01.jpg",
    beforePhotos: ["/images/projects/kitchen-bathroom-feature-wall/before-01.jpg", "/images/projects/kitchen-bathroom-feature-wall/before-02.jpg"],
    gallery: ["/images/projects/kitchen-bathroom-feature-wall/01.jpg", "/images/projects/kitchen-bathroom-feature-wall/02.jpg", "/images/projects/kitchen-bathroom-feature-wall/03.jpg", "/images/projects/kitchen-bathroom-feature-wall/04.jpg", "/images/projects/kitchen-bathroom-feature-wall/05.jpg", "/images/projects/kitchen-bathroom-feature-wall/06.jpg", "/images/projects/kitchen-bathroom-feature-wall/07.jpg", "/images/projects/kitchen-bathroom-feature-wall/08.jpg", "/images/projects/kitchen-bathroom-feature-wall/09.jpg", "/images/projects/kitchen-bathroom-feature-wall/10.jpg", "/images/projects/kitchen-bathroom-feature-wall/11.jpg"],
    excerpt: "Kitchen and bathroom remodel paired with a custom feature wall — a multi-room update with a bold design statement.",
    description: "This project combined a full kitchen remodel and bathroom renovation with a standout custom feature wall. TopFlight Builders handled all three scopes — delivering functional upgrades throughout the home while adding a dramatic design element that became the focal point of the main living space.",
    tasks: [
      {
        area: "Kitchen",
        items: ["New cabinetry, countertops, and backsplash", "Updated sink, fixtures, and lighting", "Appliance and hardware installation"],
      },
      {
        area: "Bathroom",
        items: ["Full tile shower rebuild", "New vanity and plumbing fixtures", "Tile flooring and updated lighting"],
      },
      {
        area: "Feature Wall",
        items: ["Custom feature wall design and build", "Tile or shiplap accent treatment", "Integrated lighting for visual impact"],
      },
    ],
    outcome: "A home that functions better and looks dramatically different — the feature wall alone transformed the feel of the entire living area.",
  },
  {
    slug: "kitchen-deck-east-cobb",
    title: "Kitchen & Deck Remodel — East Cobb",
    location: "East Cobb, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "kitchen",
    categories: ["Kitchens"],
    tags: ["Kitchen", "Deck", "Outdoor", "Cabinets", "Countertops", "Modern"],
    hero: "/images/projects/kitchen-deck-east-cobb/01.jpg",
    beforePhotos: ["/images/projects/kitchen-deck-east-cobb/before-01.jpg", "/images/projects/kitchen-deck-east-cobb/before-02.jpg"],
    gallery: ["/images/projects/kitchen-deck-east-cobb/01.jpg", "/images/projects/kitchen-deck-east-cobb/02.jpg", "/images/projects/kitchen-deck-east-cobb/03.jpg", "/images/projects/kitchen-deck-east-cobb/04.jpg", "/images/projects/kitchen-deck-east-cobb/05.jpg", "/images/projects/kitchen-deck-east-cobb/06.jpg", "/images/projects/kitchen-deck-east-cobb/07.jpg", "/images/projects/kitchen-deck-east-cobb/08.jpg", "/images/projects/kitchen-deck-east-cobb/09.jpg", "/images/projects/kitchen-deck-east-cobb/10.jpg", "/images/projects/kitchen-deck-east-cobb/11.jpg", "/images/projects/kitchen-deck-east-cobb/12.jpg"],
    excerpt: "Kitchen remodel and deck rebuild in East Cobb — updated interior and a refreshed outdoor living space.",
    description: "This East Cobb homeowner wanted to upgrade both the kitchen and their outdoor space at the same time. TopFlight Builders delivered a full kitchen remodel with new cabinetry and countertops alongside a full deck rebuild — extending the livable space both inside and out.",
    tasks: [
      {
        area: "Kitchen",
        items: ["Removed existing cabinetry and replaced with new shaker cabinets", "Quartz countertops and tile backsplash", "Updated sink, fixtures, and recessed lighting"],
      },
      {
        area: "Deck",
        items: ["Demolished existing deck structure", "New deck framing, decking, and railings", "Stairs and landing rebuilt to code"],
      },
    ],
    outcome: "A fully updated kitchen and a brand-new outdoor deck — two major upgrades completed under one project.",
  },
  {
    slug: "fallen-tree-remodel",
    title: "Fallen Tree Restoration — Marietta",
    location: "Marietta, GA",
    budget: "Contact for Pricing",
    year: 2026,
    service: "restoration",
    categories: ["Restoration"],
    tags: ["Storm Damage", "Restoration", "Roofing", "Drywall", "Structural"],
    hero: "/images/projects/fallen-tree-remodel/01.jpg",
    beforePhotos: ["/images/projects/fallen-tree-remodel/before-01.jpg", "/images/projects/fallen-tree-remodel/before-02.jpg", "/images/projects/fallen-tree-remodel/before-03.jpg", "/images/projects/fallen-tree-remodel/before-04.jpg", "/images/projects/fallen-tree-remodel/before-05.jpg", "/images/projects/fallen-tree-remodel/before-06.jpg"],
    gallery: ["/images/projects/fallen-tree-remodel/01.jpg", "/images/projects/fallen-tree-remodel/02.jpg", "/images/projects/fallen-tree-remodel/03.jpg", "/images/projects/fallen-tree-remodel/04.jpg", "/images/projects/fallen-tree-remodel/05.jpg", "/images/projects/fallen-tree-remodel/06.jpg", "/images/projects/fallen-tree-remodel/07.jpg", "/images/projects/fallen-tree-remodel/08.jpg", "/images/projects/fallen-tree-remodel/09.jpg"],
    excerpt: "Full storm damage restoration in Marietta after a fallen tree caused structural damage — from debris removal to finished interior.",
    description: "When a fallen tree caused significant damage to this Marietta home, the homeowners needed a contractor who could handle the entire scope — from emergency stabilization to full interior restoration. TopFlight Builders managed the complete project: structural repairs, roofing, exterior work, and finished interior rebuild.",
    tasks: [
      {
        area: "Structural & Exterior",
        items: ["Emergency tarping and site stabilization", "Structural framing repairs", "Roofing replacement in affected areas", "Exterior siding and trim restored"],
      },
      {
        area: "Interior Restoration",
        items: ["Drywall removal and replacement throughout damaged areas", "Insulation replaced", "Paint, trim, and finish work to match existing home"],
      },
    ],
    outcome: "The home was fully restored to pre-damage condition — structurally sound, finished throughout, and ready for the family to move back in.",
  },
];

export function getProjectsByService(service: Project["service"]): Project[] {
  return projects.filter((p) => p.service === service);
}

export function getRelatedProjects(slug: string, service: Project["service"]): Project[] {
  return projects.filter((p) => p.slug !== slug && p.service === service).slice(0, 3);
}
