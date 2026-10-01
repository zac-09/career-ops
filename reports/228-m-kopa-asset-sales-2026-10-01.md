# Evaluation: M-KOPA — Senior Backend Engineer - Asset Sales

**Date:** 2026-10-01
**Archetype:** **Senior Backend Engineer** (primary) — distributed, event-driven microservices IC with production/on-call ownership. Secondary shade of **Platform/Infrastructure Engineer** ("owning the entire software stack — including supporting infrastructure").
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/M-KOPA/0c0fdef0-61b7-4f7d-bd56-c09d66471396
**PDF:** output/cv-isaac-m-kopa-asset-sales-2026-10-01.pdf
**Verification:** live via Ashby posting API (JSON, published 2026-09-30) 2026-10-01; JD saved to jds/m-kopa-senior-backend-engineer-asset-sales.md
**Recommendation:** **CONSIDER — apply only with the C#/.NET gap confronted in the first two sentences of the cover letter and, ideally, a small .NET + Service Bus demo built before the screen.** Geography, seniority, architecture and company are all genuinely strong; the stack dimension is a probable hard screen and the arithmetic average (3.5) overstates the odds. Same verdict shape as report #174 (3.2, Team Lead, Discarded), and this seat is *more* exposed to the language gap than that one was, because it is a hands-on IC role.

---

## Headline caveats (read these before the score)

1. **C#/.NET is required bullet #1 and the JD closes on it.** Verbatim: "**Strong grasp of C# and .NET development**" is the first item under Required Experience, and the call-to-action is "Ready to build **C#/.NET systems** — with AI as part of your craft…? Apply Now!" cv.md has zero C#, zero .NET, zero Azure. Report #174 scored the same gap 2.0 for a *Team Lead* seat where that JD said "we work in Azure but welcome experience across major cloud providers". This JD has **no such cloud-agnostic clause**; the only flexibility offered is on messaging ("would love to hear from you if you have experience with similar messaging technology (Kafka, RabbitMQ, etc.)"). Stack is scored **1.5/5** here, below #174, deliberately.
2. **The average masks a gating dimension.** Five of six dimensions score 3.0–5.0; one scores 1.5. For a hands-on IC role the language is what he will type all day — it is not a side-dimension. Treat 3.5 as "worth a deliberate, gap-first application", not as "good match".
3. **Everything else M-KOPA asks for, he has shipped.** Event-driven microservices (Kafka, Pub/Sub, NATS), Kubernetes/Docker, idempotency/retries/out-of-order handling under live traffic, end-to-end ownership reporting to a CTO, distributed teams across US/Singapore/Uganda time zones, daily AI tooling. The JD's "Own it beyond the pull request" paragraph reads like a description of the MTailor sync service.
4. **Observability and on-call are named requirements with thin CV evidence.** "Experience using observability tooling (e.g. Grafana, Application Insights)" and "DevOps culture mindset, including on-call/production ownership" — cv.md names no Grafana, no SLOs, no paging tool, no formal rotation. Zero-downtime cutover and Ops/backup training are the nearest honest evidence. Do not name tools he has not used.
5. **Comp is unpublished and M-KOPA pays in local bands.** Ashby comp field is `null`. Levels.fyi data exists only for the UK (median ~£73.8K TC). African-location bands are almost certainly lower; Glassdoor reviews flag pay (mostly non-engineering roles). Expect the Kampala band to sit around or below Isaac's $80K target floor. See §D.
6. **Prior M-KOPA history on the tracker:** #174 (Software Engineering Team Lead, 2026-07-31, 3.2/5, **Discarded**). If Isaac applies here, the application must be visibly better-targeted than a generic re-submit two months later to the same Ashby board — same recruiters, same gap.

---

## Geo Check — PASS (scored on the JD body)

