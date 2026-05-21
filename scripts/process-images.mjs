/**
 * One-time image processing script for TopFlight Builders.
 *
 * Run once with: node scripts/process-images.mjs
 *
 * What it does:
 * 1. Renames top-level images to descriptive SEO slugs
 * 2. Renames project folder images (01.jpg → prefix-01.jpg)
 * 3. Generates compressed WebP alongside every JPG/PNG
 * 4. Updates every code reference in src/ to use new filenames
 *
 * WebP files are placed next to originals (same folder, .webp extension).
 * The Img component serves WebP via <picture>, JPG as fallback.
 */

import sharp from "sharp";
import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const IMAGES = join(PUBLIC, "images");
const SRC = join(ROOT, "src");

// ---------- Rename mappings ----------

// Top-level images (relative to /images/)
const TOP_LEVEL_RENAMES = {
  "home-run-1.jpg":               "bathroom-remodel-frameless-glass-shower-marietta-ga.jpg",
  "home-run-2.jpg":               "kitchen-remodel-dark-shaker-cabinets-marietta-ga.jpg",
  "ada1.jpg":                     "age-in-place-accessible-shower-marietta-ga.jpg",
  "ada2.jpg":                     "age-in-place-grab-bars-accessible-bathroom-marietta-ga.jpg",
  "kitchen-thumb.jpg":            "kitchen-remodeling-custom-cabinetry-marietta-ga.jpg",
  "tree-on-house.jpg":            "storm-damage-restoration-fallen-tree-marietta-ga.jpg",
  "bathroom-chamblee-remodel.jpg":"bathroom-remodel-custom-tile-shower-chamblee-ga.jpg",
  "complete-home-remodel-duluth.jpg": "full-home-remodel-duluth-ga.jpg",
  "portfolio-kris.jpg":           "topflight-builders-client-review-kris.jpg",
  "portfolio-maggie.jpg":         "kitchen-renovation-maggie-marietta-ga.jpg",
  "portfolio-magi.jpg":           "topflight-builders-client-testimonial-magi.jpg",
};

// Project sub-folders → descriptive filename prefix
// Files in each folder are renamed: NN.jpg → [prefix]-NN.jpg
const PROJECT_FOLDER_PREFIXES = {
  "basement-east-cobb":           "basement-finishing-east-cobb-ga",
  "bathroom-brookhaven":          "bathroom-remodel-brookhaven-ga",
  "bathroom-buckhead":            "bathroom-remodel-buckhead-ga",
  "bathroom-remodel-duluth":      "bathroom-remodel-duluth-ga",
  "fallen-tree-remodel":          "storm-damage-restoration-fallen-tree-marietta-ga",
  "home-addition-atlanta":        "home-addition-atlanta-ga",
  "kitchen-bathroom-feature-wall":"kitchen-bathroom-feature-wall-remodel-marietta-ga",
  "kitchen-deck-east-cobb":       "kitchen-deck-remodel-east-cobb-ga",
  "kitchen-flooring-bathroom":    "kitchen-flooring-bathroom-remodel-marietta-ga",
  "kitchen-laundry-east-cobb":    "kitchen-laundry-remodel-east-cobb-ga",
  "kitchen-remodel-marietta":     "kitchen-remodel-marietta-ga",
  "whole-home-east-cobb":         "whole-home-renovation-east-cobb-ga",
  "more-from-us":                 "topflight-builders-remodeling-project-marietta-ga",
};

// ---------- Helpers ----------

function buildNewName(folder, prefix, oldFile) {
  const ext = extname(oldFile);
  const base = basename(oldFile, ext);
  // before-01, progress-01 keep their phase prefix; plain numbers do not
  if (/^before-/.test(base)) return `${prefix}-${base}${ext}`;
  if (/^progress-/.test(base)) return `${prefix}-${base}${ext}`;
  // numeric-only: 01, 02, …
  return `${prefix}-${base}${ext}`;
}

// Collect ALL rename operations { oldAbs, newAbs, oldRel, newRel }
function collectRenames() {
  const ops = [];

  // Top-level
  for (const [old, newName] of Object.entries(TOP_LEVEL_RENAMES)) {
    const oldAbs = join(IMAGES, old);
    if (!existsSync(oldAbs)) { console.warn(`  SKIP (not found): ${old}`); continue; }
    ops.push({
      oldAbs,
      newAbs: join(IMAGES, newName),
      oldRel: `/images/${old}`,
      newRel: `/images/${newName}`,
    });
  }

  // Project folders
  const projectsDir = join(IMAGES, "projects");
  for (const [folder, prefix] of Object.entries(PROJECT_FOLDER_PREFIXES)) {
    const folderAbs = join(projectsDir, folder);
    if (!existsSync(folderAbs)) { console.warn(`  SKIP folder (not found): ${folder}`); continue; }
    const files = readdirSync(folderAbs).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    for (const file of files) {
      const newFile = buildNewName(folder, prefix, file);
      if (file === newFile) continue; // already named correctly
      ops.push({
        oldAbs: join(folderAbs, file),
        newAbs: join(folderAbs, newFile),
        oldRel: `/images/projects/${folder}/${file}`,
        newRel: `/images/projects/${folder}/${newFile}`,
      });
    }
  }

  return ops;
}

