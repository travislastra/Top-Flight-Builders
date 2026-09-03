# NAP and primary category alignment

Date: 2026-09-03
Punch list item 1, highest leverage. Every step is a login to someone else's dashboard, so none of
this can be executed from the repo. This document is the working checklist.

## The problem

Yelp has TopFlight filed under **Painters**. On the non-branded queries where the site already
ranks (positions 4 to 12, 2,038 impressions, zero clicks), the aggregators sit above the first
organic result. A miscategorised Yelp listing is both a lost map-pack slot and a wrong signal to
the AI answers that cite these directories.

## Owner decisions, settled 2026-09-03

**1. Registration shape: service-area business, no street address, on all six listings.**

This matches the site's existing city-only schema in `src/app/layout.tsx`, so the listings and the
structured data agree. Do not add a street address to any directory, and do not add one to the site
schema. The service area is the ten cities already in `areaServed`: Marietta, Canton, Kennesaw,
Acworth, Woodstock, Roswell, Alpharetta, Smyrna, East Cobb, Milton.

*Known friction, accepted.* Yelp and Angi both push for a street address during signup, and some
features may stay locked without one. That trade is accepted. Work around the prompt rather than
supplying an address to clear it.

**2. Missing listings: create fresh on Angi, Apple Business Connect and Bing Places.**

Chosen over auditing for existing unclaimed listings first.

*Important.* All three registration flows surface an existing match as you type the business name
and phone. **If a match appears, claim it. Do not create a duplicate.** A duplicate listing splits
the exact signal this whole exercise is meant to consolidate, and duplicates are far harder to merge
after the fact than to claim up front.

## Canonical values

Read from `src/app/layout.tsx` (the `GeneralContractor` schema block) and `src/lib/reviews.ts`.
These are what the site itself asserts, so every listing must match them.

| Field | Value |
|-------|-------|
| Legal name | `TopFlight Builders LLC` |
| Display name | `TopFlight Builders` |
| Phone | `(404) 369-7129` |
| Phone (E.164) | `+1-404-369-7129` |
| Email | `Admin@TopFlightBuilders.net` |
| Website | `https://topflightbuilders.net` |
| Street address | **none, service-area business** |
| City / State / ZIP | Marietta, GA 30066 |
| Geo | 33.9526, -84.5499 |
| Hours | Mon to Sat, 8:00am to 6:00pm |
| Primary category | **General Contractor** |
| Rating claim | 5.0 from 50 Google reviews |

---

## Yelp (the actual fix)

**Listing:** `yelp.com/biz/topflight-builders-marietta-2`
**Current state:** primary category is **Painters**. Wrong, and this is the single highest-leverage
correction on the punch list.
**Primary category target:** General Contractor.

- [ ] **Change primary category from Painters to General Contractor**
- [ ] Confirm service-area setup, no street address displayed
- [ ] Set service area to the ten `areaServed` cities
- [ ] Name `TopFlight Builders LLC`
- [ ] Phone `(404) 369-7129`
- [ ] Website `https://topflightbuilders.net`
- [ ] Hours Mon to Sat, 8:00am to 6:00pm
- [ ] Expect a prompt for a street address. Decline it. Some features may stay locked; accepted.

---

## Angi (create fresh)

**Listing:** none on record. Not in the site's `sameAs`.
**Current state:** unknown. No claimed listing found.
**Primary category target:** General Contractor.

- [ ] Begin registration at Angi for Business
- [ ] **If an existing TopFlight match surfaces during signup, claim it instead of creating new**
- [ ] Register as a service-area business, no street address
- [ ] Set service area to the ten `areaServed` cities
- [ ] Primary category General Contractor
- [ ] Name `TopFlight Builders LLC`
- [ ] Phone `(404) 369-7129`
- [ ] Email `Admin@TopFlightBuilders.net`
- [ ] Website `https://topflightbuilders.net`
- [ ] Hours Mon to Sat, 8:00am to 6:00pm
- [ ] Expect a push for a street address. Decline it; accepted trade.
- [ ] Record the resulting profile URL for `sameAs`

---

## Houzz (reference example, not a fix)

