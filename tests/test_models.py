from models import get_provider_for_task


def test_code_routing():
    provider = get_provider_for_task('write python code')
    assert provider == 'claude'


def test_cost_calculation():
    cost = calculate_cost('claude', 1000)
    assert cost == 0.003
