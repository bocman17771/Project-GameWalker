//  We hang the game launch event

import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'
const walker = styleWalker
const walkerWidth = walker.$el.clientWidth
const fieldWidth = styleField.$el.clientWidth
const $btnStart = document.querySelector('.js-button_start')

$btnStart.onclick = () => startWalker()

document.addEventListener('keydown', event => {
  if(event.code === 'NumpadEnter') {
    startWalker()
  }
}) 
// const r = false
let step = 0
export function startWalker(val) {
  if(step >= fieldWidth - walkerWidth || val === false){
    return
  }
  console.log(step)
  step += 10
  walker.changeOfPositionHorizontal(step)
  setTimeout(() => startWalker(), 1000)
}

