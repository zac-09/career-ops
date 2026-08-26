# Evaluation: Sand Technologies — Platform Engineer

**Date:** 2026-08-26
**Archetype:** Platform/Infrastructure Engineer (JD self-describes as "a deeply hands-on site reliability role")
**Score:** 2.2/5
**URL:** https://job-boards.eu.greenhouse.io/sandtechholdingslimited/jobs/4906906101
**PDF:** none (score < 3.0)
**Verification:** live-verified via Playwright 2026-08-26 (Greenhouse EU page renders full JD + complete application form + Submit button)
**Recommendation:** SKIP — weak match. The geo is the best Africa-wide signal seen all year (location "Rwanda | Africa", "willingness to travel across the African continent", free-text country field, generic visa question, teams across Africa/Europe/UK/US — Uganda clearly eligible), and the mission (health platforms for ministries serving millions across Africa) is genuinely compelling. But the JD is a dedicated SRE/platform specialist seat and every load-bearing requirement lands on Isaac's documented gaps: 5+ yrs cloud/platform engineering with significant production Kubernetes, **on-prem/bare-metal K8s cluster operations**, GitOps (Argo CD/Flux), full IaC discipline, Prometheus/Grafana/OpenTelemetry observability ownership, and SLO/error-budget/incident practice. This is the exact axis that produced the 2.0–2.5 SRE/platform band (#156/#168/#187) — and this JD demands MORE than those did (bare-metal + GitOps + observability + SLOs simultaneously). Comp is Africa-benchmarked (JHB Platform Engineer median ~ZAR 840K ≈ $46K), likely at/below the $60K floor.

---

## Geo Check — PASS (best-in-class Africa-wide)

- Location tag: "Rwanda | Africa" — and the board's sibling reqs are country-locked (Principal SWE = Romania/SA, Senior SWE = SA), so the Africa-wide tag on this req is a deliberate distinction.
- JD: "Willingness to travel across the African continent to support our in-country teams" — matches profile.yml onsite_availability (1–2 weeks/quarter travel OK).
- Form (inspected live): free-text "Country of Residence", generic "Do you currently require visa sponsorship to work in this country?" (honest answer for Uganda: No), no work-auth or country-dropdown gate, USD salary-expectation dropdown.
- Company: "colleagues across Africa, Europe, the UK, and the US"; digital healthcare platforms "serving tens of millions of people across Africa".

Kampala is arguably a better base for this role than most — geo is emphatically not the problem.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infra — hands-on SRE ("this is a deeply hands-on site reliability role") |
| Domain | Physical AI for critical industries; sovereign health-data platforms for ministries of health, country-by-country fleet |
| Function | Own K8s estate: AWS EKS + self-managed on-prem/bare-metal clusters; GitOps everything; build golden paths; own observability; define SLOs; lead incident response |
| Seniority | Minimum 5 years in cloud/platform engineering with significant production K8s |
| Remote | Remote across Africa + continental travel |
| Team size | Not stated; small teams within globally coordinated efforts |
| Comp | Undisclosed; USD dropdown on form |
| TL;DR | Sovereign-cloud Kubernetes fleet owner for African health ministries — a specialist SRE seat requiring years of dedicated platform practice. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|---|---|---|
| 5+ yrs cloud/platform engineering, significant hands-on production K8s | cv.md: ~6.5 yrs backend engineering; K8s appears only in CodeBits stack (2020–21, "microservices backend… using Apache Kafka, Docker, and Kubernetes") — ~1.5 yrs, backend-builder not platform-owner | ❌ hard gap |
| On-premise / bare-metal K8s cluster management | None — all cloud-managed (Firebase/GCP, some AWS) | ❌ hard gap |
| GitOps (Argo CD / Flux), all infrastructure as code | Zero IaC/GitOps on CV (repeats #156/#166/#168/#187 gap) | ❌ hard gap |
| Observability ownership (Prometheus, Grafana, OpenTelemetry) | Zero on CV (repeats #156/#187 gap) | ❌ hard gap |
| SLOs, error budgets, incident response, blameless post-mortems | No formal SRE practice; zero-downtime migration discipline is adjacent evidence only | ❌ |
| Cluster lifecycle: upgrades, RBAC, networking, ingress, storage, workload security | Deployed ONTO K8s at CodeBits; never owned cluster lifecycle | ⚠️ partial |
| Helm charts, operators/CRDs, golden paths, self-service tooling | Not evidenced | ❌ |
| CI/CD pipelines across services and environments | Implied by 20+ app migration cutovers; not a named CV proof point | ⚠️ |
| AWS EKS | Skills: AWS intermediate (S3/EC2/EBS); no EKS | ⚠️ |
| Degree in CS/related | BSc Computer Engineering, Makerere | ✅ |
| Cross-functional distributed collaboration, strong written communication | US/Singapore remote roles; docs + Ops training at MTailor | ✅ |
| Travel across Africa | Kampala-based, profile.yml allows quarterly travel | ✅ |
| Ownership/self-motivation in small teams | Led 4-dev team; end-to-end migration ownership reporting to CTO | ✅ |

**Verdict:** the ✅ column is geography, education, and soft skills; the ❌ column is the entire technical core of the job. Five of the eight "What you'll do" bullets have no CV evidence at all. Historical band for this shape: #168 Supabase SRE 2.0, #187 Latitude.sh SRE 2.4, #156 Canonical GitOps 2.5, #144 AWS-lead 2.9 — this JD stacks every one of those gap axes at once, plus bare-metal.

**Mitigation path (future, not now):** if Isaac ever wants to open the Platform archetype (currently 'adjacent' in profile.yml), the credential play is a small public IaC+observability project (Terraform/ArgoCD deploy of a Node service with Prometheus/Grafana/OTel dashboards). Until that exists, every JD on this axis will score 2.0–2.5 — stop spending evaluation slots on specialist SRE seats unless the JD says "we'll train you".

## C) Level and Strategy

JD level: senior dedicated platform engineer (5+ yrs of platform practice specifically, not general engineering). Isaac's natural level here: junior-to-mid platform (senior backend). Two-axis mismatch (domain + seniority-in-domain). No honest framing closes it; do not apply.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| Platform Engineer, Johannesburg (proxy for SA-benchmarked band) | Median ZAR 840K (~$46K); range ZAR 450K–1.4M (~$25–77K) | [Glassdoor JHB Platform Engineer](https://www.glassdoor.com/Salaries/johannesburg-south-africa-platform-engineer-salary-SRCH_IL.0,25_IM1023_KO26,43.htm) |
| Sand Technologies pay | Cape Town/Nairobi salary pages exist but role-specific data thin (10 salaries company-wide) | [Glassdoor Sand Technologies](https://www.glassdoor.com/Salary/Sand-Technologies-Salaries-E9232024.htm) |
| Form signal | Salary expectations captured as USD dropdown — international payroll, but Africa-benchmarked bands likely | live form |

Expected band straddles the $60K floor from below — even on a perfect fit this would need the top of their range. On a 2.2 fit it is moot.

## E) / F)

Not generated — score below apply threshold. No new story-bank entries (the IaC/observability gap and its mitigation are already documented across #156/#168/#187 evaluations).

## Keywords extracted

Kubernetes, EKS, bare-metal, on-premises, cluster lifecycle, RBAC, ingress, GitOps, Argo CD, Flux, infrastructure as code, Helm, operators, CRDs, golden paths, SLOs, error budgets, incident response, blameless post-mortems, Prometheus, Grafana, OpenTelemetry, observability, CI/CD, site reliability, sovereign cloud, health data
