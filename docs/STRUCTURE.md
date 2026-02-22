## 📁 Project Structure

```
AgentHub/ 
├── main.py                    # FastAPI entrypoint (API + orchestrator)
├── models.py                  # Agent models, pricing, limits, routing logic
├── orchestrator.py            # Core multi-agent routing + failover
├── requirements.txt           # Python deps (FastAPI, Redis, providers)
├── Dockerfile                 # Production backend container
├── docker-compose.yml         # Full stack (API + Redis)
├── .github/workflows/ci.yml   # GitHub Actions CI/CD pipeline
├── frontend/
│   └── dashboard.jsx          # React dashboard (4 tabs, live Recharts)
├── AGENTS.md                  # 83+ agents/frameworks ecosystem map
├── i18n.md                    # 12-language marketing blurbs
├── TECH.md                    # Tech stack, architecture, benchmarks
├── docs/
│   ├── API.md                 # Detailed endpoint docs
│   ├── DEPLOY.md              # Cloud deployment guides
│   └── ...
├── tests/
│   ├── test_orchestrator.py   # Routing logic tests
│   └── test_models.py         # Provider model tests
├── .env.example               # Environment template
├── LICENSE                    # MIT license
└── README.md                  # This file
```

**Total Files**: 25+ | **Production Ready** 🚀