- **Verbatim location clause (body, "Location & Benefits"):** "**Fully remote role, collaborating during core GMT working hours**".
- **Verbatim team clause (body):** "Work with diverse teams distributed across **UK, Europe, and Africa**" and "Fully distributed: Work remotely with diverse teams across UK, Europe, and Africa".
- **Ashby location list (chips, corroborating not deciding):** "Nairobi / Cape Town / Lagos / **Kampala** / Accra / Johannesburg" — Kampala explicitly listed as a hiring location, as it was for #174.
- **Country restriction:** none. **Work-authorization clause:** none. **Timezone requirement:** core GMT hours. Kampala is UTC+3 → a 3-hour offset; a 09:00–17:00 GMT core day is 12:00–20:00 EAT. Workable, slightly late-shifted; ask whether "core hours" means the full day or a 4-hour overlap window.
- **Residual risk:** none on eligibility. Pay-band geography is the exposure (see §D). Pre-employment background checks are stated (criminal record, ID, academic, employment dates and references) — normal for a regulated lender; have Makerere transcript and MTailor/Dr Wealth references ready.

**Verdict: geography OPEN.** This is one of the few postings on the tracker where Isaac's location is an advantage rather than a thing to negotiate around.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer (event-driven microservices IC); Platform/Infra shade |
| Domain | FinTech — asset financing (smartphones, e-motorbikes) for "Every Day Earners" across Africa; Asset Sales group |
| Function | Build + operate (end-to-end: "from idea, through implementation and deployment, into production and iteration") |
| Seniority | Senior ("curious, autonomous, and highly trusted"; permanent hire) |
| Remote | Fully remote; core GMT working hours; UK/Europe/Africa team |
| Team size | Not stated; "expanding engineering team", Asset Sales group |
| Stack | C# / .NET microservices on Azure + Kubernetes; Azure Service Bus; Grafana + Azure Application Insights; Claude and other AI tools in the daily workflow |
| Operating model | Automated tests, SLOs, alerting, deployment safeguards; "On-call as feedback, not heroics"; "The Campfire Rule" |
| TL;DR | Hands-on senior IC building and operating C#/.NET event-driven microservices on Azure for M-KOPA's asset-sales platform — perfect geo and architecture fit for Isaac, with a probable hard screen on the one thing he has never written: C#. |

## B) CV Match

