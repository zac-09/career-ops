#!/usr/bin/env node
// Build personalized CV HTML files from the template for the batch 095-102.
// Reads templates/cv-template.html, substitutes {{...}} placeholders per company,
// writes /Volumes/software/code/career-ops/batch/html/cv-isaac-{slug}.html.

import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const ROOT = '/Volumes/software/code/career-ops';
const TEMPLATE = `${ROOT}/templates/cv-template.html`;
const OUT_DIR = `${ROOT}/batch/html`;

await mkdir(OUT_DIR, { recursive: true });
const tpl = await readFile(TEMPLATE, 'utf8');

const COMMON = {
  LANG: 'en',
  NAME: 'Isaac Mubiru',
  EMAIL: 'isaacmubiru99@gmail.com',
  LINKEDIN_URL: 'https://linkedin.com/in/isaac-mubiru-3bb728174',
  LINKEDIN_DISPLAY: 'linkedin.com/in/isaac-mubiru',
  PORTFOLIO_URL: 'https://github.com/zac-09',
  PORTFOLIO_DISPLAY: 'github.com/zac-09',
  LOCATION: 'Kampala, Uganda · EAT (UTC+3)',
  SECTION_SUMMARY: 'Professional Summary',
  SECTION_COMPETENCIES: 'Core Competencies',
  SECTION_EXPERIENCE: 'Work Experience',
  SECTION_PROJECTS: 'Projects',
  SECTION_EDUCATION: 'Education',
  SECTION_CERTIFICATIONS: 'Certifications',
  SECTION_SKILLS: 'Skills',
  EDUCATION: `
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-title">B.Sc. Computer Engineering — <span class="edu-org">Makerere University</span></span>
        <span class="edu-year">Aug 2018 – Sep 2022</span>
      </div>
      <div class="edu-desc">Kampala, Uganda</div>
    </div>`,
  CERTIFICATIONS: `
    <div class="cert-item">
      <span class="cert-title">Open-source contributor & GitHub portfolio — <span class="cert-org">github.com/zac-09</span></span>
      <span class="cert-year">Ongoing</span>
    </div>`,
};

const BASE_EXPERIENCE = (firstBullet, secondBullet, thirdBullet) => `
  <div class="job">
    <div class="job-header">
      <span class="job-company">MTailor</span>
      <span class="job-period">Sep 2022 – Present</span>
    </div>
    <div class="job-role">Software Engineer (US Remote, reports to CTO)</div>
    <ul>
      <li>${firstBullet}</li>
      <li>${secondBullet}</li>
      <li>${thirdBullet}</li>
      <li>Migrated file storage from AWS S3 to GCS via a streaming Python pipeline with integrity checks across 20+ apps.</li>
      <li>Saved the company <strong>$5,000/month</strong> by re-architecting services off AWS onto Firebase/GCP — designed cutover plan, ran shadow reads, executed without downtime.</li>
      <li>Implemented Express Shipping revenue feature end-to-end — backend pricing pipeline, UI, analytics — generating <strong>+$40 per order</strong>.</li>
    </ul>
    <div class="job-location">Stack: TypeScript, Node.js, Firebase, GCP Pub/Sub, AWS, Python, ffmpeg, React</div>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-company">MTailor (Contractor)</span>
      <span class="job-period">Mar 2022 – Jul 2022</span>
    </div>
    <div class="job-role">Backend Migration Contractor (US Remote)</div>
    <ul>
      <li>Hired via Upwork to execute backend migration from Parse/MongoDB to Firebase/GCP.</li>
      <li>Built migration script reading MongoDB and writing to Firestore with complex transformation logic.</li>
      <li>Documented new Firebase SDKs (Node + Python) and trained Ops team on the new dashboard + backup procedures.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-company">Dr Wealth</span>
      <span class="job-period">Aug 2021 – Jan 2022</span>
    </div>
    <div class="job-role">Software Engineer (Singapore Remote)</div>
    <ul>
      <li>Built batch query layer reading <strong>2M+ Firestore records</strong> with paginated cursors + pre-aggregated views — kept Morningstar prices fresh in the PWA at low cost.</li>
      <li>Extended backend APIs using Firebase Cloud Functions + Express.js on Heroku.</li>
      <li>Shipped responsive UI pages with HTML, Tailwind, React.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-company">Mind2Matter</span>
      <span class="job-period">Jan 2022 – Jul 2022</span>
    </div>
    <div class="job-role">Software Engineer (US Remote, reports to CTO)</div>
    <ul>
      <li>Built backends for DeFi applications on Node.js + Web3.</li>
      <li>Delivered React UIs from Figma under tight timelines.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-company">CodeBits</span>
      <span class="job-period">Jan 2020 – Jul 2021</span>
    </div>
    <div class="job-role">Software Engineer / Tech Lead (Uganda Remote)</div>
    <ul>
      <li>Led a team of 4 building legal-tech systems for NGOs (FIDA Uganda, LASPNET Uganda).</li>
      <li>Architected a <strong>microservices backend</strong> with <strong>Kafka + Docker + Kubernetes</strong> for FIDA's case management app — service mesh with gRPC + Protobufs.</li>
      <li>Built USSD service for legal aid bridging to Node.js backend via gRPC.</li>
      <li>Built cross-platform mobile app (React Native + Expo, iOS + Android) with Firebase push.</li>
    </ul>
  </div>
`;

