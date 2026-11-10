# Evaluation: Cloudflare — Senior Software Engineer, Egress

**Date:** 2026-05-25
**Archetype:** Platform / Infrastructure Engineer (network egress, edge routing)
**Score:** 2.5/5
**URL:** https://job-boards.greenhouse.io/cloudflare/jobs/7463793
**PDF:** ❌ not generated (SKIP — Cloudflare hires in specific listed countries only; Uganda not on the list)
**Verification:** unconfirmed (batch mode — WebFetch/curl blocked; eligibility not retrieved. Evaluation based on role title "Senior Software Engineer - Egress" and the user-provided stack hint Rust/Go. Egress = outbound traffic routing/IP management at edge. User must live-verify eligibility.)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform / Infrastructure — network egress, IP routing, edge traffic |
| Domain | Cloudflare's egress IP management, outbound traffic shaping, BYOIP / Aegis-style products |
| Function | Build + operate the systems that move customer traffic OUT of Cloudflare's edge to origins / third-party APIs |
| Seniority | Senior |
| Remote | Cloudflare country-locked. **Uganda not on the list.** |
| Team size | Not stated |
| TL;DR | Network-edge + Rust/Go primary. This is networking-systems-engineer territory (BGP, IP allocation, routing logic, TCP-level work). Far from Isaac's application-layer Node/Firebase profile. Stack gap + domain gap + geo gap. SKIP. |

## B) CV Match

| JD Requirement (inferred — egress = networking + Rust/Go) | CV Match | Status |
|---|---|---|
| Rust in production | Rust Intermediate (cv.md L87); no shipped Rust | Gap |
| Go in production | Go Intermediate (cv.md L87); no shipped Go | Gap |
| Networking / TCP-IP / BGP / routing | Not in CV | Gap |
| Edge systems / low-latency | Not in CV | Gap |
| Backend services at scale | 5+ yrs Node + Kafka microservices (cv.md L23, L77) | Moderate |
| Distributed systems | Kafka + K8s (cv.md L77–79) | Moderate |
| Linux | Proficient (cv.md L85) | Moderate |
| Production on-call | MTailor migration; CTO-direct (cv.md L14) | Moderate |

**Gaps:**

1. **Rust + Go production** — both Intermediate, neither shipped. Hard blocker.
2. **Networking systems depth** — egress work requires comfort with IP routing, BGP, TCP/IP at the layer that systems engineers, not application engineers, operate in. Isaac's profile is application-layer.
3. **Geographic eligibility** — Uganda not on Cloudflare's list.

## C) Level and Strategy

- **JD level:** Senior systems engineer with networking + Rust. **Isaac's natural level:** Not a match. This is a specialist role.
- **Honest assessment:** Not Isaac's archetype. Even with downlevel + remote, the networking specialism is the blocker.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| Senior SWE Egress (Cloudflare US) | $200K–$260K + equity | Levels.fyi |
| Networking systems engineer demand | High, specialist talent pool | Market |

## E) Personalization Plan

Not worth personalizing. Skip.

## F) Interview Prep

Skipping — not a realistic shot.

## Global score

| Dimension | Score | Notes |
|---|---|---|
| Archetype fit | 2.5 | Networking-systems specialism is outside Isaac's ladder |
| Stack match | 1.5 | Rust + Go both intermediate, no production |
| Comp | 4.5 | Strong bands |
| Geography | 1.0 | Uganda not on Cloudflare's list |
| Growth | 4.0 | Tier-1 brand |
| Time-to-offer realism | 1.0 | Triple gap |
| **Weighted** | **2.5** | SKIP |

## Keywords extracted

Rust, Go, networking, egress, BGP, IP routing, TCP/IP, edge compute, distributed systems, Linux, production systems, on-call, multi-tenant, low-latency, traffic shaping, BYOIP, outbound proxy, observability, performance, reliability
