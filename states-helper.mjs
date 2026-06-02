#!/usr/bin/env node
/**
 * states-helper.mjs — Single source of truth loader for canonical statuses.
 *
 * Parses templates/states.yml (falling back to states.yml) and exposes the
 * canonical labels + alias map so verify-pipeline, merge-tracker, and
 * normalize-statuses all agree on what a valid status is. Previously each
 * script hardcoded its own (Spanish) list, which drifted from states.yml
 * once the tracker was converted to English labels.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// English canonical labels — used only if states.yml is missing.
const FALLBACK_LABELS = [
  'Evaluated', 'Applied', 'Responded', 'Interview',
  'Offer', 'Rejected', 'Discarded', 'SKIP',
];

/**
 * Load canonical labels and alias→label map from states.yml.
 * @param {string} careerOps absolute path to the career-ops root
 * @returns {{ labels: string[], aliasToLabel: Map<string,string>, file: string|null }}
 */
export function loadStates(careerOps) {
  const file = existsSync(join(careerOps, 'templates/states.yml'))
    ? join(careerOps, 'templates/states.yml')
    : (existsSync(join(careerOps, 'states.yml')) ? join(careerOps, 'states.yml') : null);

  const labels = [];
  const aliasToLabel = new Map();
  const register = (label, alias) => aliasToLabel.set(alias.toLowerCase(), label);

  if (!file) {
    for (const l of FALLBACK_LABELS) { labels.push(l); register(l, l); }
    return { labels, aliasToLabel, file: null };
  }

  const lines = readFileSync(file, 'utf-8').split('\n');
  let currentLabel = null;
  for (const line of lines) {
    const labelM = line.match(/^\s*label:\s*(.+?)\s*$/);
    if (labelM) {
      currentLabel = labelM[1].trim();
      labels.push(currentLabel);
      register(currentLabel, currentLabel);
      continue;
    }
    const aliasM = line.match(/^\s*aliases:\s*\[(.*)\]\s*$/);
    if (aliasM && currentLabel) {
      const aliases = aliasM[1]
        .split(',')
        .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      for (const a of aliases) register(currentLabel, a);
    }
  }

  if (labels.length === 0) {
    for (const l of FALLBACK_LABELS) { labels.push(l); register(l, l); }
  }
  return { labels, aliasToLabel, file };
}

/** Strip markdown bold and a trailing date, then lowercase. */
export function cleanStatus(raw) {
  return String(raw ?? '')
    .replace(/\*\*/g, '')
    .replace(/\s+\d{4}-\d{2}-\d{2}.*$/, '')
    .trim();
}

/**
 * Resolve a raw status to its canonical label, or null if unrecognized.
 * Handles aliases from states.yml plus the duplicado/dup/repost convention.
 */
export function resolveStatus(raw, aliasToLabel) {
  const clean = cleanStatus(raw);
  const lower = clean.toLowerCase();
  if (aliasToLabel.has(lower)) return aliasToLabel.get(lower);
  if (/^(duplicado|dup|repost)\b/i.test(lower)) {
    return aliasToLabel.get('discarded') || 'Discarded';
  }
  return null;
}

/** True if the string resolves to a known canonical status. */
export function looksLikeStatus(str, aliasToLabel) {
  return resolveStatus(str, aliasToLabel) !== null;
}
