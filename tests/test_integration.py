from main import app


def test_full_flow():
    # Test complete orchestration
    response = client.post('/orchestrate', json={"prompt": "complex task"})
    assert response.status_code == 200
    assert 'latency' in response.json()
