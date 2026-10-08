# Evaluation: Remote — Senior Backend Engineer

**Date:** 2026-10-08
**Archetype:** Senior Backend Engineer (primary) · Platform/Infra secondary (the req is half "redesign how engineering work ships with autonomous agents")
**Score:** 3.5/5
**URL:** https://apply.remote.com/jobs/74376551-7545-40fa-9b5e-26560627f4cf
**PDF:** output/cv-isaac-remote-com-senior-backend-2026-10-08.pdf
**Verification:** live via Playwright 2026-10-08. Remote ATS page rendered the H1 "Senior Backend Engineer", a status chip reading "open", the full JD (intro, Job Description, Benefits, Compensation, Conclusion) and an "Apply" button in the sidebar.
**Recommendation:** **APPLY, with a cover note that addresses Elixir and Postgres directly.** The location clause is fully open. Remote says publicly that it hires senior engineers who have never used Elixir and runs a 2–4 week internal Elixir bootcamp for them. The "What you bring" list is mostly fundamentals plus agentic and AI fluency, which is where Isaac's career-ops pipeline is direct evidence. The two risks are the relational database gap (Postgres "or similar"; cv.md has no relational engine in production) and a geo-indexed pay band that could put a Kampala hire near the $60K floor. Ask about the Uganda band on the recruiter call before doing the async challenge.

**Re-evaluation note:** This updates **#77** (2026-04-20, 2.8/5, SKIP, Greenhouse URL, batch mode with no verification). Three things changed: (1) this check is a live Playwright verification of the canonical Remote ATS posting; (2) the published band went from $53,300–$119,850 to **$53,300–$149,800**; (3) #77 called Elixir a "hard blocker" with "no credible mitigation", but Remote's own published hiring practice says otherwise (see D). The tracker TSV uses company "Remote" so merge-tracker updates row #77 in place.

---

## Location / Eligibility (quoted from the JD)

- Practicals section: **"Location: Anywhere in the World"**
- Sidebar and header chip: **"APAC, EMEA, LATAM, NORAM"** (EMEA includes Africa and Uganda)
- Benefits: **"work from anywhere"**; **"flexible working hours (we are async)"**; "you are not bound to daily standups, recurring meetings or other ceremonies"
- Comp: "We use geo ranges to consider geographic pay differentials … The interviewer will share further details with the candidate on the more restricted pay range for the role in line with their specific location."

There is no country, work-authorization or timezone clause. Remote is an Employer-of-Record company with an entity or EoR coverage in most countries, so employment from Uganda is structurally plausible. **Geo verdict: OPEN.** The only location-linked risk is pay, not eligibility.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Backend Engineer, with a strong agentic/automation slant |
| Domain | HR, payroll and EoR SaaS ("Remote's HR and Payroll products") |
| Function | Build plus process redesign. "building tools, APIs and integrations", plus "Redesign how engineering work ships with autonomous agents as the default execution layer" |
| Seniority | Senior. Leads "major team-scoped projects", mentors, does code review, joins the hiring process, support rotations and RFCs |
| Stack | "Our backend is built with **Elixir and Phoenix**, with a **Postgres** database. We use React and Nextjs … **Gitlab** … CI/CD … hosted on **AWS**." Deploys multiple times per day |
| Remote | Fully remote and async. "Anywhere in the World" |
| Team | Cross-functional teams (FE/BE/SRE/QA) by vertical; team chosen during interviews. Reports to an Engineering Team Leader |
| Process | Recruiter → Engineering Leader → **async technical challenge (product brief; "we highly encourage you to use AI")** → team interview → Bar Raiser → Executive → offer and prior-employment verification |
| Comp | **$53,300 – $149,800**, geo-ranged, plus stock options |
| TL;DR | A global, async-first senior backend seat at the EoR company itself. The stack (Elixir) is new to Isaac but trained in-house; the real test is agentic-workflow fluency, which he can show. |

## B) CV Match

