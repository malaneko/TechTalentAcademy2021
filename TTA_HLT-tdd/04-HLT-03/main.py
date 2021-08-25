'''
MPH to Knots
Write a function to convert a speed in miles per hour to knots.
(1 mph = 0.8689762 knots)
For example,
5 mph = 4.344881 knots

'''


def mph_to_knots(mph):

    knots = 1.15078 * mph             #conversion MPH to Knots 

    if mph >= 0:                        #speed values converted -> if positive
        return f"{knots} Knots"       
    else: 
        return "Better type correct speed value!"  #wrong values given

