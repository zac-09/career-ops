# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

### [Lead end-to-end backend project] Zero-downtime Parse→Firebase migration
**Source:** Report #127 — Buffer — Senior Backend Engineer (Platform and API)
**S (Situation):** MTailor was running on Parse/MongoDB facing EOL, with 20+ production applications and live customer traffic.
**T (Task):** Migrate everything to Firebase/GCP without user-visible downtime, reporting directly to the CTO.
**A (Action):** Built a real-time two-way MongoDB↔Firestore sync using Node.js + Google Pub/Sub. Cut over services one by one with shadow traffic; held the option to roll any service back for the entire migration window.
**R (Result):** All 20+ apps migrated, zero outages, recurring $5,000/month infrastructure savings.
**Reflection:** A two-way sync is more useful than a one-shot dump — it gives you the option to roll back any service for the entire cutover window.
**Best for questions about:** Migrations, distributed systems, consistency, leading end-to-end backend projects, zero-downtime cutover, AWS/GCP, MongoDB.

### [Public API / extensibility platform] gRPC service bus for USSD legal-aid providers
**Source:** Report #127 — Buffer — Senior Backend Engineer (Platform and API)
**S (Situation):** NGOs (FIDA, LASPNET) wanted multiple independent USSD providers to integrate with a central legal-aid backend across Uganda.
**T (Task):** Build a stable, versioned interface that third-party providers could integrate against without bespoke per-provider code.
**A (Action):** Designed protobuf schemas with explicit versioning, used Kafka events for async fanout and gRPC for synchronous calls. Documented the contract for external providers.
**R (Result):** Multiple USSD providers integrated against the same surface with no per-provider custom code.
**Reflection:** Schema-first design pays compound interest — every "small" field becomes a contract you live with.
**Best for questions about:** API design, public APIs, extensibility platforms, gRPC, schema versioning, backward compatibility, multi-tenant integrations.

### [AI-assisted engineering workflow] Career-ops agentic pipeline
**Source:** Report #127 — Buffer — Senior Backend Engineer (Platform and API)
**S (Situation):** Manual job-portal scanning was slow; wanted a high-signal way to find and tailor applications to senior backend roles.
**T (Task):** Build an AI-assisted system that evaluates offers, generates tailored CVs, and tracks applications end to end.
**A (Action):** Built career-ops on top of Claude Code: Playwright for live URL verification, YAML config, Node.js for PDF generation, agentic batch processing. Open-sourced.
**R (Result):** Evaluated 100+ offers, generated tailored PDFs, landed senior interviews.
**Reflection:** Agentic loops fail when the model can't verify ground truth — Playwright snapshots beat WebSearch every time.
**Best for questions about:** AI tooling fluency, builder mindset, automation, agentic workflows, observability, open-source.

