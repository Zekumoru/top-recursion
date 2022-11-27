function fibsRec(n) {
  if (n <= 2) return 1;
  return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(8));
