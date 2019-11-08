A promise is an object that represent work that will be done in teh future. 

Promise can be in one of three states:
- **Pending** In process 
- **Resolved** Work Completed Successfully 
- **Rejected** Work failed 

- 
## Defining a promise 
- Provide one function 
  - Takes a single callback 
  - Callback takes in resolve, reject
- .then() gets results from promise when resolved
- .catch() returns error when rejected  


## Chaining Promises
- Computers handles a promise like this: promise.then().catch()
- Sometimes a promise will return another promise
- If any promise in chain is rejected, it will call **catch** at end of chain p.then().then().then().catch()
- You will only ever use one catch at end of any promise chain. 

var p = new Promise(function(resolve, reject) {
  setTimeout(functiona(){
    reject('Error: promise rejected');
    resolve('Success!');
  }, 4000);
});

# Questions
1) What happens when a promise is rejected?
.catch() triggered. Something like an error message is returned

2) What happens when you call both resolve and reject? 

3) Does the order matter? 
Yes

4) What happens if you call resolve or reject more than once? 
No matter how many .then(), only one will be resolved 