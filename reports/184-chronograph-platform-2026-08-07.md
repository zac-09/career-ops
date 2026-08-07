# Evaluation: Chronograph — Sr. Software Engineer, Platform Engineering

**Date:** 2026-08-07
**Archetype:** Platform/Infrastructure Engineer (adjacent for Isaac)
**Score:** 2.0/5
**URL:** https://www.chronograph.pe/jobs/?gh_jid=5187048007
**PDF:** ❌ (not generated — SKIP, below 3.0 threshold)
**Verification:** Playwright (2026-08-07) — live posting on chronograph.pe (Greenhouse embed) + Greenhouse API `boards-api.greenhouse.io/v1/boards/chronograph/jobs/5187048007?questions=true`

> **Geo resolution (the reason this evaluation exists):** #172 proved Chronograph "Remote" can mean US-only; #139 was worldwide. This req is **US-only**, confirmed three independent ways: (1) Greenhouse API `offices: ["United States - Remote"]` despite the public label saying just "Remote"; (2) the live application form requires "Are you legally authorized to work in the United States?" and "Would you require sponsorship now or in the future?"; (3) US-shaped comp/benefits ($175K–$215K band, 401(k)). Same pattern as #172.

---

## ⛔ VERDICT: SKIP — US-only remote, Uganda excluded

Isaac is in Kampala, Uganda. The required US-work-authorization screening question is a hard gate with no path through. Do not apply, regardless of the (real) partial stack fit. Chronograph's public "Remote" label is unreliable — for any future Chronograph req, check the Greenhouse API `offices` field and form questions before spending evaluation effort.

---

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer (Infrastructure team; mix of software dev + operating internal infra) |
| Domain | Fintech — PE portfolio analytics ($5.9T monitored; backed by Sixth Street, Summit, Carlyle AlpInvest, Nasdaq) |
| Function | Build + operate: cloud infra, PR-environment platform (ZFS-based prod-scale DB clones), AI-assisted ops tooling, observability, on-call |
| Seniority | Senior, 5+ years in DevOps/SRE/Platform roles |
| Remote | **Remote (United States only)** — hard gate on the form |
| Comp | **$175,000–$215,000 USD** (published) + 401(k), unlimited vacation; team weeks 3x/year in Brooklyn HQ |
| Stack | Ruby on Rails + Node.js core services (nice-to-have), AWS, production Kubernetes, IaC, CI/CD, observability (logging/metrics/tracing/alarming), ZFS |
| Notable form questions | DNS nameserver quiz (answer discoverable via `dig ns chronograph.pe`), most recent open-source contribution link, Chronograph's GitHub org numeric ID (via GitHub API) — a self-selection technical filter |
| First published / updated | 2026-07-14 / 2026-08-05 — active req |
| TL;DR | Well-paid, technically interesting platform seat (the PR-env/ZFS clone platform is genuinely good work) — behind a US-work-auth wall Isaac cannot pass. |

## B) CV Match (condensed — disqualified role)

| JD Requirement | Match | CV Evidence |
|---|---|---|
| 5+ years primarily DevOps/SRE/Platform | **Gap** | ~6 years engineering (2020–2026) but backend-titled throughout; platform work is embedded, not primary |
| Production Kubernetes, AWS, managed DBs | Partial | cv.md L77 (Kafka/Docker/Kubernetes microservices), L18/L21 (AWS S3/EC2 real usage, full AWS→GCP migration) |
| IaC abstractions, CI/CD, local dev environments | **Gap** | Terraform/IaC not in cv.md (recurring gap: #173, #168) |
| Observability integration (logging/metrics/tracing) | **Gap** | Not evidenced |
| Ruby on Rails / Node.js services | Partial-Strong | Node.js everywhere (L23, L37, L49, L64, L79); no Rails |
| US work authorization | **HARD BLOCKER** | Kampala, Uganda (cv.md L3) |

## C) Level and Strategy

Not applicable — geographically disqualified. For the record: even absent the geo gate this is Isaac's adjacent archetype with the same Terraform/observability core gaps as #173, and would have landed ~2.5–3.0.

## D) Comp and Demand

$175K–$215K published (verified on posting and API). US-market platform seat; moot for Isaac. No further research spent on a disqualified role.

## E) Personalization Plan

Not applicable — SKIP.

## F) Interview Prep

Not applicable — SKIP.

**Story bank candidates:** none (no new stories developed for a geo-blocked role).

---

## Keywords extracted

Platform engineering, DevOps, SRE, AWS, Kubernetes, infrastructure as code, CI/CD, developer experience, PR environments, ZFS, database cloning, observability, logging, metrics, tracing, Ruby on Rails, Node.js, AI-assisted tooling, on-call, incident response, post-mortem
