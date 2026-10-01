# Evaluation: Sarwa — Backend Engineer

**Date:** 2026-10-01
**Archetype:** **Senior Backend Engineer** primary (APIs, microservices, data flows, 3rd-party integrations) + **Solutions/API Engineer** secondary ("integrating with 3rd party services" is a named, recurring duty on a brokerage/wealth platform that lives on custodian, market-data and payment integrations).
**Score:** 3.8/5
**URL:** https://careers.sarwa.co/jobs/6606143-backend-engineer
**PDF:** output/cv-isaac-sarwa-backend-2026-10-01.pdf
**Verification:** live via Playwright 2026-10-01 (title + description + "Apply for this job" form present); JD saved to jds/sarwa-backend-engineer.md
**Recommendation:** **APPLY — but open the application with the stack question answered, not hidden.** This is a profitable, Mubadala-backed, remote-first fintech with a clean geo clause and a JD whose *shape* (microservices, event sourcing, 3rd-party integrations, ownership from infancy to production) maps onto Isaac's strongest work. The one real problem is the primary language: the req says "strong experience with Python/Go" and Isaac's production depth is Node.js. Python is Proficient on cv.md with two migration-script bullets; Go is Intermediate; Django and PostgreSQL are absent. Apply with a cover note that names this directly and leads with the architecture match. Do not inflate Python to "primary".

---

## Headline caveats (read these before the score)

1. **Language mismatch is the whole risk, and it is a real one.** The first qualification line reads: "Have strong experience with **Python/Go** and any backend framework (e.g. Django, GoLang, .Net, Laravel, Rails, ...) in a production system with a sizable user base". Node.js is not on that list — it is not even in the "or similar" examples. Isaac's cv.md evidence for Python is two bullets ("Migrated file storage from Amazon S3 to GCS via a Python script"; "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)") plus the Skills line "Proficient: … Python". Go is "Intermediate". That is *real* Python, but it is scripting and tooling Python, not "Django in production with a sizable user base". Stack is scored **2.5** and the PDF must not pretend otherwise.
2. **Three of the four "plus" stack items are gaps.** Stack section: "Python and Django · GoLang · PostgreSQL · AWS and Kubernetes." Django: absent. PostgreSQL: SQL is on the Proficient line but **no relational engine appears in any role bullet** (production datastores have been MongoDB and Firestore). AWS: Intermediate (S3/EC2/EBS, plus the cost-exit story). Kubernetes: one line at CodeBits. Only K8s/AWS are partially covered. The section is explicitly "a plus", not required — but it tells you what the team actually runs.
3. **What Isaac matches is the *hard* part of the JD, not the easy part.** "micro-services, domain-driven architecture, clean architecture, and **event sourcing** is a strong plus" → Kafka microservices at CodeBits, Pub/Sub event pipeline at MTailor. "integrating with 3rd party services" → Morningstar APIs at Dr Wealth, Web3 at Mind2matter, Firebase/GCP SDK integration at MTailor. "Demonstrated ownership in leading/participating in a project that went from infancy to production" → the 20+ app migration, reporting to the CTO. Languages are learnable in weeks; this architecture judgement is what takes years. That is the argument to make.
4. **Unlevelled title.** "Backend Engineer", no years stated, no "Senior". Aggregator copies of the same req label it "mid-senior level". At ~6.7 years Isaac is at or above the likely band, which is good for the interview and a watch-item for the offer: an unlevelled title at a ~50-person company can mean a mid-level pay band. Resolve level at the first call.
5. **Comp is unstated and may be localised.** No range in the JD. Abu Dhabi backend medians (Levels.fyi) sit around $91K — inside Isaac's $80K–120K target — but a remote hire outside the UAE is very likely paid through a contractor/EoR arrangement and may be priced to a different market. The same req has been posted with a **Poland** location variant, which is good news for "do they hire outside UAE" and ambiguous news for "at what rate".
6. **Fintech-regulated domain, no regulatory experience named on cv.md.** Sarwa is an ADGM/FSRA-regulated brokerage and advisor. The JD does not ask for regulatory experience, but expect questions on data consistency, auditability and error handling in money-moving flows. The DeFi backend line and the dual-write sync story are the closest evidence.

---

## Geo Check — PASS (scored on the JD body)

- **Exact remote text (body, verbatim):** "**We are a remote-first team. Where you choose to work is up to you — we have an office in Abu Dhabi that you can utilize as often or little as you'd like.**"
- **Country restriction:** none. **Work-authorization clause:** none. **Timezone / overlap-hours requirement:** none in the body.
- **ATS label:** "Technology · Abu Dhabi · Fully Remote" — consistent with the body.
- **External corroboration:** the identical Backend Engineer req appears on aggregators with the location set "**Poland, Remote, or Abu Dhabi – United Arab Emirates**" (Built In; Rise). A company that lists Poland on a UAE req is demonstrably hiring engineers outside the Gulf. Glassdoor reviewers cite "full remote work" as a benefit.
- **Timezone fit:** Abu Dhabi is UTC+4; Kampala is UTC+3. **One hour of offset.** This is the best timezone alignment of any req in the current batch — a genuine advantage over US- or EU-anchored remote roles.
- **Residual risk:** not eligibility, but **employment mechanism and price**. The JD says nothing about whether non-UAE hires are employees (via an EoR) or contractors, nor whether UAE tax-free salary norms carry over. Ask at the screen.

