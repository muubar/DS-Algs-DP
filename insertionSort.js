function insertionSort(arr) {
  var lastSortedIdx = 1;
  while (lastSortedIdx !== arr.length - 1) {
    for (let i = lastSortedIdx; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) insert(i + 1, i);
      lastSortedIdx++;
    }
  }
  return arr;

  function insert(i1, i2) {
    while (arr[i1] < arr[i2]) {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
      i1--;
      i2--;
    }
  }
}