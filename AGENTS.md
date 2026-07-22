<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Title convention (prevent brand-doubling)

Per-page `metadata.title` values must NOT include "TopFlight Builders". The root layout template
(`%s | TopFlight Builders`) appends the brand once. Including the brand in a page title causes
"... | TopFlight Builders | TopFlight Builders" in the SERP.

After every build, run `npm run check:titles` to catch regressions.
