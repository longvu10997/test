function thirdScore(score) {
  if (score.length < 3) {
    return;
  }

  let first = score[0];
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 1; i < score.length; i++) {
    if (score[i] > first) {
      third = second;
      second = first;
      first = score[i];
    } else if (score[i] > second) {
      third = second;
      second = score[i];
    } else if (score[i] > third) {
      third = score[i];
    }
  }
  return third;
}

let testScore = [10, 3, 9, 4, 5, 8];
let thirdHighestScore = thirdScore(testScore);
document.write(`ThirdHighestScore: ${thirdHighestScore}`);
