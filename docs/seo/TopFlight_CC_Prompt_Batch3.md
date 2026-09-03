# Claude Code Handoff Prompt: TopFlight Builders SEO batch 3 (service-hub CTA tracking)

## How to use
Open Claude Code in the `Top-Flight-Builders` repo. Copy everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===` and paste it. Small, focused batch. Continue on `seo/growth-batch-1` so it ships with the rest.

---

=== BEGIN PROMPT ===

You are continuing on branch `seo/growth-batch-1` in the TopFlight Builders repo (Next.js 16, static export, Tailwind v4). This is a small, focused batch: make the estimate CTAs on the service hub pages fire the `generate_lead` event, which they currently do not because those pages are server components. Do the work on the same branch, verify, and report. Do NOT merge or deploy.

## Guardrails
1. Next.js 16 has breaking changes: read `node_modules/next/dist/docs/` and follow `AGENTS.md` before writing code.
2. Static export only. No server runtime, no server actions.
3. Reuse existing conventions. The consent-gated `trackEvent` helper already lives in `src/components/GoogleAnalytics.tsx`.
4. No em dashes in any copy you touch: use commas, colons, or parentheses.
5. Commit in logical chunks. Do NOT merge to `main` and do NOT deploy.

## The problem
These service hub pages are server components with estimate CTAs that do not fire `generate_lead`:
- `src/app/services/kitchen-remodeling/page.tsx`
- `src/app/services/bathroom-remodeling/page.tsx`
- `src/app/services/restoration/page.tsx`
- `src/app/services/basements-and-additions/page.tsx`

`trackEvent` needs a client component (it runs `onClick` in the browser), so a server component cannot attach it directly.

## Task: add a small reusable client CTA component and use it on the hubs

1. Create one reusable client component, for example `src/components/EstimateCtaLink.tsx`, marked `"use client"`. It should:
   - Accept props: `href` (default `/contact`), `source` (string, required), `className`, and `children`.
   - Render an anchor or `next/link` matching the existing CTA styling used on the hub pages.
   - On click, call the existing consent-gated `trackEvent("generate_lead", { source })`. Do not re-implement consent logic; import and reuse `trackEvent` from `GoogleAnalytics.tsx`.
2. Replace the inline estimate CTAs on the four hub pages above with this component, passing a distinct `source` per page, for example `kitchen_hub_cta`, `bath_hub_cta`, `restoration_hub_cta`, `basements_hub_cta`. Keep the exact visual appearance (same classes and label text).
3. Do not change any phone (`tel:`) links; those already fire `contact`/`method:phone` and are out of scope here.
4. Check the other service hub pages (`full-home-remodeling`, `age-in-place`, `roofing`, `decks`, `siding`, `commercial`) and apply the same component to their primary estimate CTA if they have one, using a matching `source` label. Keep it consistent so every service hub reports lead intent.

## Constraint check
Confirm this stays compatible with static export (a `"use client"` component with an `onClick` is fine in a static export; it hydrates on the client). Do not introduce any server-only APIs.

## Verification
1. `npm run build` completes with zero errors and regenerates `out/`. `npm run check:titles` stays green. `npm run lint` clean for new code.
2. Grep the built HTML or source to confirm each targeted hub now renders the client CTA and that `generate_lead` is wired with the correct per-page `source`.
3. Confirm the CTA visual output is unchanged (same classes and label).
4. Confirm no em dashes in any line you added: `git diff main...seo/growth-batch-1 -- src/components/EstimateCtaLink.tsx 'src/app/services/**' | grep '^+' | grep $'—'` returns nothing.
5. Confirm no `generate_lead` fires before consent (the helper already gates this; just verify you did not bypass it).

## Deliverable
Update `docs/seo/SEO_CHANGES_REPORT.md` with a short batch-3 section: the new component, which hub pages now fire `generate_lead` and their `source` labels, and verification results. Then stop and show me the diff summary. Do not merge or deploy.

Note: there is also one uncommitted working-tree edit to `src/app/services/commercial/page.tsx` (an em-dash fix). Please stage and commit it with this batch: `git add src/app/services/commercial/page.tsx`.

=== END PROMPT ===
