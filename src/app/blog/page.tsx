"use client";

import { useState } from "react";
import ContactBanner from "@/components/ContactBanner";

const posts = [
  {id:1,cat:"kitchen",catLabel:"Kitchen",date:"April 15, 2025",icon:"🍳",featured:true,
  title:"5 Kitchen Remodeling Trends Dominating Atlanta Homes in 2025",
  excerpt:"From waterfall islands to smart appliances, here's what Atlanta homeowners are choosing for their kitchen renovations this year.",
  content:`<p>Atlanta's kitchen remodeling scene has exploded in 2025, and a few key trends are leading the charge. Whether you're planning a full gut renovation or a targeted upgrade, knowing what's popular right now helps you make choices that add lasting value.</p><p><strong>1. Waterfall Islands</strong> — Quartz and marble waterfall countertops continue to dominate. They're dramatic, easy to clean, and photograph beautifully for listings.</p><p><strong>2. Smart Appliances</strong> — Wi-Fi-enabled ranges, refrigerators with interior cameras, and voice-controlled faucets are increasingly standard in Atlanta renovations, especially in the $80K–$150K budget range.</p><p><strong>3. Two-Tone Cabinetry</strong> — Upper cabinets in soft white or sage paired with lower cabinets in deep navy or charcoal is the dominant look replacing all-white kitchens.</p><p><strong>4. Hidden Storage Everything</strong> — Pull-out pantries, appliance garages, and drawer organizers are now a top priority even before aesthetics.</p><p><strong>5. Integrated Ventilation</strong> — Down-draft systems and ceiling-integrated hoods are replacing the chunky range hood.</p>`},
  {id:2,cat:"bathroom",catLabel:"Bathroom",date:"March 28, 2025",icon:"🚿",
  title:"How to Choose the Right Tile for Your Bathroom Renovation",
  excerpt:"Porcelain vs. ceramic, large format vs. mosaic — we break down what works best for showers, floors, and accent walls.",
  content:`<p>Tile selection is where most bathroom renovations get delayed — and where the biggest design mistakes happen.</p><p><strong>Porcelain vs. Ceramic:</strong> Porcelain wins for wet areas every time. It's denser, absorbs less moisture, and holds up better in Atlanta's humid summers.</p><p><strong>Large Format (24"×48"+):</strong> Fewer grout lines = easier cleaning = a more luxurious look. They do require a flatter substrate — a professional assessment is essential.</p><p><strong>Mosaic Tiles:</strong> Best reserved for shower niches, floor accents, or feature walls.</p><p><strong>Slip Resistance:</strong> The COF rating matters on floors. Aim for 0.60+ for wet areas.</p><p><strong>Budgeting Tip:</strong> Material cost is only half the story. Large format tiles require more labor and substrate prep.</p>`},
  {id:3,cat:"kitchen",catLabel:"Kitchen",date:"February 20, 2025",icon:"💰",
  title:"The True Cost of a Kitchen Remodel in Atlanta (2025 Guide)",
  excerpt:"A realistic breakdown of what a kitchen renovation costs across different budget levels in the Greater Atlanta market.",
  content:`<p>Atlanta homeowners often come to us with a number in mind — and it's usually too low. Here's the honest breakdown for 2025.</p><p><strong>Budget Remodel ($15,000–$35,000):</strong> Refaced cabinets, stock or semi-custom uppers, laminate or entry-level quartz, new appliances from a mid-tier brand.</p><p><strong>Mid-Range Remodel ($35,000–$75,000):</strong> Semi-custom cabinetry, quartz countertops, new flooring, tile backsplash, updated lighting and fixtures. The sweet spot for most Sandy Springs and Alpharetta homes.</p><p><strong>High-End Remodel ($75,000–$150,000+):</strong> Full custom cabinetry, premium stone, smart appliances, structural changes, full electrical/plumbing upgrades.</p><p><strong>Hidden Costs to Watch:</strong> Permit fees ($800–$2,500 in Fulton County), dumpster rental ($350–$600), and near-universal discovery of outdated wiring. Budget 10–15% for contingency.</p>`},
  {id:4,cat:"restoration",catLabel:"Restoration",date:"February 5, 2025",icon:"💧",
  title:"Water Damage Restoration: When to Call a Pro vs. DIY",
  excerpt:"Not all water damage is the same. Here's how to assess the situation and know when you need professional help.",
  content:`<p>Water damage is one of the most common — and most mishandled — home emergencies we see in Atlanta.</p><p><strong>DIY-Appropriate (Category 1 — Clean Water):</strong> A supply line break or overflow from a sink. If you catch it within 24–48 hours, you can extract water with a wet-vac, run fans and dehumidifiers.</p><p><strong>Call a Pro (Category 2 — Gray Water):</strong> Washing machine overflow or dishwasher backflow contains contaminants. Requires proper PPE and antimicrobial treatment.</p><p><strong>Call a Pro Immediately (Category 3 — Black Water):</strong> Sewage backup, flooding from rivers, or any standing water over 24 hours old. Do not DIY.</p><p><strong>The Hidden Danger:</strong> Atlanta's humidity means mold can begin colonizing wet drywall in 24–72 hours. Get a moisture meter reading from a professional before assuming it's dry.</p>`},
  {id:5,cat:"fullhome",catLabel:"Full Home",date:"March 10, 2025",icon:"🏠",
  title:"What to Expect During a Full Home Remodel: A Week-by-Week Guide",
  excerpt:"Understanding the remodeling timeline helps you plan ahead and stay stress-free throughout the process.",
  content:`<p>A full home remodel is the most complex project a homeowner can undertake. Here's a clear week-by-week picture.</p><p><strong>Weeks 1–2 — Demo & Discovery:</strong> Walls open, floors come up, and surprises emerge. Budget for unknowns. We almost always find something — outdated wiring, subfloor rot, or old plumbing.</p><p><strong>Weeks 3–5 — Rough-In Work:</strong> Plumbing, electrical, and HVAC are repositioned. Inspections happen at the end of this phase. No drywall goes up until inspections pass.</p><p><strong>Weeks 6–9 — Drywall, Flooring & Tile:</strong> The transformation becomes visible. Flooring sequence matters — tile before hardwood, hardwood before cabinets.</p><p><strong>Weeks 10–13 — Cabinets, Countertops & Fixtures:</strong> Order cabinets early — lead time is 6–14 weeks. Countertop templates are made after cabinets are set.</p><p><strong>Weeks 14–16 — Trim, Paint & Punch List:</strong> Finish work, touch-ups. Move-in ready typically means 1–2 remaining minor items, not zero.</p>`},
  {id:6,cat:"kitchen",catLabel:"Kitchen",date:"April 28, 2025",icon:"🍳",
  title:"Open Shelving vs. Upper Cabinets: What Atlanta Homeowners Are Actually Choosing",
  excerpt:"The Instagram look vs. everyday practicality — we surveyed 50 Atlanta clients on what they chose and whether they regret it.",
  content:`<p>Open shelving had its moment. But after three years, many Atlanta homeowners are quietly asking for upper cabinets in their next renovation.</p><p><strong>The Case For Open Shelving:</strong> Makes smaller kitchens feel larger, creates a focal point, and costs less upfront.</p><p><strong>The Case Against:</strong> Grease film on dishes near the stove. Dust on items not used daily. In our client survey, 62% who chose open shelving said they'd go back to cabinets next time.</p><p><strong>The Hybrid Approach:</strong> One open shelf section flanking the range or window — max 24–36 inches — combined with full upper cabinets everywhere else. Best of both worlds.</p><p><strong>Cost Comparison:</strong> Open shelves save $800–$2,500 on materials but nothing on labor.</p>`},
  {id:7,cat:"kitchen",catLabel:"Kitchen",date:"May 1, 2025",icon:"🍳",
  title:"Best Kitchen Countertop Materials for Atlanta's Heat and Humidity",
  excerpt:"Quartz, granite, marble, butcher block — how each holds up in Georgia's climate and which gives the best ROI.",
  content:`<p>Atlanta's climate — hot, humid summers and mild winters — affects countertop performance in ways most showrooms won't tell you.</p><p><strong>Quartz:</strong> Still the top recommendation. Non-porous, humidity doesn't affect it. Heat-resistant to about 300°F.</p><p><strong>Granite:</strong> Handles heat better than quartz. Requires annual sealing in humid climates — skipping this leads to staining.</p><p><strong>Marble:</strong> Beautiful, high-maintenance. Etches easily from citrus and acidic foods. Best for low-use surfaces.</p><p><strong>Butcher Block:</strong> Prone to warping near the sink in Atlanta's humidity if not properly oiled and sealed every 6 months.</p><p>Countertops typically represent 10–15% of the total kitchen renovation budget.</p>`},
  {id:8,cat:"bathroom",catLabel:"Bathroom",date:"April 10, 2025",icon:"🚿",
  title:"Master Bathroom Renovation: Spa Features Worth the Investment",
  excerpt:"Heated floors, steam showers, soaking tubs — which luxury bathroom features actually add resale value in Atlanta?",
  content:`<p>A master bathroom renovation is one of the highest-ROI projects in Atlanta's market right now — but only if you invest in the right features.</p><p><strong>Heated Floors (Radiant Heat):</strong> Adds genuine luxury and real resale value. Cost: $800–$1,800 installed. Especially valuable in Buckhead and Dunwoody.</p><p><strong>Steam Shower:</strong> High wow-factor. Best in primary suites of homes $700K+. Requires waterproofing beyond standard wet areas.</p><p><strong>Soaking Tub:</strong> Freestanding tubs photograph beautifully but are used rarely. They add perceived value but require structural floor assessment.</p><p><strong>Double Vanity:</strong> Consistently the #1 return on investment in master bath renovations. Every buyer wants it. Budget $3,500–$8,000.</p>`},
  {id:9,cat:"bathroom",catLabel:"Bathroom",date:"March 5, 2025",icon:"🚿",
  title:"Small Bathroom, Big Impact: Design Strategies for Atlanta Condos and Older Homes",
  excerpt:"Square footage doesn't have to limit your bathroom's potential. Here's how to maximize every inch.",
  content:`<p>Atlanta's older intown neighborhoods — Decatur, Grant Park, Inman Park — have bathrooms designed in an era of different expectations.</p><p><strong>Go Vertical:</strong> Floor-to-ceiling tile draws the eye up and makes rooms feel taller.</p><p><strong>Floating Vanity:</strong> Exposes floor space visually. Adds 3–4 inches of perceived width. Requires blocking in the wall during renovation.</p><p><strong>Curbless Shower:</strong> Eliminates the visual barrier of a shower curb. Makes the bathroom feel continuous and larger. Requires proper linear drain installation.</p><p><strong>Large Mirror, Full Wall:</strong> A frameless mirror spanning the full vanity width doubles perceived space. Backlit mirrors add spa ambiance without taking square footage.</p>`},
  {id:10,cat:"flooring",catLabel:"Flooring",date:"April 5, 2025",icon:"🪵",
  title:"Hardwood vs. LVP Flooring: Which Is Right for Your Atlanta Home?",
  excerpt:"Luxury vinyl plank has transformed the market. Here's an honest side-by-side comparison for Georgia homeowners.",
  content:`<p>Hardwood flooring used to be the clear prestige choice. Then luxury vinyl plank arrived and the conversation got much more complicated.</p><p><strong>Hardwood — Pros:</strong> Timeless, can be refinished 3–5 times, holds value with discerning buyers. White oak and hickory dominate Atlanta installations right now.</p><p><strong>Hardwood — Cons:</strong> Higher cost ($8–$16/sq ft installed), sensitive to moisture and humidity swings.</p><p><strong>LVP — Pros:</strong> Waterproof core (critical in Atlanta's humidity), 20–40% less expensive than hardwood, suitable for basements and bathrooms.</p><p><strong>LVP — Cons:</strong> Cannot be refinished — eventually needs full replacement. Some buyers still perceive it as lesser in luxury price ranges.</p>`},
  {id:11,cat:"flooring",catLabel:"Flooring",date:"March 15, 2025",icon:"🪵",
  title:"How to Prep Your Subfloor Before Any Flooring Installation",
  excerpt:"The flooring fails you see in Atlanta homes almost always trace back to a subfloor that wasn't properly prepared.",
  content:`<p>We've torn out brand-new flooring — less than two years old — because the installer skipped subfloor preparation.</p><p><strong>Flatness Standard:</strong> Most manufacturers require 3/16" over 10 feet for floating floors, and 1/8" over 6 feet for tile. Even small deviations cause cracking grout and clicking LVP.</p><p><strong>Moisture Testing:</strong> In Atlanta, moisture testing is non-negotiable — especially on slabs.</p><p><strong>Squeaks:</strong> Screwing down the subfloor before installation silences squeaks permanently. Any squeak going into a flooring project is a squeak you'll live with for the life of the floor.</p>`},
  {id:12,cat:"outdoor",catLabel:"Outdoor",date:"April 22, 2025",icon:"🌿",
  title:"Deck vs. Patio: Which Outdoor Living Addition Adds More Value in Atlanta?",
  excerpt:"Atlanta's long outdoor season makes this a critical investment decision. Here's the ROI breakdown for both options.",
  content:`<p>Atlanta's 225+ outdoor living days per year make outdoor additions one of the smartest investments in the metro area.</p><p><strong>Wood Deck:</strong> Better for homes with grade changes or elevated foundations. Composite decking (Trex, TimberTech) runs $45–$70/sq ft and is essentially maintenance-free.</p><p><strong>Patio (Concrete, Pavers, or Flagstone):</strong> Better for flat lots and intown homes. Paver patios ($18–$30/sq ft) offer the best combination of cost, durability, and curb appeal.</p><p><strong>ROI Comparison:</strong> A well-built outdoor living space returns 60–80% of cost at sale. A covered structure adds an additional 10–15% return.</p>`},
  {id:13,cat:"outdoor",catLabel:"Outdoor",date:"February 12, 2025",icon:"🌿",
  title:"Screened Porch Addition: Everything Atlanta Homeowners Need to Know",
  excerpt:"Mosquitoes, pollen, and summer heat make screened porches one of the most requested additions in metro Atlanta.",
  content:`<p>If you've spent a May evening on an Atlanta patio fighting mosquitoes and pollen, you understand why screened porches are the most requested outdoor addition in metro Atlanta.</p><p><strong>Attachment Types:</strong> Attached porches require roof penetrations and proper flashing. Freestanding porches avoid these issues but feel less like an extension of the home.</p><p><strong>Screen Material Options:</strong> Standard fiberglass, pet-resistant polyester, and solar screens (excellent for south and west exposures in Atlanta).</p><p><strong>Cost Range:</strong> $18,000–$45,000 depending on size, ceiling height, and finish level.</p>`},
  {id:14,cat:"basement",catLabel:"Basement",date:"March 22, 2025",icon:"🏗️",
  title:"Finishing Your Atlanta Basement: A Complete Planning Guide",
  excerpt:"Atlanta's partially-below-grade basements are a unique opportunity. Here's how to plan the project right.",
  content:`<p>Atlanta homes — especially in North Fulton, Cobb, and Gwinnett counties — frequently have daylight or walkout basements primed for finishing. Done right, a finished basement can add 400–800 sq ft at the lowest cost-per-square-foot of any home addition.</p><p><strong>Moisture First — Always:</strong> Before one stud wall goes up, verify the basement is dry year-round.</p><p><strong>Flooring:</strong> LVP is the clear winner for below-grade spaces — waterproof core handles any moisture intrusion.</p><p><strong>ROI:</strong> Finished basements in Atlanta typically return 65–75% of cost. Adding a bathroom increases that to 70–80%. Egress windows add $2,500–$4,500 each.</p>`},
  {id:15,cat:"basement",catLabel:"Basement",date:"January 28, 2025",icon:"🏗️",
  title:"Basement Waterproofing in Atlanta: Interior vs. Exterior Systems Explained",
  excerpt:"Georgia's clay soil and rainfall patterns make basement waterproofing critical. Here's which system is right for your situation.",
  content:`<p>Atlanta averages 50+ inches of rainfall annually, and the red clay soil exerts pressure against foundation walls.</p><p><strong>Interior Drainage Systems (Most Common):</strong> A perimeter drain channel installed along the interior footing connects to a sump pump. Cost: $4,500–$12,000.</p><p><strong>Exterior Waterproofing (Most Comprehensive):</strong> Excavate to the footing, apply a waterproof membrane, install drainage board and footing drain. Cost: $15,000–$40,000+.</p><p><strong>Interior Sealers (Least Effective):</strong> Crystalline sealers address minor seepage but are not rated for hydrostatic pressure.</p>`},
  {id:16,cat:"electrical",catLabel:"Electrical",date:"April 2, 2025",icon:"⚡",
  title:"Electrical Panel Upgrade: Does Your Atlanta Home Need One Before Remodeling?",
  excerpt:"An outdated electrical panel can stop your renovation in its tracks. Here's how to know if yours needs upgrading.",
  content:`<p>We encounter electrical panels that stop projects cold at least twice a month. In Atlanta, many homes built before 1990 have panels that can't support a modern renovation.</p><p><strong>Signs You Need an Upgrade:</strong> Federal Pacific Electric (FPE) Stab-Lok panels or Zinsco panels — both are fire hazards. A 100-amp main in a home over 2,000 sq ft. Breakers that frequently trip.</p><p><strong>200-Amp Panel Upgrade:</strong> The standard for modern homes. Cost in Atlanta: $2,500–$4,500 including permit and inspection. Georgia Power typically needs 1–2 weeks to coordinate.</p><p><strong>GFCI and AFCI Requirements:</strong> Georgia adopted the 2020 NEC — all kitchen, bathroom, basement, garage, and outdoor circuits now require AFCI protection.</p>`},
  {id:17,cat:"electrical",catLabel:"Electrical",date:"January 15, 2025",icon:"⚡",
  title:"EV Charger Installation in Atlanta: What Homeowners Need to Know",
  excerpt:"Electric vehicle adoption in metro Atlanta is surging. Here's your complete guide to home charging installation.",
  content:`<p>Metro Atlanta now ranks in the top 10 U.S. markets for EV adoption, and the most common question we're fielding is: can my garage handle a Level 2 charger?</p><p><strong>Level 1 vs. Level 2:</strong> Level 1 uses a standard 120V outlet — adds about 3–5 miles of range per hour. Level 2 requires a 240V/50A circuit — adds 15–30 miles per hour.</p><p><strong>Electrical Requirements:</strong> A dedicated 50A, 240V circuit from your panel to the garage. If your panel is already at capacity, this triggers the panel upgrade conversation.</p><p><strong>Cost:</strong> $800–$2,200 for a full installation in Atlanta. Georgia Power offers up to $250 in rebates, and federal tax credits cover 30% of equipment and installation costs.</p>`},
  {id:18,cat:"roofing",catLabel:"Roofing",date:"March 18, 2025",icon:"🏠",
  title:"Atlanta Roof Replacement Guide: Materials, Costs, and What to Expect",
  excerpt:"Hail, summer heat, and pine trees make roofing a critical maintenance category for Atlanta homeowners.",
  content:`<p>Atlanta's combination of severe hailstorms (averaging 6–8 significant events per year), intense UV exposure, and Georgia pine creates a challenging environment for roofing materials.</p><p><strong>Architectural Shingles (Most Common):</strong> 30-year rated (realistically 20–25 years in our climate). Cost: $5,500–$9,500 for a typical 2,000 sq ft single-story. Impact-resistant Class 4 shingles qualify for a 20–30% insurance discount.</p><p><strong>Metal Roofing:</strong> Standing seam metal has 50+ year lifespan, excellent heat reflection, and superior hail resistance. Cost: $18,000–$35,000+.</p><p><strong>Insurance Considerations:</strong> File a claim after significant hail events — many Atlanta homeowners don't realize hail damage warrants an insurance-covered replacement.</p>`},
  {id:19,cat:"roofing",catLabel:"Roofing",date:"February 28, 2025",icon:"🏠",
  title:"Signs Your Atlanta Home Has Hidden Roof Damage",
  excerpt:"Roof damage in Georgia often develops quietly for years before it becomes a visible emergency. Here's what to look for.",
  content:`<p>The roof claims we see in Atlanta fall into two categories: obvious (last night's storm) and hidden (the slow leak saturating attic insulation for two years). The second is far more damaging.</p><p><strong>Attic Inspection — Start Here:</strong> After heavy rain, look for daylight through the decking, wet insulation, dark staining on rafters, and mold growth on sheathing.</p><p><strong>Granule Loss:</strong> Check your gutters after rain. Shingle granules accumulating there indicates a roof nearing end of life.</p><p><strong>Interior Ceiling Stains:</strong> A brown water stain on your ceiling is almost never where the leak enters — water travels along rafters before dripping.</p>`},
  {id:20,cat:"fullhome",catLabel:"Full Home",date:"May 5, 2025",icon:"🏠",
  title:"How to Find and Vet a General Contractor in Atlanta",
  excerpt:"The contractor you choose makes or breaks your renovation. Here's a proven process for finding the right one.",
  content:`<p>The single biggest determinant of renovation success isn't your budget or your design choices — it's the contractor you hire.</p><p><strong>Licensing Verification:</strong> In Georgia, general contractors working on projects over $2,500 must hold a valid license from the Georgia Secretary of State's office. Verify at sos.ga.gov.</p><p><strong>The 3-Bid Myth:</strong> A $15,000 spread between a high and low bid is a red flag, not a bargaining chip. The low bid typically reflects missing scope or cheap materials.</p><p><strong>Contract Essentials:</strong> Payment schedule tied to milestones (never pay more than 10% upfront), detailed scope of work, specific material specifications, and a lien waiver clause.</p>`},
  {id:21,cat:"fullhome",catLabel:"Full Home",date:"January 10, 2025",icon:"🏠",
  title:"Home Addition vs. Moving: How Atlanta Homeowners Are Making the Decision",
  excerpt:"With Atlanta home prices and inventory where they are, more homeowners are choosing to expand rather than relocate.",
  content:`<p>In 2025's Atlanta market — median prices up, inventory still tight — the "move vs. improve" calculation has shifted. More of our clients are choosing to expand their current home.</p><p><strong>Addition Cost Benchmarks (Atlanta 2025):</strong> First-floor addition: $180–$280/sq ft. Second-floor addition: $250–$380/sq ft. Basement finishing: $55–$95/sq ft (the most cost-efficient expansion option).</p><p><strong>When Moving Makes More Sense:</strong> If the cost to achieve your desired square footage exceeds 80% of buying equivalent square footage in your target neighborhood, consider moving.</p><p><strong>Permits and Timeline:</strong> Additions require architectural plans, engineering stamps, and full permit review (6–12 weeks in most Atlanta metro jurisdictions).</p>`},
  {id:22,cat:"kitchen",catLabel:"Kitchen",date:"January 22, 2025",icon:"🍳",
  title:"Kitchen Lighting Design: A Room-by-Room Breakdown for Atlanta Homes",
  excerpt:"Lighting is the most underbudgeted element in kitchen renovations. Here's how to layer it right.",
  content:`<p>Homeowners spend weeks choosing countertops and 15 minutes on lighting. Then they move in and wonder why the kitchen feels flat.</p><p><strong>Layer 1 — Ambient:</strong> Recessed cans on a dimmer, spaced every 4 feet on center. 2700K–3000K color temperature for a warm, welcoming kitchen.</p><p><strong>Layer 2 — Task Lighting:</strong> Under-cabinet LED strips illuminating the countertop work zone. Non-negotiable. Budget: $800–$2,200.</p><p><strong>Layer 3 — Accent and Decorative:</strong> Pendant lights over the island, in-cabinet lighting for glass-front uppers, toe-kick lighting.</p>`},
  {id:23,cat:"bathroom",catLabel:"Bathroom",date:"May 8, 2025",icon:"🚿",
  title:"Hall Bathroom Renovation: Maximizing Function for High-Traffic Spaces",
  excerpt:"The hall bathroom takes the most abuse in any home. Here's how to renovate it for durability without sacrificing style.",
  content:`<p>The hall bathroom is the workhorse of every home — used by guests, kids, and everyone in between. A renovation here prioritizes durability, storage, and cleaning ease above spa features.</p><p><strong>Surface Selections:</strong> Choose porcelain tile over ceramic for floors and shower surrounds. Rectified tile allows tighter grout lines that are harder to dirty.</p><p><strong>Storage Priority:</strong> A 36-inch vanity with drawer storage is the minimum. If space allows, a 48-inch vanity with double sinks serves a family far better.</p><p><strong>Ventilation:</strong> In Georgia's humidity, you want a minimum 110 CFM fan for bathrooms up to 100 sq ft, with a humidity sensor that runs automatically.</p>`},
  {id:24,cat:"flooring",catLabel:"Flooring",date:"February 8, 2025",icon:"🪵",
  title:"Tile Trends for Atlanta Homes in 2025: What's In and What's Out",
  excerpt:"From zellige to large-format marble look — here's what's dominating the Atlanta tile market right now.",
  content:`<p>Tile trends move faster than almost any other category in residential design. Here's where the Atlanta market is right now.</p><p><strong>In: Zellige and Handmade Looks</strong> — The deliberately imperfect, slightly glossy, handmade-feel tile. Beautiful as a kitchen backsplash or shower accent wall.</p><p><strong>In: Warm Terrazzo</strong> — The terrazzo revival continues, now leaning warmer (creams, taupes, terracottas) rather than the cool gray version of 2020.</p><p><strong>Out: Cool Gray Everything</strong> — Gray subway tile, gray grout, gray porcelain floors — the look that defined 2016–2022 is now definitively dated in Atlanta renovations.</p>`},
  {id:25,cat:"outdoor",catLabel:"Outdoor",date:"January 5, 2025",icon:"🌿",
  title:"Outdoor Kitchen Installation in Atlanta: What It Costs and What You Need",
  excerpt:"Atlanta's outdoor season is long enough to justify a serious outdoor kitchen. Here's the full planning guide.",
  content:`<p>With 225+ outdoor living days and a culture that takes grilling seriously, Atlanta is one of the strongest outdoor kitchen markets in the country.</p><p><strong>Basic Outdoor Kitchen ($8,000–$18,000):</strong> A built-in grill, two-burner side station, undercounter refrigerator, and tile or stucco counter on a concrete block frame.</p><p><strong>Mid-Range ($18,000–$40,000):</strong> Adds a pizza oven or kamado, a sink with hot/cold water, weatherproof cabinetry, and a concrete or stone countertop.</p><p><strong>Site Requirements:</strong> Gas line extension ($800–$1,800), GFCI-protected outdoor circuits, and a stable pad.</p>`},
  {id:26,cat:"kitchen",catLabel:"Kitchen",date:"March 1, 2025",icon:"🍳",
  title:"Galley Kitchen Renovation: Making the Most of a Linear Layout",
  excerpt:"Many Atlanta townhomes and older homes have galley kitchens. Here's how to transform them into high-function spaces.",
  content:`<p>Galley kitchens get unfairly dismissed as "compromise" kitchens. In practice, they're among the most efficient cooking layouts ever designed.</p><p><strong>Open One End:</strong> If one end of the galley is a wall (not a doorway), opening it creates a visual connection that makes the kitchen feel dramatically larger.</p><p><strong>Light Strategy:</strong> Under-cabinet lighting, a light-colored backsplash, and upper cabinets with glass inserts all help dark galley kitchens.</p><p><strong>Storage:</strong> Deep drawer lower cabinets replace base cabinets with doors — access from both sides of the galley if possible.</p>`},
  {id:27,cat:"fullhome",catLabel:"Full Home",date:"April 18, 2025",icon:"🏠",
  title:"HVAC Replacement During a Remodel: Timing, Cost, and What to Upgrade",
  excerpt:"A renovation is the best time to upgrade HVAC — walls are open, crews are coordinated, and the disruption is bundled.",
  content:`<p>HVAC replacement is one of the most commonly deferred home maintenance items — until a renovation forces the issue.</p><p><strong>Why Bundle with Renovation:</strong> When walls are open during rough-in, ductwork rerouting and equipment replacement is a fraction of the cost versus a standalone project.</p><p><strong>Efficiency Ratings:</strong> In Georgia's climate, a 16–18 SEER2 system is the sweet spot for payback period. Variable-speed air handlers improve humidity control.</p><p><strong>Mini-Split Applications:</strong> Bonus rooms, basement conversions, and garage conversions are excellent mini-split applications — flexible installation without ductwork extension.</p><p><strong>Rebates:</strong> Georgia Power and federal tax credits (25C) can cover $1,200–$2,000 of a new high-efficiency system.</p>`},
  {id:28,cat:"restoration",catLabel:"Restoration",date:"April 30, 2025",icon:"💧",
  title:"Mold Remediation in Atlanta Homes: What Homeowners Must Know",
  excerpt:"Atlanta's heat and humidity create ideal mold conditions. Here's when remediation is required and how it works.",
  content:`<p>Mold is more common than most people realize in our climate — and more manageable than panic suggests.</p><p><strong>Not All Mold Is Equal:</strong> Surface mold on bathroom grout is a cleaning problem. Mold on framing, drywall, or insulation indicates a moisture intrusion problem.</p><p><strong>When Remediation Is Required:</strong> The EPA standard is 10 square feet as the DIY/professional threshold. Any active growth on structural materials over 10 sq ft warrants a certified remediator.</p><p><strong>Cost:</strong> $1,500–$6,000 for a typical bathroom or crawlspace. Attic mold: $3,000–$12,000. Always fix the moisture source first.</p>`},
  {id:29,cat:"restoration",catLabel:"Restoration",date:"March 12, 2025",icon:"💧",
  title:"Foundation Crack Repair in Atlanta: What's Cosmetic and What's Structural",
  excerpt:"Georgia's clay soil causes foundation movement in virtually every home. Here's how to tell what requires action.",
  content:`<p>Virtually every home built on Atlanta's expansive clay soil develops foundation cracks over time. The question is which ones require action.</p><p><strong>Hairline Cracks (Under 1/8"):</strong> Cosmetic in almost all cases. Monitor them with pencil marks and dates to track growth. If stable over 12 months, no structural intervention needed.</p><p><strong>Diagonal Stair-Step Cracks in Block Foundations:</strong> Indicates differential settlement. Warrants a structural engineer's evaluation if cracks are widening or if doors are sticking.</p><p><strong>Horizontal Cracks in Basement Walls:</strong> The red flag. Indicates soil pressure exceeding the wall's design capacity. Immediate engineering evaluation required.</p>`},
];

