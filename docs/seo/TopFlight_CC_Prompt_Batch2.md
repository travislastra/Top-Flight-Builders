# Claude Code Handoff Prompt: TopFlight Builders SEO batch 2 (cleanup + gaps)

## How to use
Open Claude Code in the `Top-Flight-Builders` repo. Copy everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===` and paste it. Reference docs are already in `docs/seo/`. Work continues on the existing `seo/growth-batch-1` branch (it has not been deployed yet), so this ships as one reviewable unit.

---

=== BEGIN PROMPT ===

You are continuing work on branch `seo/growth-batch-1` in the TopFlight Builders repo (Next.js 16, static export, Tailwind v4). Batch 1 is committed but not deployed. This is a focused cleanup batch that closes four gaps found in review. Do the work on the same branch, verify rigorously, and finish with a report. Do NOT merge or deploy.

## Guardrails (unchanged from batch 1)
1. Next.js 16 has breaking changes: read `node_modules/next/dist/docs/` and follow `AGENTS.md` before writing code.
2. Static export only. No server runtime, no server actions. Use `generateStaticParams`.
3. Reuse existing components and data files. Do not invent new patterns.
4. No em dashes in site copy: use commas, colons, or parentheses.
5. Do not fabricate facts. Cost figures come from `docs/seo/TopFlight_New_Content_Drafts.md`; keep them as ranges and list them in the report for the owner to confirm.
6. Commit in logical chunks. Do NOT merge to `main` and do NOT deploy.

## Task G1: Lead-intent tracking around the Houzz form (we are keeping the Houzz iframe)

Context: `src/components/ContactForm.tsx` embeds a cross-origin Houzz iframe, so the actual form submission cannot be detected from our site. Do NOT try to hook the iframe submit or replace the form. Instead track lead intent via the CTAs that lead to the form, as a proxy.

Do:
- Add a reusable event for estimate intent. Fire a `generate_lead` event with a `source` param (respecting the existing consent-gated `trackEvent` helper, no events before consent) on click of every primary estimate CTA that routes to `/contact` or opens the form. Cover at minimum: the Header "Get a Quote" button, any "Get Started" / "Start Your Project" / "Request a Free Estimate" / "Get a Free Estimate" buttons on the homepage, service pages, service-area pages, contact page, and the new commercial pages, and the fallback "Request a Free Estimate" link inside `ContactForm.tsx` (the case when the iframe is blocked).
- Also fire a `form_view` event when the contact page's form section mounts, so there is a funnel step between intent and the (untrackable) Houzz submit.
- Keep the existing `contact`/`method:phone` and `cta_click` events as they are. Use distinct event names so nothing double-counts: `generate_lead` for estimate-CTA clicks, `form_view` for the contact-form mount.
- Add a one-paragraph note to the report explaining that `generate_lead` here is a CTA-intent proxy (not a confirmed Houzz submission), and that the team should mark `generate_lead` as a key event in GA4 and reconcile actual submissions against Houzz's own lead notifications.

Acceptance: clicking any estimate CTA fires `generate_lead` with a `source` label in GA4 DebugView; the contact page fires `form_view`; nothing fires before consent.

## Task G2: Remove em dashes from the copy this work introduced

Scope to the files added or changed in this branch only (do not rewrite the entire legacy site). At minimum: `src/app/services/commercial/[city]/page.tsx`, `src/app/services/commercial/page.tsx`, the two new cost-guide posts and any new entries in `src/lib/blog-posts.ts`, and the new FAQ entries in `src/lib/faq-data.ts`.

Do: replace every em dash in that new copy with a comma, colon, parentheses, or a reworded sentence, preserving meaning. Verify with `git diff main...seo/growth-batch-1 -- <files> | grep '^+' | grep $'—'` returning nothing.

Acceptance: no em dashes in any line this branch added.

## Task G3: Enrich the cost guides (they dropped the scannable cost table)

The two new posts (`kitchen-remodel-cost-atlanta-2026`, `bathroom-remodel-cost-atlanta-2026`) currently have prose but no cost-range table. The table is what wins featured snippets and AI Overviews for "how much does X cost" queries.

Do:
- Add the cost-range table from `docs/seo/TopFlight_New_Content_Drafts.md` to each post (kitchen: cosmetic / mid-range / full gut; bathroom: the drivers and timeline). If the blog renderer does not support markdown tables, render it as a clean styled list or an HTML table that fits the existing blog styling.
- Confirm each post leads with the direct-answer paragraph (question then a one to two sentence answer) and includes the FAQ set. If the blog template can render an FAQ with `FAQPage` schema, use it; otherwise keep the Q and A in the body and ensure the cost-guide `Article` schema from `docs/seo/TopFlight_Schema_Patches.md` (Patch 5) is present.
- Keep all figures as ranges and flag them in the report for owner confirmation.

Acceptance: each cost guide shows a scannable cost table or list, a direct-answer intro, FAQs, and valid `Article` JSON-LD.

## Task G4: Real internal-linking pass into the striking-distance pages (batch 1 was thin)

Only three internal links landed in batch 1. Add a proper pass using the keyword-to-page map in `docs/seo/TopFlight_ClaudeCode_Roadmap.md` (Section 4). Priority targets, each should gain at least 3 contextual internal links with keyword-relevant anchor text (not "click here" or "learn more"):

- `/services/kitchen-remodeling/acworth-ga`
- `/services/kitchen-remodeling/east-cobb-ga`
- `/services/kitchen-remodeling/marietta-ga`
- `/services/bathroom-remodeling/east-cobb-ga`
- `/services/basement-finishing/acworth-ga`
- `/services/full-home-remodeling/acworth-ga`
- `/services/commercial/canton-ga`

Link sources to use: the kitchen and bathroom service hubs, the relevant service-area pages, the sibling city-service pages (cross-link cities within the same service), the two new cost guides, and any topically relevant existing blog posts. Prefer the existing `ServiceAreaLinks` / `ServiceBlogLinks` components where they fit; otherwise add inline contextual links in body copy. Do not create link spam; links must be genuinely relevant and read naturally.

Acceptance: each target page above has at least 3 new inbound internal links with descriptive, keyword-relevant anchors, and no broken links.

## Final verification phase (do all of it)
1. `npm run build` completes with zero errors and regenerates `out/`. Also run `npm run check:titles` (must stay green) and `npm run lint` (fix new issues you introduced).
2. Grep built HTML: no doubled brand in any `<title>`, `grep -ro "\*\*###" out/` returns nothing, and the enriched cost guides and commercial pages render their content.
3. Extract and JSON-parse every `application/ld+json` block on the changed pages; confirm the cost-guide `Article` and commercial `Service` blocks are valid and `provider.@id` resolves to `#business`.
4. Confirm no em dashes in any line this branch added (command in G2).
5. Manually confirm in the built HTML that the estimate CTAs carry the `generate_lead` handler and the contact page carries `form_view`.
6. Verify the internal links from G4 resolve to real pages.

## Deliverable: write / update the report
Create or update `docs/seo/SEO_CHANGES_REPORT.md` with a batch-2 section: what changed per task (G1 to G4, files touched), the verification results, and an "Open questions for the owner" list (cost figures to confirm, `streetAddress` publish confirmation, and the reminder to mark `generate_lead` as a GA4 key event). Note the Houzz-iframe limitation explicitly.

Then stop and show me the branch diff summary and the report so we can review together. Do not merge or deploy.

=== END PROMPT ===
