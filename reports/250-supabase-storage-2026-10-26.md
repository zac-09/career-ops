# Evaluation: Supabase — Software Engineer - Storage

**Date:** 2026-10-26
**Archetype:** **Senior Backend Engineer** (Node.js in production, distributed systems), with a secondary **Solutions/API Engineer** axis (client libraries, CLI, developer experience, escalated support).
**Score:** 3.8/5
**URL:** https://jobs.ashbyhq.com/supabase/9f2ba0b2-6d3b-43ea-990f-5b4bf3930520
**PDF:** ✅ `output/cv-isaac-supabase-storage-2026-10-26.pdf`
**Verification:** live via Playwright (main loop) 2026-10-26. Ashby page renders title, full JD and Apply. Published 2026-10-24.
**Recommendation:** **APPLY, and apply this week.** This is the best Supabase fit in twelve evaluations. Nearly every earlier Supabase req failed a literal hard gate (Go, Rust, Haskell, Terraform, SRE practice, managing remote teams). This one's headline requirement is "5+ years backend engineering experience of running Node.js in production", which is Isaac's core skill. Geo is clean ("We hire globally"). There are two real gaps in the "good fit" list: **production PostgreSQL tuning** and **observability tooling (OpenTelemetry/Prometheus/Grafana)**. Name both up front, and strengthen the application with one small merged PR to `supabase/storage` or `tus/tus-node-server` if it can be done within a week. Do not delay the application for it: the req is two days old.

---

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer (primary) + Solutions/API Engineer (secondary) |
| Domain | Object storage platform: storage server, S3 protocol, TUS resumable uploads, CDN/edge, asset optimisation, analytics buckets (Iceberg, DuckLake) |
| Function | Build and operate. Open-source contribution to the storage server and upstream dependencies |
| Seniority | Not stated in title. "5+ years backend" implies senior IC |
| Remote | Full remote, "We hire globally", 60+ countries, async |
| Team size | Company ~400. Storage team size not stated |
| Comp | Not posted (Ashby compensation empty, as with every Supabase req) |
| TL;DR | A Node.js storage-server engineer working across the stack, from client libraries and CLI to the server, CDN and deployment, on one of Supabase's fastest-growing services, in the open. |

## B) CV Match

### "You might be a good fit if you"

| JD requirement | CV evidence (cv.md) | Match |
|---|---|---|
| "5+ years backend engineering experience of running Node.js in production" | Node.js in every role from CodeBits (Jan 2020) to MTailor (present): ~6.8 years. MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub". CodeBits: "USSD service ... communicating with a Node.js backend via gRPC" | ✅ strong |
| "Experience with highly scalable, distributed systems" | CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes" (Stack adds NATS Streaming, gRPC). MTailor Pub/Sub sync across 20+ apps | ✅ |
| "Comfortable working across the stack — backend application development, some infrastructure work including deploying, monitoring and scaling the service" | MTailor: "Led the end-to-end migration of 20+ applications ... ensuring zero downtime"; "Saved the company $5,000/month by migrating all services off AWS". React on three roles. Docker/Kubernetes at CodeBits | ✅ (monitoring is the soft spot, see next row) |
| "Familiarity with observability tools (OpenTelemetry, Prometheus, Grafana) and performance tuning" | Not on cv.md. Performance work exists (Dr Wealth "ad-hoc jobs to query over 2 million Firestore records"), but no named observability stack | ❌ gap |
| "Experience with production-grade PostgreSQL usage, including tuning and troubleshooting" | **No relational engine in any role.** `SQL` sits on the Proficient line unbacked (standing gap, memory note). Production datastores were MongoDB and Firestore | ❌ gap |
| "Ownership mentality: driving projects end-to-end" | MTailor: hired as an Upwork contractor and became migration lead reporting to the CTO. CodeBits: "Led a team of 4 developers" | ✅ strong |
| "Empathy towards developer experience" | MTailor contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)"; "Trained the Ops team on the new Firebase Dashboard". Years of building *on* Firebase, the product Supabase positions against | ✅ |

