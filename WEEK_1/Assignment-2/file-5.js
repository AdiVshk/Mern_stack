// Objects

// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

let user = {
  fname: 'aditya',
  age: 24,
  gender: 'Male',
};

function greet(name, age) {
  return `Hello ${name} , your age is ${age}`;
}
console.log(greet(user.fname, user.age));

// Assignment-2
// Write a function that takes a new object as input which has name ,
// age  and gender and greets
// the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greets(name, age, gender) {
  if (gender == 'Male') {
    return `Hello, Mr ${user.fname} you are Male`;
  } else if (gender == 'Female') {
    return `Hello, Mrs ${user.fname} you are Female`;
  }
  return `Hello, ${user.fname} not prefered to tell me age`;
}

console.log(greets(user.fname, user.age, user.gender));

// Assignment-3
// Also tell the user if they are legal to vote or not

function greets1(name, age, gender) {
  if (gender == 'Male') {
    if (age >= 18) {
      return `Hello, Mr ${user.fname} you are Male and legal to vote`;
    } else {
      return `Hello, Mr ${user.fname} you are Male but not  legal to vote`;
    }
  } else if (gender == 'Female') {
    if (age >= 18) {
      return `Hello, Mrs ${user.fname} you are Male and legal to vote`;
    } else {
      return `Hello, Mrs ${user.fname} you are Male but not  legal to vote`;
    }
  }
  return `Hello, ${user.fname} not prefered to tell me gender`;
}

console.log(greets1(user.fname, user.age, user.gender));
