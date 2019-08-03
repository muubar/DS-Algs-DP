function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end > start) {
    const mid = mot(start, end);
    const pivot = partition(mid, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    return arr;
  }
  return arr;


  function partition(mid, start, end) {
    swap(end, mid);
    var swapIdx = start - 1;

    for (let i = start; i < end; i++) {
      if (arr[i] <= arr[end]) {
        swapIdx++;
        swap(i, swapIdx);
      }
    }
    swap(end, swapIdx + 1);
    return swapIdx + 1;
  }

  function mot(start, end) {
    const mid = Math.ceil((start + end) / 2);
    if (arr[start] > arr[mid]) swap(start, mid);
    if (arr[mid] > arr[end]) swap(mid, end);
    if (arr[start] > arr[end]) swap(start, end);
    return mid;
  }

  function swap(i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}