# Evaluation: Supabase — Software Engineer - AI Tooling Infrastructure

**Date:** 2026-11-02
**Archetype:** **Platform/Infrastructure Engineer** (operate-and-own systems seat: deployment, SLOs, on-call, observability, rate limits), with a secondary **Senior Backend Engineer** axis (TypeScript services, API design, OAuth for machine clients).
**Score:** 2.7/5
**URL:** https://jobs.ashbyhq.com/supabase/fb0b563a-e541-43fd-8555-9eb6473aaa11
**PDF:** ❌ (score below 3.0, no PDF generated)
**Verification:** live via Playwright (main loop) 2026-11-02. Ashby page renders title, full JD and Apply. Published 2026-10-31.
**Recommendation:** **SKIP (weak match).** The JD says "it is not an SRE role", but the responsibilities are the dedicated-infra band in everything but name: set SLOs with SRE, track error budgets, carry the pager, own metrics/traces/logs/alerts, own OAuth apps and scoped tokens, rate limits and abuse controls, IaC. Four of the eight must-haves have no evidence on cv.md (OAuth/OIDC/JWT debugging, PostgreSQL, IaC, cross-service tracing), and the "pick your centre of gravity" clause asks for depth in one of APIs-and-auth, operations or gateways that the CV cannot show in any of the three. This is the 13th Supabase req and it fails the same way #168, #207, #223 and #242 did. Spend the Supabase effort on #250 (Storage, 3.8), which is still open and is the one seat where the headline requirement is Node.js in production.

---

## Continuity — Supabase in the pipeline

| # | Report | Role | Score | Status |
|---|---|---|---|---|
| 257 | `reports/250-supabase-storage-2026-10-26.md` | Software Engineer - Storage | 3.8/5 | Evaluated, **apply this week** (still the priority Supabase seat) |
| 249 | `reports/242-supabase-managed-postgres-2026-10-14.md` | Platform Engineer, Managed Postgres | 2.9/5 | SKIP |
| 223 | `reports/223-supabase-2026-09-21.md` | Platform Engineer, Edge & Networking | 1.9/5 | SKIP |
| 207 | `reports/207-supabase-compute-capacity-2026-09-03.md` | Platform Engineer - Compute Capacity | 2.4/5 | SKIP |
| 168 | `reports/168-supabase-sre-2026-07-24.md` | Site Reliability Engineer | 2.0/5 | SKIP |

Pattern: every Supabase platform/infra req scores 1.9–2.9 on the same missing set (SLOs, observability stack, IaC, Postgres depth). This one adds an auth gate on top.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer (primary) + Senior Backend Engineer (secondary) |
| Domain | Backend services behind Supabase's AI products: the MCP server, agent-skills services, dashboard assistant. Agent traffic: hundreds of calls a minute, retry loops |
| Function | Build and operate. Explicitly "you will build and operate these systems, not only advise on them" |
| Seniority | Not stated in title. "5+ years ... and have carried on-call" implies senior IC |
| Remote | Full remote, "Remote, Global", "We hire globally", no offices |
| Team size | Company ~400, 60+ countries. AI Tooling team size not stated; works with Platform, SRE, Auth, Billing, Edge Functions |
| Comp | Not posted (Ashby compensation empty, as for every Supabase req) |
| TL;DR | An operations-leaning engineer who owns reliability, auth and observability for the services that AI agents call, carries the pager for them, and reshapes them as they grow. |

## B) CV Match

### Must-haves

| JD requirement | CV evidence (cv.md) | Match |
|---|---|---|
| "5+ years building and running backend services in production, and have carried on-call for them" | Node.js in every role from CodeBits (Jan 2020) to MTailor (present), ~6.8 years. MTailor: "Led the end-to-end migration of 20+ applications ... ensuring zero downtime, reporting directly to the CTO". On-call is not named anywhere on the CV | ⚠️ years yes, on-call unevidenced |
| "Write strong TypeScript or Go, and are comfortable working in the other" | Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js" (~6 months). Skills: TypeScript Proficient, Go Intermediate | ⚠️ thin on both |
| "Designed and operated APIs with real consumers: versioning, error handling, rate limiting, and backwards-compatible change" | Dr Wealth Express APIs; CodeBits "USSD service ... communicating with a Node.js backend via gRPC"; MTailor contractor "Wrote documentation for fellow engineers on working with the new Firebase SDKs". No versioning, rate-limiting or deprecation evidence | ⚠️ partial |
| "Know OAuth, OIDC, JWT and API authorization well enough to debug them in production and to explain where implementations commonly deviate from the spec" | Nothing on cv.md. Firebase Auth is implied by six years on Firebase but never written down, and "deviate from the spec" asks for protocol depth | ❌ gap |
| "Good understanding of PostgreSQL and relational databases" | No relational engine in any role. `SQL` on the Proficient line unbacked (standing gap) | ❌ gap |
| "CI/CD, Docker and containerized deployments, and infrastructure as code. Any tool is fine" | CodeBits: "Apache Kafka, Docker, and Kubernetes". No CI/CD tool, no IaC named | ⚠️ Docker yes, IaC ❌ |
| "Debug across services: follow a slow or failing request through several systems using metrics, traces and logs" | No observability tooling named. Pub/Sub sync across 20+ apps is cross-service work, but no tracing evidence | ❌ gap |
| "Communicate clearly in writing ... thrive in async, globally distributed teams" | Five years of US and Singapore remote work; SDK docs and Ops training at MTailor | ✅ |

