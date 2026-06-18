// =============================================================================
// service-city-data.ts
// Single source of truth for the 9×8 programmatic page matrix.
// Edit CITIES, SERVICES, or UNIQUE_HOOKS here — all 72 pages update instantly.
// =============================================================================

export interface CityData {
  slug: string;
  name: string;
  county: string;
  zipCodes: string;
  neighborhoods: string[];
  landmarks: string[];
  schoolDistricts: string;
  driveFromMarietta: string;
  housingEra: string;
  priceLevel: "standard" | "premium" | "luxury";
  homesNote: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  parentPageUrl: string;
  processSteps: string[];
  typicalRange: string;
  keyMaterials: string[];
  urgencyNote: string;
}

export interface UniqueHook {
  openingHook: string;
  localContext: string;
}

// =============================================================================
// CITIES
// =============================================================================

export const CITIES: CityData[] = [
  {
    slug: "marietta-ga",
    name: "Marietta",
    county: "Cobb",
    zipCodes: "30060, 30062, 30064, 30066, 30067, 30068",
    neighborhoods: ["East Cobb corridor", "Marietta Square area", "Kennesaw Mountain foothills", "West Cobb"],
    landmarks: ["Marietta Square", "Kennesaw Mountain National Battlefield", "WellStar Kennestone Hospital"],
    schoolDistricts: "Marietta City Schools (30060/30064) and Cobb County School District (30062/30066/30067/30068)",
    driveFromMarietta: "Our home city — no drive required",
    housingEra: "1960s–1990s mix",
    priceLevel: "premium",
    homesNote: "Marietta has one of the widest ranges of housing stock in Cobb County — 1960s ranches near the Square, 1980s colonials in East Cobb, and newer construction in the 30066 corridor",
  },
  {
    slug: "canton-ga",
    name: "Canton",
    county: "Cherokee",
    zipCodes: "30114, 30115",
    neighborhoods: ["Holly Springs", "Hickory Flat", "Downtown Canton", "Etowah River corridor"],
    landmarks: ["Etowah River", "Canton Marketplace", "Downtown Canton"],
    schoolDistricts: "Cherokee County School District (Sequoyah, Etowah, Cherokee HS)",
    driveFromMarietta: "~35 miles north via I-575 N, ~40–45 min",
    housingEra: "early 2000s",
    priceLevel: "standard",
    homesNote: "Canton's growth wave of 2000–2010 left thousands of now-aging homes hitting their first major renovation window",
  },
  {
    slug: "kennesaw-ga",
    name: "Kennesaw",
    county: "Cobb",
    zipCodes: "30144, 30152",
    neighborhoods: ["Kennesaw Mountain area", "Barrett Pkwy corridor", "Stilesboro Road", "Shiloh Hills"],
    landmarks: ["Kennesaw Mountain National Battlefield Park", "Town Center Mall area", "Big Shanty Museum"],
    schoolDistricts: "Cobb County School District (North Cobb HS)",
    driveFromMarietta: "~12 miles north via US-41, ~20 min",
    housingEra: "1980s–1990s",
    priceLevel: "standard",
    homesNote: "Kennesaw expanded rapidly in the 1980s and 1990s — the majority of its single-family housing stock is now 30–40 years old",
  },
  {
    slug: "acworth-ga",
    name: "Acworth",
    county: "Cobb",
    zipCodes: "30101, 30102",
    neighborhoods: ["Historic Downtown Acworth", "Lake Acworth waterfront", "Lake Allatoona communities", "Wade Green Road area"],
    landmarks: ["Lake Acworth", "Lake Allatoona", "Historic Downtown Acworth"],
    schoolDistricts: "Cobb County School District (Allatoona HS)",
    driveFromMarietta: "~20 miles north via I-75 N, ~25–30 min",
    housingEra: "1970s–1990s",
    priceLevel: "standard",
    homesNote: "Acworth's lakefront and lake-adjacent homes present unique moisture and weathering challenges that accelerate aging",
  },
  {
    slug: "woodstock-ga",
    name: "Woodstock",
    county: "Cherokee",
    zipCodes: "30188, 30189",
    neighborhoods: ["Towne Lake", "Eagle Watch", "Downtown Woodstock", "Keheley Road area"],
    landmarks: ["Rope Mill Park", "Downtown Woodstock", "Woodstock City Center"],
    schoolDistricts: "Cherokee County School District (Woodstock HS, Etowah HS)",
    driveFromMarietta: "~22 miles north via I-575 N, ~30 min",
    housingEra: "mid 2000s",
    priceLevel: "standard",
    homesNote: "Woodstock's Towne Lake and Eagle Watch communities were built primarily 2000–2010 and are entering their first major renovation cycle",
  },
  {
    slug: "east-cobb-ga",
    name: "East Cobb",
    county: "Cobb",
    zipCodes: "30062, 30066, 30068",
    neighborhoods: ["Lassiter school zone", "Pope school zone", "Sewell Mill Road area", "Johnson Ferry Road corridor"],
    landmarks: ["East Cobb Park", "Chattahoochee River National Recreation Area", "Paper Mill Road corridor"],
    schoolDistricts: "Cobb County School District (Lassiter, Pope, Walton HS — among GA's best)",
    driveFromMarietta: "~10–15 min east via Johnson Ferry Rd or Roswell Rd",
    housingEra: "1980s–1990s",
    priceLevel: "luxury",
    homesNote: "East Cobb is our single most active market — homeowners invest heavily in their properties, expect premium materials, and renovate to protect significant equity",
  },
  {
    slug: "roswell-ga",
    name: "Roswell",
    county: "Fulton",
    zipCodes: "30075, 30076",
    neighborhoods: ["Historic Roswell district", "Canton Street area", "Vickery Creek corridor", "Mountain Park"],
    landmarks: ["Canton Street", "Vickery Creek Trail", "Roswell Area Park"],
    schoolDistricts: "Fulton County School District (Roswell HS, Centennial HS)",
    driveFromMarietta: "~20 miles east via GA-120, ~30 min",
    housingEra: "mixed — 1830s historic core to 1990s suburbs",
    priceLevel: "premium",
    homesNote: "Historic Roswell's older homes require experienced contractors comfortable with non-standard layouts, aging systems, and the permit nuances of historic properties",
  },
  {
    slug: "alpharetta-ga",
    name: "Alpharetta",
    county: "Fulton",
    zipCodes: "30004, 30005, 30009, 30022",
    neighborhoods: ["Windward", "Downtown Alpharetta", "Avalon area", "Haynes Bridge corridor"],
    landmarks: ["Avalon", "Downtown Alpharetta Main Street", "Big Creek Greenway"],
    schoolDistricts: "Fulton County School District (Alpharetta HS, Milton HS)",
    driveFromMarietta: "~28 miles via I-285/GA-400, ~35–40 min",
    housingEra: "1990s–2000s",
    priceLevel: "luxury",
    homesNote: "Alpharetta homeowners expect luxury-grade finishes — custom cabinetry, stone surfaces, and premium appliances are the baseline, not the upgrade",
  },
];

// =============================================================================
// SERVICES
// =============================================================================

