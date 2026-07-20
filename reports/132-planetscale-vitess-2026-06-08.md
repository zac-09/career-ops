# Evaluation: PlanetScale — Software Engineer - Vitess

**Date:** 2026-06-08
**Archetype:** Platform / Infrastructure Engineer (adjacent) — leaning into Database Internals / Distributed Systems specialist
**Score:** 2.4/5
**URL:** https://job-boards.greenhouse.io/planetscale/jobs/4009746009
**PDF:** skipped (score < 3.0)
**Verification:** JD extracted via Greenhouse public API (boards-api.greenhouse.io) — confirmed active and content-rich.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Detected archetype | Platform/Infra Engineer (adjacent) + Database Internals specialist |
| Domain | Infrastructure / data platform internals (MySQL clustering via Vitess) |
| Function | Build (deep systems engineering on a database control plane) |
| Seniority | Senior IC — "5+ years backend software engineering experience" |
| Remote | Full remote, **EMEA-based** |
| Team size | Not stated; "collaborate with expert engineers" |
| Comp (stated) | Base $120K–$290K USD + variable + equity + benefits |

**TL;DR:** PlanetScale wants a senior backend engineer to build and maintain Vitess (the open-source MySQL horizontal-scaling layer) in **Go**, handling distributed-systems problems at millions of QPS — a deep, specialized database-internals role.

---

## B) CV Match

Reading `cv.md`:

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| 5+ years backend software engineering | MTailor 2022–Present + prior roles since 2020; ~6 yrs total (cv.md L10–79) | ✅ Strong |
| Strong proficiency in **Go** | Listed only under **Intermediate**, not Proficient (cv.md L87). No Go projects in experience bullets | ❌ Weak — core requirement |
| Python / Java / C++ (secondary) | Python proficient; migration script + GCS migration in Python (cv.md L21, L36, L85) | ✅ OK |
| MySQL / relational DB experience | "SQL" proficient (cv.md L85); but primary DB experience is MongoDB + Firestore (NoSQL). No deep MySQL/relational internals work shown | ⚠️ Partial |
| Kubernetes & containerized apps | "Architected a microservices backend… using Apache Kafka, Docker, and Kubernetes" at CodeBits (cv.md L77, L79) | ✅ Real but dated (2020–21) |
| Distributed systems at scale | Real-time Pub/Sub sync MongoDB↔Firestore; 2M+ Firestore record jobs; Kafka microservices; gRPC services (cv.md L16, L48, L76–79) | ⚠️ Partial — distributed app systems, not database-engine internals |
| **Database internals / query optimization / consensus algorithms** (preferred) | None. No storage engines, query planners, Raft/Paxos, or replication-protocol work anywhere in cv.md | ❌ Hard gap |
| Open-source DB/infra contributions (preferred) | GitHub present (github.com/zac-09) but no DB/infra OSS cited | ❌ Missing |
| Cloud platform (AWS/GCP/Azure) | GCP proficient, AWS intermediate; multiple production migrations (cv.md L14, L21–22, L85, L87) | ✅ Strong |
| Monitoring / observability (preferred) | Not explicitly cited | ⚠️ Light |

### Gaps (with honest mitigation assessment)

1. **Go proficiency — HARD BLOCKER (soft).** Vitess is ~100% Go. The JD asks for "strong proficiency in Go." Isaac lists Go as *Intermediate* with zero Go shipping experience in the work history. This is the single biggest gap. Mitigation: a focused Vitess/Go OSS contribution could partially offset, but that's a multi-week effort, not a cover-line. No quick fix.
2. **Database internals — HARD GAP.** Query optimization, consensus algorithms, replication protocols, storage engines — none of this appears in Isaac's background. His database work is *consuming/migrating* databases (MongoDB, Firestore), not *building* a database engine. There is no adjacent experience that credibly maps to writing Vitess internals. This is a categorically different discipline from app-layer backend work.
3. **MySQL/relational depth — PARTIAL.** Isaac has SQL listed and real RDBMS exposure, but his hero work is NoSQL (Mongo/Firestore). Vitess is MySQL-specific clustering; the team will expect deep MySQL replication/sharding intuition. Mitigatable over time, not in an application.
4. **Kubernetes — REAL but stale.** The Kafka/Docker/K8s microservices work (CodeBits, 2020–21) is genuine and the most relevant single line, but it's ~5 years old and at app-orchestration level, not running a stateful DB control plane at millions of QPS.

**Net:** Isaac clears the *years-of-experience* and *cloud* bars and has one genuinely relevant distributed-systems thread (Kafka/Pub-Sub/gRPC). But the two load-bearing requirements — **Go fluency** and **database-internals experience** — are absent, and there is no honest way to close them inside an application. This is an off-archetype specialist role.

---

## C) Level and Strategy

