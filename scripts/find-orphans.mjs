/**
 * Scans the built out/ directory for internal links.
 * Reports pages that have zero inbound HTML links from other pages.
 */
import { readdirSync, readFileSync, existsSync } from "fs";
import { join, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = new URL(".", import.meta.url).pathname;
const OUT = join(__dirname, "../out");

// Next.js basePath — strip this prefix from href values so we match file paths
const BASE_PATH = "/Top-Flight-Builders";

function collectHtmlFiles(dir, base = dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...collectHtmlFiles(full, base));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

// Extract all href="/..." links from an HTML file, stripping the basePath prefix
function extractLinks(html) {
  const links = new Set();
  const re = /href="(\/[^"#?]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1];
    // Strip basePath prefix if present
    if (href.startsWith(BASE_PATH)) {
      href = href.slice(BASE_PATH.length) || "/";
    } else {
      continue; // skip external or asset links that don't start with basePath
    }
    links.add(href.replace(/\/$/, "") || "/");
  }
  return links;
}

// Convert file path to URL path
function fileToUrl(file) {
  let rel = relative(OUT, file).replace(/\.html$/, "").replace(/\/index$/, "");
  return rel === "" ? "/" : "/" + rel;
}

const htmlFiles = collectHtmlFiles(OUT);
const urlToFile = new Map(htmlFiles.map((f) => [fileToUrl(f), f]));

// Build inbound link map
const inbound = new Map([...urlToFile.keys()].map((u) => [u, new Set()]));

for (const file of htmlFiles) {
  const srcUrl = fileToUrl(file);
  const html = readFileSync(file, "utf8");
  for (const link of extractLinks(html)) {
    if (inbound.has(link) && link !== srcUrl) {
      inbound.get(link).add(srcUrl);
    }
  }
}

console.log("\n=== ORPHAN PAGES (zero inbound HTML links) ===");
let orphanCount = 0;
for (const [url, sources] of inbound) {
  if (sources.size === 0) {
    console.log("  ORPHAN:", url);
    orphanCount++;
  }
}
console.log(`\nTotal: ${orphanCount} orphan pages out of ${inbound.size}`);

console.log("\n=== PAGES WITH ONLY 1 INBOUND LINK ===");
for (const [url, sources] of inbound) {
  if (sources.size === 1) {
    console.log("  THIN:", url, "<-- from:", [...sources][0]);
  }
}
