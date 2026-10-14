# Evaluation: M-KOPA — Senior Backend Engineer - Mobility (12 month FTC)

**Date:** 2026-10-14
**Archetype:** **Senior Backend Engineer** (primary): event-driven microservices IC with full-lifecycle ownership. Secondary: **Platform/Infrastructure Engineer** ("owns the entire software stack, including supporting infrastructure").
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/M-KOPA/121d269d-f893-4e4c-9a88-eae3f6c5c917
**PDF:** output/cv-isaac-m-kopa-mobility-2026-10-14.pdf
**Verification:** live on 2026-10-14 via the Ashby posting API (`api.ashbyhq.com/posting-api/job-board/M-KOPA?includeCompensation=true`). Job id is present in the board response, published 2026-10-09T15:50Z, employmentType `FullTime`, `isRemote: true`. Compensation fields are empty. In the same response, #228's req (Asset Sales, id `0c0fdef0-…`) is **still live**.
**Recommendation:** **CONSIDER, but as the second choice behind #228 (Asset Sales, permanent).** This JD is friendlier on stack wording: it adds "welcome experience across AWS or GCP", invites Kafka, and says senior members "coach and contribute". It is still C#/.NET first, though, and it is a **12-month fixed-term contract**. Leaving a permanent role Isaac has held for four years for a 12-month contract in a language he has never shipped is a real risk. Apply only with the same gap-first cover letter and .NET demo planned for #228.

---

## Headline caveats (read these before the score)

1. **It is a 12-month fixed-term contract.** The JD says "This is an initial 12-month Fixed Term Contract, with the potential to extend or transition into a permanent role." It repeats this under Location & Benefits as "Initial 12-month Fixed Term Contract, with potential to extend or transition into a permanent role". Ashby still labels it `FullTime` (employee, not contractor). Extension or conversion is "potential", not committed, and no conversion rate or criteria are given. A parallel London req (`fc5b810f-…`) posted the same day suggests M-KOPA is funding a defined Mobility project rather than adding permanent headcount.
2. **C#/.NET is still required bullet #1 and the JD closes on it.** Verbatim: "Strong grasp of C# .NET development". The CTA reads "Ready to build C# .NET solutions that put clean, affordable transport within reach…". cv.md has no C#, no .NET and no Azure. This remains the gating dimension, as in #174 and #228.
3. **The stack wording is better than #228's.** Cloud: "We work in Azure, and welcome experience across AWS or GCP". Messaging: "we use Service Bus, and welcome experience with similar messaging technologies such as Kafka or RabbitMQ". Required: "Experience with Azure, or other major cloud providers such as AWS or GCP". This is the cloud-agnostic clause #228 lacked and #174 had, so the stack scores 2.0 here (same as #174) versus 1.5 for #228.
4. **Observability is named as Prometheus + Grafana.** cv.md has neither. Do not claim them.
5. **Comp is unpublished.** `compensationTiers: []`. For a contract role, ask at the first screen about the band, any FTC premium, and whether benefits match those of permanent staff.

---

## Geo Check — PASS

- **JD body, verbatim:** "**Fully remote role within UTC -1 to UTC +3 time zones**" and "Work with diverse teams across UK, Europe, and Africa".
- **Ashby location chips:** primary "Nairobi", secondary "Cape Town", "Lagos", "**Kampala**", "Accra", "Johannesburg". Shown on the board as "Nairobi / Cape Town / Lagos / Kampala / Accra / Johannesburg". Postal address: Nairobi, Kenya.
- Kampala is UTC+3, the edge of the window but inside it. No country or work-authorization restriction is stated. Background checks are listed (criminal record, ID, academics, employment dates, references).
- **Verdict: geography OPEN.** It is the same as #174 and #228.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer (event-driven microservices); Platform/Infra shade |
| Domain | FinTech / e-mobility financing: M-KOPA Mobility, "Kenya's leading e-mobility financing platform", 11,000+ e-motorbikes financed, growing "3x year-on-year" |
| Function | Build + operate, "from inception through production to decommissioning under a DevOps culture" |
| Seniority | Senior IC; "More senior members will coach and contribute", so the role is not top of the team |
| Contract | **12-month Fixed Term Contract**, potential extension or permanent conversion |
| Remote | Fully remote, UTC-1 to UTC+3; UK/Europe/Africa team |
| Team size | Not stated ("expanding engineering team") |
| Stack | C#/.NET; Azure (AWS/GCP welcome); Service Bus (Kafka/RabbitMQ welcome); Kubernetes, Docker; Prometheus, Grafana; IaC, CD, testing in production; Claude Code |
| TL;DR | 12-month senior IC contract building .NET event-driven microservices for M-KOPA's e-motorbike financing business. Geo and architecture fit is excellent and the cloud wording is friendlier than #228's, but the C# gap remains and the role is not permanent. |

