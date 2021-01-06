// Coordinate designation

import {styleTarget} from './Target.js'
import {styleWalker} from './Walker.js'
import {styleField} from './Field.js'
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

function mergerCoords(element){ 
  const background = fieldChangeBackground
  const sumOne = getCoords(element.target)
  const sumTwo = getCoords(element.walker)
  if (sumOne === sumTwo){
    const field = styleField.$el
    const win = document.createElement('span')
    win.className = 'textWin'
    win.innerHTML = 'Win!'
    field.append(win)
    background('green')
    setTimeout(() => {
      win.remove()
      background('')
    }, 500) 
    return
  }
  background('red')
  setTimeout(() => background(''), 300)
}