# Evaluation: Supabase — Software Engineer - Auth

**Date:** 2026-07-24
**Archetype:** Senior Backend Engineer (identity/auth systems, Go-centric)
**Score:** 2.3/5
**URL:** https://jobs.ashbyhq.com/supabase/e569b7f7-fa8f-4139-86f6-4f52b456882d
**PDF:** ❌ (score < 3.0 — two hard "(Required)" blockers; no PDF generated)
**Verification:** live (Ashby API, 2026-07-24) — job present in `https://api.ashbyhq.com/posting-api/job-board/supabase`, location "Remote", employment FullTime.
**Recommendation:** SKIP. Geo is perfect (Supabase hires globally, born-remote, 60+ countries) and Isaac uses Firebase Auth daily as a consumer — but the JD marks "(Required) 4+ years of professional experience writing and shipping Go in production" and "(Required) 2+ years working on an authentication system" and Isaac has neither: Go is listed as Intermediate on the CV with zero production Go bullets, and his auth experience is integrating auth providers, not building them. Not cover-letter-fixable.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD benefits | "Fully Remote — We hire globally... do your best work from anywhere. There are no Supabase offices" | ✅ Global |
| Company facts | "born-remote", ~400 people across 60+ countries, async-first | ✅ Global |
| Ashby metadata | `location: Remote`, `isRemote: true`, no country list, no timezone requirement | ✅ Global |

**Verdict: CLEAN.** Fully global remote, async culture, health insurance covered "wherever you are". No geo risk — the gap here is purely skills.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer — authentication product (Supabase Auth, GoTrue lineage) |
| Domain | Platform / identity infrastructure (open-source Go server + TS client libraries) |
| Function | Build + maintain — new Auth features, protocol support (OAuth, OIDC, SAML), fleet-scale Postgres migrations |
| Seniority | Senior (4+ yrs Go required, "operating services at significant scale") |
| Remote | Fully remote, global | 
| Comp | Not posted on Ashby; see Block D |
| TL;DR | A Go-first identity-systems role at a great globally-remote company — Isaac's TypeScript/web fundamentals match, but both hard requirements (production Go, years building auth systems) are absent from the CV. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **(Required) 4+ yrs professional Go shipped in production** | cv.md L87 lists Go under "Intermediate"; no work bullet mentions Go | ❌ hard blocker |
| **(Required) 2+ yrs working ON an authentication system (protocol support, maintenance at scale)** | Isaac has used Firebase Auth as an integrator (MTailor migration, cv.md L14-19); never built/maintained an auth server | ❌ hard blocker |
| (Required) Strong relational DB experience (Postgres/MySQL) | cv.md L85 "SQL" (Proficient) + MongoDB; no named Postgres production work | ⚠️ partial |
| Strong TypeScript alongside Go | Node.js daily since 2020 across all roles (cv.md L23, L37, L51, L79); profile.yml superpower "Node.js / TypeScript backend systems (5+ years)" | ✅ |
| Web fundamentals: cookies, sessions, JWT, HTTP, browser APIs | Years of full-stack Node/React/Firebase work (cv.md L10-64) | ✅ |
| Auth security depth (OAuth/OIDC/SAML, cryptography fundamentals) | Nothing documented beyond consumer-level Firebase Auth | ❌ |
| Multiple web frameworks (Next.js + Rails/Django/Laravel equivalents) | Express.js (cv.md L49), React (L23); no SSR framework or traditional MVC framework named | ⚠️ |
| Kubernetes + AWS in production | cv.md L77 Kafka/Docker/Kubernetes microservices; L23 AWS S3/EC2/EBS | ✅ |
| Observability (Prometheus, Grafana, OpenTelemetry) | Not on CV; zero-downtime migration implies monitoring but nothing named | ⚠️ |
| Safe DB schema migrations at scale | cv.md L14 "end-to-end migration of 20+ applications... zero downtime"; L16 real-time MongoDB↔Firestore sync | ✅ strongest overlap |
| Technical writing / RFCs | cv.md L34 "Wrote documentation for fellow engineers on the new Firebase SDKs" | ⚠️ adjacent |

**Gaps:**
1. **Production Go (hard blocker).** Explicitly "(Required)". Intermediate self-rating with no shipped Go doesn't survive a screen for a Go-server team. Mitigation: none short-term; would need 1-2 real OSS Go contributions (e.g., to supabase/auth itself) over months.
2. **Auth systems engineering (hard blocker).** Explicitly "(Required) 2+ years". Using auth ≠ building auth. Mitigation: none honest.
3. **Postgres depth.** Supabase is "the Postgres development platform" — generic SQL won't carry any Supabase role. Worth fixing regardless (applies to #167 too).

## C) Level and Strategy

JD level: senior IC on a flagship product. Isaac's natural level in Node/TS backend: senior; in Go auth systems: entry. There is no "sell senior without lying" path across two explicit Required gaps. If Isaac wants Supabase specifically (great remote-first fit), the realistic route is the Edge Functions role (#167, TypeScript-adjacent) or building public Go/Postgres proof first — Supabase hires heavily from its OSS contributor community, and supabase/auth is open source on GitHub.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | Not disclosed (Ashby `compensation` empty) | Ashby API 2026-07-24 |
| Market data | Median TC ≈ $115.6K; SWE ranges roughly $70K–150K; geo-adjusted remote pay; ESOP standard ("$120K–240K equity over 4 years" per negotiation guides) | [Levels.fyi](https://www.levels.fyi/companies/supabase/salaries), [Glassdoor](https://www.glassdoor.com/Salary/Supabase-Salaries-E7639911.htm), [SalaryPrep](https://www.salaryprep.com/companies/supabase/software-engineer) |
| vs Isaac's target | Squarely inside $80–120K target (profile.yml) even after geo adjustment; comp+benefits rated 4.6/5 by employees | config/profile.yml, Glassdoor |
| Demand | 55 open roles on Supabase's board post-Series F ($500M raised, over $1B total) — hiring aggressively | Ashby API |

## E) Personalization Plan

Not actionable for this req — the blockers are experience, not presentation. If pursuing Supabase generally: (1) add TypeScript and PostgreSQL explicitly to cv.md Skills, (2) surface the Firebase Auth migration angle ("migrated authentication for 20+ apps") as adjacent evidence, (3) start contributing to supabase/* OSS repos.

## F) Interview Prep

Not applicable — recommend SKIP. If Supabase ever screens Isaac for an adjacent role, the transferable stories are the zero-downtime migration (fleet-scale data migration maps to "safe migrations across a large fleet of Postgres instances") and the MongoDB↔Firestore sync pipeline (reliability at scale). Red-flag question to expect anywhere at Supabase: "How deep is your Postgres?" — prepare a real answer before any Supabase interview.

---

## Keywords extracted

Go, TypeScript, authentication, OAuth, OIDC, SAML, JWT, sessions, cookies, Postgres, database migrations, Kubernetes, AWS, observability, Prometheus, Grafana, OpenTelemetry, RFC, open source, Next.js
