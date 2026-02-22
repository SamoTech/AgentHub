from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

app = FastAPI(
    title="AgentHub - AI Orchestration Platform",
    description="Coordinate multiple AI providers with cost optimization",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class OrchestrateRequest(BaseModel):
    prompt: str
    provider: Optional[str] = "auto"
    max_tokens: int = 2000

class OrchestrateResponse(BaseModel):
    response: str
    provider_used: str
    estimated_cost: float
    tokens_used: int

PROVIDER_COSTS = {
    "openai": 0.002,
    "claude": 0.003,
    "gemini": 0.0015
}

@app.get("/")
async def root():
    return {
        "message": "AgentHub is live! 🚀",
        "docs": "/docs",
        "providers": list(PROVIDER_COSTS.keys())
    }

@app.post("/orchestrate")
async def orchestrate(request: OrchestrateRequest):
    providers = ["gemini", "openai", "claude"]
    selected_provider = request.provider if request.provider != "auto" else min(
        providers, key=lambda p: PROVIDER_COSTS[p]
    )
    
    tokens_used = min(len(request.prompt.split()) * 2, request.max_tokens)
    estimated_cost = (tokens_used / 1000) * PROVIDER_COSTS[selected_provider]
    
    response = f"AgentHub orchestrated your request using {selected_provider.upper()}. Tokens: {tokens_used}"
    
    return {
        "response": response,
        "provider_used": selected_provider,
        "estimated_cost": round(estimated_cost, 4),
        "tokens_used": tokens_used
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)