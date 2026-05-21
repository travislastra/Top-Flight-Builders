/**
 * Generates 480w, 800w, and 1200w WebP variants alongside every source image.
 * Run with: node scripts/generate-srcset.mjs
 *
 * Skip list: partner logos are already tiny (<50KB) — srcset overhead not worth it.
 * Output naming: image.jpg → image-480w.webp, image-800w.webp, image-1200w.webp
 * Idempotent: skips files that already exist.
 */

import sharp from "sharp";
import { existsSync, readdirSync, statSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES = join(__dirname, "../public/images");

const SIZES = [480, 800, 1200];
const QUALITY = 78;

// Skip partner logos — already small, marquee doesn't need responsive variants
const SKIP_DIRS = new Set(["partners"]);

function collectSourceImages(dir, relPath = "") {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    const rel = relPath ? `${relPath}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      results.push(...collectSourceImages(full, rel));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      // Skip already-sized variants
      if (/-\d+w\.(jpg|jpeg|png)$/i.test(entry.name)) continue;
      results.push({ full, rel });
    }
  }
  return results;
}

async function generateVariants(jpgPath) {
  const ext = extname(jpgPath);
  const base = jpgPath.slice(0, -ext.length);

  for (const w of SIZES) {
    const outPath = `${base}-${w}w.webp`;
    if (existsSync(outPath)) continue;

    try {
      await sharp(jpgPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(outPath);
    } catch (err) {
      console.warn(`  WARN: ${jpgPath} → ${w}w: ${err.message}`);
    }
  }
}

async function main() {
  console.log("Generating responsive srcset WebP variants…");
  const sources = collectSourceImages(IMAGES);
  console.log(`Found ${sources.length} source images`);

  let done = 0;
  for (const { full, rel } of sources) {
    await generateVariants(full);
    done++;
    if (done % 30 === 0) console.log(`  ${done}/${sources.length}`);
  }

  console.log(`✓ Done — ${sources.length * SIZES.length} variants generated (existing were skipped).`);
}

main().catch((err) => { console.error(err); process.exit(1); });
