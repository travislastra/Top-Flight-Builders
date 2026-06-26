/**
 * Process new before/after photos from assets/projects/Updated Photos/
 * Run with: node scripts/process-updated-photos.mjs
 */

import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "assets/projects/Updated Photos");
const PUB = join(ROOT, "public");

const SIZES = [480, 800, 1200];
const QUALITY_WEBP = 82;
const QUALITY_SRCSET = 78;

// ---- Image batches ----
// Each entry: [sourceFile, destRelativePath]

const BATCHES = [
  // ---- bathroom-remodel-duluth (has 9 after, 2 before → add before-03/04/05) ----
  ["Bathroom Remodel - Duluth (New Before).jpg",    "images/projects/bathroom-remodel-duluth/bathroom-remodel-duluth-ga-before-03.jpg"],
  ["Bathroom Remodel - Duluth (New Before)1.jpg",   "images/projects/bathroom-remodel-duluth/bathroom-remodel-duluth-ga-before-04.jpg"],
  ["Bathroom Remodel- Duluth (new before).jpg",     "images/projects/bathroom-remodel-duluth/bathroom-remodel-duluth-ga-before-05.jpg"],

  // ---- bathroom-buckhead (has 7 after, 1 before → add after-08, before-02 through before-08) ----
  ["Bathroom Remodel in Buckhead- (New After).jpg",   "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-08.jpg"],
  ["Bathroom Remodel in Buckhead- (New Before).jpg",  "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-02.jpg"],
  ["bathroom remodel- buckhead (new before).jpg",     "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-03.jpg"],
  ["bathroom remodel- buckhead (new before)2.jpg",    "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-04.jpg"],
  ["bathroom remodel- buckhead (new before)3.jpg",    "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-05.jpg"],
  ["bathroom remodel- buckhead (new before)4.jpg",    "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-06.jpg"],
  ["bathroom remodel- buckhead (new before)5.jpg",    "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-07.jpg"],
  ["bathroom remodel- buckhead (new before)6.jpg",    "images/projects/bathroom-buckhead/bathroom-remodel-buckhead-ga-before-08.jpg"],

  // ---- kitchen-deck-east-cobb (has 12 after, 2 before → add after-13/14/15, before-03/04/05) ----
  ["Kitchen & Deck - East Cobb ( New After ).jpg",   "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-13.jpg"],
  ["Kitchen & Deck - East Cobb ( New After )2.jpg",  "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-14.jpg"],
  ["Kitchen & Deck - East Cobb ( New After )3.jpg",  "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-15.jpg"],
  ["Kitchen & Deck - East Cobb ( New Before ).jpg",  "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-before-03.jpg"],
  ["Kitchen & Deck - East Cobb ( New Before )2.jpg", "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-before-04.jpg"],
  ["Kitchen & Deck Remodel (New Before).jpg",        "images/projects/kitchen-deck-east-cobb/kitchen-deck-remodel-east-cobb-ga-before-05.jpg"],

  // ---- kitchen-remodel-roswell (has 11 after, 3 before → add after-12/13/14, before-04/05) ----
  ["Kitchen Remodel - Roswell (New After).jpg",   "images/projects/kitchen-remodel-roswell/kitchen-remodel-roswell-ga-12.jpg"],
  ["Kitchen Remodel - Roswell (New After)2.jpg",  "images/projects/kitchen-remodel-roswell/kitchen-remodel-roswell-ga-13.jpg"],
  ["Kitchen Remodel - Roswell (New After3.jpg",   "images/projects/kitchen-remodel-roswell/kitchen-remodel-roswell-ga-14.jpg"],
  ["Kitchen Remodel - Roswell (New Before).jpg",  "images/projects/kitchen-remodel-roswell/kitchen-remodel-roswell-ga-before-04.jpg"],
  ["Kitchen Remodel - Roswell (New Before)1.jpg", "images/projects/kitchen-remodel-roswell/kitchen-remodel-roswell-ga-before-05.jpg"],

  // ---- bathroom-brookhaven (has 8 after, 3 before → add before-04/05) ----
  ["bathroom in brookhaven - new before.jpg",   "images/projects/bathroom-brookhaven/bathroom-remodel-brookhaven-ga-before-04.jpg"],
  ["bathroom in brookhaven - new before2.jpg",  "images/projects/bathroom-brookhaven/bathroom-remodel-brookhaven-ga-before-05.jpg"],

  // ---- Kitchen homepage cover photo (top-level) ----
  ["Kitchen Portfolio New Cover Photo on home page.jpg", "images/kitchen-portfolio-cover-homepage-ga.jpg"],
];

async function processImage(srcFile, destRel) {
  const srcPath = join(SRC, srcFile);
  const destPath = join(PUB, destRel);

  if (!existsSync(srcPath)) {
    console.warn(`  SKIP (not found): ${srcFile}`);
    return;
  }

  mkdirSync(dirname(destPath), { recursive: true });

  if (!existsSync(destPath)) {
    await sharp(srcPath)
      .rotate()
      .jpeg({ quality: 85, progressive: true })
      .toFile(destPath);
    console.log(`  ✓ ${destRel}`);
  } else {
    console.log(`  skip (exists): ${destRel}`);
  }

  // Full-res WebP
  const webpPath = destPath.replace(/\.jpg$/, ".webp");
  if (!existsSync(webpPath)) {
    await sharp(destPath).webp({ quality: QUALITY_WEBP, effort: 5 }).toFile(webpPath);
  }

  // Srcset variants
  for (const w of SIZES) {
    const variantPath = destPath.replace(/\.jpg$/, `-${w}w.webp`);
    if (!existsSync(variantPath)) {
      await sharp(destPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY_SRCSET, effort: 5 })
        .toFile(variantPath);
    }
  }
}

async function main() {
  console.log(`Processing ${BATCHES.length} images from Updated Photos…`);
  for (const [src, dest] of BATCHES) {
    await processImage(src, dest);
  }
  console.log("\n✓ Done.");
}

main().catch((err) => { console.error(err); process.exit(1); });
