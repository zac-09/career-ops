# Evaluation: Speechify — Software Engineer, Platform

**Date:** 2026-10-01
**Archetype:** Hybrid — **Senior Backend Engineer** primary (APIs behind payments, subscriptions, auth, metering, public TTS API) + **Platform/Infrastructure Engineer** secondary (own inherited services, "make them faster, cheaper, and harder to break", leave behind checks, automate yourself out of work).
**Score:** 3.9/5
**URL:** https://job-boards.greenhouse.io/speechify/jobs/5533936004
**PDF:** output/cv-isaac-speechify-platform-2026-10-01.pdf
**Verification:** live via Greenhouse API (JSON, updated 2026-09-15) 2026-10-01; JD saved to jds/speechify-software-engineer-platform.md
**Recommendation:** **APPLY — one of the cleanest geo-open, stack-aligned reqs in the pipeline.** TS/Node + GCP is exactly Isaac's shape, the company is 100% distributed with African city clones of this JD, and the work (correctness-critical backend APIs, inherited services, automation) is senior backend work he has done. Apply with eyes open on two things: non-US pay bands are steep (see §D) and Glassdoor carries credible reports of minute-level time tracking and freelancer-style treatment (see Headline caveat 3). Prepare the "daily AI-agent setup" answer before applying — the JD screens on it explicitly.

---

## Headline caveats (read these before the score)

1. **The domain is billing-correctness, and Isaac has never owned billing.** The JD's core paragraph: "Subscription state has to stay consistent across five clients and two app-store billing systems… Consumption metering has to be exact enough to bill on… it is either right, or someone gets charged twice." Nothing on cv.md is payments, subscriptions, App Store/Play billing, or metering. The honest bridge is *consistency engineering*: the two-way MongoDB↔Firestore sync under live traffic is a dual-write exactly-once problem of the same species. That is a real bridge, not a spin — but it is a bridge, and he should say so.
2. **TypeScript is "(required)" and is evidenced for ~6 months.** JD: "Proven backend experience in TS/Node (required)." cv.md: TypeScript appears in one role — Dr Wealth, Aug 2021–Jan 2022: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js." Node is deep (every role since 2020). The take-home is on a real codebase, almost certainly TS — he will be assessed on TS fluency in a recorded 90-minute window, not on claims. Stack is scored 4.0, not 4.5, for this reason.
3. **Glassdoor is split in a way that matters for a Kampala-based hire.** Aggregate is good (4.3/5, 114 reviews, 86% recommend) but the critical reviews are specific: minute-level time-tracking for the full 8-hour day, periodic work screenshots, "designers and developers are treated as low-grade freelancers", and allegations of terminations immediately before equity vesting; one review is titled "Toxic CEO". The JD's own line — "Use the tools you use every day. You'll be asked to walk through your reasoning" — is fine; the recorded take-home (webcam + mic + screen) is consistent with the surveillance reports. Stability is scored 3.0 on this, not on finances.
4. **Pay is almost certainly location-indexed, hard.** The US band is $140–200K. The Greenhouse board's non-US clones state **"$30,000–120,000 USD/Year + Bonus + Stock"** (Amsterdam; Germany clone reported the same). African clones (Abuja, Alexandria EG) carry *no* salary sentence at all. Isaac's target ($80–120K) sits inside the non-US band's upper half; the risk is being indexed to a Uganda rate near the $30K floor, which is below his $60K walk-away. This must be anchored at the first screen.
5. **The interview starts with a recorded take-home before any human call.** Multiple Glassdoor reports: automated email → schedule a 90-minute take-home, webcam/mic/screen recorded, some roles restrict external docs. JD says the assessment "runs in two stages: you'll submit, get real feedback from an engineer on this team, and have time to act on it." Plan a focused block of time; do not attempt it tired.

---

## Geo Check — PASS (scored on the JD body)

- **Verbatim location text (body):** "Today, nearly 200 people around the globe work on Speechify in a 100% distributed setting – Speechify has no office."
- **Country restriction:** none. **Work-authorization clause:** none. **Timezone/overlap requirement:** none — the body offers "a commitment to an exceptional asynchronous work culture."
- **Comp clause is explicitly US-scoped, not US-restricted:** "The **United States Based** Salary range for this role is: 140,000-200,000 USD/Year" — this phrasing implies non-US holders of the role exist.
- **Corroboration from the board:** the same JD is cloned to ~241 city postings including **Abuja, Lagos, Cape Town, Johannesburg, Alexandria (Egypt)** — Speechify actively sources this role in Africa.
- **Greenhouse chip:** "Remote" — consistent with the body.
- **Residual risk:** price, not eligibility (caveat 4), plus the working-conditions question of time tracking in an "asynchronous" culture.

