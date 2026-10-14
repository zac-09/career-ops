# Evaluation: Supabase — Platform Engineer, Managed Postgres

**Date:** 2026-10-14
**Archetype:** Platform/Infrastructure Engineer (profile.yml: "adjacent"). Secondary: Senior Backend Engineer, because most of the "What you'll be doing" list is service, API and pipeline work
**Score:** 2.9/5
**URL:** https://jobs.ashbyhq.com/supabase/9073c0cd-2545-473a-b2ac-63e4615c69b5
**PDF:** ❌ (score < 3.0, so no PDF generated)
**Verification:** live via Ashby API on 2026-10-14. Job id `9073c0cd-…` is present in `https://api.ashbyhq.com/posting-api/job-board/supabase?includeCompensation=true` with `isListed: true`, `publishedAt` 2026-10-09, department Engineering, team **Platform Data**, location "Remote, Global", FullTime. No compensation is published (`compensationTiers: []`).
**Recommendation:** **SKIP for now. This is a weak match, though a borderline one.** It is the softest Supabase infra requisition so far. There is no hard Go gate ("Proficient in TypeScript and/or Go … (other languages also considered)"), and Postgres appears **only under Nice to have**. Even so, the requirements list still includes **Infrastructure as Code (Pulumi/Terraform/CDK)**, **owning SLIs/SLOs and on-call for large-scale production systems**, and **observability (metrics, logging, tracing, profiling)**. cv.md evidences none of the three. The title and team ("Managed Postgres", "Platform Data") also mean the day-to-day domain is a Postgres fleet, and cv.md has no production relational database work. One IaC project would push this over 3.0. That is the cheapest way to unlock the whole Supabase infra band.

---

## Geo Check: PASS

| Signal | Evidence (verbatim) | Direction |
|---|---|---|
| Ashby location | "Remote, Global" (no secondary locations) | ✅ Global |
| Remote policy | "**Fully Remote** — We hire globally. We believe you can do your best work from anywhere. There are no Supabase offices, but we provide a WeWork membership or co-working allowance you can use anywhere in the world." | ✅ Global |
| Benefits | "Supabase covers 100% of health insurance for employees and 80% for dependents, wherever you are." | ✅ Global |
| Async | "We operate asynchronously and trust you to manage your own time." | ✅ |
| Work auth / timezone | None stated | ✅ Clean |
| Only caveat | "Comfortable participating in on-call rotations for large-scale production systems". No timezone is named | ⚠️ clarify in interview |

Kampala (UTC+3, EAT) is not a problem. This matches every prior Supabase evaluation: geography has never been the blocker.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infra (adjacent) with a strong backend tilt |
| Domain | Core platform services behind Supabase's managed Postgres offering (team: Platform Data) |
| Function | Build and operate: "distributed services and APIs", "data-intensive workflows, background jobs, and event-driven pipelines", SLIs/SLOs, observability, CI/CD, design docs/RFCs |
| Seniority | Senior. "ideally with 5+ years building production services" in TypeScript and/or Go |
| Remote | Fully remote, global, async |
| Team size | Not stated. The company has ~400 people across 60+ countries |
| Comp | Not published |
| TL;DR | A senior platform software engineer on the Postgres-fleet team. The language bar is soft, but there is a firm operator bar (IaC, SLOs, on-call, observability) and an implicit Postgres domain bar |

## B) CV Match

