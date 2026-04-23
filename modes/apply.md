# Mode: apply — Live Application Assistant

Interactive mode for when the candidate is filling out an application form in Chrome. Reads what's on screen, loads previous offer context, and generates personalized answers for each form question.

## Requirements

- **Best with visible Playwright**: In visible mode, candidate sees browser and Claude can interact with page.
- **Without Playwright**: candidate shares a screenshot or pastes questions manually.

## Workflow

```
1. DETECT    → Read active Chrome tab (screenshot/URL/title)
2. IDENTIFY  → Extract company + role from page
3. SEARCH    → Match against existing reports in reports/
4. LOAD      → Read complete report + Section G (if exists)
5. COMPARE   → Does the role on screen match the evaluated one? If changed → notify
6. ANALYZE   → Identify ALL visible form questions
7. GENERATE  → For each question, generate personalized answer
8. PRESENT   → Show formatted answers for copy-paste
```

## Step 1 — Detect the offer

**With Playwright:** Take snapshot of active page. Read title, URL, and visible content.

**Without Playwright:** Ask candidate to:
- Share a form screenshot (Read tool reads images)
- Or paste form questions as text
- Or say company + role so we can search

## Step 2 — Identify and search context

1. Extract company name and role title from page
2. Search in `reports/` by company name (Grep case-insensitive)
3. If match → load complete report
4. If Section G exists → load previous draft answers as base
5. If NO match → notify and offer to run quick auto-pipeline

## Step 3 — Detect role changes

If role on screen differs from evaluated:
- **Notify candidate**: "The role has changed from [X] to [Y]. Do you want me to re-evaluate or adapt answers to new title?"
- **If adapt**: Adjust answers to new role without re-evaluating
- **If re-evaluate**: Run complete A-F evaluation, update report, regenerate Section G
- **Update tracker**: Change role title in applications.md if needed

## Step 4 — Analyze form questions

Identify ALL visible questions:
- Free text fields (cover letter, why this role, etc.)
- Dropdowns (how did you hear, work authorization, etc.)
- Yes/No (relocation, visa, etc.)
- Salary fields (range, expectation)
- Upload fields (resume, cover letter PDF)

Classify each question:
- **Already answered in Section G** → adapt existing answer
- **New question** → generate answer from report + cv.md

## Step 5 — Generate answers

For each question, generate answer following:

1. **Report context**: Use proof points from block B, STAR stories from block F
2. **Previous Section G**: If draft answer exists, use as base and refine
3. **"I'm choosing you" tone**: Same framework as auto-pipeline
4. **Specificity**: Reference something concrete from visible JD
5. **career-ops proof point**: Include in "Additional info" if there's a field for it

**Output format:**

```
## Answers for [Company] — [Role]

Based on: Report #NNN | Score: X.X/5 | Archetype: [type]

---

### 1. [Exact form question]
> [Answer ready for copy-paste]

### 2. [Next question]
> [Answer]

...

---

Notes:
- [Any observations about role, changes, etc.]
- [Personalization suggestions the candidate should review]
```

## Step 6 — Post-apply (optional)

If candidate confirms they sent the application:
1. Update status in `applications.md` from "Evaluated" to "Applied"
2. Update report's Section G with final answers
3. Suggest next step: `/career-ops contact` for LinkedIn outreach

## Scroll handling

If form has more questions than visible:
- Ask candidate to scroll and share another screenshot
- Or paste remaining questions
- Process in iterations until entire form is covered