**Verdict: geography OPEN.** Remote/geo scored 5.0.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer (primary) + Platform/Infrastructure (secondary) |
| Domain | Backend platform for a consumer + API product: public TTS API, payments, subscriptions, auth, consumption metering, analytics — "serving over 50 million users across iOS, Android, Mac, Chrome, and web" |
| Function | **Build + own + operate.** "Design, build, and own the APIs"; "Take on services you didn't write and make them faster, cheaper, and harder to break"; "Automate the parts of your role that shouldn't need a person" |
| Seniority | Unlevelled "Software Engineer". Scope reads **Senior**: owning inherited production services, designing B2B/enterprise integrations, keeping "backend architecture ahead of where the product is going". "There is no separate ladder" — level is earned by scope, not titled. |
| Remote | 100% distributed, no office, async culture. No geo or TZ clause. |
| Team size | Not stated. Company ~200 people; Platform team size unknown. Flat org: "people become leaders here by taking scope and being right about it, fast." |
| Stack | **TS/Node (required)**, **GCP (direct, required)**, AWS/Azure working knowledge, Docker (preferred), Kubernetes HA (preferred). Daily AI-agent workflow (explicitly screened). |
| Process | "Several technical interviews plus a take-home assessment on a real codebase. We aim to finish within a week." Two-stage take-home with engineer feedback. |
| Comp | US band $140–200K + bonus + stock. Non-US clones: $30–120K + bonus + stock. African clones: no range stated. |
| TL;DR | A senior Node/GCP backend seat on correctness-critical billing and API systems at a profitable, fully distributed TTS company that recruits in Africa — strong technical fit, honest gap on payments/billing domain and TS depth, and real caveats on location-indexed pay and reported working culture. |

## B) CV Match

