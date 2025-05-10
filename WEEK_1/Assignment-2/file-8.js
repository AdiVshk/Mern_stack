// Object of Objects

// Assignment
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

let users = [
  { fname: 'keeyan', age: 34, gender: 'male' },
  { fname: 'aditya', age: 89, gender: 'male' },
  { fname: 'jiya', age: 19, gender: 'Female' },
  { fname: 'rahul', age: 56, gender: 'male' },
];

let ans = users.filter((value) => {
  return value.age >= 18 && value.gender == 'Female';
});
console.log(ans);
