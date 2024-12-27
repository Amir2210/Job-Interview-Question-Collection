function binarySearchIterative(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid // הערך נמצא, מחזירים את האינדקס
    } else if (arr[mid] < target) {
      left = mid + 1 // הערך המבוקש נמצא בצד הימני
    } else {
      right = mid - 1 // הערך המבוקש נמצא בצד השמאלי
    }
  }

  return -1 // הערך לא נמצא
}

// דוגמה לשימוש
const array = [1, 3, 5, 7, 9, 11, 13]
const target = 3
console.log(binarySearchIterative(array, target)) // פלט: 3
