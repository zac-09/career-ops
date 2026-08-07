# Evaluation: Supabase — AI Platform Engineer

**Date:** 2026-08-07
**Archetype:** Platform/Infrastructure Engineer (hybrid with Senior Backend) — internal AI-agents platform, sole-engineer seat
**Score:** 2.1/5
**URL:** https://jobs.ashbyhq.com/supabase/3b5d54ca-741b-45ac-bd3f-31605a0d3541
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** API (Ashby JSON, 2026-08-07) — `api.ashbyhq.com/posting-api/job-board/supabase` returned the posting with `isListed: true`, published 2026-07-31.
**Recommendation:** SKIP (weak match). Three of the five MUST-HAVEs are hard gaps: shipped production LLM agent systems with operational history, formal evaluation design (golden sets, judge rubrics, CI gates), and authored MCP servers. This is a sole-engineer seat — there is no team to grow into the gaps behind. Isaac's GCP depth and career-ops agentic tooling are real but sit below the stated bar ("prompt engineering on its own does not clear this bar" — and a personal agentic pipeline without external users doesn't either). Only apply after shipping a public agent/eval artifact (MCP server + eval harness) that other people use.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| Ashby location | Plain "Remote", no secondary locations | ✅ |
| JD text | "building for async engineers across 40+ countries" | ✅ Global |
| Precedent | Supabase evaluations #165–168 (2026-07-24) all confirmed globally-remote hiring, no geo gates | ✅ |
| Ashby application | No location/work-auth screening gates in the posting API payload | ✅ |

**Verdict: geo clean.** Supabase is a genuinely global remote employer. Geography is not the problem here — the skills bar is.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infra — internal AI operations platform (dept: Growth / Business Operations, not core product eng) |
| Domain | LLM agent execution layer: event-triggered queue, model-agnostic runtime, durable state, human review gates, atomic rollback, full run logging, evaluation layer, governance-in-code |
| Function | Build + operate, solo ("You will be the only engineer on this platform") |
| Seniority | Senior/Staff-equivalent — closes architecture decisions alone, owns infra end to end |
| Remote | Fully remote, global (40+ countries) |
| Team size | 1 (new central AI-ops team; sole platform engineer) |
| Comp | Not posted (Ashby compensation fields empty) |
| TL;DR | A sole-owner seat building Supabase's internal agent runtime + evaluation + governance platform in Python on GCP — a specialist LLM-platform role whose must-haves (agent systems in production, eval engineering, MCP authorship) are absent from Isaac's CV. |

## B) CV Match

