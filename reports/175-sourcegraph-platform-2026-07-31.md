# Evaluation: Sourcegraph — Software Engineer - Platform [IC3]

**Date:** 2026-07-31
**Archetype:** Platform/Infrastructure Engineer (cloud control plane, Go + Terraform + Kubernetes)
**Score:** 2.7/5
**URL:** https://job-boards.greenhouse.io/sourcegraph91/jobs/6103628004
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** live via Greenhouse API (2026-07-31) — `https://boards-api.greenhouse.io/v1/boards/sourcegraph91/jobs/6103628004` returned 200 with full JD content (title, requirements, pay bands, Apply flow).
**Recommendation:** SKIP (weak match). The two load-bearing skills — production Go and Terraform/IaC — are both gaps on Isaac's CV, and the role sits outside his timezone preference band. His GCP/Kubernetes/distributed-systems background is real but adjacent, not central. Only apply with a specific reason (e.g., willingness to do evening EST overlap and a Go/Terraform portfolio sprint first).

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD location | "Remote" — Sourcegraph is all-remote and "hires almost anywhere in the world" | ✅ Global |
| Preferred locations | "EST and Europe"; preferred timezone "between UTC-8 and UTC+2" | ⚠️ Uganda (UTC+3) is 1h outside the preferred band |
| Hard requirement | "working hours must overlap with EST for at least 20 hours/week" | ⚠️ Feasible from Kampala only by working ~16:00–20:00+ EAT daily (EST = UTC-5, i.e., EAT-8) |

