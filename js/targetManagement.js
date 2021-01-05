// Change target position
import {styleTarget} from './Target.js'
import {styleField} from './Field.js'

const fieldHeight = styleField.$el.clientHeight
const fieldWidth = styleField.$el.clientWidth
const targetWidth = styleTarget.$el.clientWidth
const targetHeight = styleTarget.$el.clientHeight
let quantityHorizontal = styleTarget.staticPosition
let quantityVertical = styleTarget.staticPosition
const $btnLeft = document.querySelector('.js-button_left')
const $btnRight = document.querySelector('.js-button_right')
const $btnUp = document.querySelector('.js-button_up')
const $btnDown = document.querySelector('.js-button_down')

// Button mouse event
window.addEventListener('click', event => {
  if(event.target === $btnLeft){
    stepPrev('ArrowLeft')
  }
  if(event.target === $btnRight){
    stepNext('ArrowRight')
  }
  if(event.target === $btnUp){
    stepPrev('ArrowUp')
  }
  if(event.target === $btnDown){
    stepNext('ArrowDown')
  }
})

// Button arrow
window.addEventListener('keydown', event => {
  if(event.code === 'ArrowUp' || 'ArrowLeft'){
    stepPrev(event.code)
  }
  if(event.code === 'ArrowRight' || 'ArrowDown'){
    stepNext(event.code)
  }
})

function stepNext (arrow) {
  if(arrow === 'ArrowRight'){
    if(quantityHorizontal >= fieldWidth - targetWidth){
      return
    }
    quantityHorizontal += 10
    styleTarget.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowDown'){
    if(quantityVertical >= fieldHeight - targetHeight){
      return
    }
    quantityVertical += 10
    styleTarget.changeOfPositionVertical(quantityVertical)
  }
}

function stepPrev (arrow) {
  if(arrow === 'ArrowLeft'){
    if(quantityHorizontal <= 0){
      return
    }
    quantityHorizontal -= 10
    styleTarget.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowUp'){
    if(quantityVertical <= 0){
      return
    }
    quantityVertical -= 10
    styleTarget.changeOfPositionVertical(quantityVertical)
  }
}