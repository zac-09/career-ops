# Evaluation: Yellow Card — Senior AI Platform Engineer

**Date:** 2026-08-13
**Archetype:** Platform/Infrastructure Engineer (primary, adjacent-fit) + AI-tooling hybrid
**Score:** 2.4/5
**URL:** https://yellowcard.bamboohr.com/careers/385
**PDF:** ❌ (score < 3.0 — not generated)
**Verification:** live-verified via Playwright 2026-08-13 (full JD + "Apply for This Job" button rendered) + BambooHR API `careers/385/detail` `jobOpeningStatus: Open` (board shows 9 open reqs incl. this one; original `datePosted: 2026-04-29`, req reopened after 2026-07-02 closure)
**Recommendation:** SKIP (weak match, 2.4/5 — below the 3.0 bar). Three compounding problems: (1) **geo regressed on reopen** — the page sidebar now reads "South Africa (Remote)", a deliberate distinction from sibling reqs /411 and /412 which show plain "Remote"; Uganda eligibility is doubtful, not best-in-class as the pipeline note assumed from the June version; (2) the technical center of gravity is in-depth AWS (Serverless, Lambda, EKS) — the exact hard-gap axis that sank #144 (AWS = Intermediate on CV; flagship work migrated OFF AWS); (3) comp almost certainly under the $60K floor (SA-benchmarked senior infra ≈ $44–56K market-wide, Yellow Card's own levels.fyi SWE datapoint tops ~$32K). Head-to-head: take the #188 Technical Team Lead door instead (see dedicated section below).

---

## Geo Check (hard constraint) — FAIL-leaning, regressed from June version

