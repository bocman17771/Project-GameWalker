// Change target position
import {styleTarget} from './Target.js'
import {styleField} from './Field.js'
const fieldHeight = styleField.$el.clientHeight
const fieldWidth = styleField.$el.clientWidth
const targetWidth = styleTarget.$el.clientWidth
const targetHeight = styleTarget.$el.clientHeight
let quantityHorizontal = styleTarget.staticPosition
let quantityVertical = styleTarget.staticPosition


export function stepNext (arrow) {
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

export function stepPrev (arrow) {
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