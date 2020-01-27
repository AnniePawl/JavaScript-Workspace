## Variables 
- "Named storage" for data </br>
The statement below creates (in other words: declares) a variable with the name “message”:
- We put data in using assignment operator `=`
- We can access variable w/ it's name

### Variable Naming
- Can only contain letters, digits, symbols `$` and `_`
- First char cannot be digit
- camelCase is conventional 
- **case matters**. Be careful apple and Apple are different variables
- **Reserved names** includes: let, class, return, and function
- Should be human-readable, clean and obvious

### Let Keyword
```javascript
let message;
message = 'Hello'; // store the string

alert(message); // shows the variable content
```
- **Multiple lines better for readability**
```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```
- You can also define multiple variables like this (but less recommended)
```javascript 
let user = 'John', age = 25, message = 'Hello';
```

```javascript 
let user = 'John',
  age = 25,
  message = 'Hello';
```

```javascript 
let user = 'John'
  , age = 25
  , message = 'Hello';
```

### Var Keyword
Very similar to let, more 'old school, will get into this more later. 

### Const Keyword
Used to declare a variable that is unchanging, **cannot be reassigned** 
```javascript 
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

#### Uppercase Constants 
- Common practice: Aliases and difficult to remember values known prior to execution are named with capital letters and underscores 
- Easier to remember 
- Typo less likely
- More meangingful name
```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

### Overriding 
- we can change vaiable as many times as we want, but old data will be removed 

```javascript 
let message;
message = 'Hello!';
message = 'World!'; // value changed

alert(message);
```

### Copying 
We can declare 2 variables and copy data from one into the other
```javascript 
let hello = 'Hello world!';
let message;
// copy 'Hello world' from hello into message
message = hello;
// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!
```