| JD Requirement | CV Evidence (exact lines from cv.md) | Match |
|---|---|---|
| "Proven backend experience in **TS/Node** (required)" — Node half | MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using **Node.js** and Google Pub/Sub"; Contractor: "Built a migration script to read data from MongoDB and write to Firestore after running complex processing logic"; Dr Wealth: "Extended backend APIs… using Firebase Cloud Functions and Express.js"; Mind2matter: "Built backends for DeFi applications using Web3 and Node.js"; CodeBits: "Built a USSD service… communicating with a **Node.js** backend via gRPC"; Skills: "**Proficient:** Node.js, TypeScript…" | ✅ **Node in all five roles, 2020–present.** |
| — TS half | Dr Wealth: "Extended backend APIs **in TypeScript** using Firebase Cloud Functions and Express.js hosted on Heroku"; Stack: "Node.js, **TypeScript**, Firebase…"; Skills Proficient line | ⚠️ **evidenced once, ~6 months (Aug 2021–Jan 2022).** Real but shallow on paper. The recorded take-home will test it directly. |
| "**Direct experience with GCP**" | MTailor: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to **Firebase/GCP**, ensuring zero downtime"; "Google **Pub/Sub** for message processing"; "Migrated file storage from Amazon S3 to **GCS** via a Python script"; Contractor: "Firebase Firestore and **GCP**"; Skills: "Proficient: … **GCP**" | ✅ **strongest match on the req.** GCP is his deepest cloud — Firestore, Pub/Sub, Cloud Functions, GCS, all in production. |
| "working knowledge of **AWS**, Azure, or another cloud" | MTailor Stack: "**AWS S3/EC2/EBS**"; "Saved the company $5,000/month by migrating all services off AWS"; Skills: "Intermediate: … AWS" | ✅ exactly "working knowledge" — he has operated and decommissioned AWS. |
| "Design, build, and own the APIs behind **payments, subscriptions, auth, consumption tracking**, and our public TTS API" | No payments/subscriptions/auth/metering lines. Adjacent: "Implemented Express Shipping, generating an additional **$40 revenue per order**" (checkout-adjacent revenue feature); Dr Wealth: "Built ad-hoc jobs to query over **2 million Firestore records**, keeping customer prices current from Morningstar APIs" (high-volume data correctness); CodeBits gRPC public surface for USSD providers | ⚠️ **domain gap, real.** He has shipped revenue-bearing and data-correctness systems; he has not owned a billing or auth system. Bridge via consistency work (next row). |
| "Subscription state has to stay **consistent** across five clients and two app-store billing systems… it is either right, or **someone gets charged twice**" | MTailor: "Implemented **real-time two-way sync** between MongoDB and Firestore using Node.js and Google Pub/Sub for message processing"; "ensuring **zero downtime**" across 20+ apps | ✅ **the credible bridge.** A bidirectional sync under live traffic is a dual-write consistency problem: idempotency, redelivery, loop-prevention, reconciliation. Same discipline as double-charge prevention. |
| "Take on **services you didn't write** and make them faster, cheaper, and harder to break" | Contractor: "Hired via Upwork to execute a complex backend migration from Parse/MongoDB to Firebase Firestore"; MTailor: "Saved the company **$5,000/month** by migrating all services off AWS"; Dr Wealth: "Led optimisation of a PWA delivering real-time stock market prices from a Firebase backend" | ✅ three roles were inherited systems made cheaper or faster. |
| "Automate the parts of your role that shouldn't need a person"; "Turn work you've done once into work the whole team can repeat"; "A habit of **giving away work you used to own**" | Contractor: "Wrote **documentation for fellow engineers** on working with the new Firebase SDKs (Node.js and Python)"; "**Trained the Ops team** on the new Firebase Dashboard and backup procedures"; MTailor: "Migrated file storage from Amazon S3 to GCS via a **Python script**" | ✅ direct: he handed the platform he built to Ops and other engineers and scripted the one-off work. |
| "Establish that a change is **correct before it ships**, and leave behind the checks" | "ensuring zero downtime" across the migration; two-way sync allowed parallel validation of both datastores | ⚠️ **no testing, CI, or monitoring tooling named on cv.md.** The zero-downtime record implies verification discipline but names no mechanism. |
| "The instinct to **check a result against the system itself** — logs, database state, the actual request" | Contractor: "read data from MongoDB and write to Firestore after running complex processing logic"; Dr Wealth 2M-record jobs | ⚠️ implied by the migration work (you cannot cut over 20 apps without reconciling record counts), but not stated. Must be told as a story, not read off the CV. |
| "A daily working setup with **AI agents** you can describe in detail — what runs unattended, what you review, where it doesn't get to act alone" | Not on cv.md. profile.yml proof point: "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision for prescription OCR". Story bank: career-ops agentic pipeline (verification gate before scorer; human-only Submit). | ⚠️ **off-CV but strong in interview.** This exact JD was evaluated by an agentic pipeline he built with a hard "never submit without human review" rule — that *is* the "where it doesn't get to act alone" answer. Surface on the PDF as a project. |
| "Design **B2B and enterprise integrations** for customers building on top of us" | CodeBits: "Built a **USSD service for legal aid providers** communicating with a Node.js backend via **gRPC**"; Dr Wealth: Morningstar API integration | ✅ external-provider integration surface, schema-first. |
| "Work with product, mobile, and web to keep backend architecture ahead of the product" | MTailor: "reporting directly to the CTO"; "Migrated a WebFlow website from a Parse backend to Firebase"; CodeBits: "cross-platform mobile app… React Native and Expo (iOS & Android), with Firebase push notifications" | ✅ has shipped backends consumed by web and mobile clients he also worked on. |
| "Preferred: **Docker** and containerized deployments" | CodeBits: "Architected a microservices backend… using Apache Kafka, **Docker**, and Kubernetes" | ✅ |
| "Preferred: deploying **high-availability** applications on **Kubernetes**" | Same CodeBits line; Stack: "Docker, Kubernetes, NATS Streaming, gRPC" | ⚠️ Kubernetes in one role (2020–21), HA not stated. Preferred, not required. |
| "Judgment about **what not to build**" / "A preference for being corrected over being right" | Not CV-evidenced (behavioural). Story in §F. | — |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Payments / subscriptions / app-store billing / metering domain** | Soft-hard. It is the team's core domain but the JD asks for backend TS/Node + GCP, not billing experience. | Two-way sync consistency; Express Shipping revenue feature; 2M-record freshness jobs | Lead with consistency engineering: "I've run a dual-write between two live datastores under production traffic. Idempotency, redelivery and reconciliation are the same problems as not charging twice." Before the take-home, read Stripe's idempotency-key docs and Apple/Google server-notification flows (StoreKit 2 / RTDN) so the vocabulary is fluent. |
| 2 | **TypeScript depth (~6 months evidenced)** | Soft-hard — "(required)" and tested live in a recorded take-home. | Dr Wealth TS Cloud Functions; Go/Rust intermediate (typed languages) | Do not inflate on the PDF. Spend 2–3 evenings before the take-home in a TS + Node repo (strict mode, generics, discriminated unions, zod-style validation). Reuse the gap-handling story from the bank. |
| 3 | **No tests/CI/monitoring named** vs "leave behind the checks" | Soft. | Zero-downtime record; Ops training on backups | Tell the migration verification as a story (record-count reconciliation, parallel-run comparison). If he wrote tests or CI at MTailor, add to cv.md. |
| 4 | **Kubernetes HA** | Nice-to-have ("Preferred"). | CodeBits Kafka/Docker/K8s | Verbal bridge only. |
| 5 | **AI-agent daily setup not on CV** | Soft but **explicitly screened**. | career-ops pipeline; WhatsApp chatbot | Add career-ops as a project on the PDF with the "verification before scoring; human owns Submit" framing. Rehearse a 90-second answer: what runs unattended (scan, dedup, JD extraction), what he reviews (score, CV wording), what never acts alone (submission, anything that touches a recruiter). |
| 6 | **Billing of own time / surveillance culture** | Not a skills gap — a fit question. | — | Ask at the first human conversation: "How does the team track work — outcomes, or hours?" Decide with that answer in hand. |

