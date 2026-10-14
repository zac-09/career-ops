# Evaluation: ElevenLabs — Full-Stack Engineer - ElevenAPI

**Date:** 2026-10-14
**Archetype:** Full-Stack Engineer, frontend-leaning (Isaac's secondary archetype), with a Solutions/API Engineer overlay (developer experience, API onboarding)
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/108c99e6-ba2b-44a0-b830-7d535e14a152
**PDF:** output/cv-isaac-elevenlabs-elevenapi-fullstack-2026-10-14.pdf
**Verification:** live via Ashby posting API 2026-10-14 (present in `job-board/elevenlabs`, publishedAt 2026-10-13T11:50Z, team "Core Experience"). Playwright not used.
**Recommendation:** **OPTIONAL SECOND APPLICATION. #237 stays the primary ElevenLabs bet.** This is the only one of the three current ElevenLabs reqs (#237, #240, #241) with explicit worldwide wording ("can be executed globally"), and it does not require agent experience, which is Isaac's thinnest area. Against that, it asks for "particular strength in frontend development" and for evidence of experimentation-driven, measurable product work. cv.md backs neither strongly. Apply here as well only if Isaac can send a tailored application and is comfortable with two ElevenLabs applications in flight. Do not also apply to #241.

---

## Headline caveats

1. **This is a frontend-leaning seat.** The JD asks for "Strong full-stack engineering skills, with particular strength in frontend development and confidence building backend services and APIs." Isaac is backend-primary. His React evidence is real (Dr Wealth, Mind2matter, MTailor stack) but secondary.
2. **Experimentation and product data are core to the job.** The role covers "Designing and shipping experiments to improve activation, API key creation and self-serve subscriptions". The requirement asks for "Experience using user feedback, product data and experimentation to prioritise work and improve measurable outcomes." cv.md has measured outcomes (Express Shipping +$40/order, 3D feature "increasing buyer conversion") but no A/B testing, analytics tooling or funnel work.
3. **Developer-facing product experience is a plus, and Isaac's is adjacent.** The JD says "Experience building developer-facing products, API dashboards or onboarding flows is particularly valuable." Isaac's closest evidence is the Firebase SDK docs for engineers (internal developers) and the gRPC contract that external USSD providers integrated against (story bank). He has not built an API dashboard or an onboarding flow.
4. **Same Ashby team label as #237.** Both this req and #237 (Creative Agents) are tagged team "Core Experience". The same recruiter or hiring pool may see both applications. See the multi-application section.
5. **TypeScript is ~6 months (Dr Wealth).** The ElevenLabs dashboard is almost certainly TS/React. Do not claim more TypeScript than that. No relational DB in production; do not claim PostgreSQL.

---

## Geo Check — PASS (strongest of the three current ElevenLabs reqs)

- **Body wording (exact):** "This role is remote and can be executed globally. If you prefer, you can work from our offices in London, New York, San Francisco, and Warsaw."
- **ATS location (exact):** `"location": "United States"`, `"workplaceType": "Remote"`, `"isRemote": true`, secondaryLocations: Dublin, Bulgaria, Sofia, Germany, Portugal, Poland (Warsaw), Madrid, Amsterdam. These country tags conflict with the body text. Report #150 (Full-Stack Engineer (Global), same "executed globally" wording) treated the body as authoritative, and the same applies here. The tags probably list the countries where ElevenLabs has entities or hubs.
- **Also in the JD:** "Global team: We prioritize your talent, not your location." and "You will join a small, remote team".
- **Remaining uncertainty:** no African country appears anywhere on the board (143 open reqs). Uganda payroll/EoR coverage is unconfirmed. Ask on the first call. Remote is scored 4.5.
- **Timezone:** Kampala UTC+3 covers the full European day (London/Warsaw/Dublin) and the US-East morning.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Full-Stack (frontend-leaning) + Solutions/API Engineer (developer experience) |
| Domain | Developer platform: ElevenAPI dashboard, API keys, onboarding, usage views, self-serve subscriptions |
| Function | Build + experiment: "Owning features from discovery and design through frontend, backend, deployment and iteration" |
| Seniority | Unlevelled ("We don't have job titles"); "scope to grow into technical and team leadership over time" |
| Remote | Full remote, explicitly global ("can be executed globally") |
| Team | Developer Growth; "a small, remote team" |
| Comp | Not disclosed (Ashby compensation fields empty) |
| TL;DR | Own the ElevenAPI dashboard and onboarding flows end to end, from a developer's first API key to a production integration, and run experiments that move activation and self-serve conversion. |

## B) CV Match

| JD requirement | CV evidence (cv.md unless noted) | Match |
|---|---|---|
| "Strong full-stack engineering skills, with particular strength in frontend development" | Dr Wealth: "Added responsive UI pages to the PWA using HTML, Tailwind, and React"; Mind2matter: "Delivered React UIs from Figma designs under tight timelines"; MTailor stack lists React and Webflow; "Migrated a WebFlow website from a Parse backend to Firebase" | ⚠️ Real but secondary. Frontend is not Isaac's strongest side |
| "...and confidence building backend services and APIs" | Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js"; MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"; CodeBits: "Architected a microservices backend" | ✅ Strong. This is Isaac's core |
| "Strong product judgement and attention to UX, with evidence of making complex workflows intuitive for developers" | Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)"; "Trained the Ops team on the new Firebase Dashboard"; story bank: versioned gRPC contract that multiple USSD providers integrated against with no per-provider code | ⚠️ Adjacent. Developer enablement through docs and contracts, not through UI |
| "Experience using user feedback, product data and experimentation to prioritise work and improve measurable outcomes" | MTailor: "Implemented Express Shipping, generating an additional $40 revenue per order"; "Built a 3D visualisation feature ... increasing buyer conversion"; story bank: CodeBits requirements gathered directly with the NGOs | ⚠️ Measured outcomes exist. No experimentation framework, A/B tests or funnel analytics on cv.md |
| "Independent, end-to-end ownership, clear communication" | MTailor: "Led the end-to-end migration of 20+ applications ... ensuring zero downtime, reporting directly to the CTO"; contractor-to-full-time; docs and Ops training | ✅ Strongest signal |
| "genuine enthusiasm for developer tools and developer experience" | Story bank: career-ops agentic pipeline built on Claude Code (a developer tool used daily); SDK docs | ✅ Credible, best said in his own words |
| Responsibility: "understand how their applications and agents use ElevenLabs" (usage dashboards) | Dr Wealth: "Built ad-hoc jobs to query over 2 million Firestore records"; Pub/Sub event processing | ⚠️ Data plumbing yes; no usage/billing dashboard built |
| Responsibility: "API key creation and self-serve subscriptions" | MTailor Express Shipping (pricing/checkout-adjacent feature) | ⚠️ Adjacent |
| Plus: "developer-facing products, API dashboards or onboarding flows" | gRPC provider contract (external integrators); Firebase SDK docs | ⚠️ Adjacent, no dashboard |
| Plus: "technical or team leadership" | CodeBits: "Led a team of 4 developers" | ✅ |
| "Prior generative audio experience is not required" | n/a | ✅ Removes a gap the other ElevenLabs reqs have |

