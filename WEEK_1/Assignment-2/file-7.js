// Arrays of Objects

//Assignment
// Write a function that takes an array of users
// as inputs and returns only the users who are more than 18 years old

let users = [
  { fname: 'keeyan', age: 17 },
  { fname: 'aditya', age: 12 },
  { fname: 'jiya', age: 14 },
  { fname: 'rahul', age: 56 },
];

let ans = users.filter((value) => {
  return value.age >= 18;
});
console.log(ans);
