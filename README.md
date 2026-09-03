# Career-Ops

**[:gb: English](#what-is-this)** | **[:es: Español](#es-versión-en-español)**

> AI-powered job search pipeline built on Claude Code. Evaluate offers, generate tailored CVs, scan portals, and track everything -- powered by AI agents.

![Claude Code](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops Demo" width="800">
</p>

## What Is This

Career-Ops turns Claude Code into a full job search command center. Instead of manually tracking applications in a spreadsheet, you get an AI-powered pipeline that:

- **Evaluates offers** with a structured A-F scoring system (10 weighted dimensions)
- **Generates tailored PDFs** -- ATS-optimized CVs customized per job description
- **Scans portals** automatically (Greenhouse, Ashby, Lever, company pages)
- **Processes in batch** -- evaluate 10+ offers in parallel with sub-agents
- **Tracks everything** in a single source of truth with integrity checks

> **Important: This is NOT a spray-and-pray tool.** The whole point is to apply only where there's a real match -- for your sake and for the recruiter reading your application. The scoring system helps you focus on high-fit opportunities instead of wasting everyone's time. Always review before submitting.

Built by someone who used it to evaluate 740+ job offers, generate 100+ tailored CVs, and land a Head of Applied AI role. [Read the full case study](https://santifer.io/career-ops-system).

## Features

| Feature | Description |
|---------|-------------|
| **Auto-Pipeline** | Paste a URL, get a full evaluation + PDF + tracker entry |
| **6-Block Evaluation** | Role summary, CV match, level strategy, comp research, personalization, interview prep (STAR+R) |
| **Interview Story Bank** | Accumulates STAR+Reflection stories across evaluations -- 5-10 master stories that answer any behavioral question |
| **Negotiation Scripts** | Salary negotiation frameworks, geographic discount pushback, competing offer leverage |
| **ATS PDF Generation** | Keyword-injected CVs with Space Grotesk + DM Sans design |
| **Portal Scanner** | 45+ companies pre-configured (Anthropic, OpenAI, ElevenLabs, Retool, n8n...) + custom queries across Ashby, Greenhouse, Lever, Wellfound |
| **Batch Processing** | Parallel evaluation with `claude -p` workers |
| **Dashboard TUI** | Terminal UI to browse, filter, and sort your pipeline |
| **Pipeline Integrity** | Automated merge, dedup, status normalization, health checks |

## Evolution Timeline (What Changed Over Time)

This project has evolved continuously from an initial release into a production-grade job-search operating system. Based on the repository history:

- **2026-09 to 2026-07 (active operations):** Frequent real-world pipeline updates in `data/applications.md`, richer interview narratives in `interview-prep/story-bank.md`, and iterative matching improvements in `merge-tracker.mjs` (especially role fuzzy matching behavior).
- **2026-08 to 2026-07 (reliability and workflow tuning):** Repeated scanner/runtime diagnostics captured in `.playwright-mcp` console logs; refinements to tracker merge logic and day-to-day evaluation flow.
- **2026-06 (pipeline integrity hardening):** Status normalization and verification tooling matured (`normalize-statuses.mjs`, `verify-pipeline.mjs`, `merge-tracker.mjs`), reducing duplication and state drift.
- **2026-05 (product polish):** Major README and docs refinements, onboarding clarity improvements, and better end-user guidance for setup and mode usage.
- **2026-04 (foundation launch):** Initial release plus the core system architecture: slash-command routing, auto-pipeline flow, onboarding wizard, STAR+Reflection story framework, ethical-use guardrails, portal expansion (45+ companies), tracker TSV spec, and contributor documentation.

If you want a literal commit-by-commit changelog in this README, you can generate one from git history and append it under this section.

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # Required for PDF generation

# 2. Configure
cp config/profile.example.yml config/profile.yml  # Edit with your details
cp templates/portals.example.yml portals.yml       # Customize companies

# 3. Add your CV
# Create cv.md in the project root with your CV in markdown

# 4. Personalize with Claude
claude   # Open Claude Code in this directory

# Then ask Claude to adapt the system to you:
# "Change the archetypes to backend engineering roles"
# "Translate the modes to English"
# "Add these 5 companies to portals.yml"
# "Update my profile with this CV I'm pasting"

# 5. Start using
# Paste a job URL or run /career-ops
```

> **The system is designed to be customized by Claude itself.** Modes, archetypes, scoring weights, negotiation scripts -- just ask Claude to change them. It reads the same files it uses, so it knows exactly what to edit.

See [docs/SETUP.md](docs/SETUP.md) for the full setup guide.

## Usage

Career-ops is a single slash command with multiple modes:

```
/career-ops                → Show all available commands
/career-ops {paste a JD}   → Full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → Scan portals for new offers
/career-ops pdf            → Generate ATS-optimized CV
/career-ops batch          → Batch evaluate multiple offers
/career-ops tracker        → View application status
/career-ops apply          → Fill application forms with AI
/career-ops pipeline       → Process pending URLs
/career-ops contacto       → LinkedIn outreach message
/career-ops deep           → Deep company research
/career-ops training       → Evaluate a course/cert
/career-ops project        → Evaluate a portfolio project
```

Or just paste a job URL or description directly -- career-ops auto-detects it and runs the full pipeline.

## How It Works

```
You paste a job URL or description
        │
        ▼
┌──────────────────┐
│  Archetype       │  Classifies: LLMOps / Agentic / PM / SA / FDE / Transformation
│  Detection       │
└────────┬─────────┘
         │
┌────────▼─────────┐
│  A-F Evaluation   │  Match, gaps, comp research, STAR stories
│  (reads cv.md)    │
└────────┬─────────┘
         │
    ┌────┼────┐
    ▼    ▼    ▼
 Report  PDF  Tracker
  .md   .pdf   .tsv
```

## Pre-configured Portals

The scanner comes with **45+ companies** ready to scan and **19 search queries** across major job boards. Copy `templates/portals.example.yml` to `portals.yml` and add your own:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
**Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
**AI Platforms:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
**Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
**Enterprise:** Salesforce, Twilio, Gong, Dialpad
**LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
**Automation:** n8n, Zapier, Make.com
**European:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**Job boards searched:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront

### Portals Added Over Time

- **Initial base:** Ashby, Greenhouse, Lever, Workable, and curated company career pages.
- **Expanded discovery:** worldwide-remote aggregators and regional boards were added (for example Himalayas, WeWorkRemotely, Remotive, Working Nomads, NoDesk, Jobgether, DailyRemote, EchoJobs, YC Work at a Startup, and HN Who is Hiring).
- **ATS coverage growth:** additional ATS patterns were introduced over time (for example Greenhouse EU, Recruitee, Rippling ATS, and PINPOINT-based boards in tracked companies).
- **Quality hardening:** low-signal or unverifiable sources are now selectively disabled in config until they become reliable again.

### Supported Now (Current Scanner Reality)

- **Core ATS/job-board support:** Ashby, Greenhouse (including EU variants), Lever, Workable, Recruitee, Rippling ATS, and BambooHR (where verifiable through company endpoints).
- **Direct company-page scanning:** first-class support through `tracked_companies` using Playwright/WebSearch plus optional ATS APIs.
- **Aggregator support (guardrailed):** RemoteFront, Himalayas, WeWorkRemotely, Remotive, Working Nomads, NoDesk, Jobgether, Remote Rocketship, DailyRemote, EchoJobs, and YC Work at a Startup.
- **Policy:** support is dynamic -- sources can be enabled/disabled based on verification quality and signal, with reasons documented inline in `portals.yml`.

## Dashboard TUI

The built-in terminal dashboard lets you browse your pipeline visually:

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard
```

Features: 6 filter tabs, 4 sort modes, grouped/flat view, lazy-loaded previews, inline status changes.

## Project Structure

```
career-ops/
├── CLAUDE.md                    # Agent instructions
├── cv.md                        # Your CV (create this)
├── article-digest.md            # Your proof points (optional)
├── config/
│   └── profile.example.yml      # Template for your profile
├── modes/                       # 14 skill modes
│   ├── _shared.md               # Shared context (customize this)
│   ├── oferta.md                # Single evaluation
│   ├── pdf.md                   # PDF generation
│   ├── scan.md                  # Portal scanner
│   ├── batch.md                 # Batch processing
│   └── ...
├── templates/
│   ├── cv-template.html         # ATS-optimized CV template
│   ├── portals.example.yml      # Scanner config template
│   └── states.yml               # Canonical statuses
├── batch/
│   ├── batch-prompt.md          # Self-contained worker prompt
│   └── batch-runner.sh          # Orchestrator script
├── dashboard/                   # Go TUI pipeline viewer
├── data/                        # Your tracking data (gitignored)
├── reports/                     # Evaluation reports (gitignored)
├── output/                      # Generated PDFs (gitignored)
├── fonts/                       # Space Grotesk + DM Sans
├── docs/                        # Setup, customization, architecture
└── examples/                    # Sample CV, report, proof points
```

## Tech Stack

![Claude Code](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Bubble Tea](https://img.shields.io/badge/Bubble_Tea-FF75B5?style=flat&logo=go&logoColor=white)

- **Agent**: Claude Code with custom skills and modes
- **PDF**: Playwright/Puppeteer + HTML template
- **Scanner**: Playwright + Greenhouse API + WebSearch
- **Dashboard**: Go + Bubble Tea + Lipgloss (Catppuccin Mocha theme)
- **Data**: Markdown tables + YAML config + TSV batch files

## Also Open Source

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- The portfolio website (santifer.io) with AI chatbot, LLMOps dashboard, and case studies. If you need a portfolio to showcase alongside your job search, fork it and make it yours.

## About the Author

I'm Santiago -- Head of Applied AI, former founder (built and sold a business that still runs with my name on it). I built career-ops to manage my own job search. It worked: I used it to land my current role.

My portfolio and other open source projects → [santifer.io](https://santifer.io)

## License

MIT

---

# :es: Version en Español

## Que es esto

Career-Ops convierte Claude Code en un centro de mando de busqueda de empleo. En vez de trackear aplicaciones en un spreadsheet, tienes un pipeline AI que:

- **Evalua ofertas** con scoring estructurado A-F (10 dimensiones ponderadas)
- **Genera PDFs personalizados** -- CVs ATS-optimizados por oferta
- **Escanea portales** automaticamente (Greenhouse, Ashby, Lever, webs de empresas)
- **Procesa en batch** -- evalua 10+ ofertas en paralelo con sub-agentes
- **Trackea todo** en una fuente de verdad unica con checks de integridad

> **Importante: Esto NO es para spamear empresas.** El objetivo es aplicar solo donde hay match real -- por tu bien y por el de quien lea tu aplicacion. El scoring te ayuda a centrarte en las oportunidades de alto fit en vez de perder el tiempo de todos. Siempre revisa antes de enviar.

Construido por alguien que lo uso para evaluar 740+ ofertas, generar 100+ CVs personalizados, y conseguir un rol de Head of Applied AI. [Lee el case study completo](https://santifer.io/career-ops).

## Inicio rapido

```bash
# 1. Clonar
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install

# 2. Configurar
cp config/profile.example.yml config/profile.yml  # Editar con tus datos
cp templates/portals.example.yml portals.yml       # Personalizar empresas

# 3. Añadir tu CV
# Crear cv.md en la raiz del proyecto con tu CV en markdown

# 4. Personalizar con Claude
claude   # Abrir Claude Code en este directorio

# Pidele a Claude que adapte el sistema a ti:
# "Cambia los arquetipos a roles de backend"
# "Traduce los modes a ingles"
# "Añade estas empresas a portals.yml"
# "Actualiza mi perfil con este CV que te pego"

# 5. Usar
# Pega una URL de oferta o ejecuta /career-ops
```

> **El sistema esta diseñado para que Claude lo personalice.** Modes, arquetipos, scoring, scripts de negociacion -- solo pidelo. Claude lee los mismos archivos que usa, asi que sabe exactamente que editar.

Guia completa en [docs/SETUP.md](docs/SETUP.md).

## Portales incluidos

El scanner viene con **45+ empresas** pre-configuradas y **19 queries** en los principales portales de empleo. Copia `templates/portals.example.yml` a `portals.yml` y añade las tuyas:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
**Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
**Plataformas AI:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
**Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
**Enterprise:** Salesforce, Twilio, Gong, Dialpad
**LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
**Automatizacion:** n8n, Zapier, Make.com
**Europa:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**Portales de empleo:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront

### Portales agregados con el tiempo

- **Base inicial:** Ashby, Greenhouse, Lever, Workable y paginas de carreras de empresas curadas.
- **Expansion de descubrimiento:** se agregaron agregadores worldwide-remote y boards regionales (por ejemplo Himalayas, WeWorkRemotely, Remotive, Working Nomads, NoDesk, Jobgether, DailyRemote, EchoJobs, YC Work at a Startup y HN Who is Hiring).
- **Mas cobertura ATS:** se anadieron patrones ATS adicionales con el tiempo (por ejemplo Greenhouse EU, Recruitee, Rippling ATS y boards PINPOINT en empresas trackeadas).
- **Endurecimiento de calidad:** fuentes con senal baja o no verificables se deshabilitan de forma selectiva hasta que vuelvan a ser fiables.

### Soporte actual (realidad del scanner hoy)

- **ATS/job boards principales:** Ashby, Greenhouse (incluyendo variantes EU), Lever, Workable, Recruitee, Rippling ATS y BambooHR (cuando se puede verificar por endpoints de empresa).
- **Escaneo directo de paginas de empresa:** soporte de primera clase via `tracked_companies` usando Playwright/WebSearch y APIs ATS opcionales.
- **Agregadores con guardrails:** RemoteFront, Himalayas, WeWorkRemotely, Remotive, Working Nomads, NoDesk, Jobgether, Remote Rocketship, DailyRemote, EchoJobs y YC Work at a Startup.
- **Politica:** el soporte es dinamico -- una fuente puede activarse o desactivarse segun calidad de verificacion y senal; las razones quedan documentadas en `portals.yml`.

## Uso

Career-ops es un unico slash command con multiples modos:

```
/career-ops                → Mostrar todos los comandos
/career-ops {pega un JD}   → Pipeline completo (evaluar + PDF + tracker)
/career-ops scan           → Escanear portales
/career-ops pdf            → Generar CV ATS-optimizado
/career-ops batch          → Evaluar ofertas en batch
/career-ops tracker        → Ver estado de aplicaciones
/career-ops apply          → Rellenar formularios con IA
/career-ops pipeline       → Procesar URLs pendientes
/career-ops contacto       → Mensaje LinkedIn outreach
/career-ops deep           → Research profundo de empresa
```

O simplemente pega una URL o descripcion de oferta -- career-ops la detecta y ejecuta el pipeline completo.

## Evolucion del proyecto (cambios en el tiempo)

Este sistema evoluciono de una primera version a una operacion completa de busqueda laboral en produccion. Segun el historial del repositorio:

- **2026-09 a 2026-07 (operacion activa):** Muchas actualizaciones reales del pipeline en `data/applications.md`, ampliacion del banco de historias en `interview-prep/story-bank.md`, y mejoras iterativas en `merge-tracker.mjs` (especialmente el fuzzy match de roles).
- **2026-08 a 2026-07 (fiabilidad y ajustes):** Mas diagnosticos del scanner/runtime en logs de `.playwright-mcp` y refinamientos constantes del flujo de evaluacion diaria.
- **2026-06 (integridad del pipeline):** Maduracion de scripts de normalizacion y verificacion (`normalize-statuses.mjs`, `verify-pipeline.mjs`, `merge-tracker.mjs`) para reducir duplicados y desalineaciones de estado.
- **2026-05 (pulido del producto):** Mejoras fuertes de README/documentacion y mas claridad en onboarding e instrucciones para usuarios.
- **2026-04 (lanzamiento base):** Version inicial con arquitectura central: enrutador por slash command, auto-pipeline, wizard de onboarding, framework STAR+Reflection, reglas de uso etico, expansion de portales (45+ empresas), formato TSV del tracker y guia de contribucion.

## Tambien Open Source

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- El portfolio (santifer.io) con chatbot IA, dashboard LLMOps y case studies. Si necesitas un portfolio para acompañar tu busqueda de empleo, echale un vistazo.

## Documentacion

- [SETUP.md](docs/SETUP.md) -- Guia de instalacion
- [CUSTOMIZATION.md](docs/CUSTOMIZATION.md) -- Como personalizar
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) -- Como funciona el sistema

## Let's Connect

[![Website](https://img.shields.io/badge/santifer.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://santifer.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santifer)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hola@santifer.io)
