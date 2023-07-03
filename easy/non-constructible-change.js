
// O(nLogn) - Time | O(1) Space
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if(coins[i] > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coins[i];
  }
  
  return currentChange + 1;
}

console.log(nonConstructibleChange([1,2,4,5,9,41]));

7
[1,2,4,5,9,41];