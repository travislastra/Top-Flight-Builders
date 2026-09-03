<!-- Snapshot of the live memory file at
     ~/.claude/projects/-Users-travisl-Top-Flight-Builders/memory/
     Committed for backup and review. The memory system reads the original,
     not this copy, so re-sync after editing either one. -->

---
name: topflight-ga4-tracking
description: TopFlight Builders GA4 event schema, key event policy, and the three closed tracking bugs
metadata:
  type: project
---

Measurement ID `G-2LK6KF7J88`. Consent-gated: `GoogleAnalytics.tsx` only loads GA after the banner
is accepted, so declining visitors are invisible. GA4 collected nothing before 2026-08-09.

**Current schema.** `src/components/AnalyticsEvents.tsx` is the only emitter, one delegated click
listener with a 500ms dedupe. Two events, and only two:
- `contact` with `method` ("phone" or "email"), `link_placement`, and `phone_number` on phone
- `quote_cta_click` with `link_placement` and `cta_text`

**Key event policy: `contact` is the only key event.** `generate_lead` and `quote_cta_click` have
both been un-starred. `quote_cta_click` fires on any click of a `/contact` link, so it is intent,
not a lead. Do not re-star it; the repo docs briefly recommended exactly that and were corrected in
commit `da1040d`. All four custom dimensions are registered: `link_placement`, `cta_text`, `method`,
`phone_number`.

**`contact` counts phone taps, not connected calls.** VOXO logs are authoritative. Current honest
read is two taps, zero confirmed calls.

**Closed 2026-09-03, do not re-investigate:**
- *Reserved-param bug.* `source:` is a reserved GA4 traffic-source parameter; sent as an event param
  GA4 rewrites the session source. Shipped `0c3d97d` (Jul 22), extended to 9 more call sites via
  `EstimateCtaLink` (`6c24b5d`), **16 labels total, not 7**. Removed `dbdba8b` (Aug 8). Live bundle
  verified clean Sep 3 across all 12 served chunks. Guardrail `npm run check:ga4`
  (`scripts/check-ga4-params.mjs`) fails on any reserved key including ES6 shorthand.
  Reporting caveat: for Jul 22 to Aug 8 treat sessions on any of the 16 CTA labels as unattributed.
  Run all reports from Aug 9 forward.
- *http/https split.* http, http+www and https+www all 301 in one hop to https non-www. Combining
  the rows, the homepage's real quarter is 1,867 impressions and 102 clicks.
- *`cta_click`.* Not in the current codebase. Shipped `ff3790d`, removed `dbdba8b`. No live
  double-count and nothing to change in the repo; only a stale GA4 event definition remains.

**Inert leftover, not a bug.** The 9 service hub pages still pass `source="*_hub_cta"` to
`EstimateCtaLink`, which ignores the prop. The strings appear in the served RSC payload but never
reach `gtag`. A naive grep of live HTML will match them. Do not mistake this for a regression.

Related: [[topflight-search-performance-q3-2026]]
