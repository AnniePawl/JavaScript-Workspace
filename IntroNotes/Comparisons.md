## Comparisons
- `a > b` greater than 
- `a < b` less than 
- `a >= b`, `a <= b` greater/less than or equals 
- `a == b` equals 
- `a != b` does not equal 

### Boolean Result 
Comparisons return `true` or `false`
- For **boolean values**, `true` --> 1 and `false` --> 0
- Strings compared letter-by-letter in alphabetical order
```javascript 
alert(2 > 1); // true 
alert(2 == 1); // false
alert(2 != 1); // true
alert('Z' > 'A'); //true, JS uses lexicographical order
alert('glow' > 'glee'); // true
alert('Bee' > 'Be'); // true, compares letter by letter, longer string greater
```

### Comparing numbers and strings 
JS will convert all values to numbers if number present
```javascript
alert('2' > 1) // true, string '2' converted to num
```
- If both numbers represented as string, dictionary comparison applies 
```javascript 
alert("2" > "12") //true, 2 greater than 1 
``` 

### Strict Comparisons ====
Checks equality **without type conversion**
- If `a` and `b` are different types, automatically `false`

### null and undefined
- `null` --> 0 
- `undefined` --> NaN, should not be used in comparisons