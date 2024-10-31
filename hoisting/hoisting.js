// Hoisting in JavaScript refers to the behavior where variable and function declarations are conceptually moved,
//  or hoisted, to the top of their scope before code execution.
//   This means you can access and use functions and variables even before they are declared in your code.

// Here's a breakdown of what gets hoisted and how it works:

// Hoisted Elements:

// Function Declarations: Function declarations are entirely hoisted to the top of their scope
//  (global or function scope). You can call a function before its declaration in the code.
// Variable Declarations (but not Initializations): Only the declarations of variables are hoisted,
//  not their assignments (initializations).
//   This means you can reference a variable before its declaration, but trying to use it before initialization will result in undefined.
// Points to Remember:

// Let and Const: Let and const variables are not hoisted.
//  They are treated differently and cannot be accessed before their declaration.
// Scope: Hoisting applies within the scope where the variable or function is declared.
//  Global declarations are hoisted to the global scope, and function declarations are hoisted to the function scope.
// Understanding Hoisting with Examples:

// Example 1: Function Hoisting

console.log(greet("Bob")); // This works!

function greet(name) {
  return "Hello, " + name;
}
// In this example, greet is a function declaration. Even though it's declared after the console.log statement,
//  it's hoisted to the top of its scope (global scope in this case), allowing us to call it before its definition.

// Example 2: Variable Declaration Hoisting

console.log(message); // This results in undefined

var message = "Hoisting at work!";
// Here, the variable message is declared using var (hoisted), but it's not initialized until the next line.
//  So, when console.log tries to access message, it hasn't been assigned a value yet, resulting in undefined.

// Example 3: Let and Const are not Hoisted

console.log(myName); // This throws a ReferenceError

let myName = "Alice";
// Since let is not hoisted, trying to access myName before its declaration results in a ReferenceError.
// Why Hoisting Can Be Tricky:
// Hoisting can lead to unexpected behavior if not understood properly.
//  It's generally recommended to avoid relying on hoisting and explicitly declare variables
//   with let or const to improve code clarity and avoid potential errors.



