/**
 * Fails if a GA4 event is sent with a reserved traffic-source parameter.
 *
 * GA4 treats these keys as a manual traffic-source override rather than as
 * custom dimensions. Sending one as an event parameter rewrites the session's
 * source, so a CTA label like "header_cta" surfaces in Traffic Acquisition as
 * a referrer instead of as an event parameter. See
 * docs/ai/ga4-header-cta-source-2026-09-03.md.
 *
 * Scans src/ rather than out/: source gives a real file:line, catches the
 * problem before a build, and avoids false positives from vendor code
 * (core-js ships `source:"a"` in the bundles).
 */
import { readdirSync, readFileSync } from "fs";
import { join, relative } from "path";

const ROOT = join(new URL(".", import.meta.url).pathname, "..");
const SRC = join(ROOT, "src");

const RESERVED = new Set([
  "source",
  "medium",
  "campaign",
  "term",
  "content",
  "campaign_id",
  "source_platform",
  "campaign_source",
  "campaign_medium",
  "campaign_term",
  "campaign_content",
]);

// Both paths that reach gtag("event", ...):
//   window.gtag("event", NAME, { ... })  -- direct
//   trackEvent(NAME, { ... })            -- wrapper in GoogleAnalytics.tsx,
//                                           which forwards straight to gtag
const CALL_RE = /(?:\bgtag\s*\(\s*["'`]event["'`]\s*,|\btrackEvent\s*\()/g;

function collectSourceFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectSourceFiles(full));
    else if (/\.(ts|tsx|js|jsx|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

// Walk from `start` (an open brace) to its match, skipping strings, template
// literals, comments and regex-ish slashes. Returns the object literal text.
function matchBrace(src, start) {
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === "\\") i++;
        i++;
      }
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      while (i < src.length && src[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      i = src.indexOf("*/", i + 2);
      if (i === -1) return null;
      i++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

// Reserved keys only count at depth 1 of the params object. A nested
// { items: [{ source: ... }] } is not a traffic-source override.
//
// Tracks key vs value position so that { placement: source } (source used as a
// VALUE) is not flagged, while both { source: x } and the ES6 shorthand
// { source } are. The shorthand form is how EstimateCtaLink shipped the bug in
// 6c24b5d, so matching only "key:" would miss it.
function reservedKeysAtTopLevel(objText) {
  const found = [];
  let depth = 0;
  let expectKey = false;

  for (let i = 0; i < objText.length; i++) {
    const c = objText[i];

    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      const strStart = i;
      i++;
      while (i < objText.length && objText[i] !== quote) {
        if (objText[i] === "\\") i++;
        i++;
      }
      if (depth === 1 && expectKey) {
        const name = objText.slice(strStart + 1, i);
        if (/^\s*:/.test(objText.slice(i + 1)) && RESERVED.has(name)) found.push(name);
        expectKey = false;
      }
      continue;
    }

    if (c === "/" && objText[i + 1] === "/") {
      while (i < objText.length && objText[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && objText[i + 1] === "*") {
      const j = objText.indexOf("*/", i + 2);
      if (j === -1) break;
      i = j + 1;
      continue;
    }

    if (c === "{" || c === "[" || c === "(") {
      depth++;
      expectKey = depth === 1;
      continue;
    }
    if (c === "}" || c === "]" || c === ")") {
      depth--;
      continue;
    }
    if (depth !== 1) continue;

    if (c === ",") {
      expectKey = true;
      continue;
    }
    if (c === ":") {
      expectKey = false;
      continue;
    }
    if (/\s/.test(c)) continue;

    if (expectKey) {
      // Delimiter decides the form: ":" is key/value, "," or "}" is shorthand.
      const m = /^([A-Za-z_$][\w$]*)\s*([:,}]|$)/.exec(objText.slice(i));
      if (m) {
        if (RESERVED.has(m[1])) found.push(m[1]);
        i += m[1].length - 1;
      }
      expectKey = false;
    }
  }
  return found;
}

// Find the params object literal: the second argument for trackEvent, the
// third for gtag. Both sit after the event-name argument, so skip one comma
// at depth 0, then take the next brace.
function paramsObjectAfter(src, callEnd) {
  let depth = 0;
  for (let i = callEnd; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === "\\") i++;
        i++;
      }
      continue;
    }
    if (c === "(" || c === "[") depth++;
    else if (c === "]") depth--;
    else if (c === ")") {
      if (depth === 0) return null; // call closed, no params object
      depth--;
    } else if (c === "{" && depth === 0) return { text: matchBrace(src, i), at: i };
  }
  return null;
}

const files = collectSourceFiles(SRC);
const violations = [];

for (const file of files) {
  const src = readFileSync(file, "utf8");
  CALL_RE.lastIndex = 0;
  let m;
  while ((m = CALL_RE.exec(src)) !== null) {
    const obj = paramsObjectAfter(src, m.index + m[0].length);
    if (!obj || !obj.text) continue;
    const keys = reservedKeysAtTopLevel(obj.text);
    if (keys.length === 0) continue;
    const line = src.slice(0, obj.at).split("\n").length;
    const snippet = obj.text.replace(/\s+/g, " ").slice(0, 100);
    for (const key of keys) {
      violations.push({ file: relative(ROOT, file), line, key, snippet });
    }
  }
}

if (violations.length > 0) {
  console.error("\nERROR: reserved GA4 traffic-source parameter in a GA4 event.\n");
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  reserved key: "${v.key}"`);
    console.error(`    ${v.snippet}\n`);
  }
  console.error("GA4 treats these as a manual traffic-source override and rewrites the");
  console.error("session source, so the value shows up in Traffic Acquisition instead of");
  console.error("as an event parameter. Use a non-reserved name such as link_placement.");
  console.error(`Reserved: ${[...RESERVED].join(", ")}`);
  console.error("Background: docs/ai/ga4-header-cta-source-2026-09-03.md\n");
  process.exit(1);
}

console.log(`OK: no reserved GA4 traffic-source params (${files.length} files scanned)`);
