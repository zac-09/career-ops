# Evaluation: Checkly — Senior Software Engineer, Infrastructure

**Date:** 2026-05-04
**Archetype:** Platform / Infrastructure Engineer (hybrid AWS + bare metal, sandboxed code execution)
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/checkly/46868722-ae9b-47ef-8dea-6d1264c5bbde
**PDF:** ❌ (skipped — recommended SKIP; quality-over-quantity per CLAUDE.md)
**Verification:** unconfirmed (batch mode — Ashby SPA returned only "Jobs"; JD reconstructed from ZipRecruiter, dynamitejobs.com, kubernetes-jobs, and Checkly careers page references to the same Ashby ID)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Platform / Infrastructure Engineer — hybrid cloud + bare metal |
| Domain | Application monitoring SaaS — securely run sandboxed code and AI Agents with industry-leading cost efficiency |
| Function | Evolve hybrid AWS + bare metal infra; investigate problems down to packet capture and process memory; reliability + cost; collaborate with product engineers to improve DX |
| Seniority | Senior |
| Remote | Remote, **UTC-3 to UTC+3** ✅ Uganda is UTC+3 (eligible, edge of window) |
| Team size | Small remote-first team alongside Staff and Senior engineers |
| TL;DR | Adjacent fit, not core. Isaac is a backend builder with Docker/Kubernetes orchestration experience (CodeBits microservices) but NOT a packet-capture / process-memory / bare-metal engineer. The JD specifically wants someone who debugs at the kernel/network layer. CV maps to ~50% of requirements. Score reflects: stack adjacency yes, depth-of-infra-debugging no. Recommend SKIP unless Isaac is intentionally pivoting toward platform/infra. |

## B) CV Match

| JD Requirement | CV Match | Status |
|----------------|----------|--------|
| Hands-on bare-metal + cloud infra for production services | Docker + Kubernetes microservices (CodeBits) on cloud only; no bare-metal experience | Moderate — cloud yes, bare metal no |
| Hybrid AWS + bare metal evolution | AWS→GCP migration at MTailor + GCP architecture; no bare-metal datacenter work | Gap — partial (cloud migration ≠ bare-metal architecture) |
| Securely run sandboxed code / AI Agents | No specific sandbox/container-isolation work in CV; Docker/K8s exposure is application-level | Gap |
| Investigation down to packet capture, process memory | Not in CV — Isaac's debugging is application-level (logs, traces, drift jobs) | **Hard gap** |
| Cost efficiency at scale | "Saved ~$5,000/month by migrating off AWS" (MTailor) — direct cost-eng evidence | Strong |
| Reliability under ad-hoc + scheduled workloads | Two-way Pub/Sub sync at MTailor (live cutover) + USSD service on flaky 2G (CodeBits) | Moderate |
| Collaborate with product engineers / improve DX | Wrote SDK guides + trained Ops team at MTailor | Moderate |
| Autonomous, self-motivated remote | 5+ yrs remote (MTailor, Dr Wealth, Mind2matter); CTO-direct | Strong |
| UTC-3 to UTC+3 timezone | Uganda UTC+3 — at edge | Match (edge case) |

**Gaps:**

1. **Packet capture / process memory debugging** — JD's signature requirement. Isaac has not done tcpdump/Wireshark/strace/eBPF work. This is the strongest signal that the role is misaligned. Mitigation: weak — frame the USSD-on-2G work (debugging at the network-quality layer) and offer to ramp on Linux-internals topics; not a credible substitute.
2. **Bare-metal infrastructure** — JD explicitly mentions hybrid AWS + bare metal, with bare-metal listed as a hands-on requirement. CV is 100% cloud (Firebase, GCP, AWS, Heroku). Mitigation: none authentic.
3. **Sandboxed code / AI agent infra** — emerging area, no direct experience. Mitigation: reference Docker/K8s isolation work at CodeBits, but the JD wants deeper isolation primitives (gVisor, Firecracker, etc.).

## C) Level and Strategy

- **JD level:** Senior Software Engineer (Infra). **Isaac's natural level:** Senior Backend Engineer. Stack overlap exists (Node/TS, Docker, K8s, AWS/GCP) but the role's center of gravity (packet-level debugging, bare-metal evolution) is outside Isaac's track record.
- **Sell senior without lying:** Cannot honestly position this. The role asks for systems-level debugging instincts that need to come from years of doing it.
- **Comparison to #091 (Checkly Backend):** That role is a 4.0; this is a 3.0. Same company, very different role center.
- **Downlevel risk:** Not applicable — risk here is misfit at the senior level, not downleveling.

## D) Comp and Demand

| Signal | Data | Source |
|--------|------|--------|
| Salary stated | Same Checkly transparent location-adjusted formula | JD |
| Senior Platform/Infra (EU-remote) | $100K–$150K USD typical | Glassdoor / Levels.fyi |
| Bare-metal + AI sandbox specialist premium | +10–20% over generic platform eng | Market |

Comp is strong, but Isaac would be applying as an underqualified candidate — recruiter time risk is real.

## E) Personalization Plan

(Skip — recommending SKIP. If Isaac decides to apply anyway, lead with the cost-savings story and the CodeBits microservices as the only credible signal.)

## F) Interview Prep

(Skipping — not recommending application.)

---

## Recommended action

**SKIP (or DEFER to Backend role #091).** Stack-adjacent but role-misaligned. The JD's signature requirements — packet capture, process memory debugging, bare-metal infra evolution, sandboxed code execution for AI agents — sit outside Isaac's track record. Applying here would be a low-quality use of recruiter attention while a much stronger application (#091, Checkly Backend) exists at the same company. Recommend Isaac apply ONLY to #091 and let internal mobility surface this role later if it becomes a fit. Per CLAUDE.md ethical-use rules: quality over quantity. Score 3.0 is the floor of "PDF allowed" but the recommendation overrides — the user can choose to skip the apply step even with HTML/PDF ready.

---

## Keywords extracted

Infrastructure, bare metal, AWS, hybrid cloud, sandboxed code, AI agents, packet capture, process memory, debugging, reliability, cost efficiency, Kubernetes, Linux, observability, on-call, remote-first, UTC-3 to UTC+3, async, developer experience
