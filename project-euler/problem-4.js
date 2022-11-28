// https://projecteuler.net/problem=4
//
// Largest palindrome product
//
// A palindromic number reads the same both ways.
// The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the
// product of two 3-digit numbers.
//

function getFactors(num, digits = 1) {
  const even = num % 2 === 0;
  const increment = even ? 1 : 2;
  const max = Math.sqrt(num);
  const factors = (digits === 1) ? [[1, num]] : [];

  for (let curFactor = (10 ** (digits - 1)) + (even ? 2 : 3); curFactor <= max; curFactor += increment) {
    if (num % curFactor !== 0) continue;

    const pair = num / curFactor;
    if (String(pair).length !== digits) continue;

    factors.push([curFactor, pair]);
  }

  return factors;
}

function getPalindrome(n, digits) {
  if (String(n).length === 1) return n;

  const strNum = [String(n)];
  for (let i = strNum[0].length; i < digits; i++) {
    strNum.unshift('0');
  }

  const strNumReverse = [...String(n)].reverse();
  for (let i = strNumReverse.length; i < digits; i++) {
    strNumReverse.push('0');
  }

  return +strNum.concat(strNumReverse).join('');
}

function getLargestPalindromeProduct(digits, n = -1) {
  if (n < 0) n = 10 ** digits - 1;
  if (n < 10 ** (digits - 1)) return;

  const palindrome = getPalindrome(n, digits);
  const factors = getFactors(palindrome, digits);

  if (factors.length) return factors;
  return getLargestPalindromeProduct(digits, n - 1);
}

console.log(getLargestPalindromeProduct(5));
