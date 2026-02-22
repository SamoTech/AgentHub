# AgentHub 🚀

AI Agent Orchestration Platform - Coordinate multiple AI providers (OpenAI, Claude, Gemini) with cost optimization, real-time dashboard, and MCP support.

[![Stars](https://img.shields.io/github/stars/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/stargazers)
[![Forks](https://img.shields.io/github/forks/SamoTech/AgentHub)](https://github.com/SamoTech/AgentHub/network/members)

## 🎯 Why AgentHub?

- 🤖 **Multi-provider orchestration** (OpenAI, Claude, Gemini, Azure)
- 💰 **Automatic cost optimization** - save 40-60% on API costs
- 📊 **Real-time dashboard** - monitor usage, costs, and performance
- 🛡️ **Smart failover** - automatic provider switching on failure
- 🔌 **MCP-ready** - Model Context Protocol for enterprise integration
- ⚡ **Production-ready** - FastAPI, Redis, PostgreSQL

## 🚀 Quick Start (2 minutes)

```bash
git clone https://github.com/SamoTech/AgentHub.git
cd AgentHub/backend
pip install uv
uv venv
source .venv/bin/activate
uv pip install -e .
uvicorn app.main:app --reload --port 8000
```

Visit **http://localhost:8000/docs** for interactive API.

## 🏗️ Architecture
```
Frontend Dashboard (React/Vue)
           ↓ GraphQL/WebSocket
FastAPI Backend (FastAPI + Redis + PostgreSQL)
           ↓ Agent Orchestrator
OpenAI | Claude | Gemini | Azure OpenAI
           ↓ MCP Gateway
Enterprise Tools & Custom APIs
```

## 💎 Core Features Live Now

✅ **Unified API** - Single endpoint for all providers  
✅ **Cost optimization** - Auto-selects cheapest provider  
✅ **Real-time analytics** - Track usage/costs per user  
✅ **Automatic failover** - Never lose a request  
✅ **Interactive docs** - Swagger/OpenAPI ready  

## 💰 Sponsors

[Sponsor me](https://github.com/sponsors/SamoTech) 🚀

**Built by [Ossama Hashim](https://github.com/SamoTech)** - Cairo-based AI systems architect