## C) Level and Strategy

**JD level:** unlevelled "Software Engineer", but the scope is senior: own production APIs that external customers depend on, inherit and harden services, design enterprise integrations, set architecture ahead of product, and grow by giving work away. "There is no separate ladder" — the company says level is earned by scope.
**Candidate's natural level for this archetype:** **Senior Backend Engineer.** ~6.7 years of continuous Node backend; led a 20+ application zero-downtime migration reporting to a CTO; architected Kafka/K8s microservices; led a 4-dev team. He is the level this req describes, and the "flat, take scope" framing suits a candidate whose record is scope rather than titles.

### Sell senior without lying — permitted framings, all cv.md-backed

- "I led the end-to-end migration of 20+ production applications from Parse/MongoDB to Firebase/GCP with zero downtime, reporting directly to the CTO — including a real-time two-way MongoDB↔Firestore sync on Pub/Sub that kept both stores consistent while both served traffic."
- "Three of my roles were inheriting someone else's system and making it cheaper or faster: I took all services off AWS and cut $5,000/month; I optimised a live pricing PWA over 2M+ Firestore records."
- "I automate myself out of work: I scripted the S3→GCS move, documented the Firebase SDKs for the other engineers, and trained Ops to run backups and the dashboard without me."
- "I've designed external integration surfaces — a gRPC contract that multiple USSD providers integrated against with no per-provider code."
- "I run an agentic pipeline daily. It scans, verifies and scores job postings unattended; I review every score and every CV it writes; it is not allowed to submit anything."

**Forbidden framings:** any claim of payments/subscription/auth ownership; TS "5+ years"; Kubernetes HA operations; SLOs/on-call tooling; any named test/CI framework not actually used.

