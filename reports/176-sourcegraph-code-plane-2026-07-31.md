# Evaluation: Sourcegraph — Software Engineer/Tech Lead - Code Plane [IC5]

**Date:** 2026-07-31
**Archetype:** Staff/Principal Engineer + Backend Tech Lead (hybrid) — Isaac's natural level is Senior IC, two levels below
**Score:** 2.3/5
**URL:** https://job-boards.greenhouse.io/sourcegraph91/jobs/6103568004
**PDF:** ❌ (score < 3.0 — seniority mismatch, no PDF generated)
**Verification:** live via Greenhouse API (2026-07-31) — `https://boards-api.greenhouse.io/v1/boards/sourcegraph91/jobs/6103568004` returned 200 with full JD content (title, requirements, pay bands, Apply flow).
**Recommendation:** SKIP. This is an IC5 tech-lead seat requiring 8+ years, a "recognized technical visionary" trajectory, and — as hard requirements — experience *shipping products built for AI agents* and hands-on reasoning about coding agents. Isaac has ~6.5 years, no staff-level scope, and no agent-product shipping on the CV. Geo is clean (near-perfect CEST overlap from Kampala) and Zone 4 comp ($96K) is squarely in target, which makes this frustrating — but the seniority and agent-product requirements are honest hard blockers. Watch Sourcegraph for IC3/IC4 backend openings instead.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD location | "Remote"; "🌎 While we hire almost anywhere in the world, we have a preference for someone to reside in the following locations" | ✅ Global with preference |
| Preferred locations | Europe, East Coast USA | ⚠️ preference only |
| Hard requirement | "working hours must overlap with CEST for at least 20 hours/week" | ✅ CEST = UTC+2; Kampala UTC+3 gives essentially full workday overlap |

**Verdict: CLEAN.** Best geo profile of any Sourcegraph req for Isaac — the rejection here is purely on level and requirements, not location.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Staff/Principal + Tech Lead hybrid — product-engineering leadership on an AI-agent product surface |
| Domain | Developer tools / AI agents: Batch Changes (used by Stripe, Uber, Dropbox), Agentic Batch Changes, Code Monitors, Code Insights, `src` CLI |
| Function | Build + lead: own technical roadmap, mentor teammates, "become recognized technical visionary" within 6 months |
| Seniority | **IC5** — 8+ years required, tech-lead scope |
| Remote | Fully remote, global; CEST 20h/week overlap required (trivially met from Kampala) |
| Team size | Not stated; cross-functional with Product/Design |
| Comp | Posted: Zone 1 $240K / Zone 2 $192K / Zone 3 $144K / Zone 4 $96K base + meaningful equity |
| TL;DR | A staff-level tech-lead seat on Sourcegraph's agentic code-change products — two levels above Isaac's current scope, with agent-product shipping as a hard requirement he can't evidence. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **8+ years professional software engineering experience** | cv.md L8-79: earliest role CodeBits Jan 2020 → ~6.5 years total (and early years overlap with university, cv.md L93-95: BSc 2018–2022) | ❌ hard blocker |
| **Strong technical background, guide architecture across a team** | cv.md L77: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes"; L72: "Led a team of 4 developers" — real but small-team, single-product scope, not org-level architecture guidance | ⚠️ partial, under-leveled |
| **"Experience shipping products consumed by or built for AI agents"** | Nothing on cv.md. Closest: profile.yml proof point "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision for prescription OCR" — an AI-*powered* feature, not a product *built for agents* | ❌ hard blocker |
| **"Hands-on experience using and reasoning about coding agents (Amp, Claude Code, Cursor, or similar)"** | Not on cv.md. Isaac does run an agentic career-ops pipeline on Claude Code (story bank: "Career-ops agentic pipeline") — genuine daily hands-on use, but undocumented on the CV | ⚠️ real but unevidenced |
| Partner with Product/Design from discovery to shipped feature | cv.md L61-63: delivered React UIs from Figma designs (execution, not discovery); L14 reporting directly to CTO | ⚠️ weak |
| Customer-facing discovery, feedback incorporation | cv.md L35: trained the Ops team; L45-49: Dr Wealth customer-facing pricing PWA — thin for "lead customer discovery" | ⚠️ weak |
| Async-first, distributed team experience | cv.md L10, L41, L55: 5+ years fully remote across US/Singapore timezones from Uganda | ✅ |
| Nice-to-have: Go, TypeScript/React, GraphQL, PostgreSQL, Docker/K8s | TypeScript/Node ✅ (L23 et al.), React ✅ (L85), Docker/K8s ✅ (L77), Go ⚠️ intermediate (L87), GraphQL ❌, PostgreSQL ⚠️ (SQL listed L85, NoSQL-dominant) | ⚠️ mixed |
| Nice-to-have: Team/Tech Lead experience | cv.md L72: led team of 4 at CodeBits | ✅ (nice-to-have) |

