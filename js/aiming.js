// Change target position
import {styleTarget} from './Target.js'
import {styleField} from './Field.js'
const fieldHeight = styleField.$el.clientHeight
const fieldWidth = styleField.$el.clientWidth
const targetWidth = styleTarget.$el.clientWidth
const targetHeight = styleTarget.$el.clientHeight
let quantityHorizontal = styleTarget.staticPosition
let quantityVertical = styleTarget.staticPosition
const quantity = 30

export function stepNext (arrow) {
  if(arrow === 'ArrowRight'){
    if(quantityHorizontal >= fieldWidth - targetWidth){
      return
    }
    quantityHorizontal += quantity
    styleTarget.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowDown'){
    if(quantityVertical >= fieldHeight - targetHeight){
      return
    }
    quantityVertical += quantity
    styleTarget.changeOfPositionVertical(quantityVertical)
  }
}

export function stepPrev (arrow) {
  if(arrow === 'ArrowLeft'){
    if(quantityHorizontal <= 0){
      return
    }
    quantityHorizontal -= quantity
    styleTarget.changeOfPositionHorizontal(quantityHorizontal)
  }
  if(arrow === 'ArrowUp'){
    if(quantityVertical <= 0){
      return
    }
    quantityVertical -= quantity
    styleTarget.changeOfPositionVertical(quantityVertical)
  }
}