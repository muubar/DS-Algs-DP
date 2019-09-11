function insertionSort(arr) {
  var lastSortedIdx = 0;
  while (lastSortedIdx < arr.length) {
    for (let i = lastSortedIdx; i < arr.length; i++) {
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