//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?


const intFloorSqrt = (x) => {
    if (x < 0)
        throw "negative num supplied to sqrt"
    let i = 1
    do {
        i *= 2
    } while(i * i <= x)
    y = 0
    do {
        if ((y + 1)**2 <= x)
            y += i
        i /= 2 
    } while (i > 0)
    return y
}

const smallest_prime_factor = (n) => {
    if (n < 2)
        throw "n is less than 2"
    for (i = 2; i < intFloorSqrt(n) +1; i++) { 
        if (n % i == 0) {
            return i
        }
    }
    return n
}

const compute = (n) => {
    while (true) {
        let p = smallest_prime_factor(n)
        if (p < n) {
            n /= p
        }
        else
            return n.toString()
    }    

}

console.log(compute(600851475143))