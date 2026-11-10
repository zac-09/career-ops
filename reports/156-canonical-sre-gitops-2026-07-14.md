# Evaluation: Canonical — Site Reliability / Gitops Engineer

**Date:** 2026-07-14
**Archetype:** Platform/Infrastructure Engineer (SRE) — adjacent archetype for candidate
**Score:** 2.5/5
**URL:** https://job-boards.greenhouse.io/canonical/jobs/1747487
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** Greenhouse API (live, 2026-07-14) — HTTP 200, `location: Home based - Worldwide`, updated 2026-04-01. JD: "This role is available remotely in any timezone."
**Recommendation:** SKIP — best geo of the batch (worldwide, any timezone) but the weakest stack fit. This is a deep IS/SRE operations role (enterprise Linux sysadmin, IaC, Ceph, Prometheus/Grafana, Linux networking/firewalls, on-call escalations) and nearly all of the load-bearing requirements are absent from Isaac's CV. Same pattern as prior SRE evals (Camunda #025 SKIP, Lightning #154 2.9).

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | SRE / GitOps in Canonical's Information Systems (IS) team — runs services for 60M+ Ubuntu users |
| Function | **Operate** — IaC, CI/CD rollouts, observability, capacity planning, final responsibility for time-critical escalations (on-call) |
| Seniority | Senior ("deep experience", "large projects") |
| Remote | ✅ **Worldwide, any timezone** — best geo in this batch |
| TL;DR | An automation-first SRE role owning Canonical's core production infra. Geo is perfect; the job itself is production Linux operations at scale, which is not what Isaac has done. |

**Geo check:** ✅ PASS — worldwide, any timezone.

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| Define operations in code (IaC, version control, CI/CD) | cv.md L77 Docker/K8s; no Terraform/Ansible/IaC on CV | ❌ core gap |
| Strong modern eng (peer review, unit testing, SCM, CI/CD, Agile) | cv.md L4 GitHub; general SE background | ⚠️ partial |
| **Python software development, large projects** | cv.md L85 Python (Proficient); L18 script | ⚠️ scripting-level |
| Practical Linux networking, routing, firewalls | cv.md L76 gRPC/USSD (telecom-adjacent); L85 Linux Proficient | ❌ no networking/firewall depth |
| Linux storage from Ceph to databases | cv.md L85 Linux/SQL/MongoDB | ❌ no Ceph/storage-admin |
| Administering enterprise Linux servers | cv.md L85 Linux (Proficient) | ❌ no enterprise sysadmin evidence |
| Observability (Prometheus, Grafana, ElasticSearch) | Nothing on CV | ❌ core gap |
| Cloud computing concepts | cv.md L14 GCP/Firebase; L23 AWS | ✅ |
| CS/engineering degree | cv.md L93 Computer Engineering | ✅ |

**Gaps:** IaC, observability platforms, enterprise Linux sysadmin, Linux networking, Ceph, on-call SRE — the substance of the role — are all missing. These are the job, not adjacencies. Would require a multi-month platform-ops ramp to be credible.

## C) Level and Strategy

Isaac's profile.yml marks Platform/Infra as "adjacent." His senior evidence is backend *build* (migrations, sync pipelines, microservices), not infra *operation*. He would interview as a junior platform engineer here despite senior backend credentials. Not a good trade while primary-archetype (Node/TS backend) options exist.

## D) Comp and Demand

Canonical location-adjusted; Uganda band likely ~$45–75K vs $80–120K target. Worldwide-remote is attractive but does not offset the stack gap. Demand: active.

## F) Recommendation

**SKIP.** The worldwide/any-timezone geo is the most generous Isaac will find, but this is a pure SRE/IS operations role and his CV lacks the IaC, observability, and enterprise-Linux-ops core. Revisit only if Isaac deliberately commits to the platform/SRE track and builds a demonstrable IaC + observability portfolio first.
