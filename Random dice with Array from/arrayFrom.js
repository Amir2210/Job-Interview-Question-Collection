// Create an array named 'dice' with 100 elements
// Each element is a random number between 0 and 6
const dice = Array.from({ length: 100 }, () => Math.floor(Math.random() * 7))
console.log(dice)

function calcAvgDiceRoll(diceArray) {
  const sum = diceArray.reduce((acc, num) => acc + num, 0)
  const avg = Math.trunc(sum / diceArray.length)
  return avg
}
const avg = calcAvgDiceRoll(dice)
console.log('avg:', avg)



