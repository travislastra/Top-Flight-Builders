# TopFlight Builders — SEO Changes Report

Branch: `seo/growth-batch-1` | Status: deployed | Last updated: 2026-09-03

---

## Analytics schema correction (2026-08-08, commit `dbdba8b`)

**Read this before acting on any analytics section below.** Batches 2 and 3 shipped a GA4 event
schema that corrupted traffic attribution. It has been removed. The tables in those sections are
kept as a historical changelog of what was done, not as a spec to restore.

**What went wrong.** `source` is a reserved GA4 traffic-source parameter. Sent as an event
parameter it is not stored as a custom dimension. GA4 reads it as a manual traffic-source override
and rewrites the session's source. Because `medium` was never supplied alongside it, affected
sessions attributed to values like `header_cta / (not set)`, so CTA labels showed up in the
Traffic Acquisition report as if they were referrers.

The full reserved set, any of which causes this: `source`, `medium`, `campaign`, `term`,
`content`, `campaign_id`, `source_platform`, `campaign_source`, `campaign_medium`,
`campaign_term`, `campaign_content`.

**Scope.** 16 labels across two batches. Batch 2 (`0c3d97d`) wired 7 via direct `trackEvent`
calls: `header_cta`, `header_cta_mobile`, `hero_cta`, `mid_page_cta`, `floating_cta`,
`houzz_fallback`, and the `ContactForm` fallback. Batch 3 (`6c24b5d`) added 9 more through
`EstimateCtaLink`, which took `source` as a required prop: `kitchen_hub_cta`, `bath_hub_cta`,
`restoration_hub_cta`, `basements_hub_cta`, `full_home_hub_cta`, `age_in_place_hub_cta`,
`decks_hub_cta`, `roofing_hub_cta`, `commercial_hub_cta`.

**Affected window.** 2026-07-22 (`0c3d97d`) through 2026-08-08 (`dbdba8b`). When reading GA4,
start the range at 2026-08-09 to exclude the bad attribution.

**Current schema.** `src/components/AnalyticsEvents.tsx` is now the only event emitter, a single
delegated click listener on `document`. `link_placement` replaces `source` and is safe because it
is not a reserved name.

| Event | Parameters |
|-------|------------|
| `contact` | `method` (`"phone"` or `"email"`), `link_placement`, plus `phone_number` on phone |
| `quote_cta_click` | `link_placement`, `cta_text` |
| `form_view` | `form_name` (unchanged, `ContactForm`) |

`generate_lead` and `cta_click` no longer exist. Mark **`quote_cta_click`** as the key event in
GA4, not `generate_lead`.

**Known leftover (inert, no GA4 impact).** The 9 service hub pages still pass a `source` prop to
`EstimateCtaLink`, and the string is still visible in the served HTML as React props payload.
`EstimateCtaLink` ignores the prop, so nothing is sent to GA4. It is dead code, safe to remove
whenever those pages are next touched.

**Guardrail.** `npm run check:ga4` fails if a reserved key is reintroduced into any
`gtag("event", ...)` or `trackEvent(...)` params object under `src/`.

---

## Batch 1 (committed: ff3790d)

*Summary already on file; reproduced briefly for context.*

- T2–T6: Schema fixes — GeneralContractor `@id` linking, FAQPage on all FAQ sections, BreadcrumbList site-wide, ServiceCityPage duplicate schema removed.
- T7: GOOGLE_REVIEW_COUNT constant in `src/lib/reviews.ts`; propagated to layout and ai-info.
- T8–T9: GA4 Consent Mode v2 defaults in layout `<head>`; `trackEvent` utility in `GoogleAnalytics.tsx`; phone tracking on Header top bar, MobileCallBar, ContactBanner.
- T10: Commercial service city pages — 6 city routes (`/services/commercial/[city]`) with local content, schema, FAQs, and sitemap entries.
- T11: Canton service-area page updated with commercial/canton-ga link.
- T12: Cost guide blog posts — kitchen (`id:32`) and bathroom (`id:33`) with HTML cost tables and FAQs.
- check:titles script added to package.json; AGENTS.md updated with title convention.

