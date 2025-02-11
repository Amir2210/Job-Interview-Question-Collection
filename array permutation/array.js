const arr1 = [1, 2, 3]
const arr2 = [3, 2, 1]

function arePermutations(a, b) {
  if (a.length !== b.length) {
    return false
  }

  const sortA = a.slice().sort((a, b) => a - b)
  const sortB = b.slice().sort((a, b) => a - b)

  return JSON.stringify(sortA) === JSON.stringify(sortB)
}

const result = arePermutations(arr1, arr2)
// console.log(result)

function arePermutationsMap(a, b) {
  if (a.length !== b.length) {
    return false
  }

  const countMap = {}

  for (const num of a) {
    countMap[num] = (countMap[num] || 0) + 1
  }

  for (const num of b) {
    if (!countMap[num] === num) {
      return false
    }
    countMap[num]--
  }
  return true
}

const result2 = arePermutationsMap(arr1, arr2)
console.log(result2)