| JD requirement | CV evidence (exact lines) | Match |
|---|---|---|
| Designing and operating distributed systems: "consistency, fault tolerance, partitioning, consensus, and back pressure" | "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub for message processing" (MTailor). "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes" (CodeBits) | ⚠️ Real event-driven distributed work. Consistency and fault tolerance are implied by the bidirectional sync. Partitioning, consensus and back pressure are not evidenced |
| "Proficient in TypeScript and/or Go, ideally with 5+ years … (other languages also considered)" | Node.js/JavaScript across every role since Jan 2020 (~6.5 yrs). TypeScript only at Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js" (Aug 2021 – Jan 2022, ~6 months). Go is "Intermediate" with no production bullet | ⚠️ The "other languages also considered" clause carries the Node.js tenure. TypeScript depth is ~6 months, so do not claim more |
| Cloud infrastructure (AWS preferred) + container orchestration | "AWS S3/EC2/EBS" (MTailor stack). "Saved the company $5,000/month by migrating all services off AWS". GCP/Firebase as the primary cloud. Docker + Kubernetes (CodeBits) | ⚠️ Comfortable with cloud. AWS is intermediate and was migrated *away from*. K8s experience is from 2020–21 |
| Multi-tenant architectures, API design, data modelling | Backend API work at every employer. "Built a case management system for FIDA Uganda and a paralegal database for LASPNET Uganda". Data modelling done in MongoDB/Firestore. Multi-tenancy not evidenced | ⚠️ |
| Networking fundamentals + security best practices | gRPC service for USSD (CodeBits). Nothing on networking or security practice | ❌ weak |
| **Infrastructure as Code (Pulumi preferred; Terraform/CDK also fine)** | Absent from cv.md | ❌ hard gap. Fifth Supabase requisition to hit it |
| **On-call rotations for large-scale production systems** | Not evidenced. Ownership of zero-downtime cutovers is adjacent | ❌ |
| Own SLIs/SLOs; incident response; post-incident reviews | Not evidenced | ❌ |
| Observability: metrics, logging, tracing, profiling | No tool named anywhere on cv.md | ❌ |
| CI/CD and release processes | Implied by Docker/K8s work and a staged 20+ app migration. No pipeline ownership stated | ⚠️ weak |
| "Lead projects that improve scalability, reliability, and cost efficiency" | "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime, reporting directly to the CTO". "Saved the company $5,000/month by migrating all services off AWS" | ✅ the strongest match here |
| "Build data-intensive workflows, background jobs, and event-driven pipelines" | "Built ad-hoc jobs to query over 2 million Firestore records, keeping customer prices current from Morningstar APIs" (Dr Wealth). "Built a migration script to read data from MongoDB and write to Firestore after running complex processing logic". Pub/Sub sync | ✅ |
| Design docs, RFCs, tests | "Wrote documentation for fellow engineers on working with the new Firebase SDKs". "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ⚠️ documentation yes. RFCs and testing are not evidenced |
| *Nice:* Postgres internals, logical replication, CDC pipelines | **No Postgres or relational engine anywhere on cv.md.** "SQL" sits on the Proficient line but no role evidences it. CDC-shaped work exists: the live MongoDB↔Firestore two-way sync is effectively a hand-built change-data-capture pipeline | ❌ Postgres / ⚠️ CDC (a real adjacent hook) |
| *Nice:* service mesh, workload identity, zero-trust | None | ❌ |
| *Nice:* performance engineering, capacity planning | Cost reduction is evidenced. Capacity planning is not | ⚠️ |
| *Nice:* OSS contributions in systems/databases/runtimes | None listed | ❌ |

**Tally on hard requirements:** two ✅ (both from the "What you'll be doing" list), six ⚠️, four ❌ (IaC, on-call, SLOs, observability), plus a weak networking/security row.

### How disqualifying is the Postgres gap?

- **On paper it is not a gate.** Postgres internals, logical replication and CDC appear only under "Nice to have". The required bullets never name a database engine. Only "data modelling" touches the subject.
- **In practice it matters more than its placement suggests.** The title is "Managed Postgres" and the team is "Platform Data". The services, background jobs and SLOs are all about running customers' Postgres instances: provisioning, backups/PITR, upgrades, replicas, failover. A system-design round will almost certainly be Postgres-shaped. Isaac would be learning the core domain from scratch while also learning IaC and SRE practice. Supabase is a Postgres company, and every competing candidate for this seat will bring Postgres fluency.
- **The honest framing:** the gap alone is not disqualifying. It becomes disqualifying when stacked on the operator gaps (IaC, SLOs/on-call, observability), because then nothing in the core of the job is home turf. The CDC adjacency (two-way MongoDB↔Firestore sync over Pub/Sub) is a real and interview-worthy bridge, but it does not substitute for Postgres knowledge.
- **The CV contradiction stays unresolved:** "SQL" is listed as Proficient with no evidencing bullet. Do not lean on it here. A Supabase interviewer will test it directly.

### Gaps and mitigation

