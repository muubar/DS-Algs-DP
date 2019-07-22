function mergeSort(arr) {
  if (arr.length > 1) {
    const middleIdx = Math.ceil((arr.length - 1) / 2)
    var left = arr.slice(0, middleIdx);
    var right = arr.slice(middleIdx);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;


  function merge(left, right, arr) {
    var leftIdx = 0, rightIdx = 0, arrIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      //both are not completely consumed
      if (left[leftIdx] < right[rightIdx]) {
        arr[arrIdx] = left[leftIdx];
        leftIdx++;
        arrIdx++;
        continue;
      }
      arr[arrIdx] = right[rightIdx];
      rightIdx++;
      arrIdx++
    }
    // decide which side is not completely consumed yet (IF ANY!)
    const remaining = leftIdx < left.length ? left : (rightIdx < right.length ? right : null);
    if (remaining) arr.splice(arrIdx, arr.length - arrIdx, ...remaining.slice(remaining === left ? leftIdx : rightIdx))
  }
}