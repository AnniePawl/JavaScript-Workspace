# Introduction to Functions
Functions are main building blocks of program. They allow code to be called many times without repetition. 
- **One function, one action**

### Function Declaration 
```javascript 
function functionName( parameters, delimited, by, comma) {
  /* code */
  alert('Hello World!');
}
```
- `function functionName(parameters)`

#### Local Variables
A variable declared **inside function** is only accessible  in that function

#### Global (Outer) Variables 
A function can access outer variables

#### Parameters 
Use parameters to pass in arbitrary data (arguments)

#### Default Values
If parameter not provided --> its value becomes `undefined`

### Returning a Value
Functions can return a value back into the calling code as result.
```javascript 
function sum (a,b) {
  return a + b;
}
let result = sum(1,2);
alert(result); //3
```
- `return` directive can be anywhere
- There can be multiple `returns`
- When `return` is reached, function stops and value is returned to calling code
- `return` without value exits function immediately and returns `undefined`

### Naming Functions
Functions are actions, names often verbs. Brief, accurate. 
- 'get...' - return a value
- 'calc...' - calculte something 
- 'create...' - create something
- 'check...' - check soemthing and return boolean, etc