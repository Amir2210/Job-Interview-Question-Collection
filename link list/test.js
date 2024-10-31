class NodeList {
  constructor(value = 0, next = null) {
    this.value = value,
      this.next = next
  }
}

function numTolist(number) {
  let headNode = null
  let currNode = null

  for (let digit of String(number)) {
    let newNode = new NodeList(Number(digit))
    if (headNode === null) {
      headNode = newNode
      currNode = newNode
    } else {
      currNode.next = newNode
      currNode = currNode.next
    }
  }
  return headNode
}

function sumTwoLists(list1, list2) {
  let headNode = new NodeList(0)
  let currNode = headNode
  let carry = 0

  while (list1 !== null || list2 !== null) {
    let x = (list1 !== null) ? list1.value : 0
    let y = (list2 !== null) ? list2.value : 0
    let sum = x + y + carry
    carry = Math.floor(sum / 10)
    currNode.next = new NodeList(sum % 10)
    currNode = currNode.next

    if (list1 !== null) list1 = list1.next
    if (list2 !== null) list2 = list2.next
  }
  if (carry > 0) {
    currNode.next = new NodeList(carry)
  }
  return headNode.next
}


const num1 = 123
const num2 = 456

const l1 = numTolist(num1)
const l2 = numTolist(num2)

const res = sumTwoLists(l1, l2)

console.log('res:', res)