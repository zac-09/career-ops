# Evaluation: Trigger.dev — Backend Engineer (Security)

**Date:** 2026-10-01
**Archetype:** Hybrid — **Senior Backend Engineer** (the "real backend engineering experience" half) + **Platform/Infrastructure Engineer** (sandbox runtimes, Kubernetes, isolation), with a **security-specialist overlay** that is not one of Isaac's six archetypes at all.
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/triggerdev/cf7e7521-b323-41b8-917b-2972685c7791
**PDF:** output/cv-isaac-triggerdev-backend-security-2026-10-01.pdf
**Verification:** live via Ashby posting API (JSON) 2026-10-01; JD saved to jds/triggerdev-backend-engineer-security.md. Geo was flagged "unverified" at scan time.
**Recommendation:** **CONSIDER — weak, and conditional on two questions Isaac must answer honestly before applying.** (1) Does he actually do offensive security as a hobby or discipline (CTFs, bug bounty, pen testing)? Nothing on cv.md says so, and the JD calls it a requirement, "not a checklist role". If the answer is no, **SKIP** — the 3.1 is carried by seniority, stack and company quality, not by fit. (2) Geo is **UNCERTAIN**: this req's body has no timezone clause, but two sibling reqs on the same Ashby board say "If you are remote you must be within CET to ET timezones (GMT+1:00 to GMT-5:00)", and Kampala (UTC+3) sits *outside* that band. Ask in the first screen before investing further.

---

## Headline caveats (read these before the score)

1. **This is a security engineering role with a backend prerequisite, not a backend role with a security flavour.** The JD's own words: "We're looking for a backend product engineer who **loves security** - not a security box-ticker", "The ideal person here is a backend engineer with **genuine offensive-security instincts** - someone who naturally gravitates toward hacking, pen testing, and breaking things". Six of the eight responsibility bullets are pure security work (sandbox/runtime security, threat detection and incident response, vulnerability management, offensive security, PR security review, vulnerability disclosure program). **cv.md contains zero security lines** — no pen testing, no CTF, no bug bounty, no SOC 2, no threat modelling, no sandboxing. Role fit is scored **1.5/5** and that is the honest number.
2. **Geo is genuinely uncertain, and the evidence leans against Kampala.** This req's body says only "Open to in-person events throughout the year. If you're remote, we'll arrange these so the team gets real time together." No country, no timezone, no work-authorization clause. But the same company's Marketing Lead and Design Engineer reqs, live on the same board today, say verbatim: "**If you are remote you must be within CET to ET timezones (GMT+1:00 to GMT-5:00).**" UTC+3 is two hours east of the eastern edge of that band. The sibling engineering req is titled "Senior Backend Engineer (**Europe**)". The benefits list "**Pension contributions** - enroll in our company pension scheme" — UK-employment language. The omission on *this* req could be deliberate (security talent is scarce, so they widened the net) or an oversight. Scored **2.5/5**, not PASS and not FAIL.
3. **Comp is undisclosed and location-indexed.** Search results for sibling Trigger.dev reqs state the company "uses PostHog's salary calculator to benchmark fair and transparent compensation, which varies based on employee location and level of experience." PostHog's calculator applies a location factor and, per PostHog's own handbook, a country missing from the calculator "simply means they haven't hired there before". Uganda is almost certainly not in it. Expect a UK-benchmarked number with an unknown Africa discount.
4. **The title is "Backend Engineer", not "Senior".** Isaac has ~6.7 years of professional backend work and has led a 20+ application migration programme and a 4-developer team. He clears the level easily; the risk is being *under*-levelled on a req that may be scoped for someone with 3–5 years plus a hacking hobby.
5. **On-call is explicit.** "Comfortable being on call. Reliability and security response are shared responsibilities across the team." cv.md names no on-call rotation, SLO, or incident tooling. Combined with the possible CET–ET expectation, this is a working-conditions question as much as a skills one.

---

## Geo Check — UNCERTAIN (scored on the JD body, per constraint)

