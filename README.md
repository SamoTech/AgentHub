# AgentHub 🚀 *(Always Updated)*

AI Agent Orchestration Platform - Coordinate **latest** AI agents (Claude 4.6 Sonnet, Codex GPT-5.2, Gemini 3.0) with 40-60% cost savings.

[![Stars](https://img.shields.io/github/stars/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/stargazers)
[![Forks](https://img.shields.io/github/forks/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/network/members)
[![License](https://img.shields.io/github/license/SamoTech/AgentHub)](LICENSE)
[![Sponsor](https://img.shields.io/badge/sponsor-9831FF?logo=github)](https://github.com/sponsors/SamoTech)
[![Tech](https://img.shields.io/badge/tech-stack-blueviolet?logo=github)](TECH.md)

## 🎯 Why AgentHub? *(Feb 2026)*

- 🤖 **Latest Agents**: Claude **4.6 Sonnet** (#1 coding), Codex **GPT-5.2**, Gemini **3.0 Pro**
- 💰 **Auto Cost Optimization** - Gemini default (cheapest), Claude for complex
- 📊 **Real-time Analytics** - Provider comparison, token tracking
- 🛡️ **Smart Failover** - Never lose requests
- 🔌 **MCP-Ready** - Enterprise protocol support
- ⚡ **Production FastAPI** - Redis + PostgreSQL

## 🚀 Live Demo (2 min)

```bash
git clone https://github.com/SamoTech/AgentHub.git
cd AgentHub/backend
pip install -r requirements.txt
python main.py
```

**[Open Interactive API](http://localhost:8000/docs)** → Test `/orchestrate`

**Sample:** `{"prompt": "Write agent code", "provider": "auto"}` → Uses **Gemini 3.0** (cheapest)

## 💎 What's New *(Latest Commit)*

✅ **Claude 4.6 Sonnet** - Feb 15 release, #1 coding autonomy [web:159]
✅ **Codex GPT-5.2** - GitHub Copilot agent [web:162]
✅ **Gemini 3.0 Pro** - 2M context, cheapest frontier [web:160]
✅ **Tech Stack** → [TECH.md](TECH.md) w/ Mermaid diagram
✅ **MIT License** + Sponsor tiers

## 💰 Sponsor & Get Early Access

[![GitHub Sponsors](https://github-profile-sponsors-svg.vercel.app/sponsor-1.svg?repo=AgentHub&style=flat-square)](https://github.com/sponsors/SamoTech)

**Tiers:** $5 (Early) | $25 (Priority) | $100+ (Enterprise)

## 🏗️ Architecture
```
React Dashboard → FastAPI Orchestrator → Claude 4.6 | Codex | Gemini 3.0
                                 ↓
                           Redis + PostgreSQL + MCP
```

**[Full Tech Stack](TECH.md)** | **[Live Backend](backend/main.py)**

## 🤝 Contribute
1. ⭐ Star + Fork
2. Add provider/test
3. PR → Merged fast!

**Built live by [Ossama Hashim](https://github.com/SamoTech)** - Cairo AI Architect

*Updated: Feb 22, 2026*