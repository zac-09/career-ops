# Evaluation: Raya — Senior Backend Engineer, Member Experience

**Date:** 2026-07-20
**Archetype:** Senior Backend Engineer (consumer product, payments/subscriptions flavor)
**Score:** 2.6/5
**URL:** https://jobs.lever.co/raya/675d586b-d156-45ed-9d13-ba1e8dcddd49
**PDF:** ❌ (score < 3.0 — two load-bearing payments requirements missing; no PDF generated)
**Verification:** Lever JSON API (https://api.lever.co/v0/postings/raya?mode=json), 2026-07-20 — posting live, UUID confirmed. Apply form checked via Playwright same day: contains a gating radio question "Do you have professional hands-on experience with mobile payments and subscriptions for a B2C product?" — Isaac would have to answer No. No US work-authorization question.
**Recommendation:** SKIP. Node.js/TS and startup-scaling fit is real, but the role's two differentiating requirements — production Apple StoreKit payments/subscriptions AND production Stripe payments/subscriptions for B2C — are both absent from Isaac's CV, and the apply form gates on exactly this. Same unconfirmed/leans-US geo risk as the sibling req (#163).

---

## Geo Check (CRITICAL — Isaac is in Kampala, Uganda, UTC+3)

Identical posting pattern to #163 (same employer, same Lever config): JD body has no location restriction; Lever metadata `location: Remote` but `country: US`; US-style benefits (medical/dental, 12 wks parental leave, $50/day food budget); posted band $180K–240K USD; apply form asks only free-text "Current location", no work-authorization question. Third-party aggregators contradict each other ([realworkfromanywhere.com](https://www.realworkfromanywhere.com/companies/raya) says worldwide; [remoterocketship.com](https://www.remoterocketship.com/company/rayatheapp/jobs/qa-engineer-united-states-remote/) labels Raya roles US-remote).

**Verdict: UNCONFIRMED, likely US-based remote.** High geo risk for a Uganda-based candidate. See #163 report for the full signal table.

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Senior Backend Engineer — Member Experience (payments/subscriptions core) |
| Domain | Consumer social/dating app backend (Raya) |
| Function | Build + lead key components of Raya backend services |
| Seniority | Senior, 6+ years, leadership signals expected |
| Remote | "Remote" (Lever), country: US — global eligibility unconfirmed, leans US-only |
| Comp | $180K–240K USD posted |
| TL;DR | A payments-and-subscriptions specialist req dressed as a generalist backend role: StoreKit + Stripe production experience are hard requirements (the apply form gates on them), and Isaac has neither on his CV. |

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| 6+ yrs modern software dev, scalable/maintainable systems | cv.md L10-22 MTailor + L41-51 Dr Wealth + L68-79 CodeBits — ~6 yrs continuous backend | ✅ |
| Mastery in Node.js and TypeScript | cv.md L85 Node.js (Proficient), Node in every role; profile.yml "Node.js / TypeScript backend systems (5+ years)" | ✅ (make TS explicit) |
| Building/scaling backend in production at a startup | cv.md L14 zero-downtime migration of 20+ apps; L16 real-time Pub/Sub sync pipeline | ✅ |
| **Production Apple StoreKit payments/subscriptions** | Nothing on CV | ❌ hard gap |
| **Production Stripe payments/subscriptions for B2C** | Nothing on CV. Nearest: e-commerce work at MTailor (B2C custom clothing) — Express Shipping revenue feature (L21), but no payment-rail ownership documented | ❌ hard gap |
| Enthusiasm for new AI tools | OpenAI + Google Vision WhatsApp chatbot (profile.yml proof point) | ✅ |
| CI/CD, full SDLC | cv.md L77 Kafka/Docker/K8s microservices | ✅ |

**Gaps:**
1. **StoreKit (hard blocker).** In-app purchase servers, receipt validation, App Store Server Notifications — zero CV evidence and no adjacent mobile-payments work. Not mitigable by cover letter; the apply form's yes/no question filters this before a human reads anything.
2. **Stripe B2C subscriptions (hard blocker).** Same problem. If Isaac has ever touched Stripe at MTailor (plausible for an e-commerce company but undocumented), the CV must say so with specifics before this req is viable — otherwise answering "Yes" to the form question would be dishonest.
3. Both blockers are the role's entire differentiator vs. the other two open backend reqs.

## C) Level and Strategy

Senior generalist evidence is fine, but this req buys payments depth. Interviews would probe subscription lifecycles, webhooks/reconciliation, receipt validation, dunning — areas where Isaac would present as junior. No honest "sell senior" path exists here today. If Isaac wants Raya specifically, #163's team (or the Recommendations req, which matches his MongoDB recommendation-engine proof point) is a less-gated path; this one is the worst fit of the three.

## D) Comp and Demand

| Item | Data | Source |
|------|------|--------|
| Posted band | $180,000–240,000 USD/yr | Lever API `salaryRange`, 2026-07-20 |
| vs Isaac's target | Far above $80–120K target — moot given gates | config/profile.yml |
| Demand | 3 concurrent Senior Backend reqs at Raya; payments specialization is in demand market-wide | Lever API |

No reliable third-party comp data for Raya engineering (small private company); posted bands are the best signal.

## E) Personalization Plan

Not worth executing for this req. If Isaac has any real Stripe/IAP experience, the single highest-leverage change is documenting it on cv.md with production specifics (volumes, webhook handling, subscription states); everything else is secondary. Generic improvements (explicit TypeScript, consumer-scale framing) are covered in report #163.

## F) Interview Prep

Not prepared — two hard blockers plus geo risk make interview prep premature. The six STAR+R stories in report #163 (zero-downtime migration, 2M-record pipeline, Kafka microservices, 3D visualisation, Express Shipping, AI chatbot) apply unchanged if Raya ever routes Isaac to a generalist seat.

**Red-flag question if pursued anyway:** the apply form's payments question — answer honestly (No), which effectively self-rejects. Do not apply just to test the filter.

---

## Keywords extracted

Node.js, TypeScript, Apple StoreKit, in-app purchases, subscriptions, Stripe, B2C payments, receipt validation, webhooks, backend services, system design, scalable systems, startup, CI/CD, SDLC, consumer product, AI tools, agile
