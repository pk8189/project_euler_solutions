# Multiples of 3 and 5
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
# The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

def get_multiples(multiples_set, starter, below):
    i = 0
    while (i + 1) * starter < below:
        i += 1
        multiples_set.add(i*starter)
    return multiples_set

def sum_multiples(multiples, below):
    multiples_set = set([])
    for multiple in multiples:
        get_multiples(multiples_set, multiple, below)
    return sum(multiples_set)

multiples = [3,5]
total_sum = sum_multiples(multiples, 1000)
print(total_sum)
