const a = []; // An array to hold Promises

// This function returns a promise 
const callMeLater = () => {
  return new Promise(function (resolve, reject) {
    // Get a random time 0 to 4000ms
    const time = Math.round(Math.random() * 4000);
    setTimeout(function () {
      // reject('Error: promise rejected');
      resolve('Success! ' + time);
    }, time);
  });
}

// Add 10 Promises from callMeLater to the array
for (let i = 0; i < 10; i += 1) {
  a.push(callMeLater());
  // a.push(Post.find());
}

// Handle the results when all of the promises have resolved
// 
Promise.all(a).then((values) => {
  for (let i = 0; i < values.length; i += 1) {
    console.log(values[i]);
  }
}).catch((err) => {
  console.log(err.message);
});


// Post.find().then()
// p.then(function(message) {
//   console.log('Promise resolved successfully!');
//   console.log(message);
// }).catch(function(err) {
//   console.log('Promise rejected');
//   console.log(err);
// });


// const test = [];

// id.forEach((item) => {
//   test.push(Data.find())
// })

// Promise.all(test).then()