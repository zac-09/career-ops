# Evaluation: Langfuse — (Senior) Backend Engineer

**Date:** 2026-05-25
**Archetype:** Senior Backend Engineer
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/langfuse/dff72f11-75da-40b9-88b3-470f080b0906
**PDF:** pending — HTML ready at `batch/html/cv-isaac-langfuse-backend.html`; run `node batch/build-cvs-095-102.mjs && node generate-pdf.mjs batch/html/cv-isaac-langfuse-backend.html output/cv-isaac-langfuse-backend-2026-05-25.pdf --format=a4`
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer |
| Domain | LLM observability / data pipelines |
| Function | Build (re-architect ingestion at billions of events/month) |
| Seniority | Senior |
| Remote | EU timezones, 1 week/month in Berlin |
| Stack | TypeScript monorepo, Next.js, Express workers, PostgreSQL, ClickHouse, Redis, S3 |
| Comp | EUR 90K – 160K (per IAM sister role; same band) |
| TL;DR | Scale ingestion pipeline (billions of monthly events) and explore ClickHouse schemas/materialized views for new query patterns. Now part of ClickHouse since Jan 2026. |

## B) CV Match

| JD requirement | CV evidence (line) | Match |
|---|---|---|
| TypeScript / Node.js | cv.md L16, L23, L37, L49, L64, L79 | Strong |
| Event ingestion at scale | "real-time two-way sync MongoDB↔Firestore via Pub/Sub" (cv.md L16) | Strong |
| ClickHouse / OLAP | None explicit (MongoDB + Firestore only) | Gap |
| Background workers / queues | "Express on Heroku + Cloud Functions" (cv.md L49), "Kafka microservices" (cv.md L77) | Strong |
| Materialized views / query optimization | "Ad-hoc jobs to query 2M+ Firestore records" (cv.md L47) | Partial |
| Distributed systems | "Apache Kafka, NATS Streaming, gRPC, Docker, K8s" (cv.md L77-79) | Strong |
| Cost optimization | "Saved $5,000/month by migrating off AWS" (cv.md L21) | Strong |
| LLM / AI domain | None on CV | Gap (mitigated by Healthcare WhatsApp chatbot proof point — OpenAI + Vision OCR, profile.yml) |

**Gaps:**
1. **ClickHouse** (medium): no production ClickHouse, but heavy OLAP-style work on Firestore + Kafka. Mitigate: "Comfortable reasoning about column-store tradeoffs; have shipped equivalent analytic pipelines on Firestore + warehouse."
2. **LLMOps domain knowledge** (nice-to-have): mitigate with WhatsApp chatbot proof point (OpenAI integration) + interest in observability.
3. **Berlin travel** (geo): same as #095 — flag quarterly cadence proposal.

## C) Level and Strategy

- JD level: Senior; candidate natural level: Senior.
- **Sell senior:** "Re-architected ingestion when MTailor's Parse pipeline was at limits — same problem you face with ClickHouse schema choice." Lead with cost-savings number ($5K/month) and zero-downtime culture.
- **If downleveled:** Accept if EUR 100K+; ask for ClickHouse ramp budget.

## D) Comp and Demand

Same band as IAM role: EUR 90-160K. Sister role at ClickHouse (parent) lists Senior BE at EUR 100-140K base + equity. Demand high — LLM observability is one of the hottest infra subsegments of 2026.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "zero-downtime migrations" | "Backend engineer specialized in high-throughput event pipelines and zero-downtime migrations on Node.js + TypeScript, with Kafka and Pub/Sub experience scaling to millions of events" | Inject ingestion + scale |
| 2 | MTailor bullet 1 | sync description | Add "designed idempotent consumer pattern; pipeline handled production traffic at peak without dropped events" | Match ingestion focus |
| 3 | DrWealth bullet 1 | "Ad-hoc jobs to query over 2M Firestore records" | "Built batch query layer reading 2M+ records with paginated cursors and pre-aggregated views — same pattern as ClickHouse materialized views" | Bridge to ClickHouse |
| 4 | Add OpenAI proof | n/a | Add WhatsApp chatbot project: "OpenAI + Google Vision OCR pipeline via WhatsApp Business API" | LLM domain signal |
| 5 | Skills | current | Add "ClickHouse (reading), OpenTelemetry, OLAP, materialized views" if honest | ATS |

## F) Interview Prep

| # | JD Req | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | High-throughput ingestion | MTailor Pub/Sub sync | 20+ apps, live production traffic | Sync dual-write zero downtime | Built idempotent consumer + dead-letter queue | Zero data loss over 6 months | Throughput is easy; correctness under retries is the real test |
| 2 | Cost optimization | AWS exit | Bloated AWS bill | Cut spend without losing reliability | Lifted services to Firebase/GCP + GCS | $5K/month saved | Compute pricing models drive architecture more than people admit |
| 3 | OLAP / query patterns | DrWealth Firestore | 2M+ records, real-time PWA | Keep stock prices current | Batched reads + cache + pre-aggregation | Real-time UX at low cost | Pre-aggregating writes is almost always cheaper than querying smart |
| 4 | Distributed systems | FIDA Kafka microservices | NGO case management, multi-tenant | Reliable async processing | Kafka + Docker + K8s microservice graph | Adopted by FIDA + LASPNET | Microservices only pay off when you have real failure isolation needs |
| 5 | LLM integration | Healthcare chatbot (proof point) | Patients need quick prescription parsing | OCR via chat interface | OpenAI + Vision OCR + WhatsApp Business API | Working prototype | Treat LLM calls like any other flaky third party — retry + observe |
| 6 | Migration without downtime | Parse → Firebase | Live ecommerce | Zero downtime over 20+ apps | Dual-write + shadow read + flag flip | Zero outages | Migrations are 80% rollback design, 20% writing the new code |

Lead case study: **Pub/Sub sync pipeline** — closest analog to billions-of-events ingestion.

## Keywords extracted

TypeScript, Node.js, Next.js, Express, PostgreSQL, ClickHouse, Redis, S3, Kafka, Pub/Sub, OpenTelemetry, event ingestion, materialized views, idempotent consumers, distributed systems, observability, LLM, throughput optimization, cost optimization, microservices
