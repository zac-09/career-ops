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

### [Performance optimization at scale] Real-time stock-price PWA over 2M+ Firestore records
**Source:** Report #169 — Fueled — Senior Full Stack Engineer
**S (Situation):** Dr Wealth's PWA served real-time stock prices from a Firebase backend; keeping 2M+ Firestore records current from Morningstar APIs was slow and costly.
**T (Task):** Keep customer-facing prices current without blowing up latency or Firestore read costs.
**A (Action):** Built ad-hoc batched query jobs to refresh prices from Morningstar APIs, optimizing read patterns and query shape instead of scaling hardware; extended the REST layer with Cloud Functions + Express.js.
**R (Result):** Prices stayed current at 2M+ record scale on a lean Firebase backend.
**Reflection:** In document stores, query shape matters more than instance size — model the data for the reads you actually serve.
**Best for questions about:** Performance optimization, real-time data, NoSQL data modeling, cost optimization, working with third-party APIs.

### [Frontend craft under deadline] Figma-to-React delivery at agency pace
**Source:** Report #169 — Fueled — Senior Full Stack Engineer
**S (Situation):** Mind2matter, a US agency with demanding clients, needed polished UIs shipped on tight timelines alongside DeFi backend work.
**T (Task):** Turn Figma designs into pixel-accurate production React UIs without blowing deadlines.
**A (Action):** Componentized the designs into reusable primitives first, then assembled pages from them; ran backend (Node.js/Web3) and frontend work in parallel, reporting directly to the CTO.
**R (Result):** Delivered on deadline; client retained the agency.
**Reflection:** Component thinking beats page thinking on deadline work — the second screen is nearly free if the first one was built as a system.
**Best for questions about:** Frontend craft, design collaboration, agency/client pace, full-stack range, working under pressure.

