# TopFlight Builders: Schema / JSON-LD Patches

**Context:** The repo already implements strong structured data. This file lists only the **additions and fixes**, plus new-page schema for the commercial and cost-guide pages. Do not rebuild what exists.

## What already exists (verify, do not duplicate)

- `GeneralContractor` LocalBusiness in `src/app/layout.tsx` with `geo`, `areaServed` (10 cities), `openingHoursSpecification`, `aggregateRating` (5.0 / 50), and `sameAs` (Facebook, Instagram, Houzz, TikTok, Yelp, BBB, Google Maps).
- `FAQPage` schema emitted by `src/components/FAQSection.tsx`.
- `Service` schema on the service hub pages via `src/components/ServiceSchema.tsx`.
- `BreadcrumbList` via `src/components/BreadcrumbSchema.tsx`.

---

## Patch 1: add streetAddress to LocalBusiness (Roadmap T4)

In `src/app/layout.tsx`, inside `localBusinessSchema.address`, add the street line. Confirm the public address with the owner before shipping.

```js
"address": {
  "@type": "PostalAddress",
  "streetAddress": "2489 Lakebrooke Dr",   // ADD THIS LINE (confirm with owner)
  "addressLocality": "Marietta",
  "addressRegion": "GA",
  "postalCode": "30066",
  "addressCountry": "US",
},
```

Keep `geo.latitude/longitude` as-is (33.9526, -84.5499) unless the confirmed street address maps elsewhere; if the address changes, update the coordinates to match.

---

## Patch 2: keep aggregateRating truthful (Roadmap T9)

`aggregateRating.reviewCount` is hardcoded to "50". Drive it from a single source so it never drifts and never overstates. If `reviews.ts` holds the displayed reviews:

```js
import { reviews } from "@/lib/reviews";
// ...
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": String(reviews.length),   // or a REVIEW_COUNT constant kept in sync with Google
  "bestRating": "5",
  "worstRating": "1",
},
```

Only mark up reviews that are actually shown on the site (they are, on the homepage and testimonials page), so this stays within Google's guidelines.

---

## Patch 3: Service schema on city-level service pages (Roadmap T5)

`ServiceSchema` appears on hub pages but not on the city-level pages rendered by `ServiceCityPage.tsx`. Add it there so each city-service page (the striking-distance targets) emits `Service` with the right `areaServed`.

Pattern to add inside `ServiceCityPage.tsx` (adapt prop names to the component's actual props):

```jsx
<ServiceSchema
  serviceType={service.name}          // e.g. "Kitchen Remodeling"
  areaServed={city.displayName}        // e.g. "Acworth, GA"
  url={`https://topflightbuilders.net/services/${service.slug}/${city.slug}`}
/>
```

Confirm `ServiceSchema.tsx` accepts an `areaServed`/`url`; if not, extend it. Reference JSON-LD it should output:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kitchen Remodeling",
  "provider": { "@id": "https://topflightbuilders.net/#business" },
  "areaServed": { "@type": "City", "name": "Acworth" },
  "url": "https://topflightbuilders.net/services/kitchen-remodeling/acworth-ga"
}
```

The `provider.@id` must match the `@id` on the LocalBusiness node in `layout.tsx` (`https://topflightbuilders.net/#business`) so the graph links.

---

## Patch 4: schema for the new commercial city pages (Roadmap T3)

Each `/services/commercial/[city]` page should emit Breadcrumb + Service + FAQ (via the existing components). Service block reference:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Construction and Tenant Improvement",
  "provider": { "@id": "https://topflightbuilders.net/#business" },
  "areaServed": { "@type": "City", "name": "Canton" },
  "url": "https://topflightbuilders.net/services/commercial/canton-ga",
  "description": "Tenant improvements, interior buildouts, and light commercial renovation for offices, retail, and restaurants in Canton and Cherokee County, GA."
}
```

FAQ content for these pages is in `TopFlight_New_Content_Drafts.md`; pass it to `FAQSection` and it will emit valid `FAQPage` automatically.

---

## Patch 5: schema for the cost-guide pages (Roadmap T7)

Cost guides are informational, so use `Article` (or `WebPage`) plus `FAQPage`. If you want a rich cost answer, you can add a `Question`/`Answer` in the FAQ that states the range. Reference `Article` block:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does a Kitchen Remodel Cost in Marietta and Greater Atlanta? (2026)",
  "author": { "@type": "Organization", "name": "TopFlight Builders LLC" },
  "publisher": { "@id": "https://topflightbuilders.net/#business" },
  "datePublished": "2026-07-22",
  "dateModified": "2026-07-22",
  "mainEntityOfPage": "https://topflightbuilders.net/blog/kitchen-remodel-cost-atlanta-2026"
}
```

Do not use `Product`/`Offer` schema for these ranges; that risks a Google structured-data violation for a service business.

---

## Validation (run after every schema change)

1. Build: `npm run build`, then open the relevant file in `out/` and confirm the `<script type="application/ld+json">` block is present and valid JSON.
2. Paste the built page's HTML into Google's Rich Results Test and the Schema.org validator; fix any "missing field" or "parse" errors.
3. Confirm all `provider.@id` references resolve to the single LocalBusiness `@id` so the entity graph is connected.
4. After redeploy, request indexing / re-crawl in Search Console for the changed URLs.
