#!/usr/bin/env node
/**
 * normalize-statuses.mjs — Clean non-canonical states in applications.md
 *
 * Maps all non-canonical statuses to canonical ones per templates/states.yml:
 *   Evaluated, Applied, Responded, Interview, Offer, Rejected, Discarded, SKIP
 * (Spanish forms like Evaluada/Aplicado are accepted as aliases.)
 *
 * Also strips markdown bold (**) and dates from the status field,
 * moving DUPLICADO info to the notes column.
 *
 * Run: node career-ops/normalize-statuses.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';
import { loadStates, cleanStatus, resolveStatus } from './states-helper.mjs';

const CAREER_OPS = new URL('.', import.meta.url).pathname;

// Canonical labels + aliases from templates/states.yml (source of truth).
const { aliasToLabel } = loadStates(CAREER_OPS);
const LABEL = (key, fallback) => aliasToLabel.get(key) || fallback;
// Support both layouts: data/applications.md (boilerplate) and applications.md (original)
const APPS_FILE = existsSync(join(CAREER_OPS, 'data/applications.md'))
  ? join(CAREER_OPS, 'data/applications.md')
  : join(CAREER_OPS, 'applications.md');
const DRY_RUN = process.argv.includes('--dry-run');

// Canonical status mapping. First try states.yml labels/aliases; then apply a
// few legacy heuristics for messy historical values not covered there.
function normalizeStatus(raw) {
  const s = cleanStatus(raw);
  const lower = s.toLowerCase();

  // DUPLICADO / Repost variants → Discarded, preserving original in notes
  if (/^(duplicado|dup\b|repost)/i.test(s)) {
    return { status: LABEL('discarded', 'Discarded'), moveToNotes: raw.trim() };
  }

  // Legacy non-states.yml values that should fold into a canonical state
  if (/^(condicional|hold|evaluar|verificar)$/i.test(s)) return { status: LABEL('evaluated', 'Evaluated') };
  if (/geo.?blocker/i.test(s)) return { status: LABEL('skip', 'SKIP') };

  // "—" (em dash, no status) → Discarded
  if (s === '—' || s === '-' || s === '') return { status: LABEL('discarded', 'Discarded') };

  // States.yml labels + aliases (handles bold/date-stripping and English+Spanish)
  const resolved = resolveStatus(raw, aliasToLabel);
  if (resolved) return { status: resolved };

  // Unknown — flag it
  return { status: null, unknown: true };
}

// Read applications.md
if (!existsSync(APPS_FILE)) {
  console.log('No applications.md found. Nothing to normalize.');
  process.exit(0);
}
const content = readFileSync(APPS_FILE, 'utf-8');
const lines = content.split('\n');

let changes = 0;
let unknowns = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.startsWith('|')) continue;

  const parts = line.split('|').map(s => s.trim());
  // Format: ['', '#', 'fecha', 'empresa', 'rol', 'score', 'STATUS', 'pdf', 'report', 'notas', '']
  if (parts.length < 9) continue;
  if (parts[1] === '#' || parts[1] === '---' || parts[1] === '') continue;

  const num = parseInt(parts[1]);
  if (isNaN(num)) continue;

  const rawStatus = parts[6];
  const result = normalizeStatus(rawStatus);

  if (result.unknown) {
    unknowns.push({ num, rawStatus, line: i + 1 });
    continue;
  }

  if (result.status === rawStatus) continue; // Already canonical

  // Apply change
  const oldStatus = rawStatus;
  parts[6] = result.status;

  // Move DUPLICADO info to notes if needed
  if (result.moveToNotes && parts[9]) {
    const existing = parts[9] || '';
    if (!existing.includes(result.moveToNotes)) {
      parts[9] = result.moveToNotes + (existing ? '. ' + existing : '');
    }
  } else if (result.moveToNotes && !parts[9]) {
    parts[9] = result.moveToNotes;
  }

  // Also strip bold from score field
  if (parts[5]) {
    parts[5] = parts[5].replace(/\*\*/g, '');
  }

  // Reconstruct line
  const newLine = '| ' + parts.slice(1, -1).join(' | ') + ' |';
  lines[i] = newLine;
  changes++;

  console.log(`#${num}: "${oldStatus}" → "${result.status}"`);
}

if (unknowns.length > 0) {
  console.log(`\n⚠️  ${unknowns.length} unknown statuses:`);
  for (const u of unknowns) {
    console.log(`  #${u.num} (line ${u.line}): "${u.rawStatus}"`);
  }
}

console.log(`\n📊 ${changes} statuses normalized`);

if (!DRY_RUN && changes > 0) {
  // Backup first
  copyFileSync(APPS_FILE, APPS_FILE + '.bak');
  writeFileSync(APPS_FILE, lines.join('\n'));
  console.log('✅ Written to applications.md (backup: applications.md.bak)');
} else if (DRY_RUN) {
  console.log('(dry-run — no changes written)');
} else {
  console.log('✅ No changes needed');
}
