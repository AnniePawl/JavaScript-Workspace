// Kabob Casing

// Refactored Method 
String.prototype.kabobCase = function () {
  return this.toLowerCase().split(' ').join('-')
}
console.log("kabob Me Please".kabobCase())

// Long Method
String.prototype.kabobCase2 = function () {
  // Split at space to capture individual words
  // Convert all to lowercase
  const lower = this.toLowerCase().split(' ')
  return lower.filter((word) => word != '')
    .join('-')
}
console.log('Kabob me Please'.kabobCase2())

