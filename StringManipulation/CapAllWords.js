// Capitalize All Words

// Refactored Method
String.prototype.captitalizeAll = function () {
  return this.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}
console.log('good morning'.captitalizeAll())
console.log('good day'.captitalizeAll())

// Long Method
String.prototype.captitalizeAll2 = function () {
  // Break sentence into word parts
  const words = this.split(' ')
  // Capture First Letter of each word 
  const firstCapped = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  // Join Words
  const joined = firstCapped.join(' ')

  return joined
}

console.log("good night".captitalizeAll2())