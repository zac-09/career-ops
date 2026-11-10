# Evaluation: Supabase — Platform Engineer - Compute Capacity

**Date:** 2026-09-03
**Archetype:** Platform/Infrastructure Engineer (capacity engineering / FinOps-flavored infra seat) — profile.yml marks this archetype "adjacent"
**Score:** 2.4/5
**URL:** https://jobs.ashbyhq.com/supabase/4eb14408-51e6-4c58-812a-3782d5c0b045
**PDF:** none (score < 3.0)
**Verification:** live via Ashby API 2026-09-03 (job id present in `https://api.ashbyhq.com/posting-api/job-board/supabase`, `publishedAt` 2026-09-02, team "Compute", `isRemote: true`; job page also serves a JSON-LD block with `jobLocationType: TELECOMMUTE`)
**Recommendation:** SKIP — weak match. This is NOT the usual Supabase Go-gate: the JD's language bar is soft ("comfortable in modern languages like TypeScript, Python, and Go") and Isaac clears it on TypeScript/Python. The blocker is the domain. Four of eight "good fit" bullets are load-bearing infra credentials Isaac's CV does not evidence: **5+ yrs infrastructure/SRE/platform/capacity engineering** (his 6.5 yrs are application backend), **Infrastructure as Code (Pulumi or Terraform)**, **owned observability (Prometheus/Grafana, CloudWatch)**, and **"solid working knowledge of AWS EC2: instance families and generations, purchase options, capacity reservations, and quota mechanics"** — the last one is the whole job. His strongest adjacent card ($5,000/month AWS exit) is a cost story about leaving EC2, not about buying it well. 7th Supabase SKIP; geo remains perfect.

---

## Geo Check — PASS

