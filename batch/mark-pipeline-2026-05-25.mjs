#!/usr/bin/env node
// One-shot: mark the 2026-05-25 batch URLs as processed in pipeline.md
import { readFile, writeFile } from 'fs/promises';

const PATH = '/Volumes/software/code/career-ops/data/pipeline.md';

const M = [
  ['langfuse/69bc6e7a',                     '095', 'Langfuse',                  'Backend (IAM/Billing)',           3.2, '✅'],
  ['langfuse/dff72f11',                     '096', 'Langfuse',                  'Backend',                          3.4, '✅'],
  ['langfuse/1745b263',                     '097', 'Langfuse',                  'Cloud Infrastructure',             2.8, '❌'],
  ['checkly/5f8447cc',                      '098', 'Checkly',                   'Senior Backend (UTC+3)',           4.2, '✅'],
  ['checkly/8f52de96',                      '099', 'Checkly',                   'Senior Product Engineer AI',       4.0, '✅'],
  ['elevenlabs/c7d59014',                   '100', 'ElevenLabs',                'Full-Stack (BE-leaning)',          3.1, '✅'],
  ['tigerdata/d71def2d',                    '101', 'Tiger Data',                'Senior Platform Engineer',         2.9, '❌'],
  ['quicknode/92dfe4b7',                    '102', 'QuickNode',                 'Senior Infrastructure',            3.0, '✅'],
  ['zencastr/e5897c7a',                     '103', 'Zencastr',                  'Senior Backend',                   4.2, '✅'],
  ['Peec/5e285378',                         '104', 'Peec AI',                   'Senior Backend',                   4.0, '✅'],
  ['pluralfinance/37ebcc22',                '105', 'Plural',                    'Senior Backend FinTech',           2.6, '❌ SKIP US+Ruby'],
  ['voodoo/69707d04',                       '106', 'Voodoo',                    'Senior SE TS/Node',                3.6, '❌ SKIP France-only'],
  ['wander/1f55152b',                       '107', 'Wander',                    'TypeScript Engineer - Backend',    4.3, '✅'],
  ['truelogic/7e7471c4',                    '108', 'Truelogic',                 'Senior Backend',                   3.4, '❌ SKIP LATAM-only'],
  ['Deel/f82bd573',                         '109', 'Deel',                      'Senior Back-End',                  3.7, '❌ DUP of #22'],
  ['deel/5f5720f2',                         '110', 'Deel',                      'Senior Backend Node+AWS',          4.1, '✅ DUP of #22'],
  ['bjakcareer/a7542b7a',                   '111', 'Bjak',                      'Senior SE JS/TS',                  3.2, '❌ SKIP ASEAN'],
  ['bjakcareer/58dd7c6f',                   '112', 'Bjak',                      'Lead SE JS/TS',                    3.3, '❌ SKIP ASEAN'],
  ['bjakcareer/a29f0685',                   '113', 'Bjak',                      'Senior Backend Node',              3.4, '❌ SKIP ASEAN'],
  ['tremendous/remote-job/senior-software', '114', 'Tremendous',                'Senior SE',                        3.8, '❌ SKIP Americas-only'],
  ['mattermost/remote-job/senior-react',    '115', 'Mattermost',                'Senior React Platform',            3.0, '❌ SKIP US-only'],
  ['remoterocketship.com/us/company/gamdom','116', 'Gamdom',                    'Senior Backend',                   4.2, '✅ verify geo'],
  ['cloudflare/jobs/7446340',               '117', 'Cloudflare',                'SE Network Perf (Rust)',           2.5, '❌ SKIP geo+Rust'],
  ['cloudflare/jobs/7090955',               '118', 'Cloudflare',                'Systems Data Platform',            2.8, '❌ SKIP geo'],
  ['cloudflare/jobs/7093840',               '119', 'Cloudflare',                'Systems Pipelines',                2.6, '❌ SKIP geo'],
  ['cloudflare/jobs/7340134',               '120', 'Cloudflare',                'Systems (Go)',                     2.7, '❌ SKIP geo'],
  ['cloudflare/jobs/7463793',               '121', 'Cloudflare',                'SE Egress',                        2.5, '❌ SKIP geo'],
  ['cloudflare/jobs/7521014',               '122', 'Cloudflare',                'SE Enterprise Readiness',          2.9, '❌ SKIP geo'],
  ['cloudflare/jobs/6421408',               '123', 'Cloudflare',                'Distributed Systems WARP',         2.4, '❌ SKIP geo'],
  ['cloudflare/jobs/7463839',               '124', 'Cloudflare',                'Systems Traffic Mgmt',             2.5, '❌ SKIP geo'],
  ['cloudflare/jobs/7606636',               '125', 'Cloudflare',                'Systems Cloud App Control',        2.3, '❌ SKIP geo'],
  ['cloudflare/jobs/5390243',               '126', 'Cloudflare',                'SE Durable Objects',               3.0, '❌ SKIP geo'],
];

let content = await readFile(PATH, 'utf8');
const lines = content.split('\n');
let hits = 0;
const missed = [];

for (const [needle, num, co, role, score, pdf] of M) {
  let matched = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('- [ ] ') && lines[i].includes(needle)) {
      // Extract original URL from line
      const m = lines[i].match(/^- \[ \] (\S+)/);
      const url = m ? m[1] : '';
      lines[i] = `- [x] #${num} | ${url} | ${co} | ${role} | ${score}/5 | PDF ${pdf}`;
      hits++;
      matched = true;
      break;
    }
  }
  if (!matched) missed.push(`${num} ${needle}`);
}

await writeFile(PATH, lines.join('\n'));
console.log(`Marked ${hits}/${M.length} as processed`);
if (missed.length) console.log('Missed:', missed.join('\n  '));