### Gaps and mitigation

| # | Gap | Blocker? | Mitigation |
|---|---|---|---|
| 1 | Frontend as the strong side | Soft-hard (named as "particular strength") | Lead the CV with the frontend evidence that exists (React from Figma, Tailwind PWA pages, Webflow). Best fix: a small public developer-onboarding demo on github.com/zac-09. For example, a React/TS "first API call" flow against the ElevenLabs TTS API that shows key setup, a first request and a usage view. That one artifact covers gaps 1, 3 and 4. |
| 2 | Experimentation / product analytics | Soft-hard (named requirement) | Do not claim A/B tooling. Frame Express Shipping and the 3D feature as ship-measure-iterate work (story bank "Growth-archetype framing"). In the interview, describe how he would instrument activation: key created, first successful call, first paid plan. |
| 3 | API dashboard / onboarding product | Soft (a plus) | Same demo artifact. Tell the gRPC provider-contract story as developer experience for external integrators. |
| 4 | TypeScript depth (~6 months, Dr Wealth) | Soft. No language named, but the dashboard is likely TS | State it plainly. Build the demo in TypeScript. |
| 5 | Relational DB | Not asked | Do not raise. If asked: production datastores have been MongoDB and Firestore. |

## C) Level and Strategy

1. **Level:** unlevelled, with a senior-plus bar. The JD mentions room to "grow into technical and team leadership". Isaac's ~6.7 years and CodeBits lead role fit that. The risk is his frontend depth, not seniority.
2. **Sell senior without lying:** "I make other engineers' integrations easy. I've done it with docs, with a versioned contract, and with a migration nobody noticed." Lead with the 20+ app zero-downtime migration (ownership), then the Firebase SDK docs and Ops training (developer enablement), then Express Shipping and the 3D feature (measured product outcomes). Suggested line: "I'm a backend-strong full-stack engineer who has shipped React UIs from design to production. The dashboard is where the API meets the developer, and I've worked on the API side of that line for six years."
3. **If downleveled:** accept if comp clears the $80–120K target. Ask for a 6-month impact review tied to activation metrics he owns.

