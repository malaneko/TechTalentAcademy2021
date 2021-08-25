from main import wind_speed  

def test_wind_speed_below1():
    assert wind_speed(.8) == "Calm"  

def test_wind_speed_above1():
    assert wind_speed(1) == "Light air"  

def test_wind_speed_above4():
    assert wind_speed(5) == "Light breeze"  

def test_wind_speed_above6():
    assert wind_speed(8) == "Gentle breeze" 

def test_wind_speed_above10():
    assert wind_speed(11) == "Moderate breeze"  

def test_wind_speed_above16():
    assert wind_speed(17) == "Fresh breeze"  

def test_wind_speed_above21():
    assert wind_speed(22) == "Strong breeze"  

def test_wind_speed_above27():
    assert wind_speed(28) == "Near gale"  

def test_wind_speed_above33():
    assert wind_speed(35) == "Gale"  

def test_wind_speed_above40():
    assert wind_speed(41) == "Strong gale"  

def test_wind_speed_above47():
    assert wind_speed(48) == "Storm"  

def test_wind_speed_above55():
    assert wind_speed(59) == "Violent storm"  

def test_wind_speed_above64():
    assert wind_speed(64) == "Hurricane"  

def test_wind_speed_raises_error():
    assert wind_speed(-1) == "error"

