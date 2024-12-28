class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  print() {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    console.log(result.join(" -> "))
  }
}

function reverseLinkedList(head) {
  let prev = null
  let curr = head

  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}


// יצירת רשימה מקושרת והדפסתה
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log("רשימה מקורית:");
list.print();

// הפיכת הרשימה
list.head = reverseLinkedList(list.head);

console.log("רשימה הפוכה:");
list.print();