## D) Comp and Demand

| Source | Data |
|---|---|
| Ashby API (this req) | Compensation not disclosed |
| Levels.fyi ElevenLabs (search 2026-10-14) | Company median TC ~$95.9K; UK SWE median ~$148K TC (base ~$134K); US SWE median ~$345K |
| Report #150 (2026-07) | Mid-level US base $120–180K (jobsbyculture) |
| Demand | 143 open reqs on ElevenLabs' Ashby board on 2026-10-14; ElevenAPI is also hiring Product Marketing (posted 2026-10-12), which suggests a push on developer growth |

Isaac's $80–120K target is likely reachable. The risk is a country-indexed band for Uganda. Use the "output-based, not location-based" pushback from _shared.md. Sources: [levels.fyi ElevenLabs](https://www.levels.fyi/companies/elevenlabs/salaries), [levels.fyi SWE](https://www.levels.fyi/companies/elevenlabs/salaries/software-engineer).

## E) Personalization Plan

| # | Section | Current | Change | Why |
|---|---|---|---|---|
| 1 | Summary | Backend/migration headline | Full-stack engineer who makes integrations easy for other developers: React UIs + Node.js APIs, SDK docs, versioned contracts, measured product outcomes | Mirrors "make building with ElevenLabs easier" |
| 2 | Competencies | Generic backend | Frontend (React, Tailwind), developer experience, API design, onboarding/documentation, measured product outcomes, end-to-end ownership | JD keywords |
| 3 | Dr Wealth | Optimisation bullet first | React/Tailwind UI work first, TypeScript APIs second | Frontend strength is the named requirement |
| 4 | Projects | Agent-focused (#237 PDF) | gRPC provider contract (developer integrations) first; career-ops pipeline (a dev tool) second; WhatsApp assistant third | Developer-facing evidence first |
| 5 | Skills | Includes SQL | Drop SQL; no Postgres/NestJS; TypeScript listed without years | Honesty rules |

LinkedIn: (1) headline "Full-stack engineer · developer-facing APIs, React, Node.js, GCP"; (2) add the Firebase SDK docs and Ops training to the MTailor contractor entry; (3) add the gRPC provider contract under CodeBits; (4) pin the onboarding demo once built; (5) location "Kampala, Uganda · open to remote".

## F) Interview Prep

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | End-to-end ownership | Zero-downtime Parse→Firebase migration | 20+ apps on deprecated Parse/MongoDB | Move them with no downtime | Two-way Mongo↔Firestore sync on Pub/Sub; cut over service by service; reported to the CTO | Zero downtime; $5K/month saved after the AWS exit | Keep a way back until the new path is proven |
| 2 | Making workflows intuitive for developers | Firebase SDK docs + Ops training | Engineers and Ops faced a new stack | Make them self-sufficient | Wrote Node.js/Python SDK docs; trained Ops on dashboard and backups | Engineers onboarded from the docs; Ops ran backups without him | A new platform isn't done until someone else can use it without you |
| 3 | Developer-facing products | gRPC contract for USSD providers | Several independent providers had to integrate with one backend | One stable interface, no bespoke code | Versioned protobuf schemas, documented contract, Kafka for async fanout | Multiple providers integrated with no per-provider code | Every field becomes a contract, so design it first |
| 4 | Experimentation / measurable outcomes | Express Shipping + 3D visualisation | E-commerce needed conversion and order value | Ship features with a money metric | Built both end to end | +$40 revenue/order; increased buyer conversion | Pick the metric before you build |
| 5 | Frontend delivery | Mind2matter Figma→React | Agency, demanding clients | Ship UI and backend fast | React from Figma + Node backends | Delivered on deadlines | Owning both halves removes hand-off friction |
| 6 | Enthusiasm for developer tools | Career-ops agentic pipeline | Manual job search was slow and noisy | Build a tool he uses daily | Claude Code + Playwright + Node; verification before scoring | 200+ evaluations | Developer tools earn trust by being right, not by being clever |
| 7 | Leadership (plus) | CodeBits team of 4 | NGO legal tech, thin specs | Deliver two systems | Led team; owned client conversations | Systems shipped to FIDA and LASPNET | Talking to users is the cheapest way to cut scope |

**Case study to present:** the gRPC provider contract followed by the SDK docs, framed as "developer experience before it had a name". Close with the migration for ownership.
**Red-flag questions:** "Are you frontend-strong?" Answer honestly: backend is his strongest side; he has shipped React UIs from Figma and Tailwind PWA pages, and he can show the demo. "Have you run A/B tests?" No formal experimentation platform; he has shipped measured revenue and conversion features, and he describes the activation funnel he would instrument. "TypeScript depth?" About 6 months in production at Dr Wealth; JavaScript/Node daily.
**Story bank:** stories 1, 3, 4, 5, 6 and 7 are already in interview-prep/story-bank.md. Story 2 overlaps the existing "[Enablement / documentation]" entry. Not appended in this run because the run's file writes are limited to reports, PDFs and TSVs.

---

## ElevenLabs multi-application strategy (#237 vs #240 vs #241)

| | #237 Creative Agents | #240 ElevenAPI (this) | #241 Ads Engine |
|---|---|---|---|
| Score | 3.6 | 3.4 | 3.1 |
| Location wording | ATS "Remote", no country list; "We prioritize your talent, not your location" | "This role is remote and can be executed globally" | "anywhere between the US East Coast and India, with the ability to operate in European timezones required" (ATS tags UK, US, Poland, Bulgaria) |
| Biggest gap | Agents/evals/MCP (core work, a bonus in requirements) | Frontend as the strong side; experimentation | Founder-style shipping; LLMs with tools, retrieval and evals (required); adtech |
| Ashby team | Core Experience | Core Experience | Creative Ads |
| Status | Application drafted (Section G of #237) | New | New |

- **Best single bet: #237.** It has the highest score, a drafted application and a tailored PDF already. Its backend and async work fit Isaac best.
- **Applying to #240 as well is defensible.** It is a different product area (developer dashboard vs creative agent) with a different skill emphasis. Two targeted applications at a 1,000+ person company with 143 open reqs is normal, and ElevenLabs' own JDs encourage impact over titles. Both reqs carry the "Core Experience" team label, so the same recruiter may see both. Make each application coherent: #237 leads with async/agent work, #240 with developer experience and frontend. If a recruiter asks, say plainly that he applied to two teams where his profile fits differently.
- **Do not send a third application (#241).** Three full-stack applications in one week reads as spray-and-pray at a company that screens for focus.
- **Sequencing:** submit #237 first (it is ready). Send #240 within the same week while both reqs are fresh, ideally after the small developer-onboarding demo is on GitHub.

---

## Scoring

| Dimension | Score | Note |
|---|---|---|
| CV match | 3.1 | Backend, ownership and leadership strong; frontend strength, experimentation and dashboard work thin |
| Archetype fit | 3.0 | Secondary archetype (full-stack), frontend-leaning, with a developer-experience overlay |
| Remote / geo | 4.5 | "can be executed globally"; Uganda EoR unconfirmed |
| Comp | 4.0 | Undisclosed; market data clears the target |
| Company / growth | 4.5 | $22B valuation; path to technical/team leadership named |
| Competition / bar | 2.5 | Elite pool; frontend-strong DX engineers will lead |
| **Overall** | **3.4/5** | Solid but below #237 |

## Keywords extracted

full-stack, frontend development, React, backend services, APIs, developer experience, developer tools, API dashboard, onboarding, API keys, activation, self-serve subscriptions, experiments, experimentation, product data, user feedback, product judgement, UX, SDKs, documentation, end-to-end ownership, integrations, technical leadership
