# Evaluation: Dwelly — Applied AI Engineer (Remote)

**Date:** 2026-08-19
**Archetype:** Senior Backend Engineer × Applied-AI/agentic engineering (the #192/#197 winning axis, NOT the #179 ML-research axis)
**Score:** 3.9/5
**URL:** https://job-boards.eu.greenhouse.io/dwelly/jobs/4954106101
**PDF:** output/cv-isaac-mubiru-dwelly-applied-ai-2026-08-19.pdf
**Verification:** live-verified via Playwright 2026-08-19 (Greenhouse EU page tagged "New", full JD + application form rendered and inspected)
**Recommendation:** APPLY — with a concentration decision. This is now the strongest Dwelly fit on the agentic axis, but #140 is already Applied and #180 (4.1) is a standing APPLY. Send at most ONE new Dwelly application: choose between #180 (migration story, safest evidence) and #200 (agentic axis, biggest upside). Recommendation: #200, referencing #140 in the cover letter — the JD reads like a description of career-ops.

---

## Geo Check — CONDITIONAL PASS (timezone-based, Kampala-compatible)

1. **JD language:** "hiring remotely across the UK, Ireland, and European time zones. Candidates should be based within these regions/time zones." Kampala is UTC+3 — the same clock as Eastern European Summer Time. The stated rationale is collaboration overlap, which Isaac satisfies fully; but "regions/time zones" is ambiguous between geography and clock.
2. **Application form (Playwright):** NO country dropdown, NO hard gate — "What is your current location and right to work status?" is free text. Answer honestly: "Kampala, Uganda — UTC+3, identical working hours to Eastern Europe; no sponsorship needed for remote."
3. **Employer precedent:** Dwelly reqs have been geo-clean before (#140 Applied from Uganda without gate issues; #179 report: "Geo clean"). This JD's phrasing is narrower than earlier reqs — flag it, don't assume.

Verdict: apply-able; timezone case is airtight, residence case is arguable. The free-text field lets the honest answer make the case.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Applied AI / agentic-infrastructure engineer (TypeScript-first) |
| Domain | Proptech — AI operating system for UK residential lettings; 15K properties, $470M GMV, $263M raised |
| Function | Build reusable agentic primitives (memory, context, tool-calling, orchestration), evaluation + observability layer, agentic dev workflows |
| Seniority | Not year-gated — "strong software engineering background", "early core member", high autonomy |
| Remote | Fully remote, UK/Ireland/European time zones |
| Comp | Undisclosed ("competitive salary + potential equity") |
| TL;DR | Early core AI-platform seat turning one-off LLM flows into reusable, evaluated agentic infrastructure — explicitly "not an AI research role". |

## B) CV Match

| JD Requirement | Evidence (cv.md + verifiable systems) | Match |
|---|---|---|
| Strong SWE background, idea → production independently | cv.md MTailor: led 20+ app zero-downtime migration end-to-end, reporting to CTO | ✅ |
| AI/agentic systems operated in production | Healthcare WhatsApp chatbot (OpenAI + Google Vision OCR, WhatsApp Business API — profile.yml proof point); career-ops: open-source multi-agent pipeline in daily operation | ✅ moderate (real, but not enterprise-scale) |
| Reliability, latency, context mgmt, failure modes, eval, observability | career-ops: ground-truth verification rules (Playwright liveness), dedup/merge integrity scripts, batch workers with fallback modes — documented failure handling | ⚠️ practical yes; no formal eval framework shipped |
| Agents, tool use, structured outputs, orchestration, feedback loops | career-ops architecture: modes, batch subagents, TSV contracts (structured outputs), tracker feedback loop | ✅ |
| Coding agents in own daily workflow; decomposing tasks across subagents | Claude Code daily; career-ops batch workers = specialized subagents with verification mechanisms | ✅ strong — the JD's "What We Don't Mean" list is exactly what career-ops is not |
| LLM vs deterministic vs human judgment | career-ops: deterministic merge/dedup scripts where correctness matters, LLM where judgment matters, human gate before every submission | ✅ direct |
| TypeScript / Node.js | cv.md: Node.js in every role since 2020; Skills "Proficient: Node.js" | ✅ core |
| PostgreSQL | cv.md: Skills "SQL"; MongoDB/Firestore primary | ⚠️ soft gap |
| Ops-workflow automation with business teams | cv.md MTailor: trained Ops team on new stack; Express Shipping revenue feature | ✅ |
| Startup mentality, ambiguity, autonomy | 5 remote roles across 4 countries, contractor-to-hire conversion | ✅ |

**Gaps + mitigation:**
1. **Formal evaluation/observability framework** — the role's #2 pillar; Isaac has practical verification systems, not an eval harness. Mitigation: frame career-ops verification rules as eval-thinking; be candid that building the formal layer is the growth edge he wants.
2. **Production agentic scale** — career-ops is single-operator; the chatbot is production but modest. Mitigation: lead with the reliability engineering record (zero-downtime migration) as proof he makes probabilistic systems safe for business use.
3. **PostgreSQL** — SQL present, Postgres unnamed. Minor; do not oversell.

## C) Level and Strategy

- **Level:** un-gated, "early core member with significant influence" — seniority is judged on systems thinking, where the migration + career-ops story plays at senior level.
- **Sell senior without lying:** "I build agentic systems the way I built migrations: deterministic where correctness matters, probabilistic where judgment matters, and verified before anything touches production. My open-source agentic pipeline has ground-truth verification, subagent decomposition, and integrity scripts because I've been burned by trusting model output."
- **Downlevel risk:** low (no year bar). Comp is the real variable.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Published band | None ("competitive salary + potential equity") | JD |
| UK AI Engineer average | ~£64K (range £32-102K) | [Glassdoor UK](https://www.glassdoor.co.uk/Salaries/ai-engineer-salary-SRCH_KO0,11.htm), [Lorien](https://www.lorienglobal.com/insights/salary-for-ai-engineer-in-uk) |
| US remote reference | ~$180K avg (not applicable, anchoring only) | [Built In](https://builtin.com/salaries/us/remote/ai-engineer) |
| Estimate for this seat | £60-90K plausible for UK-remote applied-AI; Uganda banding unknown | inference, flagged |
| Demand | $263M raised, acquisition-driven growth, hiring multiple engineering reqs | JD + Greenhouse board |

Same play as #140/#180: confirm $80-120K target in first call, floor $60K.

## E) Personalization Plan (applied in PDF)

| # | Section | Change | Why |
|---|---|---|---|
| 1 | Summary | Lead with agentic-systems builder in TypeScript/Node: production LLM integrations + open-source agentic pipeline + reliability record | Mirror JD's builder-not-researcher frame |
| 2 | Competencies | "Agentic Systems & LLM Orchestration", "Tool Calling & Structured Outputs", "TypeScript & Node.js", "Evaluation & Observability Thinking", "PostgreSQL & SQL", "Production Reliability", "Workflow Automation", "AI-Assisted Development (Claude Code)" | JD keyword grid |
| 3 | Projects | career-ops FIRST (agentic infrastructure), WhatsApp chatbot second (production LLM), sync pipeline third (reliability) | Proof ordering for this JD |
| 4 | MTailor bullets | Zero-downtime + Ops-team enablement up — "turn manual operational work into reliable systems" | Operational-automation pillar |
| 5 | Skills | Surface SQL/PostgreSQL-adjacent, structured-output/JSON contract work | Stack line |

LinkedIn: headline add "Agentic Systems"; feature career-ops repo; answers to the 4 form essays should each name one concrete mechanism (verification rule, subagent contract, failure autopsy, deterministic fallback).

## F) Interview Prep (STAR+R, mapped)

| # | JD Requirement | Story |
|---|---|---|
| 1 | Agentic infrastructure primitives | career-ops: modes/subagents/TSV contracts as reusable primitives |
| 2 | Eval & observability | WebSearch-cached-closed-postings failure → Playwright ground-truth verification rule (failure autopsy, banked from #197 prep) |
| 3 | Production AI behaving unexpectedly | WhatsApp chatbot OCR edge cases (form question #4 maps here) |
| 4 | LLM vs deterministic judgment | merge-tracker/dedup scripts: why dedup is code, not prompts |
| 5 | Operational automation | MTailor Ops-team training + migration runbooks |
| 6 | Reliability at scale | Zero-downtime 20+ app migration; two-way sync idempotency |

**Case study:** career-ops walkthrough (architecture diagram: agents, tools, deterministic layer, human gate).
**Red flags:** "Is a job-search tool a real production system?" → single-operator but real stakes, real failure autopsies, real integrity constraints; "No formal evals?" → honest growth-edge answer + verification-rule evidence. "Location?" → UTC+3 = EEST clock, full-overlap answer.

## Application-concentration note (decision for Isaac)

- #140 Staff SWE: Applied 2026-07-02, no response in ~7 weeks — likely cold.
- #180 Data Migration (4.1): standing APPLY, not yet sent.
- #179: SKIPped partly BECAUSE of concentration risk.
- **Send at most one new Dwelly application.** #200 vs #180: #180 has the safest evidence (the role IS the MTailor story); #200 has the higher ceiling (early core AI-platform seat) and this JD matches career-ops nearly clause-by-clause. If both are sent anyway, space them and cross-reference honestly — same recruiter will see both.

## Keywords extracted

agentic infrastructure, agents, tool calling, structured outputs, context management, orchestration, evaluation, observability, feedback loops, coding agents, subagents, LLM orchestration, TypeScript, Node.js, PostgreSQL, production reliability, failure modes, operational automation, workflow automation, startup
