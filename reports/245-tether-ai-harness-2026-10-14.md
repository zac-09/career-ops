# Evaluation: Tether — AI Harness Engineer (100% Remote, Worldwide)

**Date:** 2026-10-14
**Archetype:** Hybrid. **Senior Backend Engineer** (Node.js/JS, npm modules, failure-tolerant distributed state) × **AI/LLM tooling engineer** (agent loops, tool calling, evals). The second axis is not one of Isaac's profile archetypes. The first is his primary.
**Score:** 3.1/5
**URL:** https://careers.tether.io/o/ai-harness-engineer-100-remote-worldwide
**PDF:** ✅ `output/cv-isaac-tether-ai-harness-2026-10-14.pdf`
**Verification:** live via Recruitee API (`https://careers.tether.io/api/offers`, offer id 2760411, `fulltime_permanent`, published 2026-09-25) on 2026-10-14. Presence in the API = live. Playwright not used for this run.
**Recommendation:** **APPLY WITH CAVEAT. Sequence it after #217.** The base of this JD is Isaac's ground: JavaScript, Node.js, modular code, distributed systems, and designing for "network partitions, model errors, timeouts, and retries". The two qualifications that define the job are weak, though: hands-on agent-harness building (tool calling, agent loops, context management, structured outputs) and evals for non-deterministic systems. His only evidence for those is personal: the career-ops pipeline he customised on Claude Code and the WhatsApp OpenAI + Vision assistant. Neither is production employer work, and neither is a harness he wrote in JS/TS himself. Apply only after he has built a small public artifact: a JS/TS agent loop with tool calling, structured outputs and an eval suite, published as an npm module. That one artifact covers three requirements at once.

---

## Geo Check — PASS

| Signal | Value | Weight |
|---|---|---|
| Job title | "AI Harness Engineer **(100% Remote, Worldwide)**" | Governs |
| JD body | **No geography sentence at all.** Unlike #217, #231 and #244, this posting does *not* include the "every corner of the world" paragraph. The only people requirement is "Comfort working in a remote, globally distributed team; good communication skills." | Neutral-positive. Nothing restricts |
| Work-authorization / timezone / country clause | **None** | — |
| Recruitee location field | "Remote job / **Copenhagen, Denmark**" | City-clone metadata, as on #217/#231/#244 |

**Verdict: geography OPEN** on the title and the absence of any restriction. Scored 4.5, consistent with the other Tether reqs. The form should be answered honestly: Kampala, Uganda, EAT (UTC+3), fully remote, no sponsorship needed. Candidate-safety rules as on #217: apply only via tether.recruitee.com; legitimate mail only from @tether.to or @tether.io.

---

## Continuity — Tether in the pipeline

| Tracker # | Report | Role | Score | Status |
|---|---|---|---|---|
| 217 | `reports/217-tether-2026-09-21.md` | Backend Engineer, Wallets | 3.6/5 | Evaluated, **still the first Tether application to send** |
| 226 | `reports/218-tether-2026-09-21.md` | Software Engineer, P2P (Search) | 3.3/5 | Evaluated, needs a hyperswarm + BM25 artifact |
| 231 | `reports/231-tether-devops-2026-10-01.md` | DevOps Engineer | 2.9/5 | SKIP |
| 251 | `reports/244-tether-frontend-2026-10-14.md` | Frontend Software Engineer (QVAC) | 2.9/5 | SKIP |
| **252** | this report | AI Harness Engineer (QVAC) | **3.1/5** | Apply with caveat, after #217 and only with the harness artifact |

**Tether patterns that apply here:** comp is never disclosed; city clones; the location-pay risk from #217 (São Paulo clone est. $36–54K, Tether Ops ~$26/hr Wallets data point); and the domain judgment call (stablecoin issuance, Bitcoin mining). One more applies to this req: **QVAC sits inside Tether Data, the Holepunch lineage (#082, #090, #218).** "Implement and develop P2P technology for use with local AI" almost certainly means the Holepunch/Pear stack. So the Hypercore PR recommended since #082 would also count here.

**Sequencing:** applying to #217 and this req at the same time is defensible because they are different teams (Wallets vs Tether Data/QVAC) and both are Node.js-centred. #244 and #231 should not be added on top. Two targeted Tether applications is the ceiling.

---

## A) Role Summary