- **JD level:** Senior IC, deep specialist. The $120K–$290K band signals they hire from junior-senior up to staff/principal database engineers; the wide range reflects level + US-vs-EMEA banding.
- **Candidate's natural level for this archetype:** Senior generalist backend / platform-adjacent — but **not** a database-internals specialist. For Isaac's actual archetype (Node.js/TS backend, cloud migrations), he is solidly senior. For *this* role's archetype, he is a stretch-to-mismatch.
- **"Sell senior without lying" plan:** The honest framing would be "senior backend engineer with distributed-systems and Kubernetes exposure who wants to move into database internals." That's a *career-pivot* pitch, not a *qualified-today* pitch. PlanetScale Vitess is not the place to learn Go and DB internals on the job — they explicitly want existing strong Go + internals depth.
- **"If downleveled" plan:** Not applicable in a useful way — the issue isn't level, it's domain. Downleveling wouldn't fix the Go/internals gap.

**Strategic verdict:** This is not a downlevel question; it's a wrong-specialty question. Recommend skipping in favor of PlanetScale's general "Software Engineer - Platform" or "Surfaces" roles (seen in search results) if Isaac wants this company — those are closer to his stack.

---

## D) Comp and Demand

| Metric | Data | Source |
|--------|------|--------|
| Stated base range (this JD) | $120,000 – $290,000 USD | Greenhouse JD |
| Median total comp (PlanetScale SWE) | ~$232K–$240K/yr | Levels.fyi |
| Reported range (PlanetScale SWE) | ~$115K – $240K+ | Levels.fyi |
| Comp vs Isaac's target ($80K–120K) | **Well above** target — base alone meets/exceeds | profile.yml |
| Demand trend | Vitess/MySQL-at-scale is niche but high-value; few qualified engineers globally. Strong demand *if* you have the stack | Market |

Comp is excellent and far above Isaac's stated range — this is the one strongly attractive dimension. But comp is irrelevant if the candidate can't clear the technical bar. **EMEA banding note:** the lower end ($120K) likely applies to EMEA-remote hires; still strong for a Uganda-based candidate.

**Sources:**
- [PlanetScale Software Engineer Salary | Levels.fyi](https://www.levels.fyi/companies/planetscale/salaries/software-engineer)
- [PlanetScale Salaries | Levels.fyi](https://www.levels.fyi/en-gb/companies/planetscale/salaries)

---

## E) Personalization Plan

**Not generating a tailored PDF (score < 3.0).** Were Isaac to apply anyway despite the mismatch, the only honest moves would be:

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | Migration/real-time focus | Lead with Kafka/Docker/Kubernetes microservices + gRPC distributed systems | Closest real adjacency to the JD |
| 2 | Skills | Go = Intermediate | Keep honest — do **not** promote Go to Proficient | Inventing Go fluency would be dishonest and exposed in a 30-min Go interview |
| 3 | Experience | NoSQL-heavy | Surface the 2M+ Firestore record jobs and Pub/Sub sync as "distributed data at scale" | Reframes scale credibly without lying |
| 4 | — | — | Would require a real Vitess/Go OSS PR before applying | Only credible gap-closer; out of scope for an application |

LinkedIn changes are not worth listing for a role this far off-archetype.

---

## F) Interview Prep

Given the mismatch, full STAR prep is low-value. The few stories Isaac *could* lean on if he ever interviews for a distributed-systems-adjacent role:

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Distributed systems at scale | Real-time Mongo↔Firestore sync | Live system, dual-write risk during migration | Keep both DBs consistent with zero downtime | Built Pub/Sub-driven two-way sync (Node.js + GCP Pub/Sub) | Zero-downtime cutover of 20+ apps | Eventual-consistency tradeoffs taught me to design for idempotency and replay |
| 2 | Scale / high throughput | 2M+ Firestore record pricing jobs (Dr Wealth) | Stale market prices | Refresh 2M+ records from Morningstar continuously | Ad-hoc batch jobs against Firestore | Kept customer prices current | Batch vs streaming tradeoffs at scale |
| 3 | Kubernetes / containerized infra | FIDA microservices on Kafka+Docker+K8s | Monolith couldn't scale | Decompose into resilient services | Architected Kafka/gRPC microservices on K8s | Shipped scalable case-mgmt backend | Operational cost of distributed systems > the build cost |

**Red-flag question to expect:** "Walk me through how MySQL replication / Vitess resharding works" — Isaac cannot currently answer this credibly. That single question would likely end the loop.

**Recommended case study:** None strong for *this* role. The Kafka/K8s microservices project is the best available but is app-orchestration, not DB internals.

---

## Recommendation

**SKIP.** Comp and remote-EMEA eligibility are attractive, but the role is a database-internals specialist position requiring strong Go and engine-level MySQL/Vitess expertise — neither of which Isaac has, with no honest in-application mitigation. Applying would be a low-quality application that wastes a recruiter's time (see CLAUDE.md ethical-use rules). If Isaac likes PlanetScale, redirect to their **Platform** or **Surfaces** SWE roles, which sit closer to his Node.js/cloud/distributed-app background.

**Stack-fit verdict:** Off-archetype. Go + DB-internals are load-bearing and absent. EMEA-remote is plausibly geo-eligible for Uganda (Africa falls under the EMEA umbrella), so geo is *not* the blocker — the stack is.

---

## Keywords extracted

Vitess, Go, MySQL, distributed systems, Kubernetes, backend systems, query optimization, consensus algorithms, replication, sharding, horizontal scaling, database internals, millions of queries per second, containerized applications, observability, open-source, cloud platforms, relational databases, control plane, EMEA remote
