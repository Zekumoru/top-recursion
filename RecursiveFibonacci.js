function fibsRec(n) {
  return (n <= 3) ? [1, 1, 0] : [fibsRec(n - 1)[0] + fibsRec(n - 2)[0]].concat(fibsRec(n - 1));
}

console.log(fibsRec(8));
