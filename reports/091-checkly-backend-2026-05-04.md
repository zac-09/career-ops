# Evaluation: Checkly — Senior Backend Engineer

**Date:** 2026-05-04
**Archetype:** Senior Backend Engineer (SaaS monitoring platform, Node.js/TypeScript + Postgres/ClickHouse)
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/checkly/7b38e56f-cf0f-4115-bb7a-32d3d18a1da7
**PDF:** ⏳ HTML ready at `output/091-checkly-backend-cv.html` — sandbox blocked `node generate-pdf.mjs`; user to regenerate
**Verification:** unconfirmed (batch mode — Ashby SPA returned only "Jobs" via WebFetch; JD reconstructed from Welcome to the Jungle, Working Nomads, Glassdoor, and Accel job-board listings, all matching the Ashby ID)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer — SaaS monitoring platform |
| Domain | Application monitoring / observability — testing + monitoring + observability unified, Playwright + OpenTelemetry foundations |
| Function | Build the #1 monitoring platform for developers; scale backend, status pages product, hunt bugs in private location infra, on-call rotation |
| Seniority | Senior |
| Remote | Remote, **UTC-3 to UTC+3** ✅ Uganda is UTC+3 (edge of window — fully eligible per JD wording) |
| Team size | Early-stage startup, small remote-first team |
| TL;DR | Strong fit: TypeScript + Node.js + Postgres on the JD vs. 5+ yrs Node.js + SQL + Firebase/MongoDB on the CV. Vue + ClickHouse + Go are gaps but Go is explicitly "ramp up after joining". Uganda timezone (UTC+3) is the upper edge of the window — eligible. Distributed-systems experience (Kafka/NATS at CodeBits) maps cleanly to "scaling backend platform". Developer-tooling enthusiasm is genuine (Isaac has 5+ years shipping production tooling). |

## B) CV Match

| JD Requirement | CV Match | Status |
|----------------|----------|--------|
| Deep TypeScript / Node.js in a SaaS environment | "Real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub" (MTailor, 5+ yrs Node) | Strong |
| Building distributed systems on AWS/GCP or bare metal | "Architected a microservices backend with Apache Kafka, Docker, Kubernetes" (CodeBits, 4 NGO tenants) + GCP at MTailor | Strong |
| Postgres | SQL Proficient; primary OLTP work has been MongoDB/Firestore | Moderate |
| ClickHouse | Not in CV; have queried 2M+ Firestore records (analytical scale, different engine) | Gap — adjacent (analytical-DB experience exists) |
| Vue.js | React / React Native — not Vue | Gap — adjacent (FE framework portability) |
| Go (plus, ramp up after joining) | "Intermediate" Go in skills | Moderate — JD says "can ramp up on Go after joining" |
| Excited about developer tooling / testing frameworks (Playwright) | Built developer documentation + Firebase SDK guides at MTailor; `generate-pdf.mjs` in this very system uses Playwright | Strong |
| On-call rotation experience | Zero-downtime migration at MTailor required production-incident posture | Moderate |
| Remote-first, async, low-meeting culture | 5+ yrs US-remote from Uganda, async-first written communication, CTO-direct reporting | Strong |
| UTC-3 to UTC+3 timezone | Uganda is UTC+3 — at the edge of the window | Match (edge case; confirm with recruiter) |

**Gaps:**

1. **Postgres depth** — JD assumes Postgres-native fluency. CV is MongoDB/Firestore-heavy. Mitigation: lead with the 2M-Firestore-record analytical jobs (size-of-data signal) and frame Postgres as a learning curve <2 weeks given strong SQL foundation.
2. **ClickHouse** — analytical OLAP DB; not in CV. Mitigation: skip claiming knowledge; reference 2M-record Firestore work as proxy for "comfortable with analytical-scale data" and express interest.
3. **Vue.js** — minor; the role is primarily backend. Mitigation: ignore; frame React experience as transferable.
4. **Timezone (UTC+3)** — Uganda is at the upper limit of the JD's "UTC-3 to UTC+3" window. This is INCLUSIVE per the JD's literal wording — confirm in cover letter to avoid recruiter ambiguity.

## C) Level and Strategy

