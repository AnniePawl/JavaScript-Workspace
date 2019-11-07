// Camel Case

// Refactored Method 
// String.prototype.camelCase = function () {

// }
// console.log('Camel case Me please')


// Long Method
String.prototype.camelCase2 = function () {
  // Split into words 
  const words = this.split(' ')

  // Capture First Letters
  const cappedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })

  // Join Word to make camelCase
  const joined = cappedWords.join('')

  // Uncapitalize First letter 
  const camelCase1 = joined[0].toLowerCase() + joined

  // Delete 2nd letter(still capped)
  // const camelCase2 = camelCase1.remove[1]

  return camelCase1



}
console.log('will You camel case me Please'.camelCase2())