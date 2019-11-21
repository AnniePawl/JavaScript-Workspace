// Date Practice 
// Repl.it for extra practice: https://repl.it/@annampawl/date-object

// Make a Date 
const today = new Date() // Gets current time

const months = ['Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const days = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun']


console.log("Today's date is:", today)
console.log("Today's time in milliseconds:", today.getTime())

// Make Birthday Object 
const birthday = new Date('04/11/1993')
// Find your Age in milliseconds
const age = today - birthday
console.log()
// Calculate your age in years 
console.log('My Age:', age / 1000 / 60 / 60 / 24 / 365.25)

console.log('----- Consecutive Dates -----')
// Schedule future dates. Given a date, return a list of dates seperated by time
function consecutiveDates(date, repeat, offset) {

}

console.log(consecutiveDates(04 / 11 / 1993, 12, 2))


console.log('----- Order Dates -----')
function orderDates = (dates) => {
  const myDates = []
  for (var i = 0; i < dates.length; i++) {
    myDates.push(dates[i].getTime())
  }

}
console.log()

console.log('----- Problem 3 -----')
// Find what date happened next 
function nextDate(dates) {

}

console.log('----- Problem 4 -----')

