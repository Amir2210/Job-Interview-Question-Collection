// In JavaScript, a closure is a powerful concept that combines a
//  function with its lexical environment at the time of
//   creation. This lexical environment includes any local
//    variables that were in scope when the function was defined.
//     Essentially, the function remembers the variables it had access to when it was created,
//      even after the outer function (that created it) has finished executing.



function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

const add5 = makeAdder(5)
// add 5 is now a function that return 5 + y
const res = add5(10)
console.log('res:', res)

//////////////////////////////////////////

function greet(name) {
  // Inner function with access to the outer function's parameter
  function displayName() {
    console.log("Hi " + name)
  }

  // Return the inner function (the closure)
  return displayName;
}

const myGreeting = greet("Alice");
myGreeting() // Output: Hi Alice

// In this example,
//  the greet function takes a name as input and defines an inner function displayName.
//   The inner function can access the name parameter even though it's defined in the outer function's scope.
//    This is because the displayName function creates a closure that remembers
//     the value of name when greet is called with "Alice".


/////////////////////////////

function createCounters() {
  const counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      console.log(i);
    });
  }
  return counters;
}

const myCounters = createCounters();
myCounters[0](); // Output: 0
myCounters[1](); // Output: 1
myCounters[2](); // Output: 2
// myCounters[10](); // there is only 3 items in the myCounter Array so we cant access item that not even exist in the array.
//each item in the array is a function that print the current index of the loop


// The createCounters function creates an array counters.
// Inside the loop, it creates anonymous functions and pushes them into the counters array.
// Here's the key part: even though the loop variable i is incremented in each iteration,
//  the anonymous function captures the value of i at the time it's created.
//  This is because each function remembers its own lexical environment,
//  which includes the value of i at that specific point in time.
// So, when you call myCounters[0], myCounters[1], and myCounters[2],
//  each function within the array refers to its own captured value of i,
//   resulting in the output 0, 1, and 2.


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}//3,3,3
//when using var it has function scope this means that variable "i" is accessible throughout the entire function
// and does not create a new a scope for each iteration, instead the "i" is shared across all iterations



for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}//0,1,2
// When you declare a variable with let, it has block scope.
// This means that each iteration of the loop creates a new, separate instance of the variable i.