## B) CV Match

| JD Requirement (verbatim) | CV Evidence (cv.md, verbatim) | Match |
|---|---|---|
| "Strong grasp of C# .NET development" | None. Skills: "Proficient: Node.js, TypeScript, Firebase, React, GCP, Python…"; "Intermediate: Go, AWS, Rust, React Native" | ❌ **Hard gap, required #1** |
| "Experience with event-driven systems – Service Bus or similar messaging technologies such as Kafka or RabbitMQ" | "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes"; "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub for message processing"; CodeBits stack "NATS Streaming, gRPC" | ✅ Strong. Kafka is named explicitly. |
| "Microservices architecture experience" | FIDA Kafka/Docker/Kubernetes microservices backend (CodeBits) | ✅ |
| "Experience with Azure, or other major cloud providers such as AWS or GCP" | "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP"; "Migrated file storage from Amazon S3 to GCS"; Stack "AWS S3/EC2/EBS"; GCP Proficient, AWS Intermediate | ✅ GCP strong; Azure none, but the JD accepts GCP |
| "Familiarity with containerisation and orchestration tools (Kubernetes, Docker)" | "Apache Kafka, Docker, and Kubernetes" (CodeBits, 2020–21) | ✅ Familiarity is evidenced, though dated |
| "Experience with observability tools such as Prometheus and Grafana" | Nothing named. Adjacent: "ensuring zero downtime"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ⚠️ **Soft gap** |
| "Testing and deployment expertise" | Zero-downtime deployment across 20+ apps; migration scripts. No test frameworks or CI tools are named in cv.md. | ⚠️ Deployment yes, testing not evidenced |
| "DevOps culture mindset"; "infrastructure as code" | Production ownership, AWS exit, Ops training. No IaC tool (Terraform/Bicep/Pulumi) on cv.md. | ⚠️ Mindset yes, IaC not evidenced |
| "Experience working with AI coding tools, ideally Claude Code or similar" | Not on cv.md. Off-CV but real: story bank "[AI-assisted engineering workflow] Career-ops agentic pipeline" (Claude Code); profile.yml "Healthcare WhatsApp Chatbot" (OpenAI + Google Vision) | ✅ Real, but off-CV. It is in the PDF summary and skills. |
| "owns the entire software stack… from inception through production to decommissioning" | Led the 20+ app migration; "Saved the company $5,000/month by migrating all services off AWS" (a decommissioning story) | ✅ Strong; the decommission phrasing fits exactly |
| "Work with diverse teams across UK, Europe, and Africa" | MTailor (US Remote), Dr Wealth (Singapore Remote), Mind2matter (US Remote), CodeBits (Uganda Remote) | ✅ |
| Mission: transport/financing access for "Every Day Earners" | "Built a USSD service for legal aid providers…" (CodeBits); "Built backends for DeFi applications" (Mind2matter) | ⚠️ Adjacent; the USSD line is the differentiator |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **C#/.NET** | **HARD.** It is required #1 and the CTA. | Production in Node.js, Python, Go; Kafka/Pub/Sub patterns map to Service Bus | Name the gap in the second sentence of the cover letter. Build the same 1–2 weekend demo planned for #228: .NET 8 minimal API, Service Bus emulator, idempotent consumer, retries, dead-lettering, Docker. For this req, also add a Prometheus `/metrics` endpoint and a Grafana dashboard in docker-compose; that also turns gap #2 into a true statement. Link it from github.com/zac-09. |
| 2 | **Prometheus / Grafana** | Soft. It is listed as required, but phrased "such as". | Monitoring zero-downtime cutovers; Ops dashboard training | Do not claim either tool. Add both to the demo, then say "used in a personal .NET demo", nothing more. |
| 3 | **Infrastructure as code** | Soft. | Scripted migrations; Docker/K8s | Add a small Bicep or Terraform file to the demo if cheap. Otherwise say honestly that he has not used IaC tooling in production. |
| 4 | **Automated testing in production** | Soft. | No test tooling on cv.md | Speak to how cutovers were verified during the migration. Ask what "testing in production" means for them (synthetic checks? canaries?). |
| 5 | **Azure** | Low. The JD explicitly accepts AWS/GCP. | GCP deep, AWS intermediate | Map Pub/Sub to Service Bus topics/subscriptions and GKE to AKS. |
| 6 | **Contract permanence** | Not a skills gap; it is a **career-risk** factor. | n/a | Ask before the first technical round: (a) conversion history for previous Mobility FTCs; (b) what decides extension; (c) notice period and end-of-contract terms; (d) whether the band carries an FTC premium. |

