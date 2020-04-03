# Type Conversions
Usually operators are functions **automatically convert values into the right type.**
- Sometimes we need to explicitly convert values... 

### String Conversion 
```javascript 
let value = true 
console.log(typeof value) //boolean

value  = String(value); // now value is string "true"
```

### Numeric Converstion
Automatically happens in math functions and expressions
- Explicit conversation usually required when value comes from string-based source like a text
- `undefined` --> NaN
- `null` --> 0 
- `true and false` --> 1 and 0

### Boolean Conversion
- Values that are intuitively empty (0, null, undefined, NaN) become `false`
- Other values becomes `true`