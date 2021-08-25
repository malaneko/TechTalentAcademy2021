'''
Beaufort Scale
Write a function to categorise a wind speed in knots according to 
the Beaufort Wind Scale.
(https://www.metoffice.gov.uk/weather/guides/coast-andsea/beaufort-scale)
For example:
Given 6, the function should return “Light breeze”.
Given 59, the function should return “Violent storm”.

< 1 "Calm"

1-3 "Light air"

4-6 "Light breeze"

7-10 "Gentle breeze"

11-16 "Moderate breeze"

17-21 "Fresh breeze"

22-27 "Strong breeze"

28-33 "Near gale"

34-40 "Gale"

41-47 "Strong gale"

48-55 "Storm"

56-63 "Violent storm"

64 "Hurricane"
'''

def wind_speed(knots):


    if knots >= 64:
        return "Hurricane"   

    if knots >= 55:
        return "Violent storm" 

    if knots >= 47:
        return "Storm" 

    if knots >= 40:
        return "Strong gale" 

    if knots >= 33:
        return "Gale" 

    if knots >= 27:
        return "Near gale" 

    if knots >= 21:
        return "Strong breeze"  

    if knots >= 16:
        return "Fresh breeze" 

    if knots >= 10:
        return "Moderate breeze"

    if knots >= 6:
        return "Gentle breeze"

    if knots >= 4:
        return "Light breeze"  

    if knots >= 1:
        return "Light air"  
  
    else: 
        return "Calm"            


