// CALLBACK EXAMPLE 
// Consider order that messages will appear

function snooze(callback) {
  setTimeout(function () {
    callback();
    // Even if time is 0, this goes into asyc land and run at end when stack is clear
  }, 4000);
}

console.log('Step 1');

snooze(function () {
  console.log('Step 3');
  console.log("Async Action completed via callback");
});

snooze(() => {
  console.log('********')
})

console.log('Step 2');