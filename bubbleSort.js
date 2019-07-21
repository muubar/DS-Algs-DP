function bubbleSort(arr) {
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;

  function swap(i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}