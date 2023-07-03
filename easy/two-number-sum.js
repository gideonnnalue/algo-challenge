// O(n^2)-Time |  0(1)-Space
function twoNumberSumOne(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// O(n)-Time |  0(n)-Space
function twoNumberSumTwo(array, targetSum) {
  const sumHash = {};
  for (let i = 0; i < array.length; i++) {
    const sumNum = targetSum - array[i];
    if (sumHash[sumNum.toString()]) {
      return [array[i], sumNum];
    } else {
      sumHash[array[i]] = true;
    }
  }

  return [];
}

// O(nLog(n))-Time | O(1)-Space
function twoNumberSumThree(array, targetSum) {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const currSum = array[start] + array[end];
    if (currSum === targetSum) {
      return [array[start], array[end]];
    }
    if (currSum > targetSum) {
      end--;
    } else if (currSum < targetSum) {
      start++;
    }
  }
  return [];
}

console.log(twoNumberSumOne([3, 5, -4, 8, 11, 1, -1, 6], 10))
