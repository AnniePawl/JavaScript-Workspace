// Greet function takes name as parameter and stimulates asynchronous work with a timeout
function greet(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // name = 0; // <-- Something happened to name here. 
      // Checks that name is a valid string
      // If value is a string, it resolves
      // If not a string, rejects promise
      if (typeof name === 'string') {
        resolve('hello ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 1233);
  });
}

// Takes in a string and simulates work with a timeout
function uppercaser(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // Checks if name is a valid string 
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1500);
  });
}

greet('Joe').then((str) => {
  return uppercaser(123333);
}).then((str) => {
  console.log(str)
}).catch((err) => {
  console.log(err);
});