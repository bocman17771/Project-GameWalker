// Change target position

let quantityHorizontal = style.staticPosition
let quantityVertical = style.staticPosition
const frameHeight = document.querySelector('.wrapperCircle').clientHeight
const frameWidth = document.querySelector('.wrapperCircle').clientWidth
const targetWidth = document.querySelector('.js-circle').clientWidth
const targetHeight = document.querySelector('.js-circle').clientHeight
const btnLeft = document.querySelector('.js-button_left')
const btnRight = document.querySelector('.js-button_right')
const btnUp = document.querySelector('.js-button_up')
const btnDown = document.querySelector('.js-button_down')

// Button mouse event
window.addEventListener('click', event => {
  if(event.target === btnLeft){
    stepPrev('ArrowLeft')
  }
  if(event.target === btnRight){
    stepNext('ArrowRight')
  }
  if(event.target === btnUp){
    stepPrev('ArrowUp')
  }
  if(event.target === btnDown){
    stepNext('ArrowDown')
  }
})

// Button arrow
window.addEventListener('keydown', event => {
  if(event.key === 'ArrowUp' || 'ArrowLeft'){
    stepPrev(event.key)
  }
  if(event.key === 'ArrowRight' || 'ArrowDown'){
    stepNext(event.key)
  }
})

function stepNext (arrow) {
  if(arrow === 'ArrowRight'){
    if(quantityHorizontal >= frameWidth - targetWidth){
      return
    }
    quantityHorizontal += 10
    style.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowDown'){
    if(quantityVertical >= frameHeight - targetHeight){
      return
    }
    quantityVertical += 10
    style.changeOfPositionVertical(quantityVertical)
  }
}

function stepPrev (arrow) {
  if(arrow === 'ArrowLeft'){
    if(quantityHorizontal <= 0){
      return
    }
    quantityHorizontal -= 10
    style.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowUp'){
    if(quantityVertical <= 0){
      return
    }
    quantityVertical -= 10
    style.changeOfPositionVertical(quantityVertical)
  }
}