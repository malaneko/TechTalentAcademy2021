'''
Write a function to determine whether a given word contains at 
least one vowel (a, e, i, o, or u).
For example:
• “rhythm” is false;
• “syzygy” is false;
• “then” is true;
• “euoeae” is true
'''

'''
"aeiou"

'''

def vowel(example_word):
    for letter in example_word:
        if letter in "aeiou":
            return True
    return False


