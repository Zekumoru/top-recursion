// https://projecteuler.net/problem=3
//
// Largest prime factor
//
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600,851,475,143?
//

function primeFactors(n, divisor = 2) {
  if (n <= 2) return [];
  if (n % divisor === 0) return [divisor, ...primeFactors(Math.floor(n / divisor), divisor + 1)];
  return primeFactors(n, divisor + 1);
}

function largestPrimeFactor(n, divisor = 2) {
  if (n <= 2) return divisor - 1;
  if (n % divisor === 0) return largestPrimeFactor(Math.floor(n / divisor), divisor + 1);
  return largestPrimeFactor(n, divisor + 1);
}

const input = 600851475143;
console.log(primeFactors(input));
console.log(largestPrimeFactor(input));
