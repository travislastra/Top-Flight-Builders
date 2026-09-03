# Claude Code Handoff Prompt: TopFlight Builders SEO batch

## How to use this (read before pasting)

1. **The reference docs are already in the repo** at `docs/seo/` (I placed them there for you): `TopFlight_ClaudeCode_Roadmap.md`, `TopFlight_Schema_Patches.md`, `TopFlight_New_Content_Drafts.md`, and this prompt. Nothing to move.
2. Open Claude Code in the `Top-Flight-Builders` repo.
3. Copy everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===` and paste it as your message.
4. Claude Code will work on a branch and stop for your review before anything merges or deploys. Nothing goes live without you.

**Context I already verified for you (so CC does not have to rediscover it):**
- Branch `main` is clean. The most recent commit ("SEO: city page cleanup, remove conflicting schema and duplicate FAQ sections") already fixes the duplicate-FAQ and raw-markdown issues in source.
- `out/` is NOT git-tracked, so production is built by your host on deploy. The live site is stale because a deploy has not run since those fixes landed. "Redeploy" means trigger your host's build from latest `main`, not commit `out/`.
- The local sandbox could not run `npm run build` (no network for the SWC binary). CC on your machine can, and must.

---

=== BEGIN PROMPT ===

You are working in the TopFlight Builders repository (Next.js 16 App Router, static export, Tailwind v4). Your job is to implement a batch of SEO and conversion improvements, verify everything rigorously, and finish by writing a review report. Do the work on a branch and do NOT merge or deploy. I will review before anything ships.

## Reference documents (read these first)
Read all three, in `docs/seo/`:
- `docs/seo/TopFlight_ClaudeCode_Roadmap.md` (the full task detail, tasks T1 to T12)
- `docs/seo/TopFlight_Schema_Patches.md` (exact JSON-LD changes)
- `docs/seo/TopFlight_New_Content_Drafts.md` (publish-ready copy and FAQ arrays)

## Hard guardrails
1. This is Next.js 16 with breaking changes. Before writing any code, read the relevant guides in `node_modules/next/dist/docs/` and follow the repo's `AGENTS.md`. Do not assume App Router APIs match older knowledge.
2. The site is a static export (`output: "export"`, `images.unoptimized: true`). Everything must build to static HTML. No server actions or server-only route handlers. Use `generateStaticParams` for dynamic routes.
3. Reuse existing components and data patterns: `FAQSection`, `ServiceSchema`, `BreadcrumbSchema`, `ServiceCityPage`, `ContactForm`, and the data files in `src/lib/*.ts`. Do not invent new patterns where one exists.
4. Do not fabricate business facts. Use values already in the repo or in the content-drafts doc. The cost figures in the drafts are illustrative ranges the site already publishes; keep them as ranges and add a visible note, and list them for my confirmation in your final report.
5. No em dashes in any site copy. Use commas, colons, or parentheses.
6. Work on a branch named `seo/growth-batch-1`. Commit in logical chunks with clear messages. Do NOT merge to `main` and do NOT deploy. Stop for my review.

## Do these tasks, in this order

Follow the acceptance criteria in the roadmap for each. Summary:

**T4 + T10 + T5 first (small, safe schema/meta):**
- T4: In `src/app/layout.tsx`, add `"streetAddress": "2489 Lakebrooke Dr"` to the LocalBusiness `PostalAddress`. In your report, flag this for my confirmation (do not assume it is publishable if I have not confirmed).
- T10: Make canonical trailing-slash usage consistent site-wide (root layout uses `BASE_URL + "/"`; per-page canonicals omit the slash; pick one and apply everywhere). Confirm no `keywords` meta tag is emitted by any current template; remove it if found.
- T5: Add `Service` JSON-LD to the city-level service pages rendered by `src/components/ServiceCityPage.tsx`, with `areaServed` set to the page's city and `provider.@id` matching the LocalBusiness `@id` (`https://topflightbuilders.net/#business`). See Schema Patches doc, Patch 3.

**T2 (analytics events):**
- Add a consent-safe `trackEvent` helper (respect the existing Consent Mode v2 setup; fire nothing before analytics consent is granted).
- Fire `generate_lead` on successful `ContactForm` submit; `contact` with `{ method: "phone" }` on every `tel:` CTA (`MobileCallBar`, `QuoteBar`, `Header`, `ContactBanner`); `cta_click` on the floating and header estimate buttons.
- In your report, note that I must mark these as key events in GA4 (team-side).

**T3 (commercial city pages, Canton first):**
- Create `src/app/services/commercial/[city]/page.tsx` mirroring the existing `[city]` service routes and `ServiceCityPage`. Add a `commercial` entry to the service matrix in `src/lib/service-city-data.ts`. Add `generateStaticParams`.
- Build the Canton page from the draft in the content doc. Then generate Marietta, Woodstock, Kennesaw, Acworth, and East Cobb commercial pages from the same template with genuinely local detail (not just a city-name swap).
- Add `ServiceSchema` (serviceType "Commercial Construction and Tenant Improvement") and `FAQSection` (use the `COMMERCIAL_CANTON_FAQS` array pattern). Link each page from `/services/commercial` and the matching `/service-areas/[city]` page.

**T7 + T8 (cost guides + direct-answer intros):**
- Publish the kitchen and bath cost-guide pages from the content doc. Lead each with the direct-answer paragraph, then the cost table, then the FAQ arrays passed to `FAQSection`. Add `Article` schema per Schema Patches doc, Patch 5.
- T8: add a short direct-answer opening line to each main service page (question then a one to two sentence answer, in the body, above the fold).

**T6 (internal linking):**
- Add contextual internal links into the striking-distance pages using the keyword-to-page map in the roadmap (Section 4). Prioritize Acworth and East Cobb kitchen and bath. Each target page should gain at least 3 relevant internal links with keyword-relevant anchor text. Cross-link sibling city-service pages and link the new cost guides from the relevant service and city pages.

**T9, T11, T12 (polish, if time remains):**
- T9: make `/ai-info` "last verified" date and review count come from a single constant or `reviews.ts`, kept truthful.
- T11: quick Core Web Vitals pass. Ensure above-the-fold images have explicit width/height and below-the-fold gallery images lazy-load. Run Lighthouse on the homepage and one city-service page; fix the top LCP/CLS issues only.
- T12: add a lightweight build-time check or test that fails if any resolved page `<title>` contains "TopFlight Builders" more than once.

## Do NOT do (out of scope, these are team tasks)
Google Business Profile, Yelp category fix, third-party citations/NAP, reviews, backlinks, Local Services Ads, and creating the GA4 property or a call-tracking account. Wire the on-page events only.

## Final verification phase (required, do all of it)
After implementing, run a thorough check and capture the results:
1. `npm run build`. It must complete with zero errors and regenerate `out/`. Fix anything that breaks.
2. Grep the built HTML to confirm fixes landed:
   - No doubled brand: no built `<title>` contains "TopFlight Builders" twice.
   - `grep -ro "\*\*###" out/` returns nothing.
   - The new `/services/commercial/canton-ga` and cost-guide pages exist in `out/` with their content.
3. Validate every JSON-LD block you added or changed: extract each `application/ld+json` from the built HTML and confirm it parses as valid JSON, `provider.@id` resolves to the LocalBusiness node, and required fields are present. Note which pages you would spot-check in Google's Rich Results Test.
4. Confirm all new routes are in `src/app/sitemap.ts` output.
5. Verify internal links resolve (no 404s to the new pages) and anchors are descriptive.
6. Run `npm run lint` and fix new issues you introduced.
7. Confirm no em dashes in any copy you added: `grep -rn $'—' src/` for your new/changed files.

## Deliverable: write a review report
Create `docs/seo/SEO_CHANGES_REPORT.md` containing:
- A summary of what changed, task by task (T-number, files touched, what and why).
- A before/after for the two headline fixes (title doubling, FAQ markup) confirmed from built HTML.
- The full list of new pages created, with their target keywords.
- Verification results: build status, grep checks, JSON-LD validation, lint, sitemap, link checks.
- **Open questions for me to confirm**, especially: the `streetAddress` value, every cost figure used, and the GA4 property ID.
- **Still needs the team (off-repo):** the GBP, Yelp, reviews, citations, backlinks, LSA, and GA4 key-event items.
- Anything you chose to skip or defer, and why.

Then stop and show me the branch, the diff summary, and the report so we can review together. Do not merge or deploy.

=== END PROMPT ===
