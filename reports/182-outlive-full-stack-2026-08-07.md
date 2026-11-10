# Evaluation: Outlive — Senior Full Stack Engineer - Future Openings

**Date:** 2026-08-07
**Archetype:** Senior Full-Stack Engineer (secondary archetype) — mobile-first digital health, TypeScript end to end
**Score:** 1.5/5 (geo-capped; raw technical fit would be ~4)
**URL:** https://job-boards.greenhouse.io/outlive/jobs/4109117009
**PDF:** ❌ (SKIP — geo gate, no PDF generated)
**Verification:** API (Greenhouse JSON, 2026-08-07) — `boards-api.greenhouse.io/v1/boards/outlive/jobs/4109117009?questions=true` returned 200. Posting live but explicitly NOT a live req: "We are not actively hiring for this role at this time. We are collecting candidate interest for future openings."
**Recommendation:** SKIP (`skipped_geo`). The application form carries a required binary gate: **"Are you legally authorized to work in the United States without current or future employer sponsorship?" (Yes/No)** — Isaac is in Uganda with no US work authorization, so a truthful answer disqualifies him at field one. The benefits stack (401(k) with 5% match, HSA/FSA, US medical plans) confirms US-only employment infrastructure despite the "Remote" label. Compounding: this is an evergreen talent-pool posting, not an opening — even a geo-eligible candidate would be filing into a folder. The painful part: the stack (Node/TypeScript, NestJS, React/React Native + Expo, Next.js, Firebase auth, GCP, Prisma/Postgres, Cloud Tasks) is one of the closest technical matches in the tracker. Aggregator geo labels strike again — do not resurface this one unless Outlive posts a real req with global hiring language.

---

## Geo Check (Isaac is in Kampala, Uganda, UTC+3)

| Signal | Evidence | Direction |
|--------|----------|-----------|
| JD location label | "Remote" | ⚠️ ambiguous |
| **Screening question (REQUIRED, binary)** | "Are you legally authorized to work in the United States without current or future employer sponsorship?" — Yes/No | ❌ **hard US work-auth gate** |
| Benefits | 401(k) + 5% match, HSA/FSA, US medical/dental/vision plans | ❌ US-payroll employer, no EOR signals |
| Global language | None — no countries list, no timezone policy, no EOR mention | ❌ |

**Verdict: US-only. `skipped_geo`.** This is the exact pattern in memory (aggregator/plain "Remote" labels lying): Greenhouse "Remote" + US-auth question = Remote (US). Score capped per batch policy.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Full-Stack (mobile-first) — Isaac's secondary archetype (profile.yml) |
| Domain | Digital health / longevity (Peter Attia's Medicine 3.0); mobile (React Native/Expo), web (Next.js App Router), backend (NestJS/Node.js/TypeScript), Postgres/Prisma, GCP, HIPAA-aware |
| Function | Build — end-to-end feature ownership + mentoring as team grows |
| Seniority | Senior (6+ years required) |
| Remote | "Remote" label, but US work authorization required (see Geo Check) |
| Team size | Small, early stage ("shape the foundation, not optimize at the margins") |
| Comp | Posted: $125,000–$200,000 USD + US benefits |
| TL;DR | An almost tailor-made TypeScript/GCP/React-Native seat — behind a US-work-auth gate, and not even an open req (evergreen candidate pool). |

## B) CV Match

Abbreviated — geo gate makes this academic, but recorded for pattern-matching future Outlive/health-tech reqs:

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| 6+ years professional experience | cv.md: 2020–present across CodeBits→Dr Wealth→Mind2matter→MTailor | ✅ (~6 yrs) |
| Strong Node.js + TypeScript | Entire MTailor/Dr Wealth backend history (cv.md L14-51) | ✅ |
| Production React (web and/or React Native) | cv.md L48: React PWA pages; L63: Figma→React UIs; L75: React Native + Expo app on iOS & Android with Firebase push | ✅ strong — Expo is even a named nice-to-have |
| REST API design + consumption | Express/Cloud Functions APIs (L49), Morningstar integration (L47) | ✅ |
| Relational modeling + ORMs (Prisma/Postgres) | SQL Proficient (L85) but production history NoSQL-heavy | ⚠️ |
| Auth/authz/security fundamentals (Firebase-backed identity, JWT) | Firebase auth is Isaac's home turf (L14-23, L31-37) — the JD literally uses "custom authentication hooks backed by Firebase" | ✅ strong |
| GCP (Cloud SQL, Cloud Tasks) | GCP Proficient; Pub/Sub, Firestore, GCS in production (L16-18) | ✅ |
| NestJS production | Not on CV (Express instead) | ⚠️ |
| Offline/background sync patterns | Two-way sync pipeline (L16) — background sync is his flagship | ✅ |
| Healthcare/regulated domain | Healthcare WhatsApp chatbot (profile.yml proof point) | ⚠️ adjacent |

**Raw technical fit ≈ 4/5.** Every core pillar (TS/Node, React Native + Expo, Firebase auth, GCP, sync patterns) is first-hand. Gaps (NestJS, Prisma) are framework-level, not skill-level. Geo caps the actionable score to 1.5.

## C) Level and Strategy

Not applicable — geo SKIP. If Outlive ever opens globally (watch for EOR/Deel language or non-US benefits), this would jump straight to the apply queue; the level (Senior IC, mentoring later) matches Isaac exactly.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted comp | $125,000–$200,000 USD | JD (Greenhouse API, 2026-08-07) |
| Benefits | US-only stack: 401(k) 5% match, HSA/FSA, employer-paid medical/dental/vision/disability | JD |
| Req status | Talent pool — "not actively hiring for this role at this time" (first published 2026-01-21, updated 2026-06-16) | JD + Greenhouse API |
| Demand signal | Early-stage, Peter Attia brand, small team — future reqs will be competitive and likely stay US-scoped | Market context |

## E) Personalization Plan

Not applicable — SKIP (`skipped_geo`). One standing action: add Outlive to a watch note — if a live, globally-remote req appears, the tailoring writes itself (React Native/Expo + Firebase auth + GCP sync bullets forward, healthcare chatbot as domain proof).

## F) Interview Prep

Not applicable — SKIP. No stories needed; all relevant material already exists in the bank (#167 sync, #169 PWA performance, #169 Figma-to-React, #174 ramp velocity).

---

## Story bank candidates

None — no new material.

## Keywords extracted

React Native, Expo, expo-router, TanStack Query, Next.js App Router, NestJS, TypeScript, Node.js, Prisma, Postgres, Cloud SQL, Google Cloud Tasks, Firebase authentication, JWT, RBAC, zod, OpenAPI, Stripe, PostHog, Sentry, offline-first, background sync, HIPAA, digital health, Medicine 3.0, longevity, full stack, mobile-first