### If downlevelled
The title is already unlevelled, so a downlevel shows up as **pay band**, not title. Accept if the number is ≥ $80K with bonus and stock; otherwise: "The scope you've described — owning the subscription and metering APIs — is senior scope. I'm targeting $80–120K. Can we meet in that range, with a six-month review tied to the services I take over?" Do not accept the $30K end of the non-US band under any framing.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted US band (this req) | "The United States Based Salary range for this role is: 140,000-200,000 USD/Year + Bonus + Stock depending on experience" | JD body |
| Posted non-US band (same req, other clones) | **"$30,000-120,000 USD/Year + Bonus + Stock"** on the Amsterdam clone; Germany clone reported the same range | Greenhouse board API (boards-api.greenhouse.io/v1/boards/speechify/jobs); search results citing the Germany posting |
| African clones | Abuja and Alexandria (EG) clones carry **no salary sentence** | Greenhouse board API |
| Aggregator estimate, "Remote – Global" clone | "Estimated €4,695–€6,215/month" (≈ $60–80K/yr) — third-party estimate, not employer-stated | jobcrawls.com |
| Employer-disclosed pay across Speechify postings | Average base $139K, median $170K, range $42.5K–170K across 333 postings (Sept 2026) — skewed by US clones | hirebase.org |
| Against target | profile.yml target **$80K–120K**, floor **$60K**. Target sits in the upper half of the stated non-US band. Risk: Uganda-indexed offer near the $30K floor. | config/profile.yml |
| Employment type for non-US | **Not stated in the JD.** Glassdoor reviews describe developers as hour-tracked with screenshots, "treated as low-grade freelancers" — consistent with contractor arrangements for non-US staff. No source names Deel specifically; ask directly. | Glassdoor reviews |
| Company finances | ~200 people; ~$10M total raised (largely bootstrapped); revenue ~$17.6–20M (2024–25); 50M+ users; Chrome Extension of the Year; Apple Design Award 2025 (Inclusivity). No layoffs reported. | JD body; CB Insights; bitscale/choppingblock summaries |
| Glassdoor | 4.3/5, 114 reviews, 86% recommend. Critical minority: minute-level time tracking, screenshots, equity-vesting terminations alleged, "Toxic CEO". | Glassdoor |
| Interview | Automated take-home link before any call; 90 minutes, recorded (webcam/mic/screen); some roles restrict external docs; ~1 week total; "fix five production-level issues and document them" reported for one role | Glassdoor interview reviews |
| Demand | Node/TS backend + GCP remains the single most common requirement set in this pipeline; Speechify has 241 clones of this one req open, indicating sustained hiring for the team. | Pipeline data; Greenhouse board |

**Negotiation script (first screen, before a band is assigned):**
> "I'm fully remote from Kampala, UTC+3, and I work async. I understand the US band is $140–200K; I'm not anchoring to that. I am targeting $80–120K total, which sits inside your published non-US range. Can you confirm which band this role sits in for a non-US hire, and whether it's employment or contractor?"

## E) Personalization Plan

### Top 5 CV changes (applied to the PDF)

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Migration-first generic headline | Rewrite around **correctness-critical backend APIs** on **Node/TypeScript and GCP**: two-way sync consistency, inherited services made cheaper/faster, automating own work, agentic tooling | Mirrors the JD's three themes: correctness, inheritance, self-automation. |
| 2 | Core Competencies | Not tuned | Node.js & TypeScript APIs · GCP (Firestore, Pub/Sub, Cloud Functions) · Data Consistency & Idempotent Sync · Zero-Downtime Migrations · Service Hardening & Cost Reduction · B2B API Integrations (gRPC) · Docker & Kubernetes · AI-Agent Workflows | All cv.md-backed; no "payments" tag because he has not owned payments. |
| 3 | MTailor bullets | Chronological | Lead with the **two-way sync** (consistency), then **zero-downtime migration**, then **$5,000/month** (cheaper), then Express Shipping (+$40/order, revenue-bearing). Drop the Webflow line to save space. | Puts the consistency bridge first. |
| 4 | Contractor + Dr Wealth bullets | Understated | Contractor: emphasise **documentation + Ops training** ("giving away work"). Dr Wealth: lead with **TypeScript** Cloud Functions/Express line, then 2M-record jobs. | Surfaces the only TS evidence and the "make your job smaller" behaviour. |
| 5 | Projects | Not tuned | Pub/Sub sync pipeline · career-ops agentic pipeline (verification gate, human-only submit) · gRPC USSD integration surface · Healthcare WhatsApp chatbot (OpenAI + Vision) | Agentic project answers the explicit AI-agent screen; chatbot shows applied AI at a TTS/AI company. |

### Top 5 LinkedIn changes

1. Headline → "Senior Backend Engineer · Node.js/TypeScript · GCP · zero-downtime migrations & data consistency".
2. MTailor → make the two-way sync the first line; name Pub/Sub, Firestore, idempotency.
3. Dr Wealth → put "TypeScript" in the first line.
4. Featured → pin the career-ops repo (or a write-up) as the "how I work with AI agents" artefact.
5. Skills → ensure TypeScript, GCP, Pub/Sub, Docker, Kubernetes are endorsed and ordered first.

### cv.md maintenance (blocking across reqs)
- If Isaac wrote tests, CI, or monitoring at MTailor, add one line — "leave behind the checks" reqs are common and he currently has nothing to point at.
- SQL remains on the Proficient line with no project behind it.

