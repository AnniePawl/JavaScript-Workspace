# Logical Operators `
Three logical operators in JS: `||`, `&`, `!`

## || (OR)
Classic implementation: If any arguments are `true` --> returns `true`, otherwise returns `false`. <br>
There are 4 possible logical combinations:
```javascript 
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false
```
**Multiple `||` operators** <br>
A chain of `||` returns first truthy value or last value if no truthy found
```javascript 
result = value1 || value2 || value3
```
- Evaluates operands from left --> right 
- For each operand, converts to boolean
- If result `true`, stops and returns original value of operand 
- If all operands evaluated (i.e all `false`), returns value of last operand 

## & (AND)
Classic implementation: Returns `true` if both operands are truthy, otherwise`false`<br>
* `&&` higher precedence than `||`
```javascript 
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

**Multiple `&&` operators**<br>
A chain of `&&` operators returns first falsy value or last value if none found 
```javascript 
result = value1 && value2 &&  value3
```
- Evaluates operands from left --> right 
- Converts each operand into boolean 
- If result `false` --> stops and returns original value or operand 
- If all operands evaluated (i.e all truthy) --> returns last operand

## ! (NOT)
```javascript 
result = !value
```
- Accepts single argument 
- Converts operand to boolean `true/false`
- Returns inverse value
**double NOT `!!`**
Used to convert value to boolean
