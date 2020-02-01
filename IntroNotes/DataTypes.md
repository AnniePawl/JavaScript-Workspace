# Data Types
- JS variables can contain **any data**
- **Dynamically Typed**, meaning there are data types, but variables are not bound to them
- There are 8 basic data type :
**Number, BigInt, String, Bloolean, Null, Undefined, Object, Symbol**

## Overview 
- **number** for numbers of any kind: integer or floating-point, integers are limited by ±253.
- **bigint** is for integer numbers of arbitrary length.
- **string** for strings. A string may have one or more characters, there’s no separate single-character type.
- **boolean** for true/false.
- **null** for unknown values – a standalone type that has a single value null.
- **undefined** for unassigned values – a standalone type that has a single value undefined.
- **object** for more complex data structures.
- **symbol** for unique identifiers.

### Type of 
The typeof operator allows us to see which type is stored in a variable.
- **Two forms**: typeof x or typeof(x).
- Returns a string with the name of the type, like "string".
- For null returns "object" – this is an error in the language,it’s not actually an object.

## Number 
- Represents both integer and floating point numbers
- Many operations including `*, /, +, -`
- `Nan` represents computational error, incorrect or undefined math operation

## BitInt 
- Recently added type to accommodate/ represent integers of arbitrary length 
- Number type cannot represent values larger than  2^53
- Created by appending `n` to end of integer

## String 
- Surrounded by quotes:  
Double quotes: "Hello".  
Single quotes: 'Hello'.  
Backticks: `Hello`.  
- **Backticks** add **extended functionality** like embeded variables and expressions when wrapped in `${}`
```javascript 
let myName = "Anna"
// embed a variable 
alert (`Hello, ${name}`)
```

## Boolean 
- Has only two values: `true` or `false`. 
- Commonly used to store yes or no values

## "null" 
- Represents **nothing, empty, or value unknown** in JS
```javascript 
let age = null;
```

## "undefined
Means **value not assigned**.
Technically impossible to assign undefined to a variable. 
```javascript
let x;
alert(x) // shows "undefined"
```

### Object 
Objects are used to store collections of data and  more complex entities
### Symbol 
Symbols used to create unique identifiers for objects. 