| JD requirement (verbatim) | CV evidence (cv.md / profile.yml) | Match |
|---|---|---|
| "Strong engineering fundamentals and a track record of shipping production systems that are secure, reliable, and scalable." | MTailor: "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime"; Dr Wealth: "query over 2 million Firestore records" | ✅ Strong |
| "Practical experience designing or adopting agentic/automation workflows … and improving them through iteration." | profile.yml + story bank: career-ops agentic pipeline on Claude Code (Playwright verification gate, dedup, scoring, PDF generation; iterated, e.g. the verification-before-scoring redesign and the tightened dedup matcher). Healthcare WhatsApp chatbot (OpenAI + Google Vision) | ✅ Good. Real and iterated, but a personal/open-source system, not an employer's production pipeline. **Not on cv.md**, only in profile.yml and the story bank |
| "Ability to think in systems: define specs clearly, break down plans, instrument verification, and close the loop on quality." | Migration with parallel two-way sync (cutover planning); career-ops "verification before scoring" design; contractor docs and Ops training | ✅ Good |
| "Postgres (or similar)." | cv.md Skills: "SQL" on the Proficient line, **with no project behind it**. Production datastores are MongoDB and Firestore | ⚠️ **Gap.** A document store is arguably not "similar" to Postgres. Do not claim Postgres |
| "CI/CD (GitLab, Github, Jenkins or similar)." | Docker/Kubernetes microservices at CodeBits; no named CI/CD tool on cv.md | ⚠️ Partial. Unevidenced on paper |
| "**Demonstrates strong automation and AI capabilities and AI fluency.**" (bolded in JD) | career-ops agentic pipeline; OpenAI + Vision chatbot | ✅ Strong match for what Remote is screening for |
| Stack: Elixir / Phoenix | **None.** Not on cv.md | ⚠️ Not a listed requirement. Remote trains it in-house (see D) |
| Nice: Kubernetes, Docker | CodeBits: "Architected a microservices backend … using Apache Kafka, Docker, and Kubernetes" | ✅ |
| Nice: AWS | MTailor stack: AWS S3/EC2/EBS (Intermediate); "Saved $5,000/month by migrating all services off AWS" | ✅ Partial (Intermediate) |
| Nice: Nextjs, React | React at MTailor, Dr Wealth and Mind2matter; **no Next.js** | ✅ React / ⚠️ Next.js |
| "Lead the development of major team-scoped projects" | Migration lead reporting to the CTO; led 4 developers at CodeBits | ✅ |
| "Mentor and provide guidance"; "Participate in … hiring process" | Led 4 devs; SDK docs and Ops training. No hiring evidence | ⚠️ Partial |
| "Implement interfaces with … API design in mind" | Express/Cloud Functions APIs; gRPC contract for USSD providers | ✅ |
| Async, remote-native culture | 6+ years fully remote for US, Singapore and Uganda teams | ✅ Strong |

### Gaps and mitigation

