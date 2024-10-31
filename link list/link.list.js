class ListNode {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

function numberToList(num) {
  let head = null // is a reference to the first node of the linked list. Initially, it's set to null
  let current = null //current is a reference to the current node while building the linked list. It's also initially set to null.

  for (let digit of String(num)) {
    let newNode = new ListNode(Number(digit))
    if (head === null) {
      head = newNode
      current = newNode
    } else {
      current.next = newNode
      current = current.next
    }
  }

  return head
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0 //Variable to keep track of the carry from one digit sum to the next.

  while (l1 !== null || l2 !== null) { //The while loop continues as long as there are nodes left in either l1 or l2.
    let x = (l1 !== null) ? l1.value : 0
    let y = (l2 !== null) ? l2.value : 0
    let sum = carry + x + y
    carry = Math.floor(sum / 10) // get the left digit of the sum number (1)
    current.next = new ListNode(sum % 10) // get the unit digit and create new ListNode
    current = current.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return dummyHead.next
}


let num1 = 123
let num2 = 456

let list1 = numberToList(num1)
// console.log('list1:', list1)
let list2 = numberToList(num2)

let res = addTwoNumbers(list1, list2)

console.log('res:', res)