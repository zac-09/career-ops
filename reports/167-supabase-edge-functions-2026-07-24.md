# Evaluation: Supabase — Edge Functions Engineer

**Date:** 2026-07-24
**Archetype:** Platform/Infrastructure Engineer (serverless runtime, Deno/TypeScript + Rust) — secondary: Senior Backend Engineer
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/supabase/3ab0b926-c9b5-4197-aff2-88d5bf009e13
**PDF:** ✅ output/cv-isaac-mubiru-supabase-2026-07-24.pdf
**Verification:** live (Ashby API, 2026-07-24) — job present in `https://api.ashbyhq.com/posting-api/job-board/supabase`, location "Remote", `isRemote: true`, employment FullTime.
**Recommendation:** APPLY as a stretch. Best fit of the four Supabase reqs: Isaac's daily stack (TypeScript/Node.js, serverless functions, GCP/AWS, real-time systems) sits exactly in this product's user-facing half, and Supabase hires globally with an async culture that fits Kampala UTC+3 perfectly. The stretch: the runtime itself is Rust (Isaac: Intermediate, no production Rust) and V8-isolate internals aren't on the CV. Apply with a cover letter that leans on the "improve DX via CLI/local dev/Supabase-stack integration" half of the role and honest Rust positioning; expect the Rust bar to be the deciding factor.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD benefits | "Fully Remote — We hire globally... There are no Supabase offices"; health insurance "wherever you are" | ✅ Global |
| JD body | On-call rotation mentioned — globally distributed team makes follow-the-sun feasible; async-first, no timezone requirement stated | ✅ Global |
| Ashby metadata | `location: Remote`, `isRemote: true`, no country list | ✅ Global |

**Verdict: CLEAN.** Genuinely globally remote (~400 people, 60+ countries). Remote dimension: 5/5.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infra Engineer — serverless edge runtime (with strong Senior Backend overlap on the DX/integration half) |
| Domain | Supabase Edge Functions: server-side TypeScript functions on Supabase Edge Runtime — an open-source Deno-based runtime written in Rust (V8 isolates, per-request CPU/memory limits) |
| Function | Build + operate: evolve the Rust runtime, observability/OpenTelemetry, on-call, features (scheduled functions, background tasks, WebSockets, ephemeral storage), integrate with Auth/Postgres/Storage/Realtime, improve local-dev DX via Supabase CLI |
| Seniority | Senior (5+ yrs backend/systems) |
| Remote | Fully remote, global, async |
| Comp | Not posted; see Block D |
| TL;DR | Half the role is Isaac's home turf (TypeScript serverless, integrating functions with auth/db/storage, DX, real-time features); the other half — Rust runtime internals and V8 isolates — is his stretch zone. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| 5+ yrs backend or systems engineering | cv.md L10-79: MTailor (2022–present) + Dr Wealth + Mind2matter + CodeBits (2020–21) ≈ 6 yrs continuous backend | ✅ |
| Strong fluency in TypeScript | Node.js/JavaScript daily in every role (cv.md L23, L37, L51, L64, L79); profile.yml superpower "Node.js / TypeScript backend systems (5+ years)" | ✅ |
| **Strong fluency in Rust** | cv.md L87: Rust listed under "Intermediate"; no production Rust bullets | ❌ the load-bearing gap |
| Experience with V8 isolates, Deno, JS runtimes in general | No isolate/Deno internals. Adjacent: deep daily work INSIDE JS serverless runtimes — Firebase Cloud Functions (Gen2) at MTailor and Dr Wealth (cv.md L49 "Extended backend APIs using Firebase Cloud Functions and Express.js") | ⚠️ user-side, not host-side |
| Operating infrastructure at scale (Kubernetes, AWS, Cloudflare Workers, Redis) | cv.md L77 "microservices backend... using Apache Kafka, Docker, and Kubernetes"; L23 AWS S3/EC2/EBS; L14 zero-downtime migration of 20+ production apps on GCP | ✅ moderate scale |
| Monitoring/alerting/OpenTelemetry, latency optimization | Not named on CV; zero-downtime migration and real-time sync (L16) imply operational discipline but no observability stack cited | ⚠️ |
| Strong vision for compute+data at the edge | Real-time data distribution experience (MongoDB↔Firestore sync via Pub/Sub, L16; live stock prices over 2M+ Firestore records, L47) — a genuine story about moving data close to reads | ⚠️ can be argued |
| Integrate functions with Auth, Postgres, Storage, Realtime | This IS Isaac's Firebase work: functions + Auth + Firestore + Storage + push notifications across 20+ apps (L14-22, L75) — the Supabase stack's closest competitor | ✅ strongest card |
| Features: scheduled functions, background tasks, WebSockets | cv.md L47 ad-hoc scheduled jobs; L16 Pub/Sub background message processing; real-time PWA (L45-49) | ✅ |
| On-call for production service | Sole owner of MTailor production migration reporting to CTO (L14) — de facto on-call, not formalized | ⚠️ |
| Bonus: developer-facing CLIs / tooling on infra products | cv.md L34 SDK docs for engineers; no CLI shipped | ⚠️ weak |