| Gap | Blocker? | Adjacent experience | Portfolio cover | Honest mitigation |
|---|---|---|---|---|
| IaC (Pulumi/Terraform/CDK) | Hard (listed requirement) | None | None | Codify a real stack in Pulumi (TypeScript) and publish it. Pulumi-in-TS uses his strongest language and is Supabase's preferred tool. This is the single highest-leverage fix across #166/#207/#208/#223/#242 |
| SLIs/SLOs, on-call, incident response | Hard for a platform seat | Zero-downtime cutover ownership | None | Only state on-call if he actually carried a pager at MTailor. If he did, put it on cv.md with specifics |
| Observability tooling | Hard | Cutover monitoring is implied | None | If Cloud Monitoring/Logging or alerting was used during the migration, name it on cv.md. Otherwise add OpenTelemetry to a side project |
| Postgres / relational production | Nice to have on paper, but the core domain in practice | CDC-like sync pipeline. "SQL" listed, unevidenced | None | Build a small Postgres logical-replication/CDC demo (e.g. Postgres → Pub/Sub) in TypeScript. That closes the domain gap and the CDC nice-to-have in one project |
| TypeScript depth (~6 months) | Soft ("and/or", "other languages also considered") | 6.5 yrs Node.js/JavaScript | None | Pitch as Node.js with production TypeScript. Never claim more than the Dr Wealth tenure |
| Consensus/partitioning/back-pressure theory | Medium | Kafka + Pub/Sub | None | Prepare to discuss Kafka partitioning and Pub/Sub flow control concretely from the CodeBits/MTailor work |

## C) Level and Strategy