- **JD level:** Senior. **Isaac's natural level:** Senior. Match.
- **Sell senior without lying:** Lead with the Parse→Firebase migration (production system ownership, observability + zero downtime) + Kafka microservices at CodeBits (distributed systems at scale). Frame "monitoring platform for developers" as natural extension of existing developer-tooling instincts.
- **Why this scores higher than Holepunch (#090):** No protocol-level gap, stack overlap is direct (Node.js + TS + SQL + AWS/GCP), timezone is eligible, the company is Series A/B with explicit remote-first culture (per Working Nomads + their blog).
- **Downlevel risk:** Low. JD specifies senior.

## D) Comp and Demand

| Signal | Data | Source |
|--------|------|--------|
| Salary stated | "Fair, competitive, and transparent pay using a standardized salary calculator that includes seniority and location" | JD via WebSearch |
| Location adjustment | Yes — Checkly has a published location-adjustment formula (per remote-first onboarding blog) | Checkly blog |
| Senior Backend Node.js/TS, EU-remote | $90K–$140K USD typical | Glassdoor / Levels.fyi |
| Funding | Seed/Series A backed by Accel (per Accel job board), Berlin HQ | Accel + Glassdoor |

Likely outcome for Uganda location: **lower-mid of band** ($75K–$100K). Aim to negotiate up by emphasizing portfolio (zero-downtime migration is exactly Checkly's customer pain point — they monitor against this). Should clear Isaac's $80K–$120K profile target; minimum $60K is comfortably exceeded.

## E) Personalization Plan

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | "zero-downtime cloud migrations and real-time data systems" | "Senior backend engineer building developer-facing reliability tooling — Node.js + TypeScript microservices, Pub/Sub real-time pipelines, zero-downtime migrations. Experienced building production observability and migration tooling that other engineers depend on." | JD vocabulary: developer tooling, reliability, monitoring |
| 2 | Skills | Lists Node.js, MongoDB, SQL | Add Postgres adjacent: "SQL (Postgres-ready)", + ClickHouse curiosity, + Playwright (used in this very codebase) | Direct stack overlap |
| 3 | MTailor bullet | "Implemented real-time two-way sync between MongoDB and Firestore" | Add: "with observable parallel write paths and reconciliation jobs to detect drift" | Observability signal |
| 4 | Cover letter must reference | n/a | "Uganda is UTC+3, at the upper end of your stated window — full overlap with EMEA hours, partial with Americas East. I've worked async-first with US-based teams for 5+ years." | Address timezone preemptively |
| 5 | LinkedIn headline | match cv | "Senior Backend Engineer · Node.js/TypeScript · Distributed Systems · Remote (UTC+3)" | Recruiter scan |

## F) Interview Prep

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Production TypeScript/Node.js SaaS scale | MTailor Parse→Firebase migration | 20+ live apps on Parse/MongoDB, customer-facing | Migrate to Firebase with zero downtime | Built two-way Pub/Sub sync, parallel write path, reconciliation jobs, gradual cutover | Zero downtime; ~$5K/month savings | Should have built drift dashboards earlier |
| 2 | Distributed systems on AWS/GCP | FIDA microservices | Monolithic case management couldn't scale across 4 NGO tenants | Decompose with reliable event/sync primitives | Kafka topics for events, NATS Streaming for ordered streams, gRPC for sync, Docker/K8s deploy | Independent service deploys, 4 tenants on shared infra | Service boundaries by domain, not org chart — held up |
| 3 | Scaling backend platform / cost efficiency | MTailor AWS→GCP migration | $5K/month AWS spend on legacy infra | Cut without breaking SLAs | Audited services, migrated S3→GCS via Python, EC2→Cloud Functions where possible | $5K/month saved | Should have profiled Cloud Functions cold-start before promising migration timeline |
| 4 | Customer-facing bug hunting (private location infra) | USSD service at CodeBits | Rural users on flaky 2G in Uganda — calls dropped mid-session | Make it work on hostile networks | Built session state machine + retry/resume, instrumented call latency per region | Worked on networks where REST timed out | Should have built load-test harness simulating 2G drop patterns from day one |
| 5 | Developer tooling / testing enthusiasm | This very career-ops codebase + Firebase SDK docs at MTailor | Engineers on team needed to onboard to new SDK | Make migration ergonomic | Wrote SDK guides, trained Ops team on Firebase Dashboard, built generate-pdf tooling | Team adopted SDK without 1:1 handholding | Should have version-controlled the docs as code from day one |
| 6 | Async / remote-first | MTailor 3+ yrs (Uganda↔US CTO) | 8h timezone offset | Ship features autonomously | Heavy async Loom + written specs + 2 weekly sync windows | Promoted from contractor to FTE; CTO direct report | Async writing investment paid back 10x |

**Recommended case study:** Parse→Firebase migration. Maps directly to Checkly's customer pain (their entire product is monitoring migrations and SaaS reliability).

**Red-flag questions:**
- "How much Postgres have you done?" → "Most of my OLTP work has been MongoDB/Firestore, but my SQL fundamentals are solid — I've written analytical queries against 2M+ records at Dr Wealth. I'd be productive on Postgres in <2 weeks; the data-modeling intuition is the same."
- "Have you worked with ClickHouse?" → Honest no. "I've worked at analytical scale (2M Firestore records, ad-hoc batch jobs) but not on ClickHouse specifically. Happy to ramp; OLAP DBs are a comfortable mental model from my Kafka work."
- "On-call experience?" → Reference zero-downtime migration: "Every migration cutover is essentially scheduled on-call. I've done multi-stage cutovers with rollback-ready runbooks."

---

## Recommended action

**APPLY.** Strong fit on stack (Node.js + TS + SQL + AWS/GCP), timezone is eligible (UTC+3 is the upper edge — confirm in cover letter), remote-first culture is aligned, and the product itself (monitoring + reliability + Playwright) maps to Isaac's natural strengths. One of the top applications in the current pipeline. Generate PDF + tailored cover letter referencing the Parse→Firebase migration as the customer-pain proxy.

---

## Keywords extracted

Node.js, TypeScript, Postgres, ClickHouse, Vue.js, Go, AWS, distributed systems, monitoring, observability, OpenTelemetry, Playwright, status pages, on-call, scaling, developer tooling, SaaS, remote-first, UTC-3 to UTC+3, async, bare metal, hybrid cloud
