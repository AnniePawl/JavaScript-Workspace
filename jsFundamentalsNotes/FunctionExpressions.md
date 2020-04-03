# Function Expressions
Functions are values - can be assigned, copied, decalred in any place of code

### Function Delcaration
- Can be called earlier than it is defined
- Global function declaration available to whole script
```javascript 
funtion sayHi() {
  alert('Hello')
}
```
### Function Expression
- Created when execution reaches it 
- Only usable from that moment
```javascript 
let sayHi = function() {
  alert('Hello')
}
```

## Callback Functions
Pass a function and expect it to be "called back' later if necessary. 
```javascript 
fuction ask(question, yes, no) {
  if (confirm(question)) yes()
  else(no);
}

ask (
  "Do you agree?"
  function() { alert('You agreed');},
  function(){ alert('You canceled execution');}
)
```
- Above functions are called inside ask w/o name. Called *anonymously*
- These functions are not accessible outside 'ask'