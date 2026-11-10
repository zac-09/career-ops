# Evaluation: ElevenLabs — Full-Stack Engineer (Backend Leaning) - Creative Agents

**Date:** 2026-10-08
**Archetype:** Senior Backend Engineer (primary archetype) + Full-Stack, on an applied-AI/agents team
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/35813150-a851-4821-b732-a037b4e6c4fe
**PDF:** ❌ (duplicate team: apply via #237 instead)
**Verification:** live via Ashby posting API 2026-10-08 (present in `job-board/elevenlabs`, publishedAt 2026-10-07T12:03Z). Playwright not used (browser in use by another agent).
**Recommendation:** **DO NOT APPLY SEPARATELY. Duplicate team: apply via #237 instead.** This is the same Creative Agents team as #237 (Full-stack Engineer - Creative Agents). The backend lean matches Isaac's primary archetype. But this req lists "Hands-on experience developing agents, with an understanding of prompts, tools, execution logic, evaluations" as a core requirement, and that is Isaac's thinnest area on paper. In #237 the same experience is only "particularly valuable". One application only. If the recruiter routes the #237 candidate to this backend-leaning seat, accept that.

---

## Headline caveats

1. **Duplicate team.** Both reqs were posted on 2026-10-07 for the same team. Send one application. #237 scores higher.
2. **Agent development is a requirement here, not a bonus.** "Hands-on experience developing agents, with an understanding of prompts, tools, execution logic, evaluations and the challenges of reliable, secure operation." The first responsibility is "Building production agents and expanding their capabilities through prompts, tool use, orchestration, new models and MCP integrations." Isaac's evidence (profile.yml WhatsApp OpenAI + Vision assistant; the career-ops agentic pipeline on Claude Code) is off cv.md and has no authored MCP server and no model-based evals.
3. **"Model-based assessment of image and video outputs"** (shared evaluations, live quality monitoring) has no evidence.
4. **Observability and security** are named ("strong performance, observability, scalability and security"). cv.md doesn't evidence either.
5. **TypeScript only ~6 months (Dr Wealth). No relational DB in production.** Neither is named in the JD. Do not claim them.

---

## Geo Check — LIKELY PASS (some uncertainty remains)

- **ATS location (exact):** `"location": "Remote"`, `"secondaryLocations": []`. No country, no workplaceType.
- **Body wording (exact):** "Global team: We prioritize your talent, not your location." / "Co-working: If you're not located near one of our main hubs, we offer a monthly co-working stipend." There is no country, timezone or work-authorization clause.
- **Contrast:** the sibling "Full-Stack Engineer (Back-End Leaning)" c7d59014 is tagged United Kingdom + Dublin, US, Germany, Portugal, Poland, Bulgaria and others. "Full-Stack Engineer (Backend Leaning) - CreativeVoices" 77f23be6 is tagged UK + US, Poland, Bulgaria. Only the two Creative Agents reqs carry a bare "Remote" label.
- **Application form:** free-text country of residence (scan note).
- **Remaining uncertainty:** "Remote" alone is not an explicit worldwide statement, and ElevenLabs' board lists no African country on any req. EoR coverage for Uganda is unconfirmed. Remote is scored 4.0.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend (primary) + Full-Stack |
| Domain | AI product: ElevenCreative creative agent (audio/image/video) |
| Function | Build + operate: agent capabilities, async generation backends, evals, end-to-end features |
| Seniority | Unlevelled ("We don't have job titles"). Effective bar is senior or higher |
| Remote | "Remote", no country list; "We prioritize your talent, not your location." |
| Team size | "a small team"; creative agent "already live" |
| Comp | Not disclosed |
| TL;DR | A backend-heavy seat building production agents and the long-running async generation infrastructure behind ElevenCreative, including evals and quality monitoring of image/video output. |

## B) CV Match

| JD requirement | CV evidence | Match |
|---|---|---|
| "Strong backend engineering skills, experience operating production systems, and sound fundamentals in APIs, cloud infrastructure, storage and asynchronous processing" | MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub for message processing"; "Migrated file storage from Amazon S3 to GCS"; "Saved the company $5,000/month by migrating all services off AWS"; Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js"; CodeBits: Kafka/Docker/Kubernetes | ✅ Strong. This is Isaac's core |
| "Hands-on experience developing agents, with an understanding of prompts, tools, execution logic, evaluations and the challenges of reliable, secure operation" | Not on cv.md. profile.yml: "Integrated OpenAI + Google Vision for prescription OCR via WhatsApp Business API"; story bank: career-ops agentic pipeline (verification gate before scoring, 200+ evaluations) | ⚠️ **Main gap.** Real but thin; no tool-calling agent in a product, no eval harness, no MCP server authored |
| "Evidence of independent, end-to-end ownership and confidence working across the stack, including frontend delivery when needed" | MTailor: "Led the end-to-end migration of 20+ applications ... reporting directly to the CTO"; React at Dr Wealth / Mind2matter ("Delivered React UIs from Figma designs") | ✅ |
| "Designing and operating reliable backend systems for asynchronous creative generation and long-running tasks, with strong performance, observability, scalability and security" | Pub/Sub async pipeline; Dr Wealth "ad-hoc jobs to query over 2 million Firestore records"; MTailor ffmpeg video feature | ✅ async + long-running jobs; ⚠️ observability/security unevidenced |
| "Developing shared evaluations and live quality monitoring, including model-based assessment of image and video outputs" | Closest: career-ops rubric scoring that cites the source wording | ❌ Gap |
| "Familiarity with HTTP, WebSockets and asynchronous workers" (bonus) | HTTP/REST (Express); gRPC (CodeBits); Pub/Sub/Kafka/NATS workers | ✅ (WebSockets not named) |
| "multimodal generation, creative editors, MCP" (bonus) | ffmpeg video overlay feature; Vision OCR; MCP only as a consumer | ⚠️ Adjacent |
| "small, fast-moving team" (bonus) | CodeBits team of 4; agency pace | ✅ |

### Gaps and mitigation

| # | Gap | Blocker? | Mitigation |
|---|---|---|---|
| 1 | Production agent development (prompts, tools, execution logic) | **Hard-ish.** Listed requirement | Build the public creative-agent repo described in #237 §B (tool use, async worker, MCP tool, eval harness). Without it this req is a long shot. |
| 2 | Evals / model-based image-video assessment | Soft-hard | Same artifact: an LLM-as-judge scorer on generated images, with a small regression set. |
| 3 | Observability / security in production | Soft | Logging/tracing in the artifact; answer honestly in interview. |
| 4 | TypeScript depth / relational DB | Not asked | Don't claim either. |

## C) Level and Strategy

1. **Level:** unlevelled; senior-plus bar. Isaac's backend depth meets it. His agent experience is below what this req asks for.
2. **Framing (if the recruiter moves him here from #237):** "Backend engineer who already designs around model unreliability." Use the zero-downtime migration for operating production systems, Pub/Sub for async processing, and the career-ops verification gate for reliable agent operation.
3. **If downleveled:** same as #237. Accept if comp clears target, and negotiate a 6-month review.

## D) Comp and Demand

Same company and team as #237: compensation not disclosed. Levels.fyi shows a company median TC of ~$96K and a UK SWE median of ~$148K ([levels.fyi](https://www.levels.fyi/companies/elevenlabs/salaries)). Report #150 recorded a ~$128K median and US mid-level base of $120–180K. That clears Isaac's $80–120K target. The risk is a Uganda-indexed band.

## E) Personalization Plan

No PDF generated for this req (duplicate team). If the recruiter moves the application here, reuse output/cv-isaac-elevenlabs-creative-agents-fullstack-2026-10-08.pdf with these changes: (1) put the Pub/Sub async pipeline and the S3→GCS storage work first; (2) move the agentic pipeline project up to directly under the summary; (3) change the summary lead to "backend engineer for async, long-running systems"; (4) add "WebSockets" only if Isaac confirms real usage (it is not on cv.md); (5) keep SQL/Postgres/NestJS off.

LinkedIn: same as #237.

## F) Interview Prep

Reuse the #237 story table (stories 1, 2, 4 and 5 are already in interview-prep/story-bank.md). Emphasis for the backend lean:

| # | JD requirement | Story | Key point | Reflection |
|---|---|---|---|---|
| 1 | Async processing / long-running tasks | Pub/Sub two-way sync | Consumers that keep two live stores consistent under traffic | Retries and redelivery are the design, not an edge case |
| 2 | Operating production systems | Zero-downtime migration of 20+ apps | Ran old and new in parallel and cut over in waves | Keep a way back until the new path is proven |
| 3 | Storage / cloud | S3→GCS + AWS exit | $5K/month saved | Cost is an architecture input |
| 4 | Reliable agent operation | Career-ops verification gate | Deterministic checks before model calls | Never let a model grade an input you haven't verified |
| 5 | Multimodal | ffmpeg video overlay; Vision OCR | Shipped media processing to customers | Media jobs need to be async and idempotent |
| 6 | Large batch jobs | Dr Wealth 2M+ records | Kept prices current from Morningstar APIs | Shape the queries before scaling the hardware |

**Red-flag questions:** "Have you built production agents with evals?" Honest answer: no formal eval harness yet; point to the artifact. "Observability stack?" Not evidenced; describe how the migration was validated.

---

## Scoring

| Dimension | Score | Note |
|---|---|---|
| CV match | 3.2 | Backend core strong; the agent requirement and evals are gaps |
| Archetype fit | 4.0 | Backend-leaning = primary archetype |
| Remote / geo | 4.0 | Bare "Remote" + "talent, not your location"; Uganda unconfirmed |
| Comp | 4.0 | Undisclosed; market clears target |
| Company / growth | 4.5 | Same as #237 |
| Competition / bar | 2.0 | Agent-experienced candidates will lead the pool |
| **Overall** | **3.4/5** | Not weak, but #237 scores higher. Duplicate team: apply via #237 instead |

## Keywords extracted

backend-leaning, full-stack, production agents, prompts, tool use, orchestration, MCP integrations, asynchronous creative generation, long-running tasks, observability, scalability, security, evaluations, live quality monitoring, model-based assessment, image and video, APIs, cloud infrastructure, storage, WebSockets, asynchronous workers, multimodal generation
