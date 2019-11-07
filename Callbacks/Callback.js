function asyncAction(time, callback) {
  setTimeout(function () {
    const data = Math.random()
    callback(data);
  }, time);
}

console.log('Step 1');

asyncAction(1000, function (data) {
  console.log(data)
  console.log('Step 3');
  console.log("Async Action completed via callback");
  console.log(Date(Date.now()))
  console.log("Anna, You Did It")
});

console.log('Step 2');
