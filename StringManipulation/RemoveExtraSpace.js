// Remove Extra Space 

// Refactored Method
String.prototype.removeSpace = function () {
  return this.replace(/\s/g, "")
}
console.log(' Hello old   dog  '.removeSpace())


// Long Method
// String.prototype.removeSpace2 = function () {
//   return
// }

// console.log(' Good night   young  doggo')


// Remove Extra Space Alternative
String.prototype.removeSpace2 = function () {
  // "a frog"       ['a', '  frog  ']
  return this.split(' ').map((word) => { return word.trim() }).join('')
}

console.log('------------')
console.log(" aaa foo moo  bar ".removeSpace2())
