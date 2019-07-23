function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivot = mot(start, end);
    partition(pivot);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    return arr;
  }


  function partition(pivot) {
    swap(pivot, end);
    var current = start;
    for (let i = start; i < end - 1; i++) {
      if (arr[i] <= arr[end]) {
        swap(i, current);
        current++;
      }
    }
    swap(end, current);
  }

  function mot(start, end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[start] > arr[mid]) swap(start, mid)
    if (arr[start] > arr[end]) swap(start, end)
    if (arr[mid] > arr[end]) swap(mid, end)
    return mid;
  }

  function swap(i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}