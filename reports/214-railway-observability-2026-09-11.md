# Evaluation: Railway — Senior Infra Engineer: Observability

**Date:** 2026-09-11
**Archetype:** Platform / Infrastructure Engineer (Isaac's **adjacent / stretch** archetype per `config/profile.yml`) — specifically an observability-platform specialist seat: telemetry ingestion at 1M+ RPS, alerting engines, Golang/Rust gRPC services, Terraform/Ansible immutable infra
**Score:** 2.4/5
**URL:** https://jobs.ashbyhq.com/railway/4856389c-44d8-4635-ba51-5fc1b8a49ca8
**PDF:** none (score < 3.0)
**Verification:** live via Playwright 2026-09-11: Ashby posting renders "Senior Infra Engineer: Observability @ Railway", `Location: Global`, `Location Type: Remote`. Board cross-check: 8 reqs, 6 tagged `Global` vs 2 tagged `Remote (United States)` — deliberate distinction. Application form on a sibling Global req inspected live: Name / Email / Resume / "Why Railway?" only — no location, country, or work-auth field.
**Recommendation:** SKIP — weak match, and the weakness is entirely technical, not geographic. The geo is the best signal this pipeline has produced all year (explicit `Global`, a deliberate distinction against the same board's `Remote (United States)` reqs, and an application form with literally no location, country, or work-auth field). But the role is a dedicated observability-platform specialist seat and five of its load-bearing requirements land simultaneously on Isaac's documented gaps: 1M+ RPS telemetry ingestion, fault-tolerant alerting engines, VictoriaMetrics/ClickHouse observability stacks, **Golang/Rust gRPC services built from scratch**, and **Terraform/Ansible immutable infrastructure**. The TypeScript/GraphQL mention that made this req worth a second look does **not** rescue it — see section B; it is a single *interface-with-another-team's-edge* bullet, not a spine. Comp is unpublished on every Railway req and the only public data point is a geo-discounted one. If Isaac sends exactly one Railway application (he should — see section C), this is not the one.

---

## Geo Check — PASS (strongest geo signal in the pipeline)

- **Posting metadata (live, verbatim):** `Location: Global` · `Location Type: Remote`.
- **Deliberate-distinction test — passes cleanly.** The same Ashby board carries 8 reqs: 6 tagged `Global`, 2 tagged `Remote (United States)`. Railway distinguishes the two on the same board on the same day, so `Global` is a considered statement, not a default. This is the exact test that failed #211 (Moniepoint, "Remote, Lagos, Nigeria" on a board where a sibling was plain "Remote") and it passes here in the opposite direction.
- **Application form (inspected live on a sibling Global req):** Name / Email / Resume / "Why Railway?" — **no country field, no location field, no work-authorization question, no visa question.** There is nothing on the form that can screen Uganda out.
- **JD corroboration (verbatim):** "We're distributed ALL across the globe, and that's only going to be more and more distributed." Plus an explicit async-boundaries paragraph: "the end of your day may overlap with the start of someone else's" — UTC+3 is a non-issue for a company that says this outright.
- **Independent corroboration of non-US hiring:** Levels.fyi's Railway page carries a Software Engineer data point reported from **Uzbekistan** ([Levels.fyi — Railway](https://www.levels.fyi/companies/railway/salaries)). Railway demonstrably employs engineers outside the US/EU. (That same data point is also the comp warning — see section D.)
- **Time zone:** no core-hours requirement stated anywhere in the JD; only two standing meetings, "Just a Monday and a Friday to go over the Company Board."

**Verdict: PASS, emphatically.** Per the standing rule (aggregator labels lie; resolve the canonical ATS posting), this was resolved at the canonical Ashby source and the form was inspected. Geography is not the problem with this req — the job description is.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer — observability specialist (adjacent/stretch archetype) |
| Domain | Developer PaaS / cloud infrastructure. Railway: 2M+ developers, ~200K new developers/month, tens of millions ARR, 3.5x YoY ([VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)) |
| Function | Build the observability engine of the platform: telemetry ingestion, alerting, metrics/log APIs, and the infrastructure it runs on |
| Core bullets | (1) "ingestion pipelines to consume 1M+ RPS streams of logs, metrics, and other telemetry"; (2) "scalable, fault tolerant alerting engines… real-time… threshold breaches"; (3) "rich backend observability APIs"; (4) "APIs to access realtime log/metrics streams"; (5) "Build Golang/Rust GRPC services **from scratch**"; (6) "infrastructure that can be torn down, failed over, and reconstituted from scratch using principle of immutable infrastructure using **Terraform and Ansible**"; (7) Engineering Requirement Documents; (8) "**Interface with** our TypeScript and GraphQL edge to expose your microservice APIs" |
| Named technologies | Golang, Rust, gRPC, Terraform, Ansible, VictoriaMetrics, ClickHouse, TypeScript + GraphQL (at the edge, owned elsewhere) |
| Seniority | "Senior" in title; **no years bar, no named credential gate** anywhere in the JD — the bar is stated as distributed-systems judgement, grit and ambiguity tolerance |
| Remote | Global, fully remote; async-first; two standing meetings/week |
| Team size | JD says "At the time of writing we're 21" — stale text; post-Series-B reporting puts Railway at ~30 and growing ([finsmes](https://www.finsmes.com/2026/01/railway-raises-100m-in-series-b-funding.html)) |
| Comp | **Not published.** `Compensation field: null` on the Ashby posting; JD says only "Great salary, full health benefits including dependents, strong equity grants, equipment stipend" |
| Process | 5 stages: intro chat → **async design exercise** ("Design the engine for managing observability" for a Railway-like system) → 60-min solution review with the team → meet 4 people → offer chat with CEO |
| TL;DR | Build Railway's observability platform from the ground up — 1M+ RPS ingestion, alerting engine, Go/Rust gRPC services, Terraform/Ansible infra — at a 30-person, $100M-Series-B, genuinely globally-distributed PaaS. |

## B) CV Match

| JD Requirement | CV Evidence (exact lines) | Match |
|---|---|---|
| "Build ingestion pipelines to consume **1M+ RPS** streams of logs, metrics, and other telemetry" | cv.md CodeBits: "Architected a microservices backend… using Apache Kafka, Docker, and Kubernetes" (NGO case-management scale, 2020–21); MTailor: "real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub" | ❌ streaming concepts yes, telemetry ingestion at 1M+ RPS no — three-plus orders of magnitude above anything on the CV |
| "Build scalable, fault tolerant **alerting engines**… real-time… threshold breaches" | Nothing on cv.md | ❌ hard gap |
| "Interests in **VictoriaMetrics, ClickHouse**, and other systems for building observability stacks from the ground up" | Nothing on cv.md. Datastores are MongoDB, Firestore, SQL — no time-series or columnar OLAP store | ❌ hard gap — this is the specialist core of the seat |
| "Build **Golang/Rust** GRPC services **from scratch** capable of supporting tens of thousands of users" | cv.md Skills: "**Intermediate:** Go, AWS, **Rust**". gRPC is real: CodeBits "Built a USSD service for legal aid providers communicating with a Node.js backend via **gRPC**" | ❌ on the load-bearing half. gRPC as a protocol ✅; Go/Rust as the authoring language for from-scratch senior-owned services — intermediate, zero production line |
| "Define infrastructure that can be torn down, failed over, and reconstituted from scratch… immutable infrastructure using **Terraform and Ansible**" | Zero IaC anywhere on cv.md. Same gap recorded in #156, #166, #168, #187, #204 | ❌ hard gap, fifth consecutive report |
| "Craft rich backend observability APIs" / "Provide APIs to access realtime log/metrics streams" | cv.md: Express APIs; Firebase Cloud Functions; gRPC contract; Pub/Sub consumers. API design is genuine | ⚠️ API craft ✅, but the *subject matter* (metrics/log stream APIs) is unevidenced |
| "**Interface with** our TypeScript and GraphQL edge to expose your microservice APIs" | cv.md: JavaScript throughout; TypeScript asserted in `config/profile.yml` ("Node.js / TypeScript backend systems (5+ years)") but **not on the cv.md Skills line**. **GraphQL appears nowhere in cv.md or profile.yml** | ⚠️ — and see the note below, this bullet is much smaller than it looks |
| "A strong understanding of distributed systems… fault tolerant, resilient, and scalable services" | cv.md CodeBits: Kafka/Docker/K8s/NATS Streaming microservices; MTailor: Pub/Sub sync surviving a live 20+ app cutover with zero outages | ⚠️ genuine but at NGO/e-commerce scale, not platform scale |
| "Write Engineering Requirement Documents… idea → defined tasks → implementation → monitoring its success" | cv.md MTailor contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ |
| "The tact to implement your solution, **create monitors for its error boundaries**, and document requirements for when you're not around" | Documentation ✅ (above). Monitoring practice: nothing named on cv.md | ⚠️ half |
| "A solid intuition about how long your solutions will last… we can hope for 12–18mo" | Zero-downtime migration of a Parse-EOL estate is exactly a system-lifespan story | ✅ |
| "A great sense of direction and prioritization… ambiguity of an early stage startup" | cv.md CodeBits: "Led a team of 4 developers"; MTailor: owned a 20+ app migration reporting directly to the CTO | ✅ |
| "A sense of grit to dive into a problem, implement a solution, scale that solution, and replace it when needed" | MTailor: "Saved the company $5,000/month by migrating all services off AWS"; Dr Wealth: "query over 2 million Firestore records" | ✅ |
| "A great set of communication skills" | 4+ yrs fully remote across US and Singapore teams from UTC+3; SDK docs; Ops training | ✅ |

**On the TypeScript/GraphQL question — the specific thing this evaluation was asked to judge honestly.**

It does **not** pull the req above the 2.0–2.5 SRE/platform band, for three reasons:

1. **It is one bullet out of eight, and it is a boundary bullet.** The verb is "*Interface with* our TypeScript and GraphQL edge to expose your microservice APIs." The TS/GraphQL edge is a thing that already exists and is owned by another team (the JD's sibling reqs include a Full-Stack Product seat that owns it — report #213). The hire's job is to publish gRPC endpoints that someone else's edge consumes. It is not a TypeScript job with an infra flavour; it is an infra job with one TypeScript-adjacent handshake.
2. **GraphQL is not on Isaac's CV at all.** Even taking the bullet at face value, half of it is a zero. TypeScript is asserted in profile.yml but absent from the cv.md Skills line.
3. **The authoring language for this seat is explicitly Go/Rust, not TypeScript.** Bullet 5 says "Build Golang/Rust GRPC services from scratch." Where the JD names the language Isaac would write in every day, it names his two intermediate languages. This is the opposite of the Toggl case (#210, 4.2 APPLY), where the JD explicitly waived the Go bar — "Prior Golang experience is not mandatory but you have to be willing to adopt it and become comfortable with it fast." Railway offers no such on-ramp; it asks for from-scratch service authorship in Go/Rust as a senior deliverable.

**Gap summary.** Five simultaneous hard gaps (1M+ RPS telemetry ingestion · alerting engines · VictoriaMetrics/ClickHouse · Go/Rust from-scratch service authorship · Terraform/Ansible immutable infra), matching the #204 / #187 / #168 / #156 pattern almost exactly. What is genuinely different and keeps this off the 2.0 floor: **no years bar, no named credential gate**, a real gRPC line on the CV, and an interview process that is a **design exercise** rather than a tooling-experience screen (see section C). Those differences are worth roughly +0.2, not +1.0.

## C) Level and Strategy

- **JD level vs Isaac's level.** The JD asks for senior judgement in a domain, not senior years. Isaac is ~6.5 yrs and genuinely senior as a **backend engineer** — the MTailor migration is senior-scope work by any reading. But his seniority *in observability infrastructure* is near zero. Same two-axis mismatch as #204: the general-engineering axis is fine, the in-domain axis is not, and the in-domain axis is what this seat is for.
- **The one honest differentiator.** Railway's process is: "Imagine a theoretical or actual system like Railway which can manage stateless and stateful compute workloads. **Design the engine for managing observability.**" That is a systems-design exercise, not "show me your Prometheus/Grafana estate." A strong distributed-systems thinker can genuinely compete on a design exercise. But 45 minutes of live building against candidates who have shipped VictoriaMetrics/ClickHouse stacks in anger is not a fight worth picking as a first Railway impression — and Isaac gets exactly one.
- **Concentration — this is the decisive point.** Three Railway reqs from the same Ashby board are in this batch: **#212 (Senior Infra Engineer: Scalability)**, **#213 (Senior Full-Stack Engineer: Product)**, and this one (#214). They share one recruiting funnel, one 30-person team, and one CEO who does the final chat. Three applications from one candidate to a 30-person company in the same week reads as spray, and it burns the strongest geo signal in the pipeline on the weakest fit. **Isaac should send at most one Railway application.**
  - **Ranking, this req against its siblings: #214 ranks LAST of the three.** #213 (Full-Stack Product) sits on Isaac's *secondary* archetype with a TypeScript/React/GraphQL spine he can actually evidence; #212 (Scalability) is also a stretch but is a general distributed-systems/platform seat rather than a named-tool observability specialism. #214 asks for the deepest specialist credential of the three (VictoriaMetrics/ClickHouse/alerting engines) *and* the hardest language bar (Go/Rust from scratch) *and* the IaC gap, all at once.
  - **Action: do not apply to #214.** Spend the single Railway shot wherever #213's evaluation lands, and keep Railway warm for later.
- **If Isaac applies anyway (not recommended):** he would be interviewing for a seat whose day-one deliverables he has never built, at a company where the CEO personally meets every hire. A weak design review here plausibly closes the door on #213-shaped roles at Railway for a year. The downside is not a wasted afternoon; it is a burned relationship with the best-geo employer on the board.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| This req — published comp | **None.** Ashby `Compensation field: null`; no figure on the posting or on railway.com/careers | JD, live posting |
| JD's only comp language | "Great salary, full health benefits including dependents, strong equity grants, equipment stipend, and much more" — zero numbers, and it redirects to a careers page that also publishes none | JD (verbatim) |
| Public Railway data (thin and geo-skewed) | Reported points: Software Engineer **$9,765** (Uzbekistan), Product Manager $14,234, Accountant $11,725, Product Designer $199,000 (US). Median of the reported set $12,979 | [Levels.fyi — Railway](https://www.levels.fyi/companies/railway/salaries) |
| Aggregator coverage | Himalayas holds **no** Railway salary data ("We don't have any data on what Railway pays its remote employees") | [Himalayas — Railway salaries](https://himalayas.app/companies/railway/salaries) |
| Funding / ability to pay | **$100M Series B, January 2026**, led by TQ Ventures with FPV, Redpoint, Unusual. Tens of millions ARR, 3.5x YoY, 15% MoM, 2M+ developers | [blog.railway.com](https://blog.railway.com/p/series-b), [VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud), [finsmes](https://www.finsmes.com/2026/01/railway-raises-100m-in-series-b-funding.html) |
| Market band for the US version of this seat | Senior/above platform-infra total comp commonly $195K–$385K depending on tier and equity loading | [KORE1 Platform Engineer Salary Guide 2026](https://www.kore1.com/platform-engineer-salary-guide-2026/) |
| Isaac's numbers | Target $80–120K, floor **$60K** | `config/profile.yml` |

**Read — comp is the open risk on this req, and it cuts both ways.**

The positive case: a $100M Series B with tens of millions in ARR can obviously clear a $60K floor without noticing, and "strong equity grants" at a 30-person company growing 15% MoM is a genuinely valuable lottery ticket.

The negative case, and the reason this scores 2.5 rather than 3.5: **Railway publishes no number anywhere, and the only non-US engineering data point in public is $9,765 (Uzbekistan).** Treat that single figure with heavy scepticism — Levels.fyi's Railway sample is four rows deep and the low ones may be partial-year, contractor, or currency-conversion artefacts. But the *pattern* it points at is the thing to watch: Railway hires globally and there is no public evidence of a flat, location-independent band. Compare #210 (Toggl), which published a single flat €83,000 "for this position" with no regional variants — that is what geo-neutral pay looks like when a company means it. Railway's silence is not evidence of a low offer, but it is the absence of the one piece of evidence that would de-risk a Kampala application.

**If Isaac ever engages Railway (for #213, not this req), the comp question must be asked in stage one**, phrased as: "Is the band for this role location-independent, or adjusted by geography? I'm based in Kampala, UTC+3." Their own JD invites it — "please ask us things. Many things! Hard things."

**Demand:** high and real. Eight open reqs, six of them Global, at a 30-person company that just raised $100M explicitly to "grow its team" and "expand its global data center footprint." Railway will be hiring for months, which is precisely why there is no cost to skipping this req and coming back later with a better-matched one.

## E) Personalization Plan (applied in PDF)

**No PDF generated — score 2.4 is below the 3.0 threshold, and this evaluation recommends not applying.** No tailoring plan is offered, because tailoring a CV toward "1M+ RPS telemetry ingestion" and "Terraform and Ansible" would require claiming experience Isaac does not have.

**What to do instead — the mitigation that actually opens this archetype.**

Report #204 recommended a public IaC + observability credential project and left it as a single sentence. This is the fifth report in a row to hit the identical wall (#156, #168, #187, #204, #214), so here is the concrete build, scoped to the gaps this specific JD named rather than restated generically. This is a weekend-scale project, not a career change — and #214's own take-home ("design the engine for managing observability") is literally the spec:

| # | Deliverable | What it closes (JD phrase it answers) | Notes |
|---|---|---|---|
| 1 | A public repo: `otel-ingest-lab` — a small telemetry ingestion service that accepts OTLP over gRPC, written in **Go** | "Build Golang/Rust GRPC services from scratch"; "ingestion pipelines… logs, metrics, and other telemetry" | Go, not Node — the point is to convert "Intermediate: Go" into a link. Isaac already has gRPC on the CV (the USSD service), so this is an extension of real experience, not a new claim |
| 2 | Write to **ClickHouse** (or VictoriaMetrics) rather than Postgres, and say why in the README | "Interests in VictoriaMetrics, ClickHouse, and other systems for building observability stacks from the ground up" — the single most specific and most unmet line in the JD | Columnar/time-series storage choice is the whole credential here; a README paragraph on cardinality and retention trade-offs is worth more than the code |
| 3 | **Terraform** module that stands the whole thing up from zero, plus a documented `terraform destroy` → `terraform apply` rebuild | "infrastructure that can be torn down, failed over, and reconstituted from scratch using principle of immutable infrastructure using Terraform and Ansible" — quoted almost verbatim | Record the teardown/rebuild as an asciinema clip in the README. This is the gap that has cost five reports; one afternoon of Terraform ends it permanently |
| 4 | A **threshold alerting rule** with a webhook sink, and a written note on what happens when the sink is down | "scalable, fault tolerant alerting engines… real-time… threshold breaches"; "create monitors for its error boundaries" | Fault tolerance of the alerter itself is the senior signal — most candidate projects miss it |
| 5 | A **load-test number** in the README: RPS achieved, on what hardware, where it broke, and what the next bottleneck would be | "1M+ RPS"; "A solid intuition about how long your solutions will last" | Nobody expects 1M RPS on a laptop. Honestly stating "12K RPS on a 2-core box; the next wall is X" demonstrates the exact intuition the JD asks for, and is unfakeable |
| 6 | A one-page **Engineering Requirement Document** in the repo, in Railway's own format: idea → defined tasks → implementation → how success is monitored | "Write Engineering Requirement Documents to take something from idea, to defined tasks, to implementation, to monitoring its success" | Isaac already has the documentation habit (Firebase SDK docs, Ops training) — this just files it under the right name |
| 7 | Add **TypeScript** to the cv.md Skills line (profile.yml already asserts 5+ yrs) | The TS/GraphQL edge bullet; also fixes a standing cv-sync discrepancy flagged in #210 | Do this regardless of Railway — it is a truthful line missing from the CV |

Items 1–6 are one repo. Once it exists and is linked from the CV, every future JD on this axis moves from "❌ zero evidence" to "⚠️ demonstrated at small scale" on **four** of the five hard gaps — which is the difference between a 2.4 and a low-3s, and would make a future Railway infra req genuinely worth the single application slot. Until it exists, the standing #204 guidance holds: **stop spending evaluation slots on named-tool observability/SRE specialist seats.**

## F) Interview Prep

Not applicable — this evaluation recommends skipping. Recorded here only so the work carries forward if Isaac interviews at Railway for a different req (#212/#213) or builds the section-E project and returns to this axis.

| # | JD Requirement | STAR+R Story (existing bank) | Usable as-is? |
|---|---|---|---|
| 1 | "A strong understanding of distributed systems… fault tolerant, resilient, and scalable services" | Kafka/Kubernetes microservices for FIDA Uganda (bank: *[Distributed infrastructure]*) | ✅ honest, but scale-capped — lead with the design reasoning, never the throughput |
| 2 | "Ingestion pipelines… realtime streams" | Two-way MongoDB↔Firestore sync on Pub/Sub (bank: *[Real-time systems / streaming]*) | ✅ the closest genuine analogue — idempotent consumers, redelivery, ordering |
| 3 | "A solid intuition about how long your solutions will last. All systems age." | Zero-downtime Parse→Firebase migration (bank: *[Lead end-to-end backend project]*) | ✅ strongest card — a whole estate aged out and he replaced it live |
| 4 | "A sense of grit… implement, scale, and replace when needed" | AWS exit saving $5,000/month (bank: *[Cost optimization / FinOps]*) | ✅ |
| 5 | "Write Engineering Requirement Documents"; "document any requirements for when you're not around" | SDK docs and Ops training (bank: *[Enablement / documentation]*) | ✅ |
| 6 | "Ambiguity of an early stage startup"; "high ownership" | Running CodeBits end-to-end (bank: *[Founder-shaped ownership]*) | ✅ — a 21–30 person startup is home turf |
| 7 | gRPC services | USSD gRPC service bus (bank: *[Public API / extensibility platform]*) | ✅ for the protocol; ❌ if asked "in Go?" — answer honestly: Node.js |
| 8 | Golang/Rust from scratch; Terraform/Ansible; VictoriaMetrics/ClickHouse; alerting engines; 1M+ RPS | **No story exists and none can be honestly constructed** | ❌ — this is why the req is a skip |

- **The question that ends the interview, if he took it:** "Walk me through an observability stack you've built or operated." There is no honest answer. That single question is the evaluation in miniature.
- **Story bank:** every usable story above is already in `interview-prep/story-bank.md`. This JD produced no genuinely new STAR+R material — a skip generates no new experience — so nothing was appended.

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Technical/stack fit | **1.5** | Five simultaneous hard gaps, each named explicitly in the JD: 1M+ RPS telemetry ingestion, fault-tolerant alerting engines, VictoriaMetrics/ClickHouse, Go/Rust gRPC services from scratch, Terraform/Ansible immutable infra. Real touchpoints exist — gRPC (USSD service), Kafka/K8s microservices, Pub/Sub streaming, API design, documentation discipline — but they are the supporting cast of the JD, not its core. The TypeScript/GraphQL bullet is a boundary handshake with another team's edge, and GraphQL is absent from the CV entirely |
| Seniority fit | **2.5** | No years bar and no credential gate in the JD, which genuinely helps; Isaac is senior by scope (CTO-reporting programme lead, 4-dev team lead, ~6.5 yrs). But "Senior Infra Engineer" here means senior *in observability infrastructure*, where he is at zero. Same two-axis mismatch as #204 |
| Remote/Geo | **5.0** | Best geo signal in the pipeline. `Location: Global` vs `Remote (United States)` on the same board (deliberate distinction), application form with no country/location/work-auth field at all, "distributed ALL across the globe" in the JD, an explicit async-boundaries paragraph, two meetings a week, and independent evidence of non-US/EU engineering hires |
| Comp | **2.5** | Nothing published on any Railway req; the JD gestures at "great salary" and "strong equity" with zero figures. $100M Series B and tens of millions ARR mean the money exists; the absence of any flat-band statement, against a public $9,765 non-US engineering data point, means there is no evidence it reaches $60K in Kampala. Unknown, with the one available signal pointing the wrong way |
| Domain/Growth | **3.0** | Excellent domain to grow into — developer-infra PaaS at 2M+ developers, novel problems, high autonomy, strong brand — and the design-exercise interview format is more open to an outsider than a tooling-experience screen. But the archetype is Isaac's adjacent/stretch, and here the learning curve is the job's first-quarter deliverable rather than a growth path |
| **Overall** | **2.4/5** | **SKIP — weak match.** Sits squarely in the established 2.0–2.5 specialist-platform band (#168 2.0, #204 2.2, #187 2.4, #156 2.5). The TypeScript/GraphQL spine was worth checking and does not hold up: one interface bullet, half of it unevidenced, against a JD whose authoring languages are Go and Rust with no on-ramp clause (contrast #210 Toggl 4.2, where the Go bar was explicitly waived). Exceptional geo and a real design-exercise opening keep it off the 2.0 floor; five stacked hard gaps keep it well under 3.0. **Ranks last of the three parallel Railway reqs (#212, #213, #214) — send at most one Railway application, and not this one.** No PDF generated |

## Keywords extracted

Senior Infra Engineer, Observability, platform engineering, telemetry ingestion, 1M+ RPS, logs, metrics, traces, alerting engine, threshold breach, real-time streams, observability APIs, Golang, Go, Rust, gRPC, microservices, distributed systems, fault tolerance, resilience, scalability, VictoriaMetrics, ClickHouse, time-series database, columnar storage, Terraform, Ansible, immutable infrastructure, infrastructure as code, teardown and failover, Engineering Requirement Document, TypeScript, GraphQL, edge API, stateless and stateful compute, developer platform, PaaS, early-stage startup, high ownership, high agency, async remote, Global, remote worldwide, Series B, Railway
