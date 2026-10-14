# Evaluation: ElevenLabs — Full-Stack Engineer - Ads Engine

**Date:** 2026-10-14
**Archetype:** Full-Stack product engineer / founding engineer (Isaac's secondary archetype), with an applied-LLM overlay (agent tools, retrieval, evals)
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/3abf96ca-2937-4290-9d23-5208aece08b2
**PDF:** output/cv-isaac-elevenlabs-ads-engine-fullstack-2026-10-14.pdf
**Verification:** live via Ashby posting API 2026-10-14 (present in `job-board/elevenlabs`, publishedAt 2026-10-13T00:21Z, team "Creative Ads"). Playwright not used.
**Recommendation:** **DO NOT APPLY NOW. Hold; #237 remains the ElevenLabs application.** This is above the 3.0 floor, so a PDF was generated in case the situation changes. But the req is built for founders: "Has built and shipped a product end-to-end without anyone handing them a spec, ideally as a founder or one of the first engineers". It also requires building "with LLMs and agents pragmatically: tools, retrieval and evals". That is the same agent gap as #236/#237, and here it is a requirement, not a bonus. Sending a third ElevenLabs application would dilute the stronger #237 (and optional #240).

---

## Headline caveats

1. **Founder bar.** The JD says: "We're looking for founders and founding engineers." It also says: "You'll be a founding engineer for a product area of your own. There's no PM and no handed-down spec." Isaac's closest evidence is CodeBits. There he led 4 developers, sat with the NGO clients and decided what to build (story bank "[Founder-shaped ownership]"). But cv.md titles that role "Software Engineer", and the story bank flags "confirm founder/co-founder wording with Isaac before using 'founded' verbatim". Do not call him a founder.
2. **LLM/agent work is a requirement.** "Builds with LLMs and agents pragmatically: tools, retrieval and evals, not model research." Evidence: the WhatsApp OpenAI + Google Vision assistant (profile.yml) and the career-ops agentic pipeline (story bank). There is no retrieval/RAG system, no eval harness and no agent tool built for a product.
3. **"Talks to users without being asked"** is a requirement. Evidence is CodeBits client work only. Nothing at MTailor shows direct user research.
4. **Adtech/marketing bonus: none.** The bonus list is ad platforms, adtech, analytics and attribution, web builders and CMSs, "taste in creative". The only partial hit is Webflow ("Migrated a WebFlow website from a Parse backend to Firebase"), which is a web builder/CMS.
5. **TypeScript ~6 months (Dr Wealth). No relational DB in production.** Neither is named. Do not claim them.

---

## Geo Check — LIKELY PASS on wording, some uncertainty from ATS tags

- **Body wording (exact):** "This role is remote-first, so it can be executed from anywhere between the US East Coast and India, with the ability to operate in European timezones required. If you prefer, you can work from our offices in Bangalore, Dublin, London, New York and Warsaw."
- **Kampala (UTC+3)** is inside the US East Coast (UTC-5/-4) to India (UTC+5:30) band, and it overlaps the whole European working day. The timezone condition is met.
- **ATS location (exact):** `"location": "United Kingdom"`, `"workplaceType": "Remote"`, `"isRemote": true`, secondaryLocations: United States, Poland, Bulgaria. A short country list next to a timezone-band body is ambiguous. It may be the hiring entities, not the eligible countries. The band wording is the more specific statement, and its India mention shows the band is not just UK/US/EU.
- **Remaining uncertainty:** no African country appears on any ElevenLabs req, and Uganda EoR coverage is unconfirmed. Remote is scored 3.5, lower than #240 ("can be executed globally") and #237.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Full-Stack product / founding engineer + applied LLM |
| Domain | Adtech on generative media: an ads engine that "plans, generates, localizes, launches and learns from ads across the major ad platforms, using ElevenLabs' full audio and video stack" |
| Function | Build + discover: "talk to users, decide what to build, and ship it across the stack, from data pipelines and agent tools to the UI" |
| Seniority | Unlevelled; founder-level ownership expected |
| Remote | Remote-first within a US East Coast to India band; European-timezone overlap required |
| Team | Creative Ads; new product area, "no PM" |
| Comp | Not disclosed (Ashby compensation fields empty) |
| TL;DR | Own a product area of a learning ads engine end to end, from competitive-intelligence data pipelines and agent tools to UI, shipping rough v0s fast and deciding the roadmap yourself. |

## B) CV Match

| JD requirement | CV evidence (cv.md unless noted) | Match |
|---|---|---|
| "Has built and shipped a product end-to-end without anyone handing them a spec, ideally as a founder or one of the first engineers" | CodeBits: "Led a team of 4 developers building legal tech systems for NGOs"; "Built a case management system for FIDA Uganda and a paralegal database for LASPNET Uganda"; story bank: owned client relationships and decided what to build with no PM | ⚠️ Partial. Real product ownership, but not as a founder, and the clients gave some scope |
| "Strong full-stack product engineer ... who can build a pipeline, an agent tool and the UI" | Pipeline: MTailor "real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"; Dr Wealth "ad-hoc jobs to query over 2 million Firestore records ... from Morningstar APIs". UI: React at Dr Wealth / Mind2matter. Agent tool: career-ops pipeline (story bank) | ✅ pipeline + UI; ⚠️ agent tool only in a personal project |
| "Builds with LLMs and agents pragmatically: tools, retrieval and evals" | profile.yml: "Integrated OpenAI + Google Vision for prescription OCR via WhatsApp Business API"; story bank: verification-before-scoring gate in an agentic pipeline, with the scorer citing source wording | ⚠️ **Main gap.** No retrieval system, no eval harness, no MCP tool |
| "Talks to users without being asked, and can say what they'd build first and why" | Story bank: sat with FIDA/LASPNET to understand workflows; built a USSD front end because users had feature phones | ⚠️ One example, off cv.md |
| "rather ship a rough v0 on Friday than a perfect design doc" | Mind2matter: "Delivered React UIs from Figma designs under tight timelines"; MTailor Express Shipping shipped end to end | ✅ |
| "product judgment and ownership" | MTailor: "Led the end-to-end migration of 20+ applications ... reporting directly to the CTO"; Express Shipping "+$40 revenue per order"; 3D feature "increasing buyer conversion" | ✅ |
| Domain: generating and localizing audio/video ads | MTailor: "Built a 3D visualisation feature for customers using video overlay and the ffmpeg library" | ⚠️ Adjacent: video processing, not generation |
| Bonus: ad platforms, adtech, analytics/attribution | None | ❌ |
| Bonus: web builders and CMSs | MTailor: "Migrated a WebFlow website from a Parse backend to Firebase" | ⚠️ Minor |

### Gaps and mitigation

| # | Gap | Blocker? | Mitigation |
|---|---|---|---|
| 1 | Founder / first-engineer shipping without a spec | Hard-ish (first requirement) | Frame CodeBits honestly as "led the team and owned the client relationship with no PM". Do not use "founder" unless Isaac confirms it. |
| 2 | LLM tools, retrieval, evals | Hard-ish (listed requirement) | A public artifact is the only real fix. For this req it would be a tiny ad-brief agent that retrieves competitor ad copy, drafts variants with tool calls, and scores them with a small eval set. Only worth building if Isaac wants this req over #237/#240. |
| 3 | Talking to users | Soft-hard | CodeBits NGO story; WhatsApp assistant designed around the channel the users already had. |
| 4 | Adtech / attribution | Soft (bonus) | Don't claim it. Express Shipping and the 3D feature show revenue and conversion thinking. |
| 5 | TypeScript depth / relational DB | Not asked | Don't raise. Answer honestly if asked. |

## C) Level and Strategy

1. **Level:** unlevelled, with a founding-engineer bar. Isaac has the engineering depth. The weak points are founder-grade product discovery and applied-LLM depth.
2. **Sell senior without lying (if he ever applies):** "I've run a product with no PM: I talked to the NGOs, decided what to build, and shipped a backend, a mobile app and a USSD channel with a team of four. I've also shipped revenue features at MTailor and built an agentic pipeline I use daily." Lead with CodeBits ownership, then Express Shipping/3D (outcomes), then the agentic pipeline (LLM pragmatism).
3. **If downleveled:** same as #237. Accept if comp clears target, with a 6-month review.

## D) Comp and Demand

| Source | Data |
|---|---|
| Ashby API (this req) | Compensation not disclosed |
| Levels.fyi ElevenLabs (search 2026-10-14) | Company median TC ~$95.9K; UK SWE median ~$148K TC (base ~$134K); US SWE median ~$345K |
| Demand | 143 open reqs on 2026-10-14; Creative Ads is a newly staffed area (req published 2026-10-13) |

Market data clears Isaac's $80–120K target. The risk is location-indexed pay. Sources: [levels.fyi ElevenLabs](https://www.levels.fyi/companies/elevenlabs/salaries), [levels.fyi SWE](https://www.levels.fyi/companies/elevenlabs/salaries/software-engineer).

## E) Personalization Plan

| # | Section | Current | Change | Why |
|---|---|---|---|---|
| 1 | Summary | Backend/migration headline | Product engineer who owns problems with no spec: pipelines, LLM tools and UI; revenue and conversion features shipped | Mirrors "pipeline, an agent tool and the UI" |
| 2 | Competencies | Generic backend | Product ownership without a PM, data pipelines, LLM tools, React UI, video/media, measurable outcomes | JD keywords |
| 3 | CodeBits | Last role, team lead | Make "owned client relationships, decided what to build" explicit (from the story bank, phrased within cv.md facts) | First requirement |
| 4 | MTailor | Migration first | Express Shipping and the ffmpeg video feature move up | Product judgment + video |
| 5 | Skills | Includes SQL | Drop SQL; no Postgres/NestJS; TypeScript without years | Honesty rules |

LinkedIn: same as #237, plus Webflow under MTailor.

## F) Interview Prep

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Shipping with no spec | Running CodeBits end to end | NGOs with thin specs, feature-phone users | Deliver complete products | Talked to users, picked scope, built Kafka backend, RN app and USSD over gRPC | Systems shipped for FIDA and LASPNET | Know where to cut corners (UI polish) and where not to (data contracts) |
| 2 | Product judgment | Express Shipping + 3D visualisation | E-commerce needed revenue | Ship features tied to money | Built both end to end | +$40/order; increased conversion | Pick the metric before you build |
| 3 | LLMs pragmatically | WhatsApp prescription assistant | Patients use WhatsApp | Read photos, reply | OpenAI + Google Vision behind the WhatsApp Business API | LLM assistant in production | Design for the channel first, the model second |
| 4 | Evals / reliability | Career-ops verification gate | Agent graded closed postings | Make output defensible | Deterministic checks before scoring; scorer cites source wording | 200+ evaluations, false matches removed | Cheap checks in front of expensive model calls |
| 5 | Data pipelines | Pub/Sub sync + 2M-record jobs | Live datastores / market data | Keep data current and consistent | Pub/Sub consumers; batched Morningstar refresh jobs | Parallel prod traffic; prices current | Shape the queries before scaling the hardware |
| 6 | Video stack | ffmpeg 3D overlay | Buyers couldn't picture the garment | Ship a visual preview | ffmpeg video overlay | Increased conversion | Media is a latency and cost problem first |

**Red-flag questions:** "Are you a founder?" No. He led a team with no PM at CodeBits; say exactly that. "Retrieval and evals?" No production RAG or eval harness; describe the verification gate and what he would build. "Adtech?" None.
**Story bank:** all six stories are already in interview-prep/story-bank.md. Nothing appended.

---

## ElevenLabs multi-application strategy (#237 vs #240 vs #241)

| | #237 Creative Agents | #240 ElevenAPI | #241 Ads Engine (this) |
|---|---|---|---|
| Score | 3.6 | 3.4 | 3.1 |
| Location wording | "Remote", no country list; "We prioritize your talent, not your location" | "This role is remote and can be executed globally" | "anywhere between the US East Coast and India, with the ability to operate in European timezones required" |
| Biggest gap | Agents/evals/MCP | Frontend strength; experimentation | Founder bar; LLM tools/retrieval/evals required; adtech |

- **Best single bet: #237.** It scores highest, and its application and PDF are already drafted.
- **Should Isaac apply here as well? No.** This req has the weakest fit of the three: both of its core requirements (founder-style shipping, LLM tools/retrieval/evals) are gaps. Its geo wording is also less certain than #240's. A third ElevenLabs application in the same week would weaken the focus signal of #237 and #240.
- **When to reconsider:** if #237 is rejected and Isaac has shipped a public LLM-tool artifact with retrieval and evals, re-evaluate this req (or its successor) as a standalone application.

---

## Scoring

| Dimension | Score | Note |
|---|---|---|
| CV match | 2.8 | Pipeline and UI fine; founder bar and LLM tools/retrieval/evals are gaps |
| Archetype fit | 3.0 | Full-stack product / founding engineer (secondary) |
| Remote / geo | 3.5 | UTC+3 inside the stated band; ATS tags UK/US/PL/BG; Uganda unconfirmed |
| Comp | 4.0 | Undisclosed; market clears target |
| Company / growth | 4.5 | Own product area at a $22B AI company |
| Competition / bar | 2.0 | Explicitly recruiting founders |
| **Overall** | **3.1/5** | Above the 3.0 floor; hold in favour of #237 (and optionally #240) |

## Keywords extracted

founding engineer, full-stack product engineer, ads engine, end-to-end, no spec, product judgment, ownership, data pipelines, agent tools, UI, LLMs, agents, tools, retrieval, evals, talk to users, v0, ad platforms, adtech, analytics, attribution, localization, audio and video generation, competitive intelligence, CMS, web builders
