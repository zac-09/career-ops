# Evaluation: Langfuse — (Senior) Cloud Infrastructure Engineer

**Date:** 2026-05-25
**Archetype:** Platform / Infrastructure Engineer
**Score:** 2.8/5
**URL:** https://jobs.ashbyhq.com/langfuse/1745b263-e25e-4037-a3a8-d0460fbba165
**PDF:** ❌ not generated (score < 3.0)
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform / Infrastructure Engineer |
| Domain | Cloud infra, AWS, Kubernetes, ClickHouse Cloud |
| Function | Operate (billion traces/month at SLO, also self-hosting product) |
| Seniority | Senior |
| Remote | EU timezones, 1 week/month in Berlin |
| Stack | AWS, ClickHouse Cloud, Kubernetes, Terraform (implied), self-hosting product (Helm/Docker) |
| TL;DR | Own platform behind billion-trace LLM observability infra plus make self-hosting effortless for thousands of teams. |

## B) CV Match

| JD req | CV evidence | Match |
|---|---|---|
| Kubernetes | "Docker, Kubernetes" (cv.md L77, L79) — used in FIDA microservices | Partial — used, not operated at scale |
| AWS | "AWS S3/EC2/EBS" (cv.md L23, L37) | Partial |
| GCP | "Firebase/GCP, Pub/Sub" (cv.md L16, L23) — strong | Strong but JD is AWS-first |
| Terraform / IaC | None explicit | Gap |
| Observability / SLOs | None explicit | Gap |
| Self-hosting / Helm | None explicit | Gap |
| Migration / zero downtime | Parse → Firebase migration (cv.md L14) | Strong |
| ClickHouse | None | Gap |

**Gaps:**
1. **No production K8s at scale / SRE rotation** — this is a hard-ish blocker for Senior Cloud Infra. Adjacent FIDA microservices experience exists but is smaller scale.
2. **No Terraform / IaC track record** — would need ramp.
3. **No SLO / observability prod story** — would need to ramp on Prometheus/Grafana/OpenTelemetry.

**Mitigation:** None of these are insurmountable, but for Senior Cloud Infra at billion-trace scale they stack. This is an adjacent stretch, not a primary fit.

## C) Level and Strategy

- JD level: Senior cloud infra. Candidate's natural level for THIS archetype: Mid-Senior backend with infra-adjacent experience.
- **Sell:** Lean on Parse→Firebase migration as proof of operational discipline; FIDA microservices for K8s; AWS exit for cost-savvy operator instinct.
- **If downleveled:** Probably should not pursue unless they offer a hybrid Backend/Infra role; pure SRE role is a stretch.

## D) Comp and Demand

EUR 90-160K likely (matches sister roles). Senior SRE / Cloud Infra at LLMOps orgs commands premium (90-150K EUR). Demand high but bar is steep.

## E) Personalization Plan (lighter — not generating PDF)

Would emphasize FIDA K8s + AWS exit cost win + Pub/Sub at scale. But honest read: Backend roles at Langfuse (#095/#096) are stronger fits.

## F) Interview Prep

If pursued:
- Lead with Parse→Firebase migration as "running infra under live load."
- FIDA Kafka + Docker + K8s for orchestration story.
- AWS-to-GCP exit for cost optimization + cross-cloud awareness.
- Honest gap statement: "Strongest at backend; cloud infra is adjacent. If I get this role it would be a ramp on Terraform + observability tooling."

## Recommendation

**Skip in favor of #095 and #096.** Same company, same comp band, two roles where Isaac is a stronger primary fit. Apply to one of those; mention infra interest in the cover letter for #096.

## Keywords extracted

Kubernetes, AWS, ClickHouse, Terraform, Helm, observability, OpenTelemetry, SLO, SRE, self-hosting, IaC, multi-region, Prometheus, Grafana, distributed systems, cloud, EKS, RDS, S3, networking
