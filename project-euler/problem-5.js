// https://projecteuler.net/problem=5
//
// Smallest multiple
//
// 2520 is the smallest number that can be divided by
// each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?
//

function smallestMultiple(divisor, n = 1) {
  for (let i = 1; i <= divisor; i++) {
    if (n % i === 0) continue;
    return smallestMultiple(divisor, n + 1);
  }
  return n;
}

function smallestMultipleIterative(divisor) {
  let number = 0;

  let result;
  while (!result) {
    number++;
    result = number;

    for (let i = 1; i <= divisor; i++) {
      if (number % i === 0) continue;
      result = null;
    }
  }

  return result;
}

console.log(smallestMultipleIterative(10));
