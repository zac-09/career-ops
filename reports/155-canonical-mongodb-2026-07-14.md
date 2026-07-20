# Evaluation: Canonical — Senior Software Engineer, Python/MongoDB

**Date:** 2026-07-14
**Archetype:** Senior Backend Engineer (data-store operations flavor) — primary archetype, but ops-heavy
**Score:** 2.9/5
**URL:** https://job-boards.greenhouse.io/canonical/jobs/5937947
**PDF:** ❌ (score < 3.0 — weak match, no PDF generated)
**Verification:** Greenhouse API (live, 2026-07-14) — HTTP 200, `location: Home based - EMEA`, updated 2026-03-31.
**Recommendation:** SKIP unless Isaac wants to pivot toward DBA/data-store operations. Geo is clean (EMEA/Africa) and MongoDB appears on his CV, but the role wants an **accomplished senior Python programmer who operates/manages MongoDB clusters** (DBA-level) and builds a managed-DB product on Juju — Isaac's MongoDB is application-level (he migrated *off* it), and his Python is scripting-level. Two of the three core requirements are partial-to-missing.

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Backend engineer building a managed **MongoDB** product (open-source analog to Atlas/DocumentDB) on Juju |
| Domain | Canonical MongoDB team — deploy/operate MongoDB on machines, VMs, public cloud, K8s |
| Function | Build + operate — "reliable and secure way to deploy and operate MongoDB"; small team, high individual impact |
| Seniority | Senior ("accomplished senior Python programmer") |
| Remote | ✅ EMEA (Africa-eligible). Uganda UTC+3 qualifies. |
| TL;DR | A MongoDB-operations product role written in Python. Strong on paper (MongoDB + Python both on Isaac's CV) but the depth required — cluster operations + senior product Python — is exactly where his evidence is thin. |

**Geo check:** ✅ PASS — EMEA (Africa-eligible).

## B) CV Match

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| **Accomplished senior Python programmer**, mission-critical | cv.md L85 Python (Proficient); L18 Python migration script | ⚠️ scripting-level, not senior product Python |
| **Experience operating & managing MongoDB clusters** | cv.md L85 MongoDB (Proficient); L16 "MongoDB↔Firestore sync"; L31 "read data from MongoDB" — **application/migration use; he moved OFF MongoDB to Firestore** | ❌ no cluster/DBA operations evidence |
| Modern infra deployment automation OR Linux sysadmin | cv.md L85 Linux (Proficient); L77 Docker/K8s | ⚠️ partial |
| Passionate about automatic testing | Not explicit on CV | ⚠️ |
| Juju (implied) | Not on CV — Canonical-proprietary | ❌ (learnable) |

**Gaps:** The role's spine is *operating MongoDB clusters in Python*. Isaac's MongoDB story is a migration away from MongoDB, and his Python is glue/scripting. This is a genuine double gap on the two load-bearing requirements — not cover-letter-mitigable.

## C) Level and Strategy

Senior title, but Isaac would present as mid on both Python-product and DB-ops ladders. Not worth a downlevel into a DBA-flavored role while core Node/TS options exist. If pursued, anchor on the MongoDB↔Firestore sync pipeline (L16) and 2M-record Firestore ops (L47) as data-at-scale proof — but expect the interview to probe MongoDB internals (sharding, replica sets, oplog) he hasn't operated.

## D) Comp and Demand

Canonical location-adjusted comp for Uganda likely ~$45–75K (Glassdoor global $120–191K is US-skewed) — at/below Isaac's $80–120K target. Small team = high impact but high bar. Demand: active (Canonical ~300 reqs).

## F) Recommendation

**SKIP** unless Isaac specifically wants to move toward database-operations engineering. The geo fit is real, but the role rewards MongoDB cluster operators writing senior Python — the inverse of Isaac's "migrated off MongoDB, Node/TS-first" profile. Prefer the Kafka role (#157) from the same employer, which matches his distributed-systems evidence far better.
