# Evaluation: Sand Technologies — Senior Software Engineer (Telco Product)

**Date:** 2026-10-19
**Archetype:** **Senior Backend Engineer** (primary) with a Platform/DevOps overlay (CI/CD, AWS ECS, Airflow, MLOps deployment)
**Score:** 3.3/5
**URL:** https://job-boards.eu.greenhouse.io/sandtechholdingslimited/jobs/5006487101
**PDF:** ✅ `output/cv-isaac-sand-technologies-2026-10-19.pdf`
**Verification:** live via Playwright (main loop) 2026-10-19
**Recommendation:** **APPLY WITH CAVEAT.** This is a backend IC seat that names Node among its accepted languages ("Python, Go, Ruby, Node or C#"), and the geography is open to Africa with no country list. That combination is rare. It is a far better fit than #204, the Sand Platform/SRE seat that scored 2.2. Three caveats: (1) the AWS-native delivery stack (ECS, Managed Airflow, CI/CD ownership, BDD testing, MLOps deployment) is mostly not on cv.md; (2) comp is very likely set to an African benchmark and may land at or below the $60K floor; (3) the form asks about travel to **US client sites**, and as a Ugandan national Isaac would need a US visa. Ask about the comp band at the first screen before investing interview time. Answer the US travel question honestly.

---

## Geo Check — PASS

| Signal | Value | Weight |
|---|---|---|
| Location field (Greenhouse, live 2026-10-19) | **"Africa"**, with no country list | Governs |
| JD body | "With colleagues across Africa, Europe, the UK and the US"; "comfortable operating in small teams while contributing to larger, globally coordinated efforts" via "virtual collaboration tools and video conferencing" | Remote-distributed |
| Form | Country of Residence; visa sponsorship need; base salary expectation **in USD**; "Are you able to travel to US client sites when needed?" | No country gate. USD payroll signal |
| Company history | #204 (Platform Engineer) was tagged "Rwanda / Africa", with free-text country and travel across Africa. Sibling reqs then were country-locked (SA, Romania). This req is Africa-wide | Consistent: Sand hires Africa-wide on some reqs |

**Verdict: geography OPEN for Uganda.** Scored 4.5, not 5.0, because of the US client-site travel question. Answers to give: Country = Uganda. Sponsorship = No (a remote role from Uganda needs no sponsorship). US travel = "Yes, occasional travel is fine. I'm a Ugandan citizen, so US trips need a B1/B2 business visa, which I would apply for with an invitation letter." Do not claim he holds a US visa unless he does. profile.yml allows 1–2 weeks of travel per quarter.

---

## A) Role Summary

| Field | Value |
|---|---|
| **Archetype** | Senior Backend Engineer (primary), with DevOps/platform responsibilities inside a small squad |
| **Domain** | Physical AI for critical infrastructure. The **Telco Product** team, most likely the AI Network Planner (ML + geospatial + network graphs for fibre/wireless rollout, sold on AWS Marketplace, using Bedrock/SageMaker) |
| **Function** | Build and run: backend services, API integrations, Python modules, CI/CD + test + observability on AWS, deploying data-science models and pipelines into the product, UAT support, mentoring mid-level engineers |
| **Seniority** | Senior IC: "5+ years", sets "engineering standards mid-level colleagues build on", takes direction from a Technical Lead |
| **Remote** | Remote across Africa. Occasional US client-site travel |
| **Contract** | Permanent |
| **Team size** | "Deliberately small" delivery squads with DS/DE specialists |
| **Comp** | Undisclosed ("Pay ranges: n/a"). USD expectation on form |
| **TL;DR** | A self-sufficient senior backend engineer who ships and operates the telco planning product on AWS and wires data-science outputs into it. Isaac has the backend, ownership and integration base. The AWS-native delivery tooling is the gap. |

## B) CV Match

