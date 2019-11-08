// Promise takes in single callback
// Callback takes 2 parametes, resolve & reject
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Error: promise rejected');
    resolve('Success!');
  }, 1000);
});

// .then when promise resolved 
p.then(function (message) {
  console.log('Promise resolved successfully!');
  console.log(message);
  // .catch when promise rejected 
}).catch(function (err) {
  console.log('Promise rejected');
  console.log(err);
});