## F) Interview Prep

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Subscription state has to stay consistent… it is either right, or someone gets charged twice" | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank: Real-time systems / streaming) | MTailor, 20+ apps, both datastores live during migration | Keep both stores consistent under writes from both sides | Node.js consumers on Pub/Sub; idempotent handlers; origin tagging to stop echo loops; redelivery-safe writes | Zero downtime; no divergence surfaced during cutover | "Exactly-once is a lie; idempotent-at-least-once is the design. I'd apply the same to webhook-driven subscription state." |
| 2 | "Take on services you didn't write and make them faster, cheaper, and harder to break" | **AWS exit saving $5,000/month** (bank: Cost optimization / FinOps) | MTailor running split across AWS and GCP after migration | Consolidate without breaking anything | Inventoried services, scripted S3→GCS in Python, migrated and decommissioned incrementally | $5,000/month saved, all services on one cloud | "Cheaper and harder-to-break were the same change: fewer moving parts." |
| 3 | "Giving away work you used to own, and something to show for the room it created" | **SDK docs and Ops training** (bank: Enablement / documentation) | Post-migration, team unfamiliar with Firebase | Make the platform runnable without the migration engineer | Wrote Node/Python SDK docs; trained Ops on dashboard and backups | Ops ran backups and dashboards without him; he moved to feature work (3D visualisation, Express Shipping) | "The room it created is on my CV: the revenue features came after I stopped being the only person who could run the platform." |
| 4 | "Check a result against the system itself — logs, database state, the actual request" | **Zero-downtime Parse→Firebase migration** (bank: Lead end-to-end backend project) | Cutting over apps one by one | Prove each cutover correct before going dark on the old store | Parallel-run both stores, compared record state, rolled back when they disagreed | 20+ apps with no outage | "A summary saying 'migration complete' is worth nothing; a record-count diff is worth everything." |
| 5 | "A daily working setup with AI agents… what runs unattended, what you review, where it doesn't get to act alone" | **Career-ops agentic pipeline** + **Evidence-gated AI pipeline** (bank) | Personal job-search tooling on Claude Code | Scale evaluation without losing correctness | Unattended: scan, dedup, JD extraction, liveness verification. Reviewed: every score and CV. Never autonomous: submission. | 200+ evaluations, zero false-positive geo matches after the verification gate | "The agent earns autonomy on reversible steps. Submitting to a recruiter isn't reversible, so it never gets it." |
| 6 | "Design B2B and enterprise integrations for customers building on top of us" | **gRPC service bus for USSD providers** (bank: Public API / extensibility platform) | Multiple USSD providers integrating with one legal-aid backend | A stable contract with no per-provider code | Protobuf schemas, explicit versioning, documented contract | Providers integrated against one surface | "Every field is a contract you live with." |
| 7 | "Judgment about what not to build" | **Keeping the human on Submit** (NEW — see stories file) | Agentic pipeline could trivially auto-apply | Decide the boundary | Deliberately did not build auto-submission; built review gates instead | Fewer, better applications; no recruiter spam | "Not building it was the feature." |
| 8 | "Proven backend experience in TS/Node (required)" — the gap question | **Answering the TypeScript gap straight** (bank: Gap handling) | TS evidenced ~6 months at Dr Wealth | Answer without bluffing | Name it first; point to Node depth and typed-language familiarity (Go/Rust); show a TS artefact | Credibility preserved | "Name the gap before they find it." |

**Recommended case study:** the two-way sync. Draw it: two stores, Pub/Sub topics each way, origin tag, idempotency key, reconciliation job. Then map each box to a subscription-state analogue (App Store notification → webhook → idempotent handler → ledger). That shows the domain gap is a vocabulary gap, not a skills gap.

