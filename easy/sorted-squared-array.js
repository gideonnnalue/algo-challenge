
// O(n) Time | O(n) Space
function sortedSquaredArray(array) {
  const newArray = new Array(array.length);
  let start = 0;
  let end = array.length - 1;
  let pointer = end;
  while (end >= start) {
    if (Math.abs(array[start]) > Math.abs(array[end])) {
      newArray[pointer] = array[start] * array[start];
      start++;
    } else {
      newArray[pointer] = array[end] * array[end];
      end--;
    }
    pointer--;
  }
  // Write your code here.
  return newArray;
}

console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
