// loops

// Assignment
// Write a function called sum that finds the sum from 1 to a number

function sum(no) {
  let total = 0;
  for (let i = 1; i <= no; i++) {
    total += i;
  }
  return total;
}

console.log(sum(10));