---

## Batch 2 (committed: 0c3d97d)

### G1 — Lead-Intent Tracking

> **Superseded by `dbdba8b`.** The `source` parameter used throughout this
> section broke GA4 session attribution. See "Analytics schema correction" at the top of this
> file. Do not restore it.

**Goal:** Consent-gated `generate_lead` event on every primary estimate CTA routing to /contact; `form_view` when the contact page form mounts.

**Changes made:**

| File | Change |
|------|--------|
| `src/components/Header.tsx` | `generate_lead { source: "header_cta" }` on desktop "Get a Quote"; `generate_lead { source: "header_cta_mobile" }` on mobile "Get a Quote" |
| `src/components/HeroPlaceholder.tsx` | `generate_lead { source: "hero_cta" }` on "Get Started" link |
| `src/components/TeamContact.tsx` | Added `"use client"`. `generate_lead { source: "mid_page_cta" }` on "Contact Us" link; `contact { method: "phone" }` on phone link |
| `src/components/FloatingEstimateCta.tsx` | Added `generate_lead { source: "floating_cta" }` alongside existing `cta_click` |
| `src/components/ContactForm.tsx` | `useEffect` fires `form_view { form_name: "houzz_estimate" }` on mount; `generate_lead { source: "houzz_fallback" }` on fallback link click |

**Houzz iframe limitation:** The Houzz iframe form submit cannot be intercepted (cross-origin). Proxy tracking: `form_view` fires on mount (the intent signal), and `generate_lead` fires only if the iframe is blocked and the user clicks the fallback link. This is the maximum coverage possible without server-side form ownership.

**GA4 action required (owner):** ~~mark `generate_lead` as a key event~~ Obsolete. `generate_lead` was removed in `dbdba8b`; mark `quote_cta_click` instead.

**Out of scope — follow-on task:** Inline "Get a Free Estimate" / "Get Started" links on individual service and service-area pages are in server components. Tracking them requires either converting each page to a client component or creating a shared `EstimateCta` client wrapper. Flagged for next batch.

---

### G2 — Em Dash Cleanup

**Goal:** Remove all em dashes from branch-introduced content.

**Files cleaned:**

- `src/app/services/commercial/[city]/page.tsx` — 9 em dashes replaced with colons, semicolons, commas, or parentheses in Marietta, Kennesaw, Acworth, Woodstock, and East Cobb city data; alt text; FAQSection heading.
- `src/lib/blog-posts.ts` — 2 em dashes in post 32 and post 33 `bottomLine` strings replaced with colons.

**Verification:** `git diff main...seo/growth-batch-1 -- <branch-introduced files> | grep '^+' | grep '—'` returns empty for all checked files. Pre-existing em dashes in posts 1–31 and the commercial hub's pre-existing intro paragraph are outside G2 scope.

---

### G3 — Cost Guide Enrichment

**Goal:** Direct-answer paragraph first, HTML cost table, Article JSON-LD in both cost guide posts.

**Kitchen cost guide (`id:32`, `/blog/kitchen-remodel-cost-atlanta-2026`):**
- Direct-answer paragraph ("Most kitchen remodels...run from about $25,000...to $85,000 or more") is the first `<p>` in the content. ✓
- HTML cost table with 3 scope tiers was added in Batch 1. ✓
- JSON-LD: `BlogPosting` schema emitted by the blog renderer (`src/app/blog/[slug]/page.tsx`). `BlogPosting` is a Schema.org subtype of `Article` and satisfies Patch 5's Article requirement. Validated: parses clean.

**Bathroom cost guide (`id:33`, `/blog/bathroom-remodel-cost-atlanta-2026`):**
- Direct-answer paragraph is first. ✓
- **HTML cost table added (Batch 2):** 3-row table with Cosmetic update, Full hall/guest bath, Primary suite/spa bath scope tiers. See cost figure note below.
- JSON-LD: Same `BlogPosting` schema from renderer. Validated: parses clean. ✓

