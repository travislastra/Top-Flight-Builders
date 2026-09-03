<!-- Snapshot of the live memory file at
     ~/.claude/projects/-Users-travisl-Top-Flight-Builders/memory/
     Committed for backup and review. The memory system reads the original,
     not this copy, so re-sync after editing either one. -->

---
name: topflight-search-performance-q3-2026
description: TopFlight Builders Q3 2026 search baseline (Jun 18 to Sep 1) and the six open punch-list items in priority order
metadata:
  type: project
---

Baseline completed 2026-09-03 from Search Console web + AI-features exports, Business Profile and
GA4 screenshots. Living report is the artifact **TopFlight Search Punch List**,
https://claude.ai/code/artifact/8ed68ffe-10bc-4173-85ae-893f7ff871e1 (republish to that URL, never
create a new one).

**The core finding.** Non-branded search delivered **6 clicks** across 982 queries. 51 of the 57
clicks attributed to named queries are people typing the company name. 37 non-branded queries sit
at position 4 to 12 with 2,038 impressions and zero clicks. The problem is off-site (aggregators
and map pack outrank the site on its own queries), not on-page.

**Channel quality, 36 sessions on record.** Organic Search 7 sessions / 71% engagement / 36.6s,
the only channel behaving like demand. Organic Social 10 sessions / 30% / 4.3s / zero key events.
Direct 13 / 23% / 4.8s. One AI Assistant session engaged 169s.

**Open items, priority order as set by Travis on 2026-09-03:**
1. Yelp miscategorised as Painters, fix to General Contractor, then align NAP + primary category
   across Yelp, Angi, Houzz, BBB, Apple Maps, Bing Places. Spec written at
   `docs/ai/nap-category-alignment-2026-09-03.md`. Blocked on a street address (repo is city-only)
   and on unknown Angi/Apple/Bing listing URLs.
2. One consolidated page for basement finishing in East Cobb (5 query variants, 384 impressions,
   position ~10, 0 clicks). Blocked on real photos, cost ranges, Cobb County permit detail.
3. Restoration its own pages. "home restoration near me" ranks 6.5 with 205 impressions while
   `/services/restoration` drew 4 impressions all quarter. Blocked on the same kind of real content.
4. Rewrite titles/metas for the 37 zero-click queries. Only 16 are in the artifact; the other 21
   need pulling from the Search Console export.
5. `cta_click` duplicate. Answered in code (see [[topflight-ga4-tracking]]), GA4 confirmation left.
6. VOXO August call logs reconciled against GA4 `contact` events. No VOXO access from this session.

**Closed, do not re-investigate:** http/https split (clean single-hop 301s), the `header_cta`
reserved-param bug, GA4 key events and custom dimensions. Details in [[topflight-ga4-tracking]].

Reporting rule for this account lives in [[topflight-reporting-lead-metric]].