| Signal | Evidence | Direction |
|--------|----------|-----------|
| Page sidebar (Playwright, 2026-08-13) | **Location: South Africa (Remote)** | ❌ SA-anchored |
| BambooHR list API | `atsLocation.country: "South Africa"` on req 385; siblings 379/399/411/412 have `country: null` | ❌ Deliberate distinction |
| June 2026 version of this req | Pipeline note recorded it as "Remote, pan-African fintech" (never evaluated before closure) | ⚠️ Geo narrowed on reopen |
| Company posture | Yellow Card hires across ~24 countries on Africa time (precedents #144, #188) | ⚠️ Company-level yes, req-level no |
| Precedent | Latitude.sh #186: Brazil-tagged req on a board whose other req said "Remote" = geo-locked; "aggregator/board labels with a country = country-anchored until proven otherwise" | ❌ Same pattern |

**Verdict:** treat as South Africa-anchored (likely payroll/entity-driven — the Talent Acquisition Associate req carries the same SA tag). Kampala is probably ineligible for this specific seat. This kills the one attribute that made Yellow Card special: for /412 Africa-wide is REQUIRED; for /385 it no longer applies.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infrastructure Engineer (Isaac's *adjacent* archetype) with AI-ops specialization |
| Domain | Internal AI platform for a pan-African stablecoin fintech — AI orchestration tooling, LLM observability/FinOps, HITL automation, MCP-based custom tooling |
| Function | Build + operate (hands-on IC, "hands-on builder... turning AI infrastructure strategy into technical reality") |
| Seniority | Senior IC — 7+ yrs large-scale production infra |
| Remote | Fully remote, but req tagged **South Africa (Remote)** |
| Team size | Not stated; on-call rotation; partners with SecOps and product eng teams |
| TL;DR | Run the internal AI tooling estate on AWS (EKS + Serverless): deploy AI orchestration platforms, instrument LLM cost/usage observability, build HITL automation and MCP-based internal tools, publish Golden Paths docs. |

**Contrast with precedents:**
- **vs #144 Platform Tech Lead (2.9/5):** same AWS-native substrate (EKS, Lambda, Serverless — hard gap), but this seat drops #144's other two hard gaps (advanced networking/mTLS/VPN and SRE-lead tenure). IC, not lead.
- **vs #178 Supabase AI Platform (2.1/5):** the AI bar here is materially softer. Supabase demanded shipped production LLM *agent systems* with operational history, formal eval engineering (golden sets, judge rubrics, CI gates), and authored MCP servers as MUST-HAVEs. This JD asks for "practical experience setting up the infrastructure required to run, monitor, and scale AI-driven applications **or internal developer tooling**" — a bar career-ops and the WhatsApp OCR chatbot partially reach — and MCP appears as a duty ("leverage interface protocols such as MCP"), not a must-have of prior authorship. Also not a sole-engineer seat.

## B) CV Match

| JD Requirement | CV Evidence (cv.md exact lines) | Match |
|----------------|--------------------------------|-------|
| 7+ yrs hands-on, large-scale production environments and infrastructure | Experience spans Jan 2020 → present (L70, L12) ≈ 6.5 yrs, mixed backend/infra | ⚠️ Partial (~6 months short, infra-heavy portion ~4 yrs) |
| **In-depth AWS architecture (Serverless, Lambda, EKS)** | "AWS S3/EC2/EBS" in stack (L23); "Migrated file storage from Amazon S3 to GCS" (L18); Skills: AWS = Intermediate (L87); flagship achievement is "Saved the company $5,000/month by migrating all services off AWS" (L21) | ❌ **Hard gap — the #144 axis unchanged**: serverless depth is GCP (Cloud Functions, Pub/Sub), not Lambda; K8s is vanilla, not EKS |
| Strong grasp of Kubernetes, microservices, CI/CD (GitHub Actions) | "Architected a microservices backend... using Apache Kafka, Docker, and Kubernetes" (L77) | ⚠️ Partial — real K8s/microservices architecture; GitHub Actions and production EKS ops unevidenced |
| AI/LLM Infrastructure: run, monitor, scale AI-driven apps or internal developer tooling | career-ops: open-source agentic pipeline on Claude Code (Playwright verification, batch workers, PDF generation) — internal-tooling shaped, personal scale; Healthcare WhatsApp chatbot with OpenAI + Google Vision OCR (profile.yml proof point) — production LLM integration | ⚠️ Partial — practical but personal/small-scale; no LLM observability, token-budget, or cost-instrumentation work |
| AI Observability & FinOps (LLM spend, token budgets, cost dashboards) | Closest analog: $5K/month AWS cost elimination (L21) — FinOps instinct, not LLM cost instrumentation; no Datadog/Prometheus/Grafana on CV | ❌ Gap (recurring monitoring gap: #144, #156, #168, #187) |
| Custom tooling & extensibility via MCP | No MCP authorship (same finding as #178); deep API/contract work is real: gRPC/protobuf provider contracts (L76), Pub/Sub sync (L16) | ⚠️ Half — protocol-first design yes, MCP specifically no |
| HITL automation to eliminate toil | career-ops is literally a HITL pipeline (human review gates before submission); Ops training + SDK docs (L34-35) | ✅ Adjacent-strong (small scale) |
| Technical adaptability, learn on the fly | Contractor hired on unfamiliar Firebase/GCP stack → wrote its onboarding docs → led the whole 20+ app migration (L27-37, L14) | ✅ Strong — his single best-evidenced trait |
| Operational excellence: performance monitoring, troubleshooting production | Zero-downtime migration discipline (L14); 2M+ record Firestore query optimization (L48) | ⚠️ Partial — outcomes yes, monitoring-tool practice unevidenced |
| Growth mindset / upskilling the team | SDK docs + Ops training (L34-35); led team of 4 (L72) | ✅ |

**Gaps and mitigation:**
1. **AWS EKS/Serverless depth (hard blocker).** Identical to #144: the estate is AWS-native and the CV's story is leaving AWS. Pattern-equivalence (Lambda↔Cloud Functions, SQS↔Pub/Sub) argues competence, not "in-depth knowledge." Not cover-letter-fixable for a platform-owner seat; would need the same AWS ramp flagged in #144 and #188 (Serverless Framework + Lambda + SQS demo, EKS lab).
2. **LLM observability/FinOps (core duty, ~2 of 8 bullets).** No token-budget, cost-dashboard, or model-usage-monitoring work anywhere. Mitigation path exists (instrument career-ops with usage/cost logging and publish it) but doesn't exist today.
3. **MCP authorship.** Closable in a weekend (career-ops MCP server — same recommendation as #178) and worth doing for the whole AI-platform category, but absent now.
4. **7+ yrs.** Soft gap (~6.5), ignorable if the rest matched — it doesn't.
5. **Geo.** Not mitigable by the candidate: SA-anchored req. Could only be resolved by Yellow Card confirming Africa-wide eligibility — ask only if applying, and we recommend not applying.

## C) Level and Strategy

1. **JD level:** Senior IC platform owner on an AWS estate with an AI specialization. **Isaac's natural level for this archetype:** Senior Backend IC; Platform/Infra is his *adjacent* (stretch) archetype per profile.yml, and the AI-infra specialization is hobbyist-tier against a production bar. One honest level of stretch on the platform axis plus a specialization gap — smaller stretch than #178's two levels, bigger than #188's half-step.
2. **Sell-senior plan (only if overriding the skip):** lead with (a) career-ops as a working HITL agentic system he can describe mechanically — triggers, verification via Playwright ground truth, human gates; (b) the $5K/month AWS exit as FinOps instinct ("cost work is capacity planning's twin", #144); (c) the contractor→migration-lead fast-ramp story mapped to "Technical Adaptability" — the JD's most emphasized soft requirement; (d) zero-downtime discipline as operational excellence.
3. **If downleveled:** no junior variant exists on the board. The realistic Yellow Card path for Isaac remains /412 Technical Team Lead (Node/TS core) — which is exactly the head-to-head below.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Published band | Not disclosed (JD lists perks only) | JD, 2026-08-13 |
| Yellow Card actual datapoints | SWE (South Africa) total comp ~$32K/yr top-end; company-wide range $6K–$32K | [levels.fyi Yellow Card](https://www.levels.fyi/companies/yellow-card-app/salaries) (per #188, small-n caveat) |
| SA senior DevOps/platform market | Avg R819,737/yr (~$44K); 8+ yrs avg R1,033,153 (~$56K); one USD database $48–72K top-end | [za.indeed.com](https://za.indeed.com/career/senior-devops-engineer/salaries), [payscale.com](https://www.payscale.com/research/ZA/Job=Senior_Development_Operations_(DevOps)_Engineer/Salary), [jobicy.com](https://jobicy.com/salaries/za/devops-engineer) |
| Read for this seat | SA-benchmarked senior IC: expect ~$40–55K — at or below the $60K floor, far under the $80–120K target; likely below the /412 lead band | Derived |
| Demand context | AI-platform engineers are scarce and hot in 2026, but this req is SA-tagged and AWS-native — it will fill from the SA AWS talent pool | Market context; #178 precedent |

**Comp verdict:** even if geo were waived, the band almost certainly fails the floor. An IC seat benchmarked against a company whose top recorded SWE comp is ~$32K has less negotiating headroom than the /412 lead seat, which was already flagged borderline.

## E) Personalization Plan

Not actionable for this req (SKIP). The durable moves it points to — valuable for the whole AI-platform category (this is the third AI-platform-shaped req in the pipeline after #178 and the Vercel geo-skips):

| # | Asset | Current state | Move | Why |
|---|-------|---------------|------|-----|
| 1 | career-ops | Open source, undocumented as a system | Publish an architecture writeup: triggers, tool grants, human gates, Playwright ground-truth verification, one real failure | Answers "describe your AI setup mechanically" for every AI-platform JD |
| 2 | LLM FinOps | Nothing | Add token/cost instrumentation + a usage dashboard to career-ops; write it up | Converts the AI-observability gap from ❌ to ⚠️ across the category |
| 3 | MCP | Nothing | Author an MCP server exposing the career-ops tracker/pipeline | Weekend-sized; explicit checkbox in both #178 and this JD |
| 4 | AWS | Intermediate, stale | Serverless Framework + Lambda + SQS + DLQ demo (already recommended in #188 prep) | Shared prerequisite for every Yellow Card eng seat |
| 5 | CV Skills | No "AI infrastructure" vocabulary | Only after 1–3: add "LLM observability, agentic tooling, MCP" | Never claim before the artifacts exist |

## F) Interview Prep

Compact — reuse-only, since recommendation is SKIP (full stories live in `interview-prep/story-bank.md`):

| # | JD Requirement | STAR+R Story (bank) | Reflection angle |
|---|----------------|--------------------|------------------|
| 1 | HITL automation / AI-driven toil elimination | Career-ops agentic pipeline | "Agentic loops fail when the model can't verify ground truth" — HITL gates + Playwright verification are the reliability design |
| 2 | FinOps / cost dashboards | AWS exit, $5K/month saved (NEW standalone story, added to bank) | Cost work is capacity planning's twin — measure before and after, make savings recurring |
| 3 | Kubernetes/microservices | Kafka/K8s microservices for FIDA | Boundaries before tooling |
| 4 | Reliability & performance | Zero-downtime Parse→Firebase migration | Parallel-run + reversible cutover beats big-bang |
| 5 | Technical adaptability | Contractor→migration lead fast ramp | Learning velocity is demonstrable, not claimable |
| 6 | Internal enablement / Golden Paths | SDK docs + Ops training | Docs are a force multiplier |

**Red-flag questions:** "Have you run EKS in production?" (honest no — K8s yes, EKS no); "Show me LLM cost instrumentation you've built" (none today — the whole gap in one question); "Are you based in South Africa?" (no — Kampala; disqualifying if the SA tag is a payroll gate).

---

## Head-to-Head: #191 Senior AI Platform Engineer vs #188 Technical Team Lead (REQUIRED — single-application etiquette)

Yellow Card gets ONE application (precedent: Buffer #183-vs-#173, Automattic #130). The two live doors:

| Dimension | #191 Senior AI Platform Engineer (this req) | #188 Technical Team Lead, /412 (3.4/5) | Winner |
|-----------|---------------------------------------------|----------------------------------------|--------|
| Geo | **South Africa (Remote)** tag on page + API — Uganda eligibility doubtful | "located within Africa" verbatim in JD; plain "Remote" sidebar — Uganda explicitly inside the zone | **#188, decisively** |
| Core skill match | AWS EKS/Serverless in-depth (hard gap) + LLM observability/FinOps (gap) + MCP (gap); adaptability is the only strong axis | Node/TS full-stack architecture — his primary archetype; AWS is the substrate, not the job; Vue ramp pre-sanctioned by the JD | **#188** (3.4 vs 2.4) |
| Level shape | Senior IC in his adjacent archetype + specialist AI-infra bar | Half-step stretch into lead on his primary archetype, 90% hands-on | **#188** |
| Comp risk | SA-benchmarked senior IC, likely $40–55K — below floor with little headroom | Lead premium over the same ~$32K SWE benchmark, maybe $45–65K — borderline but probeable, and stock upside negotiable | **#188** (both risky; #188 has more headroom) |
| Interview odds | Fails at resume screen on AWS depth or at first technical round on EKS/LLM-cost specifics; geo may gate before any human reads it | Every JD bullet has an evidence-backed story already drafted (8 bank stories mapped, answer sheet ready) | **#188** |
| Effort already sunk | None | Report, tailored PDF, and application answers drafted, not yet submitted | **#188** |

**Verdict: take the #188 Technical Team Lead door — #191 loses on every dimension (geo, fit, comp headroom, interview odds); submit the already-drafted /412 application with its comp-probe condition, and do not burn the single Yellow Card shot on an SA-tagged AWS/AI-infra stretch.**

---

## Story bank additions

One new standalone story added: **[Cost optimization / FinOps] AWS exit saving $5,000/month** (previously only embedded inside the migration story; #144 and this JD both wanted it standalone).

## Keywords extracted

AI platform, AI orchestration, LLM observability, FinOps, token budgets, cost dashboards, Human-in-the-Loop (HITL), MCP, AI agents, Kubernetes, EKS, AWS Serverless, Lambda, microservices, CI/CD, GitHub Actions, capacity planning, high availability, SecOps, Golden Paths, internal enablement, developer tooling, stablecoin, fintech