**Score on must-haves: 1 ✅, 4 ⚠️, 3 ❌.**

### "Pick your centre of gravity"

| Option | What they expect | CV evidence | Verdict |
|---|---|---|---|
| APIs and auth | Designed permission models, token scopes or OAuth flows for machine clients, and migrated them without breaking users | None | ❌ |
| Operations | Carried the pager, written alerts and runbooks, used SLOs to decide what to fix | Migration lead with zero downtime; Ops training and backup procedures. No pager, alerts, runbooks or SLOs on the CV | ⚠️ closest, still thin |
| Gateways and distributed systems | Built or run proxies/gateways, debugged retries, partial failures, fail-open vs fail-closed | MongoDB ↔ Firestore two-way sync on Pub/Sub (idempotent consumers, at-least-once delivery); Kafka/NATS/gRPC microservices | ⚠️ real but not gateway work |

The JD says "we expect you to be deep in at least one of these, and to tell us which". The honest answer is "none yet", which is a screen-out at this company.

### Nice-to-have

| Nice-to-have | CV evidence | Match |
|---|---|---|
| Agent tooling (MCP or similar), serving traffic from AI agents | Career-ops pipeline on Claude Code (story bank); WhatsApp chatbot on OpenAI + Google Vision (profile proof point). Consumer of agents, not an operator of agent-facing services | ⚠️ |
| Moving a service out of a larger codebase while keeping clients working | Parse → Firebase migration of 20+ apps with parallel-run and rollback | ✅ closest analogue |
| Grafana, OpenTelemetry, Logflare, real SLO work | None | ❌ |
| Open-source contributions to Node.js/Go/TypeScript/API tooling | None public | ❌ |

### Gaps and mitigation

1. **OAuth/OIDC/JWT at spec-debugging depth (must-have; hard blocker).** No adjacent evidence beyond Firebase Auth as a consumer. Mitigation would be a built-and-documented OAuth 2.1 server with scoped tokens for an MCP client, which is weeks of work for one req. Not worth it for a 2.7.
2. **PostgreSQL (must-have; hard at a Postgres company).** Standing gap; use the story-bank card "Answering the TypeScript / PostgreSQL gap straight" if ever asked. The typed Express + Postgres repo from that card is still the right fix and would also serve #250.
3. **Observability and SLO practice (must-have + nice-to-have).** Standing dedicated-infra gap. The Go gRPC + OTel/Prometheus/Grafana + Terraform repo recommended since report #214 remains the single project that would move this band. Not built yet.
4. **IaC (must-have).** Nothing named. Same repo as above.
5. **On-call (must-have).** Unevidenced on paper. If the migration included incident response, that belongs on cv.md as a bullet; today it is not there.

## C) Level and Strategy

