// Variables
// Connaot be reserved keyword
// Make sure name is meaningful and descriptive
// Cannot contain space or hypen (use camelCase)
// Cannot start with number
// Case sensitive

// JS is DYNAMIC

// Examples
let name = "Anna";
let nickname = "Anna";
lastName = "Pawl"; //But best practice is to decalre each var on its own line

// Constants
// this will make error b/c using constant
const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Data Types
// String Literal
let firstName = "Anna";
// Number Literal
let age = 26;
// Boolean Literal (used for logic)
let isApproved = false;
// Undefined
let cat = undefined;
// Null - used to clear value of variable
let selectedColor = null;

//OBJECTS
// Add one+ value pairs
// Keys = object property
// Pair = object value
//curly braces = object literal
// Use comma to separate values
const person = {
  name: "Anna",
  age: 26
};

// DOT NOTATION
person.name = "Annie";
// BRACKET NOTATION
person["name"] = "Annie";
console.log(person.name);

// ARRAYS
// brackets = array literal
let favoriteColors = ["powder blue", "pastel pink"];
favoriteColors[2] = 1;
console.log(favoriteColors[0]);
