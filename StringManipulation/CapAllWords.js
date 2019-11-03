// Capitalize All Words

// Refactored Method
// String.prototype.captitalizeAll = function () {
//   return this.split(' ').map(word) => {


//   }
//   Console.log("good morning".captitalizeAll())


// Long Method
String.prototype.captitalizeAll2 = function () {
  // Break sentence into word parts
  const words = this.split(' ')
  return words
  const cappedWord = words.map((word) => {
    return cappedWord.toUpperCase()
  })
  const upperFirst = words

}

console.log("good night".captitalizeAll2())