| Field | Value |
|---|---|
| **Archetype** | Backend/Node.js IC (primary) × AI agent tooling (new axis) |
| **Domain** | Local-AI assistant platform (QVAC), with P2P distribution of AI workloads |
| **Function** | Build: "Design and develop new tools and modules, enabling new AI capabilities while ensuring success of a wide variety of model types and sizes". "Implement and develop P2P technology for use with local AI". Also feature delivery, bug fixes, code review and automated testing. |
| **Seniority** | "5+ years building production software, with deep experience in P2P systems, AI/LLM tooling, or both". Senior IC. |
| **Core stack** | JavaScript/TypeScript · npm modules · agent harnesses (tool calling, agent loops, context management, structured outputs) · evals and test infrastructure for non-deterministic systems · P2P/distributed systems · failure design |
| **Remote** | 100% remote, worldwide (title) |
| **Contract** | Recruitee `fulltime_permanent` |
| **Comp** | Undisclosed |
| **TL;DR** | Build the JS/TS harness layer that lets QVAC's local models act as agents (tools, loops, context, structured output) and test it properly, on a P2P substrate. Isaac has the Node.js and failure-design base. The agent and eval craft is personal-project level. |

## B) CV Match

| JD requirement | Evidence (cv.md lines unless marked) | Match |
|---|---|---|
| "Strong competency in writing **modular, maintainable code**" | Contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)". Led migration of "20+ applications" (shared migration tooling implied) | ⚠️ implied, not shown as a library |
| "Experience creating and managing **reusable npm modules**" | **Nothing named.** No NPM publishing line (same gap flagged on #231) | ❌ unevidenced. The cheapest gap to close (see Gaps) |
| "Solid skillset in **testing & debugging**" | Testing not named on cv.md (recurring gap since #222). Debugging is implied by zero-downtime cutovers | ⚠️ / ❌ |
| "Strong understanding and comfort with **developing and using AI tools**" | Not on cv.md. **profile.yml proof point:** "Healthcare WhatsApp Chatbot — Integrated OpenAI + Google Vision for prescription OCR via WhatsApp Business API". **Story bank:** career-ops pipeline on Claude Code (Playwright verification gate, batch evaluation, 200+ evaluations) | ✅ for *using* AI tools heavily. ⚠️ for *developing* them (API integration and agent configuration, not a model runtime) |
| "Deep interest or experience with **P2P technologies or distributed systems**" | CodeBits: "Architected a microservices backend… using Apache Kafka, Docker, and Kubernetes". Stack: "NATS Streaming, gRPC". MTailor: "Implemented real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub" | ✅ distributed. ❌ P2P (same as #218) |
| "Comfort working in a remote, globally distributed team" | US Remote, Singapore Remote, Uganda Remote. "English · Kiswahili" | ✅ |
| "Hacker who never stops experimenting" | Story bank: customised and extended the open-source career-ops pipeline, plus the WhatsApp assistant side project | ✅ (credible, personal) |
| **Q:** "5+ years building production software, with **deep experience in P2P systems, AI/LLM tooling, or both**" | 5+ years: yes (CodeBits Jan 2020 → MTailor present, ~6.7 years). "Deep" P2P or AI/LLM tooling: **no** | ⚠️ years met, depth not |
| **Q:** "Hands-on experience building **agent harnesses**, including tool calling, agent loops, context management, and structured outputs" | Not on cv.md. Story bank: the career-ops pipeline runs agent loops on Claude Code, but Claude Code is the harness. Isaac's work there is configuration, prompts/modes, verification gates and Node.js tooling around it. WhatsApp assistant: "handling dialogue state, media ingestion" is closest to context management | ⚠️ **adjacent, personal.** Do not claim he built a harness |
| **Q:** "Experience building **evals and test infrastructure for non-deterministic systems**" | Story bank "Evidence-gated AI pipeline": a deterministic verification gate before LLM scoring; scorer must cite source wording per dimension. No eval suite, golden sets or graders | ⚠️ thin. Eval *thinking* is there; eval *infrastructure* is not |
| **Q:** "Strong **JavaScript/TypeScript**, with experience **modelling complex state, from sync protocols** to agent loops" | JavaScript: every role's stack line. TypeScript: Dr Wealth only, ~6 months. **Sync protocol: "real-time two-way sync between MongoDB and Firestore using Node.js and Google Pub/Sub"**, the strongest single line for this req | ✅ JS + sync-state modelling. ⚠️ TS depth thin. Agent-loop state is personal-project only |
| **Q:** "**Open-source contributions** to P2P, networking, or AI tooling projects" | None on cv.md. career-ops is a fork/customisation of santifer's open-source project. Unless Isaac has upstream PRs, this is not an OSS contribution | ❌ |
| **Q:** "Experience **designing for failure**, including network partitions, model errors, timeouts, and retries" | MTailor: "Led the end-to-end migration of 20+ applications… ensuring zero downtime". Two-way sync under parallel traffic. CodeBits: "USSD service… communicating with a Node.js backend via gRPC" over unreliable carrier links. Story bank: verification gate treats aggregator output as untrusted | ✅ **strong on the systems side.** Model errors: thin |

**Tally:** 7 requirements: 3 ✅, 3 ⚠️, 1 ❌ (npm modules). 6 qualifications: 1 ✅ (failure design), 4 ⚠️ (5+ yrs/depth, harness, evals, JS/TS), 1 ❌ (OSS).

### Gaps and mitigation

| # | Gap | Blocker? | Adjacent evidence | Mitigation |
|---|---|---|---|---|
| 1 | **Hands-on agent harness** (tool calling, loops, context, structured outputs) | **Near-hard.** It is the job title | career-ops on Claude Code; WhatsApp OpenAI dialogue state | **Build it.** A small JS/TS library: model-agnostic agent loop, a tool registry with JSON-schema tool calling, a context-window budget/compaction strategy, structured output validation with retry-on-parse-failure, timeouts and cancellation. Run it against a local model (llama.cpp / Ollama) since QVAC is local-AI. 2–3 weekends. |
| 2 | **Evals for non-deterministic systems** | Hard | Verification-before-scoring gate; cite-the-source scoring | Ship an eval harness with the artifact: golden tasks, pass@k over N runs, schema-conformance rate, tool-call accuracy, a regression report in CI. The career-ops reports are themselves a usable eval set (input JD → expected geo verdict), which makes a good honest story. |
| 3 | **Reusable npm modules** | Medium | Firebase SDK docs | Publish the artifact above to npm with semver and a CI release. That closes #231's NPM gap too. |
| 4 | **TypeScript depth** | Medium | ~6 months backend TS at Dr Wealth | Write the artifact in TypeScript. On the CV, still state "~6 months production TS". Never more. |
| 5 | **OSS contributions** (P2P/AI tooling) | Preferred-ish | None | One substantive Holepunch/QVAC-ecosystem PR (the long-standing #082 recommendation) or the published harness module. |
| 6 | **P2P** | Soft ("deep interest or experience") | Kafka/NATS/gRPC, two-way sync | Same Hypercore mitigation as #218. |

## C) Level and Strategy

**JD level:** senior IC (5+ years, "deep experience" in P2P or AI tooling).
**Natural level:** senior on the Node.js/distributed-state half, entry-to-mid on the harness/eval half. The base fits better than #218 (where both specialisms were missing) and far better than #244. The defining craft is still unproven at work.

**Sell senior without lying:**
- Lead with **sync-state modelling**. The JD itself says "modelling complex state, from sync protocols to agent loops". The MongoDB↔Firestore two-way sync is a real sync protocol under live traffic. Then: "agent loops are the same problem: state, ordering and partial failure, with a non-deterministic participant."
- Second, **designing for failure**: zero-downtime migration of 20+ apps; USSD over unreliable links via gRPC. Map these directly to "network partitions… timeouts, and retries".
- Third, **AI tooling as daily practice**. The career-ops pipeline: he customised and extended an open-source Claude Code agent system, added a verification gate so nothing reaches the LLM scorer unless confirmed live, and keeps a human on Submit. Frame it as *evaluating and constraining* an agent, which is the eval mindset. Do not frame it as *writing a harness*.
- Fourth, the **WhatsApp OpenAI + Vision assistant**: LLM + vision in a conversation with dialogue state and platform constraints.

**Story-bank correction:** the card "[AI-assisted engineering workflow] Career-ops agentic pipeline" says "Built career-ops… Open-sourced". CLAUDE.md credits the system's origin to santifer. Isaac's honest claim is *customised and extended* it (as the #216/Hostaway CV wording already does). Use that wording in this application; this req explicitly screens on OSS and harness authorship.

**Forbidden framings:** "built an agent harness" (until the artifact exists), "production agents/evals", "TypeScript expert", "published npm modules", Electron/Preact, PostgreSQL/NestJS.

**If downleveled:** acceptable if comp holds ≥ $80K. A mid-level seat on QVAC is a legitimate on-ramp into AI tooling, which is a high-demand skill. Ask for a 6-month review with harness/eval ownership as the promotion criterion.

## D) Comp and Demand

| Source | Data point | Read |
|---|---|---|
| JD body | **Not stated** | — |
| web3.career / cryptojobslist — Tether "AI Harness Engineer" | est. **$115K–$117K** | Top of Isaac's $80K–$120K target. Aggregator estimate |
| web3.career — Tether frontend clones (for comparison, #244) | est. $105–117K; desktop sibling $122–141K | Consistent band for Tether Data engineering ICs |
| #217 research (reused) | Node.js req ~$84K; São Paulo clone $36–54K; Tether Ops Wallets ~$26/hr | Location-pay risk persists. Ask on call #1 |
| Market | Agent/LLM-tooling engineers are among the most in-demand IC profiles in 2026; specialist AI seats at Tether listed $250–500K (report #218 data) | The harness title sits between generalist and specialist pay |

Sources: [web3.career — Tether AI Harness Engineer](https://web3.career/r/4MjN0UTM__JGywm8) · [cryptojobslist — AI Harness Engineer, Tether Operations Limited](https://cryptojobslist.com/jobs/ai-harness-engineer-remote-at-tether-operations-limited)

**Comp read: 3.0/5.** The estimate is at target. Disclosure risk and location-pay risk are unchanged from #217. First-call question: *"Is comp indexed to location, and against which location?"* Anchor at $110K+ for agent-tooling work.

## E) Personalization Plan

| # | Section | Current state | Proposed change (applied in PDF) | Why |
|---|---|---|---|---|
| 1 | Summary | Backend/migration framing | "Backend engineer (6+ years, JavaScript/Node.js) who models complex distributed state and designs for failure… now building AI tooling: customised and extended an agentic pipeline on Claude Code, shipped an OpenAI + Vision assistant." | JD vocabulary, with honest wording on the AI axis |
| 2 | MTailor sync bullet | "Implemented real-time two-way sync…" | Lead bullet, framed as "two-way sync protocol between live stores… under parallel production traffic" | Maps directly to "modelling complex state, from sync protocols…" |
| 3 | Projects | Not on cv.md | Agentic pipeline (verification gate, human-in-the-loop, 200+ evaluations); WhatsApp OpenAI + Vision assistant | The AI evidence lives only in profile.yml / story bank |
| 4 | Competencies | — | Node.js & JavaScript · Distributed state & sync · Designing for failure · Event-driven systems (Kafka, Pub/Sub, NATS) · LLM integration · Agentic workflows (Claude Code) · Microservices & gRPC · Remote delivery | Truthful JD-keyword coverage |
| 5 | **After the artifact exists** | — | Add "Projects: [name] — TypeScript agent harness (tool calling, structured outputs, eval suite), published on npm" with the link in the summary | Converts the three biggest ⚠️/❌ rows |

### Top 5 LinkedIn changes
1. Headline → "Backend Engineer · Node.js · Distributed state & AI tooling · Remote (UTC+3)".
2. Featured → the harness repo and npm package once published.
3. About → the "sync protocols to agent loops" bridge in one sentence.
4. Skills → add LLM integration, OpenAI API, Claude Code (all evidenced).
5. Activity → a short write-up on verification-before-inference in agent pipelines.

## F) Interview Prep

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "modelling complex state, from sync protocols…" | **Two-way MongoDB↔Firestore sync on Pub/Sub** (bank) | MTailor, 20+ live apps on EOL Parse | Keep two live stores consistent during cutover | Node.js + Pub/Sub two-way sync, per-app cutover | Zero downtime; $5K/month saved | "Same shape as an agent loop: ordering, partial failure, retries. The agent loop just has a non-deterministic participant." |
| 2 | "designing for failure… timeouts, and retries" | **USSD legal-aid service over gRPC** (bank) | Rural users on unreliable networks | Usable service anyway | Node.js backend over gRPC, session handling for drops | Service usable on the networks people had | Design for the failure case first |
| 3 | "evals… for non-deterministic systems" | **Evidence-gated AI pipeline** (bank) | Agentic job pipeline produced confident evaluations of dead/geo-locked roles | Make LLM output defensible | Deterministic verification gate before the LLM scorer; scorer cites source wording | False-positive geo/liveness matches eliminated across 200+ evals | Cheap deterministic check in front of the expensive probabilistic one |
| 4 | "AI tools" / autonomy boundaries | **Keeping the human on Submit** (bank) | Agent could auto-submit applications | Decide where autonomy stops | Hard rule: stop before Submit; invest in review gates | No unreviewed document ever sent | Agents earn autonomy on reversible steps |
| 5 | LLM + vision integration | **WhatsApp healthcare chatbot with OCR** (bank) | Prescriptions via WhatsApp | Conversational assistant reading photos | OpenAI + Google Vision behind WhatsApp Business API | Running for users | Design for the channel first, the model second |
| 6 | Judging AI-generated code | **Tightening an over-loose dedup heuristic** (bank) | AI-written merge heuristic too permissive | Decide keep vs fix | Built the breaking case, fixed the threshold | False merges stopped | Construct the case that breaks it |
| 7 | Distributed systems | **Kafka/Kubernetes microservices for FIDA** (bank) | NGO case management | Independent deployable services | Kafka + NATS + gRPC, Docker/K8s | Team of 4 shipped it | Boundaries around domain, not org chart |
| 8 | Gap question: harness / evals / TS | **Agent-harness gap, answered straight** (new; not yet in story-bank.md: add it when the artifact exists) | — | — | Name it, show the artifact, give the plan | — | Name the gap first, then show code |

**Recommended case study:** the evidence-gated pipeline (story 3), backed by the harness artifact once it exists. Present the pipeline as an eval problem: what was wrong with the output, how it was measured, which gate fixed it.

**Red-flag questions:**
- *"Show me a harness you wrote."* Without the artifact the answer is "I configured and extended one (Claude Code), I didn't write the loop." That is why the artifact is a precondition.
- *"How do you eval a non-deterministic tool-calling agent?"* Prepare a concrete answer: golden tasks, N runs, pass@k, schema-conformance rate, tool-selection accuracy, trace diffing, CI regression gates.
- *"How much TypeScript?"* "About six months in production at Dr Wealth, backend. JavaScript daily for six years."
- *"Did you build career-ops?"* "I customised and extended an open-source system built on Claude Code." Never claim authorship.

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **2.5** | The Node.js/JS IC base is the primary archetype. The defining axis (agent harness and evals) is new and evidenced only by personal projects. |
| Stack | **2.5** | Requirements 3 ✅ / 3 ⚠️ / 1 ❌. Qualifications 1 ✅ (failure design, strong) / 4 ⚠️ / 1 ❌ (OSS). The sync-protocol line is a real bridge. npm modules, eval infrastructure and harness authorship are not evidenced. |
| Seniority | **2.5** | 5+ years met (~6.7). "Deep experience in P2P systems, AI/LLM tooling, or both" is not met on either axis. |
| Remote / geo | **4.5** | Title "(100% Remote, Worldwide)". No restriction anywhere in the body. Copenhagen chip is city-clone metadata. Held off 5.0 because the body has no explicit worldwide sentence. |
| Comp | **3.0** | Undisclosed. Estimate $115–117K is at target. Tether location-pay pattern unresolved. |
| Stability / growth | **4.0** | Capital-rich employer. Agent-harness and eval skills are among the highest-leverage to acquire in 2026, and this seat would build them on the job. Discounted from 4.5 for the domain judgment call. |
| **Overall** | **3.1/5** | (2.5 + 2.5 + 2.5 + 4.5 + 3.0 + 4.0) / 6 = 3.17 → 3.1 (rounded down because the two defining qualifications are personal-project only). **Apply with caveat**: after #217, and only once the JS/TS harness + eval artifact is public. |

---

## Keywords extracted

AI harness · agent harness · agent loops · tool calling · context management · structured outputs · evals · test infrastructure · non-deterministic systems · JavaScript · TypeScript · npm modules · modular code · testing & debugging · AI tools · LLM tooling · local AI · QVAC · P2P · distributed systems · sync protocols · complex state · designing for failure · network partitions · timeouts · retries · model errors · open source · code review · automated testing · 100% remote worldwide
