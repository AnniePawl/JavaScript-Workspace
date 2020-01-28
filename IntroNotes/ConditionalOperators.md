 
## if(...)
`if(...)`  statement evaluates condition in parentheses. <br>
If result is `true` --> executes code block

```javascript 
let year = prompt("What year was Abe Lincoln born in?", 'xxxx');
if(year == 1809) { 
  alert('Wowzers') 
  alert('Impressive')
} //use curly brace to execute more than one statement
```

### Boolean Conversion 
`if(...)` statement evaluates expression in its parentheses and **converts to boolean**. <br>
**Falsy Values** that convert to `false` include: `0`, empty string `" "`, `null`, `undefined`, and `NaN`. 
```javascript 
let condition = (year == 2020);
if (cond) { //true
  ...
}
```

## else Clause
`if` statement might contain *optional* `else` block which executes when the condition is *false*. 
```javascript
let abeYear = prompt("Which year was Abe Lincoln Born?", 'xxxx');
if (abeYearyear == 1809) {
  alert("Impressive");
} else {
  alert("How can you be so wrong...")
}
```
### else if 
You can add several variants of a condition with `else if` clause 
```javascript 
let AbeYear = prompt("In which year was Abe Lincoln born?", "xxxx");
if(year == 1809) {
  alert("Impressive");
} else if (year > 1809) {
  alert("too late");
} else(year < 1809) {
  alert("too early")
}
```

## ? Operator 
Often call **ternary** because it has **3 operands**. <br> 

```javascript 
let result = condition ? value1: value2;
```
- `condition` is evaulated.
- If "truthy" --> `value1` is returned
- Otherwise --> `value2` returned. 

```javascript  
if(age >18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
``` 
Can be written as... 
```javascript 
let accessAllowed = (age > 18) ? true:false;
```
Since it's just true/flase you can also right like this:
```javascript
let accessAllowed = age > 18;
```

### Multiple ?s
Sequence of question mark operatos can return value that depends on more than one condition
```javascript 
let age = prompt('age',18);
let message = (age < 3) ? 'Hi Baby!' :
(age <18) ? 'Hello Child':
(age< 100) ? 'Greetings adult human';
alert(message);
```