**Gaps:**
1. **Rust fluency (the deciding gap).** JD says "strong fluency in Rust and TypeScript" — Isaac is honest-Intermediate. Hard blocker? Arguably no: it's one of two languages, the other is a 5/5 match, and Supabase hires from OSS contributors. Mitigation: (a) cover letter states Rust level honestly + genuine interest in runtime internals; (b) before/while applying, make 1-2 small contributions to github.com/supabase/edge-runtime (issues labeled good-first-issue) — this is the single highest-leverage move; (c) lean on systems fundamentals from the CS/Computer Engineering degree (cv.md L93).
2. **V8 isolates/Deno internals.** Nice-to-frame: Isaac has years as a power user of the exact runtime model (isolate-based serverless on Cloud Functions), and user-empathy is explicitly valued ("relaying our users' requirements" to Deno team). Not a substitute for host-side experience — say so plainly if asked.
3. **Observability tooling not named.** Fix on CV: name what was actually used for the zero-downtime migration monitoring (only if true — verify with Isaac; do not invent).

## C) Level and Strategy

**JD level:** Senior systems engineer. **Isaac's natural level:** senior for the TypeScript/serverless/integration half, mid for the Rust-runtime half.

**Sell senior without lying:**
- Lead with the migration: "Led end-to-end migration of 20+ production apps to Firebase/GCP with zero downtime, reporting to the CTO" (cv.md L14) — production ownership at fleet scale.
- Position the Firebase depth as user-side expertise of THIS product category: "I've spent 4+ years building on the platform Supabase competes with; I know exactly where isolate-based functions delight and where they hurt (cold starts, local-dev parity, debugging). I want to build the fix from the host side."
- Real-time systems: MongoDB↔Firestore two-way sync with Pub/Sub under live traffic (L16) — concurrency, backpressure, correctness under load.
- Rust: honest framing — "Intermediate Rust, strong incentive to go deep; systems foundation from Computer Engineering degree; already reading edge-runtime source."