const BASE_PROJECTS = `
  <div class="project">
    <div class="project-title">Parse → Firebase Migration (MTailor)<span class="project-badge">zero downtime</span></div>
    <div class="project-desc">Migrated 20+ production apps from Parse/MongoDB to Firebase/Firestore with dual-write Pub/Sub pipeline, per-app flag flip, and rollback discipline. Saved $5K/month in AWS spend with no customer-visible incident.</div>
    <div class="project-tech">Node.js, Pub/Sub, Firestore, MongoDB, GCP, AWS, Python</div>
  </div>

  <div class="project">
    <div class="project-title">Healthcare WhatsApp Chatbot<span class="project-badge">OpenAI + Vision</span></div>
    <div class="project-desc">Built prescription-OCR chatbot on WhatsApp Business API integrating <strong>OpenAI</strong> + <strong>Google Vision OCR</strong>. Low-latency request flow with retry + observability around third-party LLM calls.</div>
    <div class="project-tech">Node.js, OpenAI, Google Vision, WhatsApp Business API, GCP</div>
  </div>

  <div class="project">
    <div class="project-title">Real-time Pub/Sub Sync Pipeline<span class="project-badge">millions of events</span></div>
    <div class="project-desc">Designed idempotent Pub/Sub consumer with dead-letter queue + replay for MongoDB ↔ Firestore sync. Pipeline ran parallel production traffic during 6-month migration with zero data loss.</div>
    <div class="project-tech">Node.js, GCP Pub/Sub, Firestore, MongoDB, idempotency keys</div>
  </div>

  <div class="project">
    <div class="project-title">Marketplace Recommendation Engine</div>
    <div class="project-desc">Built collaborative + content-based filtering engine in MongoDB for service-provider matching. Ranked candidates from interaction history + skill graphs.</div>
    <div class="project-tech">Node.js, MongoDB, vector similarity</div>
  </div>
`;

function competencies(list) {
  return list.map(c => `<span class="competency-tag">${c}</span>`).join('\n      ');
}

function skills(map) {
  return Object.entries(map).map(([cat, val]) =>
    `<div class="skill-item"><span class="skill-category">${cat}:</span> ${val}</div>`
  ).join('\n      ');
}

