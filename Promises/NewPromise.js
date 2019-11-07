var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Error: promise rejected');
    resolve('Success!');
  }, 4000);
});

p.then(function (message) {
  console.log('Promise resolved successfully!');
  console.log(message);
}).catch(function (err) {
  console.log('Promise rejected');
  console.log(err);
});
