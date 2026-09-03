# TopFlight Builders: Claude Code Execution Roadmap

**Prepared:** July 22, 2026
**Repo:** `Top-Flight-Builders` (Next.js 16 App Router, static export, Tailwind v4)
**Scope:** On-repo work achievable now, while Google Business Profile reverification is handled by the team out of band.
**Companion files:** `TopFlight_New_Content_Drafts.md` (publish-ready copy) and `TopFlight_Schema_Patches.md` (exact JSON-LD changes).

---

## 0. Read this first (guardrails for Claude Code)

1. **This is Next.js 16, which has breaking changes.** Per the repo's `AGENTS.md`, read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Do not assume App Router APIs match older training data.
2. **The site is a static export** (`next.config.ts` has `output: "export"`, `images.unoptimized: true`). There is no server runtime. Everything must build to static HTML in `out/`. No server actions, no dynamic route handlers that need a server, no `next/image` optimization.
3. **Work on a branch, build, and verify before hand-off.** Run `npm run build` and confirm `out/` regenerates with no errors. Where possible, grep the built HTML to confirm a fix actually landed.
4. **Match existing conventions.** Reuse existing components (`FAQSection`, `ServiceSchema`, `BreadcrumbSchema`, `ServiceCityPage`, `ContactForm`) and existing data files (`src/lib/*.ts`). Do not introduce new patterns when one exists.
5. **Do not fabricate facts.** Business facts (NAP, owner, review count, pricing) must come from the values already in the repo or from `TopFlight_New_Content_Drafts.md`. Cost figures in the drafts mirror ranges the site already publishes; flag them for the owner to confirm before publish.
6. **No em dashes in site copy** per owner preference; use commas, colons, or parentheses.

### What is NOT a Claude Code task (hand to the team, not CC)

These drive most local lead volume but live off the repo. Listed here only so they are not accidentally assigned to CC:

- Google Business Profile reverification, category, photos, posts (in progress with the team).
- Yelp category fix: it currently lists TopFlight as "Painters" and should be General Contractor / Remodeler (flagged in your own GEO gap report).
- Review velocity (2 to 4 new Google reviews/month), citations / NAP consistency on third-party directories, backlink outreach, and Local Services Ads.
- Creating the GA4 property and a call-tracking vendor account (CC wires the on-page events; the accounts are team-side).

---

## 1. The single most important finding

**Your live site is a stale build. Your code is already ahead of it.**

- `out/` (the deployed static export) is dated **July 10**; source files were edited through **July 14** (e.g. `src/app/sitemap.ts`, `src/components/Footer.tsx`).
- The two "bugs" from the audit exist **only in the stale build**:
  - The doubled brand in the title tag ("... | TopFlight Builders | TopFlight Builders"). Current source is correct: service-area pages set a brand-free `title` and the root layout template appends the brand once.
  - The FAQ block rendering raw `**###` markdown. Current source uses a single clean `<FAQSection>` with clean data in `faq-data.ts`. The stale `out/service-areas/marietta-ga.html` still contains the raw markdown.

**So the highest-value action in this whole document is simply to rebuild and redeploy.** Everything else compounds on top of shipping the current code.

---

## 2. Priority board (at a glance)

| ID | Task | Type | Effort | Impact |
|----|------|------|--------|--------|
| **T1** | Rebuild static export and redeploy (ships all pending fixes) | Deploy | XS | **High** |
| **T2** | Wire GA4 conversion events (call taps, form submits) | Code | S | **High** |
| **T3** | Build commercial city pages, Canton first | Content+route | M | **High** |
| **T4** | Add `streetAddress` to LocalBusiness schema | Code | XS | Med |
| **T5** | Add Service schema to city-level service pages | Code | S | Med |
| **T6** | Internal-link into striking-distance city-service pages | Code | S | **High** |
| **T7** | Publish kitchen and bath cost-guide pages | Content | M | **High** |
| **T8** | Add direct-answer intros (AEO) to service + cost pages | Content | S | Med |
| **T9** | Make `/ai-info` freshness + review count data-driven | Code | XS | Low |
| **T10** | Canonical + meta hygiene pass | Code | XS | Low |
| **T11** | Core Web Vitals pass for static export | Code | M | Med |
| **T12** | Add a build check to prevent title-doubling regressions | Code | S | Low |

