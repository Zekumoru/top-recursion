const fibsRec = (n) => (n <= 3) ? [0, 1, 1] : [...fibsRec(n - 1), fibsRec(n - 2)[fibsRec(n - 2).length - 1] + fibsRec(n - 1)[fibsRec(n - 1).length - 1]];
console.log(fibsRec(8));
