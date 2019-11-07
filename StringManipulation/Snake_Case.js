// Snake_CASE 
// Refactored Method
// TODO
// Remove extra space?
String.prototype.snakeCase = function () {
  return this.toLowerCase().split(' ').join('_')
}
console.log('snake   Case me Please'.snakeCase())


// Long Method
String.prototype.snakeCase2 = function () {
  const lowered = this.toLowerCase()
  const words = lowered.split(' ')
  const joined = words.join('_')
  return joined
}
console.log('snake Case Me  please'.snakeCase2())