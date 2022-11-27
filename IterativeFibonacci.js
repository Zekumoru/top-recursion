function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let current = 1;
  let previous = 0;

  const sequence = [previous, current];
  for (let i = 2; i < n; i++) {
    const sum = current + previous;
    sequence.push(sum);
    previous = current;
    current = sum;
  }

  return sequence;
}

console.log(fibs(8));
