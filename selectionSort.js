function selectionSort(arr) {
  var lastSortedIdx = 0;

  while (lastSortedIdx !== arr.length - 1) {
    let min = arr[lastSortedIdx];
    let minIdx = 0;
    for (let i = lastSortedIdx; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }
    swap(lastSortedIdx, minIdx)
    lastSortedIdx++;
  }
  return arr;

  function swap(i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}