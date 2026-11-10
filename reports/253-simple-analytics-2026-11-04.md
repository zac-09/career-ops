# Evaluation: Simple Analytics — DevOps Engineer

**Date:** 2026-11-04
**Archetype:** **Platform/Infrastructure Engineer** in its dedicated-infra/SRE form (bare-metal servers, Ansible, OpenTofu, Grafana, Docker Compose, GitHub Actions, permanent on-call), with a thin **Senior Backend Engineer** axis ("You'll also write TypeScript"; co-leading an Elasticsearch to ClickHouse migration with the app developer).
**Score:** 2.8/5
**URL:** https://www.simpleanalytics.com/jobs/devops
**PDF:** ❌ (score below 3.0, no PDF generated. The application form takes no CV anyway: name, email, GitHub/website, country, "why do you love this")
**Verification:** live (fetched 2026-11-04, no Playwright — parallel worker). `curl` returned HTTP 200 for the page and for `/jobs/devops.md` with the full JD, salary block and apply instructions. No posting date or closing date on the page.
**Recommendation:** **SKIP (weak match).** This is the friendliest infra JD the pipeline has seen. The geo is perfect ("Location: anywhere", "Timezone: no restrictions", freelance outside the EU). They say "We don't care that much whether you know every tool in our stack". The first project is a datastore migration, which is Isaac's strongest story. It still lands in the dedicated-infra band. The hire becomes the single owner of bare-metal production infrastructure "behind our entire business", leads infrastructure architecture, does SRE work and is "always on call for urgent production incidents". cv.md has no bare-metal, Ansible, IaC, Grafana/monitoring, SRE, on-call, Elasticsearch or ClickHouse evidence. The pay is EUR 5,000/month (about $69K at 40 h/week) as a freelancer with no benefits, which puts it at the $60K walk-away floor in real terms. The seat would also pull Isaac off his primary backend track. The only argument for applying anyway is that the form costs about 15 minutes. Spend those minutes on an open 3.5+ seat instead.

---

## Continuity — related dedicated-infra evaluations

| # | Report | Role | Score | Status |
|---|---|---|---|---|
| 231 | `reports/231-tether-devops-2026-10-01.md` | Tether DevOps Engineer | 2.9/5 | SKIP |
| 214 | `reports/214-railway-observability-2026-09-11.md` | Railway Senior Infra: Observability | 2.4/5 | SKIP |
| 204 | `reports/204-sand-technologies-2026-08-26.md` | Sand Technologies Platform Engineer | 2.2/5 | SKIP |
| 102 | `reports/102-quicknode-infra-2026-05-25.md` | QuickNode Senior Infrastructure Engineer | 3.0/5 | Evaluated |

This is the first evaluation of a Simple Analytics req. It scores above the band's usual 2.0–2.5 because the JD explicitly discounts tool knowledge and opens with a migration project. It still falls below 3.0 on the same missing set: IaC, observability, SRE/on-call, and bare metal.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer, dedicated-infra/SRE (primary) + Senior Backend (secondary, TypeScript) |
| Domain | Privacy-first web analytics SaaS. Self-hosted on "our own bare metal" by policy, no cloud providers |
| Function | Build and operate. First project: "migrating our Elasticsearch infrastructure to ClickHouse, together with Alex, our developer. You'll lead infrastructure architecture, he'll lead application architecture." Then deployment pipelines, production ownership and SRE |
| Seniority | Not stated. Sole-infra-owner language ("someone we can trust with the infrastructure behind our entire business") implies senior |
| Remote | Full remote: "Location: anywhere", "Timezone: no restrictions". Freelance contract outside the EU |
| Team size | Small. Founders Adriaan van Rossum and Iron Brands, Alex (developer), content/marketing, some freelancers. Mostly async, Shape Up (not Scrum) |
| Hours / comp | 24, 32 or 40 h/week. EUR 5,000/month, plus profit sharing and a small equity stake |
| On-call | "You'll always be on call for urgent production incidents, including outside those hours. When something breaks, Simple Analytics needs to be your priority." |
| TL;DR | The first dedicated infra hire at a bootstrapped privacy-analytics company. They take over bare-metal production, co-lead a big analytics datastore migration, and are permanently on the hook for anything that breaks. |

