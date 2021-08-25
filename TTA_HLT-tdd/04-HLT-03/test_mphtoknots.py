from main import mph_to_knots 

def test_mph_to_knots_positive_values():
    assert mph_to_knots(10) == '11.5078 Knots'

def test_mph_to_knots_error():
    assert mph_to_knots(-1) == "Better type correct speed value!"





