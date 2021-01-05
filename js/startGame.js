import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'
// const frameHeight = styleField.$el.clientHeight

const walker = styleWalker
const walkerWidth = walker.$el.clientWidth
const frameWidth = styleField.$el.clientWidth

const $btnStart = document.querySelector('.js-button_start')
$btnStart.onclick = () => startWalker()

let step = 0

function startWalker() {
  if(step === frameWidth - walkerWidth){
    return
  }
  step += 10
  walker.changeOfPositionHorizontal(step)
  setTimeout(() => startWalker(), 1000)
}