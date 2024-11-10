// JavaScript Prototypes

Array.prototype.printItems = function () {
  console.log('print items')
  this.forEach((item, index) => console.log(`item: ${item}, index: ${index}`))
}

const numbers = [1, 2, 3]

numbers.printItems()