const categories = [
  {key:"all",label:"All"},
  {key:"kitchen",label:"Kitchen"},
  {key:"bathroom",label:"Bathroom"},
  {key:"fullhome",label:"Full Home"},
  {key:"restoration",label:"Restoration"},
  {key:"flooring",label:"Flooring"},
  {key:"outdoor",label:"Outdoor"},
  {key:"basement",label:"Basement"},
  {key:"electrical",label:"Electrical"},
  {key:"roofing",label:"Roofing"},
];

const tagColors: Record<string, string> = {
  kitchen:    "bg-amber-100 text-amber-700 border-amber-200",
  bathroom:   "bg-teal-100 text-teal-700 border-teal-200",
  restoration:"bg-red-100 text-red-700 border-red-200",
  fullhome:   "bg-purple-100 text-purple-700 border-purple-200",
  flooring:   "bg-green-100 text-green-700 border-green-200",
  outdoor:    "bg-orange-100 text-orange-700 border-orange-200",
  basement:   "bg-gray-100 text-gray-600 border-gray-200",
  electrical: "bg-yellow-100 text-yellow-700 border-yellow-200",
  roofing:    "bg-blue-100 text-blue-700 border-blue-200",
};

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const filtered = activeFilter === "all" ? posts : posts.filter(p => p.cat === activeFilter);

  function toggleCard(id: number) {
    setOpenCards(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2E] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#4A7FE8] font-semibold text-sm uppercase tracking-widest mb-3">Resources & Insights</p>
          <h1 className="font-sans text-5xl font-extrabold text-white mb-4 leading-tight">TFB Remodeling Blog</h1>
          <p className="text-gray-300 text-lg max-w-xl">Expert guides for Atlanta homeowners — kitchens, bathrooms, full-home remodels, and beyond.</p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#152438] border-b border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
          {[
            {num:"29",label:"Articles"},
            {num:"9",label:"Categories"},
            {num:"2025",label:"Season"},
            {num:"ATL",label:"Focus Market"},
          ].map(s => (
            <div key={s.label}>
              <div className="font-sans text-2xl font-extrabold text-[#4A7FE8]">{s.num}</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-[69px] z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setActiveFilter(c.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
                activeFilter === c.key
                  ? "bg-[#1E4FBF] text-white border-[#1E4FBF]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog grid */}
      <section className="bg-[#F7F8FA] py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => {
            const isOpen = openCards.has(post.id);
            const isFeatured = post.featured && activeFilter === "all" && i === 0;
            return (
              <div
                key={post.id}
                className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                {/* Thumb */}
                <div className={`bg-gradient-to-br from-[#0D1B2E] to-[#1E4FBF] flex items-center justify-center relative flex-shrink-0 ${isFeatured ? "h-44" : "h-32"}`}>
                  <span className="font-sans font-extrabold text-6xl text-white/10 select-none">TFB</span>
                  <span className="absolute bottom-3 left-4 text-3xl">{post.icon}</span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${tagColors[post.cat] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {post.catLabel}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>

                  <h2 className={`font-sans font-bold text-[#0D1B2E] leading-snug mb-2 ${isFeatured ? "text-xl" : "text-base"}`}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

                  {/* Expanded content */}
                  {isOpen && (
                    <div
                      className="text-sm text-gray-600 leading-relaxed mb-4 border-t border-gray-100 pt-4 space-y-3 [&_p]:mb-2 [&_strong]:text-[#0D1B2E] [&_a]:text-[#1E4FBF] [&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  )}

                  <button
                    onClick={() => toggleCard(post.id)}
                    className="self-start inline-flex items-center gap-1 text-[#1E4FBF] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    {isOpen ? "Show Less ‹" : "Read More ›"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
