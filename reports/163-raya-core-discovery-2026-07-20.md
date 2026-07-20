# Evaluation: Raya — Senior Backend Engineer, Core Discovery

**Date:** 2026-07-20
**Archetype:** Senior Backend Engineer (consumer product, geospatial/search flavor)
**Score:** 2.8/5
**URL:** https://jobs.lever.co/raya/fbab9fe1-3c22-40a6-a429-1f292283f3ec
**PDF:** ❌ (score < 3.0 — load-bearing gap on the role's stated primary need; no PDF generated)
**Verification:** Lever JSON API (https://api.lever.co/v0/postings/raya?mode=json), 2026-07-20 — posting live, UUID confirmed. Apply form checked via Playwright same day: standard Lever fields only (no US work-authorization question).
**Recommendation:** SKIP. Stack alignment (Node.js/TS, MongoDB, startup scaling) is excellent, but the JD says geospatial/location-based systems are "the primary need for this role" and Isaac has zero geospatial evidence on the CV, plus the strongly-preferred search/Elasticsearch requirement is also missing. Geo eligibility is unconfirmed and leans US-only (see Geo check). If Isaac has undocumented geo/search experience, revisit.

---

## Geo Check (CRITICAL — Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD body | No location restriction, no "US only", no work-authorization language | Neutral |
| Lever metadata | `workplaceType: remote`, `location: Remote`, but `country: US` on all 6 Raya postings | Leans US |
| Benefits | "Comprehensive medical and dental coverage", 12 weeks paid parental leave, $50/day food delivery — classic US W-2 package, no EOR/"hire anywhere" language | Leans US |
| Salary band | $180,000–230,000 USD posted (Lever API `salaryRange`) — US-market band | Leans US |
| Apply form | No US-work-authorization or visa question; only required geo field is free-text "Current location" | Mildly global-friendly |
| Third-party | [realworkfromanywhere.com](https://www.realworkfromanywhere.com/companies/raya) lists Raya as "100% worldwide remote"; [remoterocketship.com](https://www.remoterocketship.com/company/rayatheapp/jobs/qa-engineer-united-states-remote/) labels sibling Raya roles "United States remote" | Contradictory |

**Verdict: UNCONFIRMED, likely US-based remote.** Raya is an LA-based consumer startup; the benefits and salary band read as US employment. No explicit lock, so it is not a certain rejection — but per Isaac's globally-remote-only filter, treat as high geo risk. Combined with the skill gap below, not worth an application.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer — consumer discovery surfaces (Maps, Location, Directory search) |
| Domain | Consumer social/dating app backend (Raya: membership-based community app) |
| Function | Build + own — Core Discovery team, Maps is near-term focus, "own that domain end to end" |
| Seniority | Senior, 6+ years, leadership signals expected |
| Remote | "Remote" (Lever), country: US — global eligibility unconfirmed, leans US-only |
| Comp | $180K–230K USD posted |
| TL;DR | Great stack fit (Node/TS + MongoDB + PostgreSQL at a fast-moving consumer startup) wrapped around a requirement Isaac can't evidence: production geospatial systems, which the JD itself calls "the primary need for this role." |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| 6+ yrs modern software dev, scalable/maintainable systems | cv.md L10-22 MTailor (2022–present) + L41-51 Dr Wealth + L68-79 CodeBits — ~6 yrs continuous backend work | ✅ |
| Mastery in Node.js and TypeScript | cv.md L85 Node.js (Proficient); Node across every role (L23, L37, L51, L79); profile.yml superpower "Node.js / TypeScript backend systems (5+ years)" | ✅ (TS not explicit on CV — surface it) |
| Building/scaling backend systems in production at a startup | cv.md L14 "migration of 20+ applications... zero downtime"; L16 real-time MongoDB↔Firestore sync with Pub/Sub | ✅ |
| **Production location-based systems: geospatial data, geo indexing, proximity/nearby queries, mapping surfaces — "the primary need"** | Nothing on CV — no PostGIS, no geohashing, no maps surfaces | ❌ hard gap on the load-bearing requirement |
| Search systems (relevance, ranking, Elasticsearch) — strongly preferred | Nothing on CV; closest is recommendation engine in MongoDB (profile.yml proof point) | ❌ |
| Strong data fundamentals: PostgreSQL + MongoDB, indexing/query performance | cv.md L85 MongoDB + SQL (Proficient); L47 ad-hoc jobs over 2M+ Firestore records | ⚠️ MongoDB solid; PostgreSQL only generic "SQL" |
| Enthusiasm for new AI tools | Healthcare WhatsApp chatbot with OpenAI + Google Vision (profile.yml proof point) | ✅ |
| CI/CD, full SDLC, agile | cv.md L77 Kafka/Docker/Kubernetes microservices architecture | ✅ |

**Gaps:**
1. **Geospatial systems (hard blocker).** The JD flags this as the primary need. No adjacent CV evidence beyond generic query-performance work. Mitigation would require a real portfolio project (e.g., geo-indexed proximity search on Firestore geohashes or PostGIS) before applying — not cover-letter-fixable.
2. **Search/Elasticsearch (strongly preferred, second differentiator).** The MongoDB recommendation engine is the nearest adjacency; frame as "relevance/matching" if pursued.
3. **PostgreSQL depth (nice-to-have).** "SQL Proficient" covers the basics; be ready for indexing/EXPLAIN questions.

## C) Level and Strategy

JD level = true senior with domain ownership; Isaac's natural level for pure Node/TS backend = senior, but for the geospatial domain = junior (no exposure). Selling senior without lying: lead with zero-downtime migration of 20+ apps reporting to CTO (cv.md L14), the real-time dual-write sync pipeline (L16), and Kafka/K8s microservices architecture (L77) as system-design proof. There is no honest way to bridge "owns Maps end to end" today. If Raya downlevels to a generalist backend seat, the comp band still beats target — but that seat isn't what this req is hiring for.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted band | $180,000–230,000 USD/yr | Lever API `salaryRange`, 2026-07-20 |
| vs Isaac's target | Far above $80–120K target (profile.yml) — 5/5 if attainable and geo-clean | config/profile.yml |
| Location adjustment risk | Band almost certainly assumes US employment; international contractor rate (if offered at all) would be renegotiated | inference from US benefits package |
| Demand | 3 concurrent Senior Backend Engineer reqs at Raya (Core Discovery, Member Experience, Recommendations) — actively scaling backend team | Lever API |

Company comp reputation: no reliable Glassdoor/Levels.fyi sample for Raya engineering (small private company); posted bands are the best signal.

## E) Personalization Plan

(Only actionable if a geospatial portfolio project is built first, or Raya confirms global hiring.)

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Skills | "JavaScript" listed, TypeScript absent | Add TypeScript explicitly | JD says "mastery in Node.js and TypeScript" |
| 2 | Summary | Generic migration narrative | Lead with "consumer-scale Node.js/TypeScript backend, real-time data systems" | Mirrors JD spine |
| 3 | Projects | Recommendation engine buried in profile.yml | Surface it as "relevance/matching for a consumer marketplace" | Nearest adjacency to Directory search |
| 4 | Skills | "SQL" | "PostgreSQL (indexing, query performance), MongoDB" | JD names both stores |
| 5 | New project | — | Ship a geo proximity-search demo (geohash or PostGIS) | Only credible mitigation for the primary need |

LinkedIn: same five moves (headline + featured project).

## F) Interview Prep (STAR+R, if pursued)

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|----------------|-------|---|---|---|---|------------|
| 1 | Scalable systems in production | Zero-downtime migration | 20+ production apps on Parse/MongoDB | Migrate to Firebase/GCP with no downtime | Designed real-time two-way MongoDB↔Firestore sync via Node.js + Pub/Sub | Zero downtime, $5K/month infra savings | Dual-write sync taught me to design for rollback, not just cutover |
| 2 | Data fundamentals / query performance | 2M-record price pipeline | Stale stock prices in consumer PWA | Keep prices current from Morningstar APIs | Ad-hoc jobs querying 2M+ Firestore records efficiently | Real-time prices at consumer scale | Batch windows + index design matter more than raw compute |
| 3 | System design / architecture | FIDA microservices | NGO case-management monolith constraints | Design for growth with a 4-dev team | Architected Kafka + Docker + K8s microservices; led the team | Shipped case-management platform | Event-driven design pays off when teams scale independently |
| 4 | Cross-functional collaboration | 3D visualisation feature | Buyers couldn't judge custom fit | Raise conversion | Built video-overlay 3D feature with ffmpeg, working with product/UX | Increased buyer conversion | User-facing metrics should drive backend priorities |
| 5 | Bias toward shipping | Express Shipping | Revenue opportunity per order | Ship fast | Implemented Express Shipping end to end | +$40 revenue per order | Small scoped bets ship in days and compound |
| 6 | AI tool enthusiasm | WhatsApp health chatbot | Prescription intake friction | Automate via chat | Integrated OpenAI + Google Vision OCR over WhatsApp Business API | Working production chatbot | LLM APIs are integration problems — same discipline as any third-party API |

**Case study:** the MongoDB↔Firestore real-time sync pipeline — closest analog to consumer-scale data surfaces.
**Red-flag questions:** "Have you built geo systems?" → honest no; pivot to indexing/query-performance fundamentals and fast domain ramp (Parse→Firebase in 4 months as contractor→hire). "Are you US-based?" → disclose Kampala UTC+3 upfront; this will likely end the process if the role is US-locked.

---

## Keywords extracted

Node.js, TypeScript, geospatial data, geo indexing, proximity queries, mapping surfaces, Elasticsearch, search relevance, ranking, PostgreSQL, MongoDB, indexing, query performance, system design, scalable backend, consumer product, CI/CD, SDLC, startup, AI tools
