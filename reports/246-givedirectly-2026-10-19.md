# Evaluation: GiveDirectly — Senior Software Engineer (Remote)

**Date:** 2026-10-19
**Archetype:** **Senior Backend Engineer** (primary), with a product-minded full-stack tilt ("lean into product thinking, help shape the roadmap"). A small Platform/Infra component: "Improve our developer workflows by strengthening CI/CD pipelines".
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/givedirectly/jobs/4558349005
**PDF:** ✅ `output/cv-isaac-givedirectly-2026-10-19.pdf`
**Verification:** live via Playwright (main loop) 2026-10-19. Greenhouse posting, last updated 2026-10-02. JD saved at `jds/givedirectly-senior-software-engineer.md`.
**Recommendation:** **APPLY.** This is one of the cleanest fits in the pipeline. The geography is the best possible case: GiveDirectly employs in Uganda through its own entity, and the timezone rule is anchored on East Africa Time. The requirements are generic senior-backend ones, and Isaac meets most of them on cv.md lines: 4+ years, databases/cloud/APIs, deployment infrastructure, ownership, cross-functional communication. The bonus list (microservices/serverless, payments/financial software) is partly covered too. The mission fit is unusually concrete. Isaac built NGO systems for underserved Ugandans at CodeBits (FIDA case management, the LASPNET paralegal database, a USSD legal-aid service for feature phones). The JD explicitly welcomes "experience in the low-income and/or historically marginalized communities that we serve". The weak spots are a strongly-typed OOP language (Java/C#/Go: Isaac has ~6 months of TypeScript and intermediate Go), thin production Python/AWS, and CI/CD ownership. None of them is disqualifying, but the take-home, live-coding and system-design loop will test the first two. Pick one language for the loop (see C) and prepare it before applying. Comp is not negotiable and the Uganda figure is disclosed only during hiring. Ask for the Uganda benchmark at the first recruiter call.

---

## Geo Check — PASS (best case)

| Signal | Value | Weight |
|---|---|---|
| JD location | "Remote". Body: "You must be based in one of the countries on this list and must overlap with East Africa Time and US Eastern Time (8am-6pm) by at least 3 hours" | Governs |
| Country list | "Where GiveDirectly Can Hire" (perfectwiki.page/p/iOeyfUha_9) lists **Uganda under "GD Entities"**. GiveDirectly employs there through its own registered entity, not an EOR or contractor model (verified in main loop, 2026-10-19) | Strongest possible signal |
| Timezone | Kampala = EAT (UTC+3). The overlap rule is defined against EAT, so it is met trivially. The 3-hour overlap with US Eastern is 3–6 PM EAT (summer) / 4–6 PM EAT (winter) for 8–10/11 AM ET meetings. That is ordinary working time in Kampala | ✅ |
| Visa | "unable to sponsor... in the U.S. or U.K." | Irrelevant: Uganda-based |
| Travel | "~1-2 times per year to one of our countries of operation" | Fits profile.yml ("occasional travel"). Uganda itself is a country of operation |

**Verdict: geography OPEN, scored 5.0.** This is the first role in a long run where Isaac's location is an advantage, not a neutral. Answer the form honestly: Kampala, Uganda, EAT, available for 1–2 trips/year.

---

## Continuity

No earlier GiveDirectly evaluation exists (no matches in `reports/` or `data/applications.md`). Past postings for the same title (Senior Software Engineer, Fundraising; Senior Engineer, Growth) show the role recurs, and comp bands have risen since (see D).

---

## A) Role Summary

| Field | Value |
|---|---|
| **Archetype** | Senior Backend Engineer (primary) · product-minded full-stack IC · light platform/CI-CD |
| **Domain** | Cash-transfer delivery: recipient identification and payments, donor/fundraising platforms, or disaster cash response ("within 5 days of a crisis"). Team assignment is not final: Programs Engineering, Fundraising Engineering, or International Rapid Response |
| **Function** | Build. "Hands-on role with real ownership... help shape architecture, ship production-ready code". End-to-end from architecture to deployment and monitoring. Also CI/CD, testing, production debugging and roadmap input |
| **Seniority** | Senior IC. "4+ years of industry experience creating production-caliber software and systems" |
| **Stack** | Not specified. Requirements are language-agnostic: "strongly-typed, object-oriented programming such as Java, C#, Go, etc. and scripting languages such as Python, Ruby, etc.". Bonus: Python + AWS in production; payments/financial software; microservice/serverless. Public postings suggest a mixed estate: AWS throughout, Python on newer work, and Laravel/PHP + Salesforce + WordPress on fundraising (Fundraising SSE posting). The org is "building a new technology stack and operating model designed for a roughly 10x change in scale" |
| **Remote** | Fully remote, country-listed (Uganda included, GD entity) |
| **Team size** | Not stated. "Our engineering team still operates like a startup within GiveDirectly—lean, fast-moving, and high-autonomy" |
| **Interview loop** | Take-home → Live coding (60m) → Systems design (60m) → Project deep dive + behavioral (60m) |
| **TL;DR** | A senior generalist backend seat on a lean, high-ownership team that moves real money to people in poverty in East Africa and beyond, during a rebuild for 10x scale. Isaac fits on ownership, migrations, cloud backends and mission context. He is lighter on strongly-typed OOP and Python/AWS depth. |

## B) CV Match

| JD requirement | Evidence (cv.md lines) | Match |
|---|---|---|
| "4+ years of industry experience creating production-caliber software and systems" | CodeBits Jan 2020 → MTailor present: ~6.7 years across five roles | ✅ |
| "Experience with backend architecture: **databases**, **cloud services**, **APIs**" | MTailor: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime, reporting directly to the CTO". "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub". Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js". "Built ad-hoc jobs to query over 2 million Firestore records" | ✅ strong. ⚠️ every datastore is document-oriented (MongoDB/Firestore). No relational engine is evidenced, even though SQL sits on the Proficient line |
| "Experience **building infrastructure to deploy software**" | CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes". MTailor: "Saved the company $5,000/month by migrating all services off AWS". "Migrated file storage from Amazon S3 to GCS via a Python script" | ✅ for containers/K8s and cloud migration. ⚠️ no named CI/CD system or IaC tool |
| "**Strongly-typed, object-oriented** programming such as Java, C#, Go, etc." | Dr Wealth: TypeScript (~6 months, backend APIs). Skills: "Go" on the **Intermediate** line, with no production bullet. No Java/C# | ⚠️ **the main gap.** TypeScript is strongly typed but short-tenure. Go is unproven at work |
| "...and **scripting languages** such as Python, Ruby" | Python: S3→GCS migration script; "documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)". JavaScript/Node.js daily across all roles | ✅ (JavaScript + Python scripting) |
| "**High degree of ownership and autonomy**... leave our codebase in a better state" | MTailor: hired as an Upwork contractor and became the lead of the 20+ app migration, reporting to the CTO. "Wrote documentation for fellow engineers". "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ strong. This is the profile's #1 differentiator |
| "Strong analytical skills and communication... **describe technical trade-offs**, collaborate with cross-functional partners" | Ops training and SDK docs at MTailor. Reported to the CTO at MTailor and Mind2matter. "Led a team of 4 developers" at CodeBits, working with NGO clients (FIDA, LASPNET) | ✅ |
| "Collaborate with cross-functional teams (product, **ops**, data)... ship tools that directly support **program delivery in the field**" | CodeBits: case management for FIDA Uganda, paralegal database for LASPNET, "cross-platform mobile app for LASPNET using React Native and Expo", "USSD service for legal aid providers" | ✅ **direct analogue.** Field-facing NGO tools in Uganda |
| "Debug and resolve production issues... **root cause analysis**" | Implied by a zero-downtime cutover with live two-way sync. Not stated as a bullet | ⚠️ implied |
| "**Testing, documentation, and monitoring**" | Documentation ✅ (SDK docs, Ops training). Testing and monitoring are not named on cv.md (recurring gap) | ⚠️ |
| "Values alignment... experience in the **low-income and/or historically marginalized communities** that we serve" | CodeBits: legal-tech systems for NGOs serving Ugandan women (FIDA) and legal-aid recipients (LASPNET). USSD for users without smartphones. Based in Kampala, a GiveDirectly country of operation | ✅ **rare, genuine match** |
| Language: English | "English · Kiswahili" (Kiswahili is a plus for Kenya/Uganda/DRC program contexts) | ✅ |
| **Bonus:** "Python and AWS in a production environment" | AWS S3/EC2/EBS at MTailor (Stack line; AWS **Intermediate**), but the headline AWS story is *leaving* AWS. Python = migration tooling | ⚠️ partial |
| **Bonus:** "**payments/financial software**" | Dr Wealth: real-time stock-price PWA from Morningstar APIs (fintech). Mind2matter: "Built backends for DeFi applications using Web3 and Node.js". MTailor: Express Shipping (+$40/order checkout feature). No payment-rail/mobile-money integration | ⚠️ fintech-adjacent, not payments rails |
| **Bonus:** "**microservice/serverless** architecture" | CodeBits: Kafka/Docker/K8s microservices, NATS Streaming, gRPC. Dr Wealth: Firebase Cloud Functions (serverless). MTailor: Firebase/GCP Pub/Sub | ✅ both |

**Tally:** 7 core requirements: 5 ✅, 2 ⚠️ (strongly-typed OOP; testing/monitoring). 3 bonus items: 1 ✅, 2 ⚠️. Mission/values: ✅ (an unusually concrete match).

### Gaps and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Strongly-typed OOP (Java/C#/Go)** | Soft-to-medium. Worded "such as... etc.", so TypeScript plausibly qualifies, but the live-coding round will expose depth | ~6 months of production TypeScript (Dr Wealth). Go at Intermediate | Pick **one** language for the loop and prepare it now. Recommended: **TypeScript** for the take-home and live coding, since it is honest and close to his daily Node.js. Go is the alternative if he can be fluent in two weeks. Say plainly: "about six months of production TypeScript, JavaScript daily for six years, Go at intermediate level". Never claim more TS tenure (memory rule). Do not claim Java/C#. |
| 2 | **Python + AWS in production** (bonus) | Nice-to-have | Python migration script and SDK docs. AWS S3/EC2/EBS, then the migration off AWS | Use the "Python depth answered straight" story-bank card. Present the AWS→GCP exit as evidence of knowing AWS's cost and ops surface, not as AWS depth. Optional: a small Python + AWS Lambda/SQS payments-style demo repo (idempotent disbursement worker) before the take-home. It would cover gaps 2, 4 and 5 at once. |
| 3 | **No relational database evidenced** | Soft. "databases" is generic | MongoDB/Firestore at scale (2M+ records) | Do not assert PostgreSQL on the CV. In system design, be ready to choose and justify a relational store for a payments ledger (ACID, double-entry, idempotency keys). This is likely in the systems-design round. |
| 4 | **CI/CD ownership, testing, monitoring** | Medium. Explicit "what you'll do" items | Docker/K8s deploys, reversible parallel-run cutover | Use the "CI/CD-tooling gap" card. The take-home is the place to show it: ship it with tests, a GitHub Actions workflow, a Dockerfile and a README covering trade-offs. |
| 5 | **Payments rails** (bonus) | Nice-to-have | Fintech/DeFi backends, checkout features | Frame as "money-moving correctness": idempotency, reconciliation, and sync consistency from the MongoDB↔Firestore work. Read up on mobile-money disbursement APIs (MTN MoMo, M-Pesa B2C) before the system-design round. Isaac knows these as a Kampala resident, but has not integrated them. |
| 6 | **Legacy stack (Fundraising team): Laravel/PHP, Salesforce, WordPress** | Only if placed on Fundraising | None (no PHP) | Express a team preference for **Programs** or **International Rapid Response**, where the field and USSD context counts most. Stay open to Fundraising. |

## C) Level and Strategy

**JD level:** Senior IC, 4+ years. **Isaac's natural level for this archetype:** senior. His years exceed the bar, and the ownership evidence (contractor → migration lead, CTO-reporting, led a team of 4) is the kind this JD values above framework depth. "High-autonomy", "wear multiple hats" and "define what great engineering looks like in a mission-driven org" describe the MTailor story.

**Sell senior without lying:**
1. **Lead with ownership under live load.** "Led the end-to-end migration of 20+ production applications with zero downtime, reporting to the CTO, while two live datastores stayed in sync via Pub/Sub." This maps to "scale our impact... more efficiently" and to the org's own planned "stabilize legacy stack until switchover, then manage the migration". Public postings describe that legacy→new migration workstream, so this is Isaac's single most relevant story.
2. **Field-facing tools for underserved users in Uganda.** USSD legal aid, the LASPNET mobile app and FIDA case management. These are recipients-first constraints (feature phones, unreliable networks) and match GiveDirectly's core value.
3. **Cost and efficiency discipline.** "$5,000/month saved" maps to the cost-effectiveness ethos ("is this doing more good than giving the money directly?").
4. **Microservices and serverless.** Kafka/K8s at CodeBits and Cloud Functions at Dr Wealth, for the bonus line.

**Do not say:** "Java/C#", "Go in production", "PostgreSQL", "AWS expert", "payments-rails integration", "5+ years TypeScript", or "built career-ops" (it is a customised open-source project).

**If downleveled to mid-level:** acceptable. Even a mid band benchmarked off the Kenya senior figure would likely sit near or above Isaac's $80–120K target, and the mission and trajectory are strong. Ask for written promotion criteria and a 6–12 month review. Note: GiveDirectly has a **no-negotiation policy**, so leveling is the only real comp lever. Make the case for senior in the deep-dive round, not after the offer.

## D) Comp and Demand

| Source | Data point | Read |
|---|---|---|
| **This JD** | **US:** base $181,130 + 15% bonus (~$27,170) = ~$208,300 TC + $21,393 benefits stipend. **UK:** £124,370 base, ~£143,026 TC. **Kenya:** base **$112,350** + 15% (~$16,853) = **~$129,203 TC** + $8,453 stipend | Kenya is the nearest published anchor for Uganda |
| This JD | "if you are not based in the US, UK or Kenya, we will share an estimated salary benchmark for the country you are based in during the hiring process" | **Uganda figure not disclosed.** Do not assume parity with Kenya |
| Earlier GiveDirectly Senior SWE postings (2024–25) | US $157,500 · Kenya $92,500 (one listing $91,500) · UK £108,150, all with 15% target bonus | Current bands are ~15–21% higher, so pay has been revised upward |
| GiveDirectly pay policy (job postings) | Third-party salary aggregator. Target total comp "within the 75th percentile of similar roles". **No negotiation policy** | Pay is location-benchmarked. Offer = take it or leave it |
| GiveDirectly scale | "$1B in revenue in 2026"; Time100 Most Influential Companies 2026 (JD). A CTO posting (Aug 2026) describes a new cash-delivery stack built around "remote-first verification, fraud prevention, and high volume" while migrating off legacy | Funded, growing, and investing in engineering |
| Isaac's target (profile.yml) | $80K–120K; floor $60K | Kenya TC ($129K) is above the top of target. A Uganda benchmark would have to fall below ~$70K base to miss the target range. That is possible but unlikely at a 75th-percentile policy for a remote senior role. **Unverified, so ask** |

Sources: [GiveDirectly SSE (Built In)](https://www.builtinnyc.com/job/senior-software-engineer/8245662) · [GiveDirectly SSE, Fundraising (ffwd)](https://jobs.ffwd.org/companies/givedirectly-3/jobs/39773767-senior-software-engineer-fundraising) · [impactpool — SSE](https://www.impactpool.org/jobs/1075917) · [Fuzu — SSE Fundraising (stack: Laravel/PHP, Salesforce, WordPress)](https://www.fuzu.com/kenya/jobs/senior-software-engineer-fundraising-remote-givedirectly-inc) · [impactpool — Senior Engineer, Growth (AWS, Vue.js, PHP, Rails; older)](https://www.impactpool.org/jobs/753570) · [Uganda Country Director posting (75th-percentile policy)](https://unjobs.org/vacancies/1779246181687) · [impactpool — leadership posting (new stack, $1B revenue)](https://www.impactpool.org/jobs/1232257). Glassdoor and Levels.fyi data for GiveDirectly engineers was not found in search, so none is cited.

**Additional comp notes:**
- Employment through the **GD Uganda entity** means a local contract with Ugandan PAYE and NSSF deductions. Compare offers on net, not gross, against foreign-contractor offers.
- Unlimited PTO, health benefits "vary by country", desk allowance.
- **First recruiter-call question:** "What is the salary benchmark for a Senior Software Engineer based in Uganda, and is it paid in USD or UGX?"

**Comp read: 4.5/5.** Published bands are generous and transparent. Docked 0.5 because the Uganda number is unknown and non-negotiable.

**Demand:** GiveDirectly is mid-rebuild, aiming at a 10x scale change, with three engineering teams named in this one requisition. Competition for a remote, mission-driven, well-paid seat open to many countries will be heavy, so the application must stand out on mission and field evidence, not just stack.

## E) Personalization Plan

| # | Section | Current state (cv.md) | Proposed change (applied in PDF) | Why |
|---|---|---|---|---|
| 1 | Summary | Migration-centric | "Senior software engineer (6+ years) based in Kampala who owns backend systems end to end: architecture, deployment, production. Led a zero-downtime migration of 20+ apps... Built field tools for Ugandan NGOs, including a USSD legal-aid service for feature-phone users. Microservices (Kafka/K8s) and serverless (Cloud Functions)." | Hits "end-to-end", "scalable, reliable systems", "program delivery in the field", microservice/serverless, values |
| 2 | CodeBits | Last role, 4 bullets | Keep in full and frame it as "NGO / field-delivery tools". USSD first, with "for users without smartphones" | The most mission-relevant role. It must survive a 6-second scan |
| 3 | MTailor | Feature list | First bullet: migration ownership + CTO. Second: two-way sync (data consistency under live traffic). Third: infra cost and AWS exit. Fourth: product features (Express Shipping revenue) | Ownership → reliability → efficiency → product thinking, in JD order |
| 4 | Competencies | — | Backend Architecture & APIs · Zero-Downtime Migrations · Microservices & Serverless · Cloud Infrastructure (GCP, AWS) · Docker & Kubernetes · Event-Driven Systems (Pub/Sub, Kafka) · Field Tools for Underserved Users (USSD) · Cross-Functional Ownership | All evidenced, JD vocabulary |
| 5 | Skills | Proficient line includes SQL and TypeScript | Show TypeScript with no tenure claim. List Go as intermediate. Show Python as scripting/tooling. Keep SQL in the languages line as on cv.md, but do not name a relational engine | Honest typed-language signal for the "strongly-typed" line without inflating it |

**Top 5 LinkedIn changes**
1. Headline: "Senior Software Engineer · Backend & cloud migrations · Built field tools for NGOs in Uganda · Kampala (EAT)".
2. About: one sentence on CodeBits NGO work (FIDA, LASPNET, USSD). It is mission evidence recruiters at impact orgs search for.
3. Experience → CodeBits: add the USSD/feature-phone framing and the team-of-4 lead.
4. Skills: microservices, serverless, Kafka, Kubernetes, GCP, Pub/Sub (all evidenced). Add AWS only at the level shown.
5. Featured: the take-home-style public repo (Python/TS payments-worker demo) once built.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Own end-to-end development... architecture through deployment" | **Zero-downtime Parse→Firebase migration** (bank) | MTailor's 20+ apps on an end-of-life Parse/MongoDB backend | Move everything to Firebase/GCP without downtime | Hired as a contractor; wrote the migration script; became lead reporting to the CTO; per-app cutover | 20+ apps migrated, zero downtime, $5K/month saved | Migration risk is about reversibility. Every step had a way back |
| 2 | "scalable, reliable systems" / data consistency for money | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank) | Two live stores during cutover | Keep both consistent under production traffic | Node.js + Pub/Sub sync in both directions | Parallel traffic served through the cutover | Same discipline as a payments ledger: ordering, idempotency, one source of truth per field |
| 3 | "tools that directly support program delivery in the field" / recipients first | **USSD legal-aid service for rural Uganda** (bank) | Legal-aid users without smartphones or data | Reach them on the phones they own | USSD front end → Node.js over gRPC, provider-agnostic contract | Feature-phone users reached legal aid | Meet users on the infrastructure they have. The same applies to cash recipients |
| 4 | Cross-functional collaboration with ops | **SDK docs and Ops training** (bank) | Ops team moving to an unfamiliar Firebase stack | Make the new platform operable without engineers | Wrote Node/Python SDK docs; trained Ops on dashboard and backups | Ops self-sufficient on the new stack | A migration is not done until non-engineers can run it |
| 5 | "microservice/serverless architecture" | **Kafka/Kubernetes microservices for FIDA Uganda** (bank) | NGO case-management system | Independently deployable services | Kafka + NATS + gRPC on Docker/K8s, team of 4 | Shipped for FIDA | Bound services by domain. For a small team, fewer services can be better |
| 6 | "help shape our tech roadmap with an eye toward... maintainability" / cost-effectiveness | **AWS exit saving $5,000/month** (bank) | Split infra across AWS and GCP | Cut cost and ops surface | Moved all services off AWS; S3→GCS via Python | $5K/month saved | Every dollar of overhead is a dollar not delivered. Speaks GD's language |
| 7 | Team leadership / "fostering inclusivity" | **Leading four developers at CodeBits** (bank) | Small team, NGO clients | Deliver several NGO systems | Led architecture and delivery for 4 devs | FIDA + LASPNET systems shipped | Write things down so the newest dev can ship too |
| 8 | Gap: strongly-typed OOP | **"Answering the TypeScript / PostgreSQL gap straight"** + **"Python/Go stack question"** (bank) | — | — | Concede (6 mo TS, Go intermediate), redirect (language-independent design), show code (repo) | — | Language gaps are cheapest to close and most expensive to bluff |

**Recommended case study (Project Deep Dive round):** the Parse→Firebase migration, told as a scale and reliability story. Cover the architecture before and after, the sync design, the cutover sequence and rollback plan, what broke and how it was found, and the cost outcome. Close by bridging to GiveDirectly's own legacy→new-stack migration ("stabilizing our legacy stack until switchover, then managing the migration", from their public postings).

**System-design prep (likely prompts):** a disbursement service that pays 100,000 recipients via mobile money within 5 days of a disaster. Cover idempotent payout requests, a double-entry ledger in a relational store, reconciliation against provider callbacks, retries with backoff, fraud/duplicate-recipient checks, and observability. Isaac has not built this, so he should practise it twice before the loop.

**Red-flag questions:**
- *"Which strongly-typed language would you use in live coding?"* Use TypeScript and say plainly: "about six months in production, JavaScript daily for six years."
- *"Python/AWS in production?"* "Python for migration tooling and SDK docs. AWS S3/EC2/EBS, which I then migrated us off for cost reasons."
- *"Have you integrated payment rails?"* "No direct payment-rail integration. I've built fintech backends (Morningstar price feeds, DeFi) and handled data-consistency problems under live traffic. Here's how I'd design the disbursement path..."
- *"Why GiveDirectly?"* Use specifics: he lives in a GiveDirectly country of operation and built tools for NGOs serving Ugandans who don't have smartphones. Recipients-first is how he already designs.

**Values question prep (likely on the Greenhouse form):** GiveDirectly's values are opinionated, and the form or behavioral round will probe them. Map: "Recipients first" → USSD design; "Accept reality. Propose solutions" → leaving AWS for cost; "Think rigorously; act quickly" → the reversible per-app cutover; "Be proactively candid" → naming the typed-language gap first.

## G) Draft Application Answers

Drafted 2026-10-19 from the live Greenhouse form. Review and edit before submitting. Every fact comes from cv.md or the story bank.

**1. What specifically about this role, or GiveDirectly's mission, makes it a fit for you right now? (200 words max)**

> I live in Kampala, and the people GiveDirectly sends money to are not abstract users to me. Before my recent remote roles, I led a team of four at CodeBits building tools for Ugandan NGOs: a case management system for FIDA Uganda, a paralegal database and mobile app for LASPNET, and a USSD service so legal-aid providers on feature phones could reach a Node.js backend. That work taught me that software for low-income users lives or dies on unreliable networks, basic phones, and field staff who need it to just work.
>
> Since then I have spent four years at MTailor owning backend systems end to end. I led the zero-downtime migration of 20+ applications from Parse/MongoDB to Firebase/GCP, reporting directly to the CTO, with a two-way sync keeping both databases live during cutover.
>
> GiveDirectly is building a new stack for a roughly 10x change in scale while real money keeps moving. That is the kind of migration I know how to run without dropping anything, and it would be on behalf of people in the region where I live. I want my next few years of work to count for that.

**2. Tell us about a technical tool or approach you introduced or strongly supported in a past role. Why did you choose it, and what impact did it have?**

> At MTailor I pushed for a two-way, real-time sync between MongoDB and Firestore instead of a one-shot data migration. We had 20+ production applications on Parse/MongoDB with live customer traffic, and a "big bang" cutover would have meant freezing writes and betting everything on one weekend.
>
> I built the sync in Node.js on Google Pub/Sub, so both databases stayed current while we moved services over one at a time. Because writes flowed in both directions, any service could be rolled back to the old stack at any point during the migration window. That turned a risky project into a series of small, reversible steps.
>
> The impact: all 20+ applications moved to Firebase/GCP with zero downtime, and no customer-facing freeze. Moving everything off AWS also saved the company $5,000 a month. I wrote documentation on the new Firebase SDKs for the engineers and trained the Ops team on the new dashboard and backups, so the new stack stuck after cutover.
>
> The lesson I took away is that the safest migration is one you can undo, and I would reach for the same pattern on any rebuild where downtime costs real people.

**3. What's something you disagree with about how most companies build software?**

> Most companies build for their best-connected user: a recent smartphone, fast internet, and an app that assumes it is always online. Then they treat everyone else as an edge case to patch later.
>
> I learned the opposite at CodeBits. For the legal-aid tools we built in Uganda, the main users were on feature phones, so we built a USSD service talking to a Node.js backend over gRPC. Designing for that constraint first made the whole system simpler and sturdier: small payloads, clear state, and nothing that breaks when the network drops.
>
> I think the hardest real-world conditions should be the starting design point, not a later accommodation. If it works on a basic phone with a weak signal, it works for everyone.

**4. In 4 sentences or less, how would you explain the pros and cons of a microservices architecture to a non-technical teammate?**

> Microservices means splitting one big app into small, separate services, like a field office split into teams that each own one job, such as payments, verification, or messaging. The upside is that each team can change and fix its part without risking the others, and if one part fails, the rest can keep running. The downside is coordination: the teams now pass messages constantly, so you need more monitoring, clearer agreements between them, and more effort to find out where something went wrong. It pays off when the system and team are large enough to need that independence, and it is overhead you don't want when they're small.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **4.0** | Senior generalist backend is Isaac's primary archetype. Product thinking and field-delivery tools match CodeBits and MTailor. Small CI/CD component |
| Stack | **3.5** | 5/7 core ✅. Strongly-typed OOP is the real gap (TS ~6 months, Go intermediate). Python/AWS bonus is partial. No relational DB or payment rails. The stack is unspecified, which helps a generalist |
| Seniority | **4.0** | ~6.7 years vs 4+. Ownership evidence (contractor → migration lead, CTO-reporting, led a team of 4) fits "high ownership... real responsibility early" |
| Remote / geo | **5.0** | Uganda is a GD entity country. EAT is the anchor timezone. Travel is fine |
| Comp | **4.5** | Kenya TC ~$129K, above target. Uganda benchmark undisclosed and non-negotiable |
| Stability / growth / mission | **4.5** | $1B revenue 2026, Time100, 10x-scale rebuild, new CTO-level investment. Strongest mission alignment in the pipeline. Docked 0.5 for donor-funding dependence and an unassigned team |
| **Overall** | **4.2/5** | (4.0 + 3.5 + 4.0 + 5.0 + 4.5 + 4.5) / 6 = 4.25, rounded down to 4.2 because the strongly-typed-language gap will be tested directly in live coding. **APPLY.** |

---

## Keywords extracted

Senior Software Engineer · backend architecture · databases · cloud services · APIs · scalable, reliable systems · end-to-end ownership · architecture through deployment and monitoring · CI/CD pipelines · test coverage · production debugging · root cause analysis · documentation · monitoring · infrastructure to deploy software · strongly-typed object-oriented · Go · Python · AWS · payments / financial software · microservices · serverless · cross-functional collaboration · product thinking · tech roadmap · program delivery in the field · cash transfers · recipients first · remote · East Africa Time
