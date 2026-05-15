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
    slug: "kitchen-remodel-dunwoody",
    title: "Kitchen Remodel — Dunwoody Residence",
    location: "Dunwoody, GA",
    community: "Dunwoody Club Forest",
    budget: "$28,500",
    year: 2025,
    service: "kitchen",
    categories: ["Kitchens", "Featured"],
    tags: ["Cabinets", "Countertops", "Tile", "Lighting", "Islands"],
    hero: "/images/home-run-2.jpg",
    gallery: ["/images/home-run-2.jpg", "/images/portfolio-maggie.jpg", "/images/portfolio-magi.jpg"],
    excerpt: "A complete kitchen overhaul featuring dark shaker cabinetry, granite countertops, and a custom brick-faced island.",
    description: "This Dunwoody homeowner wanted a kitchen that blended sophistication with everyday function. The existing layout was outdated and lacked adequate storage and counter space. TopFlight Builders redesigned the space from the ground up, incorporating dark shaker cabinetry, granite countertops, and a statement island with a brick-faced base that became the centerpiece of the open-concept living area.",
    tasks: [
      {
        area: "Demolition",
        items: ["Removed all existing cabinetry and countertops", "Demolished existing backsplash tile", "Opened wall between kitchen and dining area"],
      },
      {
        area: "Cabinet & Countertop Installation",
        items: ["Installed custom dark shaker upper and lower cabinets", "Built and installed center island with brick veneer base", "Installed granite countertops throughout", "Added pull-out drawer organizers and soft-close hardware"],
      },
      {
        area: "Tile & Finishing",
        items: ["Installed subway tile backsplash to ceiling on range wall", "Installed under-cabinet LED lighting", "New pendant lighting over island", "Painted walls and ceiling in coordinating neutral tones"],
      },
    ],
    outcome: "The finished kitchen transformed the home's gathering space into a functional showpiece. The homeowners gained significant counter space, storage, and a kitchen they're proud to entertain in.",
  },
  {
    slug: "kitchen-renovation-east-cobb",
    title: "Kitchen Renovation — East Cobb",
    location: "Marietta, GA",
    community: "East Cobb",
    budget: "$22,000",
    year: 2025,
    service: "kitchen",
    categories: ["Kitchens"],
    tags: ["Cabinets", "Countertops", "Lighting", "Pass-Through", "Modern"],
    hero: "/images/portfolio-maggie.jpg",
    gallery: ["/images/portfolio-maggie.jpg", "/images/home-run-2.jpg"],
    excerpt: "White shaker cabinets, brass pendant lighting, and a new pass-through opening create an airy, modern kitchen in this East Cobb home.",
    description: "This East Cobb kitchen refresh brought new life to a cramped, dated layout. The homeowners wanted a bright, open feel and a connection to the dining room that didn't exist before. TopFlight Builders created a pass-through opening, installed white shaker cabinetry with quartz countertops, and added warm brass pendant lighting to give the space a modern yet timeless feel.",
    tasks: [
      {
        area: "Structural",
        items: ["Cut and framed new pass-through opening to dining room", "Reinforced header and completed all drywall finishing"],
      },
      {
        area: "Cabinet & Countertop Installation",
        items: ["Removed old oak cabinetry", "Installed white shaker upper and lower cabinets to ceiling height", "Installed quartz countertops with waterfall edge on peninsula"],
      },
      {
        area: "Lighting & Finishing",
        items: ["Installed 3 brass pendant lights over peninsula", "Added under-cabinet LED strip lighting", "Painted kitchen and pass-through surround in coordinating colors"],
      },
    ],
    outcome: "The kitchen now flows naturally into the dining room, making the space feel twice as large. The brass hardware and warm lighting give it a personality that the homeowners love.",
  },
  {
    slug: "kitchen-remodel-kennesaw",
    title: "Kitchen Remodel — Kennesaw",
    location: "Kennesaw, GA",
    budget: "$19,800",
    year: 2024,
    service: "kitchen",
    categories: ["Kitchens"],
    tags: ["Cabinets", "Accent Wall", "Modern", "Countertops"],
    hero: "/images/portfolio-magi.jpg",
    gallery: ["/images/portfolio-magi.jpg", "/images/portfolio-maggie.jpg"],
    excerpt: "White shaker cabinets paired with a bold hunter green accent wall create a kitchen with serious personality in this Kennesaw home.",
    description: "The Kennesaw homeowners came to TopFlight Builders with a clear vision: white cabinets, green accents, and a kitchen that felt custom without breaking the bank. We delivered a sharp remodel with white shaker cabinetry, quartz countertops, and a dramatic hunter green accent wall that frames the space and makes a statement the moment you walk in.",
    tasks: [
      {
        area: "Demolition & Prep",
        items: ["Removed existing laminate cabinets and countertops", "Prepped and primed walls for new paint and tile"],
      },
      {
        area: "Cabinets & Countertops",
        items: ["Installed white shaker cabinets with crown molding", "Installed quartz countertops with undermount sink", "Added matte black hardware throughout"],
      },
      {
        area: "Accent & Finishing",
        items: ["Painted accent wall in hunter green", "Installed new LVP flooring throughout kitchen", "Upgraded recessed lighting with warm-tone bulbs"],
      },
    ],
    outcome: "A bold design on a controlled budget. The hunter green accent wall became the focal point the homeowners envisioned, and the updated cabinetry modernized the space completely.",
  },
  {
    slug: "master-bath-chamblee",
    title: "Master Bath Renovation — Chamblee",
    location: "Chamblee, GA",
    budget: "$18,500",
    year: 2025,
    service: "bathroom",
    categories: ["Bathrooms", "Featured"],
    tags: ["Tile", "Shower", "Vanity", "Plumbing", "Modern"],
    hero: "/images/bathroom-chamblee-remodel.jpg",
    gallery: ["/images/bathroom-chamblee-remodel.jpg", "/images/home-run-1.jpg"],
    excerpt: "A full master bath gut-and-rebuild featuring blue subway tile, a rainfall shower head, and custom double vanity.",
    description: "This Chamblee master bathroom was completely gutted and rebuilt from scratch. The homeowners wanted a spa-like retreat — and that's exactly what they got. TopFlight Builders designed and installed a walk-in shower with floor-to-ceiling blue subway tile, a rainfall shower head, and a custom double vanity with warm-toned lighting to create a bathroom that feels like a luxury hotel every single morning.",
    tasks: [
      {
        area: "Demolition",
        items: ["Full gut of existing bathroom including drywall, flooring, and all fixtures", "Waterproofing and cement board installation for shower area"],
      },
      {
        area: "Shower Build",
        items: ["Installed floor-to-ceiling blue subway tile in walk-in shower", "Installed recessed shower niche with matching tile", "Installed rainfall shower head and handheld combo on thermostatic valve"],
      },
      {
        area: "Vanity & Finishing",
        items: ["Built and installed custom double vanity with quartz countertop", "Installed dual undermount sinks and brushed nickel fixtures", "New LED mirror with anti-fog and color temperature adjustment", "Heated tile floor installation"],
      },
    ],
    outcome: "A stunning transformation. The blue subway tile and rainfall shower became the features the homeowners show off to every guest. The bathroom now matches the quality of the rest of their renovated home.",
  },
  {
    slug: "spa-bath-sandy-springs",
    title: "Spa Bath Renovation — Sandy Springs",
    location: "Sandy Springs, GA",
    community: "Riverside",
    budget: "$24,500",
    year: 2025,
    service: "bathroom",
    categories: ["Bathrooms"],
    tags: ["Frameless Glass", "Tile", "Soaking Tub", "Heated Floor", "Luxury"],
    hero: "/images/home-run-1.jpg",
    gallery: ["/images/home-run-1.jpg", "/images/bathroom-chamblee-remodel.jpg"],
    excerpt: "Frameless glass shower, freestanding soaking tub, heated pebble tile floors — a full luxury spa experience built in Sandy Springs.",
    description: "This Sandy Springs homeowner had one requirement: a bathroom that felt like a five-star hotel. TopFlight Builders delivered a frameless glass shower enclosure with pebble tile flooring, a freestanding soaking tub, and heated floors throughout. The result is a master bathroom that functions as a true retreat at the end of every day.",
    tasks: [
      {
        area: "Demolition & Waterproofing",
        items: ["Full demo of existing master bath", "Installed Schluter KERDI waterproofing system throughout shower area", "Radiant heated floor system installed under tile"],
      },
      {
        area: "Shower & Tub",
        items: ["Built custom walk-in shower with pebble tile floor and large-format porcelain walls", "Installed frameless glass shower enclosure", "Positioned and plumbed freestanding soaking tub with floor-mount faucet"],
      },
      {
        area: "Vanity & Fixtures",
        items: ["Installed floating double vanity with vessel sinks", "All brushed nickel fixtures throughout", "Backlit mirror with dimming and anti-fog", "New recessed lighting and accent lighting in shower niche"],
      },
    ],
    outcome: "One of our most-showcased projects. The frameless glass shower and freestanding tub create a dramatic visual that greets you the moment you walk in. The homeowner says it's their favorite room in the house.",
  },
  {
    slug: "full-home-remodel-duluth",
    title: "Full Home Remodel — Duluth",
    location: "Duluth, GA",
    community: "Sugarloaf Country Club",
    budget: "$67,000",
    year: 2024,
    service: "full-home",
    categories: ["Full Home", "Featured"],
    tags: ["Kitchen", "Bathrooms", "Flooring", "Cabinets", "Tile", "Modern"],
    hero: "/images/home-run-1.jpg",
    gallery: ["/images/home-run-1.jpg", "/images/home-run-2.jpg", "/images/bathroom-chamblee-remodel.jpg", "/images/portfolio-maggie.jpg"],
    excerpt: "A top-to-bottom home renovation covering kitchen, two bathrooms, new flooring throughout, and a complete interior repaint.",
    description: "This Sugarloaf Country Club home needed a complete refresh to match the standard of the neighborhood and the lifestyle of its new owners. TopFlight Builders managed a multi-phase renovation covering the kitchen, master bath, guest bath, and all flooring throughout the home. Every phase was coordinated to minimize disruption and deliver a cohesive, move-in-ready result.",
    tasks: [
      {
        area: "Kitchen",
        items: ["Removed all existing cabinetry and appliances", "Installed new shaker cabinetry with soft-close doors and drawers", "Installed quartz countertops with tile backsplash", "Coordinated appliance delivery and installation"],
      },
      {
        area: "Master Bath",
        items: ["Full gut and rebuild of master bathroom", "Frameless glass shower with large-format tile", "Double vanity with quartz top and custom mirrors", "Heated floor installation"],
      },
      {
        area: "Guest Bath",
        items: ["Replaced tub surround with subway tile", "New vanity, toilet, and fixtures throughout"],
      },
      {
        area: "Flooring & Paint",
        items: ["Removed carpet and old hardwood throughout", "Installed continuous LVP flooring across all living areas", "Full interior repaint — walls, trim, and ceilings"],
      },
    ],
    outcome: "Delivered on time and on budget. The homeowners moved into a home that felt brand new — cohesive from room to room with no detail overlooked.",
  },
  {
    slug: "full-home-renovation-smyrna",
    title: "Full Home Renovation — Smyrna",
    location: "Smyrna, GA",
    budget: "$54,000",
    year: 2024,
    service: "full-home",
    categories: ["Full Home"],
    tags: ["Kitchen", "Bathrooms", "Flooring", "Modern", "Open Concept"],
    hero: "/images/home-run-2.jpg",
    gallery: ["/images/home-run-2.jpg", "/images/portfolio-magi.jpg", "/images/bathroom-chamblee-remodel.jpg"],
    excerpt: "Open-concept conversion, kitchen remodel, two bath updates, and new flooring throughout — a complete Smyrna home transformation.",
    description: "The Smyrna homeowners purchased a dated 1990s home with the intention of modernizing it completely before moving in. TopFlight Builders removed a load-bearing wall to open the kitchen to the living area, remodeled the kitchen with dark shaker cabinetry and granite, updated both bathrooms, and installed new flooring throughout. The project was completed in 8 weeks.",
    tasks: [
      {
        area: "Structural",
        items: ["Removed load-bearing wall between kitchen and living room", "Installed LVL beam and proper support", "Opened layout to create open-concept main floor"],
      },
      {
        area: "Kitchen Remodel",
        items: ["Installed dark shaker cabinetry with granite countertops", "Tile backsplash and under-cabinet lighting", "New kitchen island with bar seating"],
      },
      {
        area: "Bathrooms",
        items: ["Master bath: new tile shower, vanity, and fixtures", "Guest bath: full refresh with new tub surround, vanity, and toilet"],
      },
      {
        area: "Flooring & Finishing",
        items: ["LVP flooring installed throughout entire home", "Interior paint — full house including ceilings and trim", "New interior doors and hardware throughout"],
      },
    ],
    outcome: "The open-concept transformation was the most impactful change — it made the home feel nearly twice as large. The homeowners moved in to a completely updated property that required nothing further.",
  },
  {
    slug: "water-damage-restoration-marietta",
    title: "Water Damage Restoration — Marietta",
    location: "Marietta, GA",
    budget: "$14,200",
    year: 2025,
    service: "restoration",
    categories: ["Restoration"],
    tags: ["Water Damage", "Drywall", "Flooring", "Mold Remediation", "Plumbing"],
    hero: "/images/bathroom-chamblee-remodel.jpg",
    gallery: ["/images/bathroom-chamblee-remodel.jpg", "/images/home-run-1.jpg"],
    excerpt: "Emergency water damage restoration following a plumbing failure — remediation, structural drying, drywall, flooring, and full finish work.",
    description: "A supply line failure caused significant water damage to this Marietta home's kitchen and adjacent hallway. TopFlight Builders responded quickly, coordinated drying and remediation, and handled all rebuild work from drywall to finished flooring. The homeowners were back to normal within 3 weeks from the date of the incident.",
    tasks: [
      {
        area: "Remediation & Drying",
        items: ["Coordinated emergency water extraction and industrial drying equipment", "Removed all water-damaged drywall, insulation, and flooring", "Mold inspection and treatment of affected framing"],
      },
      {
        area: "Structural Rebuild",
        items: ["Replaced damaged subfloor sections", "Reframed and insulated affected wall cavities", "Installed new drywall and taped, floated, and textured to match"],
      },
      {
        area: "Finish Work",
        items: ["Matched and installed replacement flooring throughout affected area", "Repainted all restored surfaces", "Replaced damaged cabinetry section and countertop"],
      },
    ],
    outcome: "A stressful situation handled completely. The restored areas are indistinguishable from the rest of the home, and the homeowners were able to resume normal life quickly and without further disruption.",
  },
  {
    slug: "basement-finish-alpharetta",
    title: "Basement Finish — Alpharetta",
    location: "Alpharetta, GA",
    community: "Windward",
    budget: "$31,000",
    year: 2025,
    service: "basements",
    categories: ["Basements & Additions", "Featured"],
    tags: ["Basement", "Wet Bar", "LVP Flooring", "Accent Wall", "Entertainment"],
    hero: "/images/portfolio-magi.jpg",
    gallery: ["/images/portfolio-magi.jpg", "/images/portfolio-maggie.jpg", "/images/home-run-2.jpg"],
    excerpt: "Unfinished basement converted to a full entertainment suite with wet bar, accent wall, LVP flooring, and a dedicated home theater area.",
    description: "This Windward homeowner had an unfinished basement sitting empty for years. TopFlight Builders designed and built a complete entertainment suite — open main area, dedicated home theater zone, a wet bar with custom cabinetry, and a bold accent wall that anchors the space. The basement now gets more use than any other room in the home.",
    tasks: [
      {
        area: "Framing & Rough-In",
        items: ["Framed all interior walls and ceiling soffits", "Electrical rough-in for theater zone, bar, and general lighting", "Plumbing rough-in for wet bar sink"],
      },
      {
        area: "Drywall & Insulation",
        items: ["Installed exterior wall insulation and vapor barrier", "Drywall installation, taping, and finishing throughout"],
      },
      {
        area: "Wet Bar",
        items: ["Built custom wet bar cabinetry with quartz countertop", "Installed undermount sink and brushed nickel fixtures", "Added beverage fridge cutout and electrical"],
      },
      {
        area: "Flooring & Finishing",
        items: ["LVP flooring throughout entire basement", "Painted bold green accent wall in entertainment area", "Recessed lighting throughout with dimmer controls", "Baseboard and trim installation"],
      },
    ],
    outcome: "A completely unused space converted into the family's favorite hangout. The wet bar and home theater zone transformed the basement into a fully functional extension of the home.",
  },
  {
    slug: "age-in-place-remodel-roswell",
    title: "Age in Place Remodel — Roswell",
    location: "Roswell, GA",
    community: "Horseshoe Bend",
    budget: "$22,800",
    year: 2025,
    service: "age-in-place",
    categories: ["Age in Place", "Featured"],
    tags: ["Grab Bars", "Zero-Threshold Shower", "Wider Doorways", "ADA", "Bathroom", "Safety"],
    hero: "/images/ada1.jpg",
    gallery: ["/images/ada1.jpg", "/images/ada2.jpg"],
    excerpt: "A full age-in-place conversion for a Roswell homeowner — zero-threshold shower, grab bars, widened doorways, and a safer, fully accessible bathroom.",
    description: "This Horseshoe Bend homeowner wanted to stay in their home long-term without sacrificing independence or style. TopFlight Builders completed a full age-in-place conversion of the master bathroom and key entry points throughout the home. Every modification was made to be functional and safe while maintaining a clean, modern aesthetic — nothing institutional about it.",
    tasks: [
      {
        area: "Bathroom Conversion",
        items: [
          "Removed tub and installed zero-threshold walk-in shower with fold-down bench",
          "Installed ADA-compliant grab bars at shower, toilet, and vanity",
          "Replaced standard toilet with comfort-height model",
          "Installed handheld shower head on adjustable slide bar",
          "Non-slip porcelain tile floor throughout bathroom",
          "Replaced vanity with roll-under accessible model",
        ],
      },
      {
        area: "Doorway & Hallway Widening",
        items: [
          "Widened master bath doorway from 28\" to 36\" for wheelchair/walker clearance",
          "Widened bedroom doorway to 32\"",
          "Removed threshold transitions throughout main living areas",
        ],
      },
      {
        area: "Entry & Safety",
        items: [
          "Installed no-step entry ramp at front door with matching stone finish",
          "Added handrails on both sides of front steps",
          "Upgraded all interior door hardware to lever-style handles",
          "Improved lighting in hallways and bathroom with motion-sensor switches",
        ],
      },
    ],
    outcome: "The homeowners now have a home they can age in confidently. Every modification blends with the existing design — guests wouldn't know it was an accessibility remodel unless told.",
  },

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
    hero: "/images/projects/whole-home-east-cobb/10.jpg",
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
    hero: "/images/projects/bathroom-brookhaven/01.jpg",
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
