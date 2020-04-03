## Switch Statement
`switch` statement can replace multiple `if` checks. More descriptive way to compare value with multiple varients
```javascript
switch(x) {
  case `value1`: // if (x === 'value1')
  ...
  [break]
  case `value2`: // if (x === 'value2')
  ...
  [break]
  default:
    ...
    [break]
}
```
- Value of `x` checked for strict equality to the value from the first `case`
- ^ Repeats for value 2
- If *equality not found * --> `switch` starts to execute code starting from corresponding `case`, until nearest `break` (or until end of `switch`)
- If no `break`, code will continue to execute
- If no case is matched, then `default` code executed

```javascript 
let a = 2 + 2;
switch (a) {
  case3:
  alert('Too Small');
  break;
  case 4:
    alert('Exactly');
    break;
  case 5:
    alert('Too Big');
    break;
  default:
    alert('I do not know such values')
}
```

### Grouping Case
You can group several varients of `case` which share same code
```javascript 
 ...
 case 3: // (*) grouped 2 cases
 case 5: 
 alert('wrong');
 alerty('Take a math class!');
 break
 ...
 ```
 - ^ cases 3 and 5 will display same message

### Type Matters
Equality check is always strict. *Values must be of same type!*
