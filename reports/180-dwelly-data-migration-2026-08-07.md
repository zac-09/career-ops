# Evaluation: Dwelly — Senior Backend Software Engineer — Data Migration Platform

**Date:** 2026-08-07
**Archetype:** Senior Backend Engineer — data migration / integrations platform (owner seat)
**Score:** 4.1/5
**URL:** https://job-boards.eu.greenhouse.io/dwelly/jobs/4928198101
**PDF:** ✅ output/cv-isaac-dwelly-data-migration-2026-08-07.pdf
**Verification:** API (Greenhouse EU JSON, 2026-08-07) — `boards.eu.greenhouse.io/v1/boards/dwelly/jobs/4928198101?questions=true` returned 200 with full JD + screening questions (note: the documented `boards-api.eu.greenhouse.io` host does not resolve; the working EU API host is `boards.eu.greenhouse.io`). First published 2026-07-16, live.
**Recommendation:** APPLY — this is the best title-to-CV match in the current pipeline. The role IS Isaac's flagship story: connect to legacy systems, extract and validate messy data, build safe import flows with retries/rollback/audit, own the platform end to end. He ran exactly this program (Parse/MongoDB → Firebase, 20+ apps, zero downtime, reporting to the CTO) and the JD's LLM-pragmatism angle maps to his chatbot/career-ops work. Two honest gaps (Python-first framing, FastAPI ecosystem) are ramp-up items, not blockers, and his contractor→lead story is the proof. **Etiquette note:** Isaac has one live Dwelly application (#140 Staff SWE, Applied 2026-07-02, no response in 5 weeks). Before applying, reference it in the cover letter ("I applied to the Staff SWE opening in July; this posting is an even closer fit to what I've actually built") rather than pretending it doesn't exist — one candidate, one narrative. Do not also apply to #179.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD location | "Remote"; "Fully remote role" in benefits | ✅ |
| Screening questions | No country dropdown, no US/UK work-auth gate; free-text "current location and right to work status" (informational) | ✅ open |
| Precedent | #140 (Dwelly Staff SWE): confirmed "open to all countries"; Isaac's Uganda application accepted 2026-07-02 | ✅ Global |
| Timezone | UK company (UTC+1) vs Kampala (UTC+3) — 2h offset, full working-day overlap | ✅ ideal |

**Verdict: geo clean.** One of the friendliest geo profiles in the tracker.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer — internal Data Migration Platform (owner: architecture → production support) |
| Domain | Legacy CRM integrations, ETL/ELT, data validation/dedup/normalisation, safe import flows (retries, audit logs, dry runs, rollback), pragmatic LLM use for schema mapping/entity matching |
| Function | Build + own end to end |
| Seniority | Senior (titled) |
| Remote | Fully remote, all countries |
| Team size | Not stated; works across engineering, product, operations, integration teams |
| Comp | Not disclosed — "Competitive compensation... potential for equity options" |
| TL;DR | Dwelly wants someone to make agency migrations "faster, safer, more repeatable and less dependent on manual work" — a one-sentence description of what Isaac did for 20+ applications at MTailor. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **Experience with data migration, ETL/ELT, data processing, system integrations or internal tools** | cv.md L14: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime, reporting directly to the CTO"; L33: "Built a migration script to read data from MongoDB and write to Firestore after running complex processing logic"; L18: S3→GCS storage migration | ✅✅ flagship — the entire role in three lines |
| Connect to external systems, extract data, prepare for migration | cv.md L31: "complex backend migration from Parse/MongoDB to Firebase Firestore and GCP" — Parse is precisely a poorly-documented legacy system | ✅ |
| Work with APIs, exports, files, databases, poorly documented legacy systems | cv.md L47: ad-hoc jobs over 2M+ Firestore records from Morningstar APIs; L18 file storage migration; Parse internals | ✅ |
| **Safe import flows: retries, audit logs, dry runs, error handling, manual review** | cv.md L16: real-time two-way MongoDB↔Firestore sync (Pub/Sub) — the sync preserved rollback for the entire cutover window; idempotent redelivery-safe processing (story bank #167) | ✅ strong |
| Cleaning, mapping, normalising, deduplicating, validating complex data | L33 "complex processing logic" during migration; profile.yml: recommendation engine (matching logic in MongoDB) | ✅ |
| Database transactions, data consistency, production data workflows | Two-way sync under live traffic on two datastores, zero data loss (profile.yml proof point) | ✅ strong |
| **Strong backend engineering experience with Python** | cv.md L85: Python Proficient; L18: GCS migration via Python script; L34: wrote Python SDK documentation. Flagship services are Node.js | ⚠️ honest partial — polyglot with Python proficiency, Node depth |
| **Strong practical SQL skills** | cv.md L85: SQL listed Proficient; production evidence is mostly NoSQL (MongoDB, Firestore) | ⚠️ listed, lightly evidenced |
| Production experience with FastAPI, Django, Flask or similar | Express.js in production (cv.md L49); FastAPI/Django not on CV | ⚠️ ecosystem gap, pattern-equivalent |
| Integrating with external APIs and third-party systems | Morningstar (L47), Google Pub/Sub, Web3 backends (L62), WhatsApp Business API + Google Vision (profile.yml) | ✅ |
| Linux, Docker, containerised development | cv.md L85 Linux Proficient; L77: Kafka/Docker/Kubernetes microservices at CodeBits | ✅ |
| **Practical experience using AI coding tools and/or LLM APIs** | profile.yml: OpenAI + Google Vision chatbot; career-ops agentic pipeline (story bank #127) — daily AI-tooling practice | ✅ — also answers the required screening question directly |
| Ownership mindset, deliver independently under ambiguity | Contractor→lead arc (L27-37), sole owner of migration program | ✅✅ |
| Clear communication with non-engineering stakeholders | cv.md L35: "Trained the Ops team on the new Firebase Dashboard and backup procedures"; L34 SDK docs | ✅ |
| Nice-to-have: fuzzy matching, entity resolution, duplicate detection | profile.yml: marketplace recommendation engine — collaborative + content-based matching of service providers | ✅ bonus |
| Nice-to-have: LLMs for schema mapping/classification/extraction | Chatbot OCR extraction; career-ops classification workflows | ✅ bonus |
| Nice-to-have: internal tools for ops/integration workflows | Ops training + backup tooling at MTailor; career-ops itself | ✅ |
| Nice-to-have: CRM/property/fintech domain | DeFi backends (L62), e-commerce (MTailor) — adjacent only | ⚠️ |

**Gaps and mitigation:**

1. **Python-first framing (soft gap).** The work is Python; Isaac's depth is Node. *Mitigation:* lead with the migration-domain match, state Python plainly ("Python proficient — shipped the storage-migration tooling and SDK docs in Python"), and deploy the #174 learning-velocity story (contractor on unfamiliar stack → wrote the docs others onboarded from). Domain match beats language match for internal-platform seats.
2. **FastAPI/Django (soft gap).** "Or similar" gives cover; Express + Cloud Functions are the same pattern. *Mitigation:* one weekend building a FastAPI service (e.g., a dry-run import validator demo) converts this to a talking point.
3. **SQL evidence (soft gap).** Listed but NoSQL-dominant history. *Mitigation:* be concrete about Firestore→relational modeling tradeoffs; don't oversell Postgres depth.

## C) Level and Strategy

1. **JD level vs candidate:** Senior, titled — exactly Isaac's primary target (profile.yml: Senior Backend Engineer, fit: primary). Scope ("own the platform end to end: architecture, implementation, testing, deployment and production support") matches what he already did at MTailor with CTO-level reporting. No downlevel tension.
2. **"Sell senior without lying":** The pitch writes itself — "Your Data Migration Platform is the productized version of the program I ran by hand: I migrated 20+ live applications off a legacy platform with zero downtime, built the two-way sync that made every cutover reversible, and turned the process into docs and training that made the org self-serve. I want to build the system so nobody has to do it by hand." Quantifiers: 20+ apps, zero downtime, $5K/month savings, 2M+ record jobs.
3. **If downleveled:** Unlikely given the title; if comp comes in low instead, anchor to the $80–120K target and the roll-up math (every migration his platform accelerates is acquisition ROI — tie comp to that leverage).

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | Not disclosed — "Competitive compensation... potential for equity options based on performance" | Greenhouse JD (EU API, 2026-08-07) |
| Funding | $93M total (Feb 2026): £32M equity led by General Catalyst (+Begin Capital, S16VC) + £37M debt (Trinity Capital) | Report #140 (Fortune, 2026-02-25) |
| Market proxy | UK remote senior engineers at funded startups: ~£80–120K (~$100–150K); worldwide-remote hires often below UK band | Report #140 market research |
| vs target | Likely within Isaac's $80–120K; confirm in first call — undisclosed comp remains the main risk (same flag as #140) | config/profile.yml |
| Demand | Migration/integration platform engineers are less fashionable than ML engineers → thinner competition than #179 for a role where Isaac's evidence is overwhelming; posting live 3 weeks | Market context |

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | Generic migration headline | "Senior Backend Engineer who has led 20+ zero-downtime data migrations off legacy systems — builds the safe-import machinery (two-way sync, rollback, audit, validation) that makes migration repeatable. Python, Node.js, SQL/NoSQL, LLM-assisted workflows." | Mirrors the JD's mission sentence |
| 2 | Experience (MTailor) | Bullets stack-ordered | Reorder: migration leadership first, then sync/rollback mechanics, then validation "complex processing logic," then Python GCS script | Puts every JD keyword in the first four bullets |
| 3 | Projects | Chatbot + recommender only in profile.yml | Add Projects section: recommendation engine (fuzzy matching/entity resolution) + WhatsApp chatbot (LLM extraction) + career-ops (AI coding tools in daily practice) | Covers three nice-to-haves the raw CV hides |
| 4 | Skills | Python mid-list | Lead skills with Python, SQL, Node.js/TypeScript, Docker, Linux, GCP | Matches the screen order of the JD |
| 5 | Cover letter | — | One page: JD mission sentence quoted → MTailor program → "reversible by design" sync story → honest Python/FastAPI framing → reference the July Staff SWE application | Converts the double-application from a smell into a signal of focused interest |

LinkedIn: headline to "Senior Backend Engineer — zero-downtime data migrations & integration platforms"; feature the migration story in About; add skills: Data Migration, ETL, Python, SQL.

## F) Interview Prep

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Safe, repeatable migrations | Zero-downtime Parse→Firebase (#127) | Parse EOL, 20+ live apps | Migrate with zero downtime | Two-way sync, phased cutover, shadow traffic | 20+ apps, zero outages, $5K/month saved | Reversibility beats speed — keep rollback alive for the whole window |
| 2 | Data consistency / transactions | Two-way MongoDB↔Firestore sync (#167) | Two datastores serving live traffic | Bidirectional consistency, zero loss | Idempotent Pub/Sub processing, conflict handling | No data loss across months | Design for redelivery from day one |
| 3 | Messy legacy data, validation | Migration scripts with complex processing logic (#174) | Contractor on unfamiliar stack | Extract/transform/validate MongoDB→Firestore | Processing logic + docs + Ops training | Converted to FTE, given the whole program | Learning velocity is demonstrable, not claimable |
| 4 | External integrations at scale | 2M+ record Morningstar jobs (#169) | Stale prices over 2M+ Firestore records | Keep prices current, costs sane | Batched ad-hoc query jobs, query-shape optimization | Real-time prices on lean infra | Model data for the reads you serve |
| 5 | Pragmatic LLM use | Career-ops agentic pipeline (#127) | Manual portal scanning too slow | High-signal automation | Agentic evaluation + classification + PDF pipeline | 100+ offers processed | Agentic loops need ground-truth verification |
| 6 | Entity matching / dedup | Marketplace recommendation engine (profile.yml) — NEW story below | Marketplace needed provider matching | Match users to providers | Collaborative + content-based filtering in MongoDB | Production matching engine | Confidence scoring beats binary matching for human-reviewed flows |
| 7 | Stakeholder communication | SDK docs + Ops training (#167) | Whole org on unfamiliar stack | Make platform self-serve | Docs + dashboard/backup training | Ops ran backups independently | An hour of writing saves many hours of explanation |

- **Case study to present:** the two-way sync as a safe-import engine — walk through dry-run equivalence, idempotency, rollback, and what he'd add for Dwelly (audit log, per-entity confidence scores, human review queue for exceptions).
- **Red-flag questions:** "Your production backends are Node — why should we trust you with a Python platform?" → #174 story + Python artifacts (GCS script, SDK docs) + offer of a take-home in Python. "You applied to our Staff role in July — why this one?" → "This posting describes the work I've actually led; I'd rather own the migration platform than be a generalist Staff hire."

---

## Story bank candidates

### [Entity matching / dedup] Marketplace recommendation engine with fuzzy matching
**Source:** Report #180 — Dwelly — Senior Backend Software Engineer — Data Migration Platform
**S (Situation):** A marketplace product needed to match users with the right service providers from an inconsistent, user-generated provider catalog.
**T (Task):** Build matching that worked despite messy, duplicate-prone real-world records.
**A (Action):** Built a collaborative + content-based filtering engine in MongoDB (profile.yml proof point), combining behavioral signals with content similarity to rank provider matches.
**R (Result):** Production recommendation engine driving provider matching in the live marketplace.
**Reflection:** Ranked confidence beats binary match/no-match — surface scores so humans can review the ambiguous middle instead of trusting or redoing everything.
**Best for questions about:** entity resolution, fuzzy matching, deduplication, recommender systems, working with messy user-generated data.

## Keywords extracted

data migration, migration platform, legacy CRM, ETL, ELT, system integrations, internal tools, safe import, dry runs, audit logs, retries, rollback, data validation, deduplication, normalisation, entity matching, fuzzy matching, schema mapping, LLM APIs, Python, SQL, FastAPI, Docker, Linux, data consistency, transactions, landlords, tenants, tenancies, property management, ownership
