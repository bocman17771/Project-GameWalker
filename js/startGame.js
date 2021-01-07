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

let finish = false

export let step = 0
function startWalker() {
  if(finish === true){
    walker.changeOfPositionHorizontal(walker.staticPosition)
    finish = false
    step = 0
    return
  }
  if(step >= fieldWidth - walkerWidth){
    // walker.changeOfPositionHorizontal(walker.staticPosition)
    step = 0
  }
  step += 10
  walker.changeOfPositionHorizontal(step)
  setTimeout(() => startWalker(), 200)
}


// 

import {styleTarget} from './Target.js'
const field = styleField.$el
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
  field.style.background = color
}

// export let stepFinish = false
function mergerCoords(element){ 
  const background = fieldChangeBackground
  const targetCoords = getCoords(element.target)
  const walkerCoords = getCoords(element.walker)
  if (targetCoords === walkerCoords){
    const field = styleField.$el
    const win = document.createElement('span')
    win.className = 'textWin'
    win.innerHTML = 'Win!'
    field.append(win)
    background('green')
    finish = true
    setTimeout(() => {
      win.remove()
      background('')
    }, 1000) 
    return
  }
  background('red')
  setTimeout(() => background(''), 500)
}