- **Exact location text (Ashby API):** `"location": "Remote, Global"`, `"isRemote": true`, `secondaryLocations: []`. JSON-LD on the job page: `jobLocationType: "TELECOMMUTE"`, no `applicantLocationRequirements`.
- **JD benefits text (verbatim):** "Fully Remote — We hire globally. We believe you can do your best work from anywhere. There are no Supabase offices, but we provide a WeWork membership or co-working allowance you can use anywhere in the world." Health insurance "wherever you are". "We operate asynchronously and trust you to manage your own time."
- **Board contrast:** Supabase's board deliberately distinguishes "Remote, AMER" / "Remote, EMEA" / "Remote, APAC" / "Remote, San Francisco, CA" tags on sibling reqs (Support Engineer, Customer Solution Architect, API Engineer, OrioleDB Developer). "Remote, Global" on this req is a chosen designation, not a default.
- **Company footprint:** ~400 people, 60+ countries. Kampala UTC+3 is inside the EMEA/APAC overlap band.
- **Verdict: PASS** — 8th consecutive clean geo result on Supabase. Geo has never been the problem; the requirements bar has.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer — specifically capacity engineering: forecasting, buffer policy, reservation acquisition, fleet reconciliation |
| Domain | Cloud infrastructure at Postgres-platform scale: "millions of databases", every AWS region Supabase operates in |
| Function | Build + operate: automation that turns a capacity plan into provisioned reality; metrics/alerting for saturation, reservation coverage, idle buffer, forecast error, provisioning latency; demand-gate intake; right-sizing / instance-family migrations; capacity incident response |
| Seniority | 5+ years infra/SRE/platform/capacity engineering, "ideally at SaaS or cloud infrastructure scale" |
| Remote | Fully remote, global, async (see Geo Check) |
| Team | Compute department, Compute Capacity team; size not stated |
| Comp | Not posted (Ashby `compensation` object empty); ESOP for every employee, 100% health, tech + education allowances |
| TL;DR | An AWS capacity-economics seat — buy the right EC2 reservations at the right time in the right region and prove it with metrics — dressed as a platform engineer role. Language-agnostic, domain-specific. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|---|---|---|
| 5+ yrs across infrastructure engineering, SRE, platform, or capacity engineering, ideally at SaaS/cloud-infra scale | cv.md: ~6.5 yrs (CodeBits Jan 2020 → MTailor present) but as application/backend engineer: migrations, APIs, sync pipelines, features. Infra-shaped slices: Kafka/Docker/Kubernetes microservices architecture (CodeBits), AWS→GCP consolidation (MTailor). No SRE, platform, or capacity title or team | ❌ years exist, discipline doesn't |
| Production software engineering — "owned and operated a service, not just a notebook"; comfortable in TypeScript, Python, Go | cv.md: Node.js/JavaScript daily in every role; Python (S3→GCS migration script, SDK docs); Go/Rust "Intermediate" (Skills). Owned the 20+ app zero-downtime migration end to end reporting to the CTO | ✅ clears the bar as written |
| Comfortable working against incomplete forecasts/assumptions, revising as they change | Migration cutover sequencing under live traffic with rollback paths (cv.md MTailor bullets 1-2) — adjacent evidence of working against shifting assumptions | ⚠️ adjacent, not capacity forecasting |
| Infrastructure as Code (Pulumi or Terraform) | Not on CV. Zero Terraform/Pulumi anywhere (same gap that sank #166 IaC Platform) | ❌ hard gap |
| Built/maintained observability for owned systems — metrics that answer real questions, alerting people trust (Prometheus/Grafana, CloudWatch or similar) | Not named on CV. Operational discipline implied by zero-downtime migration, but no metrics/alerting stack cited (same gap flagged in #167) | ❌ hard gap |
| Solid working knowledge of AWS EC2: instance families/generations, purchase options, capacity reservations, quota mechanics | cv.md: "AWS S3/EC2/EBS" in MTailor stack; "Saved the company $5,000/month by migrating all services off AWS". Used EC2, then decommissioned it. No evidence of reservation purchasing, Savings Plans, ODCR/quota work | ❌ the load-bearing gap |
| Some financial fluency — reservation economics, coverage vs utilization vs cost | $5,000/month structural saving (cv.md); +$40/order Express Shipping revenue framing. Cost-consciousness is real; reservation economics specifically is not evidenced | ⚠️ adjacent |
| Communicate clearly across audiences, engineers to finance | Wrote SDK docs for engineers; trained Ops team on dashboard/backups (cv.md Contractor bullets); reported to CTO | ✅ |
| Extend IaC for capacity-relevant provisioning (responsibility) | see IaC row | ❌ |
| Capacity incident response and post-incident follow-through | De facto on-call as sole migration owner; no formal incident practice | ⚠️ |

**Gaps and mitigation:**

1. **EC2 capacity/reservation mechanics (hard blocker).** This is the subject matter of the team, not a tool on the side. A screener reads "solid working knowledge of ... capacity reservations and quota mechanics" against a CV whose AWS story is "migrated off AWS" and rejects. No honest reframing closes it. Mitigation is future-facing only: hands-on with EC2 purchase options (On-Demand vs Savings Plans vs ODCR), Service Quotas, and Compute Optimizer on a personal account would make this row ⚠️ — it will not make it ✅ without a job doing it.
2. **IaC (hard blocker, repeat).** Third Supabase req (after #166, #168) where Terraform/Pulumi absence is decisive. If Isaac wants any Supabase infra seat, a real Terraform or Pulumi project (deploying his own Cloud Run/Cloud Functions stack) is the single highest-leverage CV addition — cheaper than learning Go and it unlocks multiple reqs.
3. **Observability ownership (hard blocker, repeat).** The JD wants "alerting people trust". If Isaac actually used Cloud Monitoring/Stackdriver dashboards or alerts during the MTailor migration, that belongs on cv.md — verify with Isaac, do not invent. Without it, this row stays ❌.
4. **5+ yrs infra discipline.** Not closable; his trajectory is backend/full-stack. Profile.yml already marks Platform/Infra as "adjacent".

**Verdict:** two ✅, three ⚠️, five ❌ — and the ❌ column is the job description's core (capacity, IaC, observability, infra tenure). Unlike #167 (one hard gap against a 5/5 language match), there is no half of this role that is Isaac's home turf.

## C) Level and Strategy

- **JD level:** Senior IC platform engineer with capacity-planning ownership; comfortable presenting cost/headroom tradeoffs to finance.
- **Isaac's natural level for this archetype:** mid-level infra generalist (senior backend, but infra is adjacent). One honest level below on discipline, plus missing the domain entirely.
- **Sell-senior plan:** not recommended. The only truthful pitch is "backend engineer who ran a zero-downtime fleet migration and eliminated $5K/month of AWS spend, wants to move into capacity engineering" — a career-change pitch, and Supabase's literal screening (6 prior SKIPs on exactly this mechanism) does not reward career-change pitches.
- **Downlevel plan:** moot; there is no seat here at a lower level.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| Posted comp | None — Ashby `compensation.compensationTiers: []`, `summaryComponents: []` for this and every Supabase req | Ashby API 2026-09-03 |
| Supabase engineering comp | Median TC $115,575; highest reported role Software Engineer ~$124,954 TC; non-US datapoints (e.g. Dominican Republic $117K–133K) suggest geo-adjustment is moderate, not punitive | [Levels.fyi Supabase](https://www.levels.fyi/companies/supabase/salaries), [Levels.fyi SWE](https://www.levels.fyi/companies/supabase/salaries/software-engineer) |
| Supabase reputation | Career opportunities rated 4.9/5 (10 reviews, Sept 2026); ESOP for every employee, 100% health | [Glassdoor Supabase](https://www.glassdoor.com/Overview/Working-at-Supabase-EI_IE7639911.11,19.htm), JD |
| Market: remote cloud/platform engineer (US) | Avg remote cloud engineer $131K; AWS cloud engineer $111.5K (p25) – $149K (p75), $170K (p90); AWS certifications add $10–25K | [Built In](https://builtin.com/salaries/us/remote/cloud-engineer), [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Aws-Cloud-Engineer-Salary) |
| Market: DevOps/platform engineer 2026 | Median base $182K (1,000 postings); remote median $190K; "basic" platform engineers $120–160K | [RFS 2026 data](https://www.recruitingfromscratch.com/blog/devops-platform-engineer-salary-in-2026-real-data-from-1-9-million-job-postings) |
| Isaac's target | $80K–120K, $60K floor | config/profile.yml |
| Demand | Capacity engineering is a niche, high-leverage specialty at hyperscale-adjacent companies; postings are rare and require prior capacity/FinOps exposure. Supabase has 60 open reqs, 25+ tagged "Remote, Global" | Ashby API 2026-09-03 |

Comp would clear the target band comfortably if offered — irrelevant given the fit verdict.

## E) Personalization Plan

Not applied — no PDF for a role below the apply threshold. If Isaac wants this archetype to open up over the next 6–12 months, the CV changes that matter (all truth-gated; only add what he actually does):

| # | Section | Current state | Change needed to become viable | Why |
|---|---|---|---|---|
| 1 | Skills | No IaC | Ship a real Terraform or Pulumi project (e.g. his own GCP/Firebase stack as code) and list it | Decisive on #166, #168, #207, #208 |
| 2 | Experience (MTailor) | "$5,000/month by migrating all services off AWS" | If true, name the mechanism: which instances/storage were right-sized or decommissioned, how spend was measured before/after | Turns a cost anecdote into FinOps evidence |
| 3 | Experience (MTailor) | No observability named | If Cloud Monitoring/alerting was used during cutovers, say so with specifics | JD: "alerting people trust" |
| 4 | Summary | Backend-migration narrative | Only after 1–3 exist: "backend engineer with infrastructure cost and reliability ownership" | Don't pitch a discipline the CV can't back |
| 5 | Projects | — | Small public repo: EC2 reservation-coverage calculator or quota-drift checker using the AWS SDK | Directly demonstrates the JD's vocabulary |

LinkedIn: no changes for this req.

## F) Interview Prep

Not applying; no new prep. For the record, the stories that would carry a future capacity/infra conversation already exist in `interview-prep/story-bank.md`:

| # | JD Theme | Existing story | Framing |
|---|---|---|---|
| 1 | Cost per database / commitment coverage | Cost optimization / FinOps — AWS exit saving $5,000/month | Structural savings over line-item trimming; measure before and after |
| 2 | Drift between committed and running capacity | Two-way MongoDB↔Firestore sync on Pub/Sub | Reconciliation loops, idempotent convergence — same shape as fleet reconciliation |
| 3 | Operating at fleet scale under live traffic | Zero-downtime Parse→Firebase migration | Sequenced cutovers with rollback = capacity mitigation project discipline |
| 4 | Cross-audience communication (eng → finance) | SDK docs and Ops training | Writing for non-engineers |
| 5 | Learning a new domain fast | Contractor on unfamiliar stack → migration lead | The honest answer to "you've never done capacity planning" |

No genuinely new STAR+R stories emerged — Isaac has no capacity-planning or reservation-purchasing experience to turn into one, and inventing one is prohibited.

**Red-flag question if he ever applies to this archetype:** "Walk me through how you'd decide between an On-Demand Capacity Reservation and a Savings Plan for a new region." Today there is no honest answer from experience; that is the gap in one sentence.

---

## Keywords extracted

capacity planning, capacity engineering, compute capacity, forecasting, buffer policy, headroom, reservation acquisition, capacity reservations, EC2 instance families, purchase options, quota mechanics, fleet reconciliation, drift detection, Infrastructure as Code, Pulumi, Terraform, observability, Prometheus, Grafana, CloudWatch, alerting, saturation metrics, forecast error, provisioning latency, right-sizing, instance-family migration, autoscaling, workload consolidation, cost per database, reservation economics, SRE, platform engineering, TypeScript, Python, Go, AWS, incident response
