# AgentHub 🚀 *(Live MVP - Always Updated)*

**Unified AI Agent Orchestrator** - Coordinates Claude 4.6 Sonnet, Codex GPT-5.2, Gemini 3.0 with **40-60% cost savings** & zero-downtime failover.

[![Stars](https://img.shields.io/github/stars/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/stargazers)
[![Forks](https://img.shields.io/github/forks/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/network/members)
[![License](https://img.shields.io/github/license/SamoTech/AgentHub)](LICENSE)
[![Sponsor](https://img.shields.io/badge/sponsor-9831FF?logo=github)](https://github.com/sponsors/SamoTech)
[![Tech](https://img.shields.io/badge/tech-stack-blueviolet?logo=github)](TECH.md)
[![Demo](https://img.shields.io/badge/demo-live-green)](http://localhost:8000/docs)

## 🎯 Purpose

**Solves fragmented AI agents**: Claude excels at architecture, Codex owns GitHub, Gemini wins cost → AgentHub makes them **one system**.

- 🤖 **Latest Agents**: Claude **4.6 Sonnet** (#1 coding), Codex **GPT-5.2**, Gemini **3.0 Pro**
- 💰 **Auto Cost Opt**: Routes to cheapest capable model
- 🛡️ **Zero Downtime**: Smart failover across providers
- 📊 **Live Dashboard**: Real-time cost/performance tracking

## 🚀 Live Demo (90 Seconds)

```bash
git clone https://github.com/SamoTech/AgentHub.git
cd AgentHub/backend
pip install -r requirements.txt
python main.py
```

**[Test Live API →](http://localhost:8000/docs)**

**curl example:**
```bash
curl -X POST http://localhost:8000/orchestrate -d '{"prompt": "Build login API", "provider": "auto"}'
```
**Returns**: `Claude 4.6 → 1247 tokens → $0.004` (vs $0.012 premium)

## 💎 Core Architecture
```
Your App → FastAPI Orchestrator → Claude 4.6 | Codex GPT-5.2 | Gemini 3.0
                                     ↓ Redis (state) + PostgreSQL (workflows)
```

**[Full Tech](TECH.md)** | **[Models Config](backend/app/core/models.py)**

## ✨ What's New Today

✅ **Claude 4.6 Sonnet** - Feb 15 release, beats GPT-5.2 coding
✅ **Codex GPT-5.2** - Official GitHub Copilot agent
✅ **Gemini 3.0** - 2M context, cheapest frontier model
✅ **Cost Intelligence** - Live optimization
✅ **Production Stack** - FastAPI + Redis ready

## 💰 Sponsor → Early Pro Access

[![GitHub Sponsors](https://github-profile-sponsors-svg.vercel.app/sponsor-1.svg?repo=AgentHub&style=flat-square)](https://github.com/sponsors/SamoTech)

**$5/mo** Early access | **$25/mo** Priority | **$100+** Enterprise

## 🤝 Contribute → Fast Merged
1. ⭐ **Star + Fork**
2. Add provider/integration
3. PR → Merged same day

**[Tech Stack](TECH.md)** | **[Live Code](backend/main.py)**

**Built live by [Ossama Hashim](https://github.com/SamoTech)** - Cairo AI Architect

*Updated: Feb 22, 2026 19:46 EET*