# Evaluation: Hostaway — Senior Backend Engineer, Integrations (100% Remote - EMEA)

**Date:** 2026-08-19
**Archetype:** Senior Backend Engineer (primary archetype) — but PHP/Go stack family, not Node/TS
**Score:** 2.3/5
**URL:** https://careers.hostaway.com/o/senior-backend-engineer-integrations-100-remote-emea-4
**PDF:** none (score < 3.0)
**Verification:** live-verified via Playwright 2026-08-19 (full JD + Apply tab + LinkedIn/Indeed apply buttons rendered; Recruitee listing "Vienna, Austria +18 more" locations)
**Recommendation:** SKIP — weak match. The stack check the scan flagged came back negative: this Integrations req is on the same PHP/Go-primary family as the booking-engine req (2026-07-09 triage), not a Node seat. Hard requirement gap on primary language.

---

## Geo Check — CONDITIONAL PASS (moot given stack)

- JD header: "candidate must be within EMEA… please only apply if you are physically based within EMEA." Listing shows Vienna +18 more locations (not expanded — verdict not needed).
- #129 precedent: Hostaway's EMEA lists have named African countries, and "100% Remote: work from anywhere within your country of residence" + "Geographic Specific Benefits… depend on the country of the applicant" is international-employer language ("team members in over 40 countries"). Uganda (EAT, UTC+3) sits inside EMEA time bands.
- Geo would likely pass; it is not the kill criterion here.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer — PHP/Go family |
| Domain | Vacation-rental SaaS (unicorn, profitable); Core team owning OTA integrations (Airbnb/Booking-type partners) |
| Function | Build/operate high-traffic integration services; extract services from a PHP monolith; ship APIs for agentic clients |
| Seniority | 6+ yrs backend |
| Remote | 100% remote within EMEA |
| Comp | Undisclosed; "market rates in the country of the applicant" = location-indexed |
| TL;DR | OTA-integrations backend seat at a travel-SaaS unicorn — attractive domain, wrong primary stack. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|---|---|---|
| Strong-level proficiency in PHP and/or Golang | cv.md Skills: Go (intermediate); PHP absent | ❌ HARD GAP |
| Design/build/operate backend services in PHP and Go | No PHP anywhere in cv.md | ❌ |
| 6+ yrs backend engineering | Jan 2020 → present ≈ 6.5 yrs | ✅ |
| High-traffic customer-facing systems | cv.md: 20+ app migration, 2M+ Firestore records real-time pricing | ✅ |
| Decomposing monoliths / extracting services | cv.md MTailor: Parse monolith → Firebase/GCP services, zero downtime; CodeBits Kafka microservices | ✅ strong |
| API design (REST/GraphQL), versioning, consumability | cv.md: Express.js APIs, gRPC provider contract | ✅ |
| APIs for AI agents / LLM-driven clients (bonus) | career-ops (open-source agentic pipeline), WhatsApp+OpenAI chatbot | ✅ bonus covered |
| AI coding tools (Claude Code, Cursor) daily | career-ops is built ON Claude Code | ✅ differentiator |
| Message queues (SQS a plus) | Pub/Sub, Kafka, NATS Streaming | ✅ adjacent |
| Event-driven SOA + DDD | Kafka microservices architecture at CodeBits | ⚠️ partial (no explicit DDD) |

**The one gap is the load-bearing one.** Everything else matches, but "Strong-level proficiency in PHP and/or Golang" with day-one delivery in a PHP monolith is a primary-language hard gate. Isaac's Go is self-assessed intermediate; PHP is zero. Prior Hostaway triage (booking-engine, 2026-07-09) reached the same verdict on the same family.

## C) Level and Strategy

Not applicable — do not apply. If Hostaway ever posts a Node/TypeScript backend req (their frontend/some services teams may differ), re-evaluate immediately: geo, domain, AI-tooling culture, and monolith-extraction narrative are all favorable.

## D) Comp and Demand

- Undisclosed; explicitly location-indexed ("market rates in the country of the applicant") — Uganda banding risk would apply even if stack matched.
- Company: profitable unicorn, 20K+ customers, active hiring (multiple EMEA reqs on Recruitee).

## E) / F)

Skipped — no application. No new STAR stories; monolith-extraction story already banked.

## Keywords extracted

PHP, Golang, OTA integrations, monolith decomposition, service extraction, high-traffic systems, REST, GraphQL, API versioning, agentic interfaces, AI coding tools, Claude Code, AWS, SQS, DDD, event-driven architecture, EMEA remote
