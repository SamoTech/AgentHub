## API Documentation

### `/orchestrate` (POST)

```bash
curl -X POST http://localhost:8000/orchestrate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write Python API", "provider": "auto"}'
```

**Response**:
```json
{
  "agent": "claude",
  "output": "...",
  "tokens": 1250,
  "cost": "$0.00375",
  "latency": "1402ms"
}
```

### `/health` (GET)
Status check for production monitoring.