**Listing:** `houzz.com/professionals/general-contractors/topflight-builders-llc-pfvwus-pf~726210190`
**Current state:** already filed under general contractors. Correct.
**Primary category target:** General Contractor. Already set.

This is the one platform that is already right. Use it as the model for what the other five should
look like when finished. No category change needed.

- [ ] Verify name reads `TopFlight Builders LLC`
- [ ] Verify phone `(404) 369-7129`
- [ ] Verify website `https://topflightbuilders.net`
- [ ] Verify hours Mon to Sat, 8:00am to 6:00pm
- [ ] Verify no street address is displayed
- [ ] Record the profile URL as the reference for the other five

---

## BBB (verify and correct)

**Listing:** `bbb.org/us/ga/marietta/profile/construction-services/topflight-builders-llc-0443-28183084`
**Current state:** filed under construction services. Probably fine, needs confirming that the
specific sub-category reads General Contractor.
**Primary category target:** General Contractor.

- [ ] Confirm sub-category reads General Contractor, not a generic construction-services bucket
- [ ] Confirm name carries the `LLC`
- [ ] Confirm no street address is displayed
- [ ] Phone `(404) 369-7129`
- [ ] Website `https://topflightbuilders.net`
- [ ] Hours Mon to Sat, 8:00am to 6:00pm

---

## Apple Business Connect (create fresh)

**Listing:** none on record. Not in the site's `sameAs`.
**Current state:** unknown. No claimed listing found.
**Primary category target:** General Contractor.

- [ ] Register at Apple Business Connect
- [ ] **If an existing TopFlight match surfaces during registration, claim it instead of creating new**
- [ ] Register as a service-area business, no street address
- [ ] Set service area to the ten `areaServed` cities
- [ ] Primary category General Contractor
- [ ] Name `TopFlight Builders LLC`
- [ ] Phone `(404) 369-7129`
- [ ] Website `https://topflightbuilders.net`
- [ ] Hours Mon to Sat, 8:00am to 6:00pm
- [ ] Record the resulting Apple Maps place URL for `sameAs`

---

## Bing Places (create fresh)

**Listing:** none on record. Not in the site's `sameAs`.
**Current state:** unknown. No claimed listing found.
**Primary category target:** General Contractor.

- [ ] Register at Bing Places for Business
- [ ] **If an existing TopFlight match surfaces during registration, claim it instead of creating new**
- [ ] Consider the import-from-Google-Business-Profile path, which carries the existing Google data
      across and reduces the chance of a mismatch
- [ ] Register as a service-area business, no street address
- [ ] Set service area to the ten `areaServed` cities
- [ ] Primary category General Contractor
- [ ] Name `TopFlight Builders LLC`
- [ ] Phone `(404) 369-7129`
- [ ] Website `https://topflightbuilders.net`
- [ ] Hours Mon to Sat, 8:00am to 6:00pm
- [ ] Record the resulting profile URL for `sameAs`

---

## Consistency rules

1. Name is `TopFlight Builders LLC` everywhere the field accepts a legal name. Do not mix in
   `Top Flight Builders` (spaced) or drop the `LLC` on some and not others.
2. Phone renders as `(404) 369-7129` everywhere. One format, no exceptions.
3. Website is `https://topflightbuilders.net`, https and non-www. All other forms 301 to it
   (verified Sep 3), but each listing should carry the canonical form directly, not a redirect.
4. Primary category is General Contractor on all six. Secondary categories can vary by what each
   platform offers; the primary cannot.
5. Hours identical on all six.
6. No street address on any of the six. Service-area registration throughout.

## After the edits

Re-check the aggregator listings against the same queries in about two weeks. The read is whether
non-branded clicks move off six, not whether impressions or average position change. Both of those
will move for unrelated reasons and neither answers the question.

## Follow-on repo change

The `sameAs` array in `src/app/layout.tsx` currently lists Facebook, Instagram, TikTok, Houzz, Yelp,
BBB and two Google links. Once the Angi, Apple Business Connect and Bing Places listings exist, add
their URLs to `sameAs`. Small change, reinforces the same signal. Blocked until the three listings
are created and their URLs are known.