const CONFIGS = [
  {
    slug: 'langfuse-iam-billing',
    format: 'a4',
    SUMMARY_TEXT: 'Senior backend engineer specialized in auth flows, RBAC, and event metering pipelines across Node.js + TypeScript + PostgreSQL. Led the Parse → Firebase migration of 20+ apps at MTailor (zero downtime, $5K/month AWS savings), built an idempotent <a href="https://github.com/zac-09">Pub/Sub event pipeline</a> processing millions of events, and shipped customer-facing revenue features (Express Shipping, +$40/order). Now applying the same operational discipline to IAM and usage-based billing infrastructure at LLMOps scale.',
    COMPETENCIES: competencies([
      'TypeScript / Node.js (5+ yrs)', 'PostgreSQL & SQL', 'Authentication & RBAC',
      'Usage-based billing & metering', 'Event pipelines (Pub/Sub, Kafka)',
      'Idempotent consumers', 'Distributed systems', 'Zero-downtime migrations'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Led end-to-end migration of 20+ production apps from Parse/MongoDB to Firebase/Firestore, zero downtime, reporting to the CTO.',
    EXPERIENCE_SECOND_BULLET: 'Built <strong>real-time event metering pipeline</strong> (MongoDB ↔ Firestore via GCP Pub/Sub) with idempotent consumers and dead-letter queue — same pattern needed for usage-based billing at scale.',
    EXPERIENCE_THIRD_BULLET: 'Designed customer-facing 3D visualization (ffmpeg + video overlay) increasing buyer conversion on product detail pages.',
    SKILLS: skills({
      'Languages': 'TypeScript, Node.js, JavaScript, Python, Go (intermediate), SQL',
      'Backend / Infra': 'PostgreSQL, MongoDB, Firestore, GCP Pub/Sub, Kafka, gRPC, Docker, Kubernetes, AWS, GCP',
      'Domain': 'RBAC, API key auth, event metering, idempotent pipelines, OAuth/SSO (ramping)',
      'Tools': 'Git, Linux, OpenAI APIs, Google Vision'
    }),
  },
  {
    slug: 'langfuse-backend',
    format: 'a4',
    SUMMARY_TEXT: 'Backend engineer specialized in high-throughput event pipelines and zero-downtime migrations on Node.js + TypeScript. Built a <a href="https://github.com/zac-09">Pub/Sub event pipeline</a> processing millions of events at MTailor, cut $5K/month in AWS spend by re-architecting the stack, and shipped an OpenAI + Vision OCR pipeline over WhatsApp Business API. Now applying the same throughput + observability discipline to LLM observability infrastructure at billion-trace scale.',
    COMPETENCIES: competencies([
      'TypeScript / Node.js (5+ yrs)', 'Event ingestion at scale', 'PostgreSQL & OLAP patterns',
      'ClickHouse (ramping)', 'Pub/Sub & Kafka', 'Idempotent consumers',
      'Cost optimization', 'OpenTelemetry & observability'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Designed and operated a <strong>high-throughput Pub/Sub ingestion pipeline</strong> for real-time MongoDB ↔ Firestore sync across 20+ apps — idempotent consumers, dead-letter queue, replay, zero data loss over 6 months of live production traffic.',
    EXPERIENCE_SECOND_BULLET: 'Re-architected production infra from AWS to Firebase/GCP — saved <strong>$5,000/month</strong>, ran cost-modeled cutover with zero downtime.',
    EXPERIENCE_THIRD_BULLET: 'Built customer-facing 3D body visualization (ffmpeg + video overlay), measurably increasing buyer conversion.',
    SKILLS: skills({
      'Languages': 'TypeScript, Node.js, JavaScript, Python, Go (intermediate), SQL',
      'Backend / Infra': 'PostgreSQL, MongoDB, ClickHouse (ramping), GCP Pub/Sub, Kafka, Redis, S3, Docker, Kubernetes, AWS',
      'Observability': 'OpenTelemetry (reading), custom freshness metrics, idempotent dead-letter pipelines',
      'AI / Domain': 'OpenAI APIs, Google Vision, LLM integration patterns'
    }),
  },
  {
    slug: 'checkly-backend',
    format: 'a4',
    SUMMARY_TEXT: 'Senior backend engineer in TypeScript + Node.js with 5+ years building distributed SaaS systems on AWS and bare metal — async-first remote across UTC-8 to UTC+3. Led the Parse → Firebase migration of 20+ apps at MTailor (zero downtime, $5K/month AWS savings) and built a <a href="https://github.com/zac-09">Pub/Sub event pipeline</a> with idempotent consumers and dead-letter queue. Now bringing the same monitoring + observability discipline to Checkly\'s unified testing + monitoring platform.',
    COMPETENCIES: competencies([
      'TypeScript / Node.js (5+ yrs)', 'Distributed SaaS on AWS', 'Hapi.js / Express',
      'Go (intermediate)', 'OpenTelemetry & monitoring', 'Playwright / E2E testing',
      'Async-first remote', 'Cross-cloud migrations'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Led end-to-end migration of 20+ production apps from Parse/MongoDB to Firebase/Firestore — instrumented event pipeline with metrics + alerts, caught dual-write drift before customers did.',
    EXPERIENCE_SECOND_BULLET: 'Built <strong>distributed Pub/Sub pipeline</strong> (MongoDB ↔ Firestore) with idempotent consumers, dead-letter queue, replay — zero data loss across 6 months of live production traffic.',
    EXPERIENCE_THIRD_BULLET: 'Re-architected stack from AWS to Firebase/GCP — saved <strong>$5,000/month</strong>, kept S3 as fallback during transition.',
    SKILLS: skills({
      'Languages': 'TypeScript, Node.js, JavaScript, Python, Go (intermediate), SQL',
      'Backend / Infra': 'Hapi.js (familiar), Express, PostgreSQL, MongoDB, AWS S3/EC2/EBS, GCP, Docker, Kubernetes',
      'Distributed Systems': 'Kafka, gRPC, GCP Pub/Sub, idempotent consumers, dead-letter queues',
      'Observability / Testing': 'OpenTelemetry (ramping), Playwright (familiar), freshness metrics, alerting'
    }),
  },
  {
    slug: 'checkly-product-ai',
    format: 'a4',
    SUMMARY_TEXT: 'Senior product engineer building AI-enhanced backends — shipped <strong>OpenAI + Google Vision OCR</strong> over WhatsApp Business API and customer-facing CV/visualization features at MTailor. 5+ years in TypeScript + Node.js, async-first remote across UTC-8 to UTC+3. <a href="https://github.com/zac-09">github.com/zac-09</a>. Now joining Checkly to build AI agents that help developers debug Playwright + API tests faster.',
    COMPETENCIES: competencies([
      'TypeScript / Node.js (5+ yrs)', 'OpenAI & LLM integration', 'Full-stack product engineering',
      'Vue.js (ramping) / React', 'PostgreSQL & ClickHouse (ramping)', 'AWS',
      'Async-first ship culture', 'Customer-facing AI features'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Reported to MTailor\'s CTO; owned customer-facing features end-to-end including a <strong>3D body visualization</strong> (ffmpeg + video overlay) that measurably increased buyer conversion.',
    EXPERIENCE_SECOND_BULLET: 'Built event pipeline (MongoDB ↔ Firestore via GCP Pub/Sub) with idempotent consumers — instrumented with freshness metrics + alerts.',
    EXPERIENCE_THIRD_BULLET: 'Shipped <strong>Express Shipping revenue feature</strong> solo (backend + UI + analytics) — +$40 per order, full ownership from spec to dashboard.',
    SKILLS: skills({
      'Languages': 'TypeScript, Node.js, JavaScript, Python, Go (intermediate), SQL',
      'AI / LLM': 'OpenAI APIs, Google Vision OCR, prompt design, LLM retry + observability patterns',
      'Frontend': 'React (5 yrs), Vue.js (ramping), Tailwind, HTML, CSS',
      'Backend / Infra': 'PostgreSQL, ClickHouse (ramping), MongoDB, AWS, GCP, Pub/Sub, Docker, K8s'
    }),
  },
  {
    slug: 'elevenlabs-fullstack',
    format: 'a4',
    SUMMARY_TEXT: 'Backend engineer building production systems across <strong>Python + Node.js</strong> — shipped <strong>OpenAI + Google Vision OCR</strong> integrations over WhatsApp Business API and a streaming S3 → GCS migration pipeline (TB-scale, zero file loss). 5+ years senior backend, reporting to CTO at MTailor. <a href="https://github.com/zac-09">github.com/zac-09</a>. Now joining ElevenLabs to build the voice-AI platform powering millions of users.',
    COMPETENCIES: competencies([
      'Python (production scripts + tooling)', 'Node.js / TypeScript (5+ yrs)', 'OpenAI & AI model integration',
      'Cloud infra (AWS S3, GCS, Firebase)', 'Kubernetes & Docker', 'gRPC + Protobufs',
      'System design at scale', 'Security & test fundamentals'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Built <strong>Python streaming pipeline</strong> migrating TB-scale customer files from AWS S3 to GCS — parallel transfers, integrity checks, idempotent retries, zero file loss across 20+ apps.',
    EXPERIENCE_SECOND_BULLET: 'Led end-to-end Parse → Firebase migration with zero downtime, reporting to the CTO. Saved <strong>$5,000/month</strong> in AWS spend.',
    EXPERIENCE_THIRD_BULLET: 'Shipped Express Shipping revenue feature (backend pricing pipeline + UI + analytics) — Stripe-adjacent payment plumbing generating +$40/order.',
    SKILLS: skills({
      'Languages': 'Python, TypeScript, Node.js, JavaScript, Go (intermediate), SQL',
      'AI / LLM': 'OpenAI APIs, Google Vision OCR, retry + observability for third-party LLMs',
      'Infra': 'AWS S3/EC2/EBS, GCS, Firebase, Kubernetes, Docker, gRPC, Protobufs',
      'Domain': 'API design, system design, security fundamentals, test design'
    }),
  },
  {
    slug: 'quicknode-infra',
    format: 'letter',
    SUMMARY_TEXT: 'Backend + infrastructure engineer who lived through cloud migrations — owned zero-downtime Parse → Firebase migration of 20+ apps at MTailor and cut <strong>$5,000/month</strong> in AWS spend by re-architecting the cutover. Comfortable across <strong>Docker, Kubernetes, Python, Go (intermediate), Node.js</strong>, and cross-cloud (AWS ↔ GCP) networking. <a href="https://github.com/zac-09">github.com/zac-09</a>. Now ready to specialize in core-systems infrastructure at QuickNode.',
    COMPETENCIES: competencies([
      'Kubernetes & Docker', 'AWS + GCP cross-cloud', 'Python / Go / Node.js',
      'IaC mindset (Terraform ramping)', 'Cost optimization', 'Distributed microservices',
      'gRPC + Protobufs', 'Networking & migrations'
    ]),
    EXPERIENCE_FIRST_BULLET: 'Architected and executed migration from AWS (EC2/EBS/S3) to GCP (Firebase/GCS) across 20+ apps — designed cutover plan, validated cost model, ran shadow reads. <strong>Saved $5,000/month</strong>.',
    EXPERIENCE_SECOND_BULLET: 'Built Python streaming pipeline migrating TB-scale files between clouds with integrity checks + idempotent retries — same shape as IaC + Configuration Management work.',
    EXPERIENCE_THIRD_BULLET: 'Designed and deployed <strong>Kubernetes-orchestrated Kafka microservice graph</strong> at CodeBits (FIDA case management) — Docker containers, gRPC service mesh across nodes.',
    SKILLS: skills({
      'Languages': 'Python, Node.js, JavaScript, TypeScript, Go (intermediate), SQL',
      'Infrastructure': 'Kubernetes, Docker, AWS S3/EC2/EBS, GCP, Firebase, Terraform (ramping), Ansible (familiar)',
      'Distributed Systems': 'Kafka, gRPC, Protobufs, GCP Pub/Sub, idempotent consumers, service mesh',
      'Observability': 'Custom freshness metrics, alerting, OpenTelemetry (ramping), Grafana (familiar)'
    }),
  },
];

function render(tpl, vars) {
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.split(`{{${k}}}`).join(v),
    tpl
  );
}

for (const cfg of CONFIGS) {
  const experience = BASE_EXPERIENCE(cfg.EXPERIENCE_FIRST_BULLET, cfg.EXPERIENCE_SECOND_BULLET, cfg.EXPERIENCE_THIRD_BULLET);
  const vars = {
    ...COMMON,
    PAGE_WIDTH: cfg.format === 'letter' ? '8.5in' : '210mm',
    SUMMARY_TEXT: cfg.SUMMARY_TEXT,
    COMPETENCIES: cfg.COMPETENCIES,
    EXPERIENCE: experience,
    PROJECTS: BASE_PROJECTS,
    SKILLS: cfg.SKILLS,
  };
  const html = render(tpl, vars);
  const outPath = `${OUT_DIR}/cv-isaac-${cfg.slug}.html`;
  await writeFile(outPath, html, 'utf8');
  console.log(`Wrote ${outPath} (format=${cfg.format})`);
}

console.log('done');
