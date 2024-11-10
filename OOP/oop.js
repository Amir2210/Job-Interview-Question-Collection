// JavaScript Prototypes

Array.prototype.printItems = function () {
  console.log('print items')
  this.forEach((item, index) => console.log(`item: ${item}, index: ${index}`))
}

const numbers = [1, 2, 3]

numbers.printItems()

// Constructor Function

function User(name, pass) {
  this.name = name
  this.pass = pass
}


//Adding a prototype to the User Constructor
User.prototype.checkIfPass = function (pass) {
  return pass === this.pass
}

const user1 = new User('bobi', 'secret')
console.log('user1:', user1)

const isPass = user1.checkIfPass('secret')
console.log('result:', isPass)