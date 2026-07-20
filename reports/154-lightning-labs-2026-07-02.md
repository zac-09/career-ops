# Evaluation: Lightning Labs — Platform Engineer (Remote)

**Date:** 2026-07-02
**Archetype:** Platform/Infrastructure Engineer (adjacent archetype for candidate)
**Score:** 2.9/5
**URL:** https://jobs.ashbyhq.com/lightning/fde1d2b6-99e1-404a-b343-c35b2c40f9ae
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** Ashby posting API (live, 2026-07-02) — `isListed: true`, `isRemote: true`, full descriptionHtml returned
**Recommendation:** SKIP unless specific reason — core platform-ops requirements (production K8s cluster management, IaC, observability platform operation) are absent from cv.md, and geo is unstated with US-remote signals on aggregators.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infrastructure Engineer (SRE-leaning DevOps) |
| Domain | Infra — Bitcoin/Lightning Network infrastructure company (cloud, clusters, stateful services, blockchain nodes) |
| Function | Build + operate (run infra, advise dev teams on Helm/K8s lifecycle) |
| Seniority | Senior ("pragmatic senior software engineer with DevOps expertise") |
| Remote | Remote (Ashby `isRemote: true`), **geo unstated — confirm at apply.** Third-party listings (RemoteRocketship, Glassdoor) label Lightning Labs roles "United States Remote"/Palo Alto-anchored; SF-HQ company managing "remote teams across several time zones" |
| Team size | Not stated (company ~small, 10-13 open roles) |
| TL;DR | Bitcoin infra leader wants a senior DevOps-heavy engineer to run cloud/K8s clusters, stateful services and blockchain nodes, and own observability — an ops-first role, not a backend-build role. |

**Geo check (hard constraint):** AMBIGUOUS — the JD text contains no country/timezone restriction, so this is not an automatic geo-SKIP, but aggregator listings for Lightning Labs consistently say US Remote. If Isaac pursues it, the first question at apply must be Uganda (UTC+3) eligibility.

## B) CV Match

| JD Requirement | CV Evidence (exact lines) | Match |
|----------------|---------------------------|-------|
| Strong Linux foundations | cv.md L85 "Linux" (Proficient) | ✅ |
| Cloud infrastructure | cv.md L14 (Firebase/GCP migration), L18 (S3→GCS), L23 "GCP Pub/Sub, AWS S3/EC2/EBS"; L85 GCP Proficient, L87 AWS Intermediate | ✅ |
| Production Kubernetes cluster management & troubleshooting | cv.md L77 "Architected a microservices backend... using Apache Kafka, Docker, and Kubernetes" — **built ON K8s as a developer; no cluster operation/administration evidence** | ❌ core gap |
| Infrastructure as Code | Nothing on cv.md (no Terraform/Pulumi/CloudFormation) | ❌ core gap |
| Operating/extending observability platforms (logging, metrics, tracing) | Nothing on cv.md (no Prometheus/Grafana/ELK/OTel) | ❌ core gap |
| Networking, security foundations | cv.md L76 (gRPC, USSD telecom integration) — adjacent only | ⚠️ |
| Systems languages: Go, Python, or Rust | cv.md L85 Python Proficient (L18: migration scripting); L87 Go, Rust Intermediate | ⚠️ Python yes (scripts, not services); Go/Rust intermediate |
| Operating stateful services (databases, blockchain nodes) | cv.md L16 (MongoDB↔Firestore sync pipeline), L47 (2M-record Firestore ops) — app-level, not DBA; Web3 exposure cv.md L61 "backends for DeFi applications using Web3 and Node.js" | ⚠️ |
| Preferred: GitOps, DevSecOps, service mesh | Not on CV | ❌ |
| Preferred: PostgreSQL/etcd administration | cv.md L85 SQL Proficient (generic); no DBA evidence | ❌ |
| Preferred: Bitcoin/Lightning knowledge | cv.md L61 DeFi/Web3 (Ethereum-side, not Bitcoin/LN) | ⚠️ adjacent |
| Preferred: open source contributions | GitHub on CV (L4) but no cited OSS work | ❌ |

**Gaps and mitigation:** The three hard requirements of the role — production cluster ops, IaC, observability platform operation — are all missing, and they are the job, not adjacencies. These are not cover-letter-mitigable; they would need a 2-3 month portfolio ramp (run a k3s cluster with Terraform + Prometheus/Grafana + an LND node, publish it). Same pattern as report 101 (Tiger Data, 2.9) and 025 (Camunda, SKIP): Isaac uses platforms; this role builds and operates them.

## C) Level and Strategy

1. **JD level vs natural level:** Senior — but in the Platform/DevOps ladder, where Isaac's profile.yml marks fit as "adjacent". His senior evidence is backend build (migrations, sync pipelines, microservices), not infra operation. Effective downlevel risk: he would interview as a mid-level platform engineer despite senior backend credentials.
2. **Sell senior without lying:** If pursued anyway — lead with the zero-downtime migration of 20+ apps (cv.md L14) as infrastructure-grade risk management, K8s/Kafka microservices architecture (L77), and the $5K/month cross-cloud cost consolidation (L22). Frame as "backend engineer who has lived on both sides of the platform".
3. **If downleveled:** Not worth accepting a downlevel into an adjacent ladder while strong primary-archetype options exist in the pipeline (e.g. #134 Bitfinex 4.2, #127 Buffer 4.4).

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| JD comp | Not disclosed | Ashby posting (2026-07-02) |
| Lightning Labs avg salary | ~$115K (range ~$101K–$130K; thin data) | Salary.com company page |
| Comparable remote roles | Senior Eng Manager $145K–$210K; Technical PM $132K–$190K | Glassdoor Lightning Labs listings |
| Comp reputation | 5/5 employee comp rating (1 review — negligible sample) | Glassdoor |
| Company | SF-based leader in Lightning Network infra (lnd, Taproot Assets), VC-backed (RRE et al.) | lightning.engineering, RRE job board |

**Read:** Comp would likely meet the $80-120K target if Uganda-eligible — but eligibility is unverified and the fit gap dominates. Platform/SRE demand is strong, which cuts both ways: they can demand real cluster-ops track records.

## E) Personalization Plan

Not developed — score below 3.0 threshold. If Isaac has a specific reason to pursue (e.g., strong Bitcoin interest), prerequisite is the infra portfolio ramp in Block B, not CV re-framing; the gaps are experiential, not presentational.

## F) Interview Prep

Not developed (weak match). If pursued later, the three usable stories are: zero-downtime migration as risk-managed infra change (cv.md L14-L16), Kafka/Docker/K8s microservices architecture (L77), and the cross-cloud cost migration (L18, L22). Red-flag question to expect: "Walk me through debugging a failing production K8s cluster" — currently unanswerable from real experience.

---

## Keywords extracted

Kubernetes, cluster management, Infrastructure as Code, observability, logging, metrics, tracing, Linux, networking, security, cloud infrastructure, stateful services, blockchain nodes, Helm, operators, overlay networks, GitOps, DevSecOps, service mesh, PostgreSQL, etcd, Go, Python, Rust, Bitcoin, Lightning Network