- **JD level:** senior platform engineer (5+ yrs production services) who also operates the services: SLOs, on-call, IaC.
- **Isaac's natural level:** senior on backend service building, pipelines and migrations. Junior-to-mid on platform operations (IaC, SLOs, observability, on-call), and entry-level on Postgres.
- **"Sell senior without lying":** "I've spent 6+ years building Node.js backends and data pipelines. My biggest project was a zero-downtime migration of 20+ production apps with a live two-way MongoDB↔Firestore sync over Pub/Sub running in parallel, which is change-data-capture in practice. I'm moving onto the platform side and into Postgres." This is truthful. It also openly admits the domain switch, which is the weak point in a screen.
- **If downleveled:** a mid-level platform seat on this team would be acceptable if comp stays within the $80K–120K target. Supabase's single-band, location-light comp (Levels.fyi median ~$115.6K TC) makes that plausible. Ask for a 6-month review tied to IaC/on-call ownership.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| Posted comp | None. Ashby `compensationTiers` is empty. ESOP is given to every team member | Ashby API, 2026-10-14 |
| Supabase pay | Median TC ~$115.6K. Software Engineer common range ~$117K–133K (possible $103K–147K). Top reported ~$125K | [Levels.fyi — Supabase](https://www.levels.fyi/companies/supabase/salaries), [Levels.fyi — Supabase SWE](https://www.levels.fyi/companies/supabase/salaries/software-engineer) |
| Isaac's target | $80K–120K, floor $60K | config/profile.yml |
| Demand | Supabase is actively hiring Postgres-domain engineers. A separate "Postgres Engineer (Remote Global)" listing is indexed by aggregators. Postgres platform skills are in high demand, which raises the bar for non-Postgres candidates | [jobcrawls listing](https://www.jobcrawls.com/en/job/47uZpeFcR/Supabase/postgres-engineer-remote-global-remote) |
| Stability | "Over $1B raised (including our $500M Series F)", ~400 people, 540,000+ community members | JD body |

If an offer came, the comp would fit the target band. Comp is not the obstacle.

## E) Personalization Plan

No PDF was generated (score < 3.0). These changes would make this requisition, and the Supabase infra band in general, viable. All of them are truth-gated: add only what Isaac has actually done.

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Skills / Projects | No IaC | Public Pulumi (TypeScript) repo provisioning a real service; list it | Required here and in four earlier Supabase requisitions |
| 2 | Projects | No Postgres | Postgres logical-replication → Pub/Sub CDC demo in TypeScript | Closes the domain gap and matches the "logical replication, or CDC" nice-to-have |
| 3 | Experience (MTailor) | "real-time two-way sync … Pub/Sub" | If true, add how conflicts, ordering, retries and idempotency were handled | Maps directly to "consistency, fault tolerance … back pressure" |
| 4 | Experience (MTailor) | "ensuring zero downtime" | Name the monitoring/alerting used during cutovers, and any on-call duty, only if real | SLO/observability/on-call rows are currently empty |
| 5 | Skills | "SQL" on the Proficient line with no evidence | Either add a bullet that evidences it or move it down. Do not keep an untestable claim before a Postgres interview | Credibility risk at a Postgres company |

LinkedIn (same truth gate): headline "Senior Backend Engineer — Node.js/TypeScript, event-driven pipelines, zero-downtime migrations". Pin the IaC and CDC repos once they exist. Add Pulumi and PostgreSQL to Skills only after the repos ship. Add "two-way sync / CDC" vocabulary to the MTailor entry.

## F) Interview Prep

Isaac is not applying now, so no new stories were appended to the story bank. These stories map from existing material if he later applies:

| # | JD requirement | Story | Reflection angle |
|---|---|---|---|
| 1 | Reliability + cost efficiency | Zero-downtime Parse/MongoDB → Firebase migration of 20+ apps | Sequencing, rollback paths, what he would instrument next time |
| 2 | Event-driven pipelines / CDC (nice to have) | Live MongoDB ↔ Firestore two-way sync over Pub/Sub | Loop prevention, ordering, idempotency. Compare explicitly with Postgres logical replication |
| 3 | Data-intensive background jobs | Ad-hoc jobs over 2M+ Firestore records fed from Morningstar APIs (Dr Wealth) | Batching and rate limits |
| 4 | Distributed systems, partitioning | Kafka/Docker/K8s microservices for FIDA Uganda | What partition keys and consumer groups taught him |
| 5 | Cost efficiency | $5,000/month AWS exit | Trade-offs he accepted |
| 6 | Design docs / cross-team work | Firebase SDK docs, Ops team training | Writing for different audiences |

**Case study:** the 20+ app migration with the Pub/Sub sync, presented as "running two databases in lockstep under live traffic".
**Red-flag questions:** "How does Postgres logical replication work, and how would you upgrade a major version with minimal downtime?" and "Describe an SLO you owned and an incident you led." Neither can be answered from experience today. Do not improvise answers that suggest experience he doesn't have.

---

## Score Breakdown

| Dimension | Weight | Score | Rationale |
|---|---|---|---|
| Technical / skills match | 45% | **2.2/5** | Strong on pipelines, migrations and event-driven work. The language bar is passable thanks to "other languages also considered". Four required operator rows are empty (IaC, on-call, SLOs, observability). Postgres domain is absent |
| Archetype fit | 20% | **2.8/5** | The task list leans backend (services, APIs, jobs, pipelines), but the seat is a Postgres-fleet platform team, and profile.yml marks this archetype "adjacent" |
| Seniority / level | 15% | **3.0/5** | 6.5 yrs of production services clears "ideally 5+". There is no ownership history for operating a platform |
| Remote / geo | 8% | **5.0/5** | "Remote, Global". "We hire globally". Health cover "wherever you are". No auth or timezone clause |
| Compensation | 6% | **4.0/5** | Unposted. Levels.fyi data (~$115.6K median TC + ESOP) clears the $80–120K target |
| Company / growth | 6% | **4.5/5** | $1B+ raised, open-source-first, Postgres expertise would compound |

**Weighted: 0.99 + 0.56 + 0.45 + 0.40 + 0.24 + 0.27 = 2.91 → 2.9/5**

**This is a weak match (below 3.0). Recommendation: SKIP**, unless Isaac has unlisted IaC/on-call/Postgres experience he can add to cv.md truthfully. If he wants to target Supabase, build the Pulumi + Postgres-CDC projects (plan E #1–2) and re-evaluate. Supabase keeps reopening infra requisitions, and this one would likely clear 3.0 with those two items.

## Comparison with prior Supabase evaluations

| # | Req | Score | Gate |
|---|---|---|---|
| 166 | IaC Platform | 1.9 | Go + Terraform provider internals |
| 207 | Compute Capacity | 2.4 | EC2 capacity domain + IaC + observability |
| 208 | Branching | 2.6 | "Go and Typescript required" + AWS + IaC |
| 223 | Edge & Networking | 1.9 | Networking tenure + Go + IaC |
| **242** | **Managed Postgres** | **2.9** | **No Go gate and no hard Postgres gate. IaC + SLO/on-call/observability + implicit Postgres domain** |

The highest Supabase infra score so far. The remaining blockers are mostly skills Isaac can build (IaC, observability, a Postgres project), not career-track tenure like #223's networking requirement.

---

## Keywords extracted

platform engineering, managed Postgres, distributed systems, consistency, fault tolerance, partitioning, consensus, back pressure, TypeScript, Go, APIs, event-driven pipelines, background jobs, data-intensive workflows, SLIs, SLOs, incident response, post-incident review, observability, metrics, logging, tracing, profiling, CI/CD, release process, AWS, container orchestration, multi-tenant architecture, data modelling, networking, security, Infrastructure as Code, Pulumi, Terraform, CDK, on-call, Postgres internals, logical replication, CDC, service mesh, zero-trust, capacity planning, RFCs, design documents
