// Data Types

// 1. String
// Primitive Data Type
let userName = "omar";
let secondUserName = userName;

userName = "hashem";

console.log(userName); // Output: hashem
console.log(secondUserName); // Output: omar

// 2. Number
// Primitive Data Type
let numberOne = 3;
let numberTwo = numberOne;

numberOne = 5;

console.log(numberOne); // Output: 5
console.log(numberTwo); // Output: 3

// 3. Boolean
// Primitive Data Type
let isLogin = true;
let isLogout = isLogin;

isLogin = false;

console.log(isLogin); // Output: false
console.log(isLogout); // Output: true

// 4. Undefined and Null
// Falsy values in JS
let undefinedValue;
let password = null;
let lastName = "";
let age = 0;

console.log(!undefinedValue); // Output: true
console.log(!password); // Output: true
console.log(!lastName); // Output: true
console.log(!age); // Output: true

if (!userName === !password) {
  console.log("yes");
}

// 5. Arrays
// Reference Data Type
const arrayOne = [1, 2, 3, 4];
const arrayTwo = arrayOne;

arrayOne[1] = 5;

console.log(arrayOne); // Output: [1, 5, 3, 4]
console.log(arrayTwo); // Output: [1, 5, 3, 4]

// Using spread operator to create a non-reference array copy
const arrayThree = [1, 2, 3, 4, 5, 6];
const arrayFour = [...arrayThree];

arrayThree[1] = 10;

console.log(arrayThree); // Output: [1, 10, 3, 4, 5, 6]
console.log(arrayFour); // Output: [1, 2, 3, 4, 5, 6]

// Array methods: map, forEach, filter
const students = ["omar", "hashem", "noor", "ayah"];

const newStudentArray = students.map((item) => item + " is a good student");
console.log(newStudentArray);

students.forEach((student, index) => {
  if (student === "noor") {
    return;
  }
  console.log(student);
});

const newFilterStudents = students.filter((student) => student !== "noor");
console.log(newFilterStudents);

const numbersArray = [1, 2, 4, 9, 8, 10, 15, 16];
const newFilterNumbersArray = numbersArray.filter((number) => number % 2 === 1);
console.log(newFilterNumbersArray);

const findNumberTwo = numbersArray.findIndex((number) => number === 9);
console.log(findNumberTwo);

// Comparison of arrays
const arrayFive = [1, 2];
const arraySix = [1, 2];

console.log(arrayFive === arraySix); // Output: false

// 6. Object
// Reference Data Type
const newObject = {
  firstName: "omar",
  lastName: "abrash",
  age: 35,
  programmingLanguages: ["node", "react", "react native", "sql", "mongoDb"],
  address: {
    country: "jordan",
    city: "amman",
    building: "19",
    work: ["programming", "chemical engineering"],
  },
};

const userObject = { userName: "hashem", age: 25 };
const newUserObject = userObject;

userObject.userName = "omar"; // Reference data type

console.log(userObject);
console.log(newUserObject);

// Creating a non-reference type copy using spread operator
const userObjectCopy = { ...userObject };

userObject.userName = "hashem";

console.log(userObject);
console.log(userObjectCopy);

// 7. Objects and JSON
// JSON Format, Parsing Format
const userObjectJSON = {
  userName: "omar",
  age: 36,
  skills: ["NodeJs", "MongoDb"],
};

// Convert object to JSON string
const userObjectJsonForm = JSON.stringify(userObjectJSON);

// Parse JSON string back to object
const returnUserJsonToParsingForm = JSON.parse(userObjectJsonForm);

console.log(userObjectJSON);
console.log(userObjectJsonForm);
console.log(returnUserJsonToParsingForm);

const userArray = ["omar", "hashem", "ibraheem"];

console.log(userArray);
console.log(JSON.stringify(userArray));
console.log(JSON.parse(JSON.stringify(userArray)));
