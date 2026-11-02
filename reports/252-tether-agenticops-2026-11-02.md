# Evaluation: Tether — Fullstack Engineer - AgenticOps (100% Remote)

**Date:** 2026-11-02
**Archetype:** **Platform/Infrastructure Engineer** in its developer-tooling form (tools and automation built for other engineers, CI agents, PR-review automation, code-quality checks), with a secondary **Senior Backend Engineer** axis (Node.js/TypeScript, judgment on AI-agent output). Not a dedicated-infra seat: no Kubernetes, Terraform or SRE practice in the JD.
**Score:** 3.6/5
**URL:** https://tether.recruitee.com/o/fullstack-engineer-agenticops-100-remote
**PDF:** ✅ `output/cv-isaac-tether-agenticops-2026-11-02.pdf`
**Verification:** live via Playwright (main loop) 2026-11-02. Recruitee page renders title, full JD and Apply. Nine city-clone reqs on tether.recruitee.com; this is the canonical one. Location chip reads "United Kingdom, Armagh" but the body says "working remotely from every corner of the world" and the title says 100% Remote, consistent with every earlier Tether evaluation (#217, #218, #244, #245).
**Recommendation:** **APPLY. This is the Tether req to send.** Of five Tether evaluations this one has the most directly evidenced requirement set: strong JS/TS + Node.js (core skill), hands-on AI coding agents with judgment about validation and human review (the career-ops pipeline is a literal, demonstrable example: Playwright verification before scoring, dedup heuristics tightened after reviewing agent output, human kept on Submit), and dev tooling built for other engineers (migration tooling, SDK docs, Ops training at MTailor). The real gap is CI/CD depth: no GitHub Actions or named CI system on cv.md, and the seat builds agents *in* CI. Name it, and make the career-ops repo public and linkable before submitting, since it is the strongest proof point and the JD asks for "automation used by others". It ranks level with #217 (Wallets, 3.6) and above #245 (AI Harness, 3.1); send this one first because the AI-agent angle is evidenced rather than aspirational. Domain caveat unchanged: Tether is a stablecoin issuer and Bitcoin miner; QVAC sits in Tether Data.

---

## Continuity — Tether in the pipeline

| # | Report | Role | Score | Status |
|---|---|---|---|---|
| 217 | `reports/217-tether-2026-09-21.md` | Backend Engineer, Wallets | 3.6/5 | Evaluated, not yet sent |
| 226 | `reports/218-tether-2026-09-21.md` | Software Engineer, P2P (Search) | 3.3/5 | Evaluated |
| 252 | `reports/245-tether-ai-harness-2026-10-14.md` | AI Harness Engineer | 3.1/5 | Evaluated, "apply with caveat, after #217" |
| 251 | `reports/244-tether-frontend-2026-10-14.md` | Frontend Software Engineer | 2.9/5 | SKIP |
| 231 | `reports/231-tether-devops-2026-10-01.md` | DevOps Engineer | 2.9/5 | SKIP |

**Concentration call:** Tether runs one hiring funnel. Send at most one Tether application at a time. This req replaces #217 as the first send because its requirements map to evidence rather than to the Postgres/wallet-security gaps flagged in #217. Candidate-safety rules as before: apply only via tether.recruitee.com; legitimate mail only from @tether.to or @tether.io.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure Engineer, developer-tooling form (primary) + Senior Backend Engineer (secondary) |
| Domain | Developer productivity for QVAC desktop and mobile application teams: shared runtime, AI harness, skills packages |
| Function | Build and own. "Own them from implementation through adoption and ongoing support" |
| Seniority | Not stated. Requirement list reads mid-to-senior; "room to shape the tooling roadmap" |
| Remote | 100% remote, "working remotely from every corner of the world" |
| Team size | Not stated. Works with QVAC application teams and package owners |
| Comp | Not posted (Tether never discloses) |
| TL;DR | A hands-on JS/TS engineer who puts AI agents to work inside CI and PR review for the QVAC app teams, builds code-quality checks and release automation, and measures whether any of it helps. |

## B) CV Match

| JD requirement | CV evidence (cv.md unless noted) | Match |
|---|---|---|
| "Experience building and maintaining developer tools or engineering automation used by others" | MTailor contractor: "Built a migration script to read data from MongoDB and write to Firestore after running complex processing logic"; "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)"; "Trained the Ops team on the new Firebase Dashboard and backup procedures". Career-ops pipeline (story bank): agentic job-search automation on Claude Code, Node.js scripts, YAML config | ⚠️ internal tooling yes; no shipped dev tool with external users |
| "strong JavaScript/TypeScript and Node.js skills" | Node.js in every role since 2020 (~6.8 years). Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js". Skills: Node.js, TypeScript Proficient | ✅ strong (TypeScript ~6 months in production) |
| "Hands-on experience using and integrating AI coding tools or agents, with sound judgment about their limitations, output validation, and human review" | Career-ops (story bank cards "Career-ops agentic pipeline", "Evidence-gated AI pipeline", "Keeping the human on Submit", "Tightening an over-loose dedup heuristic"): Playwright ground-truth checks before any agent scores a posting, dedup logic corrected after reviewing agent output, submission always gated on a human. WhatsApp healthcare chatbot on OpenAI + Google Vision (profile proof point) | ✅ direct, but not on cv.md |
| "Experience with Git, CI/CD, automated testing, and systematic debugging of build, test, or integration failures" | Git Proficient. Docker/Kubernetes microservices at CodeBits imply pipelines, but no CI system, test framework or build-failure work is named | ⚠️ CI/CD unevidenced (standing gap, report #231) |
| "A strong approach to code quality: maintainable code, useful automated checks, and refactoring that preserves behavior" | Zero-downtime migration of 20+ apps is behaviour-preserving change at scale; SDK docs for fellow engineers. No lint/complexity tooling named | ⚠️ adjacent |
| "Work independently, collaborate with engineers, communicate clearly in English within a remote, globally distributed team" | Five years US/Singapore remote; reported to CTO at MTailor and Mind2matter; led 4 developers at CodeBits. English fluent | ✅ |
| Full-stack for desktop and mobile apps | React at MTailor, Dr Wealth, Mind2matter; React Native + Expo at CodeBits (iOS and Android) | ✅ |

**Score on requirements: 3 ✅, 3 ⚠️, 0 ❌.**

### Gaps and mitigation

1. **CI/CD and build-failure debugging (requirement; medium).**
   - Blocker? Not alone. The JD says "experience with", not "at scale" as #231 did. But the example projects are "agents that investigate CI failures", so the interviewer will ask what CI Isaac has run.
   - Adjacent: containerised microservices with independent deploys; parallel-run cutover as validation-before-release.
   - Mitigation: before submitting, add a GitHub Actions workflow to the public career-ops fork (lint + `node verify-pipeline.mjs` on push) so there is a real pipeline to point at. One evening. Use the story-bank card "Answering the CI/CD-tooling gap straight".
2. **"Used by others" (requirement; soft).** Career-ops is a personal tool. Frame the MTailor migration script, SDK docs and Ops training as tooling adopted by a team, which they were. Make the career-ops repo public with a README that states what it automates and what it refuses to automate.
3. **Automated PR review tuning, noise reduction (responsibility; no evidence).** Nothing on the CV. The nearest real work is the scan-hygiene rule in career-ops: queries disabled on a second zero-yield strike, findings logged with reasons, operating cost measured. Present it as the same discipline applied to a different signal. Added to the story bank below.
4. **Code-quality tooling (complexity, dependency cycles, perf regressions).** No evidence. Nice-to-have in practice. Do not claim it.
5. **AI evidence is not on cv.md.** Both AI proof points live in the story bank and profile.yml. The PDF carries them in Projects; cv.md itself should gain a Projects section (CV maintenance, not for this application).

## C) Level and Strategy

- **Detected level:** senior-leaning mid. No years stated; ownership "through adoption and ongoing support" and "shape the tooling roadmap" is senior language.
- **Candidate's natural level:** senior on Node.js, mid on developer-tooling practice. Good alignment with how the req is written.
- **"Sell senior without lying":**
  - "I have run AI coding agents in a real pipeline for months and the main lesson is that they need ground truth: I put a browser check in front of every scoring step because search results lied."
  - "I kept the human on Submit on purpose. The agent fills, drafts and verifies; a person sends."
  - "The migration at MTailor was behaviour-preserving change across 20+ apps with live traffic. Zero downtime was the acceptance test."
  - Ownership framing: hired as a contractor, became migration lead reporting to the CTO.
- **If downleveled:** accept if comp is at or above $90K; ask for a six-month review tied to adoption metrics of the tooling shipped.

## D) Comp and Demand

| Source | Data point | Read |
|---|---|---|
| JD body | **Not stated** | Tether pattern |
| web3.career — Tether fullstack middleware clones | est. **$115K–$138K** | Above Isaac's $80–120K target. Aggregator estimate, not posted pay |
| web3.career site-wide | Web3 full-stack average $140K, range $60–250K | Generic benchmark |
| Report #245 research (reused) | AI Harness est. $115–117K; frontend clones $105–117K; desktop sibling $122–141K | Consistent Tether Data engineering band |
| Report #217 research (reused) | São Paulo clone est. $36–54K; Tether Ops Wallets ~$26/hr | Location-pay risk persists; ask on call one |

Sources: [web3.career — Tether Middleware Engineer, Fullstack (100% Remote)](https://web3.career/middleware-engineer-fullstack-100-remote-tether/142883) · [web3.career — Tether Senior Fullstack Engineer, Remote Worldwide](https://web3.career/senior-fullstack-engineer-100-remote-worldwide-tether/146923) · [Arc — Tether Senior Fullstack](https://arc.dev/remote-jobs/j/tether-senior-fullstack-software-engineer-100-remote-o5eoe7modn)

**Demand:** engineers who can operate AI coding agents inside delivery pipelines are a 2026 growth profile, and this JD is unusually specific about wanting judgment rather than enthusiasm. Nine city clones suggest Tether is casting wide.

**Comp read: 3.0/5.** Estimate at or above target, disclosure and location-pay risk unchanged. Anchor at $110K+. First-call question: *"Is comp indexed to location, and against which location?"*

## E) Personalization Plan

Top 5 CV changes (applied in the PDF):

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Backend migration lead | Lead with "builds developer tooling and AI-agent workflows for engineers", then the migration as behaviour-preserving change at scale | JD's first two requirements |
| 2 | Competencies | Backend/distributed tags | "Developer Tooling & Automation", "AI Coding Agents in Workflows", "Output Validation & Human Review", "CI/CD & Release Automation", "Code Quality & Refactoring", "JavaScript/TypeScript & Node.js", "React & React Native", "Git & Systematic Debugging" | ATS keywords from the JD |
| 3 | MTailor contractor bullets | Migration script, docs, training | Reorder: docs and training first ("tooling and enablement adopted by the team"), then the script | "Used by others" |
| 4 | Projects | Sync pipeline, migration, Kafka, DeFi | Career-ops agentic pipeline first (agents in scheduled workflows, verification gates, human on Submit, measured hygiene); WhatsApp chatbot second; migration third; Kafka microservices fourth | AI-agent evidence is otherwise invisible |
| 5 | Skills | Generic | Add "AI coding tools: Claude Code, Playwright-verified agent pipelines, OpenAI API" as a line; keep CI/CD honest (Docker, Kubernetes, Git) | Keyword coverage without invention |

Top 5 LinkedIn changes:

1. Headline: add "Developer tooling and AI-agent workflows".
2. About: one paragraph on career-ops: what it automates, what it refuses to automate, and why.
3. Featured: link the public career-ops repo once it is public.
4. MTailor contractor role: add the docs and Ops-training bullet.
5. Skills: add TypeScript, Claude Code, GitHub Actions only after the workflow from gap 1 exists.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | AI agents with output validation | Evidence-gated AI pipeline | Search results and aggregator labels were wrong about whether postings were open or geo-eligible | Stop agents scoring on bad input | Put a Playwright ground-truth check in front of every scoring step; log reasons per rejection | Zero closed postings reached evaluation after the gate | Agents need a verifiable source of truth before judgment; otherwise they are confidently wrong |
| 2 | Human review and limitations | Keeping the human on Submit | Pipeline could fill and send applications end to end | Decide where automation stops | Fill, draft, verify, then stop; a person submits | No application sent without review | The boundary is a design decision, not a limitation |
| 3 | Measure effectiveness and operating cost | Scan-hygiene rule (new) | Dozens of search queries, many returning nothing or stale results, each costing tokens and time | Keep the scheduled scan cheap and honest | Record a dated strike per zero-yield query; disable on the second strike with a reason; track rows by status | 14 of 52 queries left enabled; per-run cost and yield visible in history | Automation that is not measured quietly rots; the disable rule did more than any prompt tweak |
| 4 | Judging AI-generated code | Tightening an over-loose dedup heuristic | Agent-written dedup matched on company name only | Fix without regressing | Reviewed the heuristic, added role and canonical-id matching, re-ran against history | Duplicates stopped; existing adds preserved | Review agent output like a PR from a fast junior: trust the shape, check the edges |
| 5 | Tooling adopted by a team | SDK docs and Ops training for the new Firebase stack | Team was new to Firebase SDKs after the migration | Make the platform operable by others | Wrote Node.js and Python SDK docs; trained Ops on dashboard and backups | Engineers onboarded from the docs; Ops ran backups unassisted | Tooling counts only when someone else uses it |
| 6 | Refactoring that preserves behaviour | Zero-downtime Parse→Firebase migration | 20+ live apps on an EOL stack | Move everything with no visible change | Two-way sync, per-app cutover, rollback at each step | Zero outages, $5,000/month saved | The acceptance test for a refactor is that nobody notices |
| 7 | Build and release for desktop/mobile | LASPNET field app on React Native + Expo | NGO needed iOS and Android from one codebase | Ship cross-platform with push | React Native + Expo, Firebase push notifications | Shipped on both stores | Expo release flow is the closest thing to QVAC's mobile pipeline on the CV |
| 8 | CI/CD gap | Answering the CI/CD-tooling gap straight | No named CI system on the CV | Answer without bluffing | Name it, show Docker/K8s deploys and the new Actions workflow, give a plan | Credible on "experience with", honest about "at scale" | Never let the interviewer find the gap |

Story-bank status: stories 1, 2, 4, 5, 6, 7 and 8 already exist in `interview-prep/story-bank.md`. Story 3 is new and appended.

**Recommended case study:** career-ops. Walk through one scan-to-evaluation cycle: scheduled scan, agent fan-out, Playwright verification, dedup, logging with reasons, human on Submit, and the disable-on-second-strike rule. It maps one-to-one onto "agents in CI and scheduled workflows that investigate failures, propose fixes, and give engineers evidence they can act on". Have the repo public and the README written before the call.

**Red-flag questions:**
- *"Which CI system have you built pipelines in?"* Answer straight: Docker/Kubernetes deploys at CodeBits, and the GitHub Actions workflow on career-ops. Do not claim scale.
- *"How do you keep an automated PR reviewer from being ignored?"* No direct experience. Reason from the scan-hygiene rule: measure precision, log every finding with a reason, cut sources that are wrong twice.
- *"Comfortable with the stablecoin domain?"* Decide before the call. Report #217 covers the judgment.
- *"Are you a frontend or backend engineer?"* Backend-first full-stack: React on three roles, React Native on one, Node.js on all.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **3.5** | Developer-tooling seat, hands-on, JS/TS/Node. Platform archetype is "adjacent" in profile.yml, but this form of it is close to backend build |
| Stack | **3.5** | Requirements 3 ✅ / 3 ⚠️ / 0 ❌. Node.js strong; AI-agent judgment directly evidenced; CI/CD and PR-review tooling thin |
| Seniority | **3.5** | ~6.8 years Node.js; ownership and enablement evidence real; no shipped dev tool with external users |
| Remote / geo | **5.0** | 100% remote, "every corner of the world"; city chip is clone metadata, consistent across five Tether reqs |
| Comp | **3.0** | Undisclosed; estimates $115–138K at or above target; location-pay risk |
| Stability / growth | **3.5** | Highly profitable issuer, growing QVAC/Tether Data; domain and regulatory caveat |
| **Overall** | **3.6/5** | (3.5 + 3.5 + 3.5 + 5.0 + 3.0 + 3.5) / 6 = 3.67, rounded to 3.6. **APPLY, as the single Tether submission.** |

---

## Keywords extracted

developer tools, engineering automation, AI coding agents, agents in CI, scheduled workflows, automated pull request review, output validation, human review, code quality checks, complexity and dependency cycles, performance regressions, refactoring that preserves behavior, JavaScript, TypeScript, Node.js, Git, CI/CD, automated testing, build and release workflows, systematic debugging, development environments, desktop and mobile applications, AI harness, skills packages, adoption and documentation, measuring effectiveness and operating cost, remote globally distributed team
