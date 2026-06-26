/**
 * Process images for two new restoration projects:
 *  - Marietta Restoration - Fallen Tree → slug: restoration-fallen-tree-marietta
 *  - Fallen Tree Rebuild - Stonecrest   → slug: fallen-tree-rebuild-stonecrest
 *
 * Run with: node scripts/process-new-restoration-projects.mjs
 */

import sharp from "sharp";
import { existsSync, copyFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS = join(ROOT, "assets/projects");
const PUBLIC = join(ROOT, "public/images/projects");

const SIZES = [480, 800, 1200];
const QUALITY_WEBP = 82;
const QUALITY_SRCSET = 78;

// ---- Project definitions ----

const PROJECTS = [
  {
    assetFolder: "Marietta Restoration - Fallen Tree",
    outSlug: "restoration-fallen-tree-marietta",
    prefix: "restoration-fallen-tree-marietta-ga",
    afterFiles: [
      "4840f734-f884-4a10-96d0-5247bad7bc27.jpg",
      "58bae9f8-8eaf-4be3-9c41-e89c303b6010.jpg",
      "70c3c375-25a4-48c8-95e0-94c485cf82ba.jpg",
      "8849581e-a041-4a4d-83a6-2c088a49ff16.jpg",
      "b8384a4d-df13-4b6b-a5a9-05cb36dba689.jpg",
    ],
    beforeFiles: [
      "BEFORE- marietta restoration.jpg",
      "BEFORE- marietta restoration 1.jpg",
      "BEFORE- marietta restoration 2.jpg",
      "BEFORE- marietta restoration 4.jpg",
    ],
  },
  {
    assetFolder: "Fallen Tree Rebuild - Stonecrest",
    outSlug: "fallen-tree-rebuild-stonecrest",
    prefix: "fallen-tree-rebuild-stonecrest-ga",
    afterFiles: [
      "Cover photo.jpg",
      "28140d08-6023-4ff3-9630-23a04a6e5e8d.jpg",
      "35521c2c-4ffc-404a-86e7-9d606ae7e74a.jpg",
      "7cc4b7c8-45c8-49cb-adf4-e2ccd3d31dc9.jpg",
      "9aa6457f-1e83-4908-8c5b-cdac5bfe4e70.jpg",
      "a9ed7bb3-d13e-490f-a976-2f5513343925.jpg",
      "b7326aee-cb41-4455-98ec-5904e0b1939c.jpg",
      "c1640183-7163-49f3-8358-a2d132201a50.jpg",
      "d885ab09-2e36-4c1c-8edc-2b786a824543.jpg",
      "d90cd560-6871-4b0e-8268-a4db32864c66.jpg",
      "ee795c73-1850-438e-a4b7-55728642dd49.jpg",
    ],
    beforeFiles: [
      "BEFORE.jpg",
      "BEFORE1.jpg",
      "BEFORE2.jpg",
      "BEFORE3.jpg",
      "Before5.jpg",
      "BEFORE 6.jpg",
      "before 7.jpg",
      "before 8.jpg",
      "before 9.jpg",
    ],
  },
];

// ---- Helpers ----

function padded(n) {
  return String(n).padStart(2, "0");
}

async function processImage(srcPath, destPath) {
  if (!existsSync(srcPath)) {
    console.warn(`  SKIP (not found): ${srcPath}`);
    return false;
  }

  // Copy + convert to JPG (normalize any HEIC/rotated)
  if (!existsSync(destPath)) {
    await sharp(srcPath)
      .rotate() // auto-orient from EXIF
      .jpeg({ quality: 85, progressive: true })
      .toFile(destPath);
    console.log(`  ✓ ${destPath.split("public/")[1]}`);
  } else {
    console.log(`  skip (exists): ${destPath.split("public/")[1]}`);
  }

  // Full-res WebP
  const webpPath = destPath.replace(/\.jpg$/, ".webp");
  if (!existsSync(webpPath)) {
    await sharp(destPath)
      .webp({ quality: QUALITY_WEBP, effort: 5 })
      .toFile(webpPath);
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

  return true;
}

async function main() {
  for (const proj of PROJECTS) {
    console.log(`\n=== ${proj.assetFolder} → ${proj.outSlug} ===`);
    const assetDir = join(ASSETS, proj.assetFolder);
    const outDir = join(PUBLIC, proj.outSlug);

    mkdirSync(outDir, { recursive: true });

    // After photos
    for (let i = 0; i < proj.afterFiles.length; i++) {
      const src = join(assetDir, proj.afterFiles[i]);
      const dest = join(outDir, `${proj.prefix}-${padded(i + 1)}.jpg`);
      await processImage(src, dest);
    }

    // Before photos
    for (let i = 0; i < proj.beforeFiles.length; i++) {
      const src = join(assetDir, proj.beforeFiles[i]);
      const dest = join(outDir, `${proj.prefix}-before-${padded(i + 1)}.jpg`);
      await processImage(src, dest);
    }
  }

  console.log("\n✓ All images processed.");
}

main().catch((err) => { console.error(err); process.exit(1); });