**Score on the list: 5 of 7 met, 2 missing.**

### Nice-to-have

| JD nice-to-have | CV evidence | Match |
|---|---|---|
| Prior experience working on developer tools | SDK docs and Ops training only. No shipped dev tool, CLI or library | ⚠️ thin |
| Cloud infrastructure (AWS, GCP or Azure) and containerization (Docker, Kubernetes) | GCP/Firebase daily; AWS S3/EC2/EBS (Intermediate); Docker + Kubernetes at CodeBits | ✅ |
| Designing and operating large file upload/download pipelines at scale | "Migrated file storage from Amazon S3 to GCS via a Python script" (MTailor). Adjacent; not an upload pipeline he designed and operated | ⚠️ partial |
| CDN integration and optimisation | None | ❌ |
| Image/video processing tools (sharp, dssim, ffmpeg), formats and codecs | "Built a 3D visualisation feature for customers using video overlay and the ffmpeg library, increasing buyer conversion" (MTailor) | ✅ direct hit |
| Frontend ecosystem (Next.js, React) | React at MTailor, Dr Wealth, Mind2matter; React Native at CodeBits | ✅ |

### Gaps and mitigation

1. **Production PostgreSQL tuning and troubleshooting (stated requirement; hard-ish).**
   - Blocker? Not alone. It is one of seven "good fit" bullets, and this team's core work is object storage, not the database. But Supabase *is* a Postgres company, so the interviewer will probe it, and Storage metadata lives in Postgres with Row Level Security.
   - Adjacent evidence: two live production datastores kept consistent through a migration (engine-independent consistency work); querying 2M+ records at Dr Wealth.
   - Mitigation: use the story-bank card "Answering the TypeScript / PostgreSQL gap straight". Name it first. Before the technical screen, run the Supabase storage server locally (it ships with Postgres) and read its schema, migrations and RLS policies, so the answer can say "here is how your `storage.objects` table and policies work" rather than a generic promise.
2. **Observability tooling (OpenTelemetry/Prometheus/Grafana).**
   - Blocker? No; listed as "familiarity".
   - Mitigation: a one-week spike that instruments a local storage-server run with OpenTelemetry and reads traces in Grafana is honest, cheap, and gives a concrete talking point. Do not claim it as production experience.
3. **TypeScript depth.** The storage server and tus-node-server are TypeScript. cv.md evidences ~6 months of production TypeScript (Dr Wealth). The JD asks for Node.js, not TypeScript, so this is not a stated gate. Do not claim more TypeScript than Dr Wealth.
4. **Open-source track record.** None on cv.md. Supabase is "open-source-first" and the JD expects contributions upstream. One small merged PR to `supabase/storage` or `tus-node-server` is the highest-leverage fix and doubles as gap evidence for item 1 or 2.

## C) Level and Strategy

**JD level:** senior IC (5+ years, end-to-end ownership, support escalations). **Isaac's natural level:** senior on the Node.js backend axis. His years exceed the bar, and the ownership evidence (contractor to migration lead, CTO-reporting) is the kind this JD lists.

**Sell senior without lying:**
- Lead with "6+ years of Node.js in production", stated exactly as the JD phrases it.
- Tie the storage-specific evidence together: S3 to GCS file migration, the AWS exit, ffmpeg video processing. Three separate cv.md lines that together read as "has worked with object storage and media", which is precisely this team's surface.
- Position Firebase experience as product insight: "I have built 20+ apps on the platform Supabase competes with. I know where Firebase Storage's upload and security model frustrates developers."
- Do not inflate: no Postgres tuning, no CDN, no OSS maintenance claims.

