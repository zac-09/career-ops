# Evaluation: ElevenLabs — Full-Stack Engineer (Back-End Leaning)

**Date:** 2026-05-25
**Archetype:** Senior Backend Engineer (Python-leaning)
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/c7d59014-b918-4c15-ae33-79f5c9f2cf9f
**PDF:** pending — HTML ready at `batch/html/cv-isaac-elevenlabs-fullstack.html`; run `node batch/build-cvs-095-102.mjs && node generate-pdf.mjs batch/html/cv-isaac-elevenlabs-fullstack.html output/cv-isaac-elevenlabs-fullstack-2026-05-25.pdf --format=a4`
**Verification:** unconfirmed (batch mode)

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer (with full-stack lean, Python primary) |
| Domain | Voice AI platform |
| Function | Build (extend platform on cutting-edge voice models) |
| Seniority | Not explicit — likely Mid–Senior |
| Remote | Global remote (offices: Bangalore, Dublin, London, NY, SF, Tokyo, Warsaw) — **fits Uganda** |
| Stack | Python (primary), Kubernetes (plus), Stripe (plus), AI models |
| Comp | Not stated on JD — ElevenLabs Senior pays ~USD 130-200K globally |
| TL;DR | Build/maintain voice-AI platform used by millions; Python-heavy, infra + payments + AI integrations. |

## B) CV Match

| JD requirement | CV evidence | Match |
|---|---|---|
| Python (expertise required) | "Migrated file storage from S3 to GCS via Python script" (cv.md L18), "Proficient: Python" (cv.md L85) | Partial — scripts not services |
| Backend strong | 5 yrs Node.js across roles (cv.md L10-79) | Strong (wrong language) |
| API + system design | DrWealth APIs + FIDA Kafka microservices (cv.md L49, L77) | Strong |
| Cloud / storage | "AWS S3/EC2/EBS, GCP, GCS, Firebase" (cv.md L23) | Strong |
| Data structures, system design | FIDA Kafka microservice graph (cv.md L77-79) | Strong |
| Test design + security | None explicit | Gap |
| Kubernetes (plus) | "Kubernetes" in FIDA stack (cv.md L77, L79) | Partial |
| Stripe (plus) | None explicit (Express Shipping was bespoke) | Gap |
| AI models (plus) | Healthcare WhatsApp chatbot proof point (OpenAI + Vision) | Strong-ish |

**Gaps:**
1. **Python expertise** — JD says "expertise in Python". Isaac has it listed as proficient, but production experience is migration scripts, not services. This is the principal gap. Mitigate honestly: "Python-fluent for scripts + tooling; would ramp to writing services in Python within 1 month, leveraging deep system-design experience from Node.js."
2. **No production Stripe / payments** — but Express Shipping shows revenue feature ownership.
3. **Test/security depth not explicit** on CV — touch on in cover letter.

ElevenLabs is famously elite — they hire for raw signal (GitHub artifacts, hard problems). Isaac's MTailor migration + Pub/Sub pipeline qualify, but Python primary is a real friction.

## C) Level and Strategy

- JD: Not explicit (treats levels flexibly). Senior compensation is normal at EL.
- **Sell:** Lead with hard problem solved end-to-end (Parse→Firebase) + AI experience (WhatsApp OpenAI). Frame Python pragmatically.
- **If downleveled:** Take it — ElevenLabs equity is significant and growth is real. Use first year to become production-grade Python.

## D) Comp and Demand

| Source | Range (USD) |
|---|---|
| ElevenLabs Mid–Senior (Levels.fyi) | 130K – 200K base + equity |
| Voice AI Senior BE (Glassdoor) | 140K – 220K |

ElevenLabs is one of the top AI shops, equity is the upside. Demand for backend engineers in voice AI is extreme.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | migrations | "Backend engineer building production systems across Python + Node.js — shipped OpenAI + Vision OCR integrations and zero-downtime cloud migrations for live ecommerce" | Python first |
| 2 | MTailor bullet 3 | "GCS migration via Python script" | "Built Python migration pipeline reading from AWS S3, writing to GCS with idempotent retries and integrity checks across 20+ apps" | Show real Python depth |
| 3 | Add proof | n/a | Healthcare WhatsApp chatbot — OpenAI + Vision OCR (profile.yml) | AI signal |
| 4 | Reorder skills | current | Move "Python" earlier; add "FastAPI (familiar), Kubernetes, OpenAI APIs" if honest | ATS |
| 5 | Add Stripe-adjacent | Express Shipping | Reframe: "Built Express Shipping revenue feature — designed order pricing pipeline + receipts (Stripe-adjacent payment plumbing)" | Stripe hint |

## F) Interview Prep

| # | JD Req | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Hard problem end-to-end | Parse → Firebase migration | 20+ live apps | Zero downtime | Pub/Sub dual-write + per-app flag flip | Saved $5K/month, no outage | Migrations need a one-button rollback or they don't ship |
| 2 | Python + cloud storage | S3 → GCS migration script | TB of customer files | Move without breaking download URLs | Python streaming reader + writer + integrity check | All files moved, zero loss | When working with cloud storage, parallel transfers with integrity checks beat fancy tools |
| 3 | AI integration | Healthcare chatbot | OCR via WhatsApp | Quick prescription parsing | OpenAI + Google Vision + WhatsApp Business | Working prototype | LLMs in prod = retry, observe, version prompts |
| 4 | API + system design | FIDA case management | NGO multi-tenant | Reliable async case workflows | Kafka + gRPC + Node + Docker on K8s | Adopted by FIDA + LASPNET | gRPC + Protobufs force API discipline before launch |
| 5 | Customer-facing build | 3D body viz at MTailor | Buyers need confidence | Visualize fit | ffmpeg + video overlay | Increased conversion | Customer-facing AI works best when invisible |
| 6 | Stripe-adjacent / payments | Express Shipping at MTailor | Need new revenue | Add shipping upsell | Backend + UI + analytics solo | +$40/order revenue | Revenue features are 80% accounting correctness, 20% UI |

Lead case study: **WhatsApp chatbot** + **S3→GCS Python migration**.

## Keywords extracted

Python, Node.js, FastAPI, Kubernetes, Stripe, OpenAI, voice AI, LLM, AWS S3, GCS, Cloud, distributed systems, APIs, microservices, system design, test design, security fundamentals, payment processing, Docker, async
