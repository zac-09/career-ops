# Evaluation: Canonical — Software Developer in Observability

**Date:** 2026-08-11
**Archetype:** Platform/Infrastructure Engineer (observability flavor) — adjacent archetype, and JUNIOR level
**Score:** 2.1/5
**URL:** https://job-boards.greenhouse.io/canonical/jobs/2166631
**PDF:** ❌ (score < 3.0 — not generated)
**Verification:** live-verified via Playwright 2026-08-11 (H1 title + full JD + "Submit application" button) + Greenhouse API `boards-api.greenhouse.io/v1/boards/canonical/jobs/2166631` HTTP 200, `location: Home based - EMEA`, updated 2026-08-11
**Recommendation:** SKIP — explicit. The pipeline note expected "conditional at best"; it is worse than that. The JD's own words: "We are hiring a **Junior developer** with a proven track record in Python and/or Go." A junior seat is a two-level downlevel for Isaac, Canonical geo-adjusts comp aggressively (junior + East Africa would land far below the $60K floor), the domain is the same observability/ops territory that scored 2.5 on #156, and Canonical's multi-stage written-assessment process makes this a high-effort application for a role that would be a career and comp regression even if won.

---

## Geo Check (hard constraint) — PASS (irrelevant given level)

- Greenhouse API location: "Home based - EMEA"; JD body: "based remotely in the EMEA and Americas regions." Uganda UTC+3 qualifies, consistent with prior Canonical evals (#155-157).
- Geo is the only strong dimension of this offer.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infra — observability stack developer (Charmed Observability Stack) |
| Domain | Cloud-native monitoring: composing open-source monitoring tools for K8s/OpenStack/bare-metal, Juju-contextualized telemetry |
| Function | Build (features, code review, community interaction, conference representation) |
| Seniority | **Junior** ("We are hiring a Junior developer") |
| Remote | Full remote, EMEA + Americas; travel 2-4 weeks/yr |
| Team size | Observability team (globally distributed) |
| TL;DR | Junior Python/Go developer seat building Canonical's opinionated monitoring stack — polished JD, clean geo, wrong level and wrong primary language for Isaac. |

## B) CV Match

| JD Requirement | CV Evidence (cv.md exact lines) | Match |
|----------------|--------------------------------|-------|
| Skilled **Python** developer (primary language) | L85 Python (Proficient) but evidence is scripting: "Migrated file storage from Amazon S3 to GCS via a Python script" (L18); Firebase Python SDK docs (L34) | ⚠️ Scripting-level, not production Python services — same gap as #155/#157 |
| Working knowledge of **Go** | L87 "Intermediate: Go" | ✅ (one of the few direct hits) |
| Bachelor's in CS/STEM | L93 "Bachelor of Science in Computer Engineering, Makerere University" | ✅ |
| Open-source track record (preferred) | career-ops open-sourced (profile context); no OSS contributions on cv.md | ⚠️ Thin |
| Interest/experience in 2+ of: Ubuntu Linux, container images, Debian packaging, snap, distributed systems | Linux Proficient (L85); Docker/K8s (L77); distributed systems: Kafka microservices (L77), Pub/Sub sync (L16) | ✅ (Linux + containers + distributed systems) |
| Observability domain | Nothing on CV: no Prometheus/Grafana/Loki, no monitoring-stack work — recurring gap (#156 SRE 2.5/5, #187 Latitude SRE 2.4/5) | ❌ |
| Junior level | Isaac is 6+ yrs in, targeting Senior — overqualified by title and scope | ❌ Structural mismatch (downward) |

**Gaps:** the two that matter are unfixable by framing: (1) the role's center of gravity is production Python in an observability domain he has never worked in; (2) it is a junior seat — Canonical already downlevels seniors via its assessment ladder, and this req starts two levels below his market position.

## C) Level and Strategy

1. **JD level:** Junior. **Isaac's natural level:** Senior Backend. Applying would be a deliberate double-downlevel.
2. **Sell-senior plan:** Not applicable — you cannot sell senior into a req that is scoped and priced junior. Canonical's structured hiring (psychometric + written assessments graded against the req's level) leaves no negotiation surface.
3. **Alternative path at Canonical:** the standing pattern from #157 holds — watch for Senior/mid reqs where Kafka/distributed-systems/K8s carry the match (e.g., Data Infrastructure roles). The Canonical board remains worth scanning; this req is not the entry point.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Canonical comp model | Location + experience adjusted, revisited annually; performance bonus | JD "we consider geographical location, experience, and performance in shaping compensation worldwide" |
| Benchmark datapoints | SWE I median ~£77.5K (UK-weighted); US Graduate→SWE I $95-109K; entry/mid EMEA anecdote €65K | [levels.fyi Canonical SWE I](https://www.levels.fyi/companies/canonical/salaries/software-engineer/levels/software-engineer-i), [levels.fyi US](https://www.levels.fyi/companies/canonical/salaries/software-engineer/locations/united-states), [Blind EMEA thread](https://www.teamblind.com/post/canonical-software-engineer-tc-emea-hgbxguis) |
| Read for junior + East Africa | Aggressive geo-adjustment on top of a junior band → realistic offer well below the $60K floor (prior #157 estimated senior East-Africa comp already at/below floor) | Derived; consistent with #155-157 |
| Effort cost | Canonical hiring: written interview, psychometric assessment, multiple stages over weeks | Prior Canonical evals #155-157 |

**Comp verdict:** fails the floor with near-certainty; effort/reward ratio is the worst of any live option in the pipeline.

## E) Personalization Plan

Not applicable — SKIP recommended, no CV tailoring performed. If Canonical ever posts a mid/senior distributed-systems req, reuse the #157 personalization plan (Kafka/K8s/NoSQL forward, Python honesty).

## F) Interview Prep

Not applicable — SKIP. No new STAR+R stories surfaced beyond the existing bank; observability remains an evidence gap that no story currently covers (noted previously in #156/#187 — if Isaac wants to open this archetype long-term, the fix is a small Prometheus/Grafana portfolio project, not interview framing).

## Keywords extracted

Python, Go, observability, monitoring stack, Prometheus-class tooling, Kubernetes, OpenStack, Juju, charms, Ubuntu, Debian packaging, snap, container images, distributed systems, open source, telemetry, EMEA remote