**If downleveled:** Accept if comp ≥ target floor ($60K, profile.yml — Supabase geo-adjusted comp likely clears this comfortably); negotiate explicit 6-month review with Rust-ownership criteria. A mid-level seat inside a 60-country remote org with ESOP beats a senior title at a geo-risky startup.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | Not disclosed (Ashby `compensation` empty for all Supabase reqs) | Ashby API 2026-07-24 |
| Market data | Median TC ≈ $115.6K; SWE range ≈ $70K–150K; SF base benchmarks $160K–205K with geographic adjustment for remote; ESOP for every employee; comp+benefits rated 4.6/5 | [Levels.fyi](https://www.levels.fyi/companies/supabase/salaries), [Glassdoor](https://www.glassdoor.com/Salary/Supabase-Salaries-E7639911.htm), [SalaryPrep](https://www.salaryprep.com/companies/supabase/software-engineer) |
| vs Isaac's target | Geo-adjusted offer for Uganda plausibly lands $70–110K + ESOP — inside the $80–120K target band, above the $60K floor | config/profile.yml |
| Company trajectory | $500M Series F, over $1B raised, 55 open roles — strong equity upside and hiring momentum | Ashby API, JD |
| Negotiation note | Geo-adjustment pushback script applies (see _shared.md): output-based work, not postal-code-based | modes/_shared.md |

## E) Personalization Plan

Top 5 CV changes (implemented in the tailored PDF):

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | Generic migration narrative | Lead with "TypeScript serverless and real-time backend engineer; 4+ yrs building on isolate-based function runtimes (Firebase Cloud Functions/GCP); now moving from power user to runtime builder" | Mirrors the JD's product exactly |
| 2 | Skills | "JavaScript" only; TS implicit | Add TypeScript, Deno (learning), Rust (intermediate) explicitly and honestly | JD's two languages must be findable by ATS |
| 3 | Experience (MTailor) | Bullets ordered by business impact | Reorder: Pub/Sub real-time sync first, then zero-downtime fleet migration, then cost/infra wins | Systems/reliability signal first for a runtime team |
| 4 | Competencies | n/a | Grid: Serverless Functions (Deno/Cloud Functions), TypeScript/Node.js, Real-time Data Systems, Kubernetes & Docker, Observability & Monitoring, WebSockets & Streaming, GCP & AWS, Rust (systems programming) | JD keyword coverage |
| 5 | Projects | Proof points buried in profile.yml | Surface Pub/Sub sync pipeline + 2M-record real-time price jobs as named projects | Both are edge-data stories |

Top 5 LinkedIn changes: (1) headline add "TypeScript · Serverless · Real-time systems"; (2) About section: the user-to-builder runtime narrative; (3) feature the MTailor migration as a case study post; (4) follow/engage with supabase and denoland orgs, star edge-runtime; (5) list Rust as a skill with learning-in-public posts (only after actually doing it).

## F) Interview Prep

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Reliability of a production runtime/service | Zero-downtime fleet migration | 20+ production apps on EOL Parse/MongoDB, live traffic | Migrate to Firebase/GCP with zero downtime, reporting to CTO | Phased migration, real-time dual-write sync, rollback paths | 20+ apps migrated, zero downtime, ~$5K/month infra savings (cv.md L14, L22) | Reversibility beats speed: every migration step had an undo |
| 2 | Real-time systems / streaming (WebSockets, background tasks) | MongoDB↔Firestore two-way sync | Both databases had to serve live traffic during a months-long migration | Keep data consistent both directions in real time | Node.js sync service on Google Pub/Sub; idempotent message processing, conflict handling | Parallel production traffic on two stores with no data loss (cv.md L16, profile.yml proof point) | Idempotency is the whole game in message-driven sync |
| 3 | Performance/latency under data scale | Live stock prices over 2M+ Firestore records | Dr Wealth PWA showing real-time prices from Morningstar | Keep 2M+ records current without blowing latency or quota | Ad-hoc batched query jobs, scheduled refresh windows, Cloud Functions + Express APIs | Customer-facing prices stayed current (cv.md L47-49) | Batch shape and read patterns matter more than raw compute |
| 4 | Operating distributed infra (K8s) | Kafka/K8s microservices for FIDA Uganda | NGO case-management system needed to scale beyond a monolith | Architect the backend as microservices | Apache Kafka event backbone, Docker, Kubernetes deployment; led 4 devs | Shipped and operated in production (cv.md L72-79) | Event-driven boundaries saved us from distributed-monolith hell |
| 5 | Integrating functions with Auth/DB/Storage/Realtime | Firebase platform integration across 20+ apps | Post-migration, every app needed functions wired to Auth, Firestore, Storage, push | Standardize integration patterns | Wrote SDK documentation and trained Ops team (cv.md L34-35); built shared patterns | Fellow engineers onboarded to new stack from my docs | Good docs are a force multiplier — relevant to a "build in public" company |
| 6 | Cost/resource limits awareness (CPU/memory provisioning) | AWS→GCP cost elimination | Company paying for duplicated AWS+GCP infra | Consolidate off AWS | Migrated S3→GCS via Python tooling, decommissioned EC2/EBS | $5,000/month saved (cv.md L21-22) | Measure before and after — savings claims need receipts |

**Story bank:** Stories 1, 2, 4 already exist in `interview-prep/story-bank.md` (from report #127 lineage); story 3 and 5 appended this session.

**Recommended case study:** the Pub/Sub sync pipeline, presented as "distributing data close to where it's read, safely" — then bridge to the JD's thesis ("distribute both compute and data globally").

**Red-flag questions:**
- "How much Rust have you actually written?" → Honest number + what you've built + edge-runtime source-reading/contributions. Do NOT inflate; Rust interviews expose inflation in minutes.
- "Have you worked with V8 isolates directly?" → "From the user side daily for 4 years; host side is exactly what I'm here to do. Here's what I understand about the main/user runtime split from reading the code..." (do the reading first).
- "Postgres experience?" → Prepare a genuine answer; Supabase-wide expectation.
- "On-call in UTC+3?" → Positive: covers the gap between APAC and EU rotations.

## G) Draft Application Answers

(Score < 4.5 — skipped per mode rules.)

---

## Keywords extracted

TypeScript, Deno, Rust, V8 isolates, edge functions, serverless, JavaScript runtime, WASM, Kubernetes, AWS, Cloudflare Workers, Redis, OpenTelemetry, monitoring, alerting, latency, WebSockets, background tasks, scheduled functions, Supabase CLI, developer experience, open source, on-call