**Gaps and mitigation:**

1. **Years + level (hard blocker).** 6.5 yrs vs 8+ required, and IC5 means setting roadmap direction for a flagship product surface. No framing closes a two-level gap honestly. *Mitigation:* none for this req — target IC3/IC4 reqs at the same company.
2. **Agent-product shipping (hard blocker).** The team's core 2026 bet is Agentic Batch Changes; they need someone who has *built for* agents. The WhatsApp/OpenAI chatbot and personal Claude Code pipeline are consumer-of-AI evidence, not producer-for-agents evidence. *Mitigation (long game):* ship an OSS tool with an agent-consumable interface (MCP server or agent-friendly CLI) — this would also serve future applications in the space.
3. **GraphQL/PostgreSQL.** Nice-to-haves; ignorable.

## C) Level and Strategy

1. **JD level vs candidate level:** IC5 tech lead vs Isaac's natural Senior (IC3, arguably IC4 on his best axis — migrations/backend). Two-level stretch. Sourcegraph publishes a deliberate leveling philosophy; they will not squint at 6.5 years for an IC5 req.
2. **"Sell senior without lying":** not viable here — the honest ceiling of Isaac's evidence (led 4 devs, architected one Kafka/K8s system, owned a 20-app migration) reads as strong Senior, not Staff. Attempting IC5 framing risks burning credibility with a company he may want to apply to later at the right level.
3. **"If downleveled" plan:** the realistic version of this play — reply to the posting asking whether the Code Plane team is also hiring at IC3/IC4, or watch `boards-api.greenhouse.io/v1/boards/sourcegraph91/jobs` for mid-level backend reqs. Zone 4 IC4 comp would likely still clear his $80K target given IC5 Zone 4 is $96K.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted pay bands (IC5 base) | Zone 1 $240K / Zone 2 $192K / Zone 3 $144K / Zone 4 $96K + meaningful equity | JD (Greenhouse API, 2026-07-31) |
| Zone system | Zone 4 = 40% of Zone 1 ($96K = 0.4 × $240K ✓); Uganda maps to Zone 4 | [Sourcegraph handbook](https://github.com/sourcegraph/handbook/blob/main/content/benefits-pay-perks/pay-expenses/compensation/index.md) |
| vs Isaac's target | $96K base sits comfortably in the $80K–120K target range | config/profile.yml |
| Company comp reputation | SWE total comp $151K–278K+ (US zones); transparent geo-adjusted bands | [Levels.fyi](https://www.levels.fyi/companies/sourcegraph/salaries/software-engineer), [Glassdoor](https://www.glassdoor.com/Salary/Sourcegraph-Salaries-E1356770.htm) |
| Demand | Agentic code-change tooling is one of the hottest 2026 niches (Sourcegraph Amp, Batch Changes used by Stripe/Uber/Dropbox); IC5 seats here attract staff engineers from FAANG-tier dev-tools teams | JD + market context |

**Comp verdict:** the best geo-adjusted number Isaac has seen from a zone-based employer — which is exactly why the level bar will be enforced strictly.

## E) Personalization Plan

Not actionable for this req — no CV rewrite adds 1.5 years of experience or a shipped agent product. Redirect the effort:

1. Add a "used daily: Claude Code / coding agents" line to the CV's Skills section — it's true, costs nothing, and is now a screening criterion across the dev-tools industry (would have upgraded one ❌/⚠️ row here).
2. Ship a small agent-facing OSS project (MCP server or agent-friendly CLI around his migration tooling) to build real "built for agents" evidence.
3. Set a watch on Sourcegraph's board for IC3/IC4 backend/full-stack reqs — geo and comp are favorable, and the brand is worth a targeted application at the right level.

## F) Interview Prep

Not applicable — recommend SKIP at this level. (If an IC3/IC4 Code Plane req opens, the story-bank entries "gRPC service bus" and "Career-ops agentic pipeline" are the two to lead with: API-for-machines design and daily agentic-workflow fluency.)

---

## Keywords extracted

AI agents, agentic, Batch Changes, coding agents, Claude Code, Amp, Cursor, tech lead, IC5, technical roadmap, developer tools, code intelligence, large-scale refactoring, CLI design, Go, TypeScript, React, SvelteKit, GraphQL, PostgreSQL, Docker, Kubernetes, async-first, distributed team, customer discovery
