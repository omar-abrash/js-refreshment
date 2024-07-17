// Function

// Array to store users
const users = [];

// We have two ways to write Functions (A- Vanilla Js ,  B- ECMA SCRPIT (ES6) Way)

// A- Write Functions in (Vanilla JS Way)
// we have two types of functions ( 1- Void , 2- Return )

// 1- Void Function ( not return function , only excute things without return values )
function addNewUser(user) {
  users.push(user);
}

// Adding users
addNewUser({ id: "1", userName: "omar" });
addNewUser({ id: "2", userName: "ibraheem" });

console.log(users);

// 2- Return Function, like ( return sum value of array of numbers )
function sumNumbers(numbers) {
  let sum = 0;

  numbers.forEach((number, index) => {
    sum = sum + number;
  });

  return sum;
}

// Return Function to print full name ( return string from two string params )
function printFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const myName = printFullName("omar", "abrash");
console.log(myName);

// B- ES6 (ECMA SCRIPT) Way , (( Arrow function )) to print full name
const printYourName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

const myNameArrow = printYourName("omar", "fayez");
console.log(myNameArrow);

// Simplified arrow function to print full name
const printYourNameSimple = (firstName, lastName) => firstName + " " + lastName;

const myNameSimple = printYourNameSimple("omar", "fayez");
console.log(myNameSimple);

// Function to print "hi"
const printHi = () => console.log("hi");

printHi();