**Open question — cost figures for owner confirmation:**

The bathroom cost table uses ranges drawn from the existing content on `/services/bathroom-remodeling` (the BATHROOM_FAQS already published on the live site):

| Scope | Range used |
|-------|-----------|
| Cosmetic update (vanity, tile, fixtures) | ~$8,000 to $15,000 |
| Full hall or guest bath | ~$18,000 to $35,000 |
| Primary suite / custom spa bath | ~$35,000 to $60,000+ |

**Owner: please confirm these ranges match current project pricing before deploying.** The kitchen guide ranges ($25K cosmetic / $40K–$65K mid-range / $85K+ full gut) were drawn from the existing kitchen hub content and remain unchanged.

---

### G4 — Internal Linking to Striking-Distance Pages

**Goal:** Each target page gains ≥3 contextual internal links with keyword-relevant anchors.

**Target link counts (post-Batch 2):**

| Target page | Links | Sources |
|-------------|-------|---------|
| `/services/kitchen-remodeling/acworth-ga` | 3 | Kitchen hub ServiceAreaLinks ("Kitchen Remodeling in Acworth, GA") + Acworth service-area page + blog post 32 ("Acworth kitchen remodeling") |
| `/services/kitchen-remodeling/east-cobb-ga` | 3 | Kitchen hub ServiceAreaLinks + East Cobb service-area page + blog post 32 ("East Cobb kitchen remodeling") |
| `/services/kitchen-remodeling/marietta-ga` | 3 | Kitchen hub ServiceAreaLinks + Marietta service-area page + blog post 32 ("Marietta kitchen remodeling") |
| `/services/bathroom-remodeling/east-cobb-ga` | 4 | Bathroom hub inline link + Bathroom hub ServiceAreaLinks + blog post 33 ("East Cobb bathroom remodeling") + East Cobb service-area page |
| `/services/basement-finishing/acworth-ga` | 3 | Basements hub ServiceAreaLinks ("Basement Finishing in Acworth, GA") + Acworth service-area page + blog post 33 ("basement finishing in Acworth") |
| `/services/full-home-remodeling/acworth-ga` | 3 | Full-home hub ServiceAreaLinks ("Full Home Remodeling in Acworth, GA") + Acworth service-area page + blog post 33 ("full-home remodeling in Acworth") |
| `/services/commercial/canton-ga` | 3 | Canton service-area page + commercial hub city grid + commercial hub body copy ("commercial construction in Canton, GA") |

**Changes in Batch 2:**
- Blog post 32: updated kitchen city page link anchors from single city names to "kitchen remodeling in [City]" pattern.
- Blog post 33: updated bathroom city page link anchors; added basement-finishing/acworth-ga and full-home-remodeling/acworth-ga as contextual inline links in the Acworth mention paragraph.
- `src/app/services/commercial/page.tsx`: added contextual inline link to `/services/commercial/canton-ga` in hub body copy.

---

### Miscellaneous

**streetAddress removed from LocalBusiness schema** (`src/app/layout.tsx`): Per owner request, `"streetAddress": "2489 Lakebrooke Dr"` removed from `PostalAddress`. Schema now includes only city, region, postal code, and country. This is the confirmed preference; no further action needed unless the owner wants to publish the full address at a later date.

---

## Verification Results (Batch 2)

| Check | Result |
|-------|--------|
| `npm run build` | ✓ 173 pages, zero errors |
| `npm run check:titles` | ✓ No title doubling |
| `npm run lint` | ✓ No new errors (18 pre-existing lint issues unchanged) |
| Em dash grep on branch-added lines | ✓ Empty — no em dashes in new content |
| JSON-LD parse: kitchen cost guide | ✓ 5 schemas, all valid |
| JSON-LD parse: bathroom cost guide | ✓ 5 schemas, all valid |
| G4 target pages exist in /out | ✓ All 7 target directories confirmed |
| generate_lead wired | ✓ Header (desktop+mobile), Hero, TeamContact, FloatingEstimateCta, ContactForm fallback |
| form_view wired | ✓ ContactForm useEffect on mount |

