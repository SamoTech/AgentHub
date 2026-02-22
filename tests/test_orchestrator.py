from fastapi import FastAPI
from fastapi.testclient import TestClient
import pytest

from main import app

client = TestClient(app)


def test_health():
    response = client.get('/health')
    assert response.status_code == 200


def test_orchestrate():
    response = client.post('/orchestrate', json={"prompt": "test"})
    assert response.status_code == 200
    assert 'agent' in response.json()
