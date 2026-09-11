# Evaluation: Railway — Infrastructure Engineer

**Date:** 2026-09-11
**Archetype:** Platform / Infrastructure Engineer (Isaac's **adjacent / stretch** archetype per `config/profile.yml`) — but in its hardest form: a systems-programming seat ("build system-level software… from scratch based on first principles", OS/kernel primitives, Golang/Rust gRPC services)
**Score:** 2.3/5
**URL:** https://jobs.ashbyhq.com/railway/b8072f95-043f-404d-a313-f0bdf8dd3c81
**PDF:** none (score < 3.0)
**Verification:** live via Playwright 2026-09-11: Ashby posting renders "Infrastructure Engineer @ Railway", `Location: Global`, `Location Type: Remote`. Board cross-check: 8 reqs, 6 tagged `Global` vs 2 tagged `Remote (United States)` — deliberate distinction. Application form on a sibling Global req inspected live: Name / Email / Resume / "Why Railway?" only — no location, country, or work-auth field.
**Recommendation:** **SKIP — weak match.** The geography is as good as this pipeline has ever seen (verbatim "This is a remote position available anywhere in the world!… we hire the best people wherever they are", a deliberate `Global` vs `Remote (United States)` split on the same board, and an application form with literally no location, country, or work-authorization field). None of that changes the fact that this specific req is a **deep systems seat**: OS-level primitives (CPU, memory, network, kernel), distributed-systems consensus, and Golang/Rust gRPC services built from scratch — a stack on which Isaac is *intermediate, not production*. Uniquely among the four Railway reqs being evaluated this week, it names **no TypeScript and no Node.js at all**. The pre-interview take-home ("Architect a Container Provisioning Engine to power something like Railway") is the single hardest artifact any JD in this pipeline has asked for. Geo quality does not rescue a stack mismatch. **This ranks last of the four Railway reqs — do not spend the one Railway application here.**

---

## Geo Check — PASS (best-in-class, and not the problem)

- **Exact JD text (verbatim, line 9):** "This is a remote position available anywhere in the world! Linkedin makes us show a country, but we hire the best people wherever they are." The posting is also tagged `#Global` in its own body.
- **Ashby field values (live, 2026-09-11):** `Location: Global`, `Location Type: Remote`.
- **Board cross-check (live):** 8 open reqs — 6 tagged `Global`, 2 tagged `Remote (United States)`. The company draws the distinction explicitly and deliberately, so `Global` on this req is a positive assertion, not a default.
- **Application form (live, sibling Global req):** Name / Email / Resume / "Why Railway?" — **no** country dropdown, **no** location field, **no** work-authorization or visa question. Nothing in the funnel can filter Uganda out.
- **Company footprint (corroborating):** Railway's remote employees are listed across US, Canada, Mexico, **Palestine**, UK, Thailand, **Syria**, Vietnam, Spain ([Himalayas company profile](https://himalayas.app/companies/railway/salaries)). Palestine and Syria are among the hardest payroll jurisdictions on earth — a company that has solved those has solved Uganda.
- **Timezone:** JD explicitly designs for it — "We're distributed ALL across the globe… stuff is ALWAYS happening… we do NOT expect you to work all the time, but you'll have to be diligent about your boundaries." Only two standing meetings a week (Monday and Friday Company Board). UTC+3 is a non-issue.
- **One geo-adjacent friction:** "Biannual team retreats" (railway.com/careers) means two international trips a year from Kampala — visa lead time, but inside `profile.yml` onsite_availability (1–2 weeks/quarter).

**Verdict: PASS, emphatically.** This is a 5.0 geo. Record it as the benchmark. The rejection below is purely technical.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure — but specifically **systems programming**, not SRE/ops. "Building the infrastructure which powers the Railway engine is the most core problem at Railway." |
| Domain | Developer cloud / PaaS. Railway provisions, builds and runs user containers; competes with Heroku/Render and positions against AWS. "serving hundreds of thousands of users" |
| Function | Build system-level software from first principles; expose OS/kernel-level capability as Golang/Rust gRPC services; be on-call "from time to time" |
| Seniority | Not stated as a years figure. Bar is expressed as capability: "masters of CPU, Memory, Network and the Kernel", "reach for the RAFT", "high impact, high agency" |
| Remote | Fully remote, anywhere in the world (see Geo Check) |
| Team size | "At the time of writing we're 21" (JD). Post-Series-B target "beyond 30" ([VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)) |
| Stack (this req) | Golang, Rust, gRPC, Postgres, RAFT/consensus, OS primitives, kernel. **No TypeScript. No Node.js. No JavaScript.** |
| Stack (sibling infra req, corroborating depth) | `railway.com/careers/infra-platform` names eBGP/eBPF, Wireguard, Vector/VictoriaMetrics/Clickhouse, ZFS/Ceph/VirtioFS, BuildKit/SOCI/Zot/overlayfs |
| Comp | **No figure published.** JD: "Great salary, full health benefits including dependents, strong equity grants, equipment stipend" |
| Process | 5 stages: intro call → **async pre-interview project: "Architect a Container Provisioning Engine to power something like Railway"** → 60-min solution review (5–50m building/expanding it live) → meet 4 team members → offer chat with CEO |
| Posting age | Published 2024-06-03 per the JD metadata — an evergreen req, live-verified today but >2 years on the board |
| TL;DR | A from-scratch systems-programming seat at the kernel/container-runtime layer of a developer cloud, written in Go and Rust, gated by a container-provisioning-engine design exercise. |

## B) CV Match

| JD Requirement | CV Evidence (`cv.md`, exact) | Match |
|---|---|---|
| "Build system-level software… from scratch based on first principles" | No systems-level software anywhere on cv.md. All work is application/service layer: Node.js APIs, Firebase Cloud Functions, migration scripts, React UIs | ❌ hard gap |
| "Strong understanding or curiosity of OS level primitives… masters of CPU, Memory, Network and the Kernel" | BSc **Computer Engineering** (Makerere) gives genuine academic grounding; Skills list "Linux" as Proficient. But zero professional evidence of kernel, scheduler, memory-management, or network-stack work | ❌ (curiosity/education yes; mastery no) |
| "A strong understanding of distributed systems… fault tolerant, resilient, scalable services" | CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes"; NATS Streaming in the stack; MTailor: Pub/Sub sync pipeline with idempotent consumers | ⚠️ real but **consumer-of-distributed-systems**, not builder-of |
| "You know how to reach for the RAFT" | NATS Streaming (Raft-backed) appears in the CodeBits stack — used, never implemented. No consensus, leader election, or replication protocol work | ❌ |
| "…but you also know how far you can get with Postgres" | Skills: **SQL** Proficient; MongoDB Proficient; Firestore at 2M+ record scale. **Postgres is not named on cv.md** | ⚠️ lateral |
| "Build Golang/Rust GRPC services from scratch" | **gRPC is genuine**: CodeBits "Built a USSD service for legal aid providers communicating with a Node.js backend via gRPC". But the language is Node.js. Skills: "**Intermediate:** Go, AWS, Rust" — no production line in either | ❌ on language, ✅ on protocol |
| Container runtime / provisioning internals (implied by the take-home and the sibling req's BuildKit/overlayfs/ZFS/Ceph stack) | Docker and Kubernetes appear once, in the CodeBits stack (2020–21) — deployed **onto** them, never built or operated the runtime | ❌ hard gap |
| "Creator monitors for its error boundaries" (own your own observability) | No observability tooling on cv.md. Repeats the #156/#168/#187/#204 gap (Prometheus/Grafana/OTel) | ❌ |
| "You may be on call from time to time" | No formal on-call rotation evidenced; zero-downtime migration cutovers are adjacent operational discipline only | ⚠️ |
| "A solid intuition about how long your solutions will last… all systems age" | Strong: led the retirement and replacement of an entire aging Parse/MongoDB estate — "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime" | ✅ |
| "Grit to dive into a problem, implement a solution, scale that solution, and replace it when needed" | The 20+ app migration is exactly this arc; also "Saved the company $5,000/month by migrating all services off AWS" | ✅ |
| "Great sense of direction and prioritization… ambiguity of an early stage startup" | Contractor → FTE → programme lead reporting directly to the CTO; ran a 4-dev team and NGO client relationships at CodeBits | ✅ |
| "High ownership, high agency… we expect you to change the company" | "Led a team of 4 developers"; CTO-reporting ownership at two companies; founder-shaped scope at CodeBits | ✅ |
| "Document any requirements for when you're not around" | "Wrote documentation for fellow engineers on working with the new Firebase SDKs"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ strong |
| "A great set of communication skills"; async-heavy global team | 4+ yrs fully remote for US (UTC-5/-8) and Singapore (UTC+8) teams from UTC+3; written-first habits | ✅ |

**Verdict.** The ✅ column is entirely *disposition*: ownership, grit, migration judgement, documentation, async communication. Railway will find those in every finalist. The ❌ column is the entire technical core of the req — system-level software, OS/kernel primitives, consensus protocols, container-runtime internals, and **the two languages the services are written in**.

This is the same shape as #204 (Sand Technologies Platform Engineer, 2.2), #187 (Latitude.sh SRE, 2.4), #168 (Supabase SRE, 2.0) and #156 (Canonical GitOps, 2.5) — with one substitution that makes it *harder*, not easier. Railway does not ask for Prometheus/Grafana/OTel, GitOps, Argo CD, Helm, SLOs or bare-metal Kubernetes; it waives that entire checklist. What it asks for instead is systems programming from first principles in Go and Rust at the kernel/container boundary, which Isaac has even less of than he has Kubernetes. The bar moved, it did not lower.

**The take-home is the decisive datum.** Stage 2 is not a screen — it is "Architect a Container Provisioning Engine to power something like Railway", submitted async, then defended and *extended live* for 45 minutes with the team. That exercise is a direct assay of exactly the gap above. An honest forecast: Isaac could produce a credible block-diagram architecture from his Kafka/K8s/gRPC experience, and would be out-designed in the live extension round by candidates who have written container runtimes. Spending the effort is a poor trade against the three sibling reqs.

## C) Level and Strategy

- **JD level:** senior-to-staff systems engineer. Railway expresses the bar as capability rather than years, which in practice *raises* it — there is no "5 years" box to argue about, only "are you a master of CPU, Memory, Network and the Kernel", and the take-home settles it empirically.
- **Isaac's natural level for this archetype:** senior backend engineer (~6.5 yrs), **junior-to-mid** in dedicated infrastructure, and **entry-level** in systems programming. Two-axis mismatch (domain + seniority-in-domain), identical to the #204 finding. No honest framing closes it. Do not attempt to sell up; the take-home is un-bluffable.
- **Concentration — read this before applying to anything on this board.** Four Railway reqs are being evaluated in parallel from the same Ashby board: **#212 (Scalability)**, **#213 (Full-Stack Product)**, **#214 (Observability)** and this one. They are read by a 21–30-person company where engineering hiring is almost certainly reviewed by the same two or three people. **Isaac should send at most one Railway application.** My analysis agrees with the scanner's flag: **this req ranks last of the four.** It is the only one of the set that names neither TypeScript nor Node.js, and the only one whose core competency is OS/kernel-level. The application slot belongs to the req whose stack overlaps Isaac's production languages — on the evidence in `cv.md` that is the **Full-Stack Product** seat (#213), Isaac's *secondary* archetype rather than his stretch one. Defer to #213's own score, but under no circumstances send this one instead of it, and never send two.
- **If Railway is the target anyway:** the right move is not a weaker application to a harder req. It is a strong application to #213 that mentions, in one honest sentence, an interest in moving toward the infra side over time — which is how an internal transfer at a 30-person company actually happens.

## D) Comp and Demand

| Signal | Data | Source |
|---|---|---|
| **This role — published figure** | **None.** `Compensation field: null` in the posting metadata. JD says only: "Great salary, full health benefits including dependents, strong equity grants, equipment stipend, and much more." | JD; [Ashby posting](https://jobs.ashbyhq.com/railway/b8072f95-043f-404d-a313-f0bdf8dd3c81) |
| Sibling infra req — published figure | Also none. "The page does not state a specific salary range or compensation band" | [railway.com/careers/infra-platform](https://railway.com/careers/infra-platform) |
| Benefits (global, flat-sounding) | Unlimited PTO; "universal healthcare wherever you are with 99% coverage"; dental and medical; first-class hardware; books/conferences/courses; biannual team retreats | [railway.com/careers](https://railway.com/careers) |
| Ability to pay | **$100M Series B closed 2026-01-22**, led by TQ Ventures with FPV Ventures, Redpoint and Unusual Ventures — against only ~$24M raised previously. Plans to grow "beyond 30 employees" | [Railway blog](https://blog.railway.com/p/series-b), [VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud), [PR Newswire](https://www.prnewswire.com/news-releases/railway-raises-100-million-series-b-as-ai-pushes-todays-cloud-infrastructure-past-its-limits-302667768.html) |
| Levels.fyi "Railway" data | **Unusable — contaminated.** The page reports a $9,765 median for "Software Engineer in Uzbekistan" alongside $199,000 for a US Product Designer; the low figures are national rail operators, not this company | [levels.fyi/companies/railway](https://www.levels.fyi/companies/railway/salaries) |
| Himalayas salary data | "We don't have any data on what Railway pays its remote employees" | [Himalayas](https://himalayas.app/companies/railway/salaries) |
| Isaac's numbers | Floor $60K; target $80–120K | `config/profile.yml` |

**Read — comp is an OPEN RISK, flag it on every Railway req, not just this one.**

There is no public figure for this company from any credible source, and the two aggregators that would normally supply one are respectively contaminated and empty. What can be said:

1. **Ability to pay is not in doubt.** $100M in the bank against a ~30-person headcount is roughly the most comfortable ratio in the dataset. A senior systems hire is unlikely to be offered below $60K in nominal terms.
2. **Willingness to pay *flat* is genuinely unknown, and this is the risk.** Railway employs people in Palestine, Syria, Vietnam and Thailand. That is superb evidence they will *hire* in Kampala and terrible evidence about the *number* — a company with that footprint has, almost by construction, a location-adjusted band, and Uganda sits at the bottom of any such grid. Contrast Toggl (#210), which publishes one flat €83,000 worldwide; Railway publishes nothing, which is the posture of a company that negotiates each offer against local benchmarks.
3. **Equity is real but illiquid.** "Strong equity grants" in a freshly-Series-B private company is a genuine component, and also unbankable in Kampala for years.
4. **Practical guidance for whichever Railway req is actually applied to (#212/#213/#214):** get a number early — at the stage-1 open-ended call, before investing in the take-home. Anchor at the **top** of $80–120K citing the global-flat precedent and the $100M raise; state a **hard floor of $60K** in USD. Do not let "strong equity" substitute for base. Treat the biannual retreats as a real, employer-funded cost line, not a perk to trade against base.

**Demand signal:** the req is dated 2024-06-03 and is still live in September 2026 — an evergreen, always-open systems seat. That means no urgency, and it also means the bar is high enough that they have been comfortable leaving it unfilled for two years. Both cut against applying.

## E) Personalization Plan — NOT APPLIED (no PDF generated)

**No PDF was generated and no CV tailoring was performed.** Score 2.3 < 3.0. Tailoring `cv.md` toward "OS level primitives" or "Golang/Rust gRPC services" would require either padding intermediate skills into production claims or foregrounding a Docker/Kubernetes line from 2020–21 as though it were runtime engineering. Both are dishonest and both would be exposed within ten minutes of the take-home review. The system does not do that.

**Concrete mitigation — what would actually open this archetype over time.** This is now the fifth report (#156, #168, #187, #204, #215) to close on the same gap, so state the plan once, concretely, and then act on it:

1. **Ship one public systems artifact, in Go, that Isaac can point at.** The highest-leverage single project is precisely the one Railway hands out for free in its own JD: **a container provisioning engine**. Write it as a real repo — a Go service that takes an image reference, pulls and unpacks it, sets up namespaces/cgroups, launches the process, streams logs, and exposes the lifecycle over **gRPC** (which Isaac has already shipped once, at CodeBits, and is the only load-bearing requirement on this JD he can already claim). Even a 500-line toy that correctly isolates a process and reports its resource usage converts "intermediate Go" into a demonstrable systems credential and makes the Railway take-home a portfolio piece rather than a cold exercise.
2. **Attach the missing observability half to it.** Instrument that same service with OpenTelemetry traces and a Prometheus `/metrics` endpoint behind a Grafana dashboard. That single addition closes the exact gap named in #156, #168, #187 and #204 — currently zero evidence across the entire pipeline — and would also lift the sibling **Observability** req (#214) out of the same band.
3. **Name Postgres.** Isaac has SQL as Proficient on `cv.md` but no dialect named, and Postgres appears in essentially every infra JD scanned this year, including this one. Port the toy engine's state store to Postgres and add "PostgreSQL" honestly to the Skills line. Lowest-cost item on this list.
4. **Do not chase the kernel.** eBPF, eBGP, ZFS/Ceph, BuildKit/overlayfs (the sibling req's stack) are multi-year specialisations. The goal of items 1–3 is not to become a kernel engineer; it is to move the Platform archetype from `adjacent` to `secondary` in `profile.yml` so that *platform-flavoured backend* roles stop scoring 2.x. Dedicated kernel-level seats like this one should keep scoring low, correctly.
5. **Until items 1–2 exist, stop spending evaluation slots on dedicated hands-on infra/platform reqs** — restated from #204, now with a fifth data point behind it. The scanner should downweight or auto-skip JDs whose core is OS-level/systems programming with no Node.js or TypeScript present.

**LinkedIn:** no change recommended for this req.

## F) Interview Prep — NOT APPLIED

No interview prep generated; the recommendation is to skip. Two notes preserved for whichever Railway req **is** applied to (#212/#213/#214), since the company and process are shared:

- **The process is the same across the board and it is project-first.** Stage 2 is an async build, stage 3 is a 60-minute session of which 45 minutes is *extending that build live*. Whichever req Isaac applies to, budget for a real project, not a chat. The JD also says "You can, and SHOULD! ask us questions ahead of time" — doing so is scored.
- **The strongest Railway-shaped stories already in `interview-prep/story-bank.md`**, in priority order: the zero-downtime Parse→Firebase migration (maps to "all systems age… replace it when needed"), the gRPC service bus for USSD legal-aid providers (the only direct gRPC credential, and Railway's chosen RPC layer), the two-way MongoDB↔Firestore Pub/Sub sync (idempotency and redelivery under live traffic), the Kafka/Kubernetes microservices at FIDA Uganda (distributed systems), and the AWS exit saving $5,000/month (Railway's entire pitch is infrastructure efficiency and cost — this story speaks their language directly).
- **Story bank:** no genuinely new STAR+R story emerged from this JD — every requirement it exercises maps to an existing entry, and the gaps it exposes produce no story by definition. Nothing appended.

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Technical/stack fit | **1.8** | The req's core — system-level software from first principles, OS/kernel primitives, RAFT-class consensus, container-runtime internals — has **zero** evidence on `cv.md`. The two implementation languages (Golang, Rust) are both listed **Intermediate** with no production line. Uniquely among the four Railway reqs, **no TypeScript and no Node.js appear anywhere in the posting**, so Isaac's 6-year production language is irrelevant here. Genuine partial credit for gRPC (shipped at CodeBits), Linux (Proficient), a Computer Engineering degree, Kafka/Docker/K8s exposure, and SQL — but Postgres is unnamed and the K8s work was consuming the platform, not building it. |
| Seniority fit | **2.5** | Disposition matches well — high agency, ambiguity tolerance, replace-your-own-systems judgement, documentation discipline, CTO-reporting ownership, led 4 devs. Seniority *within the domain* does not: this is a senior-to-staff systems seat and Isaac is entry-level at systems programming. The bar is set by capability, not years, and the pre-interview container-provisioning-engine project measures it directly and un-bluffably. |
| Remote/Geo | **5.0** | Best-in-class and the benchmark for this pipeline. Verbatim "available anywhere in the world… we hire the best people wherever they are"; a deliberate `Global` (6 reqs) vs `Remote (United States)` (2 reqs) split on the same board; an application form with **no** location, country, or work-auth field; existing employees in Palestine, Syria, Vietnam and Thailand; async-by-design with only two standing meetings a week. Kampala UTC+3 is a non-issue. Minor friction only: biannual international retreats. |
| Comp | **3.0** | Unknown and flagged as an **open risk**. No figure in the posting (`Compensation field: null`), none on the careers site, Himalayas empty, levels.fyi contaminated by rail operators. Ability to pay is excellent — $100M Series B (Jan 2026) against ~30 headcount, plus strong equity and global healthcare. Willingness to pay *flat* is unverified, and a footprint spanning Palestine/Syria/Vietnam is circumstantial evidence of a location-adjusted grid on which Uganda sits low. Neutral score reflecting genuine two-sided uncertainty, not a positive. |
| Domain/Growth | **3.0** | The domain is objectively excellent — a well-funded developer-cloud company solving novel problems, explicit growth culture ("when you figure out what area you want to grow in next… we'll make sure you land there"), and the learning on offer is exactly what would unlock the Platform archetype. Discounted because the growth is only realisable *if hired*, and this req's on-ramp is the steepest of the four; the same domain benefit is available at a far higher hire probability through the sibling reqs. |
| **Overall** | **2.3/5** | **SKIP.** Weighted toward technical fit and seniority-in-domain, as with #204 — a 5.0 geo cannot carry a 1.8 stack. Sits squarely in the established 2.0–2.5 dedicated-infra band (#168 = 2.0, #204 = 2.2, #187 = 2.4, #156 = 2.5), and is the **weakest of the four Railway reqs**. No PDF. Do not apply here; if any Railway application is sent, send exactly one, to the req whose stack overlaps Isaac's production languages. |

## Keywords extracted

Infrastructure Engineer, system-level software, first principles, OS primitives, CPU, memory, network, kernel, distributed systems, fault tolerant, resilient, scalable services, RAFT, consensus, Postgres, Golang, Go, Rust, gRPC, GRPC services, container provisioning engine, high agency, high ownership, early stage startup, ambiguity, on-call, error boundaries, monitoring, documentation, async, remote global, anywhere in the world, developer cloud, PaaS, Railway, equity grants, Series B, eBPF, eBGP, Wireguard, ZFS, Ceph, VirtioFS, BuildKit, overlayfs, Clickhouse, VictoriaMetrics, Vector
