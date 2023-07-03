// O(n) Time | O(1) space
function isValidSubsequence(array, sequence) {
  let marker = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[marker]) {
      marker++;
    }
    if(marker === sequence.length) return true
  }
  return false;
}
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
