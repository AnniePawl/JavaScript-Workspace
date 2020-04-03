// FILTER
const numbers = [1, -1, 2, 3, -3, 5, -6];

// Return positive numbers
const filtered = numbers.filter(function(value) {
  return value >= 0;
});
console.log(filtered);

// MAP
filtered.map(n => "<li>" + n + "</li>");