Effort key: XS < 30 min, S = 0.5 to 2 hrs, M = half to full day.

---

## 3. Task detail

### T1. Rebuild and redeploy (do this first): P0

**Why:** Live site is stale; current code already fixes the title and FAQ issues.
**Steps:**
1. Read `node_modules/next/dist/docs/` for the current build/export guidance.
2. `npm ci` then `npm run build`. Confirm `out/` regenerates without errors.
3. Deploy per the project's pipeline (confirm how `out/` reaches production; the stale `out/` in the repo suggests the build output may be committed or deployed manually).
**Acceptance criteria:**
- Live `https://topflightbuilders.net/service-areas/marietta-ga` `<title>` reads a single brand suffix.
- `grep -o "\*\*###" out/service-areas/marietta-ga.html` returns nothing.
- The Marietta page shows exactly one FAQ section, rendered as headings (no literal `**` or `###`).

### T2. Wire GA4 conversion events: P1

**Why:** `GoogleAnalytics.tsx` currently only calls `config`; no events fire for the actions that matter (call taps, form submits). Without this you cannot see which pages or searches create leads.
**Files:** `src/components/GoogleAnalytics.tsx` (add a consent-safe `trackEvent` helper), `src/components/ContactForm.tsx`, `src/components/MobileCallBar.tsx`, `src/components/QuoteBar.tsx`, `src/components/Header.tsx`, `src/components/ContactBanner.tsx`, `src/components/FloatingEstimateCta.tsx`.
**Do:**
- Add a small helper that pushes events via `window.gtag` only when analytics consent is granted (respect the existing Consent Mode v2 setup, do not bypass it).
- Fire `generate_lead` on successful contact-form submit.
- Fire a `contact` event with `method: "phone"` on every `tel:` CTA tap.
- Fire a `cta_click` event on the floating and header estimate buttons.
**Acceptance:** Events appear in GA4 DebugView (team confirms the property ID in `GoogleAnalytics.tsx`). No events fire before consent is granted.
**Dependency:** Team marks `generate_lead` and `contact` as key events in GA4.

### T3. Build commercial city pages (Canton first): P1

**Why:** "tenant improvement canton ga" gets 68 impressions at position 3.6, the highest-scoring opportunity in the keyword sheet, and there is no page for it: `src/app/services/commercial/` has only `page.tsx`, no `[city]` route. Related live demand: "office renovation canton ga," "restaurant renovation canton ga," "interior buildout canton ga," "commercial remodeling contractor canton ga."
**Files:** create `src/app/services/commercial/[city]/page.tsx` mirroring the existing `[city]` service routes and `ServiceCityPage` component; add a `commercial` entry to the service matrix in `src/lib/service-city-data.ts`; add `generateStaticParams` for the city list.
**Content:** use the Canton commercial draft in `TopFlight_New_Content_Drafts.md`. Then generate the remaining commercial city pages (Marietta, Woodstock, Kennesaw, Acworth, East Cobb) from the same template with genuinely local detail, not just a city-name swap.
**Schema:** include `ServiceSchema` (serviceType "Commercial Construction / Tenant Improvement") and `FAQSection`; see `TopFlight_Schema_Patches.md`.
**Internal links:** link the new Canton page from `/services/commercial` and from `/service-areas/canton-ga`.
**Acceptance:** `/services/commercial/canton-ga` builds statically, has unique local copy, Service + FAQ + Breadcrumb schema, and is linked from the two parents. Appears in `sitemap.ts` output.

### T4. Add streetAddress to LocalBusiness schema: P1