- **Exact remote text (body, verbatim, the only location-bearing sentence):** "**Open to in-person events throughout the year. If you're remote, we'll arrange these so the team gets real time together.**"
- **Country restriction in body:** none. **Work-authorization clause:** none. **Timezone / overlap-hours requirement:** none.
- **Ashby chips:** Location "Remote or Hybrid UK"; `isRemote: true`; `workplaceType: Remote`; address country `United Kingdom`. Per MEMORY, chips are not scored — but they are consistent with a UK-anchored team.
- **Sibling reqs on the same board (Ashby posting API, fetched today):**
  - Marketing Lead — "If you are remote you must be within CET to ET timezones (GMT+1:00 to GMT-5:00). We will arrange in-person events throughout the year."
  - Design Engineer — identical sentence.
  - Senior Backend Engineer (**Europe**) — same "Open to in-person events" sentence as this req; the restriction is in the title.
  - DevRel (SF Events) — "based in San Francisco".
  - Technical Recruiter — London, hybrid.
- **Benefits language:** "Pension contributions - enroll in our company pension scheme, or we'll contribute directly to your private pension" (UK employment framing; US-facing postings elsewhere mention 401k).
- **Company footprint:** London HQ, founded 2022, YC W23, Series A $16M (Dec 2025). Small team (single-digit to low-double-digit headcount per public profiles). No evidence found of any hire in Africa or outside the CET–ET band.

**Verdict: geography UNCERTAIN, leaning restrictive.** The body does not exclude Isaac, so this is not a FAIL. But the company's stated pattern for remote hires is CET–ET, and Kampala is outside it by two hours. The in-person events are UK-based and would require visa-and-flight travel from Uganda several times a year. **First screening question, verbatim:** *"Your Marketing and Design Engineer reqs specify CET to ET for remote hires. Does that apply to this role? I'm in Kampala, UTC+3 — two hours ahead of CET, so my working day overlaps the UK day almost entirely."* If the answer is no, stop.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend + Platform/Infra, with a **security-specialist overlay** that dominates the responsibilities. |
| Domain | **Developer infrastructure / workflow orchestration.** "Trigger.dev is the platform for running reliable AI agents and workflows." Cloud product "auto-scale[s] from zero to millions of executions", "hundreds of millions of executions per month". Commercial open source. |
| Function | **Build + own.** "You'll build and own the systems that let Trigger safely run massive volumes of untrusted user code inside our infrastructure, at scale." Plus community support, docs, PR review, content creation. |
| Seniority | **Mid-to-senior IC.** Title is "Backend Engineer" (no level). Requirements are experience-shaped, not years-shaped. |
| Stack (from JD + company) | Node.js, TypeScript ("enough to read and review application code"), containers/microVMs (gVisor, Firecracker, WASM sandboxes listed as nice-to-have), Kubernetes (company), Postgres + Redis (company), AI-assisted security tooling, SOC 2. |
| Remote | "Remote or Hybrid UK" chip; body has no timezone clause; sibling reqs say CET–ET. |
| Team size | Not stated. Company is small (Series A, London). |
| On-call | Yes — "Comfortable being on call." |
| Comp | Undisclosed. "Generous, transparent compensation and equity." Benchmarked via PostHog calculator with location factor (external sources). 25 days vacation, pension, training budget, home office. |
| TL;DR | A high-quality company and a stack Isaac genuinely knows, attached to a role whose centre of gravity — offensive security, sandbox isolation, vulnerability management — has no evidence on his CV, in a geo band he may sit just outside of. |

## B) CV Match

