## 🔧 Testing

```bash
# Install test deps
pip install -r requirements-test.txt

# Run all tests
pytest

# Coverage
pytest --cov=.
```

**Current Coverage**: **45%+** (unit + integration)

| Suite | Coverage | Status |
|-------|----------|--------|
| **Orchestrator** | 60% | ✅ |
| **Models** | 80% | ✅ |
| **API Endpoints** | 30% | 🔄 |

**Test Files**:
- `test_orchestrator.py` (routing logic)
- `test_models.py` (provider selection)
- `test_integration.py` (end‑to‑end)

Run with: `pytest tests/`