**Why:** `localBusinessSchema` in `src/app/layout.tsx` has `addressLocality`/`region`/`postalCode` but no `streetAddress`. Your own GEO gap report flagged the missing street number. A complete address strengthens entity matching.
**Do:** add `"streetAddress": "2489 Lakebrooke Dr"` to the `PostalAddress`. Confirm this is the correct public business address with the owner first (some contractors use a home address they prefer not to publish; if so, keep locality-only and instead rely on GBP for the pin).
**Acceptance:** Rich Results Test parses the address with a street value; NAP matches GBP exactly.

### T5. Add Service schema to city-level service pages: P1

**Why:** `ServiceSchema` is used on the service hub pages (`/services/kitchen-remodeling`, etc.) but does not appear to be applied on the city-level pages rendered through `ServiceCityPage.tsx`. Those city pages are exactly the ones targeting your striking-distance keywords.
**Files:** `src/components/ServiceCityPage.tsx` (add `ServiceSchema` with `areaServed` set to the page's city), verify against one built page.
**Acceptance:** `/services/kitchen-remodeling/acworth-ga` built HTML contains a `Service` JSON-LD block with the correct `serviceType` and `areaServed`.

### T6. Internal-link into striking-distance pages: P1

**Why:** Fastest on-page lever to move page-2 pages onto page 1. Use the keyword-to-page map in Section 4.
**Do:**
- From the homepage and each service hub, link down to the specific top-priority city-service pages (Acworth and East Cobb kitchen and bath first).
- Cross-link sibling city-service pages (e.g. Marietta kitchen links to East Cobb and Acworth kitchen) via the existing `ServiceAreaLinks` / `ServiceBlogLinks` components if suitable.
- From relevant blog posts (kitchen cost, bathroom posts) link to the matching city-service and cost-guide pages with descriptive anchor text.
**Acceptance:** Each target page in Section 4 has at least 3 new internal links from relevant higher-authority pages, with keyword-relevant anchors (not "click here").

### T7. Publish kitchen and bath cost-guide pages: P2

**Why:** Real informational demand you are close on: "how much does a kitchen remodel cost in georgia" (pos 14.8), "kitchen renovation cost atlanta" (11), plus bathroom cost variants. Cost guides also feed AI Overviews.
**Files:** new routes under `src/app/` (or extend the blog if the team prefers content there). Reuse `FAQSection`; add `Article` or `Service` schema per `TopFlight_Schema_Patches.md`.
**Content:** use the kitchen and bath cost-guide drafts in `TopFlight_New_Content_Drafts.md`. Lead with a direct-answer paragraph, then a cost table, then FAQs.
**Acceptance:** Pages build statically, lead with a one-to-two sentence direct answer, include a cost table and FAQ schema, and link to the relevant service and city pages.

### T8. Direct-answer intros for AEO: P2

**Why:** Answer engines quote concise, direct answers. Add a short question-then-answer opener to service and cost pages.
**Do:** at the top of each main service page, add a 1 to 2 sentence plain-language answer to the page's core question (for example, "How much does a kitchen remodel cost in Marietta? Most range from $25,000 for a cosmetic refresh to $85,000+ for a full gut renovation."). Keep it above the fold, in the body text (not only in meta).
**Acceptance:** Each targeted page has a visible, quotable answer sentence in the first screen of content.

### T9. Make /ai-info freshness data-driven: P3

**Why:** `/ai-info` shows a "last verified" date and review count. If hardcoded, they drift. Freshness matters to AI crawlers.
**Do:** source the "last verified" date and the review count from a single constant (or from `reviews.ts` length) so a rebuild keeps them current. Keep the review count truthful; do not inflate.
**Acceptance:** Updating one constant updates `/ai-info`, the homepage "50+ reviews" claim, and the `aggregateRating.reviewCount` together.

### T10. Canonical and meta hygiene: P3

**Do:**
- Pick one trailing-slash convention. Root layout canonical is `BASE_URL + "/"`; per-page canonicals omit the trailing slash; the live `/ai-info` canonical had a trailing slash that did not match its URL. Make them consistent site-wide.
- Confirm the current source does not emit a `meta-keywords` tag (the tag seen live may be from the stale build). If any template still outputs it, remove it.
**Acceptance:** All canonicals follow one convention; no `keywords` meta tag in built HTML.

### T11. Core Web Vitals pass (static export): P3

**Why:** `images.unoptimized: true` means no automatic image optimization; large project photos can hurt LCP on mobile, where your CTR is best.
**Do:** ensure hero and above-the-fold images have explicit width/height and are appropriately sized; lazy-load below-the-fold gallery images; confirm `sharp` is used at build to pre-size assets; run Lighthouse on the homepage and a city-service page and fix the top LCP/CLS issues.
**Acceptance:** Lighthouse mobile Performance improves versus baseline; no layout-shift warnings on the tested pages.

### T12. Regression guard for title doubling: P3

**Why:** Prevent the brand-doubling from ever recurring.
**Do:** add a lightweight check (a test or a build-time assertion) that fails if any page's resolved `<title>` contains "TopFlight Builders" more than once. Optionally document in `AGENTS.md` that per-page `title` must not include the brand (the layout template adds it).
**Acceptance:** Introducing a brand-suffixed page title fails the check.

---

## 4. Keyword-to-page map (targets for T3, T6, T7)

The full scored list of 594 is in `TopFlight_Keyword_Opportunities.xlsx`. These are the near-term targets to point internal links and content at:

| Priority | Query | Impr. | Pos. | Target page |
|---|---|---|---|---|
| P1 | tenant improvement canton ga | 68 | 3.6 | **/services/commercial/canton-ga (new, T3)** |
| P1 | home restoration near me | 31 | 7.3 | /services/restoration |
| P1 | kitchen remodeling marietta | 47 | 19.1 | /services/kitchen-remodeling/marietta-ga |
| P1 | kitchen remodeling acworth ga | 33 | 17.8 | /services/kitchen-remodeling/acworth-ga |
| P1 | bathroom remodeling east cobb (3 variants) | 89 | ~18 | /services/bathroom-remodeling/east-cobb-ga |
| P1 | kitchen remodeling east cobb ga | 29 | 17.0 | /services/kitchen-remodeling/east-cobb-ga |
| P1 | basement remodeling acworth | 21 | 12.4 | /services/basement-finishing/acworth-ga |
| P1 | home remodeling company acworth ga | 20 | 11.5 | /services/full-home-remodeling/acworth-ga |
| P2 | how much does a kitchen remodel cost in georgia | 19 | 14.8 | **kitchen cost guide (new, T7)** |
| P2 | kitchen renovation cost atlanta | 11 | 11.1 | **kitchen cost guide (new, T7)** |
| P2 | residential general contractors near me | 18 | 10.8 | homepage / services hub |

**Note on out-of-market impressions** (Denver, Macon, Blackhawk, Chicago, etc.): I grepped `blog-posts.ts` and found none of those place names in the current content. So this is Google loosely matching your Atlanta articles to other-city queries, not a content bug in the repo. It is low-priority noise that stronger local signals and the redeploy will reduce. Do not spend effort "removing" cities that are not there.

---

## 5. Suggested execution order

1. **T1** (redeploy) immediately, on its own, and verify live. This alone fixes the visible title and FAQ issues.
2. **T4, T5, T10** together (small schema/meta fixes) in one branch.
3. **T2** (analytics) so you can measure everything that follows.
4. **T3** (Canton commercial page) and **T6** (internal links) together, using the content and schema drafts.
5. **T7, T8** (cost guides and AEO intros).
6. **T9, T11, T12** as polish.

Re-pull Search Console in 30 and 60 days and watch the Section 4 targets. Expect the striking-distance terms to move first; the redeploy plus internal links plus the new Canton page are the fastest wins.
