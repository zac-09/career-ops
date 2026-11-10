# Evaluation: Ojin — Lead Platform Engineer (m/f/d)

**Date:** 2026-10-08
**Archetype:** Platform/Infrastructure Engineer (Isaac's *adjacent* archetype per `config/profile.yml`) at **Lead** level, with a Staff/Principal axis (sets technical direction, owns SOC2 Type II)
**Score:** 2.6/5
**URL:** https://job-boards.eu.greenhouse.io/ojin/jobs/4427313101
**PDF:** none. Score is below 3.0, so no PDF was generated (pipeline rule)
**Verification:** live via the Greenhouse boards API (`boards-api.greenhouse.io/v1/boards/ojin/jobs/4427313101?questions=true`) on 2026-10-08. Full JD and 16-question form returned, `updated_at` 2026-10-07. Playwright was not used because another agent held the browser.
**Recommendation:** **SKIP. This is a weak match.** Geography is probably passable on the same basis as #195, but this is a lead-level AWS/IaC/GPU-fleet seat. cv.md has no evidence for four of the nine "What We're Looking For" bullets: 5+ years of hands-on production AWS, IaC (CDK/Pulumi/Terraform), deep serverless *security*, and globally distributed low-latency systems. The form then asks directly about AWS years, GPU fleet scale and multi-cloud, so the gaps will show up at the screening stage, before any human reads the CV. The Ojin application worth sending is still **#195 (Product Engineer, 4.2/5)** if it is still open. Re-check that req before you do anything with this one.

---

## Geo Check — BORDERLINE PASS (same resolution as #195, with one stricter clause)

**Exact wording (verbatim from the live posting):**

| Source | Text |
|---|---|
| Greenhouse location label | "Berlin OR Remote (Europe)" |
| Benefits list | "Remote-friendly within CET ±2 hours, with a Berlin office if you're based locally" |
| Note at end of JD | "We're not able to offer visa sponsorship or relocation support for this role - you'll need to already be based within CET ±2h and have the right to work where you live." |
| Required form question | "Do you currently live in the CET timezone (±2 hours)? You'll need to be within ±2 hours of Berlin, CET." |

**Reading:**
- The operative gate is a **timezone band**, not European residence. No form question asks about EU residence or EU work authorisation. "Right to work where you live" refers to where the candidate lives, and Isaac has that right in Uganda.
- Kampala is UTC+3 with no DST. Berlin winter (CET, UTC+1) puts Kampala at +2h, which is exactly on the band edge but inside it. Berlin summer (CEST, UTC+2) puts it at +1h. Today, 2026-10-08, Berlin is on CEST, so the gap is +1h.
- **Remaining real risk:** the label still says "Remote (Europe)" and the hiring entity is a Berlin GmbH (Journee Technologies). A Uganda hire would need a contractor or EOR setup that the JD neither offers nor rules out. This posting says "Remote-friendly" once, where #195 said "You can work from anywhere within CET +/-2 hours" twice, and it adds the explicit no-visa/no-relocation note. That makes it slightly stricter in tone than #195, but it uses the same gate.

**What #195 tells us:** #195 (Product Engineer, 2026-08-13, 4.2/5) reached the same conclusion: the CET±2 timezone question is the real gate and Kampala falls inside it. **However, #195 is still `Evaluated` in `data/applications.md`, with no Applied, Responded or Rejected status since 2026-08-13.** The repo shows no sign that the application was ever submitted, so there is **no evidence either way** on how Ojin actually treats a Kampala-based candidate. The geo verdict rests on the posting's wording only, not on any recruiter behaviour. If Isaac did apply to #195 outside this system, its outcome would be the best evidence available and should be recorded.

**Remote score: 3.5/5.** The timezone gate is passable and honest. Docked for the "Remote (Europe)" label, the GmbH entity and the unproven employment model.

---

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer, Lead (with a Staff-level "set technical direction" scope) |
| Domain | Real-time conversational AI ("Human Agents") on a "globally distributed GPU fabric". Clients include BMW, H&M and Clinique |
| Function | Build + lead: run thousands of concurrent GPU servers, multi-cloud and multi-region routing/load balancing, deployment pipelines, observability, SOC2 Type II lead |
| Seniority | Lead, with "5+ years of hands-on production experience with AWS" |
| Remote | Berlin office or remote within CET ±2h (see Geo Check) |
| Team | "Small, talented team" working "directly with the founding team" |
| Comp | Not disclosed. The form asks "What are your annual salary expectations? (EUR)" |
| TL;DR | Own and scale Ojin's multi-cloud GPU infrastructure with IaC, and lead its SOC2 effort. This is a senior infra-specialist seat, not a backend seat. |

## B) CV Match

| JD requirement | cv.md evidence (exact) | Match |
|---|---|---|
| "5+ years of hands-on production experience with AWS" | MTailor stack lists "AWS S3/EC2/EBS". "Migrated file storage from Amazon S3 to GCS via a Python script". "Saved the company $5,000/month by migrating all services off AWS". Skills: AWS under **Intermediate** | ❌ **Hard gap.** The AWS exposure is a migration *off* AWS, inside one employer from 2022 onward. It cannot honestly be called 5+ years of hands-on production AWS. |
| "Proficiency in TypeScript or Go" | Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js" (Aug 2021–Jan 2022, about 6 months). Skills: Go under **Intermediate** | ⚠️ Partial. About 6 months of production TS plus 6+ years of Node.js/JavaScript. Go is listed but has no production line. |
| "Strong proficiency in Infrastructure-as-Code - AWS CDK, Pulumi, or Terraform" | None. No CDK, Pulumi, Terraform or CloudFormation anywhere in cv.md | ❌ **Hard gap.** Also a recurring gap (#195, #231). |
| "Solid grasp of at least one other major cloud platform (Azure, GCP, Oracle OCI)" | "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime". GCP Pub/Sub. GCP under Proficient | ✅ **Strong.** GCP is Isaac's home cloud. |
| "Deep expertise in serverless architectures and security best practices" | Firebase Cloud Functions (Dr Wealth). The Firebase/GCP platform at MTailor | ⚠️ Serverless yes. "Deep… security best practices" has no evidence. |
| "Solid understanding of containerisation and Docker in real production environments" | CodeBits: "Architected a microservices backend for FIDA Uganda's case management app using Apache Kafka, Docker, and Kubernetes" | ✅ Adjacent but real. NGO scale, 2020–21. |
| "Experience with globally distributed, low-latency systems - this is core to what we do" | Real-time items: "real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"; "PWA delivering real-time stock market prices" | ⚠️ Real-time data, yes. Globally distributed, multi-region, latency-sensitive routing, no. |
| "Startup-experienced" | MTailor (reporting to the CTO), CodeBits, Mind2matter | ✅ |
| "Clear communicator in English" | Documentation for engineers. Trained the Ops team on the Firebase Dashboard | ✅ |
| Do: "Manage large-scale deployments of thousands of concurrent GPU servers" | None | ❌ No GPU or ML infra experience at all. The form asks directly. |
| Do: "Architect… routing, and load balancing across multiple clouds and regions" | AWS→GCP migration is cross-cloud work, but it was a move between clouds, not live multi-cloud routing | ⚠️ |
| Do: "Lead our compliance and security certification work including SOC2 Type II" | None | ❌ |
| Do: "Own observability and monitoring" | Not named in cv.md | ❌ (unevidenced) |
| Do: deployment pipelines | CI/CD not named in cv.md (flagged on #222 and #231) | ❌ (unevidenced) |
| Nice: AI/ML workloads and GPU | WhatsApp chatbot calling OpenAI and Google Vision APIs (profile.yml). That is API consumption, not GPU workloads | ⚠️ thin |
| Nice: AWS CDK; systems/graphics programming; Wine/Proton/VKD3D | Rust under Intermediate; nothing else | ❌ |

**Count against "What We're Looking For" (9 bullets):** 3 clear passes (other cloud, Docker, startup) plus English as a fourth. 3 partials (TS/Go, serverless, low-latency). 3 hard fails (5+ years AWS, IaC, deep security/serverless depth) once you combine the partials honestly with the *Do* list, which adds GPU fleets, SOC2, observability and CI/CD.

**Gaps and mitigations:**
1. **5+ years of production AWS. HARD BLOCKER.** The form asks for a number. The honest answer is roughly 2–3 years of incidental S3/EC2/EBS use at MTailor, ending with migrating everything off AWS. There is no mitigation that keeps the answer truthful and clears the bar.
2. **IaC (CDK/Pulumi/Terraform). HARD BLOCKER for a Lead.** Adjacent work: Docker/Kubernetes manifests and GCP setup. A weekend Terraform or CDK project would help future infra applications but would not make Isaac a credible *lead* on IaC here.
3. **GPU fleet at scale. HARD.** The form asks "Have you managed large-scale GPU server deployments?" The truthful answer is no. Nothing adjacent exists.
4. **SOC2 / security certification leadership.** No evidence. Nice-to-have depth for most roles, but here it is a named responsibility.
5. **Lead / technical-direction scope.** The closest evidence is "Led a team of 4 developers" at CodeBits and leading the MTailor migration while reporting to the CTO. That is real leadership, but not infra-org leadership.
6. **TypeScript depth.** About 6 months in production. Go is listed but has no production evidence. Do not overstate either.

## C) Level and Strategy

- **JD level:** Lead Platform Engineer who sets infra direction for a GPU-fleet AI company. **Isaac's natural level for this archetype:** mid-to-senior *backend* engineer with migration-heavy infra exposure. Platform/Infra is his *adjacent* archetype, and at Lead level it is a two-step stretch: wrong specialism and a level above.
- **Selling senior without lying** (if he applies anyway): lead with the zero-downtime 20+ app migration as the infra-ownership story, the AWS→GCP move as the cross-cloud story ("$5,000/month saved"), and Kafka/Docker/Kubernetes for containers. Be explicit that IaC and GPU are not on the CV.
- **If downleveled:** Ojin has no non-lead platform req open in this posting. A downlevel would effectively mean being redirected to the Product Engineer track (#195), which is the better fit anyway.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Published range | None. The form asks for EUR annual expectations | Greenhouse form |
| Berlin Lead Cloud/Platform Engineer | Roughly €95K–€120K gross | [jobrise.io: Cloud Engineer Gehalt Berlin 2026](https://jobrise.io/de/blog/cloud-engineer-gehalt-berlin-2026/) |
| Berlin Platform Engineer, all levels | About €85.5K average | [jobvector.de: Platform Engineer Gehalt](https://www.jobvector.de/gehalt/platform+engineer/) |
| Lead SWE with AWS, Berlin | Reference bucket | [Payscale: Lead Software Engineer, AWS, Berlin](https://www.payscale.com/research/DE/Job=Lead_Software_Engineer/Salary/dcabe0bc/Berlin-Amazon-Web-Services-AWS) |
| vs profile.yml | €95–120K is at or above the $80–120K target. Comp is not the problem; fit is | profile.yml |
| Benefits | 28 days vacation, 1 mental-health day, €900 education budget, home-office equipment | JD |

Demand: real-time voice/avatar AI on GPU fabric is a hot niche. Lead infra hires with GPU-fleet experience are scarce, so Ojin will screen hard on exactly the experience Isaac lacks.

## E) Personalization Plan

No PDF was generated because the score is below 3.0. If Isaac overrides the recommendation, the honest edits would be:

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Backend/migrations headline | "Backend engineer with multi-cloud migration ownership (AWS → GCP, 20+ apps, zero downtime)" | Uses JD multi-cloud vocabulary truthfully |
| 2 | Competencies | — | GCP · Serverless (Cloud Functions) · Docker/Kubernetes · Event streaming (Kafka, Pub/Sub) · Zero-downtime migration · Startup ownership | Only skills with evidence |
| 3 | MTailor bullets | "$5,000/month" is 6th | Move the AWS-exit cost saving and the S3→GCS migration to the top | Cost and efficiency framing ("performance and efficiency") |
| 4 | CodeBits | Kafka/K8s line is last | Put it first | Containers in production |
| 5 | Skills | AWS "Intermediate" | Leave as is. **Do not** add Terraform/CDK/Pulumi/GPU | Honesty: none are evidenced |

LinkedIn: only if real: add any IaC, CI/CD or observability work that exists but isn't in cv.md (a recurring gap across #195, #222, #231 and #239).

## F) Interview Prep (only if he applies anyway)

| # | JD requirement | STAR+R story (from story bank / cv.md) | Reflection |
|---|---|---|---|
| 1 | Multi-cloud / other cloud | AWS → GCP exit at MTailor, $5,000/month saved | Moving clouds teaches the failure modes of both |
| 2 | Reliability / zero-downtime deploys | 20+ app Parse/MongoDB → Firebase/GCP migration with zero downtime | Dual-write and sync before cutover |
| 3 | Real-time / low-latency | Two-way MongoDB↔Firestore sync over Pub/Sub | Idempotency first, latency second |
| 4 | Containers | Kafka/Docker/K8s microservices for FIDA Uganda | Would choose simpler infra for a 4-dev team today |
| 5 | Startup ownership (form question) | CodeBits: led 4 developers; MTailor: reports to the CTO | — |
| 6 | Performance at scale | Ad-hoc jobs over 2M+ Firestore records for live prices | — |

**Red-flag questions:** "How many years of production AWS?" Answer honestly: about 2–3, incidental, ending in a full migration off AWS. "Have you run GPU fleets?" No. "IaC?" Not in production. Three honest "no" answers on the screening form will very likely end the process. That is the core reason for SKIP.

---

## Keywords extracted

Lead Platform Engineer, AWS, Infrastructure-as-Code, AWS CDK, Pulumi, Terraform, TypeScript, Go, multi-cloud, GCP, Azure, Oracle OCI, GPU servers, load balancing, routing, multi-region, serverless, security best practices, Docker, containerisation, globally distributed, low latency, observability, monitoring, deployment pipelines, SOC2 Type II, startup, CET ±2h
