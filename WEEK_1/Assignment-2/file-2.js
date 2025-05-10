// Functions

// Assignment -1

// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

// Passing one string with the + operator will always concatenate
function sum(a, b) {
  return a + b;
}

let ans1 = sum(10, '10');
console.log(ans1);

// Normal function passing numbers
function sum(a, b) {
  return a + b;
}

let ans2 = sum(10, 10);
console.log(ans2);

// Assignment-2

// Write a function called canVote that returns
// true or false if the age of a user is > 18

function canVote(age) {
  return age >= 18 ? true : false;
}

console.log(canVote(17));