**Verdict: geography OPEN.** Isaac can hold this role from Kampala with near-zero timezone friction. Per MEMORY, this was read off the canonical Teamtailor posting at careers.sarwa.co, not an aggregator label.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer (primary) · Solutions/API Engineer (secondary) |
| Domain | Fintech / wealth-tech backend — robo-advisor + brokerage platform (Investing, Trading, Account Management, Funding services) |
| Function | **Build.** "fleshing out APIs, data flows/pipelines, integrating with 3rd party services, and writing application/domain logic to create new features and extend existing ones" |
| Seniority | **Unlevelled.** No years stated. Aggregator copies say "mid-senior". Bar is qualitative: production system "with a sizable user base or handling a large volume of data"; ownership "from infancy to production". |
| Stack | **Python/Django, Go, PostgreSQL, AWS, Kubernetes** (listed as "experience in these (or similar) is a plus"). Architecture vocabulary: microservices, DDD, clean architecture, event sourcing, caching, security. |
| Remote | Remote-first, office in Abu Dhabi optional. No country clause. UTC+4. |
| Team size | Company ~50 on the ATS card (podcast mentions "scaled to 100+ people" historically). Tech team size not stated. Listed contact is the CTO & co-founder, which at this size means the CTO is probably the hiring manager. |
| Company | Founded 2017, Abu Dhabi (Hub71). Series B $15M led by Mubadala (2021); ~$25M raised total. **Profitable since Q1 2024**; crossed **$1B in client assets** (May 2026). Glassdoor 4.1, 89% recommend (13 reviews). |
| Comp | Not stated. |
| Benefits | Healthcare, L&D budget, no fees on Sarwa products, remote-first. |
| TL;DR | A well-run, profitable Gulf fintech hiring a hands-on backend engineer for a microservices platform — the architecture and ownership asks fit Isaac closely, the Python/Go-first stack does not, and the application has to carry that mismatch honestly. |

## B) CV Match

