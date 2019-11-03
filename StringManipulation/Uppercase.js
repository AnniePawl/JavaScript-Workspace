// TO UPPERCASE

// Refactored Method
String.prototype.upperCase = function () {
  return this.toUpperCase()
}
console.log("good morning".upperCase())

// Long Method
// TO-DO - returning 'function', why?
String.prototype.upperCase2 = function () {
  const upperCased = this.toUpperCase()
  return upperCased

}
console.log("good night".upperCase2)