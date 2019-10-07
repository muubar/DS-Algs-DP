function binarySearch(elem, arr) {
  const middle = Math.floor((arr.length - 1) / 2);
  if (arr[middle] === elem) return true;
  if (arr.length <= 1) return false;
  if (elem < arr[middle]) return binarySearch(elem, arr.slice(0, middle));
  return binarySearch(elem, arr.slice(middle + 1));
}


function binarySearchIterative(arr, val) {
  var start = 0;
  var end = arr.length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] > val) {
      end = middle - 1;
      continue;
    }
    start = middle + 1;
  }
  return false;
}