# GA4 reports `header_cta` as session source/medium

Date: 2026-09-03
Status: root cause confirmed, code already fixed, live deploy verified clean

## Summary

GA4 showed `header_cta` as a session source/medium value instead of an event parameter. Cause was
a reserved GA4 parameter name, not UTM tagging. The offending code was already removed on
2026-08-08 in `dbdba8b`, and the live site is confirmed free of it. GA4 is showing historical data
from a 17 day window.

## Root cause (High)

**Why it matters:** every affected click silently rewrote the session's traffic source, so paid,
organic, and referral attribution for that window is wrong, not just the CTA reporting.

`0c3d97d` (2026-07-22) added calls of this shape:

```jsx
// src/components/Header.tsx:151, removed
onClick={() => trackEvent("generate_lead", { source: "header_cta" })}
```

`trackEvent` forwards the object straight through (`src/components/GoogleAnalytics.tsx:39`):

```js
window.gtag("event", name, params);
```

`source` is a reserved GA4 traffic-source parameter. As an event parameter it is not stored as a
custom dimension. GA4 treats it as a manual traffic-source override and rewrites the session
source. With no `medium` supplied, sessions attribute to `header_cta / (not set)`.

Same behavior applies to `medium`, `campaign`, `term`, `content`, `campaign_id`,
`source_platform`, `campaign_source`, `campaign_medium`, `campaign_term`, `campaign_content`.

## Scope: 16 labels, not 7

| Batch | Commit | Mechanism | Labels |
|-------|--------|-----------|--------|
| 2 | `0c3d97d` | direct `trackEvent` on 7 CTAs | `header_cta`, `header_cta_mobile`, `hero_cta`, `mid_page_cta`, `floating_cta`, `houzz_fallback`, ContactForm fallback |
| 3 | `6c24b5d` | `EstimateCtaLink` `source` prop on 9 service hubs | `kitchen_hub_cta`, `bath_hub_cta`, `restoration_hub_cta`, `basements_hub_cta`, `full_home_hub_cta`, `age_in_place_hub_cta`, `decks_hub_cta`, `roofing_hub_cta`, `commercial_hub_cta` |

Affected window: 2026-07-22 through 2026-08-08. Read GA4 from 2026-08-09 onward.

## UTM parameters: none (ruled out)

No `href` in `src/` contains a query string. No `utm_*`, `?source=`, `?medium=`, `?campaign=`,
`gclid`, `fbclid`, or `_gl=` anywhere in `src/`, `scripts/`, `public/`, `docs/`, `out/`, or
`.next/`. The only UTM string in the repo is create-next-app boilerplate at `README.md:34`.

## Live deploy verification: clean

Fetched `https://topflightbuilders.net` and grepped the actual served assets: 12 unique
`_next/static/chunks/*.js` and 16 page HTML files covering `/`, `/contact`, `/services`, `/about`,
`/portfolio`, `/blog`, `/testimonials`, and all 9 service hub pages.

All 16 labels plus `generate_lead` are absent from every JS chunk. Positive control confirms the
correct bundles were searched: `quote_cta_click`, `link_placement`, `cta_text`, `phone_number`,
and the measurement ID `G-2LK6KF7J88` are all present in `0obj2.j5p87mj.js`. A bare `cta_click`
match was a substring of `quote_cta_click`. The only inline `gtag(` in page HTML is the Consent
Mode default block. Live chunk hashes match the local `out/` build, so the deploy is current.

Conclusion: nothing left to fix in the shipped site.

## Inert leftover (Low)

**Why it matters:** it looks like live tracking during code review and invites reintroduction.

All 9 service hub pages still pass `source="..._hub_cta"` to `EstimateCtaLink`
(`src/app/services/*/page.tsx`), and the strings still appear in the served HTML as React props
payload, for example `{"source":"kitchen_hub_cta","className":...}` in the RSC flight data.

`src/components/EstimateCtaLink.tsx` declares `source?: string` but destructures only
`{ href, className, children }`, so the prop is dropped. No `generate_lead` or `trackEvent`
appears in any hub page. Zero GA4 impact. Dead code, safe to remove when those pages are next
touched.

## Current schema (correct)

`src/components/AnalyticsEvents.tsx`, one delegated click listener, 500ms dedupe:

| Event | Parameters | Line |
|-------|------------|------|
| `contact` | `method: "phone"`, `link_placement`, `phone_number` | `AnalyticsEvents.tsx:35` |
| `contact` | `method: "email"`, `link_placement` | `AnalyticsEvents.tsx:44` |
| `quote_cta_click` | `link_placement`, `cta_text` | `AnalyticsEvents.tsx:54` |

`link_placement` is not a reserved name, so it is safe.

## Actions

1. Repo, done: guardrail `npm run check:ga4` fails on any reserved key in a `gtag("event", ...)`
   or `trackEvent(...)` params object under `src/`. See `scripts/check-ga4-params.mjs`.
2. Repo, done: `docs/seo/SEO_CHANGES_REPORT.md` corrected so the removed schema is not restored.
3. GA4, owner: mark `quote_cta_click` as the key event. `generate_lead` no longer fires.
4. GA4, owner: register `link_placement`, `cta_text`, and `method` as custom dimensions. The
   events fire but the parameters stay invisible in reports until registered.
5. GA4, owner: annotate 2026-07-22 through 2026-08-08 so the bad attribution is not read as real.
6. Optional cleanup: drop the dead `source` prop from `EstimateCtaLink` and the 9 hub pages.
