# Loops: while and for 
A way to repeat code multiple times

## 'while' loop 
```javascript 
while(condition)  {
  // code 
  // 'loop body'
}
```
- While condtion is truthy, execute code from loop body 
- **Iteration:** is a single execution of loop body

## 'do...while' loop
Condition check can be moved below loop body using `do...while` syntax
```javascript
do {
  // loop body
} while (condition)
```
- loop will first execute body 
- then check condition
- while truthy, will execute again and again 

## 'for' loop
```javascript 
for(begin; condition; step) {
  // ... loop body ...
}
```
Here is an example: 
```javascript 
for(let i = 0; i<3; i++>) {
  alert(i)
}
```
- **begin:** `i = 0` Executes 1x when entering loop 
- **condition** `i < 3` Checked before every loop iteration. If false --> loop stops
- **body** `alert(i)` Runs again and again while condition truthy
- **step** `i++` Executes after body on each iteration

### Skipping Parts 
Any part of a `for` can be skipped ... 

### Breaking Loop 
Normally, loop exits when condition becomes falsy <br>
We can force the exit at any time using `break` directive
```javascript 
let sum = 0;
while(true) {
  let value = +prompt("Enter Number, '');
  if (!value) break;
  sum += value;
}
alert('Sum: ' + sum)
```
- If user enters empty line of cancels input, stops loop immediately and passes control to line right after loop (i.e alert)

### Continue to Next Iteration
`continue` directive is lighter version of `break`. <br>
Stops current iteration and forces loop to start new one
```javascript
for (let i = 0; i < 10; i ++) {
  // if true, skip remaining body
  if ( i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}


