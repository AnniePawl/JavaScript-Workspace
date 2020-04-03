## Interaction: alert, prompt, confirm 
Helpful user-interface functions `alert`, `prompt`, and `confirm` to interact with 

### alert
Shows a **message** in a mini **modal window** and pauses script execution until user presses "OK". User cannot interact with page until window is dealt with. 
```javascript
alert(message);
```

### prompt 
Shows a **message** in a small **modal window**, an **input field** and **ok/cancel** button. <br>
```javascript
result = prompt(title, [default]);
```
- `title` is text to show the visitor
- `default` is optional 2nd parameter, but always supply it or web wil insert "undefined" into prompt

### confirm 
Shows a **modal window** with a **questions** and **ok/cancel** buttons. <br>
Result is `true` if OK pressed, `false` if canceled pressed
```javascript 
result = confirm(question);
```