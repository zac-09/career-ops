# Evaluation: Supabase — SDK Engineer - JavaScript

**Date:** 2026-08-19
**Archetype:** Solutions/API Engineer adjacent — but actually a specialist library-authoring / OSS-maintainer role
**Score:** 2.5/5
**URL:** https://jobs.ashbyhq.com/supabase/f44742fb-18c6-478f-bf78-63707ed57db7
**PDF:** none (score < 3.0)
**Verification:** live-verified via Playwright 2026-08-19 (Ashby page renders full JD + "Apply for this Job" link; Overview/Application tabs present)
**Recommendation:** SKIP — weak match. Geo is perfect (born-remote, 60+ countries) and it's JS/TS core, but the role's load-bearing requirements are specialist credentials Isaac doesn't hold: published-library authorship with external consumers, OSS-maintainer track record at volume, expert type-level TypeScript design, npm dual ESM/CJS packaging fluency. Fifth Supabase SKIP on the same literal-hard-requirements axis (#165/#166/#168/#178; #167's 3.1 remains the high-water mark).

---

## Geo Check — PASS (best-in-class)

"Fully Remote — We hire globally… no Supabase offices"; ~400 people across 60+ countries; health insurance covered "wherever you are". No caveats. Geo has never been the problem with Supabase.

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | SDK/library engineer (public JS/TS libraries) — specialist, off the 6 named archetypes |
| Domain | Postgres dev platform; JS/TS SDKs are "the front door" — DB, auth, storage, realtime, edge functions |
| Function | Author/maintain public npm libraries; own the type experience; OSS maintainership in public |
| Seniority | Not year-gated; gated on demonstrated library/OSS credentials |
| Remote | Fully remote, global |
| Comp | Undisclosed; ESOP + full health + allowances ($1B+ raised, Series F) |
| TL;DR | Public-library maintainer seat for supabase-js — a portfolio-credential role, not a backend-systems role. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|---|---|---|
| Expert-level TypeScript (generics, conditional/mapped types as design surface) | cv.md: JS/TS user throughout; no type-system design work evidenced | ❌ hard gap |
| Authored/maintained a published library, external consumers | career-ops is open source (a system, not a consumed library); no npm package with outside dependents | ❌ hard gap |
| OSS maintainer side: triage at volume, outside PRs, release automation, semver, security reports | No maintainer track record | ❌ hard gap |
| npm packaging fluency (dual ESM/CJS, export maps, type resolution) | Not evidenced | ❌ |
| Testing as habit (unit, type-level, e2e) | Implied at best; not a CV proof point | ⚠️ |
| Realtime: long-lived WebSockets, reconnection, subscription semantics | cv.md: real-time two-way sync (Pub/Sub), real-time price PWA over 2M+ records | ✅ genuine strength |
| Cross-runtime (Node, Deno, Bun, browsers, Workers, RN/Expo) | cv.md: Node + React Native/Expo shipped | ⚠️ partial |
| SDKs legible to AI coding agents | career-ops: daily agentic tooling; understands agent-consumers firsthand | ✅ |
| Async, globally distributed, autonomy | 5 remote roles, 4 countries | ✅ |
| Strong written communication (docs, RFCs) | cv.md: SDK documentation + Ops training at MTailor | ✅ modest |

**Verdict:** the ✅ column is culture and adjacency; the ❌ column is the actual job. Four of the first five fit criteria are specialist credentials that a hiring manager screens literally (Supabase precedent: #165/#166/#168/#178 all failed on exactly this kind of literal gate). A senior backend generalist application here reads as archetype mismatch, not stretch.

**Mitigation path (future, not now):** publishing a small typed npm library with real consumers (e.g., extracting career-ops' verification/TSV-contract layer) would convert this archetype from closed to open — same logic as the #197 credential play.

## C) Level and Strategy

Not applicable — do not apply. Watch the Supabase board for backend/integrations reqs closer to systems work; their geo and culture remain ideal if the right archetype appears.

## D) Comp and Demand

Undisclosed. Supabase comp is generally competitive-global (Series F, $1B+ raised); moot here.

## E) / F)

Skipped — no application. No new STAR stories.

## Keywords extracted

TypeScript, JavaScript SDK, library authoring, npm packaging, ESM/CJS, export maps, semver, open source maintainer, issue triage, release automation, type inference, generics, realtime, WebSockets, Deno, Bun, Cloudflare Workers, React Native, RFCs, migration guides, AI coding agents
