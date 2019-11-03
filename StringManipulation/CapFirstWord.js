// Capitalize first word 

// Refactored Method
String.prototype.capitalizeFirst = function () {
  return this[0].toUpperCase() + this.slice(1)
}
console.log("good morning".capitalizeFirst())

// Long Method
String.prototype.capitalizeFirst2 = function () {
  // Variable to hold character at index 0
  const charOne = this[0]
  // Variable to hold capitalized first character
  const UpperFirst = charOne.toUpperCase()
  // Variable to hold all other characters
  const leftOverCharacters = this.slice(1)
  // Variable to hold joined characters 
  const joined = UpperFirst + leftOverCharacters
  return joined

}
console.log("good night".capitalizeFirst2())