| JD Requirement | CV Evidence (exact lines from cv.md) | Match |
|---|---|---|
| "strong experience with **Python/Go** and any backend framework … in a production system with a sizable user base" | Skills: "**Proficient:** Node.js, TypeScript, Firebase, React, GCP, **Python**…"; "**Intermediate:** **Go**, AWS, Rust, React Native"; MTailor: "Migrated file storage from Amazon S3 to GCS via a **Python** script"; Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and **Python**)" | ⚠️ **the central gap.** Python is real but evidenced as migration tooling, not as the application language of a production service. Go is intermediate with no production bullet. The production-at-scale evidence is all Node.js (20+ apps at MTailor; 2M+ records at Dr Wealth). |
| "any backend framework (e.g. Django, GoLang, .Net, Laravel, Rails…)" | Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and **Express.js** hosted on Heroku"; CodeBits: "Node.js backend via gRPC" | ⚠️ Express is a backend framework in production; Django is not on cv.md. The "any" is in Isaac's favour; the examples are not. |
| "production system with a **sizable user base or handling a large volume of data**" | MTailor: "Led the end-to-end migration of **20+ applications** from Parse/MongoDB to Firebase/GCP, ensuring zero downtime"; Dr Wealth: "Built ad-hoc jobs to query over **2 million Firestore records**" | ✅ both halves evidenced with numbers. |
| "strong fundamentals in backend architecture patterns including; understanding of **databases, APIs, caching and security practices**" | Databases: MongoDB, Firestore at production scale; "real-time two-way sync between MongoDB and Firestore"; APIs: Express, Cloud Functions, gRPC. Caching: **not named.** Security: **not named.** | ⚠️ databases and APIs strong; caching and security are unevidenced on paper. Likely done, not written. |
| "**micro-services, domain-driven architecture, clean architecture, and event sourcing** is a strong plus" | CodeBits: "Architected a **microservices** backend for FIDA Uganda's case management app using **Apache Kafka**, Docker, and Kubernetes"; MTailor: "Implemented real-time two-way sync … using Node.js and Google **Pub/Sub** for message processing"; Stack: "NATS Streaming, gRPC" | ✅ **strongest match on the req.** Event-driven microservices on Kafka plus a production Pub/Sub event pipeline is exactly the "strong plus" they describe. DDD/clean architecture are not named verbatim — frame via service boundaries. |
| "**integrating with 3rd party services**" | Dr Wealth: "keeping customer prices current from **Morningstar APIs**"; Mind2matter: "Built backends for DeFi applications using **Web3** and Node.js"; MTailor: Firebase/GCP SDKs, S3→GCS, Webflow→Firebase | ✅ Morningstar is a *financial market-data* integration — directly relevant to a wealth platform. |
| "**data flows/pipelines**" | MTailor: two-way MongoDB↔Firestore sync on Pub/Sub; Contractor: "Built a migration script to read data from MongoDB and write to Firestore after running complex processing logic"; S3→GCS Python migration | ✅ |
| "Demonstrated **ownership** in leading/participating in a project that went from **infancy to production**" | MTailor: "Led the end-to-end migration of 20+ applications … reporting directly to the CTO"; Contractor→FTE conversion; CodeBits: "Led a team of 4 developers building legal tech systems" | ✅ exit-narrative match; this is the #1 differentiator per `_shared.md`. |
| "Ability to execute by making decisions around **trade-offs of simplicity, readability, performance, and speed-of-implementation**" | MTailor: parallel dual-write sync chosen over big-bang cutover ("ensuring zero downtime"); "Saved the company $5,000/month by migrating all services off AWS" | ✅ evidenced by outcome; needs to be *told* as a trade-off story (see §F). |
| "Develop and maintain a **microservice architecture** that spans services such as Investing, Trading, Account Management, Funding" | CodeBits Kafka/K8s microservices; Dr Wealth real-time stock prices | ✅ architecture yes; brokerage domain partial (stock-price data, DeFi value flows). |
| "Create services that **scale to tens of thousands of clients**" | 20+ production apps; 2M+ records; "increasing buyer conversion" on a consumer e-commerce platform | ✅ |
| "**Own and deliver** software projects on time by proactively working with stakeholders from product/tech/marketing/operations/sales" | MTailor: "reporting directly to the CTO"; Contractor: "Trained the Ops team on the new Firebase Dashboard and backup procedures"; Mind2matter: "US-based agency with demanding clients" | ✅ cross-functional (eng, ops, clients) evidenced. |
| "ensuring **data consistency** … handling errors by creating robust and resilient systems" | "real-time two-way sync between MongoDB and Firestore" under live traffic with zero downtime | ✅ dual-write consistency is a harder version of the problem. |
| "Test developed code with **automated unit/integration tests**" | **Not named anywhere on cv.md.** | ⚠️ almost certainly done; unevidenced. Do not add to PDF unless Isaac confirms. |
| "Create **tools and processes** to help … the team develop high quality code faster … support and maintain products/services running in production" | Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs"; "Trained the Ops team … backup procedures" | ✅ enablement evidenced. |
| "excellent teamwork, written and communication skills … technical and non-technical team members" | 4+ years fully remote across US, Singapore, Uganda teams; Ops training; CTO reporting | ✅ lived. |
| Stack plus: **PostgreSQL** | Skills: "SQL" on Proficient line; **no relational engine in any bullet** | ⚠️ recurring gap (MEMORY). State it straight. |
| Stack plus: **AWS and Kubernetes** | "Intermediate: … AWS"; "AWS S3/EC2/EBS" in two Stack lines; CodeBits: "Docker, and Kubernetes" | ⚠️ partial. GCP is the deep cloud; AWS is intermediate; K8s is one project. |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Python/Go as primary production language** | **Soft-hard.** It is the first qualification line, but phrased "Python/Go **and any backend framework**", and the stack section is "or similar is a plus". A CTO-led 50-person team can choose to hire for architecture over syntax; a keyword-filtering recruiter cannot. | Python Proficient with two real bullets; Go Intermediate; 6+ years of typed/async backend in Node; Rust intermediate (static typing familiarity) | Lead the cover note with it: *"My production depth is Node.js; Python is my second language (migration tooling and SDK work at MTailor), and I've been writing Go at intermediate level. What I'd bring from day one is the architecture you describe — event-sourced microservices on Kafka and Pub/Sub, 3rd-party financial-data integrations, and a 20+ app zero-downtime migration owned end to end."* Then **close the gap with an artefact before the technical screen**: a small public Go or Django service on `github.com/zac-09` — a typed REST API over PostgreSQL, Dockerised, with tests. One weekend. It also closes gaps 2, 3 and 5 at once. |
| 2 | **Django** | Nice-to-have (listed as a "plus", one of several example frameworks). | Express.js in production; MVC/ORM concepts transfer | Covered by the artefact above if built in Django; otherwise a one-line honest "not in production". |
| 3 | **PostgreSQL / relational in production** | Soft. Listed as a plus; but a brokerage ledger almost certainly runs on Postgres, so expect a question. | SQL on Proficient line; MongoDB↔Firestore dual-write consistency is a harder consistency problem than CRUD Postgres | Use the story-bank gap answer ("Answering the TypeScript / PostgreSQL gap straight"). Artefact closes it. |
| 4 | **Caching, security practices, automated testing — none named** | Soft. All three are listed fundamentals. | Zero-downtime migration discipline; SDK docs; backup procedures | If Isaac has done these (very likely — Redis/memcache, auth, Jest/pytest), **add them to cv.md** so they can go on the PDF. Not added to this PDF because cv.md does not support it. |
| 5 | **AWS depth (intermediate) + Kubernetes depth (one project)** | Soft. Listed as a plus. | S3/EC2/EBS hands-on; $5,000/month AWS exit (cost ownership); K8s at CodeBits | Use the story-bank answer ("AWS — intermediate, hands-on S3/EC2/EBS, plus the cost ownership… Do not inflate"). GCP depth is real and transferable. |
| 6 | **Fintech regulatory context** | Not asked. Likely probed. | DeFi backends (value-moving, irreversible ops); Morningstar market-data integration; dual-write consistency | Frame via the "Fintech-adjacent backend" story-bank entry: "a duplicate message must never become a duplicate transaction". |

