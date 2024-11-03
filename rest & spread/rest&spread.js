// in JavaScript, rest and spread operators are represented by three dots ...,
//  but they are used in different contexts and for different purposes.

// 1. Spread Operator (...)
// The spread operator is used to spread or expand elements of an iterable
//  (like an array or an object) into individual elements. It’s often used to make copies of arrays or objects,
//   combine them, or pass arguments to functions.

// Example 1: Spreading in Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread to combine two arrays
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Spreading in Objects

const user = { name: 'Amir', age: 30 };
const job = { title: 'Developer', location: 'Remote' };

// Using spread to combine two objects
const combinedUser = { ...user, ...job };
console.log(combinedUser); // Output: { name: 'Amir', age: 30, title: 'Developer', location: 'Remote' }


// Example 3: Passing Array Elements as Arguments to Functions

const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}

// Using spread to pass array elements as individual arguments
console.log(sum(...numbers)); // Output: 6


// 2. Rest Operator (...)
// The rest operator is used to collect multiple elements into an array. It’s often used in function
//  parameters to handle an indefinite number of arguments, or in destructuring to collect remaining elements.

// Example 1: Using Rest in Function Parameters

function addNumbers(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(addNumbers(1, 2, 3, 4)); // Output: 10

// Example 2: Using Rest in Array Destructuring

const nums = [1, 2, 3, 4, 5];
const [first, second, ...rest] = nums;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]



// Summary
// Spread (...): Expands elements in arrays, objects, or function arguments.
// Rest (...): Collects multiple elements into an array (useful in function parameters or destructuring).