- **Detected level:** senior IC with operational ownership. "Carried the pager", "set SLOs", "write runbooks" is a mid-to-senior platform profile.
- **Candidate's natural level for this archetype:** mid. Backend seniority is real, platform-practice years are not.
- **"Sell senior without lying":** not applicable. The must-haves are concrete enough that framing cannot bridge them; an interviewer would reach the OAuth or SLO question within two exchanges.
- **If applied anyway:** lead with the migration-as-operations story (parallel-run, reversible cutover, zero downtime) and name the three gaps up front. Expect a resume-stage rejection.
- **Better use of effort:** submit #250 (Storage) this week, and build the observability repo so the next Supabase platform req is answerable.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted comp | Not disclosed | Ashby page, 2026-11-02 |
| Company-wide | Median total comp $115,575; Software Engineer top data point $124,954 (Dominican Republic) | [Levels.fyi — Supabase](https://www.levels.fyi/companies/supabase/salaries) |
| Software Engineer | Dominican Republic common range $117K–$133K (updated 2026-03-19); no US or remote breakdown | [Levels.fyi — Supabase SWE](https://www.levels.fyi/companies/supabase/salaries/software-engineer) |
| Aggregator listings | Senior Full Stack $175K–$200K + equity; Founding Full Stack $150K–$180K base, location-adjusted (undated) | [ZipRecruiter — Supabase salaries](https://www.ziprecruiter.com/Jobs/Supabase-Salaries) |
| vs target | Target $80–120K, floor $60K. Non-US Supabase data points sit at or above target | config/profile.yml |
| Benefits | ESOP, 100% health for employee and 80% dependents "wherever you are", co-working, tech and education allowances | JD |

**Demand:** AI-tooling infrastructure seats at platform companies are new and scarce in 2026, and they attract candidates with MCP-server and auth-platform experience. Supabase posts new engineering reqs weekly, so this one will fill from a strong pool.

**Comp read: 4.0/5** on data, irrelevant given the fit.

## E) Personalization Plan

Not executed (score below 3.0). If Isaac overrides and applies, the minimum changes would be:

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Zero-downtime migration lead | "Operated 20+ production services through a parallel-run cutover with rollback at every step" | Operations centre of gravity |
| 2 | MTailor bullets | Migration, Pub/Sub sync | Add any true incident-response or monitoring work from the migration (confirm with Isaac first) | On-call must-have |
| 3 | Competencies | Backend-weighted | Add "Idempotent consumers / at-least-once delivery", "Containerised deployments (Docker, Kubernetes)" | Gateways and distributed-systems axis |
| 4 | Skills | TypeScript, Go Intermediate | Keep honest; do not promote Go | JD asks for strong in one, comfortable in the other |
| 5 | Projects | Sync pipeline, migration, Kafka microservices | Lead with the sync pipeline, framed as retries, partial failure and ordering | Only distributed-systems evidence on the CV |

LinkedIn: no changes recommended for this req.

## F) Interview Prep

Not applicable at this score. If a recruiter reaches out anyway, the relevant story-bank cards are:

| # | JD requirement | Story-bank card |
|---|---|---|
| 1 | Operate services through change | Zero-downtime Parse→Firebase migration |
| 2 | Retries, partial failures, ordering | Two-way MongoDB↔Firestore sync on Pub/Sub |
| 3 | Reshape services as they grow | Kafka/Kubernetes microservices for FIDA Uganda |
| 4 | Postgres gap | Answering the TypeScript / PostgreSQL gap straight |
| 5 | Observability / IaC gap | Answering the CI/CD-tooling gap straight |
| 6 | Agent traffic behaviour | Evidence-gated AI pipeline (verification before scoring) |

No new stories added to the story bank from this evaluation.

**Red-flag questions:**
- *"Walk me through an OAuth flow you designed for machine clients and how you deprecated a scope."* No such flow exists. Say so.
- *"Which centre of gravity are you deep in?"* Honest answer is "operations, through migrations rather than SRE practice", which is weaker than the JD wants.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **2.5** | Operate-and-own platform seat. Isaac's primary archetype is backend build; platform is "adjacent" in profile.yml |
| Stack | **2.0** | Must-haves 1 ✅ / 4 ⚠️ / 3 ❌ (OAuth depth, Postgres, cross-service tracing); IaC and observability stack absent |
| Seniority | **3.0** | Years clear 5+; on-call, SLO and pager evidence missing, and none of the three centres of gravity is deep |
| Remote / geo | **5.0** | "Remote, Global", "We hire globally", 60+ countries, health cover "wherever you are" |
| Comp | **4.0** | Undisclosed; non-US data at or above target; ESOP |
| Stability / growth | **4.5** | Over $1B raised, $500M Series F, AI tooling is a growth area |
| **Overall** | **2.7/5** | Mean of the six is 3.5, but three hard must-haves are absent at a company that tests them directly, so the realistic resume-stage outcome drives the score down. **SKIP.** |

---

## Keywords extracted

MCP server, AI tooling infrastructure, agent traffic, backend services in production, on-call rotation, SLOs, error budgets, incident response, runbooks, OAuth, OIDC, JWT, scoped tokens, API authorization, API versioning, rate limiting, backwards-compatible change, PostgreSQL, TypeScript, Go, CI/CD, Docker, infrastructure as code, observability, metrics traces logs, Grafana, OpenTelemetry, gateways, retries and partial failures, async distributed team
