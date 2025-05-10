// Arrays

//Write a function that takes an array of numbers as input, and returns a new
// array with only even values. Read about filter in JS

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let ans = arr.filter((value) => {
  return value % 2 == 0;
});

console.log(ans);
