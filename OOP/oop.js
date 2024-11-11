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

// class and inheritance

class Pet {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  display() {
    console.log(`${this.name}'s score is: ${this.score}`)
  }
  feed(food) {
    console.log(this.name + ' eatings ' + food)
  }
}

const pet1 = new Pet('joy', 22)
const pet2 = new Pet('bobi', 10)

pet1.display()
pet2.feed('pizza')

console.log(pet1.display === pet2.display) // true

class VirtualPet extends Pet {
  constructor(name, score, superPower) {
    super(name, score)
    this.superPower = superPower
  }
  // Override function to extend behavior
  display() {
    console.log('this is virtual pet')
    console.log('my super power is: ', this.superPower)
    //use the display function from the superClass Pet
    super.display()
  }
}

const virtualPet1 = new VirtualPet('loka', 33, 'run super fast')
virtualPet1.display()

//Static class members

class Person {
  static id = 100
  constructor(name, lastName) {
    this.id = ++Person.id
    this.name = name
    this.lastName = lastName
  }

  static getPersons() {
    return [new Person('tal', 'yankolvocich'), new Person('shay', 'yankolovich')]
  }
}

const person1 = new Person('amir', 'yankolovich')
console.log('person1:', person1)
console.log(Person.getPersons())
console.log(person1.__proto__)
console.log(person1.__proto__.__proto__)
console.log(person1.__proto__.__proto__.__proto__)