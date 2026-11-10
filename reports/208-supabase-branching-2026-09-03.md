# Evaluation: Supabase — Software Engineer - Branching

**Date:** 2026-09-03
**Archetype:** Platform/Infrastructure Engineer (CI/CD execution platform, distributed job orchestration) — secondary: Senior Backend Engineer
**Score:** 2.6/5
**URL:** https://jobs.ashbyhq.com/supabase/06752423-eebb-472c-95b5-c7ff2559fd60
**PDF:** none (score < 3.0)
**Verification:** live via Ashby API 2026-09-03 (job id present in `https://api.ashbyhq.com/posting-api/job-board/supabase`, `publishedAt` 2026-09-02, department Engineering / team Compute; job page serves a JSON-LD JobPosting block with matching title and `datePosted: 2026-09-02`)
**Recommendation:** SKIP — weak match, but the closest Supabase infra req to Isaac's profile since #167. The JD prints a literal language gate: **"strong software engineering skills (Go and Typescript required)"**. TypeScript is a 5/5 match; Go is "Intermediate" on cv.md with zero production Go bullets — the same mechanism that killed #165 (4+ yrs production Go) and #166. Stacked on top: **"familiarity with AWS constructs is required"** (Isaac's AWS is S3/EC2/EBS at intermediate depth, then migrated off), **EKS/ECS** provisioning (K8s yes via CodeBits; EKS/ECS no), and **IaC (Pulumi/Terraform) strongly preferred** (absent). The genuine strengths — TypeScript, event-driven distributed systems on Kafka/Kubernetes, retry/idempotency discipline from the Pub/Sub sync, 4+ yrs in async globally-distributed teams — make this a 2.6 rather than a 2.0, but "required" means required at Supabase. 7th Supabase SKIP (with #207 evaluated the same day); geo remains perfect.

---

## Geo Check — PASS

- **Exact location text (Ashby API):** `"location": "Remote, Global"`, `"isRemote": null` (field unset on this req, as on ~half of Supabase's Global reqs — the location string is the authoritative signal), `secondaryLocations: []`.
- **JD body (verbatim):** "This role is ideal for someone who thrives in async, fast-paced environments"; good-fit bullet "Have experience in async or globally distributed teams" — the JD asks for exactly the working pattern Isaac has practiced for 4+ years from Kampala.
- **JD benefits text (verbatim):** "Fully Remote — We hire globally. We believe you can do your best work from anywhere. There are no Supabase offices, but we provide a WeWork membership or co-working allowance you can use anywhere in the world." Health insurance "wherever you are".
- **Board contrast:** sibling reqs carry "Remote, AMER" / "Remote, EMEA" / "Remote, APAC" / city tags; "Remote, Global" is a deliberate designation.
- **Verdict: PASS.** Kampala UTC+3 is a non-issue; the async requirement is a plus.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer — CI/CD runner platform ("similar to runners used by tools like Buildkite, GitHub Actions, and Blacksmith CI"); strong Senior Backend overlap on the orchestration/scheduling logic |
| Domain | Supabase Branching: lifecycle engine for creating, merging, and rebasing database branches; ephemeral sandboxed execution on EKS/ECS for untrusted build workloads from connected git repos |
| Function | Build: orchestration engine, job scheduler for thousands of concurrent builds, caching/artifact storage, retry/timeout/cancellation/failure-propagation, observability (traces/metrics/structured logs surfaced to end users), JSON/TOML config + Terraform/Pulumi integrations |
| Seniority | 3+ yrs building and operating cloud infrastructure or distributed systems at scale |
| Remote | Fully remote, global, async (see Geo Check) |
| Team | Compute department; size not stated |
| Comp | Not posted (Ashby `compensation` empty); ESOP, 100% health, allowances |
| TL;DR | A Go+TypeScript distributed-systems seat building a CI runner fleet on AWS — Isaac matches the TypeScript, the distributed-systems instincts, and the async culture, and misses the Go, the AWS depth, and the IaC. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|---|---|---|
| **Strong software engineering skills (Go and Typescript required)** | TypeScript/Node.js: daily in every role since 2020 (cv.md all stacks; profile.yml "Node.js / TypeScript backend systems (5+ years)"). Go: cv.md Skills "Intermediate: Go" — no production Go bullet anywhere | ✅ TS / ❌ Go — half of a literal "required" |
| 3+ yrs building and operating cloud infrastructure or distributed systems at scale | cv.md CodeBits: "Architected a microservices backend ... using Apache Kafka, Docker, and Kubernetes" (2020–21); MTailor: real-time MongoDB↔Firestore sync on Pub/Sub, 20+ app migration on GCP (2022–present). Distributed systems yes; "cloud infrastructure" as the thing being built, less so | ⚠️ adjacent-strong on distributed systems, thin on infra |
| Familiarity with AWS constructs **required**; AWS SDKs + IaC (Pulumi/Terraform) strongly preferred | cv.md: "AWS S3/EC2/EBS" in MTailor stacks; migrated S3→GCS via Python (SDK use). Skills: AWS "Intermediate". No EKS/ECS, no IAM/VPC evidence, no Terraform/Pulumi | ⚠️ familiarity yes / ❌ IaC |
| Provision ephemeral sandboxed execution on EKS/ECS for untrusted workloads with managed secrets | Kubernetes + Docker in production (CodeBits). No EKS/ECS, no sandboxing/isolation or secrets-management evidence | ⚠️ K8s primitives only |
| Job scheduling scaling to thousands of concurrent builds | Pub/Sub message-driven processing under live production load; Kafka event backbone. No scheduler/queue-of-jobs system built | ⚠️ |
| Retry, timeout, cancellation, failure-propagation logic | Two-way sync with idempotent message processing and conflict handling under redelivery (cv.md MTailor bullet 1; profile.yml proof point) — same correctness class | ✅ strongest technical card |
| Instrument full pipeline lifecycle: traces, metrics, structured logs to end user | Not named on CV (recurring gap: #167, #207) | ❌ |
| Config files (JSON/TOML) + Terraform/Pulumi integrations | JSON yes trivially; Terraform/Pulumi provider work no | ❌ |
| Optimize pipeline runtimes: caching, artifact storage, dependency reuse | Dr Wealth: query-shape/batching optimization over 2M+ Firestore records (cv.md) — optimization instinct, different layer | ⚠️ |
| Production operations mindset — reliable, observable, maintainable | Zero-downtime migration of 20+ apps with rollback-capable cutovers (cv.md MTailor) | ✅ |
| Ownership mindset — operate independently with high-level guidance | Sole owner of migration reporting directly to CTO; hired as contractor and converted; led team of 4 at CodeBits | ✅ |
| Communicate across technical and non-technical audiences | SDK docs for engineers + Ops team training (cv.md Contractor) | ✅ |
| Experience in async or globally distributed teams | 4+ yrs remote for US (MTailor, Mind2matter) and Singapore (Dr Wealth) employers from Kampala | ✅ |
| Energized by solving real-world problems for developers | Wrote the Firebase SDK docs others onboarded from; built career-ops tooling (story bank) | ✅ |
| Comfortable navigating ambiguity, moving quickly | Agency work under tight deadlines (Mind2matter); thin-spec NGO delivery (CodeBits) | ✅ |

**Gaps and mitigation:**

1. **Go (hard blocker).** "Required" in parentheses is as literal as Supabase gets. #165 (4+ yrs Go) and #166 (Go Terraform provider) were rejected on this exact axis; nothing on the CV has changed since. Mitigation is not a cover-letter phrase — it is shipping Go. If Isaac wants Supabase infra seats (this one, Auth, IaC Platform, CLI Engineer all list Go), a small but real Go service in public (e.g. a job-runner that schedules containers on a local K8s cluster with retry/timeout/cancellation semantics — literally this JD's problem in miniature) is the credential. Until then, applying here is the seventh application into the same wall.
2. **AWS depth + EKS/ECS + IaC.** "Familiarity with AWS constructs is required" is a lower bar than #207's EC2-economics requirement, and S3/EC2/EBS usage plausibly clears "familiarity". But the role provisions ephemeral EKS/ECS environments with secrets — that is AWS-native platform work Isaac has done on GCP/Firebase and generic K8s, not on AWS. Same mitigation as #207 item 2: one real Terraform/Pulumi project.
3. **Observability instrumentation (repeat gap).** Third consecutive Supabase req wanting traces/metrics/logs ownership. If Isaac used any tracing/metrics during the migration, cv.md needs it (verify, do not invent).
4. **Sandboxing untrusted workloads.** Security-adjacent infra (isolation, secrets) not evidenced; nice-to-have inside the responsibilities, not a listed gate.

**Verdict:** seven ✅ on the behavioral/culture rows and on TypeScript + failure-handling; the technical gate rows (Go, IaC, observability, EKS/ECS) are ❌/⚠️. Better balance than #207 — hence 2.6 not 2.4 — but a screener reads "Go and Typescript required" against "Intermediate: Go" and stops.

## C) Level and Strategy

- **JD level:** Mid-to-senior IC (3+ yrs bar is low; scope — scheduler for thousands of concurrent builds, security isolation — is senior).
- **Isaac's natural level for this archetype:** senior on the TypeScript/distributed-systems half, junior on the Go/AWS-platform half. That asymmetry is exactly #167's shape (TS 5/5, Rust gap) — but #167's JD said "strong fluency in Rust" as one of two languages in a role whose user-facing half was TypeScript-native; here Go is the runner-fleet language and TypeScript is likely the API/config edge.
- **Sell-senior plan (only if Isaac chooses to apply against advice):** lead with the Pub/Sub sync as a retry/idempotency/failure-propagation story, the Kafka/K8s microservices architecture as distributed-systems ownership, and 4+ yrs async-remote delivery; state Go level honestly in the first paragraph of the cover letter and link a Go repo. Without the repo, do not apply.
- **Downlevel plan:** if a conversation ever happened, accept a mid-level seat at or above the $60K floor (Supabase comp clears it — Block D) with a 6-month Go-ownership review. A mid seat in a 60-country ESOP org beats a senior title at a geo-risky startup.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| Posted comp | None — Ashby `compensation.compensationTiers: []` on this and every Supabase req | Ashby API 2026-09-03 |
| Supabase engineering comp | Median TC $115,575; Software Engineer common-range avg ~$124,954 TC; non-US datapoint (Dominican Republic) $117K–133K — geo-adjustment appears moderate | [Levels.fyi Supabase](https://www.levels.fyi/companies/supabase/salaries), [Levels.fyi SWE](https://www.levels.fyi/companies/supabase/salaries/software-engineer) |
| Supabase reputation | Career opportunities 4.9/5 (Glassdoor, 10 reviews, Sept 2026); ESOP for all, 100% health, 60 open reqs, $1B+ raised incl. $500M Series F | [Glassdoor Supabase](https://www.glassdoor.com/Overview/Working-at-Supabase-EI_IE7639911.11,19.htm), JD, Ashby API |
| Market: DevOps/platform engineer 2026 (US) | Median base $182K across 1,000 postings; remote median $190K; p25 $150K / p75 $210K | [RFS 2026 salary data](https://www.recruitingfromscratch.com/blog/devops-platform-engineer-salary-in-2026-real-data-from-1-9-million-job-postings) |
| Market: Go in 2026 | Go is a core language for cloud infrastructure, distributed systems, DevOps tooling, and platform engineering; among the most-requested languages in remote postings alongside TypeScript and Rust | [JobRise Go 2026](https://jobrise.io/en/blog/golang-developer-jobs-2026-salary/), [Veriipro remote roles](https://veriipro.com/blog/remote-software-engineering-jobs/) |
| Isaac's target | $80K–120K, $60K floor | config/profile.yml |
| Demand | CI/CD runner platforms are a hot category (Blacksmith, Depot, Namespace, Buildkite all hiring); nearly all list Go. The market is telling Isaac the same thing Supabase is: Go opens this archetype | WebSearch above |

Comp would land inside or above the target band if offered; not the constraint.

## E) Personalization Plan

Not applied — no PDF below the apply threshold. What would make this req (and the CLI Engineer, Auth, and IaC reqs on the same board) viable, all truth-gated:

| # | Section | Current state | Change needed to become viable | Why |
|---|---|---|---|---|
| 1 | Projects | No Go project | Public Go service: container job runner with retry/timeout/cancellation, scheduled on kind/K8s, structured logs + Prometheus metrics | Converts "Intermediate: Go" into evidence; mirrors this JD's responsibilities |
| 2 | Skills | No IaC | Terraform or Pulumi project deploying the above (or his GCP stack) | "Strongly preferred" here; decisive on #166/#207 |
| 3 | Experience (MTailor) | Sync bullet says "two-way sync ... Pub/Sub" | If true, add the failure semantics: idempotent redelivery handling, conflict resolution, retry policy | JD: "retry, timeout, cancellation, failure-propagation" |
| 4 | Experience (MTailor) | No observability named | Name the monitoring/alerting actually used during cutovers, if any | JD: traces, metrics, structured logs |
| 5 | Summary | Migration-first | Only after 1–2 exist: "TypeScript and Go backend engineer building distributed job orchestration and developer tooling" | Don't lead with a language the CV can't back |

LinkedIn: no changes for this req.

## F) Interview Prep

Not applying; no new prep generated. Existing story-bank entries that would carry a future conversation on this archetype:

| # | JD Theme | Existing story | Framing |
|---|---|---|---|
| 1 | Retry/timeout/cancellation/failure-propagation | Two-way MongoDB↔Firestore sync on Pub/Sub | Redelivery-safe processing; "a duplicate message must never become a duplicate job" |
| 2 | Distributed systems at scale, K8s | Kafka/Kubernetes microservices for FIDA Uganda | Event-driven service boundaries; Docker/K8s in production |
| 3 | Reliability under live traffic | Zero-downtime Parse→Firebase migration | Sequenced cutovers with rollback = predictable behaviour under failure |
| 4 | Developer tooling / DX | SDK docs and Ops training; Career-ops agentic pipeline | "Energized by solving real-world problems for developers" |
| 5 | Learning a required language fast | Contractor on unfamiliar stack → migration lead | The honest answer to "you don't have production Go" — only credible with a Go repo to point at |
| 6 | Async, globally distributed teams | 4+ yrs remote for US/Singapore employers | Direct match to the JD's stated culture |

No genuinely new STAR+R stories emerged — every relevant experience is already in the bank, and Isaac has no CI-runner, job-scheduler, or Go production story to add.

**Red-flag question if he ever applies to this archetype:** "How much Go have you shipped to production?" Today the honest answer is "none" — and Supabase's JD says required.

---

## Keywords extracted

Go, TypeScript, CI/CD, execution platform, runners, Buildkite, GitHub Actions, Blacksmith CI, distributed systems, orchestration engine, Supabase Branching, ephemeral environments, sandboxed execution, untrusted workloads, EKS, ECS, secrets management, job scheduling, concurrent builds, caching, artifact storage, dependency reuse, retry, timeout, cancellation, failure propagation, observability, traces, metrics, structured logs, JSON, TOML, Terraform, Pulumi, AWS SDK, Infrastructure as Code, production operations, ownership, async teams, developer tools
