# Multiples of 3 and 5
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
# The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

def sum_multiples(num):
    multiples = []
    i = 0
    while (i + 1) * num < 1000:
        i += 1
        multiples.append(i*num)
    return sum(multiples)

total_sum = sum_multiples(3) + sum_multiples(5)

print(total_sum)