export const SERVICES: ServiceData[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen",
    parentPageUrl: "/services/kitchen-remodeling",
    processSteps: [
      "Design consultation and layout planning",
      "Cabinet selection and ordering (2–5 week lead time)",
      "Demolition and rough-in (plumbing, electrical, gas)",
      "Cabinet installation and countertop templating",
      "Tile backsplash, flooring, and fixture installation",
      "Appliance installation and final punch list",
    ],
    typicalRange: "Most kitchen remodels in the Greater Atlanta market range from $25,000 for a cosmetic refresh to $85,000+ for a full gut renovation with custom cabinetry",
    keyMaterials: [
      "Custom and semi-custom cabinetry",
      "Quartz and natural stone countertops",
      "Tile and hardwood flooring",
      "Under-cabinet LED lighting",
      "Premium appliances",
    ],
    urgencyNote: "Cabinet lead times of 2–5 weeks mean early planning matters — delaying the start pushes your completion date significantly",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom",
    parentPageUrl: "/services/bathroom-remodeling",
    processSteps: [
      "Design consultation and fixture selection",
      "Demolition and waterproofing (Schluter KERDI or equivalent)",
      "Tile and shower installation",
      "Vanity, toilet, and fixture installation",
      "Lighting and ventilation upgrade",
      "Final seal and punch list",
    ],
    typicalRange: "Bathroom remodels in Greater Atlanta typically range from $12,000 for a cosmetic refresh to $45,000+ for a full master bath with frameless glass and premium tile",
    keyMaterials: [
      "Large-format porcelain and natural stone tile",
      "Schluter waterproofing systems",
      "Frameless glass enclosures",
      "Kohler, Moen, and Delta fixtures",
      "Heated tile floor systems",
    ],
    urgencyNote: "Water damage behind existing tile is common — we always inspect before closing walls, which prevents costly surprises later",
  },
  {
    slug: "full-home-remodeling",
    name: "Full Home Remodeling",
    shortName: "Full Home",
    parentPageUrl: "/services/full-home-remodeling",
    processSteps: [
      "Room-by-room scoping and phasing plan",
      "Permit coordination for all trades",
      "Kitchen and bathroom renovations",
      "Flooring replacement and paint throughout",
      "Electrical, plumbing, and HVAC updates as needed",
      "Final walkthrough and touch-up",
    ],
    typicalRange: "Whole-home renovations in the Greater Atlanta market typically range from $75,000 for a targeted multi-room refresh to $200,000+ for a complete gut renovation",
    keyMaterials: [
      "LVP and hardwood flooring",
      "Custom cabinetry and stone surfaces",
      "Recessed lighting and smart home prep",
      "Interior paint systems",
      "Updated plumbing and electrical",
    ],
    urgencyNote: "Full-home projects benefit from starting all trades simultaneously — sequencing matters, and a single contractor managing all trades prevents costly scheduling gaps",
  },
  {
    slug: "basement-finishing",
    name: "Basement Finishing",
    shortName: "Basement",
    parentPageUrl: "/services/basements-and-additions",
    processSteps: [
      "Moisture assessment and waterproofing plan",
      "Framing, insulation, and vapor barrier",
      "Electrical rough-in and panel upgrade if needed",
      "Drywall, flooring (LVP or carpet), and lighting",
      "Egress window installation if needed",
      "Trim, paint, and finish work",
    ],
    typicalRange: "Basement finishing in Greater Atlanta ranges from $30,000 for a basic open layout to $75,000+ for a finished suite with a wet bar, bathroom, and dedicated rooms",
    keyMaterials: [
      "Spray foam and rigid foam insulation",
      "LVP flooring (moisture-resistant)",
      "Egress windows",
      "Recessed LED lighting",
      "Wet bar cabinetry and plumbing",
    ],
    urgencyNote: "Basements with moisture issues must be addressed before finishing — skipping this step leads to mold and costly tear-outs within 2–3 years",
  },
  {
    slug: "home-additions",
    name: "Home Additions",
    shortName: "Addition",
    parentPageUrl: "/services/basements-and-additions",
    processSteps: [
      "Architectural planning and permit submission",
      "Foundation and structural framing",
      "Roof tie-in and exterior weatherproofing",
      "Electrical, plumbing, and HVAC extension",
      "Insulation, drywall, and interior finishing",
      "Exterior matching — siding, trim, and paint",
    ],
    typicalRange: "Home additions in Greater Atlanta typically range from $80,000 for a single-room addition to $200,000+ for a full second floor or primary suite addition",
    keyMaterials: [
      "LVL beams and engineered lumber",
      "Hardie board or matching siding",
      "Architectural shingles",
      "Energy-efficient windows and doors",
      "Matching interior finishes",
    ],
    urgencyNote: "Permit and plan approval can take 6–10 weeks in Cobb and Cherokee counties — starting the planning process early is critical",
  },
  {
    slug: "restoration",
    name: "Storm, Water & Fire Restoration",
    shortName: "Restoration",
    parentPageUrl: "/services/restoration",
    processSteps: [
      "Emergency response and damage assessment",
      "Water extraction and industrial drying",
      "Mold testing and remediation if present",
      "Structural repair — framing, drywall, subfloor",
      "Finish work matching existing home",
      "Final inspection and documentation",
    ],
    typicalRange: "Restoration scopes in Greater Atlanta range widely — minor water intrusion repairs from $5,000 to full structural rebuilds following fire or major flooding at $100,000+",
    keyMaterials: [
      "Commercial-grade drying equipment",
      "Antimicrobial treatment systems",
      "Matching drywall and texture systems",
      "Moisture barriers and waterproofing",
      "Matching flooring and paint systems",
    ],
    urgencyNote: "The first 24–72 hours after water intrusion are critical — mold can begin colonizing wet drywall within 48 hours in Atlanta's humid climate",
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    parentPageUrl: "/services",
    processSteps: [
      "Roof inspection and photo documentation",
      "Insurance claim assistance if storm-related",
      "Removal of existing roofing material",
      "Deck repair or replacement as needed",
      "Ice and water shield, underlayment, and shingle installation",
      "Ridge cap, flashing, and gutter check",
    ],
    typicalRange: "Roof replacements in the Greater Atlanta market typically range from $8,000 for a standard 2,000 sq ft ranch to $20,000+ for larger homes or premium materials",
    keyMaterials: [
      "GAF and Owens Corning architectural shingles",
      "Ice and water shield underlayment",
      "Drip edge and step flashing",
      "Ridge vent systems",
      "Gutter guards and downspout extensions",
    ],
    urgencyNote: "Storm-damaged roofs should be inspected and documented within 30 days of the event — most insurance claims have time limitations",
  },
  {
    slug: "siding",
    name: "Siding",
    shortName: "Siding",
    parentPageUrl: "/services",
    processSteps: [
      "Siding inspection and moisture damage assessment",
      "Removal of existing siding",
      "House wrap and moisture barrier installation",
      "New siding installation",
      "Trim, corner boards, and window casing",
      "Caulk, prime, and final paint if needed",
    ],
    typicalRange: "Siding replacement in Greater Atlanta typically ranges from $12,000 for a standard vinyl job to $35,000+ for full Hardie board (fiber cement) on a larger home",
    keyMaterials: [
      "James Hardie fiber cement board",
      "LP SmartSide engineered wood",
      "Premium vinyl siding systems",
      "Zip System house wrap",
      "Painted aluminum trim",
    ],
    urgencyNote: "Rotting or damaged siding creates pathways for moisture intrusion — delaying replacement often leads to structural wood rot behind the walls",
  },
  {
    slug: "age-in-place",
    name: "Age in Place Remodeling",
    shortName: "Age in Place",
    parentPageUrl: "/services/age-in-place",
    processSteps: [
      "Home safety assessment and modification plan",
      "Bathroom conversion — zero-threshold shower, grab bars, comfort-height toilet",
      "Doorway and hallway widening for wheelchair/walker clearance",
      "Entry ramp and exterior accessibility",
      "Lever handle hardware and lighting upgrades",
      "Final walkthrough and documentation",
    ],
    typicalRange: "Age in place modifications in Greater Atlanta typically range from $8,000 for a targeted bathroom modification to $35,000 for a comprehensive whole-home accessibility upgrade",
    keyMaterials: [
      "Moen and Delta grab bar systems (weight-rated to 500 lbs)",
      "Zero-threshold shower systems",
      "Comfort-height ADA toilets",
      "Lever-style door hardware",
      "Non-slip tile and safety flooring",
    ],
    urgencyNote: "CAPS-certified planning ensures modifications qualify for any applicable insurance or VA reimbursement — documentation matters",
  },
];