| JD Requirement (MUST HAVE) | CV Evidence | Match |
|----------------------------|-------------|-------|
| **Shipped production LLM agent systems others depended on** ("operational history, real users, at least one incident") | profile.yml: Healthcare WhatsApp chatbot (OpenAI + Google Vision OCR) — production LLM integration, but a chatbot pipeline, not an agent system with autonomy tiers; career-ops (story bank #127) is a personal agentic pipeline, no external users | ❌ hard gap — the deciding filter |
| **Design evaluations, not spot checks** (golden sets, behavioral assertions, judge rubrics, CI gates) | Nothing on cv.md or profile.yml; no eval harness work anywhere | ❌ hard gap |
| **Deep API work + authored MCP servers** | Deep API work ✅ (cv.md L16 Pub/Sub sync; L47 Morningstar API jobs; L76 gRPC USSD service); MCP servers authored ❌ | ⚠️ half |
| **Own infra end to end in Python on GCP, cloud warehouse, IaC** | GCP ✅ strong (cv.md L14 Firebase/GCP migration, L16 Pub/Sub, L18 GCS; Skills: GCP Proficient); Python ⚠️ (Proficient but supporting-role evidence: L18 S3→GCS script, L34 Python SDK docs); warehouse ❌; IaC ❌ (nothing on CV, same gap as #166, #175) | ⚠️ partial |
| **Taste in how software contacts humans** (notification budgets) | Firebase push notifications (cv.md L75) — mechanism, not philosophy; no evidence either way | ⚠️ unproven |
| STRONG SIGNAL: public work in the agent space (OSS framework, MCP server, eval harness, cited writing) | career-ops is open source but not cited practitioner work | ⚠️ thin |
| STRONG SIGNAL: LLM observability + cost instrumentation | None | ❌ |

**Gaps and mitigation:**

1. **Production agent systems (hard blocker).** The JD pre-empts the two claims Isaac could make: prompt engineering doesn't count, and internal showcases don't count. *Mitigation:* none available today. A 4–6 week public build (agent runtime with queue + durable state + eval suite, published with a postmortem of a real failure) is the minimum ticket, and even then "real users" is hard to manufacture.
2. **Evaluation engineering (hard blocker).** This is half the role ("the precondition for every agent that does anything beyond read"). *Mitigation:* ship an eval harness for career-ops (golden set of JDs, behavioral assertions on report output, CI gate) and open-source it — the one gap that's genuinely closable with his existing assets.
3. **MCP authorship.** Closable in a weekend (an MCP server exposing career-ops tracker/pipeline), but only meaningful alongside #1 and #2.
4. **IaC + warehouse.** Recurring gap (third Supabase/platform role to flag it — see #166, #175). Terraform sprint remains unstarted.

## C) Level and Strategy

1. **JD level vs candidate:** Sole-owner platform seats are effectively Staff-scope: no reviewers, no escalation path. Isaac's Platform/Infra archetype fit is "adjacent" (profile.yml), and his agent/eval experience is hobbyist-tier against this bar. This is a stretch of two levels in a specialist niche, not one.
2. **"Sell senior without lying" plan (if he insisted):** Lead with governance-adjacent strengths — the two-way sync's idempotency/rollback design maps to "durable state, atomic rollback"; career-ops maps to "AI-native execution: you have a setup of your own and can describe it mechanically." That covers the culture sections, not the must-haves.
3. **If downleveled:** N/A — there is no junior variant of a sole-engineer platform seat.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | Not disclosed (Ashby `compensationTiers` empty) | Ashby API, 2026-08-07 |
| Company comp posture | Competitive global-remote bands; prior evaluations found no posted numbers either | Reports #165–168 |
| Demand | AI-platform/agent-infra engineers with eval experience are 2026's scarcest profile; Supabase is a high-signal name — this posting will attract exactly the specialists it describes | Market context |
| vs Isaac's target | Unknown; would almost certainly clear $80–120K if reached, but the resume screen is the binding constraint | config/profile.yml |

## E) Personalization Plan

Only actionable after a deliberate 1–2 month portfolio sprint:

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Projects | career-ops undocumented as a system | Publish career-ops with an architecture writeup: triggers, tool grants, human gates, logging, one real failure | Directly answers the "describe your setup mechanically" prompt |
| 2 | Projects | No eval work | Build + open-source an eval harness (golden set, assertions, CI gate) for career-ops | Converts the #2 must-have from ❌ to ⚠️ |
| 3 | Projects | No MCP work | Author and publish an MCP server | Explicit must-have checkbox |
| 4 | Skills | No IaC | Terraform-provision the above on GCP | Closes the recurring IaC gap for all platform roles, not just this one |
| 5 | Summary | Backend-migration headline | Only after 1–3: "Backend engineer building agent runtimes and evaluation infrastructure on GCP" | Never claim it before the artifacts exist |

## F) Interview Prep

Compact — only relevant if Isaac does the sprint and applies to a future opening:

| # | JD Requirement | Story (story bank) | Reflection angle |
|---|----------------|--------------------|------------------|
| 1 | Durable state, rollback, run logging | "Zero-downtime Parse→Firebase migration" (two-way sync) | Idempotency + preserved rollback window = the same design instincts the runtime needs |
| 2 | AI-native execution, own setup | "Career-ops agentic pipeline" (#127) | "Agentic loops fail when the model can't verify ground truth" — a genuine reliability lesson |
| 3 | Governance in code vs. instructions | gRPC service bus (#127) | Schema-first contracts = making violations structurally impossible, the JD's inversion-thinking test |

- **Red-flag question:** "Tell me about an incident in a production agent system you ran." — today Isaac has no honest answer at the required scale. That is the whole evaluation in one question.

---

## Story bank candidates

None new — existing stories (#127 career-ops, #167 two-way sync) already cover the transferable material.

## Keywords extracted

LLM agents, agent runtime, model-agnostic, event-triggered queue, durable state, human review gate, atomic rollback, run logging, evaluation, golden sets, behavioral assertions, judge rubrics, CI gate, MCP servers, governance, risk tiers, least-privilege credentials, prompt injection, Python, GCP, cloud warehouse, infrastructure as code, LLM observability, cost instrumentation, notification budget