## B) CV Match

| JD requirement | CV evidence (cv.md) | Match |
|---|---|---|
| Lead infrastructure architecture for the "Elasticsearch infrastructure to ClickHouse" migration | cv.md L14: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime, reporting directly to the CTO". L16: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub". L33: migration script with "complex processing logic". The approach transfers (dual-write, parallel run, cutover). Neither Elasticsearch nor ClickHouse appears anywhere, and the MTailor target was managed Firebase, not self-run servers | ⚠️ strong pattern, wrong engines, managed rather than self-hosted |
| Own production infrastructure on **bare metal** ("taking full responsibility") | L21: "Saved the company $5,000/month by migrating all services off AWS". L18: S3→GCS. Stacks: AWS S3/EC2/EBS, GCP. Linux Proficient (L85). Every environment on the CV is cloud or managed. No bare metal, hardware, networking, storage or backup operations | ❌ gap |
| Ansible, OpenTofu ("Configuration belongs in code, not hidden away in dashboards") | Nothing on cv.md. Standing IaC gap (#102, #214, #231) | ❌ gap |
| Grafana; "monitor, prevent and mitigate potential issues"; SRE is "a big part of this role" | Nothing on cv.md. No metrics, alerting, SLOs or incident work. Standing observability gap (#204, #214) | ❌ gap |
| Docker Compose, GitHub Actions, "improve our deployment pipelines" | L77: "Architected a microservices backend ... using Apache Kafka, Docker, and Kubernetes". No CI system named (standing gap, #231) | ⚠️ Docker yes, CI unevidenced |
| "You'll also write TypeScript" | L49: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js" (Dr Wealth, ~6 months). Node.js in every role since 2020 | ⚠️ JS/Node strong, TS thin |
| Always on call for production incidents | Never stated on cv.md. Owning a live zero-downtime cutover (L14) implies incident responsibility but does not show it | ⚠️ unevidenced |
| "Communicates really well", mostly async | Five years of US/Singapore remote work (L10, L27, L41, L55). L34: "Wrote documentation for fellow engineers". L35: "Trained the Ops team on the new Firebase Dashboard and backup procedures". Reported to the CTO twice (L14, L59) | ✅ |
| "Solve problems independently", ownership, "question existing decisions" | L31: hired as an Upwork contractor and became migration lead. L72: "Led a team of 4 developers". L21: cost-driven cloud exit | ✅ |
| "Speed matters, but losing customer data is unacceptable" | L14 zero downtime. L35 backup procedures training. L47: jobs over "2 million Firestore records" | ✅ adjacent (data integrity through migrations) |

**Score on requirements: 3 ✅, 4 ⚠️, 3 ❌.** All three ❌ sit on the core of the seat (bare metal, IaC, monitoring/SRE). JD weighting partly offsets them: "We don't care that much whether you know every tool in our stack".

### Gaps and mitigation

1. **Bare-metal operations (hard, core of the job).** The company exists to *not* use cloud, and Isaac's infra record is cloud-to-cloud. No adjacent bare-metal evidence. Mitigation: none credible before applying. A home-lab or Hetzner-dedicated project (Ansible-provisioned ClickHouse + Grafana, OpenTofu for DNS/firewall) would be the real fix. It is the same "dedicated-infra repo" lever noted in the pipeline findings of 2026-09-11.
2. **IaC + config management (Ansible/OpenTofu) (hard).** Not on cv.md. The JD treats "configuration belongs in code" as a core belief, so the interview will test it.
3. **Monitoring/SRE and permanent on-call (hard).** No Grafana, alerting or incident history. As the sole infra owner, this would be learned on the job against live customer data. That is a risk for both sides.
4. **ClickHouse/Elasticsearch (medium).** The migration method transfers. The engines (columnar OLAP, cluster sizing, replication, ingestion tuning) are new. SQL is still unevidenced on cv.md, which matters for ClickHouse.
5. **TypeScript (soft).** About 6 months in production plus 6+ years of JS/Node. Acceptable for "you'll also write TypeScript".

## C) Level and Strategy

- **Detected level:** senior single-owner infra (first and only DevOps hire, leads infra architecture).
- **Candidate's natural level for this archetype:** mid-level at most. Senior on migrations and Node backend, but no dedicated infra-practice years.
- **"Sell senior without lying" (if he applies anyway):**
  - "I've run a live datastore migration end to end: two-way sync between old and new stores, per-app cutover, zero downtime. That's the shape of an Elasticsearch to ClickHouse move."
  - "I took a company off AWS and saved $5,000 a month. Owning infrastructure costs is something I've done, not something I've read about."
  - Be explicit that bare metal, Ansible and OpenTofu would be new. The JD rewards that honesty ("AI should help you move faster, but you should understand the systems you're building").
- **If downleveled:** not applicable. There is one seat at one flat rate. The structural problem is comp plus on-call, not level.

## D) Comp and Demand

| Source | Data point | Read |
|---|---|---|
| JD (canonical) | **EUR 5,000/month**, profit sharing, small equity. Freelance outside the EU | EUR 60K/yr ≈ **$69K** (at ~1.15 USD/EUR). Unclear whether 24/32 h pays pro-rata |
| profile.yml | Target $80–120K, minimum $60K | At the floor. As a freelancer with no benefits, no paid leave and self-paid tax and pension, it is **below the floor in real terms** (`_shared.md`: contractor rates normally run 30–50% above employee base) |
| misujob DevOps salary guide | Senior DevOps/SRE contractors EUR 90–150/h; remote-EU senior DevOps employees EUR 90–130K | EUR 5K/month is well under market for the seniority the JD implies (blog-grade source) |
| Jobgether (Netguru freelance DevOps) / misc. postings | Remote European DevOps postings at EUR 60–72K gross | Simple Analytics' rate is at the bottom of employee-level remote-EU pay, and this is a freelance contract |
| Company financials | Bootstrapped since 2018 (Amsterdam). Public figures range from ~$414K ARR (c. 2023) to ~$36–45K MRR | Small but profitable-style business. Ability to pay EUR 60K is credible; ability to pay more is limited. Profit share and equity are small by design |

Sources: [Simple Analytics — About](https://www.simpleanalytics.com/about) · [Simple Analytics — Milestones](https://www.simpleanalytics.com/press/milestones) · [Indie Hackers — $45k MRR](https://indiehackers.com/post/tech/joining-a-technical-co-founder-and-growing-the-product-to-45k-mrr-119Zbnde7pTET0QOiZLH) · [Starter Story breakdown](https://www.starterstory.com/simple-analytics-breakdown) · [misujob DevOps salary guide](https://misujob.com/blog/devops-salary-guide) · [Jobgether — Netguru DevOps Engineer, freelance](https://jobgether.com/offer/6a286a10f4c10b449325d9cd-devops-engineer---freelance)

**Demand:** "preparing for a LOT more traffic" plus a ClickHouse migration means this hire is urgent ("Start: asap"). Bare-metal + ClickHouse skills are scarce, and a flat EUR 5K will mostly attract candidates from lower-cost regions, which helps Isaac's odds but not the comp.

**Comp read: 2.5/5.**

## E) Personalization Plan

No PDF. The form takes no CV. If Isaac applies against this recommendation, the inputs that matter are the GitHub profile and the "why do you love this" answer:

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | GitHub profile (github.com/zac-09) | Unknown public state | Pin one infra repo: Ansible-provisioned ClickHouse + Grafana on a single VPS, with OpenTofu for DNS | The profile is the CV for this form |
| 2 | "Why do you love this" | — | Lead with the MTailor live migration (two-way sync, zero downtime). State openly that bare metal would be new | Matches their first project and their honesty culture |
| 3 | Country field | — | "Uganda (UTC+3, 1–2 h ahead of Amsterdam)" | Timezone is a strength for on-call cover in EU hours |
| 4 | Hours | — | Ask whether EUR 5,000 is the 40 h rate and whether 32 h pays pro-rata | Comp clarity before investing time |
| 5 | cv.md maintenance (not for this application) | No CI/IaC/monitoring lines | Add only if real | Standing gap |

LinkedIn: no changes for this req. The standing advice to add a dedicated-infra project once built still applies.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Lead Elasticsearch → ClickHouse migration | Zero-downtime Parse→Firebase migration | 20+ live apps on an EOL stack | Move everything with no visible change | Two-way sync via Pub/Sub, per-app cutover, rollback at each step | Zero downtime, reported to the CTO | The acceptance test for a migration is that nobody notices |
| 2 | Owning infra cost / "prefer owning our problems" | Leaving AWS | Services spread across AWS and GCP | Cut infra cost | Migrated all services off AWS, S3→GCS by script | $5,000/month saved | Consolidation is an ops decision as much as a cost one |
| 3 | "Losing customer data is unacceptable" | Backup procedures and Ops training | New Firebase stack, Ops unfamiliar | Make data recovery operable by others | Wrote SDK docs and trained Ops on dashboard and backups | Ops ran backups unassisted | Backups only count once someone else has restored from them |
| 4 | Async communication | SDK docs for fellow engineers | Team moving to new Firebase SDKs | Unblock engineers without meetings | Node.js and Python SDK docs | Engineers onboarded from the docs | Written docs scale better than calls in a remote team |
| 5 | Monitoring / SRE / on-call (gap) | Answering the dedicated-infra gap straight | No Grafana/Ansible/bare-metal history | Answer without bluffing | Name the gap, show the migration ownership, offer a 30-day ramp plan | Credible on ownership, honest on tooling | Never let the interviewer find the gap |

Story-bank status: stories 1, 3, 4 and 5 are variants of existing cards in `interview-prep/story-bank.md` (zero-downtime migration, SDK docs/Ops training, answering the CI/CD gap straight). No new stories appended.

**Recommended case study:** the MongoDB↔Firestore two-way sync during the MTailor migration, framed as dual-write plus parallel-run, the standard pattern for Elasticsearch → ClickHouse.

**Red-flag questions:**
- *"Have you run bare-metal servers?"* No. Say so.
- *"Who covers you at 3 AM when you're the only infra person?"* Nobody. That is the structural risk of this seat, and it is part of why the score is low.
- *"Why infra and not backend?"* There is no honest strong answer. Backend is the primary target in profile.yml.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **2.5** | Dedicated-infra/SRE sole owner. Platform is "adjacent" in profile.yml. The migration project is the one strong overlap |
| Stack | **2.5** | 3 ✅ / 4 ⚠️ / 3 ❌. The ❌s (bare metal, Ansible/OpenTofu, Grafana/SRE) are the core of the seat. Partly offset by "we don't care whether you know every tool" |
| Seniority | **3.0** | Migration leadership is real. Lacks the infra-practice years the sole-owner seat implies |
| Remote / geo | **5.0** | "Location: anywhere", "Timezone: no restrictions", freelance outside the EU. Uganda (UTC+3) sits 1–2 h from Amsterdam |
| Comp | **2.5** | EUR 5K/month ≈ $69K freelance with no benefits, so at or below the $60K floor in real terms. Small profit share and equity. Permanent on-call is not priced in |
| Stability / growth | **3.0** | Bootstrapped and long-lived (since 2018), small team, growing traffic. Little room for career growth beyond the single seat |
| **Overall** | **2.8/5** | Raw mean (2.5+2.5+3.0+5.0+2.5+3.0)/6 = 3.08. Docked to 2.8 because the three hard gaps are exactly what the "trust with the infrastructure behind our entire business" bar tests, and because permanent solo on-call at floor freelance pay is a negative not captured in the comp score. **SKIP.** |

---

## Keywords extracted

DevOps, site reliability engineering, bare metal servers, self-hosted infrastructure, Elasticsearch, ClickHouse, data migration, infrastructure architecture, Ansible, OpenTofu, infrastructure as code, Grafana, monitoring and alerting, Docker Compose, GitHub Actions, deployment pipelines, TypeScript, on-call incident response, privacy-first analytics, async communication, Shape Up, configuration as code, reliability, data integrity