// ---------- Step 1: Rename files ----------

function renameFiles(ops) {
  console.log("\n=== Step 1: Renaming files ===");
  for (const op of ops) {
    if (existsSync(op.newAbs)) {
      console.log(`  exists: ${op.newRel}`);
      continue;
    }
    renameSync(op.oldAbs, op.newAbs);
    console.log(`  ${op.oldRel} → ${op.newRel}`);
  }
}

// ---------- Step 2: Update code references ----------

function updateCodeRefs(ops) {
  console.log("\n=== Step 2: Updating code references ===");

  // Build a simple map oldRel → newRel
  const map = Object.fromEntries(ops.map(o => [o.oldRel, o.newRel]));

  const srcFiles = collectSrcFiles(SRC);
  let totalChanged = 0;

  for (const file of srcFiles) {
    let content = readFileSync(file, "utf8");
    let changed = false;
    for (const [oldPath, newPath] of Object.entries(map)) {
      if (content.includes(oldPath)) {
        content = content.split(oldPath).join(newPath);
        changed = true;
      }
    }
    if (changed) {
      writeFileSync(file, content);
      console.log(`  updated: ${file.replace(ROOT + "/", "")}`);
      totalChanged++;
    }
  }
  console.log(`  Total files updated: ${totalChanged}`);
}

function collectSrcFiles(dir) {
  const result = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...collectSrcFiles(full));
    else if (/\.(tsx?|jsx?|json)$/.test(entry.name)) result.push(full);
  }
  return result;
}

// ---------- Step 3: Convert to WebP ----------

const WEBP_QUALITY = 82;

// Max display widths by usage category (sharp resizes proportionally)
const MAX_WIDTHS = {
  thumbnail: 900,   // service cards, portfolio grid
  hero:      1920,  // full-width hero images
  gallery:   1600,  // lightbox / project gallery
  logo:      400,   // partner logos
};

function categoryForPath(absPath) {
  const rel = absPath.replace(IMAGES + "/", "");
  if (rel.startsWith("partners/")) return "logo";
  if (rel.startsWith("projects/more-from-us/")) return "gallery";
  if (/^(bathroom-remodel|kitchen-remodel|kitchen-remodeling|age-in-place|storm-damage|full-home|kitchen-deck|kitchen-laundry|kitchen-bathroom|kitchen-flooring|basement|bathroom-remodel-custom|whole-home|home-addition)/.test(rel.replace("projects/",""))) return "hero";
  if (rel.startsWith("projects/")) return "gallery";
  return "hero"; // top-level images are mostly hero/OG
}

async function generateWebP(absPath) {
  const webpPath = absPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  if (existsSync(webpPath)) return; // already done

  const category = categoryForPath(absPath);
  const maxWidth = MAX_WIDTHS[category];

  try {
    await sharp(absPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(webpPath);
  } catch (err) {
    console.warn(`  WARN: could not convert ${absPath}: ${err.message}`);
  }
}

async function convertAllToWebP() {
  console.log("\n=== Step 3: Generating WebP files ===");

  const jpgs = collectImages(IMAGES);
  console.log(`  Found ${jpgs.length} source images`);
  let count = 0;
  for (const img of jpgs) {
    await generateWebP(img);
    count++;
    if (count % 20 === 0) console.log(`  ... ${count}/${jpgs.length}`);
  }
  console.log(`  Done. Generated WebP for ${count} images.`);
}

function collectImages(dir) {
  const result = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...collectImages(full));
    else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) result.push(full);
  }
  return result;
}

// ---------- Main ----------

async function main() {
  console.log("TopFlight Builders — Image Processor");
  console.log("=====================================");

  const ops = collectRenames();
  console.log(`\nFound ${ops.length} rename operations`);

  renameFiles(ops);
  updateCodeRefs(ops);
  await convertAllToWebP();

  console.log("\n✓ Done. Review changes with: git diff src/");
  console.log("  Then run: npm run build");
}

main().catch(err => { console.error(err); process.exit(1); });
