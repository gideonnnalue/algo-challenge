
// O(n) space | O(n) time
function tournamentWinner(competitions, results) {
  const scores = {};
  let currentWinner = "";
  for (let i = 0; i < results.length; i++) {
    const idx = results[i] === 1 ? 0 : 1;
    if (scores[competitions[i][idx]]) {
      scores[competitions[i][idx]] += 3;
    } else {
      scores[competitions[i][idx]] = 3;
    }
    if (
      scores[currentWinner] < scores[competitions[i][idx]] ||
      !currentWinner
    ) {
      currentWinner = competitions[i][idx];
    }
  }
  
  return currentWinner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
