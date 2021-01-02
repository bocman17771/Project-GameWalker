// Pressing raises an event

let quantity = style.movingPosition
const btnLeft = document.querySelector('.js-button_left')
const btnRight = document.querySelector('.js-button_right')
const btnTop = document.querySelector('.js-button_top')
const btnBottom = document.querySelector('.js-button_bottom')

window.addEventListener('click', event => {
  // Left
  if(event.target === btnLeft){
    stepPrev()
  }
  // Right
  if(event.target === btnRight){
    stepNext()
  }
  console.log(event)
})

window.addEventListener('keydown', event => {
  // console.log(window.innerWidth)
  if(event.key === 'ArrowLeft'){
    stepPrev()
  }
  if(event.key === 'ArrowRight'){
    stepNext()
  }
  if(event.key === 'ArrowUp'){
    stepPrev()
  }
  // if(event.key === 'ArrowLeft'){
  //   stepPrev()
  // }
  console.log(event.key)
})

function stepNext () {
  quantity += 15
  style.changeOfPosition(quantity)
}
function stepPrev () {
  if(quantity < 15 ){
    return
  }
  quantity -= 15
  style.changeOfPosition(quantity)
}