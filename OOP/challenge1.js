// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h 


function Car(make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(this.speed)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(this.speed)
}

const car1 = new Car('bmw', 100)
const car2 = new Car('mercedes', 130)

car2.accelerate()
car1.brake()
car2.accelerate()
car1.brake()
car1.accelerate()
car1.accelerate()
car1.accelerate()
car2.accelerate()
car2.brake()
car2.brake()
car2.brake()
car2.accelerate()
car1.brake()

console.log('car1:', car1)
console.log('car1:', car2)