| JD Requirement | CV Evidence (exact lines from cv.md) | Match |
|---|---|---|
| "**Real backend engineering experience.** You can design and ship production backend systems, not just audit someone else's." | MTailor: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime, reporting directly to the CTO"; "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"; CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes"; Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js hosted on Heroku" | ✅ **strongest match.** Six-plus years of shipped production backend across five roles. The "not just audit" clause is pointed at security-only candidates; Isaac is the opposite profile. |
| "**Experience with Node.js and TypeScript**, enough to read and review application code." | Skills: "**Proficient:** Node.js, TypeScript, Firebase, React, GCP, Python…"; Dr Wealth: "Extended backend APIs in **TypeScript**"; Node.js in every one of five Stack lines | ✅ bar is "read and review"; Isaac writes it. TypeScript depth is ~6 months at Dr Wealth plus Node.js throughout — comfortably above the stated bar, and the report does not inflate it beyond that. |
| "Experience building or hardening **sandboxed/isolated execution environments** (containers, microVMs, gVisor, Firecracker, WASM sandboxes, or similar)." | CodeBits: "…using Apache Kafka, **Docker**, and **Kubernetes**"; Stack: "Node.js, Firebase, React Native, Apache Kafka, Docker, Kubernetes, NATS Streaming, gRPC…" | ⚠️ **containers yes, isolation no.** He has containerised and orchestrated services. He has never built a sandbox whose purpose is to contain hostile code. gVisor/Firecracker/WASM: absent. Nice-to-have per JD, but it is "the core, product-shaped problem at the heart of this role". |
| "**Genuine offensive-security curiosity.** Pen testing, CTFs, bug bounty hunting, or hacking as a hobby or discipline" | **Nothing.** | ❌ **load-bearing gap and a stated requirement.** No line on cv.md, profile.yml, or story-bank.md references security practice of any kind. Only Isaac can say whether this exists off-paper. |
| "Sandbox and runtime security. Designing and maintaining the secure execution environments that isolate untrusted user code" | As above — Docker/Kubernetes at CodeBits; GCP Cloud Functions runtime at Dr Wealth/MTailor (consumer of a managed isolated runtime, not builder) | ❌ not evidenced as a builder. |
| "**Threat detection and incident response.** Building monitoring and alerting for suspicious activity, and leading the response" | Nearest: MTailor "ensuring zero downtime" across 20+ apps; contractor: "Trained the Ops team on the new Firebase Dashboard and **backup procedures**" | ⚠️ operational-readiness and incident-*avoidance* evidence; no monitoring/alerting system, no incident led, no security event. |
| "**Vulnerability management, end to end.** Regular scanning and triage… triaging incoming disclosures" | Nothing | ❌ |
| "**Offensive security.** Running internal, AI-assisted pen testing" | Nothing on cv.md. profile.yml proof point: "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision"; story-bank: "[AI-assisted engineering workflow] Career-ops agentic pipeline" | ⚠️ AI-assisted *tooling* is real (and matches "Experience using AI-assisted tooling for security scanning or workflows" in spirit); pen testing is not. |
| "**PR security review.** Adding a security-specific review layer" | Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs"; CodeBits: "Led a team of 4 developers" | ⚠️ code review as a lead is implied; a *security* review lens is not evidenced. |
| "**SOC 2 and compliance.** Mostly done already - ongoing maintenance" | Nothing | ❌ (lowest weight — JD says "mostly done already") |
| "**Security culture.** Helping the wider engineering team build secure habits - reviews, documentation, and pragmatic guardrails" | Contractor: "Wrote documentation for fellow engineers…"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ the *enablement* muscle is directly evidenced; the security content is not. |
| "**Comfortable being on call.**" | No rotation, SLO, pager, or incident tooling named anywhere | ⚠️ gap already flagged in prior reports (#222). Zero-downtime migration is the honest adjacent. |
| "A **proactive mindset**… take work off the team's plate" | MTailor contractor → full-time; "Saved the company $5,000/month by migrating all services off AWS"; "Implemented Express Shipping, generating an additional $40 revenue per order" | ✅ ships things with numbers attached, reporting straight to a CTO. |
| "A proven track record of **contributing to open source projects**" | cv.md: "[GitHub](https://github.com/zac-09)"; no named OSS contribution | ⚠️ a GitHub exists; cv.md names no upstream contribution. If any exists, it belongs on the PDF. |
| "Worked at a **developer tools, infrastructure, or open source company**" | None of the five employers is a dev-tools company (fashion e-commerce, fintech PWA, agency, legal-tech NGO contractor) | ❌ nice-to-have, missed. |
| "Everyone on the team helps customers, reviews PRs, and creates issues… Everyone writes docs… creating content like code examples, blog articles, videos, and tweets" | Documentation and Ops training (contractor role); no public content named | ⚠️ docs yes; public content no. |
| Company context: AI agents and workflows, "hundreds of millions of executions per month" | MTailor: two-way sync "using Node.js and Google Pub/Sub for message processing"; Dr Wealth: "ad-hoc jobs to query over 2 million Firestore records"; CodeBits: Kafka microservices | ✅ event-driven, high-volume background processing is exactly Trigger.dev's product shape. This is the best *domain* bridge Isaac has. |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Offensive-security curiosity (pen testing / CTF / bug bounty)** | **HARD.** Stated requirement, and the JD pre-empts the box-ticker answer twice. | None on paper. | **Isaac must answer this himself before applying.** If he has done CTFs, HackTheBox, bug bounty, or any security write-ups, that goes in the first line of the PDF summary and the first sentence of the application. If not, do not manufacture it — apply to the Senior Backend Engineer (Europe) req instead, if the geo question clears. |
| 2 | **Sandbox / isolation engineering (gVisor, Firecracker, WASM)** | Soft-hard. "Amazing fit if", not required — but it is the core problem. | Docker + Kubernetes at CodeBits | Honest bridge: "I've run multi-tenant services on Kubernetes; I have not built a runtime designed to contain hostile code. I'd want to learn Firecracker/gVisor properly." Only credible if gap 1 is answered yes. |
| 3 | **Geo (CET–ET pattern on sibling reqs)** | Potentially **HARD**, unknown. | Four years of US/Singapore remote from UTC+3 | Ask in the first screen (script in Geo Check). UTC+3 gives a near-full overlap with the UK day — that is the argument. |
| 4 | **Threat detection / incident response / on-call** | Soft. | Zero-downtime migration; Ops backup training | Frame cutover work as incident avoidance; ask what the rotation looks like. |
| 5 | **Dev-tools / OSS company background; named OSS contributions** | Nice-to-have. | github.com/zac-09 | Surface any real public repo or upstream PR on the PDF Links section. Do not claim "open-source contributor" without a named artefact. |
| 6 | **Postgres / Redis (company stack)** | Soft. | Skills: "SQL" (unevidenced in bullets); MongoDB, Firestore at scale | Known CV gap (MEMORY). Say "document stores at scale, SQL working knowledge" and no more. |

## C) Level and Strategy

**JD level:** unlevelled "Backend Engineer" with senior-shaped expectations (own ambiguous product-security problems end to end, lead incident response, own the VDP).
**Candidate's natural level for this archetype:** **Senior Backend / Platform IC.** ~6.7 years, programme lead on a 20+ app migration, 4-person team lead, direct-to-CTO in three of five roles. On the *backend* axis he is above the req. On the *security* axis he is below entry.

**Sell senior without lying — permitted framings, all cv.md-backed:**
- "I design and ship production backend systems — I led a 20+ application zero-downtime migration to GCP reporting directly to the CTO, and built the two-way MongoDB↔Firestore sync on Pub/Sub that kept both stacks consistent under live traffic." (Hits "real backend engineering experience… not just audit".)
- "I've architected and run containerised microservices on Kubernetes with Kafka." (Hits containers; stops short of isolation.)
- "I write Node.js and TypeScript daily and have for six years." (Hits read-and-review bar with room to spare.)
- "I've documented SDKs for other engineers and trained an Ops team onto a new platform — the enablement half of 'security culture' is something I've done." (Hits culture/docs.)
- Event-driven, high-volume background processing (Pub/Sub, Kafka, 2M-record jobs) is Trigger.dev's own product domain.

**Forbidden framings:** any claim of pen testing, CTF, bug bounty, threat modelling, sandbox hardening, SOC 2, or incident-response ownership; "security-minded" as a personality claim with no artefact behind it; Postgres/Redis depth; Kubernetes beyond CodeBits.

**If downlevelled or redirected:** the right pivot is immediate and prepared — *"If the security specialisation is the gate, I'd rather be considered for the Senior Backend Engineer (Europe) req. My strength is production backend systems on Node.js and TypeScript at scale, and that's the seat where I'd be shipping from week one."* That req carries "(Europe)" in its title, so it only works if the geo answer is yes.

**If offered:** accept at a fair UK-benchmarked number (see §D) only with a written statement of what "remote" means for in-person events (frequency, who pays travel and visa costs from Uganda) and what the on-call rotation covers.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted comp (this req) | **Not disclosed.** "Generous, transparent compensation and equity - we hire the best talent and pay to reflect that." | JD body |
| Benchmark method | Sibling Trigger.dev reqs: company "uses PostHog's salary calculator to benchmark fair and transparent compensation, which varies based on employee location and level of experience" | WebSearch summary of startup.jobs / builtin listings (direct fetch returned 403) |
| PostHog calculator mechanics | Location factor applied; "If PostHog is missing a country, it simply means they haven't hired there before and would need to put together data in advance of hiring" | posthog.com/handbook/people/compensation |
| Indicative UK band | Not published for Trigger.dev. PostHog's own UK/Europe backend reqs are benchmarked off a $285K SF base with a location multiplier; a London factor typically lands a mid-level backend engineer in the low-to-mid six figures USD, a Series A startup lower | Inference — **no Trigger.dev-specific figure found; treat as unknown** |
| Against target | profile.yml target `$80K-120K`, floor `$60K`. A UK-benchmarked number clears both; an Africa-factored number is unknown and could approach the floor | config/profile.yml |
| Benefits | 25 days vacation + national holidays, sick leave, parental leave, pension contributions, training budget, home-office equipment, async working | JD body |
| Company | Founded 2022, London; YC W23 ($500K pre-seed led by YC); $3M seed; **Series A $16M, 17 Dec 2025**; small team (public profiles list single-digit headcount, likely stale post-Series A) | CB Insights, trigger.dev blog, YC profile |
| Traction | "thousands of teams… hundreds of millions of executions per month"; active OSS community on GitHub/Discord | JD body |
| Demand trend | Strong. Secure execution of untrusted agent code is one of the hottest 2026 infra problems (every coding-agent and workflow platform needs it). Candidates with backend + offensive-security overlap are scarce — which is probably why this req omits the CET–ET clause. | Market read |

**Comp read:** the company will pay a fair UK-indexed number; the unknown is the location factor for Uganda, which PostHog's method does not have and Trigger.dev would have to construct. **Negotiation (from `modes/_shared.md`):** *"The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."* Deploy it when the calculator is mentioned, and anchor on the posted-elsewhere UK band: *"I'd expect to be benchmarked against your UK remote engineers; I'm two hours ahead of London and work the same day."* Pin down who pays for travel and visas to UK in-person events before accepting.

## E) Personalization Plan

### Top 5 CV / PDF changes

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Professional Summary | Migration-first generic backend | Lead with "Backend engineer (Node.js/TypeScript, 6+ years) who designs and ships production systems at scale" and name the event-driven, high-volume work (Pub/Sub sync across 20+ apps, 2M-record jobs, Kafka microservices on Kubernetes). **Do not** write "security-minded" or "security engineer". | Hits "real backend engineering experience" and the company's own domain; stays truthful on security. |
| 2 | Core Competencies | Not tuned | Node.js & TypeScript · Production Backend Systems · Kubernetes & Containerised Services · Event-Driven Architecture (Kafka, Pub/Sub) · Zero-Downtime Migrations · GCP & AWS · Documentation & Developer Enablement · AI-Assisted Tooling | Every tag is cv.md- or profile.yml-backed. No "Security", "Sandboxing", "Pen testing". |
| 3 | MTailor bullets | Revenue/3D features mid-list | Lead with the two-way sync (message processing under live traffic), then the 20+ app zero-downtime migration, then Ops/backup training; drop Webflow line | The req cares about running untrusted/high-volume code safely at scale; the sync + cutover story is the closest proof of operating production under risk. |
| 4 | CodeBits bullets | Team-lead first | Lead with Kafka/Docker/**Kubernetes** microservices and the gRPC service boundary, then team lead | Containers/orchestration is the only isolation-adjacent evidence on the CV. |
| 5 | Links section | GitHub only | Keep github.com/zac-09; **if** Isaac has any public security write-up, CTF profile, or upstream OSS PR, add it here and move it into the summary | The JD asks for OSS and hacking evidence; a link is the only honest way to supply it. |

### Top 5 LinkedIn changes

1. Headline: add "Node.js / TypeScript" explicitly next to the backend framing.
2. MTailor: surface the Pub/Sub two-way sync and the zero-downtime cutover as the first two lines.
3. CodeBits: lead with Kubernetes/Kafka microservices.
4. Featured: pin any public repo from github.com/zac-09; if any security/CTF activity exists, pin it.
5. Skills: add Docker, Kubernetes, TypeScript (already on cv.md) — do not add "Security" unless a real artefact exists.

### cv.md maintenance items

- If Isaac has *any* security practice (CTF, bug bounty, HackTheBox, security write-ups), it is currently invisible and is costing him this entire category of role. Add a Projects/Interests line only if true.
- On-call / incident handling remains unnamed across all roles (recurring finding from #222).

## F) Interview Prep

Stories 1–7 reuse existing story-bank entries by title; story 8 is a new gap-handling story (candidate written to scratch, not to story-bank.md).

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Real backend engineering experience… design and ship production backend systems" | **[Lead end-to-end backend project] Zero-downtime Parse→Firebase migration** | MTailor, 20+ live apps on Parse/MongoDB | Move everything to Firebase/GCP with zero downtime | Programme-led the migration reporting to the CTO; parallel-ran both stacks | Zero downtime; all services off AWS; $5,000/month saved | "Running two datastores in parallel cost more engineering than a cutover but removed the catastrophic-failure path. Security sandboxing is the same trade: pay upfront for isolation so one bad execution can't take down the platform." |
| 2 | "safely run massive volumes of untrusted user code… at scale"; message processing | **[Real-time systems / streaming] Two-way MongoDB↔Firestore sync on Pub/Sub** | Both datastores serving production during migration | Keep them consistent with no data loss | Built two-way sync on Node.js + Google Pub/Sub with idempotent, redelivery-safe writes | Consistent data across 20+ apps under live traffic | "Pub/Sub's at-least-once delivery forced me to design for hostile inputs — duplicates, out-of-order, replays. That's the mindset shift the JD calls 'breaking things', applied to data integrity rather than exploits." |
| 3 | Containers / isolation; Kubernetes | **[Distributed infrastructure] Kafka/Kubernetes microservices for FIDA Uganda** | Legal case-management for an NGO | Backend serving mobile, web and USSD clients | Architected Kafka-based microservices on Docker/Kubernetes, gRPC boundaries | Shipped and in service | "I've isolated *services* from each other with containers and typed contracts. I have not isolated *hostile code* from the host — gVisor and Firecracker are where I'd need to go deeper, and I'd say so." |
| 4 | "Security culture… reviews, documentation, and pragmatic guardrails"; "Everyone writes docs" | **[Enablement / documentation] SDK docs and Ops training for the new Firebase stack** | Post-migration, nobody else knew the new stack | Make it operable without the migration engineer | Wrote Node.js/Python SDK docs; trained Ops on dashboards and backup procedures | Ops ran the platform independently | "Guardrails that people understand beat process they resent. That's the JD's 'pragmatic guardrails rather than heavy process' — I've done the enablement half; the security content would be new." |
| 5 | "Comfortable being on call"; incident response | **[Cost optimization / FinOps] AWS exit saving $5,000/month** (operational ownership angle) | MTailor, consolidating off AWS | Decommission services without breaking production | Migrated S3→GCS via Python; sequenced service shutdowns | $5,000/month saved, no outage | "I've owned production changes where a mistake would page someone. I haven't carried a formal rotation — I'd want to know what yours covers from UTC+3." |
| 6 | "Experience using AI-assisted tooling for security scanning or workflows" | **[AI-assisted engineering workflow] Career-ops agentic pipeline** | Personal tooling | Automate a research/evaluation pipeline with LLM agents | Built an agentic Claude Code pipeline with verification gates before scoring | Running daily, evidence-gated | "AI-assisted scanning is only useful with a verification gate in front of it; I built exactly that pattern, for a different domain." |
| 7 | "Proactive mindset… take work off the team's plate" | **[Business-impact features] Express Shipping and 3D visualization at MTailor** | Small team, CTO as only manager | Ship features that move revenue without being asked twice | Built Express Shipping end to end; 3D viewer with ffmpeg | +$40/order; higher conversion | "On a small team, proactivity means finishing the whole thing, including the unglamorous half." |
| 8 | "Genuine offensive-security curiosity" | **[Gap handling] Answering the security-specialisation gap straight** (new) | Screen for a security-flavoured backend role | Be truthful about zero formal security background | State the gap in one sentence, pivot to adjacent evidence (hostile-input design, containers, enablement), ask whether the req is open to a backend-first hire | Credibility preserved; possible redirect to the Senior Backend (Europe) req | "The JD explicitly rejects box-tickers; the only answer that survives a security interviewer is an honest one." |

**Recommended case study:** the **two-way Pub/Sub sync** (story 2). It is the one artefact where Isaac designed against adversarial *conditions* (redelivery, ordering, partial failure) at the scale Trigger.dev operates. Present it as "designing for inputs you don't trust", which is the closest truthful bridge to the role's mindset.

**Red-flag questions and how to answer them:**

| Question | How to answer |
|---|---|
| **"Tell me about your pen testing / CTF / bug bounty experience."** | If none: *"I don't have one. I'm a backend engineer who has built systems that have to survive hostile conditions — redelivery, replays, parallel traffic during a migration — but I haven't done offensive security as a discipline. If that's the gate, I'd rather you know now, and I'd ask to be considered for the Senior Backend req."* If some: lead with the artefact and link. |
| **"Have you built a sandbox for untrusted code?"** | *"No. I've run multi-tenant services on Kubernetes and consumed managed isolated runtimes (Cloud Functions). Building the isolation layer itself — Firecracker, gVisor — would be new to me."* |
| **"Where are you based, and what about the in-person events?"** | *"Kampala, UTC+3 — two hours ahead of London, so I overlap your full working day. I've worked US and Singapore remote for four years. For UK events I'd need visa and travel support; how often do they run and who covers it?"* Then ask the CET–ET question directly. |
| **"On call?"** | *"Yes in principle. I haven't carried a formal rotation; my closest equivalent is owning a 20+ app cutover on live traffic. What does the rotation and coverage window look like?"* |
| **"Open-source contributions?"** | Name a real repo or say "my work has been in private codebases; GitHub has personal projects". Do not inflate. |
| **"Salary expectations?"** | *"I understand you benchmark with the PostHog calculator. I'd expect to be benchmarked against your UK remote engineers given the overlap. My target is in the $80–120K range."* |

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **1.5** | The role's centre of gravity is offensive security, sandbox isolation, vulnerability management and incident response. cv.md evidences none of them; the one stated non-backend requirement ("Genuine offensive-security curiosity") is entirely unanswered. Only the "real backend engineering experience" prerequisite is met, and met strongly. |
| Stack | **3.5** | Node.js and TypeScript bar ("enough to read and review") is cleared with room; Docker/Kubernetes evidenced at CodeBits; event-driven high-volume processing (Pub/Sub, Kafka) matches the product domain. Held down for no gVisor/Firecracker/WASM, no Postgres/Redis evidence in bullets, no security tooling. |
| Seniority | **4.0** | Unlevelled "Backend Engineer" against ~6.7 years, programme lead on a 20+ app migration, 4-dev team lead, direct-to-CTO in three roles. Clears the level; mild risk of under-levelling on comp. |
| Remote / geo | **2.5** | Body has no timezone, country or authorization clause, so not a FAIL. But two sibling reqs on the same board today require "CET to ET timezones (GMT+1:00 to GMT-5:00)" for remote hires, the sibling engineering req is titled "(Europe)", chips say "Remote or Hybrid UK", and benefits are UK-pension framed. Kampala (UTC+3) is outside the stated band. Uncertain, leaning restrictive. |
| Comp | **3.0** | Undisclosed. PostHog-calculator benchmarking with a location factor; Uganda almost certainly not in the model. A UK-indexed number would clear the $80–120K target; an Africa-indexed one is unknown. Good benefits (25 days, pension, equity). |
| Stability / company | **4.0** | YC W23, $16M Series A (Dec 2025), London HQ, real OSS traction ("hundreds of millions of executions per month"), hot problem space. Small team is the only discount. |
| **Overall** | **3.1/5** | **Weak CONSIDER.** The score clears 3.0 on seniority, company and stack, not on fit. Two gates before applying: (1) Isaac confirms he has genuine security practice to point at — otherwise SKIP, or redirect to the Senior Backend Engineer (Europe) req; (2) the CET–ET question is asked and answered in the first screen. If both clear, the PDF is ready and the Pub/Sub sync is the story to lead with. |

## Keywords extracted

Backend Engineer, security, offensive security, pen testing, CTF, bug bounty, sandbox, runtime security, isolated execution environments, untrusted code, containers, microVMs, gVisor, Firecracker, WASM, threat detection, incident response, monitoring and alerting, vulnerability management, vulnerability disclosure, AI-assisted security scanning, PR security review, SOC 2, compliance, security culture, on call, Node.js, TypeScript, open source, developer tools, infrastructure, AI agents, workflows, orchestration, scale, Kubernetes, documentation, product-led growth, Trigger.dev
