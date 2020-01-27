## Operators 
- **Operand** is what operators are applied to
- An operator is **unary** if it has a single operand
- An operator is **binary** when it has two operands 

### String Concatenation 
```javascript 
let myInits = "A" + "M" + "P";
console.log(myInits)
```
- If one operand is string, others converted... 
```javascript  
alert(1 + 2 + '5') //35 not 8
alert ("" + 1 + 0) //10 b/c 1 and 0 turned to string 
```

### Numeric Conversion 
The unary `+` (applied to single value) convertions into a number (when not a number to start)
```javascript 
alert(+true); // 1
alert(+ ""); //0
```
- If any math operator aside from `+`, values with automatically be converted to number:
```javascript
alert(6 / "3"); //2, "3" converted to string number 3
alert("2" * "3") //6;
``` 
- More on **Binary Plus**
```javascript 
let apples = "2"; 
let oranges = "3"; 

alert(apples + oranges) //"23", binary plus simply concatenates strings
alert(+apples + +oranges) //5, both values converted before binary plus
alert(Number(apples) + Number(oranges))//5, but longer  to type
```

### Assignments
Chained assignments operates from right to left, but at teh end, all share a single value
```javascript 
let a = 1; 
let  b = 2;
let c = 3 - (a = b +1)

alert(a);  // 3, evaluates a = b +1 first
alert(c); //  0, 3-3
```

### Remainder % 
```javascript 
alert(5 % 2) ; // 1 is remainder of 5/2
alert(8 % 3); // 2 is remainder of 8/3
```

### Exponents ** 
```javascript 
alert(2**2); //4 (2*2)
alert(2**3); // 8 (2*2*2)
alert(2**4); // 16 (2*2*2*2)
```
**Raise values to fractions to get root/cube, etc**
```javascript 
alert(4 ** (1/2)) //2, square root of 4
alert(8 ** (1/3)) //2, cubed root of 8
```

### Increment/ Decrement
Use `++` and `--` to increase and decrease by 1. 
- Can **only by applied to variables**
- If you use result, need to consider prefix and postfix options 
- Prefix form returns new value `++counter`
- Postfix form return old value `counter++`
```javascript 
let counter = 2;
counter ++ ;
alert(counter) //3
```
- Another example among operators 
```javascript 
let counter = 1;
alert(2 * ++counter); // 4, uses new counter value
alert(2 * counter++); //2, uses old counter value
```

### Modify in place 
`n = n + 5` same as `n += 5` </br>
`a = a * 2` same as `a *= 2`

### Comma Operator
Rarely used, allws us to evaluate several expression by dividing with comma. Only last value returned! 