## C) Level and Strategy

**JD level:** Senior IC under a coaching senior layer ("More senior members will coach and contribute"). **Candidate natural level:** senior backend IC, about 6.7 years. This is an exact match with no downlevel risk. The coaching line slightly lowers the bar for a candidate ramping on a new language, which is the main reason this req might screen more kindly than #228. That is an inference; the JD does not say it.

**Sell senior without lying:**
- "I've designed for redelivery and out-of-order events under live production traffic: a two-way MongoDB↔Firestore sync on Pub/Sub that carried 20+ applications through a zero-downtime migration."
- "I architected a Kafka-based microservices backend on Docker and Kubernetes and led the 4-person team that built it."
- "I've owned services from inception to decommissioning: I moved all of MTailor's workloads off AWS, saving $5,000/month."
- "You run on Azure but welcome GCP. My cloud is GCP: Pub/Sub, Firestore, Cloud Functions, GCS."
- "I haven't shipped production C#. I've shipped Node.js, Python and Go, and the last time I joined an unfamiliar stack as a contractor I ended up leading its company-wide migration."

**Forbidden framings:** any C#/.NET, Azure, Service Bus, Prometheus, Grafana, IaC or on-call claims; TypeScript beyond Dr Wealth (~6 months); SQL/PostgreSQL production claims.

**FTC-specific strategy:** treat the contract as a 12-month audition. Accept only if (a) the monthly rate is at or above his target pro-rata, ideally with an FTC premium, since contracts typically pay more to offset lost security; (b) conversion criteria are written down; (c) he is comfortable with the downside of being back on the market in late 2027. If MTailor is stable, the contract has to pay clearly more than MTailor to justify the move.

**If downleveled:** decline below the $60K floor. A downleveled 12-month contract is worse on both axes.

## D) Comp and Demand

Comp data below is reused from #228 (researched 2026-10-01, same company, same department, same level). No new figures were found for FTC Mobility roles.