## C) Level and Strategy

**JD level:** unlevelled "Backend Engineer", qualitatively mid-to-senior ("strong experience", "sizable user base", "demonstrated ownership"). Aggregator copies label it mid-senior.
**Candidate's natural level for this archetype:** **Senior Backend Engineer IC.** ~6.7 years continuous (Jan 2020 →), 20+ app migration owned end to end reporting to a CTO, microservices architecture ownership, one 4-developer team led. He clears the stated bar on everything except the primary language.

### Sell senior without lying — permitted framings, all cv.md-backed

- "I led the end-to-end migration of 20+ production applications from Parse/MongoDB to Firebase/GCP with zero downtime, reporting directly to the CTO — the kind of infancy-to-production ownership your posting asks for."
- "I architected an event-driven microservices backend on Apache Kafka, Docker and Kubernetes, and built a production two-way data sync on Google Pub/Sub — so event sourcing and service boundaries are how I already think."
- "I've integrated financial market data at scale: scheduled jobs over 2M+ Firestore records keeping customer-facing prices current from Morningstar APIs."
- "My production language is Node.js; Python is my second language — I've shipped migration tooling and SDK work in it — and I write Go at an intermediate level. I'd rather tell you that on day one than have you find it on day thirty."
- "Three of my five roles reported directly to a CTO with no layer in between."

### Forbidden framings

- Any phrasing implying Django or Go in production. Any "Python-first" or "polyglot backend engineer" headline. Any PostgreSQL production claim. Any mention of caching layers, security hardening, or test suites that cv.md does not support.

### If downlevelled / priced as mid-level

An unlevelled title at a ~50-person company may carry a mid band. **Accept if comp clears the $80K target** — the architecture scope, timezone fit (UTC+3 vs UTC+4) and company quality (profitable, $1B AUM, Mubadala) make this one of the better seats in the tracker. Negotiate a 6-month review tied to shipping one owned service in the Python/Go stack, with explicit promotion criteria to Senior. Do not accept below the $60K floor regardless of framing.

### The actual plan

