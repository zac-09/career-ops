# Evaluation: Tiger Data — Senior Platform Engineer

**Date:** 2026-05-25
**Archetype:** Platform / Infrastructure Engineer
**Score:** 2.9/5
**URL:** https://jobs.ashbyhq.com/tigerdata/d71def2d-5efc-4903-8548-009b409bbe63
**PDF:** ❌ not generated (score < 3.0)
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform / Infrastructure Engineer |
| Domain | Managed PostgreSQL / TimescaleDB cloud |
| Function | Build + operate (control plane microservices for managed DB) |
| Seniority | Senior |
| Remote | All-remote org, preferably EU / Spain |
| Stack | Kubernetes (client-go, controllers, CRDs), PostgreSQL/TimescaleDB, gRPC, Protobufs, Go primary, Rust (plus) |
| TL;DR | Build/maintain control plane of managed TimescaleDB; deep Kubernetes operator work + DB administration. |

## B) CV Match

| JD req | CV evidence | Match |
|---|---|---|
| Kubernetes (client-go, controllers, CRDs) | "Docker, Kubernetes" (cv.md L77-79) — used, not authored controllers | Partial |
| Go primary | "Intermediate: Go" (cv.md L87) | Partial — not production Go service author |
| PostgreSQL / TimescaleDB | "SQL" (cv.md L85), no Postgres/Timescale prod | Gap |
| gRPC + Protobufs | "gRPC" in FIDA USSD service (cv.md L77, L79) | Strong-ish |
| Distributed microservices | FIDA Kafka + Docker + K8s graph (cv.md L77) | Strong |
| On-call / SRE | None explicit | Gap |
| Rust (plus) | "Intermediate: Rust" (cv.md L87) | Partial |
| Multi-cloud / multi-region | AWS + GCP exit story (cv.md L21) | Partial |

**Gaps:**
1. **Authored Kubernetes operators / CRDs** — this is the headline ask. Isaac has used K8s, not authored controllers. Hard-ish blocker for a Senior Platform Engineer role at a DB infra company.
2. **PostgreSQL/TimescaleDB at scale** — no prod story. Gap.
3. **Production Go services** — intermediate, not authored.
4. **EU geo preference** — Isaac is in UTC+3 which overlaps EU; not a blocker but they prefer Spain.

This is a stretch role with multiple steep gaps. Not a primary fit.

## C) Level and Strategy

- JD: Senior platform / DB infra. Candidate's level for this archetype: Mid backend with infra-adjacent K8s + gRPC experience.
- **Sell:** Lean on FIDA microservices (Kafka + gRPC + K8s) + cross-cloud migration. Honest gap on operators.
- **If downleveled:** Stretch; would mean significant ramp time. Skip in favor of stronger-fit roles.

## D) Comp and Demand

Tiger Data (Timescale) typical Senior Platform ranges EUR 80-120K + equity. EU TZ remote. Demand for K8s operator engineers is very high, bar correspondingly steep.

## E) Personalization Plan (lighter — no PDF generated)

Would emphasize FIDA Kafka + K8s + gRPC, and intermediate Go + Rust. But honest assessment is that the operator/controller authoring requirement makes this a weak match.

## F) Interview Prep

If pursued:
- FIDA microservices as K8s usage story.
- gRPC + Protobufs from FIDA USSD bridge.
- AWS→GCP exit for multi-cloud awareness.
- Honest: "Have not authored a K8s operator; have used controllers + CRDs as a consumer. Would ramp on client-go in week 1."

## Recommendation

**Skip.** Apply effort better spent on Checkly (#098/#099) and ElevenLabs (#100) where Isaac is a stronger fit. Tiger Data is a Kubernetes-operator-author shop — that's a 6-month ramp for him, not a senior plug-in.

## Keywords extracted

Kubernetes, client-go, CRDs, controllers, operators, Go, Rust, PostgreSQL, TimescaleDB, gRPC, Protobufs, distributed microservices, control plane, on-call, multi-region, multi-cloud, AWS, observability, IaC, Helm
