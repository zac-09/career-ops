# Mode: offer — Full Evaluation A-F

When the candidate pastes an offer (text or URL), ALWAYS deliver the 6 blocks:

## Step 0 — Archetype Detection

Classify the offer into one of the 6 archetypes (see `_shared.md`). If hybrid, indicate the 2 closest. This determines:
- Which proof points to prioritize in block B
- How to rewrite the summary in block E
- Which STAR stories to prepare in block F

## Block A — Role Summary

Table with:
- Detected archetype
- Domain (platform/backend/infra/data/enterprise)
- Function (build/consult/manage/deploy)
- Seniority
- Remote (full/hybrid/onsite)
- Team size (if mentioned)
- TL;DR in 1 sentence

## Block B — CV Match

Read `cv.md`. Create a table with each JD requirement mapped to exact CV lines.

**Adapted to archetype:**
- If Senior Backend → prioritize proof points of API design, scalability, databases
- If Staff/Principal → prioritize architecture decisions, cross-team influence
- If Platform/Infra → prioritize CI/CD, observability, developer tooling
- If Tech Lead → prioritize team coordination, code review, architecture ownership
- If EM → prioritize hiring, delivery, team growth
- If Solutions → prioritize customer-facing work, integrations, API design

**Gaps** section with mitigation strategy for each. For each gap:
1. Is it a hard blocker or nice-to-have?
2. Can the candidate demonstrate adjacent experience?
3. Is there a portfolio project that covers this gap?
4. Concrete mitigation plan (cover letter phrase, quick project, etc.)

## Block C — Level and Strategy

1. **Detected level** in JD vs **candidate's natural level for that archetype**
2. **"Sell senior without lying" plan**: specific phrases adapted to archetype, concrete achievements to highlight, how to position founder experience as advantage
3. **"If I get downleveled" plan**: accept if comp is fair, negotiate 6-month review, clear promotion criteria

## Block D — Comp and Demand

Use WebSearch for:
- Current salaries for the role (Glassdoor, Levels.fyi, Blind)
- Company compensation reputation
- Role demand trend

Table with data and cited sources. If no data exists, say so instead of inventing.

## Block E — Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 5 CV changes + Top 5 LinkedIn changes to maximize match.

## Block F — Interview Prep

6-10 STAR+R stories mapped to JD requirements (STAR + **Reflection**):

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|

The **Reflection** column captures what was learned or what would be done differently. This signals seniority — junior candidates describe what happened, senior candidates extract lessons.

**Story Bank:** If `interview-prep/story-bank.md` exists, check if any of these stories are already there. If not, append new ones. Over time this builds a reusable bank of 5-10 master stories that can be adapted to any interview question.

**Selected and framed according to archetype:**
- Senior Backend → emphasize system design, performance optimization
- Staff/Principal → emphasize architecture decisions, cross-team influence
- Platform/Infra → emphasize tooling impact, developer productivity
- Tech Lead → emphasize team coordination, technical mentorship
- EM → emphasize hiring, delivery, team growth
- Solutions → emphasize customer success, integration complexity

Also include:
- 1 recommended case study (which project to present and how)
- Red-flag questions and how to answer them (e.g., "why did you sell your company?", "do you have direct reports?")

---

## Post-evaluation

**ALWAYS** after generating blocks A-F:

### 1. Save report .md

Save complete evaluation to `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`.

- `{###}` = next sequential number (3 digits, zero-padded)
- `{company-slug}` = company name in lowercase, no spaces (use hyphens)
- `{YYYY-MM-DD}` = current date

**Report format:**

```markdown
# Evaluation: {Company} — {Role}

**Date:** {YYYY-MM-DD}
**Archetype:** {detected}
**Score:** {X/5}
**PDF:** {path or pending}

---

## A) Role Summary
(complete block A content)

## B) CV Match
(complete block B content)

## C) Level and Strategy
(complete block C content)

## D) Comp and Demand
(complete block D content)

## E) Personalization Plan
(complete block E content)

## F) Interview Prep
(complete block F content)

## G) Draft Application Answers
(only if score >= 4.5 — draft answers for application form)

---

## Keywords extracted
(list of 15-20 JD keywords for ATS optimization)
```

### 2. Register in tracker

**ALWAYS** register in `data/applications.md`:
- Next sequential number
- Current date
- Company
- Role
- Score: match average (1-5)
- Status: `Evaluated`
- PDF: ❌ (or ✅ if auto-pipeline generated PDF)
- Report: relative link to report .md (e.g., `[001](reports/001-company-2026-01-01.md)`)

**Tracker format:**

```markdown
| # | Date | Company | Role | Score | Status | PDF | Report |
```