**If downleveled:** accept if comp clears the $60K floor (it very likely does; see D). Ask for a 6-month review with Postgres and storage-server ownership as explicit promotion criteria.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted comp | Not disclosed (Ashby compensation empty for all Supabase reqs) | Ashby API, 2026-10-26 |
| Company-wide | Median total comp $115,575; range $61,976 (Customer Service, Brazil) to $124,954 (Software Engineer, Dominican Republic) | [Levels.fyi — Supabase](https://www.levels.fyi/companies/supabase/salaries) |
| Software Engineer | Dominican Republic common range $117K–$133K; no US or remote breakdown yet | [Levels.fyi — Supabase SWE](https://www.levels.fyi/companies/supabase/salaries/software-engineer) |
| Earlier estimate | Geo-adjusted Uganda offer plausibly $70–110K + ESOP | Report #167 (Supabase Edge Functions, 2026-07-24) |
| vs Isaac's target | Target $80–120K, floor $60K (profile.yml). Non-US Supabase SWE data points sit at $117–133K, which is at or above target | config/profile.yml |
| Benefits | ESOP for everyone; 100% health cover for employee, 80% dependents, "wherever you are"; co-working, tech and education allowances | JD |
| Company trajectory | Over $1B raised including a $500M Series F; ~400 people in 60+ countries | JD |

**Demand:** Storage is described as "one of our fastest growing services", and Supabase has posted 4 new engineering reqs this week alone. Competition for a global-remote Supabase seat will be heavy and skewed toward open-source contributors, so speed and a visible contribution matter.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Migration-centric | Open with "6+ years running Node.js in production", then S3 to GCS storage migration, ffmpeg, distributed systems, SDK docs | Mirrors the JD's first requirement and the storage surface |
| 2 | MTailor bullets | Feature list | Reorder: migration, Pub/Sub sync, S3 to GCS + AWS exit, ffmpeg feature | Puts the object-storage and media lines in the first-scan zone |
| 3 | Competencies | Generic | Node.js in Production · Distributed Systems · Object Storage Migration · Media Processing (ffmpeg) · Deploying & Scaling Services · Event-Driven Systems · Developer Experience & SDK Docs · End-to-End Ownership | Keyword match without adding unevidenced skills |
| 4 | Projects | Pub/Sub sync + WhatsApp assistant | Pub/Sub sync + S3 to GCS storage migration | Swaps an off-topic project for an on-topic one |
| 5 | Skills | "Data & Messaging" | "Data & Storage" adding Google Cloud Storage and Amazon S3; ffmpeg under Media | Both are on cv.md; surfaces them for ATS |

All five are applied in the generated PDF. No PostgreSQL, observability, CDN or OSS claims were added.

**LinkedIn (top 5):**
1. Headline: "Backend Engineer · Node.js in production since 2020 · Storage & cloud migrations · Kampala (UTC+3), remote".
2. MTailor entry: add the S3 to GCS migration and the ffmpeg feature as separate lines.
3. Featured: link the merged OSS PR once it exists.
4. Skills: add Google Cloud Storage, Amazon S3, ffmpeg (all evidenced).
5. About: one line on building on Firebase for years, which gives a natural reason to want to work on Supabase.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Node.js in production, end-to-end ownership | Zero-downtime Parse to Firebase migration | 20+ production apps on Parse/MongoDB | Move everything to Firebase/GCP with no downtime, reporting to the CTO | Led the migration; built a Node.js two-way sync on Pub/Sub so services could cut over one at a time | All 20+ apps migrated with zero downtime | A sync you can run both ways is worth more than a one-shot dump |
| 2 | Distributed systems | Kafka/K8s microservices for FIDA Uganda | NGO case-management app needed a backend that could grow | Architect it | Microservices on Kafka, Docker, Kubernetes, with NATS Streaming and gRPC | Delivered with a team of 4 | Async messaging buys decoupling but costs debuggability; invest in tracing early |
| 3 | Object storage / upload pipelines | S3 to GCS storage migration + AWS exit | Split estate across AWS and GCP | Consolidate without breaking file access | Migrated stored files from S3 to GCS with a Python script; moved remaining services off AWS | $5,000/month saved | Storage migrations are mostly about the long tail of references, not the copy |
| 4 | Image/video processing | ffmpeg 3D visualisation at MTailor | Buyers couldn't picture a garment well enough | Show the product in 3D | Built a video-overlay feature using ffmpeg | Increased buyer conversion | Media features succeed or fail on processing time and payload size; measure both |
| 5 | Developer experience | SDK docs and Ops training | Engineers and Ops faced an unfamiliar stack after migration | Make the platform self-serve | Wrote Firebase SDK docs (Node.js, Python); trained Ops on the dashboard and backups | Engineers onboarded from docs; Ops ran backups independently | An hour of writing saves many hours of repeated explanation |
| 6 | Performance at scale | 2M+ record refresh at Dr Wealth | Real-time stock PWA needed current prices | Keep 2M+ Firestore records fresh from Morningstar | Built ad-hoc query jobs over the dataset | Prices kept current for customers | Batch jobs over large collections need pagination and back-pressure from day one |
| 7 | PostgreSQL gap (expect the question) | Answering the Postgres gap straight | No relational engine in any role | Answer without bluffing | Name the gap first; point to two-live-datastore consistency work; show prep on the storage server's own Postgres schema and RLS | Gap becomes a ramp plan with evidence | Never let the interviewer be the one to find the gap |

Story-bank status: stories 1, 2, 4, 5, 6 and 7 already exist in `interview-prep/story-bank.md`. Story 3 is covered by the existing "AWS exit saving $5,000/month" card.

**Recommended case study:** the zero-downtime migration (story 1), extended with story 3. Frame it as "moving live data and files between platforms without users noticing", which is a storage team's daily concern.

**Red-flag questions:**
- *"Have you tuned Postgres in production?"* No. Say so, then give story 7.
- *"What open source have you contributed to?"* Today, nothing public. Ideally answer with the PR from the gap plan.
- *"How would you make uploads more resilient on flaky mobile networks?"* Strong ground: designing for unreliable networks from the USSD and LASPNET mobile work, plus TUS resumable-upload semantics (read the TUS protocol spec before the interview).

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **4.0** | Senior Node.js backend IC is Isaac's primary archetype. The developer-tools and support side is a modest stretch |
| Stack | **3.0** | Good-fit list 5 ✅ / 2 ❌ (Postgres tuning, observability). Nice-to-haves 3 ✅ / 2 ⚠️ / 1 ❌, with ffmpeg a direct hit. Codebase is TypeScript; ~6 months of production TS |
| Seniority | **3.5** | ~6.8 years Node.js clears 5+. Ownership evidence strong. No OSS or dev-tool authorship |
| Remote / geo | **5.0** | "We hire globally", 60+ countries, no country list, health cover "wherever you are". Eleven earlier Supabase reports confirmed the same policy |
| Comp | **4.0** | Undisclosed. Non-US SWE data $117–133K and company median $115.6K sit at or above target; ESOP |
| Stability / growth | **4.5** | Over $1B raised, fast-growing service, public open-source work that compounds on a CV |
| **Overall** | **3.8/5** | (4.0 + 3.0 + 3.5 + 5.0 + 4.0 + 4.5) / 6 = 4.0, rounded down to 3.8 because Postgres is a stated requirement at a Postgres company and will be tested directly. **APPLY this week.** |

---

## Keywords extracted

Node.js in production, object storage, Supabase Storage, S3 protocol, TUS resumable uploads, tus-node-server, distributed systems, scalability, CDN, edge network, cache invalidation, asset optimization, image and video processing, ffmpeg, sharp, PostgreSQL tuning, observability, OpenTelemetry, Prometheus, Grafana, client libraries, CLI, developer experience, open source, Docker, Kubernetes, end-to-end ownership, async remote
