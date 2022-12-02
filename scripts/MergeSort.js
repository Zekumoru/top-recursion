function mergeSort(array) {
  if (array.length <= 1) return array;

  // Dividing process
  const middleIndex = Math.floor(array.length / 2);
  const leftPart = mergeSort(array.slice(0, middleIndex));
  const rightPart = mergeSort(array.slice(middleIndex, array.length));

  // Conquering (merging) process
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftPart.length || rightPointer < rightPart.length) {
    const index = leftPointer + rightPointer;

    if (leftPart[leftPointer] < rightPart[rightPointer] || rightPointer >= rightPart.length) {
      array[index] = leftPart[leftPointer];
      leftPointer++;
    }
    else {
      array[index] = rightPart[rightPointer];
      rightPointer++;
    }
  }

  return array;
}

const input = [3, 6, 7, 2, 8, 1, 4, 5];
console.log(`Before sort: ${input}`);
console.log(`After sort: ${mergeSort(input)}`);
