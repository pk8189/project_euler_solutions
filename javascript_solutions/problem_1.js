// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const getSum = (accumulator, currentValue) => accumulator + currentValue
const sumMultiples = (num) => {
  const multiples = []
  let i = 0
  do {
    i+=1
    multiples.push(i*num)
  } while (num*(i+1) < 1000)
  return multiples.reduce(getSum)
}
const totalSum = sumMultiples(3) + sumMultiples(5)

return console.log(totalSum)


