// Coding Challenge #3
// Robot and Talking Robot
// Add the missing functionality to the Robot class
// 1. Add a color property
// 2. Add the method discharge() – battery goes down to 0 with an interval
// 3. Add the method fightAnother() – robot with more battery power wins
// 4. In TalkingRobot use the right language (support 3 languages)


class Robot {
  static nextId = 101;
  constructor(type, battery, color) {
    this.id = Robot.nextId++;
    this.type = type
    this.battery = battery
    this.color = color
  }
  introduceSelf() {
    console.log(`hello im robot type ${this.type}, ID: ${this.id} and my battery is ${this.battery}%`)
  }
  meetAnother(otherRobot) {
    console.log(`hi ${this.type} im type: ${otherRobot.type} my ID is ${otherRobot.id}`)
  }
  charge() {
    let intervalId
    if (this.battery === 100) {
      console.log('you are fully charged 😃')
    }
    if (this.battery < 100) {
      console.log(`robot has ${this.battery}% battery 🔋`)
      intervalId = setInterval(() => {
        this.battery += 1
        console.log(`robot has ${this.battery}% battery 🔋`)
        if (this.battery === 100) {
          clearInterval(intervalId)
          intervalId = null
          console.log('you are fully charged 😃')
        }
      }, 1000);
    }
  }
  discharge() {
    let intervalId
    if (this.battery === 0) {
      console.log('no battery left 😢')
    }
    if (this.battery > 0) {
      console.log(`robot has ${this.battery}% battery 🔋`)
      intervalId = setInterval(() => {
        this.battery -= 1
        console.log(`robot has ${this.battery}% battery 🔋`)
        if (this.battery === 0) {
          clearInterval(intervalId)
          intervalId = null
          console.log('no battery left 😢')
        }
      }, 1000);
    }
  }
  fightAnother(otherRobot) {
    console.log('***** fight *****')
    if (this.battery === otherRobot.battery) {
      console.log('***** draw *****')
      console.log(`both robots have ${this.battery}% 🎈`)
      return
    }
    if (this.battery > otherRobot.battery) {
      console.log(`the winner is: ${this.type} with ${this.battery}% 🎉`)
    } else {
      console.log(`the winner is: ${otherRobot.type} with ${otherRobot.battery}% 🎉`)
    }
  }
  get batteryStatus() {
    console.log(`you have ${this.battery} %`)
  }
  set batteryStatus(level) {
    this.battery = level
    console.log(`your new battery is ${this.battery}`)
  }
  static getMeSomeRobots() {
    return [new Robot('king', 55, 'black'), new Robot('queen', 77, 'white')]
  }
}

const robot1 = new Robot('mecha', 66, 'red')
const robot2 = new Robot('cyber', 44, 'blue')
console.log(robot1)
robot1.introduceSelf()
robot2.introduceSelf()
robot1.meetAnother(robot2)
// robot1.discharge()
// robot1.charge()
robot1.fightAnother(robot2)
robot2.batteryStatus
robot2.batteryStatus = 99
console.log(Robot.getMeSomeRobots())



class TalkingRobot extends Robot {
  constructor(type, battery, lang) {
    super(type, battery)
    this.lang = lang
  }
  printSelf() {
    if (this.lang === 'english') {
      console.log(`hello im robot type: ${this.type}`)
    } else if (this.lang === 'japanese') {
      console.log(`こんにちは、ロボットタイプです: ${this.type}`)
    } else if (this.lang === 'russian') {
      console.log(`привет, я типа робот: ${this.type}`)
    } else {
      console.log(`cant support ${this.lang}`)
    }
  }
}

const talkingTom = new TalkingRobot('cat', 55, 'russian')
talkingTom.printSelf()