| Item | Data | Source |
|---|---|---|
| Posted comp | **None.** Ashby `compensationTiers: []`, summary `null` | Ashby posting API, 2026-10-14 |
| Levels.fyi — M-KOPA Software Engineer, UK | Median TC ~£73.8K; L3 London ~£100K TC | [Levels.fyi](https://www.levels.fyi/companies/m-kopa/salaries/software-engineer) (via #228) |
| Prior tracker data | ~$84.8K/yr TC at the low end; UK SWE £54.4K–£76.1K | reports/174-m-kopa-2026-07-31.md |
| Africa-located band | No public data. Inference, flagged: local bands are likely around $40K–70K, at or below the $60K floor. | Inference (#228 §D) |
| Against target | profile.yml target **$80K–120K**, floor **$60K**. A 12-month FTC should be benchmarked as monthly rate × 12 plus the risk of a gap afterwards. | config/profile.yml |
| Company strength | JD: FT Africa fastest-growing 2022–2026; CNBC Top Fintech 2025–26; 10M+ customers; $2B credit. Mobility: "11,000+ e-motorbikes financed, growing 3x year-on-year". #228 research: profitable for several quarters (Nov 2024), $250M+ raised in 2023. | JD body; #228 §D |
| Demand trend | M-KOPA is hiring two Senior Backend reqs (Asset Sales, Mobility) in two geographies each, at the same time (4 live reqs on 2026-10-14). The pool of .NET engineers in UTC-1…+3 is thin, and an FTC is harder to fill, which slightly favours non-.NET candidates who can show ramp-up evidence (inference). | Ashby board |

**First-screen script:**
> "Two things up front. Is the band set by location or by role, and does the fixed-term contract carry a premium over permanent? I'm in Kampala, I've worked US-remote for four years, and I'm targeting $80K–120K equivalent. I'd also like to understand how previous Mobility contracts have gone: extended, converted, or ended?"

## E) Personalization Plan

The changes below are applied in `output/cv-isaac-m-kopa-mobility-2026-10-14.pdf` (A4, 2 pages). It is derived from the #228 PDF with these edits:

| # | Section | Current state | Change made | Why |
|---|---|---|---|---|
| 1 | Summary | #228 version ended "C#/.NET on Azure" | Adds "on GCP" to the migration line, adds "full software lifecycle… decommissioning of legacy services (all workloads moved off AWS)", adds "AI coding tools, including Claude Code", and keeps the honest closing line "keen to apply the same event-driven patterns in C#/.NET" | Mirrors this JD's "inception… to decommissioning", its cloud-agnostic clause and its Claude Code mention |
| 2 | Core Competencies | 8 tags | Adds "GCP & AWS Cloud", "Full Lifecycle Ownership", "AI Coding Tools (Claude Code)"; drops "Distributed Teams Across Time Zones" | Matches the required list; still no C#, Azure, Prometheus, Grafana or IaC tags |
| 3 | Skills | Listed SQL twice | **Removed SQL** (Languages and Databases) | SQL is unevidenced beyond the cv.md skills line; this follows the evaluation rules |
| 4 | Tooling | "Claude and AI-assisted…" | "Claude Code and AI-assisted development workflow" | Matches the JD keyword exactly |
| 5 | Experience/Projects | Event-driven ordering from #228 | Unchanged: Pub/Sub idempotency first at MTailor, Kafka/K8s first at CodeBits | Already optimal for this JD |

**Top 5 LinkedIn changes** are the same as #228 §E. Pin the .NET + Service Bus + Prometheus/Grafana demo once it exists, and add C#/.NET to Skills **only after** it exists.

## F) Interview Prep

Stories are reused from `interview-prep/story-bank.md`; no new master story is needed. The "[Gap handling] The C#/.NET + Azure gap for a hands-on senior IC role" entry already covers the objection.

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Event-driven, Service Bus or Kafka | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank) | Two datastores serving live traffic | Real-time two-way consistency | Idempotent Node.js consumer handling redelivery and out-of-order messages | Parallel production traffic, 20+ apps, zero downtime | "Design for redelivery from day one. Service Bus gives you the same at-least-once contract." |
| 2 | Microservices, Kubernetes, Docker | **Kafka/Kubernetes microservices for FIDA Uganda** (bank) | NGO case-management backend | Ship services for web, mobile and USSD clients | Kafka boundaries, Docker, K8s, NATS | Shipped and operated | "Boundaries before tooling." |
| 3 | "inception through production to decommissioning" | **AWS exit saving $5,000/month** (bank) | Infrastructure half on AWS, half on GCP | Finish the consolidation | Migrated the remaining services and S3→GCS | $5,000/month saved | "Decommissioning is engineering work with a dollar value." |
| 4 | Testing and deployment; DevOps | **Zero-downtime Parse→Firebase migration** (bank) | 20+ apps on an end-of-life platform | Cut over without outages | Phased cutover with sync as rollback insurance | Zero outages | "Keeping rollback open cost effort but removed the catastrophic failure mode." |
| 5 | Observability (Prometheus/Grafana) | **SDK docs and Ops training** (bank) + demo | Company on an unfamiliar stack | Make it operable | Docs, dashboard and backup training | Ops ran independently | "I haven't run Prometheus in production; the demo has it, and I'd want your dashboards on day one." |
| 6 | "Strong grasp of C# .NET" (the objection) | **Contractor to migration lead** + **C#/.NET gap** (bank) | Hired onto Firebase/GCP he had not used | Deliver under contract scrutiny | Learned while shipping | Converted to FTE, owned the migration | "Learning velocity has to be shown, not claimed. Here's the .NET demo." |
| 7 | AI coding tools, Claude Code | **Career-ops agentic pipeline** (bank) | Hundreds of roles to evaluate | Use LLMs with verification gates | Claude Code pipeline with evidence-gated scoring | Daily workflow | "AI accelerates; verification keeps it honest." |
| 8 | Mission: riders and Every Day Earners | **USSD legal-aid service** (bank) | Feature-phone users in rural Uganda | Reach users without smartphones | USSD front end → Node.js over gRPC | Rural users reached | "Meet users on the infrastructure they have. Kampala boda riders are your next market." |

- **Recommended case study:** the Pub/Sub sync service told as a failure-modes story, closing with the .NET + Service Bus demo.
- **Red-flag questions:**
  - *"You've never written C#."* Use the #228 answer plus the demo link.
  - *"Why a 12-month contract when you're permanent at MTailor?"* "The domain. E-mobility financing in East Africa is where I live, and I'd rather prove myself on a contract than not get the chance. I'd like to understand the conversion path." Only say this if it is true for Isaac.
  - *"You applied to Asset Sales too."* Be open about it: same company, two teams, and he would take either. Do not hide it; it is the same Ashby board and the same recruiters.
  - *"Prometheus/Grafana?"* "Not in production. They're in my .NET demo. During the migration I monitored cutovers through the GCP consoles."

---

## Comparison with #228 (Asset Sales) — which M-KOPA bet?

Both reqs are **live** in the 2026-10-14 Ashby response (#228 `0c0fdef0-…`, published 2026-09-30; this req `121d269d-…`, published 2026-10-09). Both list the same locations, including Kampala. #228 sits at tracker #238 with status **Evaluated** (not applied).

| Factor | #228 Asset Sales | #243 Mobility (this) | Edge |
|---|---|---|---|
| Contract | Permanent | **12-month FTC**, "potential to extend or transition into a permanent role" | **#228** |
| Geo wording | "Fully remote role, collaborating during core GMT working hours" | "Fully remote role within UTC -1 to UTC +3 time zones" | Tie. Mobility's window is explicit; Kampala sits at the +3 edge. |
| C#/.NET | Required #1 + CTA | Required #1 + CTA | Tie (hard gap in both) |
| Cloud wording | No cloud-agnostic clause | "welcome experience across AWS or GCP" | **#243** |
| Messaging | Kafka/RabbitMQ "would love to hear from you" | Kafka/RabbitMQ "welcome" | Tie |
| Observability | Grafana, Application Insights | Prometheus, Grafana | Tie (none evidenced) |
| AI tooling | Claude among AI tools | "Claude Code" named | Slight #243 |
| Team support | Senior and autonomous, "highly trusted" | "More senior members will coach and contribute" | **#243** for a language ramp |
| Domain | Asset sales (phones, e-bikes) | E-mobility, growing 3x YoY | Preference |
| Score | 3.5 | 3.3 | #228 |

**Verdict:** **#228 is the better M-KOPA bet** for Isaac because it is permanent. Mobility's friendlier stack wording and coaching culture make it a slightly easier screen, but at a career-security cost. If he builds the .NET demo, applying to both is reasonable: they are different teams and hiring managers, and the same evidence works for both. Lead with #228, and mention openness to Mobility if Asset Sales does not progress. If he will not build the demo, skip both, for the same reason #174 was discarded.

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | 3.0 | Event-driven senior backend IC is his archetype, but the daily work is C# |
| Stack | 2.0 | No C#/.NET/Azure/Prometheus/IaC. The JD explicitly accepts AWS/GCP and Kafka, so it scores the same as #174 and above #228's 1.5. |
| Seniority | 4.5 | Senior IC, exact level, with a coaching layer above |
| Remote / geo | 5.0 | "Fully remote role within UTC -1 to UTC +3 time zones"; Kampala listed |
| Comp | 2.5 | Unpublished; likely local band near the floor; 12 months of guaranteed pay only |
| Stability / company | 2.5 | Strong company (#228: 4.0), but a 12-month FTC with only "potential" extension or conversion, replacing a permanent role |
| **Average** | **3.25 → 3.3** | Above the 3.0 threshold, so a PDF was generated. C# is the gating dimension, as in #228. |

## Keywords extracted

C#, .NET, Azure, AWS, GCP, Service Bus, Kafka, RabbitMQ, event-driven systems, microservices, Kubernetes, Docker, Prometheus, Grafana, observability, monitoring, DevOps, infrastructure as code, automated testing, testing in production, continuous delivery, Claude Code, AI coding tools, software lifecycle, decommissioning, e-mobility, fintech, financial inclusion, fixed term contract
