//  We hang the game launch event

import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'

const $btnStart = document.querySelector('.js-button_start')
$btnStart.onclick = () => startWalker()

let finish = false

export function startWalker() {
  let step = 0
  start()
  function start() {
    const walkerWidth = styleWalker.$el.clientWidth
    const fieldWidth = styleField.$el.clientWidth
    if(finish === true){
      styleWalker.changeOfPositionHorizontal(styleWalker.staticPosition)
      finish = false
      step = 0
      return
    }
    if(step >= fieldWidth - walkerWidth){
      step = 0
    }
    step += 10
    styleWalker.changeOfPositionHorizontal(step)
    setTimeout(() => start(), 200)
  }
}


// Shot

import {styleTarget} from './Target.js'
const $btnShot = document.querySelector('.js-button_shot')

$btnShot.onclick = () => mergerCoords({
  target: styleTarget.$el, 
  walker: styleWalker.$el
})

window.addEventListener('keydown', event => {
  if(event.code === 'Space'){
    mergerCoords({
      target: styleTarget.$el, 
      walker: styleWalker.$el
    })
  }
})

function getCoords(elem) {
  let box = elem.getBoundingClientRect()
  return box.top + box.left
}

function fieldChangeBackground(color) {
  const field = styleField.$el
  field.style.background = color
}

function mergerCoords(element){ 
  const background = fieldChangeBackground
  const targetCoords = getCoords(element.target)
  const walkerCoords = getCoords(element.walker)
  if (targetCoords === walkerCoords){
    const field = styleField.$el
    const textWin = document.createElement('span')
    textWin.className = 'textWin'
    textWin.innerHTML = 'Win!'
    field.append(textWin)
    background('green')
    finish = true
    setTimeout(() => {
      textWin.remove()
      background('')
    }, 1000) 
    return
  }
  background('red')
  setTimeout(() => background(''), 500)
}