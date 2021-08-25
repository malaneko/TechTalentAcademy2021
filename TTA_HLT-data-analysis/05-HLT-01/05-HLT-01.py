import numpy as np
print()
print("Task 1: Create a 1D array of numbers from 0 to 9")
print()

print("A 1D array of numbers from 0 to 9 looks like this:")
array_of_numbers = np.arange(0, 10)
print(array_of_numbers)

print()
print("______________________________________________________")
print()
print("Task 2: Create a 3×3 NumPy array of all True’s")
print()
print("A 3×3 NumPy array of all True’s looks like this:")

#True = 1
true_matrix = np.ones((3, 3), dtype=bool)
print(true_matrix)

print()
print("______________________________________________________")
print()
print("Task 3: Extract all odd numbers from array of 1-10")
print()

given_array = np.arange(1, 11)
print("Array of 1-10 looks like this:")
print(given_array)

print("All odd numbers from this array are:")
print(given_array[0:9:2])

print()
print("______________________________________________________")
print()
print("Task 4: Subtract 1 from each element of the array in Q3")
print()

print("The array from Q3:")
given_array = np.arange(1, 11)
print(given_array)
print("The array from Q3 after subtraction of 1 from each its element:")
print(given_array - 1)

print()
print("______________________________________________________")
print()
print("Task 5: Convert a 1D array to a 2D array with 2 rows")
print()

given_array = np.arange(1, 11)
print(given_array)
print("1D array converted to a 2D array with 2 rows looks like this:")
new_array = given_array.reshape(2,5)
print(new_array)

print()
print("______________________________________________________")
print()
print("Task 6: Create two 1D arrays a and b, stack these two arrays vertically,") 
print("use the np.dot and np.sum to calculate totals")
print()

a = np.arange(1, 6)
print("Array a:", a)
b = np.arange(6, 11)
print("Array b:", b)
print("Arrays a and b stacked vertically:")
stacked = np.vstack((a,b))
print(stacked)
print()
print("Calculating totals:")
multiplying = np.dot(a,b)
print("Multiplying:", multiplying)
sum_is = np.sum(stacked)
print("Sum:", sum_is)

print()
print("______________________________________________________")
print()
'''
print("Task 7: Create the following pattern without hardcoding.") 
print("Use only NumPy functions and the below input array")

# omitted for now & TBC

print()
print("______________________________________________________")
print()
'''
print("Task 8: In two arrays a ( 1,2,3,4,5) and b ( 4,5,6,7,8,9)") 
print("– remove all repeating items present in array b.")
print()

a = [1,2,3,4,5]
b = [4,5,6,7,8,9]
c = a + b
d = np.unique(c)
print("Values of arrays a and b with no repeating items:")
print(d)

print()
print("______________________________________________________")
print()
print("Task 9: Get all items between 5 and 10 from a and b and sum them together.")
print()

a = [1,2,3,4,5]
b = [4,5,6,7,8,9]
c = a + b
print(c)

# output:
# c = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9]
# i5=4 , i10=9 so sum of items between them: sum=5+6+7+8

d = np.arange(5,9)
print(d)
sum_i = np.sum(d)
print("The sum of items between 5 and 10 indices from a and b:")
print(sum_i)

print()
print("______________________________________________________")
print() 