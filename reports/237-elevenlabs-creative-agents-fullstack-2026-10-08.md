# Evaluation: ElevenLabs — Full-stack Engineer - Creative Agents

**Date:** 2026-10-08
**Archetype:** Full-Stack Engineer (Isaac's secondary archetype) with a Senior Backend overlay (async workflows, cloud infra, operating in production)
**Score:** 3.6/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/0b3a97d4-193c-4b47-9888-7ef5803ed945
**PDF:** output/cv-isaac-elevenlabs-creative-agents-fullstack-2026-10-08.pdf
**Verification:** live via Ashby posting API 2026-10-08 (present in `job-board/elevenlabs`, publishedAt 2026-10-07T13:28Z). Playwright not used (browser in use by another agent).
**Recommendation:** **APPLY — this is the one to send for the Creative Agents team.** Sibling req #236 (Full-Stack Engineer (Backend Leaning) - Creative Agents) is the same team; send at most one application, and this is it. Here agent experience is a "particularly valuable" bonus. In #236 it is a listed requirement, and agents are Isaac's thinnest area on paper.

---

## Headline caveats

1. **Duplicate team.** #236 and #237 were both posted on 2026-10-07 for the same Creative Agents team. Two applications from one candidate to one hiring team look unfocused. Apply to #237 only.
2. **Agent work is central to the job, even though the requirements list only calls it a bonus.** Responsibilities: "Developing agent capabilities and integrations, including model orchestration, creative tools and reliable asynchronous workflows for audio, image and video generation." Isaac's agent evidence is not on cv.md. It comes from profile.yml (WhatsApp OpenAI + Vision chatbot) and the career-ops agentic pipeline (story bank). It is real but thin, and neither project involves MCP, model evals or multimodal generation.
3. **Testing and observability are named requirements, and cv.md has no evidence for either.** "Practical experience with cloud infrastructure, deployment, asynchronous processing, **testing and observability**." Be ready to answer this directly.
4. **The ElevenLabs bar is high.** The JD mentions "IOI medalists and ex-founders" and says "evidence of exceptional engineering: products you have shipped". Isaac's strongest artifacts (the migration and the sync pipeline) are private. github.com/zac-09 needs a public agent artifact.
5. **TypeScript evidence is only ~6 months (Dr Wealth).** The JD names no language, but ElevenLabs' frontend is TS/React. Do not claim more TypeScript than that.

---

## Geo Check — LIKELY PASS (some uncertainty remains)

- **ATS location (exact):** `"location": "Remote"`, `"secondaryLocations": []`. No country, no workplaceType, no address.
- **Body wording (exact):** "Global team: We prioritize your talent, not your location." and "Co-working: If you're not located near one of our main hubs, we offer a monthly co-working stipend." There is no country, timezone or work-authorization clause anywhere in the JD.
- **Contrast with siblings:** the general Creative-family full-stack reqs are tagged with country lists. Examples: Ashby 6a530871 "Full-Stack Engineer" is tagged United Kingdom plus Dublin, Spain, US, Sofia, Germany and Poland. c7d59014 (Back-End Leaning) is tagged UK, US, Germany, Portugal, Poland and others. These two Creative Agents reqs are the only engineering reqs on the board with a bare "Remote" label and no country list. That supports a worldwide reading. Some ElevenLabs reqs also list Brazil, Mexico, India and Argentina, so they do hire outside the US and EU.
- **Application form:** asks for country of residence as free text (scan note). That points to screening or payroll by country, not a hard gate.
- **Precedent:** #150 (ElevenLabs Full-Stack (Global)) said "This role is remote and can be executed globally."
- **Remaining uncertainty:** the bare "Remote" label is not an explicit "anywhere in the world" statement, and no African country appears anywhere on ElevenLabs' board. ElevenLabs probably hires through an EoR, and Uganda coverage is unconfirmed. Ask about it on the first call. Remote is scored 4.0, not 5.0.
- **Timezone:** UTC+3 overlaps all of the European working day (London/Warsaw hubs) and the US-East morning.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Full-Stack Engineer (secondary fit) + Senior Backend |
| Domain | AI product: ElevenCreative creative agent (audio, image and video generation) |
| Function | Build + operate: "engineers own complete problems across the full stack: frontend, backend, agent architecture and infrastructure" |
| Seniority | Unlevelled by design ("We don't have job titles"). Effective bar is senior or higher |
| Remote | "Remote", with no country list; "Global team: We prioritize your talent, not your location." |
| Team size | "a small team"; the creative agent is "already live" |
| Comp | Not disclosed (Ashby compensation fields empty) |
| TL;DR | Own agent-powered creative features end to end on a live product, from React UI through backend services, async generation workflows, evals and production operation. |

## B) CV Match

| JD requirement | CV evidence | Match |
|---|---|---|
| "Strong engineering skills across both frontend and backend, with a track record of independently building complete production applications" | CodeBits: "Built a case management system for FIDA Uganda and a paralegal database for LASPNET Uganda"; "Developed a cross-platform mobile app for LASPNET using React Native and Expo"; Mind2matter: "Built backends for DeFi applications using Web3 and Node.js" + "Delivered React UIs from Figma designs under tight timelines"; Dr Wealth: React/Tailwind pages + TypeScript APIs | ✅ Full-stack across 4 roles |
| "Confidence designing user interfaces, backend services, APIs and data models" | Dr Wealth: "Extended backend APIs in TypeScript using Firebase Cloud Functions and Express.js"; MTailor: migrations require data-model redesign (MongoDB to Firestore); CodeBits: "Architected a microservices backend" | ✅ (NoSQL data models only. No relational evidence) |
| "Practical experience with cloud infrastructure, deployment, asynchronous processing" | MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"; "Migrated file storage from Amazon S3 to GCS"; CodeBits: "Apache Kafka, Docker, and Kubernetes" | ✅ Strong |
| "...testing and observability, with the ability to debug and resolve problems across the full stack" | Not named on cv.md. Indirect: "ensuring zero downtime" across 20+ apps | ⚠️ Gap |
| "Evidence of end-to-end ownership ... taking ambiguous problems from technical design through to shipping and ongoing operation" | MTailor: "Led the end-to-end migration of 20+ applications ... ensuring zero downtime, reporting directly to the CTO"; Contractor-to-FTE conversion | ✅ Strongest signal |
| "Developing agent capabilities and integrations, including model orchestration" (responsibility) / "Hands-on experience building production agents, evaluations, MCP integrations" (bonus) | Not on cv.md. profile.yml: "Integrated OpenAI + Google Vision for prescription OCR via WhatsApp Business API"; story bank: career-ops agentic pipeline on Claude Code | ⚠️ Thin: one LLM integration and one personal agentic tool. No MCP server authored, no formal evals |
| "reliable asynchronous workflows for audio, image and video generation" / "multimodal products" (bonus) | MTailor: "Built a 3D visualisation feature for customers using video overlay and the ffmpeg library, increasing buyer conversion"; chatbot: image OCR | ⚠️ Adjacent: video processing in production, but not generative |
| "building in a small, fast-moving team" (bonus) | CodeBits team of 4; Mind2matter agency pace; MTailor reporting to the CTO | ✅ |
| "clear communication" | Contractor: SDK docs + Ops training; 6+ years remote across US, Singapore and Uganda | ✅ |

### Gaps and mitigation

| # | Gap | Blocker? | Mitigation |
|---|---|---|---|
| 1 | Production agent / evals / MCP | Soft (a bonus here, but core to the daily work) | Before applying, ship one public repo: a small creative agent (Node/TS) that calls an image or audio generation API through tool use, runs long jobs on an async worker queue, includes a tiny model-graded eval harness, and exposes one tool as an MCP server. One artifact covers gaps 1, 2 and 4. |
| 2 | Testing and observability | Soft-hard (named requirement) | Do not claim tooling that isn't evidenced. In the artifact, add a test suite and structured logging/tracing. In interviews, explain how the zero-downtime cutover was validated. |
| 3 | TypeScript depth (~6 months, Dr Wealth) | Soft. No language is named in the JD | State it plainly. Build the artifact in TypeScript. |
| 4 | Public proof of "exceptional engineering" | Soft | Pin the artifact and the career-ops work on GitHub. Put the migration numbers in the application form. |
| 5 | Relational DB (Postgres/SQL) | Not asked for here | Don't raise it. If asked, answer honestly: production datastores have been MongoDB/Firestore. |

## C) Level and Strategy

1. **Level:** unlevelled. ElevenLabs expects senior-plus impact. Isaac's ~6.7 years is enough on paper. The deciding factor will be the quality of his proof, not years of experience.
2. **Sell senior without lying:** lead with "I own whole problems". The 20+ app zero-downtime migration that he owned to the CTO is the main story. Back it with the ffmpeg video feature (a shipped, measurable customer-facing media feature) and the agentic pipeline, which shows he already designs around model unreliability. A suggested line: "I've been building with agents daily and running an agentic pipeline I designed. What I'd bring from day one is shipping and operating the system around the model."
3. **If downleveled:** accept if comp clears the $80K floor-to-target band. ElevenLabs equity and brand outweigh the title. Ask for a 6-month impact review.

## D) Comp and Demand

| Source | Data |
|---|---|
| Ashby API (this req) | Compensation not disclosed |
| Levels.fyi ElevenLabs (updated 2026-04) | Company median TC ~$96K; UK SWE median ~$148K (base ~$134K) |
| Report #150 (2026-07) | Levels.fyi median TC ~$128K; mid-level US base $120–180K (jobsbyculture) |
| Demand | Voice/creative AI hiring is intense; 142 open reqs on ElevenLabs' board |

Isaac's $80–120K target is very likely achievable even with location-adjusted pay. The risk is a country-indexed band for Uganda. Anchor on output, using the "geographic discount pushback" script. Sources: [levels.fyi ElevenLabs](https://www.levels.fyi/companies/elevenlabs/salaries), [levels.fyi SWE](https://www.levels.fyi/companies/elevenlabs/salaries/software-engineer).

## E) Personalization Plan

| # | Section | Current | Change | Why |
|---|---|---|---|---|
| 1 | Summary | Backend/migration headline | Full-stack, end-to-end ownership + video feature + LLM/agent work | Mirrors "own complete problems across the full stack" |
| 2 | Competencies | Generic backend | React delivery, async processing, LLM/agentic workflows, ffmpeg media | JD keywords |
| 3 | MTailor bullets | Sync bullet first | Ownership first, ffmpeg video feature second | Creative/multimodal relevance |
| 4 | Projects | Not on cv.md | Agentic pipeline + WhatsApp multimodal assistant (from profile.yml) | Only agent evidence available |
| 5 | Skills | Includes SQL | Drop SQL and do not add Postgres/NestJS; TypeScript listed without years | Honesty rules |

LinkedIn: (1) headline "Full-stack / backend engineer · agents, async systems, GCP"; (2) add the WhatsApp assistant as a project; (3) add the public agent repo once built; (4) add the ffmpeg feature to MTailor; (5) set location to "Kampala, Uganda · open to remote".

## F) Interview Prep

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | End-to-end ownership | Zero-downtime Parse→Firebase migration | 20+ apps on deprecated Parse/MongoDB | Move them with no downtime | Two-way Mongo↔Firestore sync on Pub/Sub; migrated in waves; reported to the CTO | Zero downtime; $5K/month saved after the AWS exit | Run old and new in parallel with a way back. Big-bang cutovers fail. |
| 2 | Async workflows | Pub/Sub sync pipeline | Two live datastores | Keep them consistent under traffic | Node.js consumers on Pub/Sub | Parallel production traffic supported | Async systems need redelivery-safe handlers from day one |
| 3 | Multimodal / media | ffmpeg 3D visualisation | Buyers couldn't picture the garment | Ship a visual preview | Video overlay with ffmpeg | Increased buyer conversion | Media pipelines are latency and cost problems before they are UX problems |
| 4 | Agents / reliability | Career-ops verification gate | Agent graded closed or geo-locked postings | Make output defensible | Live verification before scoring; scoring cites the source wording | 200+ evaluations; false geo/liveness matches removed | Put cheap deterministic checks in front of the expensive probabilistic step |
| 5 | Model integration | WhatsApp prescription assistant | Patients use WhatsApp, not apps | Read photos and reply | OpenAI + Google Vision behind the WhatsApp Business API | LLM assistant in production | Channel constraints shape the architecture as much as the model does |
| 6 | Full-stack delivery | Mind2matter Figma→React + DeFi backends | Agency, demanding clients | Ship both halves fast | React from Figma + Node/Web3 backends | Delivered on deadlines | Owning both sides removes integration hand-offs |
| 7 | Small team / leadership | CodeBits team of 4 | NGO legal-tech, fixed scope | Deliver two systems | Kafka/K8s microservices, USSD over gRPC, RN app | Systems delivered to FIDA/LASPNET | Simpler architecture would have been enough for that scale |

**Case study to present:** the zero-downtime migration, followed by the career-ops verification gate (agent reliability).
**Red-flag questions:** "Have you built production agents?" Answer honestly: one production LLM integration and one agentic pipeline, then show the public repo. "Testing/observability?" State the gap and show what the artifact does. "TypeScript depth?" About 6 months in production at Dr Wealth. JavaScript/Node is the daily language.
**Story bank:** stories 1, 2, 4 and 5 are already in interview-prep/story-bank.md. Story 3 (ffmpeg) is new. It was not appended in this run because the orchestrator scoped this run's file writes.

---

## Scoring

| Dimension | Score | Note |
|---|---|---|
| CV match | 3.6 | Full-stack and ownership are strong; agents, testing and observability are thin |
| Archetype fit | 3.5 | Secondary archetype (full-stack) |
| Remote / geo | 4.0 | "Remote" with no country list + "talent, not your location"; Uganda eligibility unconfirmed |
| Comp | 4.0 | Undisclosed; market data clears the target |
| Company / growth | 4.5 | $22B valuation, AI leader, greenfield agent work |
| Competition / bar | 2.5 | Elite applicant pool; private artifacts |
| **Overall** | **3.6/5** | |

## Keywords extracted

full-stack, frontend, backend, agent architecture, creative agents, model orchestration, asynchronous workflows, audio/image/video generation, APIs, data models, cloud infrastructure, deployment, testing, observability, evaluations, MCP integrations, multimodal, end-to-end ownership, product judgement, prototyping, production operation

---

## G. Application Answers (draft 2026-10-08)

## Answers for ElevenLabs — Full-stack Engineer - Creative Agents

Based on: Report #237 | Score: 3.6/5 | Archetype: Full-Stack Engineer + Senior Backend

Form read live via Playwright 2026-10-08 at `jobs.ashbyhq.com/elevenlabs/0b3a97d4-…/application`. Posting is **live**. The H1 reads "Full-stack Engineer - Creative Agents" (matches this report). Location "Remote", Full time, Engineering & Product. 14 fields in total. **No cover-letter field or upload**, so no cover letter was generated. No salary or currency question. No work-authorization or sponsorship question.

---

### Autofill from resume (optional upload)
> Skip. Fill the fields by hand so the parser can't garble them.

### 1. Name* (text)
> Isaac Mubiru

### 2. Email* (text)
> isaacmubiru99@gmail.com

### 3. Location* — "Country you're currently residing in" (type-ahead combobox)
> Type `Uganda` and pick **Uganda** from the suggestions. If the list only offers cities, pick **Kampala, Uganda**.

### 4. Resume* (upload)
> `output/cv-isaac-elevenlabs-creative-agents-fullstack-2026-10-08.pdf`

### 5. How did you hear about ElevenLabs?* (radio)
Options: I'm a user · News article · Job board · Social media (LinkedIn, Instagram, X etc) · In person event · Referral · I was reached out to · Other (please specify)
> **Job board** (found on your Ashby careers board)

### 6. If other, please specify below (text, optional)
> Leave blank.

### 7. Link to your Github profile* (text)
> https://github.com/zac-09

### 8. Link to your LinkedIn profile* (text)
> https://linkedin.com/in/isaac-mubiru-3bb728174

### 9. Why ElevenLabs, and why now? (textarea, optional; answer it anyway)
> Your posting describes the job I want: "engineers own complete problems across the full stack: frontend, backend, agent architecture and infrastructure." That is how I've worked for six years. At MTailor I led the zero-downtime migration of 20+ production apps from Parse/MongoDB to Firebase/GCP, reporting to the CTO, and I also shipped customer features on the same stack, including a 3D visualisation built with ffmpeg video overlay that increased buyer conversion.
>
> Why now: the creative agent is already live and the team is small. The hard part now is the system around the model: async generation jobs that can fail, retry and still finish, and media pipelines that stay fast and affordable. I've built that kind of plumbing (a Node.js + Pub/Sub sync that ran under live traffic for months), and I build with LLMs too: a WhatsApp assistant that uses OpenAI and Google Vision to read prescription photos, and an agentic job-search pipeline on Claude Code that I run daily.
>
> I'll be honest about the gap. I haven't built production agents with formal evals or MCP integrations yet. That's the part of this role I most want to learn, on a product people use every day. I work fully remote from Kampala (UTC+3), which covers the whole European working day.

### 10. What's the most impactful thing you've built? What was your specific contribution? (textarea, optional; answer it)
> The migration of MTailor's 20+ production applications from Parse/MongoDB to Firebase/GCP with zero downtime.
>
> I joined as an Upwork contractor to write the migration scripts. Within months I was full-time and leading the whole programme, reporting directly to the CTO. My part, end to end: I designed and built a real-time two-way sync between MongoDB and Firestore on Node.js and Google Pub/Sub, so both datastores could serve live traffic at the same time. I cut services over one by one, with a rollback option for every service for the whole migration window. I moved file storage from S3 to GCS with a Python script, moved everything else off AWS, wrote the Firebase SDK docs other engineers onboarded from, and trained the Ops team on the new dashboard and backups.
>
> Why it mattered: the company never had to take the product down, and leaving AWS cut $5,000 a month in infrastructure costs, permanently.

### 11. How did you know it worked? What did success actually look like? (textarea, optional; answer it)
> Three signals. First, users never noticed. All 20+ apps moved with zero outages, and both datastores served production traffic in parallel with no data loss. Second, the money: once the last service left AWS, the $5,000/month bill went away and stayed gone. Third, the handover held. Engineers onboarded to the new stack from the docs I wrote, and Ops ran backups without me.
>
> The leading indicator was the two-way sync. Because every service could still roll back, each cutover was a small, reversible step instead of a bet.

### 12. Have you used ElevenLabs - even in a personal or side project? What did you build or explore? (textarea, optional)
> **Needs your input. Don't send a made-up answer.** Two honest versions:
>
> **(a) If you have used it** (name exactly what you did): "Yes. I used [Text to Speech / the API / Studio] to [what you built or tried]. What stood out was [one concrete observation about latency, voice quality or the API]."
>
> **(b) If you haven't yet:** "Not in a project yet. Before an interview I'll build a small creative agent in TypeScript. It will call your TTS API through tool use, run long generations on an async job queue with retries, and include a basic eval check on the output. Then I can talk about your API from real use, not from the docs." Only write this if you will actually build it. Report #237 recommends this same artifact (gap mitigation #1).

### Submit Application
> Isaac reviews everything and clicks Submit himself.

---

Notes:
- **Only apply to this req, not #236** (same Creative Agents team, posted the same day). See the report caveats.
- Answers stay within cv.md, profile.yml and the story bank. TypeScript is not overstated (no TS claim in the answers). Agents/evals/MCP are named as a gap. No relational-database or testing-tool claims.
- Uganda eligibility under ElevenLabs' EoR is still unconfirmed. Ask on the first call. If they ask about comp: target $80K–120K USD (profile.yml), floor $60K; use the "output-based, not location-based" line from _shared.md.
