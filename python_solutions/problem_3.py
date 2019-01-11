#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

def int_floor_sqrt(x):
	assert x >= 0
	i = 1
	while i * i <= x:
		i *= 2
	y = 0
	while i > 0:
		if (y + i)**2 <= x:
			y += i
		i //= 2
	return y

def smallest_prime_factor(n):
	assert n >= 2
	for i in range(2, int_floor_sqrt(n) + 1):
		if n % i == 0:
			return i
	return n  

def compute(n):
	while True:
		p = smallest_prime_factor(n)
		if p < n:
			n //= p
		else:
			return str(n)

if __name__ == "__main__":
	print(compute(600851475143))