### [Business-impact features] Express Shipping and 3D visualization at MTailor
**Source:** Report #169 — Fueled — Senior Full Stack Engineer
**S (Situation):** MTailor's e-commerce product needed features that moved conversion and average order value, not just platform work.
**T (Task):** Ship customer-facing features with measurable revenue impact.
**A (Action):** Built Express Shipping end to end and a 3D visualisation feature using video overlay with ffmpeg, owning both from concept to deployment.
**R (Result):** +$40 revenue per order from Express Shipping; improved buyer conversion from the 3D feature.
**Reflection:** Tie every feature to a money metric before you build it — it changes what you build and how you argue for it.
**Best for questions about:** Business impact, product mindset, end-to-end feature ownership, measurable outcomes, e-commerce.
**Growth-archetype framing (Report #183 — Buffer — Senior Growth Engineer):** For growth-engineering roles, split this into two experiment-shaped stories: (1) 3D visualization = conversion experiment ("buyers couldn't evaluate fit → built video-overlay 3D with ffmpeg → conversion increased — ship, measure, iterate"); (2) Express Shipping = revenue experiment ("one slow checkout option → premium shipping end to end: backend, pricing, ops handoff → +$40/order — small surface, large revenue"). Lead with the metric moved, not the system built.
**Fintech/money-path framing (Report #188 — Yellow Card — Technical Team Lead):** For fintech roles handling real money, frame Express Shipping as a money-path story: pricing logic, payment-adjacent correctness, and the cost of getting a charge wrong — "revenue-critical path where a bug is a refund, not a retry." Pair with the two-way sync story (idempotency = ledger correctness instinct).


### [Real-time systems / streaming] Two-way MongoDB↔Firestore sync on Pub/Sub
**Source:** Report #167 — Supabase — Edge Functions Engineer
**S (Situation):** During MTailor's months-long migration off Parse/MongoDB, both databases had to serve live production traffic simultaneously.
**T (Task):** Keep data consistent in both directions, in real time, with zero data loss.
**A (Action):** Built a Node.js sync service on Google Pub/Sub with idempotent message processing and conflict handling, running as the backbone of the phased migration.
**R (Result):** Parallel production traffic on two datastores throughout the migration with no data loss (cv.md, profile.yml proof point).
**Reflection:** Idempotency is the whole game in message-driven sync — design for redelivery from day one.
**Best for questions about:** real-time systems, message queues, data consistency, migration strategy, working under production pressure
**Betting/high-throughput transactional framing (Report #205 — Sporty Group — Senior Backend Engineer):** For real-money/betting-scale roles, frame this as settlement-semantics evidence: redelivery-safe (at-least-once) message processing with conflict handling is the same correctness class as bet placement/settlement — "a duplicate message must never become a duplicate transaction." Pair with the JD's own vocabulary ("highly transactional systems") and note the design was proven under live parallel production traffic, not in a sandbox.

### [Distributed infrastructure] Kafka/Kubernetes microservices for FIDA Uganda
**Source:** Report #167 — Supabase — Edge Functions Engineer
**S (Situation):** An NGO case-management system at CodeBits needed to scale beyond a monolith, with a 4-developer team.
**T (Task):** Architect and ship a production backend that multiple services and clients (web, mobile, USSD) could build on.
**A (Action):** Designed an event-driven microservices backend on Apache Kafka, containerized with Docker, deployed on Kubernetes; led the team through delivery.
**R (Result):** Shipped and operated in production for FIDA Uganda (cv.md).
**Reflection:** Event-driven service boundaries prevented the distributed-monolith trap — get the boundaries right before the tooling.
**Best for questions about:** distributed systems, Kubernetes, event streaming, architecture decisions, technical leadership

### [Enablement / documentation] SDK docs and Ops training for the new Firebase stack
**Source:** Report #167 — Supabase — Edge Functions Engineer
**S (Situation):** After migrating MTailor to Firebase/GCP, every engineer and the Ops team had to work productively on an unfamiliar stack.
**T (Task):** Make the new platform self-serve for the rest of the company.
**A (Action):** Wrote documentation for the Firebase SDKs (Node.js and Python) and trained the Ops team on the new dashboard and backup procedures.
**R (Result):** Fellow engineers onboarded to the new stack from the docs; Ops ran backups independently (cv.md).
**Reflection:** Good docs are a force multiplier — an hour of writing saved many hours of repeated explanation. Directly relevant to build-in-public, community-facing companies.
**Best for questions about:** developer experience, documentation, knowledge sharing, cross-team collaboration

### [Building for underserved users] USSD legal-aid service for rural Uganda
**Source:** Report #174 — M-KOPA — Software Engineering Team Lead
**S (Situation):** Legal-aid providers in Uganda needed to reach citizens without smartphones or data connections — the same "Every Day Earners" demographic African fintechs serve.
**T (Task):** Deliver legal-aid access over infrastructure those users actually have: basic phones.
**A (Action):** Built a USSD service communicating with a Node.js backend via gRPC, with a provider-agnostic contract so multiple legal-aid providers could integrate without bespoke code (CodeBits).
**R (Result):** Multiple USSD providers integrated against one surface; rural users reached legal aid from feature phones.
**Reflection:** Meet users on the infrastructure they have, not the one you wish they had — low-tech front ends can sit on rigorous distributed backends.
**Best for questions about:** financial/digital inclusion, African market context, emerging-market product constraints, USSD/offline-first design, mission fit.

### [Learning a new stack fast] Contractor on an unfamiliar stack to company-wide migration lead
**Source:** Report #174 — M-KOPA — Software Engineering Team Lead
**S (Situation):** Hired via Upwork as a contractor at MTailor for a complex migration onto Firebase/GCP — a stack he had not used in production before.
**T (Task):** Deliver migration scripts and prove himself on unfamiliar technology under contract scrutiny.
**A (Action):** Learned the stack while shipping: built the MongoDB→Firestore migration scripts with complex processing logic, then wrote the Firebase SDK documentation other engineers onboarded from and trained the Ops team.
**R (Result):** Converted from contractor to full-time within months and was given leadership of the entire 20+ app, zero-downtime migration, reporting to the CTO.
**Reflection:** Learning velocity is demonstrable, not claimable — the fastest way to answer "you haven't used our stack" is a track record of going from newcomer to teacher on someone else's.
**Best for questions about:** stack gaps (e.g., C#/.NET, new languages), adaptability, ramp-up speed, contractor-to-leader growth, handling the "you don't know X" objection.
### [Entity matching / dedup] Marketplace recommendation engine with fuzzy matching
**Source:** Report #180 — Dwelly — Senior Backend Software Engineer — Data Migration Platform
**S (Situation):** A marketplace product needed to match users with the right service providers from an inconsistent, user-generated provider catalog.
**T (Task):** Build matching that worked despite messy, duplicate-prone real-world records.
**A (Action):** Built a collaborative + content-based filtering engine in MongoDB (profile.yml proof point), combining behavioral signals with content similarity to rank provider matches.
**R (Result):** Production recommendation engine driving provider matching in the live marketplace.
**Reflection:** Ranked confidence beats binary match/no-match — surface scores so humans can review the ambiguous middle instead of trusting or redoing everything.
**Best for questions about:** entity resolution, fuzzy matching, deduplication, recommender systems, working with messy user-generated data.

### [Cost optimization / FinOps] AWS exit saving $5,000/month
**Source:** Report #191 — Yellow Card — Senior AI Platform Engineer
**S (Situation):** MTailor was paying for a split estate: legacy services and storage on AWS (S3/EC2/EBS) alongside the new Firebase/GCP platform, with recurring spend on infrastructure the product no longer needed.
**T (Task):** Consolidate the estate and eliminate redundant infrastructure cost without disrupting live services.
**A (Action):** Migrated file storage from S3 to GCS via a Python script and moved all remaining services off AWS onto the consolidated GCP platform, sequencing cutovers so nothing user-facing broke.
**R (Result):** $5,000/month in recurring infrastructure savings — a durable cost elimination, not a one-time cut (cv.md).
**Reflection:** Cost work is capacity planning's twin — measure spend before and after every consolidation, and prefer structural savings (fewer platforms) over line-item trimming.
**Best for questions about:** FinOps, cost optimization, cloud consolidation, infrastructure ownership, usage/cost dashboards, justifying platform decisions to leadership.

### [Founder-shaped ownership] Running CodeBits end-to-end
**Source:** Report #192 — Cogram — Ex Technical Founder (Product Engineer)
**S (Situation):** NGOs in Uganda (FIDA, LASPNET) needed legal-tech systems but had thin specs, small budgets, and end users on feature phones without data connections.
**T (Task):** Run a 4-developer team delivering complete products — requirements, architecture, build, ship, support — with no product manager or spec in between.
**A (Action):** Owned the client relationships directly: sat with the NGOs to understand workflows, decided what to build, architected a Kafka/Docker/Kubernetes microservices backend, shipped a React Native/Expo mobile app and a USSD front end over gRPC, and led the team through delivery.
**R (Result):** Case management for FIDA Uganda and a paralegal database + mobile app for LASPNET shipped and operated in production; multiple USSD providers integrated against one contract (cv.md).
**Reflection:** Founder-mode is a skill, not a title — talking to users, deciding what to build, and shipping it yourself compounds; the hardest part was knowing when to cut corners (UI polish) and when to be rigorous (data contracts, message idempotency).
**Best for questions about:** ex-founder/founder-mode roles, ambiguity, thin specs, end-to-end ownership, customer conversations, small-team leadership. NOTE: confirm founder/co-founder wording with Isaac before using "founded" verbatim — cv.md titles the role "Software Engineer".

### [Conversational AI in production] WhatsApp healthcare chatbot with OCR
**Source:** Report #195 — Ojin — Product Engineer
**S (Situation):** Healthcare users needed to submit prescriptions and get guidance through a channel they already use daily — WhatsApp — not a new app.
**T (Task):** Build a conversational assistant that could read prescription photos and respond usefully, within WhatsApp Business API's strict platform constraints.
**A (Action):** Integrated OpenAI for the conversational layer and Google Vision for prescription OCR, orchestrated behind the WhatsApp Business API (profile.yml proof point) — handling dialogue state, media ingestion, and third-party platform limits.
**R (Result):** Conversational AI with document understanding running in production over WhatsApp.
**Reflection:** In conversational AI the platform constraints (rate limits, message windows, media handling) shape the architecture as much as the model does — design for the channel first, the model second.
**Best for questions about:** conversational interfaces, AI/LLM production systems, agent backends, third-party platform integration, "have you shipped AI to real users?"

### [Fintech-adjacent backend] DeFi backends on Web3 + Node.js at agency pace
**Source:** Report #209 — FINN — Senior Backend Engineer
**S (Situation):** Mind2matter, a US agency with demanding clients, was building DeFi applications where the backend moved real value on-chain and any mistake was visible to end users immediately.
**T (Task):** Build the backend services for those DeFi apps — Web3 integration, transaction flows, and the API layer — under tight client timelines, reporting directly to the CTO.
**A (Action):** Built the backends in Node.js with Web3 integration while React UIs were delivered from Figma in parallel, reporting directly to the CTO (cv.md Mind2matter entry). Suggested framing to confirm with Isaac: treat every on-chain call as irreversible — validate before signing, make retries safe, keep the API contract stable for the front end.
**R (Result):** DeFi backends delivered on the agency's deadlines alongside the front-end work; client engagement retained.
**Reflection:** Money-moving backends invert the usual tradeoff — you cannot "fix it in the next deploy" once value has moved, so correctness checks belong before the call, not after. The same instinct applies to wage disbursement and payments: a duplicate request must never become a duplicate transfer.
**Best for questions about:** fintech/payments backends, irreversible operations, Web3/blockchain exposure, working with demanding clients, correctness under deadline pressure, "have you built financial software?" NOTE: cv.md gives one line on this work — confirm specifics (chains, transaction types) with Isaac before adding detail.
