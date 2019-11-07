function greet(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // name = 0; // <-- Something happened to name here. 
      if (typeof name === 'string') {
        resolve('hello ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 1233);
  });
}

function uppercaser(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
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