**Red-flag questions:**
- *"Have you built payments or billing?"* — "No. I've built the harder half of it — dual-write consistency under live traffic — and I'd want to learn your billing edge cases from the people who've been paged for them."
- *"How many years of TypeScript?"* — "Production TS for about six months at Dr Wealth; Node for six years; I'm fluent reading it and write it daily now. The take-home will show you."
- *"You've never run Kubernetes at scale."* — "Correct. I architected and ran a Kafka microservices backend on K8s for an NGO platform; I have not run HA clusters for 50M users. It's a preferred, and I'd ramp on your setup."
- *Ask back:* "How is work tracked on the Platform team — outcomes or hours? What does a week look like for someone at UTC+3?"

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | 4.0 | Senior backend API ownership, inherited-service hardening, self-automation — all evidenced. Billing/auth domain not owned. |
| Stack | 4.0 | Node deep, GCP deepest cloud, AWS working, Docker/K8s present. TS evidenced ~6 months against "(required)". |
| Seniority | 4.0 | Unlevelled title; scope is senior and Isaac's record is senior scope. Flat org suits scope-based candidates. |
| Remote / geo | 5.0 | 100% distributed, no office, async; African city clones of this JD; no restriction in body. |
| Comp | 3.5 | Non-US band $30–120K brackets the target but the floor is below walk-away; African clones unpriced; contractor status unconfirmed. |
| Stability / company | 3.0 | Profitable-ish, bootstrapped, 50M users, awards, no layoffs; but specific Glassdoor reports of surveillance, freelancer treatment and pre-vesting terminations. |
| **Average** | **3.9** | |

---

## Keywords extracted

TypeScript, Node.js, GCP, Google Cloud, AWS, backend APIs, payments, subscriptions, auth, consumption tracking, metering, public API, TTS API, correctness, consistency, idempotency, high availability, Docker, Kubernetes, containerized deployments, B2B integrations, enterprise integrations, automation, AI agents, observability (logs, database state), distributed systems, asynchronous culture, service ownership, cost reduction, backend architecture

---

## G) Draft Application Answers (added 2026-10-01 via `apply`)

Form read live via Playwright 2026-10-01 at the Greenhouse posting. Fields: First/Last Name, Email, Phone, Resume attach, LinkedIn Profile, "How did you hear about this opportunity?*", "Why do you want to work at Speechify?*", "What is one of the hard technical problems you have worked on?*", "Where are you located?*" (dropdown; options include **Africa**), optional US EEO fields (Gender / Hispanic-Latino / Veteran). No cover-letter field.

### How did you hear about this opportunity?
> Found it on your Greenhouse board while searching specifically for globally remote TypeScript/Node platform roles. The fact that the same role is posted for Lagos, Cape Town and Johannesburg told me you hire where the engineers are.

### Why do you want to work at Speechify?
> Your posting describes the backend I want to own: APIs where "it is either right, or someone gets charged twice." My last three years were a version of that problem. At MTailor I led the zero-downtime migration of 20+ production applications from Parse/MongoDB to Firebase/GCP, which meant running a real-time two-way sync between MongoDB and Firestore on Node.js and Pub/Sub under live traffic for months. Idempotency, redelivery, ordering and reconciliation were the whole job. I have never owned billing or subscription state, and I would rather say that than imply it. What I have done is keep two live datastores consistent while 20 apps depended on them, and I inherited every one of those services from someone else and made them cheaper (about $5,000 a month) and harder to break. TS/Node and GCP are my deepest stack, and a 100% distributed, asynchronous team is how I have worked since 2020.

### What is one of the hard technical problems you have worked on?
> Migrating 20+ production apps off Parse/MongoDB onto Firestore without a maintenance window. A big-bang cutover was not acceptable, so I built a bidirectional sync: every write to MongoDB was published to Google Pub/Sub and applied to Firestore, and every Firestore write flowed back, while both stacks served real users. The hard parts were loop prevention (a change applied from the other side must not be re-published), at-least-once delivery (every apply had to be idempotent, keyed on the source record and version), out-of-order arrival, and proving correctness: I reconciled record counts and sampled documents between the two stores continuously and only moved an app's reads once its collections had been clean for a sustained period. The migration finished with zero downtime, and the same pipeline let us retire AWS entirely, saving about $5,000 a month. What I took from it is that the verification harness is the product; the sync code was the easy half.

### Where are you located?
> **Africa**

### Other fields
- Resume: `output/cv-isaac-speechify-platform-2026-10-01.pdf`
- LinkedIn: https://linkedin.com/in/isaac-mubiru-3bb728174
- Phone: country Uganda (+256), per profile.yml
- EEO fields (Gender / Hispanic-Latino / Veteran): US-specific and optional. "Decline to self-identify" is a normal choice for a non-US applicant.

### Before you submit
- Expect an automated email with a recorded 90-minute take-home (webcam, mic, screen) before any human call. Block a fresh slot; do a 2–3 evening TS refresher first (strict mode, generics, zod-style validation).
- At the first human conversation, anchor comp at $80K–120K and ask how the team tracks work (outcomes or hours). Non-US clones of this req list $30K–120K.
