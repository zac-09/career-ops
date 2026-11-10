# Custom Instructions -- career-ops (Isaac Mubiru)

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.
     Procedural house rules. Migrated 2026-11-10 from the agent's
     saved preferences and the pre-v1 local mode edits.
     ============================================================ -->

## House Rules

- **English only.** All output in English (reports, tracker notes, PDFs, cover letters, outreach, form answers), whatever the language of the JD or of any mode file.
- **Globally remote only.** Before recommending, adding to the pipeline or generating a PDF, check geo eligibility per `modes/_profile.md → Your Location Policy`. In `scan`, a country-locked remote role is not added; record it in scan history with the scanner's location-skip status.
- **Live-verify before scoring or PDF.** Run `node check-liveness.mjs <url>` (falling back to Playwright) on every posting before it is scored or gets a CV. WebSearch results routinely surface closed postings; never take a search snippet as proof a role is open.
- **Distrust aggregator geo labels.** Himalayas, NoDesk, Working Nomads, RemoteOK, WeWorkRemotely and similar mislabel location ("Anywhere" on Europe-only roles, and the reverse). Always resolve the employer's own ATS posting and take location from there, per AGENTS.md → Aggregator Listings.
- **Flag evergreen listings.** If a requisition has been open for many months or is reposted repeatedly (check `node detect-reposts.mjs`), say so in the verdict: it is a talent pool, and response odds are low.

## Custom Workflows

(none yet)

## Output Preferences

- Reports: the first line after the header is the recommendation (APPLY / LOW-EFFORT APPLY / SKIP) with the one-sentence reason, then a "Geo resolution" section before Block A whenever eligibility is not plainly global.
- Tracker notes: lead with the verdict, then geo, then the top gaps.

## Off-Limits

- Never claim production experience with PostgreSQL/MySQL, Redis, Elasticsearch, automated test suites, CI/CD ownership, GitLab or NestJS. None are evidenced in `cv.md`. Address them as gaps (see the story bank's gap-handling stories).
- TypeScript: production evidence is the Dr Wealth role only (Aug 2021 – Jan 2022). Don't present it as years of TypeScript.
- "SQL" sits on the Proficient line in `cv.md` with no project behind it. Don't build a match claim on it alone.
- Never submit an application or send a message. Stop before Submit and let Isaac do it.