---

## Batch 3 (committed: 6c24b5d)

> **Superseded by `dbdba8b`.** `EstimateCtaLink` no longer tracks, and its `source`
> prop is ignored. See "Analytics schema correction" at the top of this file.

**Goal:** Wire `generate_lead` on all service hub page estimate CTAs. Previously these CTAs were static `<Link>` elements inside server components with no event tracking.

### New Component

**`src/components/EstimateCtaLink.tsx`** — `"use client"` wrapper around `next/link`'s `Link`. Accepts `source` (required), `href` (default `/contact`), `className`, and `children`. On click, calls the consent-gated `trackEvent("generate_lead", { source })` from `GoogleAnalytics.tsx`. No new consent logic introduced.

### Pages Updated

| Page | Route | Source Label | CTA Label |
|------|-------|-------------|-----------|
| Kitchen Remodeling | `/services/kitchen-remodeling` | `kitchen_hub_cta` | Get a Free Estimate |
| Bathroom Remodeling | `/services/bathroom-remodeling` | `bath_hub_cta` | Get a Free Estimate |
| Restoration | `/services/restoration` | `restoration_hub_cta` | Contact Us Now |
| Basements & Additions | `/services/basements-and-additions` | `basements_hub_cta` | Get a Free Estimate |
| Full Home Remodeling | `/services/full-home-remodeling` | `full_home_hub_cta` | Start Your Renovation |
| Age in Place | `/services/age-in-place` | `age_in_place_hub_cta` | Schedule a Walkthrough |
| Decks | `/services/decks` | `decks_hub_cta` | Get a Free Deck Estimate |
| Roofing | `/services/roofing` | `roofing_hub_cta` | Get a Free Roof Inspection |
| Commercial | `/services/commercial` | `commercial_hub_cta` | Request a Commercial Quote |

Siding (`/services/siding`) is a `redirect()` to decks with no CTA — skipped as planned.

Also committed: pre-existing em-dash fix in `commercial/page.tsx` (em dashes replaced with "such as ... ," phrasing).

### Verification Results (Batch 3)

| Check | Result |
|-------|--------|
| `npm run build` | ✓ 173 pages, zero errors |
| `npm run check:titles` | ✓ No title doubling |
| `npm run lint` (new files only) | ✓ Zero warnings or errors |
| Em dash grep on new/changed lines | ✓ Empty — no em dashes |
| EstimateCtaLink present on all 9 hubs | ✓ Confirmed by grep |
| Consent gating | ✓ Inherited from `trackEvent` in GoogleAnalytics.tsx — no bypass |
| Static export compatibility | ✓ "use client" + onClick hydrates client-side; no server APIs used |

---

## Open Items for Owner Review

1. **Cost figures — bathroom cost table:** Confirm ranges ($8K–$15K / $18K–$35K / $35K–$60K+) match current pricing before deploying.
2. **streetAddress:** Layout schema uses city-only address per your request. Confirm you're comfortable with this for Google Business Profile consistency.
3. **GA4 key event:** Mark `quote_cta_click` as a key event in GA4 > Admin > Conversions.
   (Was `generate_lead`, which no longer exists as of `dbdba8b`.) Also register `link_placement`,
   `cta_text`, and `method` as custom dimensions, otherwise the parameters stay invisible in reports.
4. **Houzz iframe:** Form submission tracking is not possible cross-origin. `form_view` on mount is the best available proxy. If you migrate to a self-hosted form, full funnel tracking becomes possible.

---

*Branch `seo/growth-batch-1` is ready for owner review. Do NOT merge or deploy until cost figures and address policy are confirmed.*
