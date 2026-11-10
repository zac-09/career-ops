# Evaluation: Latitude.sh — Senior Site Reliability Engineer

**Date:** 2026-08-07
**Archetype:** Platform/Infrastructure Engineer (adjacent for Isaac)
**Score:** 2.4/5
**URL:** https://ats.rippling.com/latitudesh-jobs/jobs/d6286748-cee1-4e27-8088-5c6c10ab009b
**PDF:** ❌ (not generated — SKIP, below 3.0 threshold)
**Verification:** Playwright (2026-08-07) — live posting + application form rendered on Rippling ATS

> **Why this was evaluated:** conditional trigger — the Latitude.sh Backend req (#186, Isaac's primary archetype) turned out Brazil-locked, so this SRE seat got the full pass. **Geo:** unlike Backend ("Brazil"), this role is tagged **"Remote"** on the same board — a deliberate distinction — and the application form has **no geo gate** (CV, contact, free-text location, CEFR English level, SMS consent). However, benefits still list **Contractor (PJ)** and **Wellhub** — Brazilian structures — so comp is Brazil-benchmarked even if residency isn't enforced. Geo verdict: **plausibly open to Uganda, medium confidence.**

---

## ⛔ VERDICT: SKIP — adjacent-archetype SRE seat with core-requirement gaps and Brazil-benchmarked comp

Consistent with Isaac's SRE track record (historically 2.0–2.5): the JD's core requirements — Terraform/Ansible IaC, Prometheus/Grafana/Loki/ELK observability stacks, incident management/RCA process, SLO/SLI definition — are exactly the recurring unevidenced gaps from #173 (Buffer Infra), #168 (Supabase SRE), and #184 (Chronograph Platform). Add no published band with a PJ-contractor benefits structure that likely lands at or below Isaac's $60K floor, and this is a weak match on both fit and comp. Only apply if Isaac has a specific reason (e.g., wants a bare-metal infra learning seat and accepts Brazil-market pay).

---

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infra — SRE (Reliability team) |
| Domain | Global bare-metal cloud (single-tenant compute; Megaport-acquired company) |
| Function | Build + operate: automation tooling, incident response, observability (monitoring/alerting/tracing), self-healing systems, runbooks, SLO/SLI adoption |
| Seniority | Senior |
| Remote | **Remote** (board tag; no geo gate on form) — but Contractor (PJ) + Wellhub benefits signal Brazil-benchmarked terms |
| Comp | Not published; no Glassdoor data for Latitude.sh; Brazil senior SRE PJ market ≈ R$15–25K/month (~$36–60K/yr) — at/below Isaac's floor |
| Stack | Linux/Unix production, Kubernetes, Terraform/Ansible, Prometheus/Grafana/Loki/ELK, Bash/Python/Go/Ruby, Git + CI/CD, incident management, on-call |
| TL;DR | Classic SRE seat on bare-metal infra — automation, observability, on-call — in Isaac's weakest archetype at likely sub-floor comp. |

## B) CV Match

| JD Requirement | Match | CV Evidence |
|---|---|---|
| Strong English communication | Strong | Native-level working English; docs + training track record (cv.md L34–36) |
| Advanced Linux/Unix in production | Partial | L85 Linux listed proficient; no ops-titled production evidence |
| Kubernetes and container orchestration | Partial | L77 "Architected a microservices backend... using Apache Kafka, Docker, and Kubernetes" (CodeBits, 2020–21 — dated) |
| Terraform / Ansible IaC | **Gap (core)** | Not in cv.md — 4th consecutive evaluation where this blocks an infra seat |
| Prometheus/Grafana/Loki/ELK observability | **Gap (core)** | Not in cv.md |
| Bash/Python/Go/Ruby scripting | Strong | Python proficient (L18, L85), Go intermediate (L87), plus Node |
| Git + CI/CD pipelines | Partial | Git proficient (L85); CI/CD pipeline ownership not evidenced |
| Incident management, RCA, post-incident reviews | **Gap** | Zero-downtime migration (L14) implies production discipline; no on-call/incident artifacts |
| SLO/SLI definition | **Gap** | Not evidenced |

### Gaps

| Gap | Hard blocker? | Mitigation |
|---|---|---|
| Terraform/Ansible + observability stack | Yes for a *senior SRE* title | The same 1–2 day Terraform + Prometheus/Grafana portfolio project recommended in #173 would close this across the whole pipeline — do it once, reuse everywhere |
| Incident/SLO practice | Medium | Frame migration rollback discipline; honest gap otherwise |
| Comp floor risk | Practical blocker | PJ structure suggests Brazil-market pay; Isaac's floor is $60K — would need explicit comp confirmation before investing effort |

## C) Level and Strategy

JD level: senior SRE with hands-on reliability ownership. Isaac's natural level in this archetype: mid (adjacent fit per profile.yml). A senior-SRE application without IaC/observability evidence risks rejection or downlevel; not worth it at Brazil-benchmarked comp. If Isaac ever targets SRE seriously, ship the Terraform+observability portfolio project first, then aim at globally-remote seats with published bands.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Published band | None | Posting (verified live 2026-08-07) |
| Glassdoor | No salary data filed for Latitude.sh; company rating 4.4/5, comp rating 3.8/5 | [Glassdoor salaries](https://www.glassdoor.com/Salary/Latitude-sh-Salaries-E1263527.htm), [overview](https://www.glassdoor.com/Overview/Working-at-Latitude-sh-EI_IE1263527.11,22.htm) |
| Structure | Contractor (PJ), annual bonus, PTO, Wellhub, flexible hours | Posting |
| Estimate | Brazil senior SRE PJ ≈ R$15–25K/month (~$36–60K/yr); Megaport acquisition may lift bands, unconfirmed | Market inference — treat as low-confidence |
| SRE demand | Healthy globally, but globally-remote senior SRE seats skew toward candidates with IaC/observability portfolios | Qualitative |

## E) Personalization Plan

Not applicable — SKIP (below 3.0). If circumstances change (comp confirmed ≥ floor), reuse the #173 infra framing: zero-downtime migration as reliability engineering, $5K/month cost optimization as platform economics.

## F) Interview Prep

Not applicable — SKIP.

**Story bank candidates:** none new (infra framings already banked from #173).

---

## Keywords extracted

Site reliability engineering, SRE, Linux, Kubernetes, Terraform, Ansible, Prometheus, Grafana, Loki, ELK, observability, monitoring, alerting, tracing, incident response, post-incident review, RCA, SLO, SLI, runbooks, automation, self-healing systems, on-call, bare metal, CI/CD