| JD Requirement | CV Evidence (cv.md, verbatim) | Match |
|---|---|---|
| "**Strong grasp of C# and .NET development**" | None. Skills: "Proficient: Node.js, TypeScript, Firebase, React, GCP, Python… Intermediate: Go, AWS, Rust, React Native". Nearest: polyglot production record — Node.js (all roles), Python ("Migrated file storage from Amazon S3 to GCS via a Python script"), Go listed intermediate. | ❌ **Hard gap, required #1** |
| "Experience with event-driven systems — We use Azure Service Bus, but would love to hear from you if you have experience with similar messaging technology (Kafka, RabbitMQ, etc.)" | "Architected a microservices backend for FIDA Uganda's case management app using **Apache Kafka**, Docker, and Kubernetes" (CodeBits); "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and **Google Pub/Sub** for message processing" (MTailor); "NATS Streaming, gRPC" (CodeBits stack) | ✅ **Strong** — JD explicitly invites Kafka experience |
| "Microservices architecture experience, ideally on Azure and Kubernetes" | Kafka/Docker/**Kubernetes** microservices (CodeBits); no Azure anywhere; GCP deep ("Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP"), AWS intermediate | ⚠️ Microservices + K8s yes; Azure no. K8s evidence is CodeBits only (2020–21). |
| "Experience using observability tooling (e.g. Grafana, Application Insights) to understand production behaviour" | Nothing named. Adjacent: "ensuring zero downtime" across 20+ apps; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ⚠️ **Soft gap** — production awareness evidenced, tooling not |
| "Comfort using AI tools as part of a daily engineering workflow (design, code review, testing, incident investigation)" | Not on cv.md. profile.yml proof point: "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision for prescription OCR"; story bank: "[AI-assisted engineering workflow] Career-ops agentic pipeline" (Claude Code pipeline he runs daily) | ✅ Real, but off-CV — surfaced on the PDF summary and Skills |
| "DevOps culture mindset, including on-call/production ownership" | "Led the end-to-end migration… ensuring zero downtime, reporting directly to the CTO"; Ops training on backups; Docker/K8s | ⚠️ Ownership yes; no formal on-call rotation, SLO or incident tooling evidenced |
| "Design for idempotency, retries, out-of-order events, and failure modes" | Two-way MongoDB↔Firestore sync on Pub/Sub under parallel live traffic (cv.md line; story bank #167 details idempotent processing and conflict handling) | ✅ **Strong** — this is the exact problem class |
| "Own what you build end-to-end — from idea, through implementation and deployment, into production and iteration" | MTailor: migration lead reporting to CTO; "Implemented Express Shipping, generating an additional $40 revenue per order"; "Saved the company $5,000/month by migrating all services off AWS" | ✅ |
| "Proven ability to collaborate effectively in distributed teams across time zones" | MTailor (US Remote, 2022–present), Mind2matter (US Remote), Dr Wealth (Singapore Remote), CodeBits (Uganda Remote) — 6+ years fully remote across three continents | ✅ **Strong** |
| "Continuous learning mindset and openness to feedback" | Contractor → FTE conversion at MTailor on a new stack; "Wrote documentation for fellow engineers on working with the new Firebase SDKs" | ✅ |
| Scale: "systems serving millions across multiple African markets" | "Built ad-hoc jobs to query over 2 million Firestore records" (Dr Wealth); 20+ production apps (MTailor) | ⚠️ Mid-scale; nothing at "millions of customers / 2M payments per day" |
| Domain: asset financing / fintech for African users | "Built backends for DeFi applications using Web3 and Node.js" (Mind2matter); "Built a USSD service for legal aid providers" (CodeBits) — same feature-phone demographic | ⚠️ Adjacent; the USSD line is the unique differentiator |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **C#/.NET** | **HARD.** Required #1; closing CTA; hands-on IC seat. | Polyglot (Node.js, Python, Go in production); Kafka/Pub/Sub patterns identical to Service Bus patterns; contractor→lead ramp on an unfamiliar stack | Cover letter sentence two names the gap. Map JD vocabulary ("idempotency, retries, out-of-order events") onto the Pub/Sub sync. **Build a 1–2 weekend demo**: .NET 8 minimal API + Azure Service Bus emulator (or Azurite + a queue), idempotent consumer, retries, dead-lettering, containerised; push to github.com/zac-09 and link it in the summary. Without the demo, the application is probably a recruiter screen-out. |
| 2 | **Azure** | Soft-hard. "ideally on Azure" — ideal, not required. | GCP deep (Pub/Sub, Firestore, Cloud Functions, GCS), AWS intermediate | Verbal bridge: Pub/Sub ≈ Service Bus topics/subscriptions; GKE ≈ AKS. Covered by the same demo as #1. |
| 3 | **Observability tooling (Grafana / App Insights)** | Soft. Named requirement with "e.g." | Zero-downtime cutover monitoring; Ops dashboard + backup training | Speak to how the migration was *watched* (what he looked at, how he knew a cutover was safe). Do not claim Grafana. Add Grafana to the demo if cheap (docker-compose Grafana + OTel) — then it becomes true. |
| 4 | **On-call / SLOs / incident practice** | Soft. Culture requirement, not a qualification. | Production ownership of 20+ apps; backup procedures | Honest line: "I've owned production without a formal pager rotation; I'd welcome one." Ask what the rotation looks like from UTC+3 vs GMT. |
| 5 | **Scale ("millions")** | Soft. | 2M+ Firestore records; 20+ apps | Frame correctness-under-load (idempotency, parallel datastores) rather than raw throughput numbers he doesn't have. |
| 6 | **Kubernetes depth (CodeBits only, 2020–21)** | Soft. | Docker/K8s on cv.md | Containerise the demo and deploy to a local kind/minikube cluster — refreshes the evidence. |

## C) Level and Strategy

**JD level:** Senior IC, permanent. **Candidate natural level for this archetype:** Senior backend IC — exact match. ~6.7 years professional, led the MTailor programme reporting to a CTO, led a 4-dev team at CodeBits. No seniority stretch and no downlevel risk; seniority scores 4.5.

**Sell senior without lying — permitted, CV-backed framings:**
- "I've designed for idempotency, retries and out-of-order events under live production traffic — the two-way MongoDB↔Firestore sync on Pub/Sub carried 20+ applications through a zero-downtime migration."
- "I architected an event-driven microservices backend on Kafka, Docker and Kubernetes and led the team that shipped it."
- "I own work from idea through deployment into production — the migration, the AWS exit ($5,000/month), Express Shipping ($40/order) were all mine end-to-end, reporting to the CTO."
- "I've worked fully remote across US, Singapore and Uganda teams since 2020; GMT core hours from Kampala is a 3-hour offset."
- "I use Claude daily in my own engineering workflow — design exploration, code review, test writing."
- "I have not written production C#. I've shipped Node.js, Python and Go, and the last time I joined an unfamiliar stack I was leading its company-wide migration within months."

**Forbidden framings:** any implication of C#/.NET or Azure production experience; naming Grafana/App Insights as used; claiming a formal on-call rotation; "millions of users" scale; TypeScript beyond Dr Wealth.

**If downleveled** (e.g. offered Backend Engineer II because of the language): accept only if comp is at or above the $60K floor with a written 6-month review to Senior tied to C# proficiency; otherwise decline — the title regression plus a local pay band would be a step back from MTailor.

**The honest alternative:** if Isaac is unwilling to spend 1–2 weekends on .NET before the screen, **skip**. A gap-first cover letter with no demo is the same application #174 made and that was discarded.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted comp | **None** — Ashby comp field `null`; JD mentions "Personalised training budget", "Home office setup budget", family-friendly and flexible policies, no numbers | JD body / Ashby API |
| Public comp language (sibling reqs) | "a competitive package covering a monthly salary, performance bonus and medical benefits reflective of the experience and skills" — no figures | [MyJobMag — Senior Backend Engineer I](https://www.myjobmag.co.ke/job/senior-backend-engineer-i-m-kopa-solar), [Shortlist — Senior Backend Engineer](https://www.shortlist.net/jobs/4689) |
| Levels.fyi — Software Engineer, UK | Median TC **~£73.8K**; L3 London median £100K TC (£63.9K base + £9.8K bonus); top reported £106.5K; last updated 2026-08-14 | [Levels.fyi M-KOPA SWE](https://www.levels.fyi/companies/m-kopa/salaries/software-engineer) |
| Prior tracker data point (#174) | ~$84.8K/yr total comp at the low end of the reported band; UK SWE £54.4K–£76.1K | reports/174-m-kopa-2026-07-31.md |
| Africa-based band | **No public data for Kenya/Uganda senior backend at M-KOPA.** Inference, flagged as such: local-currency bands for Nairobi/Kampala engineers are typically well below UK bands; Glassdoor reviewers (mostly field/sales roles) cite "poor pay compared to industry standards" | Glassdoor M-KOPA (via #174); inference |
| Against target | profile.yml target **$80K–120K**, floor **$60K**. UK median (~$95K at ~1.29 USD/GBP) sits inside target; a Kampala band plausibly lands **$40K–70K**, i.e. at or below the floor. Must be asked at the first screen. | config/profile.yml |
| Company strength | Profitable "for several quarters" (Nov 2024 statement); $250M+ raised May 2023 ($55M equity led by Sumitomo $36.5M; $200M sustainability-linked debt led by Standard Bank); 10M customers, $2B credit, 10,000+ e-bikes financed; FT Africa fastest-growing 2022–2026; TIME100 2023–24; CNBC Top Fintech 2025–26 | [TechCrunch](https://techcrunch.com/?p=2543101), [Techpoint](https://techpoint.africa/2023/05/15/m-kopa-25o-million-fundraise/), [FinTech Futures](https://fintechfutures.com/tag/m-kopa), JD body |
| Risk flags | Debt-heavy balance sheet lending to low-income consumers (FX and credit risk in KES/NGN/UGX); a 2017 restructuring cut 18% of staff including developers and outsourced engineering — old, but shows engineering is not sacred in a downturn | [Kenyan Wall Street (2017 event)](https://kenyanwallstreet.com/m-kopa-solar-fires-18-of-its-staff-including-all-developers-outsources-work-to-a-foreign-company-linked-to-new-cto) |
| Demand trend | .NET engineers in UTC-1…+3 who also understand African consumer markets are a thin pool; M-KOPA has posted Senior Backend I/II/III and Team Lead reqs continuously through 2025–26 — sustained hiring. Being Kampala-based is a sourcing advantage **if** the C# screen is passed. | job boards above |

**Negotiation script (first screen, before a band is assigned):**
> "Before we go further — is this role banded by location or by role? I'm in Kampala, I've worked US-remote for four years, and I'm targeting $80K–120K for a senior event-driven backend seat. If the Kampala band can't reach that, I'd rather know now."

Geographic-discount pushback (from `modes/_shared.md`): "The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."

## E) Personalization Plan

Applied in `output/cv-isaac-m-kopa-asset-sales-2026-10-01.pdf` (A4, 2 pages):

| # | Section | Current state (cv.md) | Change made | Why |
|---|---|---|---|---|
| 1 | Summary | None on cv.md | New summary leading with "distributed, event-driven microservices", Kafka/K8s/Pub/Sub, "idempotent", "zero-downtime", "end-to-end", "distributed teams… time zones", AI tooling (Claude), and a closing honest line: "Primary stack is Node.js; keen to apply the same event-driven patterns in C#/.NET on Azure" | Mirrors every truthful JD keyword and states the gap in the recruiter's first 6 seconds rather than hiding it |
| 2 | Core Competencies | n/a | Event-Driven Microservices · Messaging: Kafka, Pub/Sub, NATS · Idempotency & Retry Design · Kubernetes & Docker · End-to-End Production Ownership · Zero-Downtime Migrations · Distributed Teams Across Time Zones · AI-Assisted Engineering Workflow | ATS coverage of the JD's "Own it beyond the pull request" vocabulary; no C#, Azure, Grafana or App Insights tags (not true) |
| 3 | MTailor bullets | Migration first, features last | Kept migration first but rewrote bullet 2 to use "idempotent processing, redelivery and out-of-order events"; merged AWS exit + $5K/month; kept revenue features last | JD's failure-mode language is the strongest truthful overlap |
| 4 | CodeBits | Team-lead line first | Kafka/Docker/Kubernetes architecture first, USSD/gRPC second, team lead third | IC role: architecture evidence outranks people-lead evidence |
| 5 | Projects | n/a | FIDA event-driven microservices; Pub/Sub sync pipeline; Healthcare WhatsApp Chatbot (OpenAI + Vision) | Two event-driven proofs + the one applied-AI proof for an "AI-native" team |
| 6 | Skills | Flat list | Grouped: Languages / Messaging & Streaming / Cloud & Infra / Databases / Tooling (incl. Claude) | Makes polyglot + messaging + cloud scannable; Rust/Go kept intermediate |

**Not done, deliberately:** no C#, .NET, Azure, Service Bus, Grafana, Application Insights, SLO or on-call claims anywhere in the PDF.

**Before submitting, Isaac should:** (a) build and link the .NET demo (then the summary's closing line can become "currently building with .NET 8 and Azure Service Bus — github.com/zac-09/…"); (b) write the cover letter per §C.

### Top 5 LinkedIn changes
1. Headline → "Senior Backend Engineer — Event-Driven Microservices (Kafka, Pub/Sub, Kubernetes) · Node.js, Python, Go".
2. About → add the idempotency/retries/out-of-order framing of the MTailor sync service; add "working with distributed teams across US, Singapore and Uganda since 2020".
3. Featured → pin the FIDA Kafka/K8s architecture and, once built, the .NET + Service Bus demo repo.
4. Skills → add Event-Driven Architecture, Microservices, Apache Kafka, Kubernetes endorsements; add C#/.NET **only after** the demo exists.
5. Interests → follow M-KOPA, comment on their engineering posts; their recruiters source locally and the USSD/Uganda story is unique to him.

## F) Interview Prep

Stories marked (bank) exist in `interview-prep/story-bank.md` under the quoted title; one new story candidate is written to the scratch stories file.

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Design for idempotency, retries, out-of-order events, and failure modes" | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank) | Both datastores had to serve live traffic for months | Real-time two-way consistency, zero data loss | Node.js consumer on Pub/Sub with idempotent processing and conflict handling for redelivered and out-of-order messages | Parallel production traffic on two stores, no data loss | "Idempotency is the whole game in message-driven systems — design for redelivery from day one. That's the same contract Service Bus gives you." |
| 2 | "Microservices architecture… Kubernetes"; "event-driven systems (Kafka…)" | **Kafka/Kubernetes microservices for FIDA Uganda** (bank) | NGO case-management system outgrowing a monolith; 4-dev team | Ship a backend web, mobile and USSD clients could build on | Event-driven boundaries on Kafka, Docker, Kubernetes, NATS for service messaging | Shipped and operated in production | "Get service boundaries right before tooling — that's what stops a distributed monolith." |
| 3 | "Own what you build end-to-end… into production and iteration" | **Zero-downtime Parse→Firebase migration** (bank) | 20+ apps on an EOL platform, live customers | Migrate with zero downtime, reporting to the CTO | Phased cutover with two-way sync as rollback insurance; owned design→deploy→iterate | Zero outages; all services off AWS; $5,000/month saved | "Keeping rollback open for the whole window cost engineering but removed the catastrophic failure mode." |
| 4 | "DevOps culture mindset, including on-call/production ownership" | **SDK docs and Ops training for the new Firebase stack** (bank) | Whole company on an unfamiliar stack post-migration | Make the platform operable without the migration engineer | Wrote Node/Python SDK docs; trained Ops on dashboard and backup procedures | Ops ran backups independently; engineers onboarded from docs | "Reliability starts as a docs-and-training problem. I haven't carried a formal pager — I'd want to, and I'd ask what the rotation looks like from UTC+3." |
| 5 | "Strong grasp of C# and .NET" (the objection) | **Contractor on an unfamiliar stack to company-wide migration lead** (bank) + **The C#/.NET + Azure gap for a hands-on senior IC role** (NEW) | Hired via Upwork onto Firebase/GCP he hadn't used in production | Deliver migration scripts under contract scrutiny | Learned while shipping; wrote the docs others onboarded from | Converted to FTE, given the whole 20-app migration | "Learning velocity is demonstrable, not claimable — here's the .NET demo I built before this call." |
| 6 | "Comfort using AI tools as part of a daily engineering workflow" | **Career-ops agentic pipeline** (bank) + **WhatsApp healthcare chatbot with OCR** (bank) | Needed to evaluate hundreds of roles and build an OCR assistant | Use LLMs where they add leverage, gate them with verification | Claude Code pipeline with evidence-gated scoring; OpenAI + Google Vision chatbot on WhatsApp Business API | Daily AI-assisted workflow; shipped conversational product | "AI tools accelerate; guardrails (verification before scoring) keep them honest — matches your 'guardrails as we accelerate'." |
| 7 | "Every service you build helps expand financial inclusion" / mission fit | **USSD legal-aid service for rural Uganda** (bank) | Legal-aid providers needed to reach feature-phone users | Serve users without smartphones or data | USSD front end to a Node.js backend over gRPC, provider-agnostic contract | Multiple providers integrated; rural users reached | "Meet users on the infrastructure they have — exactly M-KOPA's Every Day Earners." |
| 8 | "Collaborate effectively in distributed teams across time zones" | **Running CodeBits end-to-end** (bank) + MTailor US-remote tenure | Four fully-remote roles across US, Singapore, Uganda | Deliver with CTO-level stakeholders 8–11 hours away | Async-first communication, documentation as the handoff medium | 4+ years at MTailor from Kampala | "Write it down before the other side wakes up." |
| 9 | "Leave the systems you touch a little better" (Campfire Rule) | **AWS exit saving $5,000/month** (bank) | Half-migrated infrastructure costing double | Finish the consolidation nobody owned | Migrated remaining services and S3→GCS | $5,000/month recurring saving | "Cleanup has a dollar figure if you look for it." |

- **Recommended case study:** the MTailor Pub/Sub sync service presented as a *failure-modes* story — redelivery, out-of-order events, conflict handling, rollback — using the JD's own vocabulary. Close with: "Here's the same consumer pattern in .NET against Service Bus" (demo).
- **Red-flag questions:**
  - *"You've never written C#."* → "Correct. I've shipped production backends in Node.js, Python and Go, and the architecture you run — event-driven services on a message bus, on Kubernetes — is what I've built with Kafka and Pub/Sub. Last time I joined an unfamiliar stack I was leading its company-wide migration within months. I've already started on .NET: [demo link]."
  - *"Which observability stack have you used?"* → "No Grafana or App Insights in production yet. During the migration I watched cutovers through Firebase/GCP consoles and built the Ops team's backup and dashboard runbook. I'd expect to be fluent in your Grafana/App Insights setup within the first weeks — and the demo ships with Grafana."
  - *"Have you been on-call?"* → "I've owned production for 20+ apps without a formal rotation. I like your framing — on-call as feedback — and I'd want to know the rotation shape across GMT and EAT."
  - *"You applied to our Team Lead role in July."* → "Yes — and the feedback I'd give myself is that the language gap needed receipts, not framing. That's why I built the .NET demo before applying this time."

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | 3.0 | Senior backend IC on event-driven microservices is exactly his archetype, but day-to-day work is writing C# — a language he has never used — so the *job as experienced* is a weaker fit than the title suggests |
| Stack | 1.5 | Zero C#/.NET/Azure/Service Bus/Grafana/App Insights; strong transfer on Kafka/Pub/Sub/K8s/idempotency patterns, which the JD explicitly invites; below #174's 2.0 because this JD lacks a cloud-agnostic clause |
| Seniority | 4.5 | Senior IC, permanent — his natural level; no stretch, no downlevel |
| Remote / geo | 5.0 | "Fully remote role, collaborating during core GMT working hours"; Kampala explicitly listed; 3-hour offset |
| Comp | 3.0 | Unpublished; UK median ~£73.8K TC sits in target, Kampala band likely at/below the $60K floor; must be asked at first screen |
| Stability / company | 4.0 | Profitable, $250M+ raised 2023, FT/TIME/CNBC recognition, sustained eng hiring; debt-heavy consumer lending across volatile currencies and a 2017 engineering layoff |
| **Average** | **3.5** | Arithmetic mean; the 1.5 is a gating dimension — see headline caveat 2 |

**Comparison with #174 (M-KOPA Team Lead, 3.2):** higher here because seniority is an exact match (no lead stretch) and geo is identical; stack is scored lower because this is a hands-on IC seat with no cloud-agnostic language.

## Keywords extracted

C#, .NET, Azure, Azure Service Bus, Kubernetes, event-driven architecture, distributed microservices, idempotency, retries, out-of-order events, failure modes, observability, Grafana, Application Insights, SLOs, alerting, on-call, production ownership, DevOps culture, AI-native engineering, Claude, code review, test writing, incident investigation, distributed teams, time zones, fintech, financial inclusion, asset financing, Kafka, RabbitMQ, deployment safeguards, automated tests
