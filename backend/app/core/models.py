LATEST_MODELS = {
    "anthropic": {
        "claude-4.6-sonnet": {"cost": 0.003},  # Feb 2026 benchmark leader
        "claude-4.6-opus": {"cost": 0.015}
    },
    "openai": {
        "codex-gpt-5.2": {"cost": 0.005},     # GitHub Copilot agent
        "gpt-5.2-thinking": {"cost": 0.010}
    },
    "google": {
        "gemini-3.0-pro": {"cost": 0.00035}    # Cheapest frontier
    }
}

PROVIDER_PRIORITY = [
    "anthropic",  # Best for coding autonomy
    "openai",     # GitHub integration
    "google"      # Cost optimizer
]