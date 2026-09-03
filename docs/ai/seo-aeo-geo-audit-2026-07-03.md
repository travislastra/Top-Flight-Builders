# SEO / AEO / GEO / AIO Audit — TopFlight Builders
**Date:** 2026-07-03  
**Site:** topflightbuilders.net  
**Pages audited:** 162 static pages (Next.js export, GitHub Pages → custom domain)

---

## Executive Summary

The site has a strong technical foundation — correct schema types, 162 indexed pages, WebP image pipeline, canonical URLs, and a 30-post blog. The primary gaps are all **content-layer**: service pages open with marketing copy instead of direct answers (violating AEO's 50-word rule), matrix pages lack FAQ schema entirely, and blog posts have no FAQ sections. Fixing these three items would materially improve AI Overview inclusion and LLM citation likelihood.

---

## What's Working Well ✅

| Area | Detail |
|------|--------|
| FAQPage JSON-LD | On all 9 service pillar pages + all 10 city/service-area pages |
| BlogPosting schema | On all 30 blog posts with author, publisher, datePublished |
| LocalBusiness schema | In global layout with aggregateRating (5.0 / 64 reviews) |
| BreadcrumbList schema | On service, city, blog, and project pages |
| ServiceSchema | On all service pillar pages |
| Image pipeline | WebP + srcset (480w/800w/1200w) with lazy loading |
| Internal linking | ServiceAreaLinks + ServiceBlogLinks components on every service page |
| Matrix coverage | 72 service×city pages, zero orphans |
| Blog volume | 30 posts vs 23-post plan target |
| Sitemap | /sitemap.xml submitted to Search Console |
| Canonical URLs | All 162 pages have correct canonical pointing to topflightbuilders.net |

---

## Findings by Severity

### 🔴 Critical (Directly Limits AEO / AI Overview Inclusion)

#### 1. Service pages violate the first-50-words AEO rule
**Files:** All 9 service pillar pages (`/services/[service]/page.tsx`)  
**Issue:** Every service page opens with marketing copy rather than a direct answer. Example from kitchen page:  
> *"Whether you want a sleek modern kitchen or a warm, traditional space, our team works with you from concept to completion."*  
This does not answer "What is kitchen remodeling in Atlanta?" or "How much does kitchen remodeling cost?" — the implied queries someone lands on this page with. AI Overviews extract from the first 50–80 words; if there's no direct answer there, the page is skipped as a source.  
**Fix:** Rewrite the first paragraph of each service page to open with a 1–2 sentence definition + scope statement. Pattern: *"[Service] in [City] means [what it is + what's included]. TopFlight Builders handles [specific scope] for homeowners across [area]."*

#### 2. Matrix pages have no FAQ schema
**Files:** `src/components/ServiceCityPage.tsx`  
**Issue:** The ServiceCityPage template includes LocalBusiness schema and BreadcrumbList but no FAQSection component and no FAQPage JSON-LD. This affects all 72 service×city matrix pages — the hyper-local "kitchen remodeling Kennesaw GA" pages most likely to rank for high-intent queries.  
**Fix:** Add a `FAQSection` with 4–5 city-service specific questions to the ServiceCityPage template. One `faqs` prop passed from `service-city-data.ts` per service type is sufficient — questions don't need to be fully unique per city.

#### 3. Blog posts have no FAQ sections
**Files:** `src/lib/blog-posts.ts` (content strings), `src/app/blog/[slug]/page.tsx`  
**Issue:** Blog posts have BlogPosting schema but no FAQPage JSON-LD. The blog content is stored as raw HTML strings with no FAQ block. AI Overviews heavily favor FAQ schema; blog posts without it compete only on prose quality.  
**Fix:** Add a `faqs` array to the `BlogPost` interface and add a `FAQSection` at the bottom of each blog post. Priority: the 10 highest-traffic posts first (cost guides, vs. comparisons, how-to posts).

---

### 🟡 High (Meaningful GEO / LLM Citation Gap)

#### 4. No "X is Y" definition sentences on service pages
**Issue:** None of the service pages contain a machine-extractable definition sentence. LLMs extract "X is Y" constructions preferentially. A page that says "Kitchen remodeling is the process of updating or reconfiguring a kitchen's layout, cabinetry, countertops, and fixtures to improve function and aesthetics" is far more citation-worthy than one that doesn't define the service at all.  
**Fix:** Add one definition sentence as the very first sentence of the body content on each service page. This is a small copy change, not a structural change.

#### 5. Blog posts missing "Bottom Line" / "Verdict" sections
**Issue:** None of the 30 blog posts end with a synthesis summary. Perplexity and ChatGPT specifically favor content with a clear "Bottom Line" or "Verdict" section at the end. Without it, the post is less likely to be extracted as a complete answer.  
**Fix:** Add a 2–4 sentence "Bottom Line" block at the end of each blog post content string. Can be added as a styled `<div>` in the HTML content.

#### 6. Entity name inconsistency in blog schema
**File:** `src/app/blog/[slug]/page.tsx:71`  
**Issue:** Blog posts use `"Top Flight Builders Editorial Team"` (with space) as the author organization name, while the rest of the site uses `"TopFlight Builders"` (no space). LLMs build entity graphs based on consistent naming. This inconsistency weakens entity association.  
**Fix:** Change line 71 to `"TopFlight Builders"` to match all other schema and page content.

#### 7. No comparison pages
**Issue:** The Obsidian playbook identifies "X vs competitor" and "X vs Y" pages as high-intent ranking opportunities that also feed GEO. TopFlight has none. Example targets: "TopFlight Builders vs HomeAdvisor contractors Atlanta," "general contractor vs design-build Atlanta," "bathroom renovation cost Marietta vs national average."  
**Fix:** Start with 1–2 informational comparison posts (not brand attack pages). These compound over time.

---

### 🟠 Medium (Technical SEO / Schema Completeness)

#### 8. dateModified equals datePublished on all blog posts
**File:** `src/app/blog/[slug]/page.tsx:67`  
**Issue:** `dateModified: isoDate` is set equal to `datePublished`. Google's freshness signals favor pages with a recent `dateModified`. As content is updated, this should reflect the actual modification date.  
**Fix:** Add an optional `updatedDate` field to the `BlogPost` interface. Fall back to `date` if not set.

#### 9. No HowTo schema on process posts
**Issue:** Posts like "What to Expect During a Full Home Remodel: A Week-by-Week Guide" are natural candidates for `HowTo` JSON-LD. This schema type is directly surfaced in Google AI Overviews for "how to" queries.  
**Fix:** Add optional `howToSteps` to the BlogPost interface; render HowTo JSON-LD when present.

#### 10. About page missing E-E-A-T signals
**Issue:** Contractor license number and team headshot are not yet added. Google's E-E-A-T evaluation for local contractors heavily weights named individuals with verifiable credentials.  
**Fix:** Add Ilian's license number and headshot when available — this is already flagged as pending.

---

### 🟢 Low (Polish / Future)

#### 11. No cost calculator / interactive tool
**Issue:** The Obsidian playbook notes that calculator pages earn backlinks and trigger lead capture. A "Kitchen Remodel Cost Estimator" or "Bathroom Remodel ROI Calculator" would be the highest-leverage new page type.

#### 12. No Google Business Profile URL update confirmed
**Issue:** GBP website field may still point to the old Squarespace URL. Inconsistent NAP signals across GBP and the site hurt local pack rankings.  
**Fix:** Update GBP website field to `https://topflightbuilders.net`.

---

## Priority Action Plan

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| 1 | Rewrite first paragraphs on 9 service pages (AEO rule) | Medium | 🔴 Critical |
| 2 | Add FAQSection to ServiceCityPage template (72 pages) | Low | 🔴 Critical |
| 3 | Add FAQ blocks to top 10 blog posts | Medium | 🔴 Critical |
| 4 | Add definition sentences to service pages | Low | 🟡 High |
| 5 | Add "Bottom Line" to all blog posts | Medium | 🟡 High |
| 6 | Fix entity name in blog schema | Low (1 line) | 🟡 High |
| 7 | Write 1–2 comparison blog posts | High | 🟡 High |
| 8 | Add updatedDate to BlogPost interface | Low | 🟠 Medium |
| 9 | Add Ilian's license + headshot to About | Awaiting content | 🟠 Medium |
| 10 | Update GBP website URL | Low (browser) | 🟠 Medium |

---

## Schema Coverage Map (Current State)

| Page Type | LocalBusiness | FAQPage | BreadcrumbList | Service | BlogPosting |
|-----------|:---:|:---:|:---:|:---:|:---:|
| Homepage | ✅ | ❌ | ❌ | ❌ | ❌ |
| Service pillar (9) | ❌ | ✅ | ✅ | ✅ | ❌ |
| City pages (10) | ❌ | ✅ | ✅ | ❌ | ❌ |
| Matrix pages (72) | ✅ | ❌ | ✅ | ❌ | ❌ |
| Blog posts (30) | ❌ | ❌ | ✅ | ❌ | ✅ |
| Project pages | ❌ | ❌ | ✅ | ❌ | ❌ |
| About / Contact | ❌ | ❌ | ✅ | ❌ | ❌ |
