# 🤖 AgentHub – Production AI Agent Orchestrator

> Orchestrate 83+ AI agents (Claude 4.6, Codex GPT‑5.2, Gemini 3.0) with cost‑optimized routing, Docker deployment, and a live React dashboard.

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](Dockerfile)
[![Redis](https://img.shields.io/badge/Redis-session_store-DC382D?logo=redis)](https://redis.io/)
[![CI](https://img.shields.io/github/actions/workflow/status/SamoTech/AgentHub/ci.yml?label=CI%2FCD&logo=githubactions)](.github/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Sponsor](https://img.shields.io/badge/sponsor-9831FF?logo=github)](https://github.com/sponsors/SamoTech)

🔗 **Live API (local):** `http://localhost:8000/docs`  
🖥️ **Live Dashboard (local):** `frontend/dashboard.jsx`

---

## ✨ Features

### Core Orchestration Features
- 🔀 **Smart Routing** – Automatically selects Claude, Codex, or Gemini based on task type.
- 📈 **Live Dashboard** – Overview, Agents, Logs, and Costs tabs with 2s live updates.
- 💰 **Cost Intelligence** – Tracks per‑provider cost, estimates **40–60% savings** via smart provider choice.
- 🧠 **Multi‑Agent Ecosystem** – 83+ agents/frameworks documented in `AGENTS.md`.
- 🗂️ **Session State** – Redis‑backed state for conversations and workflows.
- 🌍 **Multi‑Language Ready** – Marketing/i18n snippets for 10+ languages in `i18n.md`.

### Technical Features
- ⚡ **FastAPI Backend** – Typed, documented REST API with automatic OpenAPI/Swagger UI.
- 🐳 **Docker & docker‑compose** – One‑command production stack (API + Redis).
- 🔁 **GitHub Actions CI/CD** – Lint + test + build on every push/PR.
- 📊 **Typed Models** – Central `models.py` with pricing, limits, and routing metadata.
- 🔌 **Extensible Design** – Easy to add new providers or tools (MCP, vector DB, etc.).

---

## 🚀 Quick Start

### Prerequisites
- **Python** 3.11 or higher
- **Docker** 24+ (for full stack)
- **Redis** (optional if running outside Docker)

### Option 1 – Full Stack with Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/SamoTech/AgentHub.git
cd AgentHub

# Start API + Redis (development/preview)
docker-compose up --build

# API docs
# → http://localhost:8000/docs
```

### Option 2 – Local Python Backend

```bash
# Clone repo
git clone https://github.com/SamoTech/AgentHub.git
cd AgentHub

# Create virtual env (uv/poetry/pip, choose your style)
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Run FastAPI app
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Open docs
# → http://localhost:8000/docs
```

### React Dashboard (Frontend Preview)

```bash
# From repo root
# Open frontend/dashboard.jsx in your React/Vite app
# or embed the single-file dashboard into any HTML page.
```

The dashboard shows live‑simulated metrics (RPS, cost, routing, logs) updated every 2 seconds.

---

## 🔐 Environment Variables

For basic local/demo use, no external API keys are required (providers can be mocked). For real deployments, configure your provider keys in `.env` (FastAPI reads them via standard env access):

```env
ANTHROPIC_API_KEY=sk_anthropic_xxx
OPENAI_API_KEY=sk-openai_xxx
GOOGLE_API_KEY=AIza_xxx
REDIS_URL=redis://redis:6379/0
AGENTHUB_ENV=production
```

> 🔒 **Never commit `.env` files**. Use Docker secrets or your cloud platform’s secret manager in production.

---

## 📁 Project Structure

```bash
AgentHub/
├── main.py                # FastAPI entrypoint (API + routing)
├── models.py              # Provider models, pricing, limits
├── orchestrator.py        # Core routing/orchestration logic
├── requirements.txt       # Python dependencies
├── Dockerfile             # Backend Docker image
├── docker-compose.yml     # API + Redis stack
├── frontend/
│   └── dashboard.jsx      # React dashboard (Overview/Agents/Logs/Costs)
├── docs/
│   ├── TECH.md            # Tech stack & architecture
│   ├── API.md             # (Optional) Detailed API docs
│   └── ...
├── AGENTS.md              # 83+ agents/frameworks ecosystem
├── i18n.md                # Multi-language marketing blurbs
├── .github/
│   └── workflows/
│       └── ci.yml         # CI pipeline
├── LICENSE                # MIT license
└── README.md              # This file
```

---

## 🔧 Tech Stack

### Backend
- **FastAPI** – High‑performance Python web framework.
- **Uvicorn** – ASGI server.
- **Redis** – Session and state store.

### Orchestration
- **Claude 4.6 Sonnet** – Code/reasoning heavy tasks.
- **Codex GPT‑5.2** – General completions, SQL.
- **Gemini 3.0 Pro** – Summaries, cheapest per token.

### Frontend
- **React** 19 single‑file dashboard (`frontend/dashboard.jsx`).
- **Custom styling** – Syne + DM Mono fonts, dark theme, no external UI libs.

### DevOps
- **Docker & docker‑compose** – Containerized stack.
- **GitHub Actions** – CI for lint/test/build.

---

## 📚 Documentation

### Quick Links
- **[Tech Overview](docs/TECH.md)** – Architecture, routing, pricing.
- **[Agents Ecosystem](AGENTS.md)** – 83+ agents, frameworks, and tools.
- **[Internationalization](i18n.md)** – Multi‑language marketing snippets.

> More docs (API details, examples, deployment notes) can be added under `docs/` as the project grows.

---

## 🧪 Testing

Example testing setup (adjust to your runner of choice):

```bash
# Run unit tests
pytest

# or
python -m pytest
```

Suggested minimums:
- ✅ Core routing logic covered (orchestrator).
- ✅ Model selection and cost calculation tested.
- ✅ Basic API endpoint tests for `/orchestrate`.

---

## 🚀 Deployment

### Docker / Self‑Hosted

```bash
# Build image
docker build -t agenthub .

# Run container
docker run -p 8000:8000 --env-file .env agenthub

# Or full stack with Redis
docker-compose up --build
```

### Cloud (Railway / Fly.io / Render / VPS)

1. Build Docker image or use `Dockerfile` directly.
2. Set environment variables (API keys, Redis URL).
3. Expose port **8000**.
4. Configure healthcheck to `GET /health` (if implemented) or `/docs`.

---

## 🛡️ Security

- ✅ Secrets loaded from environment, not committed.
- ✅ Compatible with HTTPS termination at proxy/load balancer.
- ✅ Ready for rate‑limiting, auth middlewares, and audit logging (via FastAPI dependencies).

For production, consider:
- Enabling auth/API keys on `/orchestrate`.
- Adding request logging and tracing (OpenTelemetry).
- Isolating Redis and database in a private network.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** this repository.
2. **Create** a feature branch: `git checkout -b feature/my-improvement`.
3. **Add tests** for your changes (where applicable).
4. **Run tests** and ensure they pass.
5. **Commit** with a clear message.
6. **Open a Pull Request** describing your changes.

### Code Standards
- Keep the code **typed** where possible.
- Maintain a clear separation between API layer and orchestration logic.
- Update documentation if you change behavior.

---

## 📊 Project Stats (Initial)

- **Providers**: 3 (Anthropic, OpenAI, Google) – extensible.
- **Agents/Frameworks documented**: 83+ (see `AGENTS.md`).
- **Deployment**: Dockerfile + docker‑compose.
- **Dashboard**: 4 tabs, live‑updating metrics.
- **Language snippets**: 10+ (see `i18n.md`).

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Ossama Hashim** (SamoTech)

- 🌐 GitHub: [@SamoTech](https://github.com/SamoTech)
- 📧 Email: `samo.hossam@gmail.com`
- 📍 Cairo, Egypt

---

## 🌟 Support & Feedback

If AgentHub helps you orchestrate or save on AI costs:

- ⭐ **Star** this repository.
- 🐛 **Open issues** for bugs/feature requests.
- 💬 **Share ideas** for new provider integrations.
- 💖 **Sponsor** via GitHub Sponsors to accelerate the roadmap.

<div align="center">

**Made with ❤️ in Cairo – for production AI agent orchestration.**

</div>
