# Evaluation: Automattic — Senior Systems Engineer

**Date:** 2026-08-07
**Archetype:** Platform/Infrastructure Engineer — large-scale web-hosting operations (Nginx/MySQL/PHP at global scale)
**Score:** 2.2/5
**URL:** https://job-boards.greenhouse.io/automatticcareers/jobs/5980233
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** API (Greenhouse JSON, 2026-08-07) — `boards-api.greenhouse.io/v1/boards/automatticcareers/jobs/5980233?questions=true` returned 200 with full JD + questions. Live and actively maintained (updated 2026-08-06), but first published 2024-05-23 — a 2+ year evergreen posting, so expect a slow, high-bar pipeline rather than an urgent req.
**Recommendation:** SKIP — two independent reasons. (1) **Fit:** the four load-bearing requirements — very large Nginx setups, very large MySQL/MariaDB deployments, PHP debugging at scale, and kernel/filesystem/network internals — are all absent from Isaac's CV; his infra experience (GCP/Firebase, Kafka/K8s at NGO scale) is a different species from 30-datacenter bare-metal hosting for billions of pageviews. (2) **Etiquette:** Isaac's Automattic application #130 (Experienced Software Engineer, 3.7/5) is still `Applied` — Automattic's hiring process is famously deliberate, and running a second, weaker application in parallel risks tainting the stronger one. If #130 is eventually rejected AND Isaac wants Automattic, the move is to strengthen the SWE profile, not to sidestep into Systems.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD location | "Remote" — "fully-remote company"; 1500+ people, ~96 countries | ✅ Global |
| Salary policy | "salary ranges are global, regardless of location, and we pay in local currency" | ✅ no geo pay penalty |
| Screening questions | Region dropdown includes "Europe - Africa" as a first-class option; no work-auth or country gate | ✅ |
| Travel | "2-3 week post-COVID travel per year" for team meetups | ✅ compatible with profile.yml travel availability |
| Precedent | #130 (Experienced SWE): application from Uganda accepted 2026-06-09 | ✅ |

**Verdict: geo clean — one of the best geo profiles anywhere (global pay bands, Africa explicitly listed).** The problem is fit, not geography.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform/Infra — Systems team running Automattic's own global infrastructure (30 private data centers, 6 continents, tens of billions of pageviews/month) |
| Domain | High availability, performance, security for WordPress.com/Tumblr/WooCommerce hosting: Nginx, MySQL/MariaDB, PHP at extreme scale, low-level systems (filesystems, network, memory, kernel) |
| Function | Build + operate (proactive planning, rapid failure response, developer enablement) |
| Seniority | Senior |
| Remote | Fully remote, global, global pay bands |
| Team size | "Small and vertically integrated team responsible for a huge setup" |
| Comp | Posted: $120,000–$180,000+ USD, location-independent | 
| TL;DR | A bare-metal, LAMP-at-planetary-scale operations seat where every named technology (Nginx, MySQL/MariaDB, PHP, kernel internals) is missing from Isaac's cloud-managed-services background. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **Maintained large Nginx setups (advanced routing, load balancing, HA)** | Nothing — Isaac's serving layer has been Firebase Hosting/Cloud Functions/Heroku (managed) | ❌ |
| **Very large MySQL/MariaDB deployments (performance, uptime, integrity)** | cv.md L85: SQL Proficient, but production history is MongoDB/Firestore; no MySQL operations at any scale | ❌ |
| **Running and debugging PHP applications at scale** | No PHP anywhere on cv.md (same gap flagged in #130 as "PHP/WordPress soft gap" — here it is a hard requirement, not soft) | ❌ |
| **Lower-level systems: filesystems, network, memory management, kernel internals** | Linux Proficient (cv.md L85); Docker/K8s (L77); no systems-internals evidence | ⚠️ thin |
| **Deep operational experience with very large public-facing hosting systems** | MTailor/Dr Wealth production ops are orders of magnitude below "billions of pageviews from 30 data centers"; Kafka/K8s microservices at NGO scale (L77) | ❌ scale mismatch |
| Autonomously architect, prototype, maintain solutions | Migration program ownership (L14), microservices architecture (L77) | ✅ |
| Extreme attention to detail / operational excellence | Zero-downtime record across 20+ app migrations (L14) | ✅ |
| Availability via automation and rapid response | Two-way sync with idempotent failure handling (L16) | ⚠️ transferable |
| 2-3 weeks/year travel | profile.yml: "1–2 weeks/quarter if required" | ✅ |

**Gaps and mitigation:**

1. **Nginx + MySQL + PHP triad (hard blockers, all three).** These are the daily tools of the team, listed as the top three fit criteria. No adjacent-experience argument survives contact with "very large deployments... unparalleled level of performance." *Mitigation:* none realistic — this is a specialist ops profile built over years, not a portfolio-sprint gap.
2. **Bare-metal scale.** Isaac's strength is cloud-managed services (the opposite operating model: Automattic runs its own datacenters partly to avoid GCP-style abstractions). *Mitigation:* n/a.
3. **Screening question #2** ("largest public-facing infrastructure you have managed and what was your role") forces the scale mismatch into the first form field — there is no framing that survives it.

## C) Level and Strategy

1. **JD level vs candidate:** Senior Systems is a specialist track; Isaac's Platform/Infra archetype fit is "adjacent" (profile.yml) and his evidence is developer-platform, not hosting-operations. Effective mismatch is track, not level.
2. **"Sell senior without lying":** Not viable here. The honest Automattic play remains the generalist SWE track — which is exactly application #130, already in flight (3.7/5, applied 2026-06-09, trial-project stage expected).
3. **If downleveled:** N/A — SKIP.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | $120,000–$180,000+ USD, global bands, "may go beyond the range for the right candidate" | JD (Greenhouse API, 2026-08-07) |
| vs Isaac's target | Comfortably clears the $80–120K target — the comp is the temptation here | config/profile.yml |
| Posting age | First published 2024-05-23, still updated (2026-08-06) — evergreen pipeline role, continuously hiring at a high bar | Greenhouse API |
| Company | 1500+ Automatticians, 20th year, WordPress.com/Tumblr/WooCommerce; open vacation policy, straightforward base salary | JD |
| Demand | LAMP-at-scale systems engineers are a rare, senior specialist pool; evergreen posting = they wait for exact fits | Market context |

**Comp verdict:** excellent package, unreachable seat — high comp on a hard-gated specialist profile is exactly the trap the ethical-use rule exists for.

## E) Personalization Plan

Not applicable — SKIP. The Automattic-relevant personalization already happened in #130. If Isaac wants to increase Automattic odds, the levers are on the existing application: monitor MyGreenhouse status, prepare for the trial project (their known next stage), and do not open a parallel process.

## F) Interview Prep

Not applicable — SKIP. Relevant preparation lives in report #130 (Experienced Software Engineer), which remains the active Automattic thread.

- **If Automattic reaches out on #130:** the Systems JD is still useful reading — it shows what their infra values (availability, automation, developer friction removal), good context for trial-project judgment calls.

---

## Story bank candidates

None — no new material; existing stories were already mapped in #130.

## Keywords extracted

Nginx, load balancing, high availability, MySQL, MariaDB, PHP at scale, kernel internals, filesystems, memory management, network, data centers, bare metal, uptime, data integrity, backups, disaster recovery, monitoring, security, developer enablement, WordPress.com, Tumblr, WooCommerce, global remote, distributed company
