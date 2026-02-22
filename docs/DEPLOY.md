## Deployment Guide

### Railway
```bash
railway add --image SamoTech/AgentHub:main
railway variables set REDIS_URL=...
```

### Fly.io
```bash
fly launch --image SamoTech/AgentHub:main
```

### VPS
```bash
ssh user@server
curl -fsSL https://get.docker.com | sh
docker-compose up -d
```