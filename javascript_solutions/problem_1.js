// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const getMultiples = (multiplesSet, starter, below) => {
  let i = 0
  do {
    i+=1
    multiplesSet.add(i*starter)
  } while(starter*(i+1) < below)
  return multiplesSet
}

const sumMultiples = (startNumbers, below) => {
  const multiplesSet = new Set()
  startNumbers.map(starter => {
    getMultiples(multiplesSet, starter, below)
  })
  const multiplesSetToArray = Array.from(multiplesSet)
  return multiplesSetToArray.reduce((a,b) => a + b, 0)
}

const multiples = [3,5]
const totalSum = sumMultiples(multiples, 1000)
console.log(totalSum)

