# Evaluation: Tether — DevOps Engineer (100% remote)

**Date:** 2026-10-01
**Archetype:** **Platform/Infrastructure Engineer** — and within that, a *release/build-engineering* seat (CI/CD architecture, multi-language package publishing, mobile release automation, IaC), not an application-platform or SRE seat. This is Isaac's **adjacent** archetype per `config/profile.yml` (`fit: 'adjacent'`), and the specific sub-flavour is the furthest point of that archetype from his backend centre of gravity.
**Score:** 2.9/5
**URL:** https://careers.tether.io/o/devops-engineer-100-remote
**PDF:** none — score below 3.0, no PDF generated per pipeline rule
**Verification:** live via Recruitee API (JSON, published 2026-09-02) 2026-10-01; JD saved to jds/tether-devops-engineer.md. 9 city-clone reqs exist; this is the canonical one.
**Recommendation:** **SKIP.** Weak match. Geography is wide open (the same "every corner of the world" clause that passed on #217 and #226) and the company is already in the pipeline, but this JD lists **ten mandatory requirements and Isaac has zero cv.md evidence for five of them** — GitHub Actions "at scale" for 3+ years, in-depth C++/CMake build systems, IaC tooling (Terraform/Ansible/CDK/CloudFormation), iOS/Android CI/CD, and signing/artifact-distribution release management. The C++ one is not closeable with a weekend project. **The Tether application to send is #217 (Backend Engineer, Wallets, 3.6/5)**, where the JD's first requirement is Node.js. Do not spend a Tether application on this req.

---

## Headline caveats (read these before the score)

1. **This is a release engineer's job description wearing a DevOps title.** Strip the boilerplate and the core is: "manage build, compilation, and publishing workflows for JavaScript, TypeScript, and C++ packages", "design robust multi-language build pipelines leveraging CMake", and "automating build, tagging, and publication processes across web, desktop, and mobile platforms". Nothing on cv.md describes owning a build or release pipeline as the deliverable. Isaac's infrastructure work (Docker/Kubernetes at CodeBits, the GCP migration at MTailor) was in service of shipping backend features, not of operating the delivery system for other teams' code. That is the archetype gap in one sentence.
2. **C++/CMake is a mandatory requirement with no adjacent evidence at all.** Verbatim: "In-depth knowledge of C++ build systems, specifically CMake, with proven experience optimizing native build and deployment pipelines." cv.md has no C++ anywhere — not in Experience, not in Skills (Proficient: Node.js, TypeScript, Firebase, React, GCP, Python, HTML, CSS, Git, Linux, MongoDB, SQL; Intermediate: Go, AWS, Rust, React Native). Rust is the nearest native-code language and it is Intermediate. This single bullet is a hard blocker on a req that says "Mandatory" above it.
3. **The headline experience bar is on a tool Isaac cannot evidence.** "3+ years of hands-on experience architecting and maintaining CI/CD pipelines using GitHub Actions or equivalent tools at scale in a production environment." CI/CD is not named on cv.md at all — a known gap already flagged on #222 ("CI/CD, testing, security not named") — and GitHub Actions is not named anywhere. He has almost certainly *used* CI across four remote roles; he has not *architected* it, and the JD's verb is "architecting".
4. **Mobile release automation is mandatory, and the only mobile line is an app build, not an app release pipeline.** JD: "Experience with mobile CI/CD automation, including build, tagging, and publication for iOS and Android applications." cv.md CodeBits: "Developed a cross-platform mobile app for LASPNET using React Native and Expo (iOS & Android), with Firebase push notifications." Building the app is real; code-signing, provisioning profiles, store publication pipelines and fastlane-style automation are not evidenced.
5. **The Tether domain caveat from #217 applies unchanged** (stablecoin issuer under long-running reserve/regulatory scrutiny; Bitcoin mining is an explicit business line: "Tether Power… optimize excess power for Bitcoin mining"). It is a values call for Isaac, not a scoring input, and it was surfaced in full in report 217 — not re-litigated here because the req fails on fit before the domain question is reached.

---

## Geo Check — PASS (identical clause to #217 and #226)

| Signal | Value | Weight |
|---|---|---|
| Job title | "DevOps Engineer **(100% remote)**" | Governs |
| JD body (verbatim) | "Our team is a global talent powerhouse, **working remotely from every corner of the world**." | Governs |
| Stated personal requirement | "If you have **excellent English communication skills** and are ready to contribute…" + "ability to work effectively in **globally distributed teams**" | Governs — Isaac works US-remote today; cv.md Languages: "English · Kiswahili" |
| Work-authorization clause | **None anywhere in the JD body** | — |
| Timezone / overlap-hours clause | **None anywhere in the JD body** | — |
| Country / region restriction | **None anywhere in the JD body** | — |
| Recruitee location field | "Remote job / **United Kingdom** / Remote" | **Metadata noise — does not govern.** Tether's documented city-clone pattern (9 clone reqs exist for this one posting; the Dubai chip on #217 was the same artefact) |

**Verdict: geography OPEN. Remote/geo scored 4.5**, held off 5.0 only by the UK chip that the application form would have to close — exactly the treatment given to #217's Dubai chip, for consistency. Candidate-safety notice in the JD still applies: apply only via https://tether.recruitee.com/, legitimate mail only from `@tether.to` / `@tether.io`, no WhatsApp/Telegram/SMS interviews, never any payment request.

**Geography is not why this is a SKIP.** It is the only dimension on which this req scores well.

---

## Continuity — third Tether req in the pipeline

| Tracker # | Report | Role | Score | Status |
|---|---|---|---|---|
| 217 | `reports/217-tether-2026-09-21.md` | Backend Engineer, Wallets (100% Remote Worldwide) | 3.6/5 | Evaluated — **APPLY WITH CAVEAT**; this is the Tether application to send |
| 226 | `reports/218-tether-2026-09-21.md` | Software Engineer, P2P (Search Team) | 3.3/5 | Evaluated — apply only with a hyperswarm + BM25 artifact |
| **231** | this report | DevOps Engineer (100% remote) | **2.9/5** | **SKIP** |

Comp and company data below reuse the #217 research and add DevOps-specific points. One application per employer: **#217 remains the pick.** Applying to a release-engineering req alongside a Node.js backend req at the same company would signal an unclear self-assessment to the same recruiting team.

---

## A) Role Summary

| Field | Value |
|---|---|
| **Archetype** | Platform/Infrastructure Engineer — release/build-engineering sub-flavour. Isaac's `adjacent` archetype. |
| **Domain** | Infra / developer tooling for a multi-platform product estate (web, desktop, mobile; JS/TS + C++). Tether Finance / Tether Data context (USDT platform, KEET app — the C++ + JS/TS + mobile combination strongly suggests the Holepunch/KEET build estate). |
| **Function** | Build + operate the delivery system: "Lead the design, architecture, and management of CI/CD pipelines using GitHub Actions"; "Oversee the build, packaging, and publishing lifecycle for JavaScript, TypeScript, and C++ packages"; "Automate end-to-end release processes, including tagging, building, signing, and distributing mobile, web, and desktop applications"; "Define and manage Infrastructure as Code". |
| **Seniority** | Unlevelled title; bar is "3+ years… architecting and maintaining CI/CD pipelines using GitHub Actions… at scale in a production environment" plus "Deep expertise in Linux system administration, networking, and IaC tools". Reads senior-IC. |
| **Core stack (mandatory)** | GitHub Actions · Docker (image creation, registry management, basic orchestration) · JS/TS package lifecycle → NPM · **C++ / CMake** · Linux admin + networking (shell, firewalls, VPN) · IaC (Terraform / Ansible / AWS CDK / CloudFormation) · mobile CI/CD (iOS + Android) · release management (versioning, signing, artifact distribution) · test-driven deployment |
| **Preferred** | Prometheus / Grafana / ELK · HA security-sensitive fintech/blockchain · blockchain app deployment · AI/ML pipelines (PyTorch/TensorFlow) |
| **Remote** | 100% remote, "every corner of the world". No restrictions in body. |
| **Contract** | Recruitee `fulltime_permanent` |
| **Comp** | **Undisclosed** in JD. See §D. |
| **Team size** | Not stated. |
| **TL;DR** | A worldwide-remote release-engineering seat at a company already in the pipeline, asking for a toolchain (GitHub Actions at scale, CMake, Terraform, mobile signing) that Isaac's CV does not evidence at all — the geography is excellent and the fit is not. |

## B) CV Match

| JD Requirement (Mandatory unless marked) | CV Evidence (exact lines from cv.md) | Match |
|---|---|---|
| "Bachelor's or Master's degree in Computer Science, Engineering, or a related discipline" | "**Bachelor of Science in Computer Engineering** — Makerere University, Kampala, Uganda, _August 2018 – September 2022_" | ✅ |
| "3+ years… architecting and maintaining CI/CD pipelines using **GitHub Actions** or equivalent tools at scale in a production environment" | **Nothing named.** No "CI/CD", "pipeline", "GitHub Actions", "deploy" verb anywhere on cv.md. Nearest adjacent: MTailor "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime" (a delivery programme, not a delivery *system*); CodeBits "Architected a microservices backend… using Apache Kafka, Docker, and Kubernetes" | ❌ **the headline requirement, unevidenced.** Four remote roles make it near-certain he has written CI config; "architecting… at scale" is a different claim and cv.md does not support it. |
| "Strong proficiency in test-driven deployment methodologies, including writing and maintaining automated test suites for integration and end-to-end validation" | **Nothing named.** Testing is absent from cv.md (same finding as #222). Adjacent: the two-way MongoDB↔Firestore sync enabling parallel production traffic during cutover is *de facto* validation-before-cutover engineering | ❌ unevidenced |
| "Expertise in containerization technologies such as **Docker**, including image creation, registry management, and basic orchestration patterns" | CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, **Docker, and Kubernetes**"; Stack line: "**Docker, Kubernetes**, NATS Streaming, gRPC" | ✅ **the strongest match on the req.** Kubernetes over-clears "basic orchestration patterns". Registry management is not named but is implied by running K8s. |
| "Experience managing package lifecycles for **JavaScript and TypeScript**, including versioning, compilation, semantic tagging, and publishing workflows to **NPM**" | Dr Wealth: "Extended backend APIs in **TypeScript** using Firebase Cloud Functions and Express.js hosted on Heroku"; Node.js across all five roles; Skills Proficient: "Node.js, TypeScript" | ⚠️ **half.** He is a JS/TS producer, deeply. He has never (on paper) *published* a package — no NPM, no semver tagging, no compiled-library release line. TypeScript is ~6 months evidenced (Dr Wealth only). |
| "In-depth knowledge of **C++ build systems, specifically CMake**, with proven experience optimizing native build and deployment pipelines" | **Nothing.** No C++ anywhere. Nearest native language: Skills Intermediate "Rust". | ❌ **hard blocker.** Not closeable in weeks. |
| "Advanced **Linux system administration and networking** skills, including shell scripting, package management, performance troubleshooting, firewalls, and VPN configuration" | Skills Proficient: "**Linux**"; MTailor Stack: "AWS S3/**EC2**/EBS"; Python scripting: "Migrated file storage from Amazon S3 to GCS via a Python script" | ⚠️ Linux is listed and EC2 operation is implied; **firewalls, VPN, networking and performance troubleshooting are not evidenced.** "Advanced… sysadmin" is a stronger claim than a Skills-line entry supports. |
| "Excellent communication, problem-solving, and collaboration skills… globally distributed teams" | 4+ years remote across US (MTailor, Mind2matter), Singapore (Dr Wealth), Uganda (CodeBits); Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ lived, and the enablement lines are genuinely DevOps-shaped |
| "Experience with **Infrastructure as Code** (IaC) tools such as Terraform, Ansible, AWS CDK or AWS CloudFormation" | **Nothing named.** GCP/Firebase provisioning for 20+ apps was done, but no IaC tool appears | ❌ unevidenced |
| "Experience with **mobile CI/CD automation**, including build, tagging, and publication for iOS and Android applications" | CodeBits: "Developed a cross-platform mobile app for LASPNET using **React Native and Expo (iOS & Android)**, with Firebase push notifications" | ⚠️ **built the app, not the release pipeline.** Expo EAS-style publishing is plausible but not stated; signing/provisioning/store automation is absent. |
| "Advanced knowledge of **release management** practices, including automated versioning, signing, and artifact distribution" | **Nothing named.** Adjacent: zero-downtime cutover of 20+ apps shows release *discipline*, not release *tooling* | ❌ unevidenced |
| *Preferred:* "observability… Prometheus, Grafana, or ELK" | **Nothing named** (known gap: no on-call/SLO/incident tooling on cv.md) | ❌ |
| *Preferred:* "high-availability, security-sensitive environments, especially in fintech, blockchain" | Mind2matter: "Built backends for DeFi applications using Web3 and Node.js"; Dr Wealth: real-time stock-price PWA; MTailor: zero downtime across 20+ production apps | ⚠️ fintech/blockchain adjacency is real but thin |
| *Preferred:* "deploying and managing blockchain-based applications" | Mind2matter DeFi line (above) | ⚠️ one line |
| *Preferred:* "AI/ML pipelines… PyTorch or TensorFlow" | Not on cv.md. profile.yml proof point: "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision" (API integration, not model training) | ❌ |

**Tally on the 10 mandatory items:** 3 clear (degree, Docker, communication), 3 partial (JS/TS packaging, Linux, mobile), **4 with no evidence** (GitHub Actions at scale, test-driven deployment, IaC, release management) **plus the C++/CMake hard blocker** — five of ten effectively unmet.

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **C++ / CMake build systems** | **HARD.** "In-depth knowledge… proven experience." | None (Rust Intermediate) | **None honest.** Cannot be bridged with a cover-letter phrase. This alone justifies SKIP. |
| 2 | **GitHub Actions CI/CD "at scale", 3+ years** | **HARD** — it is the headline requirement and a numeric bar. | Docker/K8s microservices; 20+ app migration | If cv.md is under-reporting real CI work, **add it to cv.md** (true for every future Platform req). For *this* req, even a truthful "I've written GitHub Actions workflows for my services" does not meet "architecting… at scale". |
| 3 | **IaC (Terraform/Ansible/CDK/CFN)** | Hard — "Mandatory" list, four named tools, none on CV. | GCP console/SDK provisioning for 20+ apps | A weekend Terraform-on-GCP repo would make this *honest to mention*; it would not make it "experience". |
| 4 | **Mobile CI/CD (iOS/Android signing + publication)** | Hard — "Mandatory". | React Native + Expo app shipped | If the LASPNET app was published via Expo/EAS, that is a true one-line claim worth adding to cv.md. Still short of fastlane-grade signing automation. |
| 5 | **Release management (versioning, signing, artifact distribution)** | Hard — "Mandatory". | Zero-downtime cutover discipline | Reframe only; no tooling evidence. |
| 6 | **Test-driven deployment / automated test suites** | Hard — "Mandatory". | Parallel-run sync as validation strategy | Add testing lines to cv.md if the work exists (recurring gap since #222). |
| 7 | Observability (Prometheus/Grafana/ELK) | Preferred. | None | Known gap; not decisive here. |
| 8 | NPM publishing | Partial on a Mandatory item. | Deep JS/TS production work | Publishing one real package from github.com/zac-09 would close this cheaply — and it is useful for *other* reqs too. |

## C) Level and Strategy

**JD level:** senior-IC release/DevOps engineer; 3+ years architecting CI/CD at scale, "deep expertise" in Linux/networking/IaC.
**Candidate's natural level for this archetype:** **mid-level platform generalist, senior backend.** He has operated Docker/Kubernetes and executed a large cloud migration — the *consumer* side of platform engineering, at a level a Platform team would value in a backend hire. He has not evidenced owning the pipeline, the registry, the signing keys or the IaC repo — the *producer* side this req is hiring for.

**There is no "sell senior without lying" plan that reaches this bar.** The permitted truthful framings — "I architected a Kafka/Docker/Kubernetes microservices backend with independent service deploys"; "I led a 20+ application zero-downtime migration to GCP, reporting to the CTO, running both datastores in parallel so every cutover was reversible"; "I wrote the SDK docs and trained Ops on backups for the new platform" — are good *platform-adjacent* evidence and would be strong on a Senior Backend req at an infra-heavy company. Against ten mandatory items of which five are unmet, they do not carry the application.

**Forbidden framings:** any claim of GitHub Actions architecture, Terraform/Ansible, CMake/C++, mobile signing pipelines, or Prometheus/Grafana. All absent from cv.md.

**The strategy is a redirect, not a downlevel plan:** the right Tether seat for Isaac's profile is already evaluated — **#217 Backend Engineer, Wallets** — and applying there instead of here is the whole of §C.

**If, despite this, Isaac wants a Platform/Infra pivot** (a legitimate medium-term goal given profile.yml lists it as adjacent): the cheapest credible evidence sequence is (1) publish one NPM package with a GitHub Actions release workflow (semver tags, provenance) from github.com/zac-09; (2) a Terraform-on-GCP repo reproducing part of the MTailor estate; (3) add real CI/CD + testing lines to cv.md. That is a quarter of evenings, and it would move *future* Platform reqs from ❌ to ⚠️ on four rows. It would still not touch the C++/CMake row on this one.

## D) Comp and Demand

**JD states no compensation.** Recruitee `fulltime_permanent`; no band, no equity note, no location-pay statement. Third-party data below; **web3.career figures are the site's own estimates, not disclosed bands.**

| Source | Data point | Read |
|---|---|---|
| JD body | **Not stated** | — |
| web3.career — Tether "DevOps Engineer (100% remote)" listings (several city clones of this same req) | estimates ranging **$87K–$156K**; one clone indexed at $154–156K | Spread across clones of the *same* req is itself the location-indexing signal |
| web3.career — Tether "Senior DevOps Engineer (100% remote)", **El Salvador clone** | est. **$105K–$120K** | Lower than the top clone despite the "Senior" title — consistent with clone-location pricing |
| web3.career — Tether Operations Limited salary page | Node.js Developer ~$165K; C++ Developer ~$88K; Full Stack ~$193K (site estimates) | Wide, title-driven; note the **C++ seat is the lowest-estimated engineering title** on the page |
| #217 research (reused) | Node.js req ~$84K indexed; **São Paulo clone est. $36–54K — below the $60K floor** | The location-pay pattern on Tether city clones is the governing risk on *any* Tether req |
| Market, Web3 DevOps (web3.career aggregate) | avg ~$140K; min $74K, max $250K | Reference only; US/EU-weighted |

Sources: [web3.career — DevOps Engineer (100% remote), Tether](https://web3.career/devops-engineer-100-remote-tether/143243) · [web3.career — DevOps Engineer, Tether Operations Limited](https://web3.career/devops-engineer-100-remote-tetheroperationslimited/153592) · [web3.career — Senior DevOps Engineer, El Salvador clone](https://web3.career/senior-devops-engineer-100-remote-el-salvador-tether/103547) · [web3.career — Tether Operations Limited salaries](https://web3.career/web3-companies/tetheroperationslimited/salary)

**Comp read: 3.0/5.** Undisclosed, like #217; but the DevOps estimates ($87–156K) sit higher and more consistently inside the `$80K-120K` target than the Node.js clones did, and the floor risk below $60K is less visible in the DevOps data. Held at 3.0 rather than higher because every figure is an aggregator estimate and the clone-location pattern is unresolved. Were the fit real, the first-call question would be the same as #217: *is comp indexed to location, and against which location?*

**Demand:** CI/CD + release engineering for multi-platform native/JS estates is a liquid, well-paid niche — but it is a niche with its own specialists (people who have run fastlane, signing infrastructure and CMake matrices for years), and Isaac would be competing against them on their home ground.

## E) Personalization Plan

**No PDF generated (score < 3.0).** Recorded for the record, and because items 3–5 are *cv.md maintenance* that will pay off on every future Platform/Infra req regardless of this one.

| # | Section | Current state | Proposed change (if a PDF were produced) | Why |
|---|---|---|---|---|
| 1 | Professional Summary | Backend/migration framing | Would lead with Docker/Kubernetes microservices + zero-downtime GCP migration + Linux/Python scripting; would **not** be able to mention GitHub Actions, Terraform, CMake or mobile signing | Everything the JD opens with is absent from cv.md; a truthful summary cannot front-load the JD's keywords |
| 2 | Core Competencies | — | Docker & Kubernetes · Linux · Node.js / TypeScript · Python scripting · GCP & Firebase · Zero-Downtime Migrations · Microservices · Documentation & Enablement | Only cv.md-backed tags; coverage of the JD's mandatory vocabulary would be ~3 of 10 |
| 3 | **cv.md maintenance — CI/CD** | Not named anywhere | Add a truthful CI/CD line to MTailor and/or CodeBits if the work was done (e.g., which CI ran the service deploys) | Recurring finding (#222, now #231). This gap is costing Platform-req keyword match on paper even where the work exists |
| 4 | **cv.md maintenance — testing** | Not named anywhere | Add integration/E2E testing lines if real | Same |
| 5 | **cv.md maintenance — Expo publication** | "Developed a cross-platform mobile app… React Native and Expo (iOS & Android)" | If the LASPNET app was published to the stores via Expo/EAS, say so in one clause | Converts the mobile row from ⚠️ to a truthful partial on future reqs |

### Top 5 LinkedIn changes (general, not req-specific)
1. Skills → add Docker and Kubernetes to the top endorsable slots (both are on cv.md and both are under-surfaced).
2. CodeBits description → lead with the Kafka/Docker/Kubernetes architecture line.
3. MTailor description → name the parallel-run cutover strategy explicitly; it is the closest thing on the CV to "test-driven deployment".
4. Featured → any public repo on github.com/zac-09 with a visible CI workflow file.
5. Open-to-work → keep "Remote" with no country restriction (unchanged from #217).

## F) Interview Prep

Not expected to reach interview on this req. Mapped anyway for the Platform/Infra archetype — these are the stories Isaac *would* lead with, and the honest edge of each. Reused by title from `interview-prep/story-bank.md` where they exist.

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Containerize applications and microservices with Docker… deployment pipelines for distributed environments" | **Kafka/Kubernetes microservices for FIDA Uganda** (bank) | CodeBits, NGO legal-tech, 4-dev team | Build a case-management backend that multiple NGO tenants could deploy independently | Architected event-driven microservices on Kafka + NATS + gRPC, containerised with Docker, orchestrated on Kubernetes | Independent service deploys per tenant; team of 4 shipped it | "Containers made the service boundary enforceable. What I did *not* build was the pipeline around it — images were built and pushed by hand-rolled scripts. That is exactly the layer this role owns." |
| 2 | "Fast, reliable, and reproducible software delivery"; "test-driven deployment" | **Zero-downtime Parse→Firebase migration** (bank) | MTailor, 20+ live apps, EOL backend | Move everything without user-visible downtime | Two-way MongoDB↔Firestore sync over Pub/Sub; service-by-service cutover with rollback held open for the whole window | 20+ apps, zero outages, ~$5,000/month saved | "Parallel-run with reversible cutover *is* a test-driven deployment strategy — just implemented in data plumbing rather than in a CI gate. I'd want to learn how to express that discipline as pipeline stages." |
| 3 | "Define and manage Infrastructure as Code… scalable and secure infrastructure" | **AWS exit saving $5,000/month** (bank) | Split AWS/GCP estate | Consolidate onto GCP without breaking live services | Python S3→GCS migration script; sequenced service moves | Durable $5K/month saving | "The provisioning was console + SDK, not Terraform. I'd not claim IaC; I'd claim I know exactly which parts of that estate I'd codify first and why." |
| 4 | "Collaborate closely with development, QA, and operations teams… improve release reliability" | **SDK docs and Ops training for the new Firebase stack** (bank) | Post-migration contractor phase | Make the new platform operable by people who had never used it | Wrote Node.js/Python SDK docs; trained Ops on dashboard + backup procedures | Ops ran the platform without the migration engineer in the loop | "Reliability is a documentation and training problem before it's a tooling problem." |
| 5 | "Build, tagging, and publication for iOS and Android applications" | **LASPNET field app on React Native + Expo** (bank) | NGO paralegals in the field | Cross-platform app with push notifications | Built with RN + Expo for iOS & Android, Firebase push | Shipped to both platforms | "Expo abstracts most of the signing pain. I have not run a bare fastlane/Gradle/Xcode release pipeline — that would be new." |
| 6 | Any mandatory-tooling question (GitHub Actions / Terraform / CMake) | **Answering the CI/CD-tooling gap straight** (new — see stories file) | — | — | — | — | Name the gap, name the adjacent evidence, name the plan. Never imply hands-on depth with a tool absent from the CV. |

**Recommended case study:** the Parse→Firebase migration framed as *release safety engineering* — reversible cutovers, parallel validation, zero downtime — because it is the only story on the CV whose shape resembles the job.

**Red-flag questions:**
- *"Walk me through a GitHub Actions workflow you architected."* → honest answer: he cannot at the scale asked; see story 6. This question ends the interview, which is why the recommendation is not to start it.
- *"CMake experience?"* → "None. My native-code exposure is Rust at an intermediate level."
- *"Why DevOps after six years of backend?"* → only answerable if the pivot is real; if it is, cite the sequence in §C.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **2.0** | Platform/Infra is Isaac's *adjacent* archetype per profile.yml, and this req is the release/build-engineering corner of it — the furthest sub-flavour from backend. The deliverable is the pipeline itself (GitHub Actions architecture, NPM/C++ publishing, mobile signing), which cv.md never shows him owning. His infra work is real but is the consumer side of platform engineering. |
| Stack | **2.0** | 10 mandatory items: Docker/K8s ✅ (strong), degree ✅, communication ✅; JS/TS packaging ⚠️, Linux ⚠️, mobile ⚠️; **GitHub Actions ❌, test-driven deployment ❌, IaC ❌, release management ❌, and C++/CMake ❌ as a hard blocker with no adjacent evidence.** Four preferred items: one thin ⚠️ (DeFi/Web3), three ❌. |
| Seniority | **2.5** | The bar is "3+ years architecting… CI/CD at scale" and "deep expertise" in Linux/networking/IaC. Isaac's ~6.7 years and CTO-reporting ownership are senior for *his* archetype; for *this* one the evidenced experience is mid-level generalist. No numeric bar he can point to meeting. |
| Remote / geo | **4.5** | "Working remotely from every corner of the world"; no work-auth, timezone or country clause in the body. UK Recruitee chip is city-clone metadata (9 clones exist) — identical treatment to #217's Dubai chip. Held off 5.0 only by that unresolved chip. |
| Comp | **3.0** | Undisclosed. Aggregator estimates for Tether DevOps clones $87–156K sit inside/above the $80–120K target more consistently than the Node.js clones did; El Salvador "Senior" clone at $105–120K shows the location-indexing pattern persists. All figures are estimates; floor risk from #217 (São Paulo clone $36–54K) not ruled out. |
| Stability / company | **3.5** | Consistent with #217's Domain/Growth 3.5: very large platform, lean org, worldwide hiring with documented Africa presence, `fulltime_permanent`. Discounted by the domain judgment call (stablecoin scrutiny, Bitcoin mining as a business line) and by the thin, boilerplate-heavy JD. |
| **Overall** | **2.9/5** | **SKIP — weak match.** Geography and employer are fine; the fit is not. Five of ten mandatory requirements are unevidenced, one (C++/CMake) is a hard blocker, and the headline requirement (GitHub Actions at scale, 3+ years) is absent from cv.md. **Send the Tether application to #217 (Wallets, 3.6/5) instead.** Use the cv.md maintenance items in §E (CI/CD, testing, Expo publication) so that future Platform/Infra reqs are scored on what Isaac has actually done rather than on what cv.md currently omits. |

---

## Keywords extracted

CI/CD · GitHub Actions · test-driven deployment · Infrastructure as Code (IaC) · Terraform · Ansible · AWS CDK · CloudFormation · Docker · containerization · image builds · registry management · orchestration · JavaScript · TypeScript · NPM publishing · semantic versioning / tagging · C++ · CMake · multi-language build pipelines · cross-platform (web, desktop, mobile) · mobile CI/CD (iOS, Android) · release management · code signing · artifact distribution · Linux system administration · networking · shell scripting · firewalls · VPN · observability · Prometheus · Grafana · ELK · high availability · fintech · blockchain · distributed systems · AI/ML pipelines · PyTorch · TensorFlow
