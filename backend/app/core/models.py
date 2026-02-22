from pydantic import BaseModel
from typing import Dict, Optional
from enum import Enum

class Provider(str, Enum):
    ANTHROPIC = "anthropic"
    OPENAI = "openai"
    GOOGLE = "google"

LATEST_MODELS: Dict[Provider, Dict[str, Dict[str, float]]] = {
    Provider.ANTHROPIC: {
        "claude-4.6-sonnet": {"cost_per_1k_input": 0.003, "context_window": 2000000},  # Feb 2026 leader
        "claude-4.6-opus": {"cost_per_1k_input": 0.015, "context_window": 2000000}
    },
    Provider.OPENAI: {
        "codex-gpt-5.2": {"cost_per_1k_input": 0.005, "context_window": 128000},     # GitHub Copilot
        "gpt-5.2-thinking": {"cost_per_1k_input": 0.010, "context_window": 128000}
    },
    Provider.GOOGLE: {
        "gemini-3.0-pro": {"cost_per_1k_input": 0.00035, "context_window": 2000000}   # Cheapest
    }
}

PROVIDER_PRIORITY = [Provider.ANTHROPIC, Provider.OPENAI, Provider.GOOGLE]

class OrchestrateRequest(BaseModel):
    prompt: str
    provider: Optional[Provider] = None
    model: Optional[str] = None
    max_tokens: int = 4000

class Usage(BaseModel):
    input_tokens: int
    output_tokens: int
    total_tokens: int
    cost: float
