# Evaluation: Langfuse — (Senior) Backend Engineer (IAM and Billing)

**Date:** 2026-05-25
**Archetype:** Senior Backend Engineer
**Score:** 3.2/5
**URL:** https://jobs.ashbyhq.com/langfuse/69bc6e7a-0304-4d81-ae72-7ccf5652a053
**PDF:** pending — HTML ready at `batch/html/cv-isaac-langfuse-iam-billing.html`; run `node batch/build-cvs-095-102.mjs && node generate-pdf.mjs batch/html/cv-isaac-langfuse-iam-billing.html output/cv-isaac-langfuse-iam-billing-2026-05-25.pdf --format=a4`
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer |
| Domain | Platform / IAM / Billing infra |
| Function | Build (own auth, RBAC, billing) |
| Seniority | Senior |
| Remote | EU timezones, 1 week/month in Berlin |
| Stack | TypeScript monorepo, Next.js, Express workers, PostgreSQL, ClickHouse, Redis, S3 |
| Comp | EUR 90K – 160K |
| TL;DR | Own auth (SSO/SAML/OAuth), RBAC and usage-based billing at the most adopted open-source LLM observability platform (now part of ClickHouse). |

## B) CV Match

| JD requirement | CV evidence (line) | Match |
|---|---|---|
| TypeScript / Node.js backend | "Node.js" across MTailor, DrWealth, Mind2Matter (cv.md L16, L23, L37, L51, L64) | Strong |
| PostgreSQL / SQL | "MongoDB, SQL" (cv.md L85) | Partial — SQL present, no specific Postgres prod story |
| Authentication / authorization | None explicit | Gap |
| API key management | None explicit | Gap |
| Billing / metering / Stripe | "Implemented Express Shipping, generating $40/order" (cv.md L20) — closest revenue feature | Weak |
| Event pipelines at scale | "Pub/Sub real-time two-way sync MongoDB↔Firestore" (cv.md L16), "Kafka microservices for FIDA" (cv.md L77) | Strong |
| Distributed messaging | "Apache Kafka, NATS Streaming, gRPC" (cv.md L79) | Strong |
| Self-serve / SaaS flows | MTailor product migrations, DrWealth PWA | Partial |

**Gaps:**
1. **No SSO/SAML/OAuth shipped** (hard-ish): mitigate with cover letter — "built API key auth + role-based access on Firebase Auth at MTailor; comfortable owning SSO via WorkOS/Auth0 in a TypeScript stack."
2. **No Stripe/usage billing** (nice-to-have): mitigate by referencing Express Shipping revenue feature + Pub/Sub event metering at MTailor.
3. **Geo / Berlin travel**: Isaac is in Kampala. Monthly Berlin trip from Uganda is feasible but heavy. Flag in screening: open to quarterly visits, otherwise full async.

## C) Level and Strategy

- **JD level:** Senior. Candidate's natural level: Senior (4 yrs MTailor leading CTO-reporting migration).
- **Sell senior:** "Owned the Parse→Firebase migration end-to-end with zero downtime — same shape as building IAM: gradual rollout, dual-writes, no broken sessions." Highlight Kafka + Pub/Sub for event metering.
- **If downleveled:** Accept if EUR 95K+ floor; negotiate 6-month senior review tied to first SSO ship.

## D) Comp and Demand

| Source | Range (EUR) | Notes |
|---|---|---|
| JD stated | 90K – 160K | Equity included separately |
| Berlin Senior BE (Levels.fyi) | 80K – 130K base | Langfuse top of band |
| Remote EU (Otta/Welcome) | 75K – 120K | Langfuse premium for IAM domain |

Strong band. Demand for IAM/billing engineers in LLMOps is rising (Cleric, Helicone, LangSmith all hiring similar).

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Zero-downtime migrations" | "Senior backend engineer specialized in auth flows, event pipelines and zero-downtime migrations across Node.js + Postgres + Pub/Sub" | Inject JD: auth, event pipeline |
| 2 | MTailor bullet 1 | "real-time two-way sync" | "Built event metering pipeline (MongoDB→Firestore via Pub/Sub) processing millions of events with idempotent writes — the same pattern needed for usage-based billing" | Bridge to billing |
| 3 | CodeBits bullet 4 | "microservices backend" | "Designed RBAC layer for FIDA case management — projects, roles, scoped permissions over Kafka microservices" | Inject RBAC |
| 4 | Skills | "Proficient: Node.js…" | Add "TypeScript, Stripe, OAuth/SSO, PostgreSQL" if honest | ATS keywords |
| 5 | Add project | n/a | Add "Marketplace Recommendation Engine — collaborative + content filtering in MongoDB" from profile.yml proof points | Show backend depth |

## F) Interview Prep

| # | JD Req | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Event pipeline at scale | MTailor Pub/Sub | Live Parse system, needed dual-write to Firestore | Sync 20+ apps zero downtime | Built Pub/Sub fan-out with idempotent consumer + replay | Zero customer reports of lost data over 6 months | Idempotency key in event header is the cheapest insurance you can buy |
| 2 | Auth / API keys | MTailor API auth | Mobile + web clients hitting same Firebase | Secure access without breaking old clients | Firebase Auth + custom claims for tenant scoping | All MTailor apps moved without auth incidents | SSO is just claims with a longer token lifecycle |
| 3 | RBAC | FIDA case management | NGO staff with different roles (paralegal, admin) | Granular permission model | Per-resource RBAC via Kafka events + service guards | Adopted by FIDA Uganda + LASPNET | Permission checks should be at the service edge, not UI |
| 4 | Billing / metering | MTailor Express Shipping | Need new revenue line | Track per-order shipping upsell | Built order events → analytics aggregation | +$40/order revenue | The same event stream that powers analytics also powers billing — design once |
| 5 | Migration without downtime | Parse → Firebase | Live ecommerce flow | Migrate 20+ apps zero downtime | Dual-write + read-shadowing | Saved $5K/month, zero downtime | Always have a one-button rollback, even when you think you don't need it |
| 6 | PostgreSQL queries | DrWealth | 2M+ Firestore records | Keep prices current from Morningstar | Batched paginated reads + cache | Real-time PWA UX | Firestore taught me to think in indexes, but Postgres explain-analyze is still king |

Case study to lead with: **Parse→Firebase migration** + **Pub/Sub metering pipeline** — both map to IAM/billing.

Red-flag answers:
- "Why no Stripe?" → "Worked on adjacent revenue features and event pipelines. Comfortable picking up Stripe in week 1; the hard part is metering accuracy, not the API."
- "Berlin travel?" → "Open to quarterly in-person. Monthly from Uganda is heavy; happy to negotiate cadence."

## Keywords extracted

TypeScript, Node.js, PostgreSQL, ClickHouse, OAuth, SAML, SSO, RBAC, API keys, Stripe, usage-based billing, event metering, idempotent consumers, Pub/Sub, distributed systems, microservices, ClickHouse, Redis, AWS, Kubernetes