// =============================================================================
// UNIQUE_HOOKS
// Key: "citySlug-serviceSlug"
// Every one of the 72 combinations has a distinct hook grounded in that
// city's specific housing stock, geography, or market context.
// =============================================================================

export const UNIQUE_HOOKS: Record<string, UniqueHook> = {

  // ── MARIETTA ──────────────────────────────────────────────────────────────

  "marietta-ga-kitchen-remodeling": {
    openingHook: "Marietta's East Cobb corridor has some of the most active kitchen renovation activity in Cobb County — many of the colonials and traditionals built along Johnson Ferry Road and Sewell Mill Road in the 1980s still have their original galley layouts, and homeowners are opening them up into the dining room to match how families actually live today. We've completed kitchen renovations in the 30062 and 30066 zip codes that transformed these dated spaces into open-concept kitchens with quartz countertops, custom cabinetry, and islands that didn't exist in the original floor plan.",
    localContext: "Because Marietta is our home base, we're on-site faster and stay more attentive throughout the project — no long commutes eating into your job's schedule.",
  },

  "marietta-ga-bathroom-remodeling": {
    openingHook: "Marietta's housing stock spans nearly four decades of construction — from 1960s ranch homes near the Square with their original cast-iron tubs to late-1990s colonials in the 30066 corridor where builder-grade tile and fiberglass surrounds are finally giving way to proper tile showers. Each era comes with different rough-in dimensions and waterproofing needs, and our crews have worked in all of them.",
    localContext: "We've done bathroom remodels across every Marietta zip code — from modest hall bath refreshes in the 30060 area to full master suite renovations in the 30068 corridor — so we come in knowing what to expect behind the walls.",
  },

  "marietta-ga-full-home-remodeling": {
    openingHook: "A whole-home renovation in Marietta means navigating one of the most varied housing markets in Cobb County — the same street can have a 1960s ranch next to a 1990s colonial, and the scope of work differs substantially between them. Our team builds a phased plan for each home based on what's actually there, not a generic checklist.",
    localContext: "Operating from Marietta means we can mobilize quickly, hold tighter schedules, and check on work daily — advantages that compound over a multi-month whole-home project.",
  },

  "marietta-ga-basement-finishing": {
    openingHook: "Marietta's 1980s and 1990s construction era produced thousands of homes with full unfinished basements — and those basements are now 30–40 years old and at the point where homeowners want to use that square footage. The red clay soil common throughout Cobb County makes moisture assessment critical before any framing goes up.",
    localContext: "We've finished basements throughout the 30062, 30066, and 30067 zip codes and know the soil and drainage patterns in this market — which informs how we approach moisture mitigation before the first stud goes in.",
  },

  "marietta-ga-home-additions": {
    openingHook: "Marietta homeowners in the 30064 and 30066 zip codes who love their neighborhood but need more space are increasingly choosing to add rather than move — especially with the current market making relocation expensive. The mix of lot sizes across Marietta means every addition requires a site-specific plan for setbacks, drainage, and tie-in points.",
    localContext: "Our familiarity with Cobb County permitting means we know the review timelines and documentation requirements before we submit — which avoids the delays that catch out-of-area contractors off guard.",
  },

  "marietta-ga-restoration": {
    openingHook: "Marietta's mature tree canopy — beautiful as it is — means storm damage from fallen limbs and trees is one of the most common restoration calls we receive in this market. We've rebuilt rooflines, replaced structural framing, and restored finished interiors in Marietta homes after everything from isolated storm strikes to the multi-day power outages that accompany major Georgia weather events.",
    localContext: "Being headquartered in Marietta means we can respond to emergency calls the same day — not the next business day — and we already know the neighborhoods, the permit office, and the preferred inspection schedule.",
  },

  "marietta-ga-roofing": {
    openingHook: "Marietta's oldest residential neighborhoods — particularly around the Square and in West Cobb — have roofs that have gone through multiple replacement cycles, and the homes in between from the 1980s and 1990s are now at the age where original architectural shingles are failing or showing granule loss after decades of Georgia sun and storms. We inspect roofs across all six Marietta zip codes regularly.",
    localContext: "As a Marietta-based company, we're available for fast inspections after storm events and we understand how Cobb County processes insurance-related roofing permits.",
  },

  "marietta-ga-siding": {
    openingHook: "Marietta's 1980s vinyl siding installations are reaching the end of their functional life — the original vinyl on homes built during the building boom along the US-41 and Barrett Pkwy corridors is fading, cracking, and in some cases allowing moisture behind the cladding. Upgrading to James Hardie fiber cement in Marietta's climate makes sense given the exposure to Georgia's humidity and summer heat cycles.",
    localContext: "We've replaced siding on ranches in the 30060 area and colonials in the 30066 and 30067 corridors — the framing conditions and moisture situations differ between eras, and we've seen both.",
  },

  "marietta-ga-age-in-place": {
    openingHook: "Many of Marietta's longtime residents — particularly in the established neighborhoods near the Square and in West Cobb — are choosing to stay in homes they've owned for 20 or 30 years rather than downsize. Making those homes work for the long term means thoughtful modifications, not just grab bars — rethinking thresholds, widening doorways, and improving lighting throughout.",
    localContext: "We work with families throughout Marietta who are planning for a parent to move in or modifying their own home for long-term accessibility — and we know how to do it in a way that doesn't make the house feel clinical.",
  },

  // ── CANTON ────────────────────────────────────────────────────────────────

  "canton-ga-kitchen-remodeling": {
    openingHook: "Canton's rapid growth between 2000 and 2010 produced thousands of homes with builder-grade kitchens — dark maple cabinets, laminate countertops, and basic tile backsplashes that were standard for that era but feel dated now. Homeowners in Holly Springs and Hickory Flat are hitting that 20-year mark where the first major kitchen renovation makes financial and practical sense.",
    localContext: "The drive up I-575 puts our crews in Canton within 45 minutes of our Marietta shop — close enough to maintain the same project oversight we give to our Cobb County jobs.",
  },

  "canton-ga-bathroom-remodeling": {
    openingHook: "The builder bathrooms installed in Canton's early 2000s subdivisions — fiberglass tub-shower combos, single-sink vanities, and builder-grade light bars — are now 20 years old and ready for a proper renovation. Homeowners in the Hickory Flat corridor and near Canton Marketplace are upgrading to tile showers, frameless glass, and double vanities that match how they actually use the space.",
    localContext: "Canton is one of our most consistent out-of-county markets — we schedule crews efficiently so the I-575 drive doesn't inflate your project cost or slow the timeline.",
  },

  "canton-ga-full-home-remodeling": {
    openingHook: "Canton homes built in the 2000–2010 boom are hitting a wall all at once — the original flooring, kitchen finishes, bathroom tile, and paint all look their age simultaneously, which makes whole-home renovation a natural next step. Tackling it as a single project under one contractor is significantly more efficient than piecemeal repairs over five years.",
    localContext: "We've run multi-room projects in Cherokee County and understand the permit process through the Cherokee County Building Inspections office — which moves on a different schedule than Cobb County.",
  },

  "canton-ga-basement-finishing": {
    openingHook: "Many of Canton's early 2000s homes — particularly in the subdivisions off Univeter Road and along the Etowah River corridor — were built with full unfinished basements that were never converted despite 20 years of occupancy. That square footage represents significant unrealized value, especially as Cherokee County's population density has grown and square footage commands a real premium.",
    localContext: "Cherokee County's basement finishing permits go through the county building department, and we're experienced with the inspection sequence and documentation they require.",
  },

  "canton-ga-home-additions": {
    openingHook: "Canton families who bought smaller homes in the early 2000s as starter properties are now outgrowing them — and with Cherokee County's strong appreciation, adding square footage through an addition often pencils out better than moving. The 2000s-era construction makes structural tie-ins more predictable than on older homes.",
    localContext: "Cherokee County plan review timelines vary by scope — we factor this into our project planning so the permit wait doesn't blindside your schedule.",
  },

  "canton-ga-restoration": {
    openingHook: "Canton's proximity to the Etowah River and its tributary creeks means flooding events — particularly along the river corridor and in lower-lying subdivisions — are a recurring reality. We've responded to water intrusion and storm damage calls in the Holly Springs and Etowah River corridor areas where drainage issues compound the damage from heavy rain events.",
    localContext: "Getting crews from Marietta to Canton quickly after a storm is a priority — the 40-minute drive is manageable, and we carry the equipment to begin assessment and extraction the same day we're called.",
  },

  "canton-ga-roofing": {
    openingHook: "Canton's early 2000s roofing — installed on thousands of homes during the subdivision boom — used standard 25-year architectural shingles that are now at or past their expected lifespan. Homeowners throughout Holly Springs and Hickory Flat are seeing granule loss, failing flashing, and the early signs of deck deterioration that signal it's time for a full replacement.",
    localContext: "We pull roofing permits through Cherokee County and coordinate inspections efficiently — the county's building department has a reliable review process that we've navigated many times.",
  },

  "canton-ga-siding": {
    openingHook: "The vinyl siding installed on Canton's early 2000s subdivisions is showing its age — chalking, fading, and in some cases warping from years of direct south-facing sun exposure in Georgia's climate. Upgrading to James Hardie board offers significantly better longevity and a more substantial look that matches the investment Canton homeowners have made in the rest of their properties.",
    localContext: "Canton's subdivision HOAs often have exterior color and material standards — we work with homeowners to select products that meet HOA requirements while achieving the upgrade they're after.",
  },

  "canton-ga-age-in-place": {
    openingHook: "Canton's early 2000s construction era produced homes that weren't built with aging in mind — open floor plans with high thresholds, narrow powder room doors, and master baths with high-step tub surrounds. As Cherokee County's first wave of subdivision homeowners enters their 60s, we're seeing strong demand for thoughtful accessibility modifications that keep people in their communities.",
    localContext: "We modify homes throughout Cherokee County and understand the permit requirements for structural doorway widening and exterior ramp construction under the county building code.",
  },

  // ── KENNESAW ──────────────────────────────────────────────────────────────

  "kennesaw-ga-kitchen-remodeling": {
    openingHook: "Kennesaw expanded rapidly through the 1980s and 1990s, and the homes built during those decades — particularly along the Barrett Pkwy corridor and in the Stilesboro Road area — still carry their original kitchen configurations in many cases. The galley and U-shaped kitchens common in 1980s colonials were designed for a different era of cooking and entertaining, and owners are opening them up to match current expectations.",
    localContext: "Kennesaw is a 20-minute drive from our Marietta shop, which means we're a consistent presence on-site throughout your project — not an out-of-area crew squeezing in visits when logistics allow.",
  },

  "kennesaw-ga-bathroom-remodeling": {
    openingHook: "The 1980s and 1990s bathrooms in Kennesaw's established neighborhoods — particularly in Shiloh Hills and around the Kennesaw Mountain area — feature the hallmarks of that era: almond-colored fixtures, one-piece fiberglass surrounds, and cultured marble vanity tops that haven't aged well. A full gut renovation brings these spaces in line with how the rest of the home has been updated.",
    localContext: "We've renovated bathrooms in homes throughout the 30144 and 30152 zip codes and know the plumbing configurations typical of that era's construction — which helps us plan and price without surprises.",
  },

  "kennesaw-ga-full-home-remodeling": {
    openingHook: "A 1980s or 1990s Kennesaw home that hasn't seen a major renovation is often ready for updates in almost every category simultaneously — the kitchen, the bathrooms, the flooring, and the paint palette all reflect the same dated era. Tackling these as a coordinated whole-home project rather than piecemeal over years produces a more cohesive result and typically costs less per scope.",
    localContext: "Our crews can be in Kennesaw daily given the proximity to Marietta — which matters on a whole-home project where consistent supervision directly affects finish quality.",
  },

  "kennesaw-ga-basement-finishing": {
    openingHook: "Kennesaw's 1980s and 1990s colonial-style homes were frequently built with full daylight basements — and a significant number of them are still unfinished or only partially converted. At 30–40 years old, these spaces are ready for proper finishing, but the age of the construction means moisture assessment and sometimes waterproofing work comes first.",
    localContext: "We've assessed and finished basements throughout the 30144 zip code and understand the soil and drainage characteristics in this part of Cobb County — including the areas near Kennesaw Mountain where grade-related moisture issues are more common.",
  },

  "kennesaw-ga-home-additions": {
    openingHook: "Kennesaw homeowners who love their established neighborhoods — particularly the quieter streets around Kennesaw Mountain National Battlefield and the Stilesboro Road area — are choosing additions over relocating to newer construction farther out. The 1980s and 1990s framing on these homes is solid and ties in well, but the older roof and exterior materials often need to be addressed as part of the addition scope.",
    localContext: "Cobb County permitting covers Kennesaw, and we're experienced with the county's review process and inspection sequence for addition projects — which helps prevent the delays that can extend timelines on structural work.",
  },

  "kennesaw-ga-restoration": {
    openingHook: "Kennesaw's mature neighborhoods — particularly the areas with heavy tree cover around the Kennesaw Mountain foothills — see storm damage from fallen trees and limbs regularly during Georgia's spring and summer storm season. We've handled restoration projects in the 30144 zip code ranging from roof-and-ceiling repairs after limb strikes to more extensive structural rebuilds following direct tree falls.",
    localContext: "A 20-minute drive from our Marietta headquarters means we can respond to Kennesaw emergencies quickly and begin damage assessment and protection the same day.",
  },

  "kennesaw-ga-roofing": {
    openingHook: "The original roofs on Kennesaw's 1980s and 1990s homes have gone through at least one full replacement cycle and many are now on their second or even third set of shingles — meaning the decking below deserves a thorough inspection before another layer goes on. We pull back the existing material, assess the deck, and replace any damaged sheeting before the new roof goes down.",
    localContext: "Kennesaw roofing permits are handled through Cobb County Building Inspections — we're well-versed in the county's documentation requirements and inspection scheduling process.",
  },

  "kennesaw-ga-siding": {
    openingHook: "Many of Kennesaw's 1980s homes were built with T1-11 or early vinyl siding products that have now been exposed to 35–40 years of Georgia's humidity, freeze-thaw cycles, and UV degradation. Replacing failing siding before it allows moisture into the wall cavity is significantly less expensive than dealing with the structural wood rot that follows.",
    localContext: "We've replaced siding on dozens of homes in the Kennesaw market and understand the framing conditions common to that construction era — which lets us give accurate estimates rather than discovering additional scope mid-project.",
  },

  "kennesaw-ga-age-in-place": {
    openingHook: "Kennesaw's established neighborhoods are home to many long-term residents who have lived in their 1980s and 1990s colonials for 20–30 years and want to stay. The two-story layout common in that era's construction — master suite upstairs, full baths on the upper floor — requires thoughtful planning to make accessible without compromising the home's character.",
    localContext: "We work with Kennesaw families on accessibility modifications ranging from simple bathroom grab bar installations to more complex projects like main-floor bathroom additions that allow single-level living.",
  },

  // ── ACWORTH ───────────────────────────────────────────────────────────────

  "acworth-ga-kitchen-remodeling": {
    openingHook: "Acworth's older lakeside neighborhoods — particularly the homes closest to Lake Acworth and Lake Allatoona — were built in the 1970s and 1980s when kitchens were smaller, more compartmentalized spaces. Decades of lake-area humidity have accelerated cabinet degradation in some of these homes beyond what you'd see in landlocked Cobb County neighborhoods, making replacement a necessity rather than just an aesthetic upgrade.",
    localContext: "The Wade Green Road corridor and I-75 communities in Acworth have a different housing mix than the lakefront neighborhoods — we assess each home individually and scope accordingly rather than applying a one-size approach.",
  },

  "acworth-ga-bathroom-remodeling": {
    openingHook: "Acworth's lake-adjacent homes deal with above-average humidity year-round — and that moisture finds its way into bathrooms that weren't properly waterproofed when they were built in the 1970s and 1980s. We find hidden tile failure, soft subfloor, and mold more frequently in Acworth bathrooms than in dryer inland markets, which is why our waterproofing step is non-negotiable.",
    localContext: "We always open the wall cavity before closing up in Acworth bathrooms — the combination of aging construction and lakeside humidity means secondary damage is common, and finding it early prevents a much more expensive future repair.",
  },

  "acworth-ga-full-home-remodeling": {
    openingHook: "Acworth's 1970s and 1980s homes have a lot going for them — established lots, mature landscaping, proximity to two lakes — but the interior finishes from that era have not aged as gracefully. A whole-home renovation in Acworth often involves more hidden remediation work than in newer markets because moisture has had decades to work its way into floors, walls, and framing.",
    localContext: "We budget Acworth whole-home projects conservatively for hidden scope — the lakeside humidity and construction age make it more likely that we'll find conditions that need addressing before cosmetic work begins.",
  },

  "acworth-ga-basement-finishing": {
    openingHook: "Finishing a basement in Acworth requires a more rigorous moisture assessment than in most other markets — the proximity to Lake Acworth and Lake Allatoona means the water table and humidity levels are higher than in landlocked neighborhoods, and a finished basement that wasn't properly waterproofed first will fail within a few years. We don't skip that step.",
    localContext: "We've assessed basements in Acworth where the existing concrete showed efflorescence and minor seepage that weren't visible until we probed the perimeter — conditions that must be addressed before any framing or insulation goes in.",
  },

  "acworth-ga-home-additions": {
    openingHook: "Acworth's desirable location between Lake Acworth and Lake Allatoona — combined with the charm of Historic Downtown — makes it a market where homeowners are investing in their properties rather than leaving. Adding square footage here is a sound investment given the lot premiums and strong buyer interest in the area, and our team knows how to match new construction to the character of Acworth's older homes.",
    localContext: "Cobb County handles permitting for Acworth additions, and we're experienced with the county's review and inspection sequence — including the specific requirements for additions near protected watershed areas.",
  },

  "acworth-ga-restoration": {
    openingHook: "Acworth's proximity to Lake Acworth and Lake Allatoona creates moisture exposure conditions that accelerate wear on rooflines, siding, and even interior spaces during high-humidity seasons. We've responded to storm and water damage calls in the Lake Acworth area and the I-75 corridor communities multiple times — the combination of Georgia storms and lakeside humidity means restoration work here often uncovers secondary moisture damage that a less thorough assessment would miss.",
    localContext: "We carry commercial drying equipment and can begin extraction and drying within hours of a water intrusion event in Acworth — stopping active damage quickly is especially critical in a high-humidity environment where mold colonization happens faster.",
  },

  "acworth-ga-roofing": {
    openingHook: "Acworth's lakeside environment is harder on roofing systems than most homeowners realize — the combination of humidity, seasonal temperature swings, and the organic debris accumulation common in tree-heavy lake neighborhoods accelerates shingle aging and moss growth. Roofs in the Lake Acworth and Lake Allatoona communities should be inspected more frequently than the standard every-3-years recommendation.",
    localContext: "We include a thorough gutter and flashing inspection on every Acworth roofing job — in lake-adjacent neighborhoods, clogged gutters and compromised flashing are primary culprits for the hidden water infiltration we find regularly.",
  },

  "acworth-ga-siding": {
    openingHook: "Acworth's lake-area humidity is particularly hard on siding — vinyl that would last 30 years in a drier climate shows accelerated fading, warping, and moisture intrusion in the lake communities. When we remove siding in these neighborhoods, finding wet or rotting OSB behind the cladding is common — which is why we assess the wall assembly before pricing your project.",
    localContext: "James Hardie fiber cement is our most frequent recommendation in Acworth's lakeside neighborhoods — its resistance to moisture, insects, and rot makes it significantly more durable in this environment than vinyl or engineered wood alternatives.",
  },

  "acworth-ga-age-in-place": {
    openingHook: "Acworth's lakefront and lake-adjacent communities have a strong contingent of long-term residents who have no interest in leaving — the lifestyle, the scenery, and the community make it a place people stay for decades. Making their 1970s and 1980s homes work safely as they age requires attention to the particular challenges of older construction: narrower doorways, higher thresholds, and bathroom layouts that weren't designed with accessibility in mind.",
    localContext: "We've completed age-in-place modifications in Acworth homes where the older construction required more structural work than typical — widening doorways in load-bearing walls and adding zero-threshold shower pans in bathrooms with original mud-bed floors.",
  },

  // ── WOODSTOCK ─────────────────────────────────────────────────────────────

  "woodstock-ga-kitchen-remodeling": {
    openingHook: "Woodstock's Towne Lake and Eagle Watch communities were built primarily between 2000 and 2010, and the kitchens in those homes have a familiar look: raised-panel maple or oak cabinets, ceramic tile countertops or entry-level granite, and an island that was added to check a box but wasn't designed for real workflow. Homeowners in these communities are now at the 15–20 year mark and ready to do it right.",
    localContext: "Woodstock is about 30 minutes up I-575 from our Marietta shop — a comfortable range for us to maintain consistent project oversight without adding drive time to your job's cost.",
  },

  "woodstock-ga-bathroom-remodeling": {
    openingHook: "The 2000s-era master bathrooms in Woodstock's Towne Lake and Eagle Watch subdivisions often followed the same floor plan: a soaker tub that never gets used, a separate shower in a fiberglass insert, and a double vanity with cultured marble tops. Homeowners are removing the tub, building a proper tile shower in its place, and upgrading to quartz vanity tops — which is how that space should have been designed from the start.",
    localContext: "Woodstock's mid-2000s plumbing configurations are familiar to our crews — the rough-in dimensions and drain locations are predictable, which lets us give accurate estimates and stick to them.",
  },

  "woodstock-ga-full-home-remodeling": {
    openingHook: "Woodstock's 2000s subdivision homes — particularly in Towne Lake — are entering the phase where everything that was installed at builder grade is ready to be replaced at once. The flooring, the kitchen, the bathrooms, and the paint palette all look the same age because they are the same age, and a coordinated whole-home renovation produces a result that's more cohesive than tackling each room separately over years.",
    localContext: "Cherokee County handles permitting for Woodstock projects, and we're experienced with the county building department's review process — important on a whole-home scope that may require multiple trade permits simultaneously.",
  },

  "woodstock-ga-basement-finishing": {
    openingHook: "Many of Woodstock's 2000s-era homes were built with full unfinished basements — especially in Towne Lake, where the topography created natural daylight basement conditions. These spaces are now 15–20 years old and represent 400–1,000+ square feet of unfinished potential that can be converted into a home office, gym, entertainment space, or additional bedroom suite.",
    localContext: "Cherokee County's basement finishing inspection process is straightforward but requires proper documentation at each stage — we handle the permit application and coordinate inspections so the process stays on track.",
  },

  "woodstock-ga-home-additions": {
    openingHook: "Woodstock has become one of the more desirable Cherokee County communities for families — Downtown Woodstock's restaurant and retail scene, the trail system at Rope Mill Park, and strong school options make it a place people want to stay long-term. Families growing out of their 2000s square footage are adding bonus rooms, sunrooms, and master suite expansions rather than trading up.",
    localContext: "Woodstock's HOA communities — particularly Towne Lake — have architectural review requirements for exterior additions, and we work with homeowners to prepare submissions that meet those standards before permit application.",
  },

  "woodstock-ga-restoration": {
    openingHook: "Woodstock's mid-2000s construction boom produced homes with similar characteristics throughout the Towne Lake and Eagle Watch communities — which means storm and water damage in this market often follows predictable patterns. The roof-to-wall transitions and window installations from that era are common failure points, and we see them regularly in restoration calls from this zip code.",
    localContext: "We respond to storm damage calls in Woodstock throughout the year — the I-575 access makes it a manageable emergency response market, and we're set up to provide same-day assessment after major weather events.",
  },

  "woodstock-ga-roofing": {
    openingHook: "Woodstock's 2000s construction era means a large volume of residential roofs are now at or approaching the 20–25 year mark — the expected lifespan for the standard architectural shingles used during that building boom. Homeowners in Towne Lake and Eagle Watch are seeing the first signs of failure: granule loss in gutters, curling edges, and darker streaking from algae growth.",
    localContext: "We assess roof condition honestly — if a repair will extend the roof another 5 years without risk, we'll tell you. If it's past its service life, we'll show you the evidence and explain why replacement is the better investment.",
  },

  "woodstock-ga-siding": {
    openingHook: "The vinyl siding installed on Woodstock's early 2000s subdivisions is now 20+ years old and starting to show it — particularly on south and west-facing elevations that absorb the most direct sun. Fading, chalking, and hairline cracking are cosmetic issues that become structural problems when the siding's seal against water infiltration begins to fail.",
    localContext: "Towne Lake and Eagle Watch HOAs have exterior material standards that we review before specifying replacement products — we make sure the material and color selection is HOA-compliant before any work begins.",
  },

  "woodstock-ga-age-in-place": {
    openingHook: "Woodstock's growth trajectory has brought a diverse age range into the community, and homeowners who bought in Towne Lake or Eagle Watch in the 2000s are now in their 50s and 60s and beginning to think about long-term livability. The two-story colonial layout common in these communities requires planning to make accessible — adding a main-floor bathroom, widening doorways, and addressing threshold issues before mobility becomes a limiting factor.",
    localContext: "We've completed age-in-place projects in Cherokee County homes and understand the county's permit requirements for structural modifications, exterior ramps, and bathroom conversions.",
  },

  // ── EAST COBB ─────────────────────────────────────────────────────────────

  "east-cobb-ga-kitchen-remodeling": {
    openingHook: "East Cobb is our single most active kitchen renovation market — the Lassiter, Pope, and Walton school zones draw buyers willing to pay a premium, and those buyers expect interiors to match the neighborhood's reputation. Homeowners along Sewell Mill Road, Johnson Ferry Road, and the Paper Mill Road corridor are consistently investing in custom cabinetry, quartz islands, and full layout redesigns that maximize their home's value against that premium real estate backdrop.",
    localContext: "We've completed more kitchen renovations in East Cobb than in any other market — the consistency of 1980s and 1990s colonial-style homes in this zip code means we know exactly what to expect behind the walls, which makes our estimates accurate and our timelines reliable.",
  },

  "east-cobb-ga-bathroom-remodeling": {
    openingHook: "East Cobb homeowners renovating bathrooms aren't settling for cosmetic upgrades — the expectation in this market is large-format tile, frameless glass, heated floors, and custom niche work that reflects the level of the surrounding home and neighborhood. We've built master bathrooms in the 30068 zip code that function as true retreats, and the investment consistently pays off at resale in this high-equity market.",
    localContext: "The 1980s and 1990s master baths in East Cobb colonials were built with fiberglass surrounds and cultured marble — we've replaced hundreds of them with proper tile builds, and the before-and-after contrast is dramatic every time.",
  },

  "east-cobb-ga-full-home-remodeling": {
    openingHook: "East Cobb homeowners who undertake whole-home renovations are typically doing it to protect significant equity — these are homes worth $700,000–$1.2M+ where the renovation investment is justified by the asset value. Our whole-home projects in East Cobb are coordinated down to the detail: flooring transitions, paint palette coherence, and lighting consistency across every room.",
    localContext: "We approach East Cobb whole-home projects with the understanding that the bar is higher here — premium materials, tighter tolerances, and a finished product that feels designed rather than assembled.",
  },

  "east-cobb-ga-basement-finishing": {
    openingHook: "East Cobb's 1980s and 1990s colonials frequently have full basements that were left unfinished at construction — and in a market where finished square footage directly affects home value, converting those spaces is one of the highest-ROI investments available. We've built basement suites in East Cobb with full bathrooms, wet bars, home theaters, and dedicated home office spaces that add meaningful value.",
    localContext: "In East Cobb's luxury tier, basement finishing means more than drywall and carpet — we're typically building dedicated rooms with proper egress, high-end flooring, and the same quality of finish you'd expect upstairs.",
  },

  "east-cobb-ga-home-additions": {
    openingHook: "East Cobb lots are established and the neighborhood character is set — which is exactly why homeowners choose to add rather than relocate when they need more space. Primary suite additions, bonus room additions, and sunroom additions in East Cobb are investments that make sense given the land values and the premium buyers pay to be in the Lassiter and Pope school zones.",
    localContext: "We match addition exterior materials precisely to the existing home — siding, trim profile, roofing, and paint — because East Cobb homeowners rightly expect a seamless addition, not a visible one.",
  },

  "east-cobb-ga-restoration": {
    openingHook: "East Cobb's mature tree canopy — one of the features that makes the neighborhood so appealing — also means tree-related storm damage is a recurring reality. When a tree comes down on a high-value home in the 30068 zip code, the restoration work has to be done at the level the home deserves — structural, exterior, and interior finish work that matches or exceeds the original quality.",
    localContext: "We've restored East Cobb homes after storm damage that required structural framing repair, custom millwork replacement, and premium paint matching — work that requires experience with high-quality original construction.",
  },

  "east-cobb-ga-roofing": {
    openingHook: "Roofing in East Cobb is not just a maintenance decision — it's an investment decision. In a market where curb appeal directly affects home value, upgrading to premium architectural shingles (or even metal roofing on higher-end properties) is a choice that resonates with buyers and appraisers alike. We assess and replace roofs throughout the 30062, 30066, and 30068 zip codes regularly.",
    localContext: "East Cobb homeowners typically select mid-to-high-grade shingles from GAF's Timberline series or Owens Corning's Duration line — products with stronger warranty coverage and better visual profile than standard builder-grade options.",
  },

  "east-cobb-ga-siding": {
    openingHook: "East Cobb homes that are still carrying their original 1980s vinyl siding are increasingly conspicuous in a market where surrounding properties have been updated. James Hardie fiber cement board — properly installed over Zip System house wrap — is the most popular upgrade choice in East Cobb because it holds paint longer, resists impact and moisture better, and reads as a premium material that matches the neighborhood's character.",
    localContext: "We've replaced siding on homes throughout the Johnson Ferry and Sewell Mill corridors — the 30-year-old framing on these colonials is generally solid, but we always assess for moisture intrusion and rot before closing the wall up with new material.",
  },

  "east-cobb-ga-age-in-place": {
    openingHook: "East Cobb's long-term residents are among the most invested homeowners in Cobb County — people who have lived in their Lassiter or Pope zone homes for 25+ years and have no interest in leaving the neighborhood. Making those homes work safely and comfortably for the next chapter means thoughtful modifications that preserve the home's character while eliminating the barriers that come with aging.",
    localContext: "We complete age-in-place modifications in East Cobb homes that are designed to be invisible from a design perspective — grab bars that look like they belong, zero-threshold showers that look custom, and widened doorways that look original.",
  },

  // ── ROSWELL ───────────────────────────────────────────────────────────────

  "roswell-ga-kitchen-remodeling": {
    openingHook: "Roswell's older homes — particularly in the Historic Roswell district near Canton Street and the Vickery Creek corridor — have kitchens that reflect decades of ad-hoc updates rather than thoughtful renovation. Non-standard room dimensions, period-appropriate layouts, and quirky plumbing configurations are common in this market, and working with them requires a contractor who's comfortable with ambiguity and creative problem-solving.",
    localContext: "We've renovated kitchens in Roswell's historic district where no two rooms are quite the same — the century-old homes near Vickery Creek require custom cabinet sizing, careful permit navigation, and a tolerance for unexpected discoveries behind the walls.",
  },

  "roswell-ga-bathroom-remodeling": {
    openingHook: "Roswell's range of housing stock — from antebellum-era homes in the historic district to 1990s colonials in the 30076 zip code — means bathroom renovation in this market requires a contractor who can adapt. The historic homes near Canton Street have original cast iron plumbing and non-standard wall configurations; the 1990s homes in Mountain Park have builder-grade fiberglass that needs full replacement. We've worked in both.",
    localContext: "Historic Roswell properties may require review by the city's historic preservation staff before exterior changes or structural bathroom modifications — we navigate that process with homeowners as part of the project planning phase.",
  },

  "roswell-ga-full-home-remodeling": {
    openingHook: "Whole-home renovations in Roswell require more discovery work upfront than in markets with more uniform housing — the mix of historic, mid-century, and 1990s construction means each home is genuinely different. We scope Roswell projects conservatively, build in contingency for hidden conditions, and communicate transparently when we find things behind walls that change the plan.",
    localContext: "Fulton County handles permitting for Roswell, and we're experienced with the county's review process — including the additional steps required for work in or adjacent to Roswell's historic district.",
  },

  "roswell-ga-basement-finishing": {
    openingHook: "Roswell's 1990s suburb homes in the 30076 zip code frequently have unfinished basements — newer construction that still offers the square footage opportunity without the moisture and structural concerns common in older homes. Homeowners in the Mountain Park and Canton Street area neighborhoods are finishing these spaces for home offices, guest suites, and entertainment rooms.",
    localContext: "Fulton County basement finishing permits require specific egress and electrical inspections — we handle the documentation and coordinate inspections to keep the project on schedule.",
  },

  "roswell-ga-home-additions": {
    openingHook: "Adding to a historic or older Roswell home is one of the more complex addition projects in the Greater Atlanta market — the challenge is matching exterior materials, roof pitch, and architectural character so the addition reads as original. We've built additions in Roswell that are genuinely invisible from the street, which is the only standard worth meeting in a neighborhood with this much character.",
    localContext: "Roswell's historic district has specific design review requirements for additions visible from public rights-of-way — we prepare the necessary documentation and work with the city's historic preservation staff before permit submission.",
  },

  "roswell-ga-restoration": {
    openingHook: "Restoration work in historic Roswell homes carries a different standard than in newer markets — matching original millwork profiles, replicating period-appropriate paint sheens, and sourcing materials that fit the home's character is part of the job. We've restored water and storm-damaged spaces in Roswell where the finish work had to match 80-year-old craftsman trim or 1960s-era plaster walls.",
    localContext: "Roswell's Vickery Creek corridor sees localized flooding during major storm events — we've responded to water intrusion calls in this area where creek-level rises combined with poor drainage overwhelmed older drainage systems.",
  },

  "roswell-ga-roofing": {
    openingHook: "Roswell's varied housing stock means roofing projects here run the full range — from straightforward shingle replacement on a 1990s colonial in Mountain Park to complex multi-pitch work on a historic home near Canton Street with dormers, valleys, and custom flashing requirements. We're equipped for both, and we assess each property individually rather than applying a standard approach.",
    localContext: "Fulton County handles roofing permits for Roswell, and we're experienced with the county's inspection process — including the additional coordination required for work on properties in historic districts.",
  },

  "roswell-ga-siding": {
    openingHook: "Roswell's 1990s suburbs in the 30075 and 30076 zip codes carry aging vinyl siding that's approaching or past its service life — and the historic core has older wood siding that requires careful assessment before replacement or repair. We approach siding projects in Roswell with an eye toward material matching and historic appropriateness, not just replacement-in-kind.",
    localContext: "For Roswell homes in or near the historic district, we consult with homeowners on siding materials that meet historic preservation guidelines — fiber cement can be appropriate where the profile and finish match original wood siding characteristics.",
  },

  "roswell-ga-age-in-place": {
    openingHook: "Roswell's historic character is a strong retention force — people who live near Canton Street and the Vickery Creek corridor tend to stay for decades, and modifying those homes for long-term accessibility requires sensitivity to the architecture. We design age-in-place modifications in Roswell that respect the home's period character while eliminating the physical barriers that come with aging.",
    localContext: "Historic Roswell properties may have permit or design review requirements for structural modifications — we navigate those processes alongside homeowners so the accessibility work doesn't get delayed by approval timelines.",
  },

  // ── ALPHARETTA ────────────────────────────────────────────────────────────

  "alpharetta-ga-kitchen-remodeling": {
    openingHook: "Alpharetta's Windward community and the surrounding GA-400 corridor neighborhoods are home to professionals who interact daily with high-end finishes at work and want their kitchens to match that standard. Kitchen remodels here consistently trend toward custom cabinetry rather than stock, waterfall-edge quartz islands, integrated refrigerators and panel-ready appliances, and full lighting redesigns — the expectation is that the renovation will look like it was always there.",
    localContext: "Alpharetta homeowners often have specific brand preferences and design research already done before they call us — we work efficiently with their selections and apply the craftsmanship necessary to execute at that level.",
  },

  "alpharetta-ga-bathroom-remodeling": {
    openingHook: "Alpharetta master bathroom renovations set a different baseline than most markets — heated floors are standard, not a luxury upgrade; large-format book-matched tile is common; and the fixtures are typically Kohler Purist, Grohe, or equivalent. We've built bathrooms in the Windward and Haynes Bridge corridor communities that function as spa-quality spaces, and we're equipped for that level of work.",
    localContext: "Alpharetta's 1990s and 2000s construction gave these homes the rough-in dimensions to support master bath expansions into adjacent closet or dressing room space — a reconfiguration we've executed multiple times in this market.",
  },

  "alpharetta-ga-full-home-remodeling": {
    openingHook: "A whole-home renovation in Alpharetta means the finished product has to be cohesive at a luxury level — the flooring, the lighting, the hardware, and the color palette all need to hang together as a designed environment, not a collection of separate room updates. We project-manage Alpharetta whole-home renovations with that final result in mind at every stage.",
    localContext: "Alpharetta's proximity to design showrooms at Halcyon and in the Avalon area gives homeowners strong selection resources — we coordinate with those vendors and work from homeowner selections to ensure materials arrive on schedule and are installed correctly.",
  },

  "alpharetta-ga-basement-finishing": {
    openingHook: "Alpharetta's 1990s and 2000s homes in communities like Windward frequently have full unfinished basements that represent 800–1,500 square feet of untapped square footage. In a market where finished square footage commands a real premium, converting these spaces to media rooms, home gyms, secondary kitchens, or guest suites is one of the most compelling investments available.",
    localContext: "Alpharetta basement finishing projects in our portfolio typically include full bathrooms, wet bars, and dedicated home theater builds — the market expectation here is a finished basement that functions as a floor of the home, not just a utility space.",
  },

  "alpharetta-ga-home-additions": {
    openingHook: "Alpharetta homeowners adding square footage are typically targeting primary suite expansions, multi-car garage additions with finished bonus space above, or screened outdoor rooms that extend the livable footprint. The lot premiums and property values in this market justify the investment, and a well-executed addition here consistently returns more than it costs.",
    localContext: "Fulton County handles permitting for Alpharetta, and Windward's HOA has architectural review requirements that we factor into the design and permit submission process — we've navigated both processes multiple times in this market.",
  },

  "alpharetta-ga-restoration": {
    openingHook: "Restoration work in Alpharetta homes carries a higher expectation for finish quality than in most markets — when we're rebuilding a damaged space in a home with custom millwork and premium materials throughout, the restored section has to be indistinguishable from the original. We source matching materials, replicate texture and finish details, and don't consider the job done until the seam disappears.",
    localContext: "Alpharetta's 2000s construction era includes homes with premium original finishes — Brazilian hardwood floors, coffered ceilings, and custom cabinetry that requires sourcing and skill to match properly during restoration.",
  },

  "alpharetta-ga-roofing": {
    openingHook: "Alpharetta's 1990s and 2000s homes are reaching the point where original roofing is at or near end of life — and in a market this premium, the roofing replacement decision often includes an upgrade to higher-performance shingles or consideration of metal roofing systems that offer significantly longer service life and better curb appeal. We present options appropriate to the home's value and the homeowner's goals.",
    localContext: "Windward and the Haynes Bridge corridor neighborhoods have HOA requirements for roofing materials and colors — we confirm compliance before specifying replacement products, and we provide the documentation HOA architectural review committees typically require.",
  },

  "alpharetta-ga-siding": {
    openingHook: "Alpharetta's premium housing market means siding replacement here is almost always an upgrade decision — homeowners are moving from aging vinyl to James Hardie fiber cement or LP SmartSide, both of which hold paint longer, resist moisture better, and carry a visual weight that vinyl simply doesn't. In a neighborhood where curb appeal drives meaningful value, the choice of siding material matters.",
    localContext: "We've replaced siding on homes in Windward and throughout the GA-400 corridor, and we understand the HOA approval process, the permit requirements through Fulton County, and the material expectations in this market.",
  },

  "alpharetta-ga-age-in-place": {
    openingHook: "Alpharetta's technology professional community includes a significant cohort who bought in Windward and the surrounding neighborhoods in the 1990s and are now approaching retirement age — and planning ahead for accessibility means making modifications while the home can still be renovated efficiently, not reactively after a mobility event. The homes in this market have the space to accommodate thoughtful accessibility design without compromising livability.",
    localContext: "Alpharetta age-in-place projects in our portfolio range from targeted bathroom conversions to comprehensive whole-home assessments — we're CAPS-familiar and design modifications to be invisible as accommodations and obvious as good design.",
  },
};