| JD requirement | CV evidence (cv.md) | Match |
|---|---|---|
| 5+ years of software engineering, deploying robust production software | CodeBits Jan 2020 → MTailor present (~6.7 yrs). "Led the end-to-end migration of 20+ applications… ensuring zero downtime" | ✅ |
| Exposure to telco or critical/smart infrastructure (ideally) | CodeBits: "Built a USSD service for legal aid providers communicating with a Node.js backend via gRPC". USSD runs on mobile-carrier channels. That is telco-adjacent, not telco network engineering | ⚠️ adjacent |
| Full-stack, strong backend focus (Python, Go, Ruby, **Node** or C#) | Node.js in every role's stack. React/React Native on the frontend. Python: "Migrated file storage from Amazon S3 to GCS via a Python script"; Firebase SDK docs for "Node.js and Python" | ✅ Node. ⚠️ Python is tooling-level |
| DevOps and end-to-end solution design | Migration ownership reporting to the CTO; "Architected a microservices backend… using Apache Kafka, Docker, and Kubernetes" | ✅ design. ⚠️ DevOps tooling not named |
| Production deployment on a major cloud, **AWS strongly preferred (Managed Airflow, ECS, containers)** | GCP/Firebase is the primary production cloud. AWS: "AWS S3/EC2/EBS" in the MTailor stack, "Intermediate" in Skills, and the AWS exit ("migrating all services off AWS"). Containers: Docker/K8s at CodeBits. **No ECS, no MWAA/Airflow** | ⚠️ cloud yes; AWS-native depth thin |
| Strong software design; authentication/security; integration with data services | Data services: Pub/Sub two-way sync, Firestore jobs over "2 million" records, Morningstar APIs, Kafka/NATS/gRPC. **Authentication/security: nothing on cv.md** | ✅ data integration. ❌ auth/security unevidenced |
| Automated testing (unit, component, **BDD**) and CI/CD | **Not named anywhere on cv.md.** The same recurring gap as #222, #231 and #245 | ❌ unevidenced |
| Work autonomously, own features end to end, communicate with distributed colleagues and client stakeholders in regulated environments, estimate confidently | US, Singapore and Uganda remote roles. CTO-reporting at MTailor and Mind2matter. NGO clients (FIDA, LASPNET) at CodeBits. "Trained the Ops team" | ✅ (regulated environments: ⚠️, fintech PWA at Dr Wealth only) |
| *Desirable:* reusable software modules, preferably Python | Migration script and SDK docs. No published modules | ⚠️ |
| *Desirable:* Airflow or other orchestration | None. Kafka/Pub/Sub event pipelines are adjacent, but they are not DAG orchestration | ❌ |
| *Desirable:* MLOps | None at work. profile.yml: WhatsApp assistant integrating OpenAI + Google Vision (consuming model APIs, not deploying models) | ❌ (⚠️ for "integrating AI/model outputs into the product") |
| *Desirable:* mentoring mid-level/junior engineers | "Led a team of 4 developers"; SDK documentation for fellow engineers | ✅ |
| *Desirable:* B.Sc./M.Sc. CS or related | B.Sc. Computer Engineering, Makerere | ✅ |

**Tally:** core requirements 3 ✅, 3 ⚠️, 1 ❌ (testing/CI-CD); auth/security is also missing. Desirables 2 ✅, 1 ⚠️, 2 ❌ (Airflow, MLOps).

### Gaps and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Automated testing (unit/component/BDD) and CI/CD ownership** | Near-hard. "Own engineering standards" is a headline duty | Zero-downtime parallel-run cutovers worked as validation before release | If Isaac has written tests or pipelines at MTailor, that belongs in cv.md (a maintenance item, not a per-application fix). Otherwise, build a public repo before the technical screen: a Node or Python service with Jest/pytest unit and component tests, a Cucumber/behave BDD feature file, and a GitHub Actions pipeline that builds a container and deploys to **AWS ECS Fargate**. One artifact closes gaps 1, 2 and 5. |
| 2 | **AWS-native depth (ECS, MWAA)** | Medium ("strongly preferred") | Operated on AWS S3/EC2/EBS at MTailor; Docker/K8s at CodeBits; GCP in production | Same repo, deployed to ECS. In interview: "My production cloud has been GCP. On AWS I've worked with S3/EC2/EBS, and I led the move off it. Containers on Kubernetes. ECS specifically, I've deployed in [repo]." |
| 3 | **Auth/security** | Medium | None on cv.md | Use the existing story "[Gap handling] Answering the security-specialisation gap straight". Name the gap first. If Firebase Auth or token handling was part of the MTailor migration, confirm it with Isaac before claiming it. |
| 4 | **Airflow / MLOps** | Soft (desirable) | Event-driven pipelines on Kafka and Pub/Sub; OpenAI/Vision integration | Add an Airflow DAG to the artifact (local Docker Airflow is enough) that runs a small model-scoring step. Frame it as "consumed and deployed DS outputs", which is what the JD actually asks of this seat. DS/DE build the models. |
| 5 | **Python depth** | Medium (desirable "reusable modules preferably in Python") | S3→GCS script; Python SDK docs | Existing story "[Gap handling] Python depth answered straight". Write the artifact's module in Python. |
| 6 | **Telco domain** | Soft ("ideally") | USSD on carrier channels | Lead with USSD in the cover note. Do not call it network engineering. |

## C) Level and Strategy

**JD level:** senior IC under a Technical Lead. Not staff, not a lead. **Natural level:** senior on backend ownership, integration and migration. Mid on AWS-native DevOps and testing discipline. The level matches better than most reqs this year, because the JD explicitly wants a self-sufficient builder who ships under someone else's technical direction.

**Sell senior without lying:**
- Lead with **end-to-end ownership in a small team**: 20+ apps migrated with zero downtime, reporting to the CTO, plus the docs and Ops training that made it sustainable. The JD's "set engineering standards mid-level colleagues build on" maps to the SDK documentation and Ops enablement.
- Second, **integration with data services**: two-way Pub/Sub sync under live traffic, 2M+ record jobs against Morningstar, Kafka/NATS/gRPC microservices. "Consuming their pipelines" is exactly this skill.
- Third, **Africa-built, Africa-deployed**: FIDA and LASPNET systems, USSD for low-connectivity users. Sand's mission is critical systems in Africa, and this is genuine alignment.
- Fourth, **mentoring**: led 4 developers at CodeBits.

**Forbidden framings:** "AWS expert", "ECS/Airflow in production", "MLOps experience", "BDD/test automation owner", "PostgreSQL", "5+ years TypeScript" (TypeScript is ~6 months at Dr Wealth only), "telco network engineering".

**If downleveled to mid:** accept only if base is ≥ $60K USD. A mid title at an Africa-benchmarked company could fall well below that, so the comp question has to come first.

## D) Comp and Demand

| Source | Data point | Read |
|---|---|---|
| JD / Greenhouse | "Pay ranges: n/a". USD salary-expectation field | Undisclosed. International payroll |
| Report #204 (Aug 2026) | Johannesburg Platform Engineer median ~ZAR 840K (~$46K); Glassdoor's Sand company data was thin (~10 salaries) | Sand bands probably benchmarked to SA/Kenya |
| Levels.fyi, Greater Cape Town SWE | Median total comp ~ZAR 842K (~$46K), all levels | [Levels.fyi Cape Town](https://www.levels.fyi/t/software-engineer/locations/greater-cape-town-region) |
| Interview Query, Cape Town SWE | Median $62K base (n=10) | [Interview Query](https://www.interviewquery.com/salaries/software-engineer-salary-in-cape-town-south-africa) |
| TechInAfrica 2025 guide | Cape Town SWE avg ~$55K (range $34–69K); Nairobi devs ~$14.7K | [TechInAfrica](https://www.techinafrica.com/blog/the-salary-guide-2025-how-much-do-tech-workers-make-in-african-startups/) |
| Kenya remote USD (2026) | Remote USD averages ~$48–51K; mid-level remote $40–80K (source marks some figures unverified) | [Mctaba 2026](https://mctaba.com/blog/software-engineer-salary-in-kenya-in-2026-the-honest-guide) |
| Sand US-located SWE listings | Senior bracket (6+ yrs); no salary shown | [Built In LA](https://www.builtinla.com/job/software-engineer/7206189) |
| Sand-specific salary data | **None found.** No Glassdoor/Levels.fyi Sand data surfaced in this search | — |

**Comp read: 2.5/5.** An African-market senior band probably sits around $45–75K. Isaac's floor is $60K and his target is $80–120K. Form answer: **$80,000 base**, with "open to discussing the full package" in any free-text field. First-call question: "What is the band for this role, and is it benchmarked to a specific country?" If it tops out below $60K, withdraw politely.

**Demand/company:** Sand's telco product is the AI Network Planner (ML + network graphs + geospatial for fibre/wireless rollout). It has been shown at Connected Britain, Connect (X) and Fiber Connect 2025, and is sold through AWS Marketplace on Bedrock/SageMaker. That explains why the JD is AWS-heavy. Sources: [Sand — future of telecom network planning with AI](https://www.sandtech.com/insight/the-future-of-telecom-network-planning-with-ai/), [AWS Marketplace listing](https://aws.amazon.com/marketplace/pp/prodview-zw3yl4n4l7ney). No 2026 announcements found.

## E) Personalization Plan

| # | Section | Current state | Proposed change (applied in PDF) | Why |
|---|---|---|---|---|
| 1 | Summary | Generic migration framing | "production software for distributed product teams… owns work end to end, from solution design to deployment… integration with data services… Docker and Kubernetes… GCP and AWS… led a team of 4… USSD on carrier channels… AI-backed telco products" | JD vocabulary: end to end, solution design, data services, containers, mentoring, telco |
| 2 | Competencies | — | Backend (Node.js, Python) · End-to-End Solution Design · Integration with Data Services & APIs · Containers · Cloud Deployment (GCP, AWS) · Event-Driven Systems · Zero-Downtime Migrations · Team Lead & Enablement | Truthful keyword coverage. No ECS/Airflow/BDD |
| 3 | MTailor AWS bullet | "Saved the company $5,000/month by migrating all services off AWS" | "Migrated all services off AWS (S3, EC2, EBS), saving $5,000/month; … with a Python script" | Surfaces real AWS service names plus Python |
| 4 | Dr Wealth | "Built ad-hoc jobs… from Morningstar APIs" | Leads with "Integrated third-party market data" | Matches "Integration to APIs" |
| 5 | Projects | Agentic pipeline + WhatsApp + sync | Dropped the agentic pipeline; WhatsApp framed as "integrated model outputs into a product" | Matches "integrating AI/model outputs into the product" without claiming MLOps |
| — | **After the artifact exists** | — | Add "Projects: ECS-deployed service with unit/component/BDD tests, GitHub Actions CI/CD and an Airflow DAG", with the repo link in the summary | Converts the ❌ testing/CI-CD row and the ⚠️ AWS row |

### Top 5 LinkedIn changes
1. Headline: "Senior Backend Engineer · Node.js · Data integrations & cloud migrations · Remote from Kampala (UTC+3)".
2. About: one line on building for African users (USSD legal aid, NGO case management).
3. Skills: add Docker, Kubernetes, Google Pub/Sub, gRPC (all evidenced). Do not add ECS or Airflow until the repo exists.
4. Featured: the ECS/CI/BDD repo once published.
5. Experience: put the AWS service names (S3/EC2/EBS) into the MTailor AWS-exit line, the same as the CV.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Build solutions end to end" / own features | **Zero-downtime Parse→Firebase migration** (bank) | MTailor: 20+ live apps on an end-of-life Parse/MongoDB stack | Move everything without downtime, reporting to the CTO | Per-app cutover, parallel run, migration script, SDK docs | 20+ apps migrated, zero downtime | Plan the rollback before the cutover |
| 2 | "Integration with data services" / consuming pipelines | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank) | Two live datastores during cutover | Keep them consistent under traffic | Node.js consumers on Pub/Sub, two-way sync | Both systems stayed consistent through migration | Treat every message as possibly duplicated or out of order |
| 3 | "Integration to APIs" | **Morningstar refresh over 2M+ records** (bank) | Dr Wealth fintech PWA | Keep prices current | Ad-hoc jobs against Morningstar APIs; TypeScript Cloud Functions | Prices stayed current | The external API sets your freshness ceiling and rate-limit floor |
| 4 | Telco / critical-infra exposure | **USSD legal-aid service over gRPC** (bank) | Legal-aid users on basic phones, unreliable networks | Reach them where they are | USSD front end → Node.js backend over gRPC | Service usable on feature phones | Design for the channel the user actually has |
| 5 | Containers / solution design | **Kafka/Kubernetes microservices for FIDA** (bank) | NGO case management | Independently deployable services | Kafka + NATS + gRPC on Docker/K8s | Team of 4 shipped it | Draw boundaries around the domain |
| 6 | "Mentor mid-level engineers" | **Leading four developers at CodeBits** (bank) | Small team, NGO clients | Deliver several systems in parallel | Led design, reviews, delivery | FIDA and LASPNET systems shipped | Make standards written down, not tribal |
| 7 | "Set engineering standards" / enablement | **SDK docs and Ops training** (bank) | New Firebase stack nobody knew | Make it operable by others | Docs for Node.js/Python SDKs; trained Ops on backups | Team self-sufficient on new stack | Enablement is part of the deliverable |
| 8 | AWS cost/ops awareness | **AWS exit saving $5,000/month** (bank) | Split AWS/GCP estate | Consolidate | Moved services and S3 storage to GCP | $5K/month saved | Knowing when to leave a cloud is also cloud judgment. Be ready for "so why should we trust you on AWS?" |
| 9 | Testing / CI-CD gap | **Answering the CI/CD-tooling gap straight** (bank) | — | — | Name the gap, show adjacent evidence, show the repo | — | Name the gap first, then show code |
| 10 | Python / auth gaps | **Python depth answered straight** + **security-specialisation gap** (bank) | — | — | Same pattern | — | Concede, redirect, artifact |

**Recommended case study:** the MTailor migration (stories 1 + 2), told as solution design → integration → deployment → enablement. It covers four "What you'll do" bullets in one narrative.

**Red-flag questions:**
- *"You moved off AWS. How much AWS have you actually run?"* "S3, EC2 and EBS at MTailor, and I led the exit. My production depth is GCP. ECS I've deployed in [repo]." No more than that.
- *"How do you set up testing and CI/CD for a small squad?"* Prepare a concrete answer: test pyramid (unit → component → BDD acceptance tied to UAT), trunk-based development, PR checks, container build, ECS deploy with health checks and rollback. Present it as a plan, not as history.
- *"Can you travel to US client sites?"* "Yes, occasionally. I'd need a B1/B2 visa as a Ugandan citizen, so I'd need some lead time."
- *"Salary expectation?"* "$80K base, open to the full package." Ask for the band.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **3.5** | Senior backend IC, the primary archetype. Node is explicitly accepted. Small-squad, end-to-end ownership suits Isaac well. The DevOps/MLOps overlay pulls it down. |
| Stack | **2.5** | Node/data integration/containers fit. AWS ECS/MWAA, automated testing (incl. BDD), CI/CD, auth/security, Airflow and MLOps are all unevidenced. |
| Seniority | **3.5** | ~6.7 yrs, led 4 devs, CTO-reporting ownership. Telco exposure is only adjacent (USSD). |
| Remote / geo | **4.5** | "Africa", no country list, open form. Held off 5.0 by the US client-site travel question (visa needed). |
| Comp | **2.5** | Undisclosed. African benchmarks suggest ~$45–75K, straddling the $60K floor. |
| Stability / growth | **3.5** | Permanent role. Real AI-for-infrastructure product on AWS. Would build the exact AWS/MLOps skills Isaac lacks. No Sand-specific financial data found. |
| **Overall** | **3.3/5** | (3.5 + 2.5 + 3.5 + 4.5 + 2.5 + 3.5) / 6 = 3.33. **Apply with caveat**: build the ECS + tests + CI repo before the technical screen, and confirm the comp band at the first call. |

---

## Keywords extracted

Senior Software Engineer · backend engineering · Python · Node · full-stack · end-to-end solution design · DevOps · AWS · ECS · containers · Managed Airflow · orchestration · CI/CD · automated testing · unit testing · component testing · BDD · observability · code review · authentication · security · integration with data services · APIs · Python modules · reusable software modules · MLOps · model deployment · data pipelines · telco · critical infrastructure · UAT · mentoring · estimation · regulated environments · distributed teams
