//  Event Delegation ------------------------------------
const body = document.querySelector('body') // qs will select 1st instance
body.addEventListener('click', (e) => { //always takes event object as parameter
  console.log(e)
  console.log(e.target)
  console.log(e.this)
  console.log(e.pageX, e.pageY)
})
