// https://projecteuler.net/problem=2
//
// Even Fibonacci numbers
//
// Each new term in the Fibonacci sequence is generated
// by adding the previous two terms. By starting with 1
// and 2, the first 10 terms will be:
//
//  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence
// whose values do not exceed four million,
// find the sum of the even-valued terms.
//

function fibEven(n, values = [1, 2]) {
  const toAdd = (values[0] % 2 === 0) ? values[0] : 0;
  if (values[1] > n) return toAdd;

  values = [values[1], values[0] + values[1]];
  return fibEven(n, values) + toAdd;
}

console.log(fibEven(4e6));