**Verdict: NOT Uganda-excluded, but disadvantaged.** No country restriction — this is a preference band, not an exclusion. However, the mandatory 20h/week EST overlap means a permanently shifted evening schedule from Kampala, and being just outside the stated preferred timezone range weakens competitiveness against EST/EU candidates. Not a disqualifier on its own; it compounds the skills gaps below.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infrastructure Engineer — Sourcegraph Cloud (managed SaaS) team |
| Domain | Cloud infrastructure: control plane orchestrating single-tenant Cloud instances, inter-cloud connectivity for regulated-industry enterprises, infrastructure-as-APIs |
| Function | Build + operate (on-call rotation for SLA commitments) |
| Seniority | IC3 — mid-level IC (below Isaac's Senior target, see Block C) |
| Remote | Fully remote, global hiring with EST/Europe preference; 20h/week EST overlap required |
| Team size | Not stated |
| Comp | Posted: Zone 2 $148K / Zone 3 $111K / Zone 4 $74K base + equity |
| TL;DR | A Go + Terraform + Kubernetes cloud control-plane seat where Isaac's GCP and distributed-systems experience is relevant but the two core tools of the daily job are absent from his CV. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **"Proficiency in Go, or other strongly typed languages"** | cv.md L87: Go listed as **Intermediate** only; no production Go bullets anywhere. TypeScript-adjacent Node.js work is strong but the team codebase (control plane, CDKTF, Terraform providers) is Go | ⚠️ partial — likely the deciding filter |
| "Knowledge in one of the public cloud platform providers (GCP, AWS, Azure)" | cv.md L14: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime"; L18: S3→GCS migration; L22: "Saved the company $5,000/month by migrating all services off AWS"; L85: GCP listed Proficient | ✅ strong — best match in the JD |
| **"Experience with Terraform (or similar IaC solutions) and Kubernetes"** | Terraform/IaC appears nowhere on cv.md or profile.yml. Kubernetes: cv.md L77 "Architected a microservices backend... using Apache Kafka, Docker, and Kubernetes" (CodeBits, 2020-21) | ⚠️ half — K8s yes (dated), Terraform ❌ |
| "Debug distributed systems... OS-level primitives (network, CPU, memory)" | cv.md L16: real-time two-way MongoDB↔Firestore sync via Node.js + Google Pub/Sub (production distributed pipeline); L77 Kafka microservices. But no OS-level/systems debugging evidence | ⚠️ adjacent |
| "Communicate clearly and empathetically, especially in writing" | cv.md L34: "Wrote documentation for fellow engineers on working with the new Firebase SDKs"; L35: trained Ops team | ✅ |
| Nice-to-have: services exposed as APIs (gRPC) | cv.md L76: "Built a USSD service... communicating with a Node.js backend via gRPC" | ✅ |
| Nice-to-have: Kubernetes controllers/operators, system-level software | None | ❌ |
| Nice-to-have: published blog posts / tech talks | None on CV | ❌ |
| Debug/patch upstream deps (CDK for Terraform, GCP Terraform providers) | No open-source contribution or Terraform-internals evidence | ❌ |

**Gaps and mitigation:**

1. **Terraform/IaC (hard-leaning blocker).** The JD says "or similar IaC solutions" which gives slack, but Isaac has no IaC of any flavor on the CV. *Mitigation:* only a portfolio sprint (Terraform-provision a GCP project reproducing his Pub/Sub sync pipeline, ~1 week) makes this claimable. Without it, don't apply.
2. **Production Go (hard-leaning blocker).** "Or other strongly typed languages" is an opening — Isaac could lean on TypeScript — but the team debugs Go tooling (CDKTF, Terraform providers). Intermediate Go with zero shipped Go is thin for a Go-centric platform team. *Mitigation:* same portfolio sprint written in Go.
3. **Timezone preference.** UTC+3 vs preferred UTC-8..UTC+2. *Mitigation:* state explicitly in the application: "I consistently work 15:00–23:00 EAT, giving 20+ hours/week of EST overlap" — only if that's actually true and sustainable.
4. **K8s controllers/operators.** Nice-to-have; skip.

## C) Level and Strategy

1. **JD level vs candidate level:** IC3 is mid-level. Isaac targets Senior (profile.yml: Senior Backend Engineer, primary). For Platform/Infra specifically, his archetype fit is "adjacent" (profile.yml L28-30) — so IC3 is arguably his *natural* level in this niche, not a downlevel. That makes the level honest but the comp consequence painful (see Block D).
2. **"Sell senior without lying" plan:** Frame the MTailor migration as platform work: "I built the sync control plane that let us orchestrate 20+ application cutovers with zero downtime" — orchestration-of-infrastructure language maps directly to "build a control plane to orchestrate single-tenant instances." Lead with GCP depth (Pub/Sub, Firestore, GCS, Cloud Functions) since GCP is Sourcegraph Cloud's substrate.
3. **"If downleveled" plan:** N/A — IC3 is already the floor. If anything, the risk is being screened out on Go/Terraform, not downleveled.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted pay bands (IC3 base) | Zone 2 $148K / Zone 3 $111K / Zone 4 $74K + equity | JD (Greenhouse API, 2026-07-31) |
| Zone system | Four cost-of-labor zones; Zone 4 pays 40% of Zone 1 | [Sourcegraph handbook](https://github.com/sourcegraph/handbook/blob/main/content/benefits-pay-perks/pay-expenses/compensation/index.md) |
| Uganda zone | Almost certainly Zone 4 (lowest cost-of-labor tier) → **$74K base** | Handbook zone logic; consistent with the Zone-4-is-40% math (IC3 Zone 1 ≈ $185K) |
| vs Isaac's target | $74K is **below** the $80K–120K target (profile.yml), above the $60K floor | config/profile.yml |
| Company comp reputation | SWE total comp $151K–278K+ (US zones); transparent published bands, geo-adjusted | [Levels.fyi](https://www.levels.fyi/companies/sourcegraph/salaries/software-engineer), [Glassdoor](https://www.glassdoor.com/Salary/Sourcegraph-Salaries-E1356770.htm) |
| Demand | Platform/control-plane engineers with Go+Terraform+K8s are in strong demand; Sourcegraph (Amp, code intelligence) is a high-signal name in AI dev tools | Market context |

**Comp verdict:** transparent but geo-punitive — Zone 4 lands $6K under target. Combined with equity it might clear $80K, but base alone doesn't.

## E) Personalization Plan

Given the SKIP recommendation, only actionable if Isaac deliberately stretches:

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | Generic senior backend headline | "Backend/platform engineer with deep GCP (Pub/Sub, Firestore, GCS) and zero-downtime migration experience" | GCP is the one requirement where he beats the field |
| 2 | Skills | Terraform absent | Do NOT add Terraform without doing the portfolio sprint first | Never invent |
| 3 | MTailor bullets | Migration framed as app work | Reframe as orchestration/control-plane: "orchestrated cutover of 20+ services" | Mirrors "control plane to orchestrate instances" |
| 4 | CodeBits bullet | Kafka/Docker/K8s buried at L77 | Promote to first bullet of that role | K8s is an explicit requirement |
| 5 | Projects | None listed | Add the Go+Terraform GCP sprint project once built | Converts both blockers into partial matches |

LinkedIn: mirror #1 and #3 in headline/about; add "Kubernetes" and "GCP" as top skills; follow Sourcegraph and engage with their infra blog posts before applying.

## F) Interview Prep

Compact — only if Isaac stretches into an application. Master stories already in `interview-prep/story-bank.md` cover this role:

| # | JD Requirement | Story (story bank) | Reflection angle |
|---|----------------|--------------------|------------------|
| 1 | Debug distributed systems / operational excellence | "Zero-downtime Parse→Firebase migration" — two-way MongoDB↔Firestore sync via Pub/Sub | Two-way sync preserved rollback for the whole cutover window |
| 2 | Expose infrastructure as APIs (gRPC) | "gRPC service bus for USSD legal-aid providers" | Schema-first design pays compound interest |
| 3 | Cloud platform depth (GCP) | Parse→Firebase story, GCS/S3 angle (cv.md L18, L22) | Cost-driven migration: $5K/month savings as the business case |

- **Case study to present:** the MongoDB↔Firestore sync pipeline as a mini control plane — emphasize idempotency, ordering, and failure handling in Pub/Sub.
- **Red-flag questions:** "How much Go have you shipped?" — answer honestly: intermediate, actively closing the gap with a project; do not bluff a Go-heavy team. "Can you cover EST on-call?" — have a concrete schedule answer ready.

---

## Keywords extracted

Go, Terraform, CDK for Terraform, Kubernetes, GCP, AWS, Azure, control plane, single-tenant, inter-cloud connectivity, infrastructure as APIs, gRPC, distributed systems debugging, OS-level primitives, on-call, SLA, operational excellence, Sourcegraph Cloud, managed SaaS, regulated industries