1. **Elixir/Phoenix.** *Soft blocker.* Remote "is open to hiring people who don't have Elixir experience", gives non-Elixir candidates a tailored version of the coding exercise, and runs a 2–4 week internal Elixir training camp ([elixir-lang.org case study](https://elixir-lang.org/blog/2025/01/21/remote-elixir-case/), [ElixirForum post](https://elixirforum.com/t/senior-and-mid-level-elixir-engineer-remote-com-remote-worldwide/53743)). Adjacent evidence: event-driven, message-passing systems (Kafka, Pub/Sub, NATS), which map well to the BEAM's process and message model. Mitigation: one cover-note line ("No production Elixir yet. I know you train for it, and I've already started …"), plus a small public Phoenix + Postgres repo on github.com/zac-09 before the async challenge. **Do not put Elixir on the CV.**
2. **Postgres / relational database.** *Medium.* JD says "Postgres (or similar)". cv.md lists SQL with no project behind it. Mitigation: the same Phoenix/Ecto + Postgres repo closes both gaps. In interview, use the [Gap handling] TypeScript/PostgreSQL story from the bank: name the gap first, then point to the dual-datastore consistency work. **Do not claim production Postgres.**
3. **CI/CD tooling (GitLab).** *Low to medium.* "or similar" softens it. Use the CI/CD gap story from the bank. Add a GitLab CI (or GitHub Actions) pipeline to the demo repo.
4. **Agentic work is personal/OSS, not employer production.** *Medium for this JD in particular.* Remote wants someone to "redesign how engineering work ships with autonomous agents". Isaac's best evidence is career-ops: a real, iterated, verification-gated system, but outside an employer. Frame it as the actual pattern they describe (spec → plan → execute → verify, with guardrails and a human on irreversible steps). Do not overstate team-wide adoption.
5. **Hiring and mentoring.** *Low.* Led a 4-person team; no hiring loop experience. Be straightforward about it.

## C) Level and Strategy

**JD level:** Senior IC (leads team-scoped projects, mentors, joins hiring, RFCs). **Candidate's natural level:** Senior Backend IC. About 6.7 years continuous since January 2020, owned a 20+ app migration end to end reporting to the CTO, and led a 4-person team.

**Sell senior without lying:**
- Lead with outcomes: "20+ production apps, zero downtime, two live datastores kept in sync during cutover." That covers "secure, reliable, scalable" directly.
- For the agentic section: "I built an agentic pipeline where the expensive model never runs on unverified input. The verification gate sits before the LLM, the human stays on every irreversible action, and I've iterated the heuristics when the agent's output was plausible but wrong." That matches their own words: "spec → plan → execute → verify", "verification loops (tests, checks, evals, guardrails)".
- On stack: "I've moved stacks before. I joined MTailor as a contractor on an unfamiliar platform and ended up leading the company-wide migration." That is the Elixir answer.
- On the async challenge: Remote explicitly encourages AI use and expects you to "own and explain your decisions". Use Claude Code openly, and write the decision log (the why) as the deliverable.

**If downleveled:** A mid-level offer at Remote is acceptable only if the Uganda-indexed number still clears the $60K floor. Ask for a 6-month level review tied to concrete criteria (Elixir ownership, leading a team-scoped project).

## D) Comp and Demand

| Item | Value | Source |
|---|---|---|
| Published band | **$53,300 – $149,800** annual, geo-ranged, "titles may span more than one career level" | JD (live, 2026-10-08) |
| Previous band (#77, April 2026) | $53,300 – $119,850 | report 077 |
| Equity | Stock options | JD |
| Pay philosophy | "We do not agree to or encourage cheap-labor practices … pay locally competitive rates … bring local wealth to developing countries" | JD |
| Elixir trainability | Hires non-Elixir seniors; tailored exercise; 2–4 week Elixir camp | [elixir-lang.org](https://elixir-lang.org/blog/2025/01/21/remote-elixir-case/), [ElixirForum](https://elixirforum.com/t/senior-and-mid-level-elixir-engineer-remote-com-remote-worldwide/53743) |
| Market reference | No reliable Remote-specific data on Glassdoor or Levels.fyi was found. General remote senior backend aggregates (e.g., Calendly $198K–$268K US) are US-anchored and not comparable to a geo-indexed Kampala band | WebSearch 2026-10-08 |

**Comp read:** The floor of the band ($53.3K) is **below** Isaac's $60K minimum, and "locally competitive rates" for Uganda could land in the bottom third. The "cheap-labor" language and the higher ceiling are reassuring, but there is no published Uganda number. **Action:** ask the recruiter on call 1: "What's the range for this role for someone based in Uganda?" If it is under $60K, stop before the async challenge. Anchor at $80K–$100K (profile target) using the "output-based, not location-based" framing from `_shared.md`.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Generic Node/Firebase backend | Lead with "secure, reliable, scalable production systems", then the 20+ app zero-downtime migration, then agentic workflows (spec → plan → execute → verify) | Mirrors JD bullets 1–3 and the bolded AI-fluency line |
| 2 | Projects | Not on cv.md | Add the Agentic Evaluation Pipeline first and the WhatsApp LLM assistant second (both from profile.yml/story bank) | Direct evidence for the agentic section |
| 3 | Competencies | — | "Agentic Workflows", "Verification Loops & Guardrails", "AI Fluency", "Async Remote Collaboration" | ATS keywords from the JD |
| 4 | Skills | SQL listed bare | Kept as on cv.md; **no Postgres, Elixir or Phoenix added** | Honesty rule; flagged as gaps |
| 5 | Experience | — | Reordered MTailor bullets: migration → sync → cost → product features | "Track record of shipping production systems" first |

**Done in the PDF:** 1, 2, 3, 4 and 5. A4 format, 2 pages. Estimated JD keyword coverage is about 65%. Not covered: Elixir, Phoenix, Postgres, GitLab, Next.js; these are left out on purpose.

**LinkedIn (top 5):**
1. Headline: "Senior Backend Engineer · zero-downtime migrations · agentic workflows (Claude Code)".
2. Featured: link the career-ops fork and a short write-up of the verification-before-scoring design.
3. About: one paragraph on async, fully remote work across US, Singapore and Uganda teams.
4. Add the Phoenix + Postgres demo repo to Featured once it exists.
5. Skills: add "AI-assisted development" and "Workflow automation". Add Elixir only after the repo exists, and label it as learning.

**Pre-application artifact (strongly recommended, 2–3 evenings):** a small Phoenix + Ecto + Postgres API with a GitLab CI pipeline and tests, built with an agent and including a short "how I verified the agent's output" README. One repo covers gaps 1, 2 and 3 and previews the async challenge.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Shipping secure/reliable/scalable systems | Zero-downtime Parse→Firebase migration | 20+ apps on Parse/MongoDB | Move them to Firebase/GCP with no downtime | Parallel-run with live two-way sync, staged cutover, reporting to the CTO | Zero downtime; off AWS, saving $5K/month | Reversibility is the design goal, not a nice-to-have |
| 2 | Agentic workflows end to end | Career-ops agentic pipeline | Manual scanning was slow and noisy | Build an AI system that evaluates, tailors and tracks | Claude Code + Playwright + Node, with YAML config | 200+ evaluations, tailored PDFs | Agents fail where they can't check ground truth |
| 3 | Verification loops, guardrails | Verification before scoring | Confident evaluations of closed or geo-locked jobs | Make output defensible | Moved the live-browser gate in front of the LLM scorer; quote-based scoring | False-positive geo/liveness matches eliminated | Put the cheap deterministic check before the expensive probabilistic one |
| 4 | Judging agent output / code review | Tightening the over-loose dedup heuristic | AI-assisted matcher merged distinct roles | Decide whether to keep it | Built the counter-example, rejected it, fixed it with a documented failing pair | Duplicate-merge false positives stopped | Plausible-but-wrong is the hardest AI output to catch |
| 5 | Guardrails / what not to automate | Human on Submit | Auto-submit was the obvious next feature | Decide where autonomy stops | Made "stop before Submit" a hard rule | No unreviewed document ever sent | Irreversible actions stay with a human |
| 6 | Event-driven systems (BEAM-adjacent) | Two-way MongoDB↔Firestore sync on Pub/Sub | Two live datastores during migration | Keep them consistent | Node.js consumers on Pub/Sub | Parallel production traffic supported | Message-passing design transfers to Elixir/OTP |
| 7 | Lead team-scoped projects, mentor | Leading 4 devs at CodeBits | NGO legal-tech platforms | Deliver with a small team | Architected Kafka/K8s microservices, led 4 devs | FIDA case management + LASPNET apps shipped | Microservices were probably heavier than a 4-person team needed |
| 8 | Ramp on a new stack (Elixir) | Contractor to migration lead | Joined MTailor on an unfamiliar stack | Deliver a complex migration | Learned it, documented SDKs, trained Ops | Became company-wide migration lead | Writing docs is the fastest way to learn a stack |
| 9 | Postgres gap | [Gap handling] TypeScript/PostgreSQL story | Relational DB not evidenced | Answer without bluffing | Name it first; dual-datastore consistency; demo repo | Gap becomes evidence of how he closes gaps | Never let the interviewer find the gap first |

All nine already exist in `interview-prep/story-bank.md`; no new entries are needed. Story 8 is the one to tune toward Elixir.

**Recommended case study:** the career-ops pipeline, presented as an agentic engineering workflow: spec (YAML config, modes), plan (pipeline stages), execute (Claude Code workers), verify (Playwright gate, dedup, score citations), plus the human-on-Submit boundary. Close with the MTailor migration to show production reliability.

**Red-flag questions:**
- *"Have you written Elixir?"* → "Not in production. I know you train for it. Here's the Phoenix repo I built to start." (Only say this if the repo exists.)
- *"Postgres experience?"* → "My production work has been MongoDB and Firestore. I haven't run Postgres in production. The consistency problems I solved during the dual-write migration are engine-independent, and here's an Ecto/Postgres repo."
- *"Has your agentic work run in a team's production workflow?"* → Be honest: it's his own system, used daily and iterated. He hasn't rolled it out across an engineering org yet, and that's the part of this role he wants.
- *"Uganda salary expectations?"* → Anchor at $80K–$100K with the output-based framing. Floor is $60K.

---

## Score breakdown

| Dimension | Score | Note |
|---|---|---|
| CV match | 3.2 | Fundamentals and agentic work strong; Elixir (trainable), Postgres and CI/CD tooling are gaps |
| North Star alignment | 4.0 | Senior Backend, the primary archetype |
| Comp | 3.0 | Band reaches $149.8K, but the floor is below $60K and pay is geo-indexed with no Uganda number |
| Remote / geo | 5.0 | "Anywhere in the World"; EMEA listed; async |
| Culture / growth | 4.0 | Async, no ceremonies, Elixir training, AI-forward |
| Red flags | 3.5 | Heavy agentic mandate is a bet; long 6-step process |
| **Global** | **3.5/5** | |

---

## Keywords extracted

senior backend engineer, Elixir, Phoenix, Postgres, GitLab, CI/CD, AWS, Kubernetes, Docker, Next.js, React, agentic workflows, autonomous agents, automation, AI fluency, verification loops, evals, guardrails, secure reliable scalable, API design, HR and payroll, code review, mentoring, RFC, async

---

## G. Application Answers (draft 2026-10-08)

## Answers for Remote — Senior Backend Engineer

Based on: Report #235 | Score: 3.5/5 | Archetype: Senior Backend Engineer (agentic slant)

Read live via Playwright 2026-10-08. Posting `apply.remote.com/jobs/74376551-…` is **live**: status chip "open", H1 "Senior Backend Engineer" (matches this report), sidebar "APAC, EMEA, LATAM, NORAM", band "US$53,300 to US$149,800" (unchanged since the evaluation). Clicking **Apply** opens a modal titled "Apply for Senior Backend Engineer" with 24 fields. **No cover-letter field or upload, and no salary question.** Optional comp and gap notes go in "Anything else we should know?".

---

### 1. Please add a resume or public LinkedIn profile to share details about your experience.* (file attach + "link or note" text box)
> Attach: `output/cv-isaac-remote-com-senior-backend-2026-10-08.pdf`
> Link box: https://linkedin.com/in/isaac-mubiru-3bb728174

### 2. Do you have a portfolio or personal site? (text, optional)
> https://github.com/zac-09

### 3. What are your preferred first and last names?* (two text boxes)
> First: Isaac · Last: Mubiru

### 4. What pronouns should we use to refer to you? (radio, optional)
Options: he/him · she/her · they/them · I do not want to answer this question
> **he/him** (confirm, or choose "I do not want to answer this question")

### 5. What email address should we use for your application? (text)
> isaacmubiru99@gmail.com

### 6. Which country are you currently based in?* (dropdown)
> **Uganda** (exact option text, confirmed in the list)

### 7. Which city are you based in? (text, optional)
> Kampala

### 8. Work eligibility … Are you legally eligible to work in the country where you're planning to work from?* (radio)
Options: "Yes, I'm legally eligible to work in the country I'll be working from" · "No, I'm not"
> **Yes, I'm legally eligible to work in the country I'll be working from** (he works from Uganda, where he lives; confirm Ugandan citizenship or residence rights)

### 9. Will you require sponsorship if you join Remote?* (radio: Yes / No)
> **No** (works remotely from Uganda; profile.yml: "No sponsorship needed for fully remote roles")

### 10. Do you have a non-compete in place with your previous or current employer that prevents you from working for us?* (radio: Yes / No)
> **No**, but ⚠️ **check your MTailor agreement first.** You are still employed there. Pick "No" only if nothing in that contract restricts you.

### 11. What excites you about this role?* (textarea)
> Two things.
>
> First, the agentic half of the job: "operationalize agentic workflows end-to-end (spec → plan → execute → verify)" with "verification loops (tests, checks, evals, guardrails)". I already work this way on a small scale. I run an agentic job-search pipeline on Claude Code, a fork of an open-source project that I've extended. It scans portals, confirms each posting is live in a headless browser, scores it against my CV and drafts tailored documents. The best lessons came from where it failed. It produced confident evaluations of closed or geo-locked jobs until I moved the verification gate in front of the model. I also made one thing a hard rule: the agent never submits anything; a human does. I'd like to do the same work for a whole engineering org, with real tests and evals, not for one person.
>
> Second, the product. I'm a backend engineer in Kampala and I've worked fully remote for teams in the US, Singapore and Uganda since 2020. "Anywhere in the World", async by default, and "we do not agree to or encourage cheap-labor practices" is the company I'd want to build for.

### 12. Do you need any accommodation during the interview process? (textarea, optional)
> Leave blank, or: "No, thank you."

### 13. Anything else we should know? (textarea, optional)
> I'd rather name my gaps up front. I haven't run Postgres in production. My production datastores have been MongoDB and Firestore, and the hardest data work I've done is keeping both consistent under live traffic during a 20+ app migration. I haven't owned a GitLab/GitHub CI pipeline as the named owner either. Before the async challenge I plan to build a small Phoenix + Ecto + Postgres API with a CI pipeline and tests, so you can see how I ramp up.
>
> On compensation: I'm targeting $80K–120K USD. I saw the band is geo-ranged. What is the range for this role for someone based in Uganda?

> ⚠️ Keep the "plan to build" sentence only if you'll actually build the repo before the challenge. The comp paragraph is optional. If you'd rather raise pay on the recruiter call, delete it and use the script under "Before you submit".

### 14. How did you hear about us?* (radio)
Options: LinkedIn · A friend at Remote · Job board · Search engine · Other
> **Job board** (found on Remote's own ATS board)

### 15. BrightHire recording and auto-transcription consent* (radio: I consent / I don't consent; declining "will not affect your candidacy")
> **I consent** (your choice; either is fine)

### 16. Have you developed, maintained, and delivered production-ready backend code in a professional setting?* (radio)
Options: "Yes, with Elixir" · "Yes, with other functional programming languages" · "No"
> **Recommended: "No"**, then clarify at the start of Q17 (below). Both "Yes" options claim Elixir or a functional language, and your production backends are Node.js/JavaScript. ⚠️ **Your decision:** "No" may get auto-filtered, but either "Yes" would be a misstatement. The Q17 opener makes it clear you have six years of production backend work in a non-functional language.

### 17. Our backend is built in Elixir. Could you share details about your experience with the language and your thoughts on it? If you don't have experience with Elixir, how would you approach learning it, and what do you find appealing about functional programming?* (textarea)
> About the previous question: I picked "No" because none of my production backend code is in Elixir or a functional language. I've shipped production backends in Node.js since 2020. I haven't written Elixir in production.
>
> How I'd learn it: the same way I learned Firebase/GCP. I joined MTailor as a contractor on a stack I hadn't used in production, wrote the migration scripts, then wrote the SDK docs other engineers onboarded from, and ended up leading the 20+ app migration. For Elixir: your internal bootcamp, then small real tickets in your codebase as early as possible, with an agent pairing on syntax while I check the semantics myself. Before the challenge I'll build a small Phoenix + Ecto + Postgres API with tests to get the basics in place.
>
> What appeals to me: most of my hardest bugs came from shared mutable state and messages that arrive twice. My MongoDB↔Firestore sync on Pub/Sub only worked because every handler was idempotent and safe to redeliver, and the Kafka microservices I architected at CodeBits were message-passing between isolated services. The BEAM builds that model into the runtime: immutable data, isolated processes that talk by message, and supervisors that restart what crashes. Pattern matching makes the failure cases explicit in the code. I've been building that discipline by hand in Node, and I'd like a language where it's the default.

### 18. Do you have experience dealing with non-technical conversations with other stakeholders (i.e. product)?* (radio: Yes / No)
> **Yes**

### 19. Can you share an example of a product or project you led through collaboration with stakeholders, product, and design? Tell us about it.* (textarea)
> At CodeBits I led a team of four developers building legal-tech systems for two Ugandan NGOs: a case management system for FIDA Uganda and a paralegal database and mobile app for LASPNET. There was no product manager between us and the client, so that role was mine. I worked with the NGO staff to understand how cases and paralegals actually moved through their organisations, turned that into scope, and decided what to build first.
>
> The key product decision came from their users. Many of the people legal-aid providers serve don't have smartphones or data. So besides the web system and a React Native/Expo app for paralegals in the field, we built a USSD service that works on basic phones and talks to a Node.js backend over gRPC. I designed one contract that several USSD providers could integrate against without custom per-provider code. Behind it I architected an event-driven backend on Kafka, Docker and Kubernetes, and split the work so four people could build in parallel.
>
> Both systems shipped and ran in production. Looking back, the microservices were heavier than a four-person team needed. The user insight (meet people on the phones they have) mattered more than the architecture.

### 20. Tell us about your proudest achievement from your last two years of work. Why are you proud of it?* (textarea)
> ⚠️ **Choose based on dates.** The question limits it to Oct 2024 – Oct 2026. Use **A** if the MTailor migration or AWS exit was still running in that window. Otherwise use **B**.
>
> **A (MTailor):** Leading MTailor's move of 20+ production applications from Parse/MongoDB to Firebase/GCP with zero downtime, and then taking every service off AWS. I built the real-time two-way MongoDB↔Firestore sync on Node.js and Pub/Sub that let both datastores serve live traffic, cut services over one at a time with a rollback option for each, and reported directly to the CTO. Leaving AWS saves the company $5,000 a month. I'm proud of it because nobody outside engineering noticed: no outage, no maintenance window, no data loss. I'm also proud of the handover. I wrote the SDK docs and trained Ops, so the new platform didn't depend on me.
>
> **B (agentic pipeline):** Turning an agentic job-search pipeline into something I trust. It's a fork of an open-source Claude Code project that I've extended and run daily. It has produced 200+ evaluations. Early on, it wrote confident, well-formatted evaluations of jobs that were already closed or geo-locked, because it trusted aggregator metadata. I moved a live headless-browser check in front of the scoring model, made aggregator geo labels untrusted hints, and made the scorer quote the posting for every rating. False liveness and geo matches went away, and the expensive model only runs on verified input. I'm proud of it because it changed how I build with models: put the cheap deterministic check before the expensive probabilistic one, and keep a human on every irreversible step.

### 21. Do you use AI coding assistants (Claude, Copilot, etc.) in your work? If yes: describe a specific scenario where you rejected or significantly rewrote the AI output. What did the AI miss, and how did you catch it? If no: …* (textarea)
> Yes, every day. I mostly use Claude Code.
>
> One example: my job-search pipeline has a merge step that decides whether a new evaluation is the same company and role as an existing tracker row. In an AI-assisted session the agent wrote a fuzzy title match. It set the required number of shared words from the shorter title's length. The code was clean and the happy path worked. But "Backend Team Lead" and a different "Team Lead" role at the same company would collapse into one row on a single shared word ("Lead"), and one evaluation would silently overwrite the other.
>
> I caught it by building the counter-example instead of trusting the diff. I took two real titles from my tracker that were different jobs and walked them through the rule. I rejected the change and rewrote the rule: two shared words are required whenever either title is long enough to carry that much signal. I left a comment with the exact failing pair so nobody reintroduces it. After that, the two Team Lead evaluations landed as separate rows.
>
> What the AI missed was semantics, not syntax. It optimised for "looks reasonable" rather than "what happens with real data". Plausible-but-too-permissive output is the hardest kind to catch, and the fix is to build the case that breaks it.

> ⚠️ The story bank asks you to confirm the original matcher was an AI-assisted diff you reviewed (commit `8b6634d`, 2026-09-21; follow-up `98839fb`, 2026-10-08). If you wrote it by hand, reframe it as "a heuristic I shipped too loose and then tightened" and pick a different AI-rejection example.

### 22. Before you apply, please review how Remote handles your data. Do you acknowledge the notice?* (radio)
> **I acknowledge** (read the Privacy Notice expander first)

### 23. Do you consent to us keeping your details on file so we can consider you for future roles? (radio: I consent / I don't consent)
> **I consent** (recommended, since Remote hires globally on other teams too)

### Submit application
> Isaac reviews everything and clicks Submit himself.

---

Notes:
- **Comp:** the band floor ($53.3K) is **below** your $60K minimum, and pay is geo-indexed. Recruiter-call script: "I'm targeting $80–120K USD. I understand the band is geo-ranged. What's the range for this role for someone based in Uganda?" If the Uganda range tops out below $60K, stop before the async challenge.
- No claims of Elixir, Postgres, NestJS or production TypeScript. Agentic work is described as a personal fork of an open-source project, not employer production.
- Q16/Q17: "No" plus the Q17 clarification is the honest combination. Expect the tailored non-Elixir version of the exercise.
- If you won't build the Phoenix + Postgres repo before the challenge, remove the "plan to build" / "Before the challenge I'll build" sentences from Q13 and Q17.
