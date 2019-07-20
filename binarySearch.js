function binarySearch(elem, arr) {
  const middle = Math.floor((arr.length - 1) / 2);
  if (arr[middle] === elem) return true;
  if (arr.length === 1) return false;
  if (elem < arr[middle]) return binarySearch(elem, arr.slice(0, middle));
  return binarySearch(elem, arr.slice(middle + 1));
}