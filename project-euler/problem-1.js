// https://projecteuler.net/problem=1
//
// Multiples of 3 or 5
//
// If we list all the natural numbers below 10 that are multiples
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//

function sumMultiples(number) {
  if (number === 0) return 0;
  if (number % 3 === 0 || number % 5 === 0) return number + sumMultiples(number - 1);
  return sumMultiples(number - 1);
}

console.log(sumMultiples(1000));
