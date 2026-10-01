# Evaluation: G2i (client placement) — DevOps Engineer — Mobile & Web (React Native / Expo)

**Date:** 2026-10-01
**Archetype:** Platform/Infrastructure Engineer (Isaac's *adjacent* archetype) — specifically **mobile/web release engineering** (CI/CD, Expo/EAS, app-store releases, OTA) with a secondary React Native bug-fix/UI component. This is not a backend seat.
**Score:** 2.9/5
**URL:** https://jobs.ashbyhq.com/g2i/81872f0a-4551-40c6-896b-4821e41d24f8
**PDF:** none (score below 3.0 — not generated)
**Verification:** live via Ashby posting API (JSON, published 2026-09-30) 2026-10-01; JD saved to jds/g2i-devops-engineer-mobile-web.md
**Recommendation:** **SKIP.** Weak match. Geography is fully open and the engagement is long-term, but the seat is a dedicated mobile release-engineering role whose core tooling (GitHub Actions, EAS, App Store Connect / Google Play release management, OTA/versioning, Supabase, Next.js) is unevidenced on cv.md, the stated "3+ years of DevOps or infrastructure engineering focused on mobile and web" bar is not met, and the ceiling rate (46 USD/hr, "up to", via a marketplace with documented non-US rate tiers) lands at or below the bottom of target once benefits and the likely geo discount are priced in. Apply only if Isaac deliberately wants to pivot into release engineering and accepts the rate.

---

## Headline caveats (read these before the score)

1. **This is a DevOps req first and a React Native req second.** "We're looking for a hands-on DevOps Engineer to **own and improve our mobile and web build, release, and deployment workflows**." Five of the eight responsibility bullets are CI/CD, build systems, store releases, OTA/versioning and A/B frameworks. cv.md has **no named CI/CD tooling anywhere** — no GitHub Actions, no EAS Build, no Fastlane, no release pipeline line. The closest evidence is release *discipline* (the zero-downtime 20+ app migration) and one shipped Expo app, which is not the same thing as owning a release pipeline.
2. **The hard bar is missed as stated.** "3+ years of experience in DevOps or infrastructure engineering focused on mobile and web platforms." Isaac has ~6.5 years as a software engineer and zero years in a DevOps/infra-titled role. Seniority is scored **2.0** for the same reason report #222 scored its missed leadership bar at 2.0: a hard requirement not met is not softened by adjacent strength.
3. **Supabase + Next.js are "proficiency" requirements, both absent.** "Proficiency with Supabase and the Next.js and React ecosystems." Isaac's deep BaaS is Firebase (four roles); Supabase is Postgres-based and SQL is listed on cv.md's Proficient line but unevidenced in any bullet (known gap, see MEMORY). Next.js/SSR appears nowhere on cv.md — the same gap flagged on #221.
4. **"Up to 46 USD per hour" is a ceiling, not a band, at a company that tiers by geography.** 46 × 40 × 52 ≈ **$95.7K gross**, 1099-style, no benefits/PTO. Using the shared-context rule that contractor rates run 30–50% above employee base, that is a **~$64–74K employee-equivalent** — below the $80K–120K target, above the $60K floor only at the ceiling. G2i's own published AI-data tiers discount non-US developers ~30% ($50 → $35/hr); if that logic is applied here, Kampala lands around **$32/hr ≈ $67K gross**, i.e. ~$45–52K employee-equivalent, **below the floor**. Glassdoor reviewers report G2i "rates appear strictly non-negotiable" (report #222 finding). The lever, if any, is before pricing, not after.
5. **Positive, and worth stating:** this is the first G2i req in the tracker that is explicitly **"Long-term contract"** rather than capped at 6 months (#221/#222), and the location clause is the cleanest possible: "Fully remote — candidates worldwide."

---

## Geo Check — PASS (scored on the JD body)

- **Exact location text (JD body, verbatim):** "**Location: Fully remote — candidates worldwide**"
- **Country restriction:** none. **Work-authorization clause:** none. **Timezone / overlap-hours requirement:** none stated anywhere in the body.
- **Ashby chips:** Location `Remote`, `remote: true`, type `FullTime` (the body says "Long-term contract" — body treated as ground truth, as on #221/#222).
- **Corroboration:** G2i reqs are syndicated to Africa-specific boards and G2i documents non-US rate tiers, i.e. it demonstrably contracts outside the US (#221 §Geo, #222 §Geo). Prior two G2i evaluations both passed geo on the same basis.
- **Residual risk:** not eligibility. The client is a US-flavoured sports startup ("A love of baseball or other sports") — release windows and store-review firefighting may cluster in US hours, and the JD does not price that. Also the "candidates worldwide" clause is G2i's, and the rate is where the geography bites (caveat 4).

**Verdict: geography OPEN.** Isaac can hold this seat from Kampala. The problem with this req is fit and price, not location.

---

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Platform/Infrastructure (adjacent) — mobile & web release engineering with hands-on React Native fixes |
| Employer model | **Talent marketplace placement.** "About our Client — Our client is a software startup making sports training more engaging through gamification." Isaac would contract through G2i to a client; G2i is not the product company. |
| Client domain | Sports-training gamification: "connects training facilities, commercially available sensor systems, and players through mobile apps and the web". Hardware-sensor adjacent; baseball/skills training. Client unnamed. |
| Function | **Own and operate** build/release/deploy for mobile (Expo/EAS → App Store Connect, Google Play) and web (Next.js/React); build GitHub Actions workflows with automated tests and release checks; configure OTA updates, versioning strategies, release environments; support A/B testing frameworks; improve Supabase services and developer tooling; troubleshoot RN bugs and ship UI fixes. |
| Seniority | "3+ years of experience in DevOps or infrastructure engineering focused on mobile and web platforms." Hands-on, small team, "manage changing priorities in a small startup team". |
| Stack | GitHub Actions, Expo, EAS, React Native, Supabase, Next.js, React, App Store Connect, Google Play Console, OTA updates, A/B testing frameworks, e2e/integration tests in CI (nice to have), 3D graphics in mobile (nice to have), sensor data (nice to have) |
| Remote | "Fully remote — candidates worldwide" |
| Engagement | "Long-term contract" |
| Comp | "Budget: up to 46 USD per hour" |
| Team size | "small, fully remote engineering team" — not quantified |
| Process | Not stated in body; G2i's published funnel on sibling reqs is resume → technical screen → behavioural → offer |
| TL;DR | A genuinely open-geography, long-term contract to be the release engineer for a small sports-tech startup's Expo/Next.js stack — on tooling Isaac has not evidenced, at a ceiling rate that already sits below target before G2i's geo tiers are applied. |

## B) CV Match

| JD Requirement | CV Evidence (exact lines from cv.md) | Match |
|---|---|---|
| "3+ years of experience in **DevOps or infrastructure engineering** focused on mobile and web platforms" | No DevOps/infra-titled role. Adjacent: MTailor — "Led the end-to-end migration of 20+ applications from Parse/MongoDB to Firebase/GCP, ensuring zero downtime"; "Saved the company $5,000/month by migrating all services off AWS"; CodeBits — "Architected a microservices backend … using Apache Kafka, Docker, and Kubernetes" | ❌ **hard bar not met as stated.** Real infra ownership exists (cloud migration, cost, Docker/K8s) but it is backend-infra, not mobile/web release engineering, and it was never the job title. |
| "Strong hands-on experience with **GitHub Actions**" | Nothing on cv.md. No CI tooling named in any stack line. | ❌ named gap |
| "Strong hands-on experience with **Expo, EAS, and React Native**" | CodeBits: "Developed a cross-platform mobile app for LASPNET using **React Native and Expo** (iOS & Android), with Firebase push notifications"; Skills: "**Intermediate:** Go, AWS, Rust, React Native" | ⚠️ Expo + RN are real, one shipped app, 2020–21, self-rated **intermediate**. **EAS is not named** (EAS Build/Submit/Update post-date much of that work). |
| "Proven experience managing production releases through both **App Store Connect and Google Play Console**" | Implied only by "(iOS & Android)" on the LASPNET app — the app shipped to both platforms, which requires store submission. No release-management line. | ⚠️ implied once, not "proven", not repeated |
| "Experience configuring **versioning strategies, OTA updates, and A/B testing** environments" | Nothing on cv.md. | ❌ |
| "**Proficiency with Supabase**" | Nothing. Deep BaaS is Firebase (MTailor, Dr Wealth, Mind2matter, CodeBits). SQL on Skills Proficient line, unevidenced in bullets (known gap). | ❌ Firebase→Supabase is a transferable mental model (auth, realtime DB, functions, storage) but Postgres/RLS depth is unproven |
| "**Next.js** and React ecosystems" | React: MTailor stack, Dr Wealth "Added responsive UI pages to the PWA using HTML, Tailwind, and React", Mind2matter "Delivered React UIs from Figma designs under tight timelines" | ⚠️ React ✅ across three roles; **Next.js/SSR ❌** (same gap as #221) |
| "Ability to make **React Native code changes**, including bug fixes and UI updates" | LASPNET RN+Expo app (above); React UI delivery at Dr Wealth and Mind2matter | ✅ the one requirement Isaac clears cleanly |
| "Manage, maintain, and optimize **CI/CD pipelines, build systems, and deployment workflows**" | Release *discipline* only: zero-downtime migration of 20+ apps; "Migrated file storage from Amazon S3 to GCS via a Python script"; "Migrated a WebFlow website from a Parse backend to Firebase" | ⚠️ strong deployment judgement, zero named pipeline tooling |
| "Improve **developer tooling** … and infrastructure" | MTailor contractor: "Wrote documentation for fellow engineers on working with the new Firebase SDKs (Node.js and Python)"; "Trained the Ops team on the new Firebase Dashboard and backup procedures" | ✅ developer-enablement is evidenced |
| "Strong troubleshooting skills, **ownership**, and the ability to manage changing priorities in a **small startup team**" | Mind2matter: "Full-stack development for a US-based agency with demanding clients, reporting directly to the CTO"; MTailor: "reporting directly to the CTO"; CodeBits: "Led a team of 4 developers" | ✅ three roles reporting straight to a CTO; contractor→FTE conversion at MTailor |
| Nice: "automated end-to-end and integration tests in CI/CD" | No testing evidence on cv.md | ❌ |
| Nice: "**3D graphics in mobile** applications outside gaming" | MTailor: "Built a 3D visualisation feature for customers using video overlay and the ffmpeg library, increasing buyer conversion" | ⚠️ 3D-adjacent, web not mobile, video-overlay not a 3D engine — do not oversell |
| Nice: "hardware sensors or integrating sensor data" | Nothing | ❌ |
| Nice: "Meaningful engineering ownership of shipped **cross-platform** products" | LASPNET RN+Expo app (iOS & Android) | ✅ |

### Gaps — blocker classification and mitigation

| # | Gap | Blocker? | Adjacent experience | Mitigation |
|---|---|---|---|---|
| 1 | **GitHub Actions / CI pipeline ownership** — none named | **Blocker.** It is the first-listed hands-on requirement and the core of the job. | Zero-downtime cutover discipline; Docker/K8s at CodeBits | Only closable by doing it: a public repo with an Expo app + GitHub Actions workflow running tests, EAS Build and EAS Update on tag. A weekend, but it must exist *before* applying, not be promised. |
| 2 | **EAS / App Store Connect / Google Play release management** | **Blocker** ("proven experience") | One Expo app shipped to both stores, 2020–21 | Same demo repo; be explicit that store releases were done once, for one app, five years ago. |
| 3 | **Supabase** | Soft blocker ("proficiency") | Four roles on Firebase (auth, Firestore, Functions, Pub/Sub) | Honest bridge: "Firebase deep, Supabase is the same shape on Postgres; I have not run it in production." Do not claim it. |
| 4 | **Next.js / SSR** | Soft blocker | React across three roles, PWA optimisation at Dr Wealth | Same answer as #221: client-rendered React is proven, SSR is not. |
| 5 | **OTA / versioning / A/B** | Soft blocker | None | Nothing to bridge from; say so. |
| 6 | **"3+ years DevOps"** | **Hard bar** | ~6.5 years SWE incl. infra migration ownership | Cannot be mitigated by framing without misrepresenting the CV. |

## C) Level and Strategy

**JD level vs Isaac's level.** The req is a mid-level hands-on individual contributor seat ("3+ years") in a *different specialty*. Isaac is senior in backend/full-stack and junior in release engineering. On a pure years-of-engineering basis he is above the bar; on the bar as written he is below it. This is a **lateral pivot into DevOps**, not a step up or down — and at $46/hr it is a pivot paid at or below his current band.

**Is the pivot worth it?** Platform/Infrastructure is Isaac's *adjacent* archetype in config/profile.yml, not primary. Three of the four things this seat would teach (EAS, store release ops, OTA) are mobile-specific and transfer weakly to the backend/platform reqs he is actually targeting; the fourth (GitHub Actions) is the one gap that keeps costing him keyword matches (#221, #222 both flagged "CI/CD vocabulary absent"). The better way to close the CI/CD gap is to add it to his *current* work and cv.md, not to take a $46/hr release-engineering contract to acquire it.

**If he applies anyway**, the only honest pitch is the "troubleshoot React Native issues, fix bugs, and contribute UI updates" half plus deployment judgement:

1. "I shipped a React Native + Expo app to both stores and I've run a zero-downtime migration of 20+ production apps — I understand release risk from the inside."
2. "I've owned developer enablement: SDK docs and Ops training on a new platform."
3. "Here is a repo with the exact pipeline you describe — Expo, EAS Build/Update, GitHub Actions with tests and release checks — built this week." (Must exist first.)

Do **not** lead with Kafka/Kubernetes; it signals a backend engineer looking for any remote contract and this client wants a release engineer.

**Which G2i req to target.** Of the three G2i reqs now evaluated (#221 Senior Full-Stack $50–150/hr, #222 Staff $120–200/hr, #229 this one ≤$46/hr), this is the **weakest** on both fit and money. If Isaac wants a G2i relationship, #221 remains the right entry point.

## D) Comp and Demand

| Item | Data | Source |
|---|---|---|
| Posted budget | "**up to 46 USD per hour**" — ceiling, no floor stated | JD body |
| Annualised at ceiling | 46 × 40 × 52 = **~$95.7K gross**, contract, no benefits/PTO/equity | Derived |
| Employee-equivalent at ceiling | **~$64–74K** (contractor rates run 30–50% above employee base per modes/_shared.md) | Derived |
| Against target | profile.yml target `$80K-120K`, floor `$60K` → **below target**, above floor only at the ceiling and only at full 40h/wk | config/profile.yml |
| G2i geo-tiering precedent | AI-data programme: Tier 3 "$50 USD/hour for US-based developers and $35 USD/hour in most other countries" (−30%); Tier 2 $30 vs $20 | [remoteafrica.io G2i listing](https://remoteafrica.io/jobs/f/g2i-inc-software-engineer-for-ai-training-data-tier-2) |
| Kampala scenario if tiered | ~$32/hr → **~$67K gross** → ~$45–52K employee-equivalent → **below the $60K floor** | Derived |
| G2i typical client billing | "majority of customers pay in the range of $60–140 per hour" — this req's $46 ceiling is **below** G2i's usual client band, i.e. a budget-constrained client | [G2i FAQ](https://g2i.co/faq) |
| Negotiability | Glassdoor: "rates appear strictly non-negotiable" | Report #222 §D finding |
| Market: RN/Expo contractors | Structured rate card: Senior (6+ yrs) ~$44/hr, Lead ~$58/hr; Upwork RN/Expo listings $20–75/hr; non-US contractors typically 40–60% of US rates | [ecorpit rate card](https://ecorpit.com/hire-react-native-developers/), [Upwork RN/Expo listing](https://www.upwork.com/freelance-jobs/apply/call-React-Native-Expo-EAS-contractor_~022075789395513105553/), [codingclave](https://codingclave.com/canada/hire/react-native-developer) |
| Client stability | Unnamed early-stage sports-tech startup; hardware-sensor dependent; no funding data available | JD; no public source — unverifiable |
| Demand trend | Mobile release engineering (Expo/EAS + GitHub Actions) is a real and growing niche, but it is a niche Isaac is not currently in; his backend demand is stronger. | Market |

**Comp read:** $46/hr is market-rate for a *senior React Native contractor* globally, which tells you the client is pricing a mid-level RN/DevOps generalist, not a senior platform engineer. For Isaac it is a pay cut in disguise relative to target even at the ceiling, and G2i's documented non-US tiering plus the "rates non-negotiable" signal mean the realistic offer is below the ceiling. **No negotiation script changes this**: the budget is the client's, stated as a cap, and G2i's fee sits inside it.

If engaged anyway, deploy the geo-discount script from modes/_shared.md **at the first screen**: "The posting says up to 46. I'd like to confirm that 46 is available to a Kampala-based engineer at the scope described, before we invest further." A no is a clean exit.

## E) Personalization Plan

**No PDF generated** (score < 3.0). If Isaac overrides and applies, the tailored CV would need:

| # | Section | Change | Why |
|---|---|---|---|
| 1 | Professional Summary | Lead with "shipped a React Native + Expo app to iOS and Android" and "zero-downtime release of 20+ production apps"; drop the Kafka/Kubernetes headline | The reader is hiring a release engineer |
| 2 | Core Competencies | React Native & Expo · Cross-Platform Mobile Delivery · Zero-Downtime Deployments · Cloud Infrastructure (GCP/Firebase) · Developer Tooling & Documentation · React & Tailwind UI · Docker & Kubernetes · Node.js APIs | All cv.md-backed. **Do not** add GitHub Actions, EAS, Supabase, Next.js, OTA, A/B |
| 3 | CodeBits | Promote the RN+Expo bullet to first position; keep "(iOS & Android)" and Firebase push | Only direct mobile evidence |
| 4 | MTailor | Reframe migration bullets with "release", "cutover", "rollback-safe" vocabulary — legitimate, since the work was exactly that | Release discipline is the only bridge to the DevOps half |
| 5 | Projects | Add the demo repo (Expo + EAS + GitHub Actions) **only once it exists**; surface the 3D visualisation feature for the "3D graphics" nice-to-have, labelled honestly as web/video-overlay | Closes gap 1–2 with proof rather than claims |

### cv.md maintenance items (recurring)
- **CI/CD is still unnamed on cv.md** — third consecutive G2i req where this cost a match. If Isaac has used GitHub Actions/Cloud Build at MTailor, it belongs in the stack line.
- **TypeScript** present only at Dr Wealth; **SQL** on Proficient line, unevidenced in bullets (MEMORY).

## F) Interview Prep

Brief, since the recommendation is SKIP. Existing story-bank stories cover every answerable question here:

| # | JD Requirement | Story (story-bank title) | One-line angle |
|---|---|---|---|
| 1 | "Ability to make React Native code changes" / "shipped cross-platform products" | [Cross-platform mobile] LASPNET field app on React Native + Expo | One codebase, two stores, Firebase push; Expo trade-offs made explicit |
| 2 | "Manage … deployment workflows"; "troubleshoot build and deployment failures" | [Lead end-to-end backend project] Zero-downtime Parse→Firebase migration | Release risk managed by parallel-running both stacks with rollback held open throughout |
| 3 | "Improve developer tooling" | [Enablement / documentation] SDK docs and Ops training for the new Firebase stack | Docs as a release deliverable, not an afterthought |
| 4 | "Ownership … changing priorities in a small startup team" | [Learning a new stack fast] Contractor on an unfamiliar stack to company-wide migration lead | Upwork contract → FTE → migration lead, reporting to the CTO |
| 5 | Nice: "3D graphics in mobile applications" | [Business-impact features] Express Shipping and 3D visualization at MTailor | Video-overlay 3D viewer with ffmpeg on web; say plainly it was not a mobile 3D engine |
| 6 | "GitHub Actions / EAS / Supabase / Next.js" | **NEW** [Gap handling] Release-engineering tooling — answer straight (see scratch stories) | Name the gap in one sentence each; point to the demo repo if built |

**Red-flag questions:**

| Question | Answer |
|---|---|
| "Walk me through a GitHub Actions pipeline you own." | "I don't own one today. My release experience is a zero-downtime cutover of 20+ apps and one Expo app shipped to both stores. I built [repo] this week to show the exact pipeline you describe." Anything else unravels. |
| "How many apps have you released through App Store Connect and Google Play?" | "One, on both platforms, 2020–21. Not 'proven' at the volume you're describing." |
| "Supabase?" | "Firebase deep across four roles; Supabase is the same shape on Postgres and I haven't run it in production." |
| "What rate are you expecting?" | Confirm the 46 ceiling is available to a Kampala-based engineer before anything else. |

---

## Score Breakdown

| Dimension | Score | Rationale |
|---|---|---|
| Role fit | **2.5** | Platform/Infra is Isaac's *adjacent* archetype, and this is its narrowest sub-specialty: mobile release engineering. Five of eight responsibilities are pipeline/store/OTA ownership he has never held. The RN bug-fix/UI half and developer-enablement line fit; the core does not. |
| Stack | **2.5** | Of the named must-haves (GitHub Actions, Expo, EAS, React Native, App Store Connect, Google Play, versioning, OTA, A/B, Supabase, Next.js, React), cv.md evidences Expo, React Native (intermediate), React, and one implied dual-store release. GitHub Actions, EAS, Supabase, Next.js, OTA, A/B are all absent. Docker/K8s/GCP are real but not requested. |
| Seniority | **2.0** | "3+ years of experience in DevOps or infrastructure engineering focused on mobile and web platforms" — not met: zero years in a DevOps/infra-titled role and no mobile release-engineering history. ~6.5 years SWE does not substitute for the bar as written. Scored the same way #222 scored its missed leadership bar. |
| Remote/Geo | **4.8** | "Fully remote — candidates worldwide." No country, work-auth or timezone clause. Cleanest geo clause of any G2i req evaluated. Held off 5.0 only because release/store-review firefighting for a US sports startup will likely cluster in US hours, which the body does not price. |
| Comp | **2.5** | "Up to 46 USD/hr" = ~$95.7K gross at the ceiling → ~$64–74K employee-equivalent, below the $80K–120K target; G2i's documented −30% non-US tiering would put Kampala at ~$32/hr ≈ $67K gross, below the $60K floor on an employee-equivalent basis; rates reportedly non-negotiable; the $46 cap sits under G2i's own usual $60–140 client band. Long-term contract is the one structural positive. |
| Stability/company | **3.0** | G2i is a stable marketplace (since 2016) and "Long-term contract" beats the 6-month caps on #221/#222. But the actual employer is an unnamed, early-stage, hardware-sensor-dependent sports-tech startup with a sub-market budget and no public funding data. Seat durability depends entirely on that client. |
| **Overall** | **2.9/5** | **Weak match — SKIP.** Open geography and a long-term contract cannot offset a release-engineering seat whose core tooling is unevidenced, a hard experience bar that is not met, and a ceiling rate below target before the likely geo discount. If Isaac wants to pivot into DevOps, the cheaper route is adding GitHub Actions/EAS to current work and cv.md, then targeting platform reqs in his pay band. |

## Keywords extracted

DevOps Engineer, release engineering, CI/CD, GitHub Actions, build systems, deployment workflows, Expo, EAS, EAS Build, EAS Update, React Native, App Store Connect, Google Play Console, iOS, Android, over-the-air updates, OTA, versioning strategies, release environments, A/B testing, automated testing, release checks, end-to-end tests, integration tests, Supabase, Next.js, React, developer tooling, infrastructure, troubleshooting, bug fixes, UI updates, cross-platform, mobile and web, sports training, gamification, sensor systems, sensor data, 3D graphics, small startup team, ownership, changing priorities, fully remote, candidates worldwide, long-term contract, 46 USD per hour, G2i, baseball