1. **Before applying (≤ 1 weekend):** ship the public Go or Django + PostgreSQL service with tests on `github.com/zac-09`. Link it in the cover note. It converts gap 1–3 from "assertion" to "demonstration".
2. **Apply via careers.sarwa.co** with the tailored PDF and a short cover note (JD quotes → proof points, stack honesty in sentence two, repo link).
3. **First call:** resolve (a) level/band, (b) employment mechanism for non-UAE hires (EoR vs contractor), (c) actual language split across the Investing/Trading/Account/Funding services (is anything in Node or TypeScript? is Go growing?), (d) on-call expectations for a brokerage platform.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted range | **None stated** in the JD. | JD body |
| Abu Dhabi backend engineer (market) | Median **~$91.5K**; 25th pct $62.6K; 75th pct $105K; 90th pct $118K. Individual UAE postings cite $90K–$120K/$130K. | [Levels.fyi — Backend SWE, Abu Dhabi](https://www.levels.fyi/t/software-engineer/title/backend-software-engineer/locations/abu-dhabi-are); [zerotaxjobs](https://zerotaxjobs.com/salaries/companies/presight/backend-engineer-5nqfwh7t) |
| UAE backend developer (Glassdoor) | Aggregate page exists; no Sarwa-specific salary entries found. | [Glassdoor UAE backend developer](https://www.glassdoor.com/Salaries/united-arab-emirates-backend-developer-salary-SRCH_IL.0,20_IN6_KO21,38.htm) |
| Sarwa-specific comp | **No data found.** Glassdoor has 13 reviews (4.1★, 89% recommend) but no backend-salary datapoints surfaced. Reviews cite "full remote work", "work-life balance", "competitive health insurance plan". | [Glassdoor Sarwa Reviews](https://www.glassdoor.com.au/Reviews/Sarwa-Reviews-E6177484.htm) |
| Against target | profile.yml target `$80K-120K`, floor `$60K`. The Abu Dhabi **median** sits inside target; the 25th percentile sits above floor. If a non-UAE remote hire is priced to a lower market (Poland listing suggests a CEE band exists), expect pressure toward the $60K–80K zone. | config/profile.yml; derived |
| Funding / stability | Series B **$15M led by Mubadala** (Aug 2021), with KIPCO and Shorooq; **~$25M total raised**. **First profitable quarter Q1 2024** (33% net margin, 124% QoQ revenue growth) and profitable since. **Crossed $1B client assets, May 2026** — first GCC-built fintech to do so. No layoffs found in 2025–26 searches. | [Wamda — Series B](https://www.wamda.com/en/2021/08/sarwa-closes-15-million-series-b-round-led-mubadala); [Bloomberg/BQ — Mubadala invests](https://www.bloombergquint.com/onweb/mubadala-invests-in-robo-advisor-sarwa-amid-retail-trading-boom); [Fintech Times — Behind the Idea](https://thefintechtimes.com/behind-the-idea-sarwa/); [FF News — $1B AUM](https://ffnews.com/newsarticle/tradetech/sarwa-reaches-1b-in-client-assets-a-first-for-a-homegrown-uae-fintech/) |
| Hiring outside UAE | Same Backend Engineer req posted with location "**Poland, Remote, or Abu Dhabi**" on aggregators — direct evidence of non-UAE remote hiring. | [Built In — Sarwa Backend Engineer](https://builtin.com/job/backend-engineer/2816571); [Rise](https://app.joinrise.co/jobs/sarwa-backend-engineer-ka25) |
| Leadership | Co-founders Mark Chahwan (CEO), Nadine Mezher (CMO), **Jad Sayegh (CTO)** — telecoms and high-speed trading background in Canada before founding Sarwa. CTO is the listed contact on this req. | [Entrepreneur ME — Finance Frontier 2026](https://mena.entrepreneur.com/finance/the-finance-frontier-2026-mark-chahwan-nadine-mezher-and-jad-sayegh-co-founders-sarwa); [Zartis podcast — Story of Sarwa](https://www.zartis.com/podcasts/story-of-software/134-story-of-sarwa/) |
| Demand trend | Gulf wealth-tech is growing (Sarwa, StashAway MENA, baraka); Python/Go backend demand in fintech is high and Node-first candidates are at a keyword disadvantage. | Market |

**Comp read:** there is no number to negotiate against yet, so the job is to **anchor before they do**. Sarwa is profitable and has a $1B AUM milestone to protect — they can pay a market rate, and the Abu Dhabi median is squarely in Isaac's target. The risk is that a remote non-UAE hire is quietly placed on a CEE/EoR band.

**Negotiation sequence (adapted from `_shared.md`):**

1. **Ask the mechanism first:** *"For engineers outside the UAE, is this an EoR employment contract or an independent contractor arrangement? And is the band the same as for Abu Dhabi-based engineers?"*
2. **Anchor on output:** *"The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."*
3. **Name the range:** *"Based on the Abu Dhabi market for this scope and the ownership you're describing, I'm targeting $80K–120K total. I'm flexible on structure — what matters is the package and the opportunity."*
4. **If below target:** *"I'm comparing with opportunities in the $80K+ range. I'm drawn to Sarwa because you're profitable, remote-first, and one hour from my timezone. Can we explore the top of your band with a 6-month review?"*
5. **If contractor:** price up 30–50% over the employee base to cover benefits (healthcare and L&D are listed benefits — confirm whether they extend to non-UAE hires).

## E) Personalization Plan

### Top 5 CV / PDF changes

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Professional Summary | Migration-first, Node-centric | Lead with **backend engineer for microservices + event-driven data flows + 3rd-party financial integrations**; state "Node.js in production, Python as second language, Go at intermediate level" in one clause; bridge to "scaling a wealth platform used by thousands" | Mirrors the JD's own language; puts the stack honesty in the first paragraph so a recruiter never feels misled. |
| 2 | Core Competencies grid | Not tuned | Microservices & Event Sourcing · REST & gRPC API Design · 3rd-Party API Integration · Data Pipelines & Consistency · Python & Node.js · Docker & Kubernetes · GCP & AWS · Zero-Downtime Migrations | Every tag cv.md-backed. **No** Django, PostgreSQL, caching, security, or testing tags. |
| 3 | MTailor bullets | Migration lead, then sync | Reorder: (1) ownership line (20+ apps, zero downtime, CTO), (2) Pub/Sub event pipeline + data consistency, (3) **Python** S3→GCS migration, (4) 3rd-party/platform integration (Webflow→Firebase), (5) $5K/month cost + Express Shipping revenue | "ownership from infancy to production" first, "event sourcing / data flows" second, Python visible third. |
| 4 | Dr Wealth bullets | UI line second | Lead with **Morningstar APIs** integration at 2M+ records (3rd-party financial data), then Express/Cloud Functions APIs in TypeScript; drop the Tailwind UI line | Wealth-platform relevance; reads as fintech experience without claiming more than cv.md says. |
| 5 | CodeBits bullets | Case mgmt first | Lead with **Kafka/Docker/Kubernetes microservices architecture**, then gRPC USSD service, then team lead | Matches "micro-services … event sourcing is a strong plus" and "Kubernetes" in the plus-stack. |

### Top 5 LinkedIn changes

1. Headline → "Senior Backend Engineer · Microservices, Event-Driven Systems & Cloud Migrations · Node.js / Python" — adds Python visibly and the architecture words Sarwa uses.
2. MTailor → make the Pub/Sub event pipeline and the Python S3→GCS migration explicit bullets (currently invisible in the summary line).
3. Dr Wealth → name "Morningstar APIs" and "real-time stock market prices" in the first line — financial-data integration is a search term for wealth-tech recruiters.
4. Skills → ensure Python, Go, Apache Kafka, Kubernetes, Docker, gRPC are all listed and endorsed; add PostgreSQL **only once a public project backs it**.
5. Featured → pin the new Go/Django + PostgreSQL repo once built; pin any public Kafka/Pub/Sub code from `github.com/zac-09`.

### cv.md maintenance items (not this application, but blocking others)

- **Caching, security practices, automated testing** are listed fundamentals in most backend reqs and appear nowhere on cv.md. If done, add one bullet each — the omission is costing keyword matches on every backend req.
- **PostgreSQL/SQL**: still on the Proficient line with no bullet behind it (standing MEMORY item). Either back it with a project or move it.

## F) Interview Prep

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Demonstrated ownership … from infancy to production" | **Zero-downtime Parse→Firebase migration** (story bank) | MTailor, 20+ production apps on EOL Parse/MongoDB, live customer traffic | Move everything to Firebase/GCP with zero downtime, reporting to the CTO | Designed a phased migration with a two-way sync keeping both datastores live; migrated storage, backend, Webflow site; documented and trained Ops | Zero downtime; all services off AWS; **$5,000/month** saved; contractor → FTE | "Parallel-running two datastores cost more engineering than a cutover but removed the single catastrophic-failure point. On anything customer-facing I'd make that trade again — and that's the simplicity-vs-safety trade-off your posting asks about." |
| 2 | "event sourcing … ensuring data consistency … robust and resilient systems" | **Two-way MongoDB↔Firestore sync on Pub/Sub** (story bank) | Months-long migration; both DBs serving live traffic | Bidirectional consistency, real time, no data loss | Node.js sync service on Google Pub/Sub with idempotent handlers, origin tagging and conflict handling | Parallel production traffic with no data loss | "Idempotency is the whole game in message-driven systems — design for redelivery from day one. In a brokerage, a duplicate message must never become a duplicate trade." |
| 3 | "micro-services … Kubernetes" | **Kafka/Kubernetes microservices for FIDA Uganda** (story bank) | NGO case-management system outgrowing a monolith; 4-dev team | Architect a backend multiple clients (web, mobile, USSD) could build on | Event-driven services on Apache Kafka, Docker, Kubernetes; led the team through delivery | Shipped and operated in production | "Get the service boundaries right before the tooling — event-driven boundaries kept us out of the distributed-monolith trap." |
| 4 | "integrating with 3rd party services" / "large volume of data" | **Morningstar market-data integration** (new — see scratch stories) | Dr Wealth PWA serving live stock prices from Firebase | Keep prices current for every instrument across 2M+ records | Built scheduled ad-hoc jobs querying Firestore and refreshing from Morningstar APIs; extended APIs in TypeScript on Cloud Functions/Express | Customer-facing prices stayed current across the user base | "External financial-data APIs set your freshness ceiling and your rate-limit floor — the job is batching and prioritising around both. Directly transferable to custodian and market-data feeds at Sarwa." |
| 5 | "strong experience with Python/Go" — the stack question | **Answering the Python/Go stack question straight** (new — see scratch stories) | Node-primary engineer applying to a Python/Go-first fintech | Answer honestly without talking himself out of the room | Name it first; quantify Python (migration tooling, SDK docs); state Go as intermediate; pivot to architecture match; attach a repo | Credibility preserved; conversation moves to strengths | "Never let the interviewer find the gap. Named first with code attached, a language gap becomes a ramp-speed demonstration." |
| 6 | "handling errors … robust systems" in a money-moving domain | **DeFi backends on Web3 + Node.js** (story bank) | Mind2matter agency; backends moving on-chain value | Build transaction flows and API layer under deadline | Validate-before-sign, safe retries, stable API contract | Delivered on agency deadlines | "Money-moving backends invert the usual trade-off — you cannot fix it in the next deploy once value has moved. Correctness checks belong before the call." |
| 7 | "Create tools and processes to help … the team" | **SDK docs and Ops training for the new Firebase stack** (story bank) | Post-migration MTailor; team and Ops unfamiliar with Firebase | Make the new platform operable without the migration engineer | Wrote Node.js + Python SDK documentation; trained Ops on dashboard and backups | Ops ran the platform independently | "Reliability is a documentation problem before it's a tooling problem." |
| 8 | "work with stakeholders from product/tech/marketing/operations/sales" | **Express Shipping and 3D visualisation at MTailor** (story bank) | Consumer e-commerce platform | Ship revenue features end to end | Implemented Express Shipping; built 3D viewer with video overlay + ffmpeg | **+$40 revenue/order**; higher buyer conversion | "Owning the whole slice meant no handoff tax — the same case for a backend engineer who sits with product and ops rather than behind a ticket queue." |
| 9 | "trade-offs of simplicity, readability, performance, speed-of-implementation" | **AWS exit saving $5,000/month** (story bank) | MTailor running split across AWS and GCP post-migration | Consolidate without regressions | Migrated storage via Python, moved remaining services, retired AWS footprint | $5,000/month saved | "Consolidation was the simple choice over the clever one — one cloud, one bill, one set of IAM. Simplicity usually wins on a small team." |

**Recommended case study to present:** the **MTailor migration told as an event-sourcing story** (stories 1 + 2 combined). Open with the Pub/Sub sync architecture diagram, not the migration anecdote: producers, idempotent consumers, origin tagging, conflict resolution, cutover sequencing. It demonstrates every architecture word in the JD and ends on a hard reliability number and a hard cost number.

**Red-flag questions and how to answer them:**

| Question | How to answer |
|---|---|
| **"Our backend is Python and Go. You're a Node engineer. Why should we hire you?"** | *"My production depth is Node.js, yes. Python is my second language — I've shipped migration tooling and SDK work in it at MTailor — and I write Go at an intermediate level. What doesn't change between languages is the part your posting spends most of its words on: microservices, event sourcing, 3rd-party integrations, and owning a system from infancy to production. I've done all four at production scale. Here's a Go/Django service I built to show ramp speed."* Then stop talking. |
| **"Django in production?"** | *"No. Express and Cloud Functions in production; Django in a side project. The ORM/MVC model is familiar — I'd be adopting it, not arriving with it."* |
| **"PostgreSQL?"** | Story-bank gap answer: *"My production datastores have been MongoDB and Firestore, where I solved dual-write consistency under live traffic — a harder consistency problem than most CRUD Postgres work. SQL I know; Postgres in production I haven't run. The repo I linked is on Postgres."* |
| **"How do you handle caching and security?"** | Answer only what is true. If Isaac has used Redis/Firestore caching and handled auth/secrets, say so concretely; **confirm with Isaac before the interview** since cv.md is silent. |
| **"Have you worked in a regulated financial environment?"** | *"Not regulated, but money-moving: DeFi backends where every on-chain call is irreversible, and a market-data integration keeping live prices current for retail investors. The instinct — validate before you commit, make retries idempotent, keep an audit trail — is the same one a brokerage needs."* |
| **"You're in Kampala. How does that work with an Abu Dhabi team?"** | *"UTC+3 against your UTC+4 — one hour apart, which is closer than any team I've worked with in four years of US and Singapore remote. Your posting says remote-first with the Abu Dhabi office optional, and I'm available for occasional on-site travel."* |
| **"Are you comfortable at the 'Backend Engineer' level?"** | *"I'd want to understand the band. I've led a 20+ app migration end to end and architected microservices on Kafka and Kubernetes, so I'd expect to be operating at senior scope. If the title is flat, I'd like the comp and a 6-month review to reflect the scope."* |
| **"Salary expectations?"** | §D sequence: mechanism first, then anchor on output, then "$80K–120K". |

**Story bank:** stories 4 (Morningstar integration) and 5 (Python/Go stack answer) are new themes and are written to the scratch stories file for the parent to merge. Stories 1, 2, 3, 6, 7, 8, 9 already exist in `interview-prep/story-bank.md`.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **4.0** | The duties — "fleshing out APIs, data flows/pipelines, integrating with 3rd party services", "microservice architecture", "event sourcing", "ownership … from infancy to production", stakeholder work across product/ops — are a near-direct description of Isaac's MTailor, Dr Wealth and CodeBits work. Held off 4.5 because caching, security and automated testing are listed fundamentals with zero cv.md evidence. |
| Stack | **2.5** | Primary language mismatch: "strong experience with Python/Go" against Node-first production depth. Python is Proficient with two tooling bullets; Go Intermediate; Django absent; PostgreSQL unevidenced in bullets; AWS intermediate; K8s one project. The architecture vocabulary (microservices, event sourcing, Kafka, Pub/Sub, gRPC, Docker/K8s) matches well, which is why this is 2.5 and not 2.0. |
| Seniority | **4.0** | Unlevelled title with a qualitative mid-senior bar; Isaac at ~6.7 years with programme-level ownership clears it. Not higher because an unlevelled title at a ~50-person company may carry a mid-level band, and because the stack gap could be used to justify a downlevel. |
| Remote / geo | **4.5** | "We are a remote-first team. Where you choose to work is up to you" with no country, authorisation or timezone clause; office explicitly optional; identical req posted for Poland confirms non-UAE hiring; **UTC+3 vs UTC+4** is the best timezone fit in the batch. Held off 5.0 because the employment mechanism for non-UAE hires (EoR vs contractor) and whether benefits extend are unstated. |
| Comp | **3.5** | No range posted. Abu Dhabi backend median ~$91.5K (Levels.fyi) sits inside the $80K–120K target and the 25th percentile clears the $60K floor — but a non-UAE remote hire may be placed on a CEE/EoR band, and no Sarwa-specific salary data exists. Profitable company with healthcare + L&D listed. Fair, not confirmed. |
| Stability / company | **4.5** | Profitable since Q1 2024 and every quarter since; $1B client assets (May 2026); Mubadala-led Series B, ~$25M raised, no further raise needed per the CTO; no layoffs found; Glassdoor 4.1 / 89% recommend; 9-year-old regulated business with founder-CTO still in seat. Held off 5.0 only for small-company concentration risk (~50 people, single-region product). |
| **Overall** | **3.8/5** | **APPLY, with the stack gap stated in the first paragraph of the cover note and a Go/Django+Postgres repo attached.** Strong company, clean geo, excellent timezone, and a JD whose hard parts Isaac has done. The language mismatch is the only thing between him and a strong fit — and it is the one gap a weekend of code can visibly narrow. |

## Keywords extracted

Backend Engineer, Python, Go, GoLang, Django, PostgreSQL, AWS, Kubernetes, microservices, micro-services, domain-driven architecture, clean architecture, event sourcing, APIs, data flows, data pipelines, 3rd party services, third-party integrations, application/domain logic, databases, caching, security practices, scalable, maintainable, sizable user base, large volume of data, data consistency, error handling, resilient systems, automated unit/integration tests, tools and processes, stakeholders, product/tech/marketing/operations/sales, ownership, infancy to production, trade-offs, simplicity, readability, performance, speed-of-implementation, Investing, Trading, Account Management, Funding, tens of thousands of clients, remote-first, fintech, wealth management, robo-advisor, Sarwa

---

## G) Draft Application Answers (added 2026-10-01 via `apply`)

Form read live via Playwright 2026-10-01 at careers.sarwa.co/jobs/6606143-backend-engineer/applications/new (Teamtailor). Fields: "Which country do you reside in?*" (text), "Please provide 3-5 references" (numeric field), First/Last name, Email*, Phone (country selector defaults to UAE +971), Upload CV, Additional files, Cover letter (textarea), two consent checkboxes. No video question was present at read time, though the page carries Teamtailor's generic "wait for video answers to finish processing" notice.

### Which country do you reside in?
> Uganda

### Please provide 3-5 references
> The field only accepts a number. Enter **3** and have three references ready (name, role, relationship, contact) for the screen. Suggested: the MTailor CTO, a Dr Wealth engineering lead, and a FIDA Uganda or LASPNET stakeholder from CodeBits. Confirm each person's consent first.

### Cover letter (paste into textarea; PDF version under "Additional files")
Text: `output/cover-letter-isaac-sarwa-2026-10-01.txt` · PDF (1 page, CV design): `output/cover-letter-isaac-sarwa-2026-10-01.pdf`

> Dear Jad and the Sarwa technology team,
>
> I will start with the thing your first requirement line asks about. My production depth is Node.js: six years of backend services, including the migration of 20+ live applications from Parse/MongoDB to Firebase/GCP at MTailor with zero downtime, reporting to the CTO. Python is my second language, used for migration tooling and SDK documentation on that same programme, and I write Go at an intermediate level. I have not shipped Django in production and I will not claim otherwise. What I would bring from day one is the part of your posting that takes years rather than weeks to learn.
>
> Your role is built around microservices, event sourcing, data flows and third-party integrations on a platform that moves people's money. I architected an event-driven microservices backend on Apache Kafka, Docker and Kubernetes for FIDA Uganda's case-management system, and at MTailor I built a real-time two-way sync between MongoDB and Firestore on Google Pub/Sub that ran under parallel production traffic for months. That work is idempotency, redelivery, ordering and reconciliation, which is the same discipline that keeps a funding or trading ledger consistent. At Dr Wealth I kept prices current for retail investors by running scheduled jobs over 2M+ Firestore records against the Morningstar market-data APIs, so I know what an external financial feed does to your freshness ceiling and your rate-limit floor.
>
> I have owned projects from infancy to production in small, remote, cross-functional teams across the US, Singapore and Uganda, and I am comfortable being the person who turns a product requirement into scope, architecture and a shipped service. Kampala is one hour behind Abu Dhabi, so a remote-first team with an optional office is a natural fit. Before a technical conversation I will share a small Dockerised Go or Django service with PostgreSQL and tests on github.com/zac-09, so you can judge my ramp speed on your stack directly rather than on my word.
>
> Sarwa is profitable, regulated and still led by its founders, and the problem you are solving, affordable investing for people the industry ignored, is the kind of work I want to put the next several years into. I would welcome a conversation.
>
> Best regards,
> Isaac Mubiru

### Other fields
- Upload CV: `output/cv-isaac-sarwa-backend-2026-10-01.pdf`
- Additional files: the cover letter PDF above
- Phone: change the country selector from UAE (+971) to Uganda (+256)
- Consent 1 (privacy policy): required. Consent 2 (future contact): your choice.

### Before you submit
- The cover letter promises a Go or Django + PostgreSQL demo repo before the technical conversation. Either build it this week or delete that sentence; do not leave a promise you will not keep.
- Comp is unstated; Abu Dhabi backend median is roughly $91K. Ask at the screen how non-UAE hires are engaged (employee via EoR vs contractor) and whether the UAE band applies.
