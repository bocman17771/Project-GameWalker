//  We hang the game launch event

import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'
import {stepFinish} from './shot.js'
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

export let step = 0
function startWalker() {
  if(step >= fieldWidth - walkerWidth || stepFinish === true){
    walker.changeOfPositionHorizontal(walker.staticPosition)
    return
  }
  step += 10
  walker.changeOfPositionHorizontal(step)
  setTimeout(() => startWalker(), 1000)
}


