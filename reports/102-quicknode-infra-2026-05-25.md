# Evaluation: QuickNode — Senior Infrastructure Engineer, Core Systems

**Date:** 2026-05-25
**Archetype:** Platform / Infrastructure Engineer
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/quicknode/92dfe4b7-2ca8-4f5f-8795-2389e0bc1526
**PDF:** pending — HTML ready at `batch/html/cv-isaac-quicknode-infra.html`; run `node batch/build-cvs-095-102.mjs && node generate-pdf.mjs batch/html/cv-isaac-quicknode-infra.html output/cv-isaac-quicknode-infra-2026-05-25.pdf --format=letter`
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform / Infrastructure Engineer |
| Domain | Blockchain infra (Web3, RPC, hybrid bare-metal + cloud) |
| Function | Architect + deploy (hybrid bare-metal + cloud infra) |
| Seniority | Senior (level P4) |
| Remote | Global remote (HQ Miami; backed by Tiger Global, YC, SoftBank, 776) |
| Stack | Terraform, Ansible, Consul, Jenkins, Grafana, ELK, VictoriaMetrics, DataDog, Docker, Kubernetes, Python/Go/JS |
| Comp | USD 161K – 210K (US band) + quarterly bonus |
| TL;DR | Architect hybrid infra (bare-metal + cloud + K8s) for Web3 RPC at billions of requests/day. |

## B) CV Match

| JD requirement | CV evidence | Match |
|---|---|---|
| Terraform / IaC | None explicit | Gap |
| Ansible / Consul | None | Gap |
| CI/CD (Jenkins) | None explicit (Firebase deploys at MTailor) | Partial |
| Observability (Grafana, ELK, DataDog) | None explicit | Gap |
| Docker / Kubernetes | "Docker, Kubernetes" (cv.md L77-79) — FIDA microservices | Partial |
| Python / Go / JS | "Proficient: Python, Node.js"; "Intermediate: Go" (cv.md L85-87) | Strong on JS, partial Python/Go |
| Bare-metal / hypervisor / orchestrators | None explicit | Gap |
| Networking fundamentals | Implicit from migration work | Partial |
| Scalability / fault tolerance / cost optimization | "$5K/month saved migrating off AWS" (cv.md L21), Pub/Sub fanout (cv.md L16) | Strong |
| Hybrid cloud / data center | AWS → GCP migration (cv.md L18, L21) | Partial |

**Gaps:**
1. **Terraform/Ansible/Consul** — none on CV. This is the headline IaC stack ask. Mitigate: "Used Firebase deploy + GCP infra console + scripted migrations; would ramp Terraform in week 1 — same shape as the IaC work I scripted by hand."
2. **Observability stack (Grafana/ELK)** — no production story. Gap.
3. **Bare-metal / hypervisors** — pure cloud experience. Gap.
4. **Cost optimization** — *strong story* with AWS exit, leverage hard.

This is a stretch but not impossible. Strong product instincts + migration discipline are real signals. QuickNode's US salary band ($161-210K) is the only US-locked detail; role itself is global remote.

## C) Level and Strategy

- JD: Senior (P4). Candidate: Senior backend with infra-adjacent skills, not core SRE.
- **Sell:** Lead with cost-savings number ($5K/month AWS exit) + distributed Kafka microservices + cross-cloud awareness. Position as "backend engineer who's lived through infra decisions and is ready to specialize."
- **If downleveled:** Would need to accept significant ramp on IaC stack. Reasonable if they invest in onboarding.

## D) Comp and Demand

| Source | Range (USD) |
|---|---|
| JD stated | 161K – 210K (US band) |
| Web3 infra Senior (Levels.fyi) | 150K – 220K |
| Global remote infra | varies — could be lower for non-US |

Important: US band is published; QuickNode likely adjusts for global remote. Worth asking explicitly.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | migrations | "Backend + infra engineer — owned zero-downtime cloud migration of 20+ apps and cut $5K/month in AWS spend; comfortable across Docker, Kubernetes, and Python/Go tooling" | Lead with infra/cost |
| 2 | MTailor bullet 4 | AWS savings | Reframe: "Architected migration from AWS (EC2/EBS/S3) to GCP (Firebase/GCS) — designed cutover plan, validated cost model, executed without downtime. Saved $5K/month." | Architecture story |
| 3 | FIDA bullet 4 | microservices | "Designed and deployed Kubernetes-orchestrated Kafka microservice graph for FIDA case management — Docker containers across nodes, gRPC service mesh" | Infra signal |
| 4 | Skills | current | Add "Terraform (ramping), Ansible (familiar), Grafana, DataDog, OpenTelemetry, Linux, networking" if honest | ATS |
| 5 | Add proof | n/a | "Multi-cloud cost migration ($5K/month savings)" as a hero metric | Cost-savvy infra operator |

## F) Interview Prep

| # | JD Req | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Cost optimization | AWS exit | Bloated bill at MTailor | Cut spend, keep reliability | Lift to Firebase/GCS, kept S3 fallback for transition | $5K/month saved | Infrastructure cost is a design decision, not a procurement one |
| 2 | IaC mindset | S3 → GCS migration script | TB of files, 20+ apps | Repeatable, idempotent | Python streaming + integrity check + dry-run | Zero file loss | Idempotent scripts are IaC's older sibling — same principles |
| 3 | K8s + orchestration | FIDA Kafka microservices | Multi-tenant NGO platform | Reliable async processing | Docker + K8s + Kafka + gRPC service mesh | Adopted by FIDA + LASPNET | Service mesh is the easy part; the hard part is the schema contract |
| 4 | Migration without downtime | Parse → Firebase | 20+ live apps | Zero downtime | Dual-write + flag flip + shadow read | No outages, $5K/mo saved | Migrations are 80% rollback plan, 20% new code |
| 5 | Networking / cross-cloud | AWS ↔ GCP transition | Two clouds in parallel | Bridge during migration | VPC peering + cross-cloud auth + Pub/Sub | Smooth handover | Cross-cloud isn't 2x complexity — it's 5x. Plan accordingly |
| 6 | Observability | DrWealth real-time | 2M+ records, real-time UX | Freshness guarantees | Custom freshness metrics + alerts on age | Real-time UX at scale | If you can't graph freshness, you can't promise it |

Honest red-flag answer:
- "Have you authored Terraform modules?" → "Not at production scale yet. I've designed and executed the equivalent in scripts + console. I'd ramp Terraform in my first sprint — the modeling discipline carries over."

## Recommendation

Apply but flag this as a stretch. Strongest pitch: cost-savvy backend engineer who lived through cloud migrations and is ready to specialize. If they want a pure SRE day-one productive, look elsewhere; if they want an engineer who'll grow into it, Isaac is honest about ramp.

## Keywords extracted

Terraform, Ansible, Consul, Jenkins, Kubernetes, Docker, AWS, GCP, bare metal, hypervisor, IaC, Configuration Management, Grafana, ELK, DataDog, observability, scalability, fault tolerance, cost optimization, Python, Go, networking, multi-region
