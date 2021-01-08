//  We hang the game launch event

import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'

const $btnStart = document.querySelector('.js-button_start')
$btnStart.onclick = () => startWalker()

let finish = false

// Starts game
export function startWalker() {
  let step = 0
  start()
  function getRandomInt(max) {
    console.log(Math.floor(Math.random() * Math.floor(max))) 
  }
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

function changeBackground(element, color) {
  element.style.background = color
}

// Сreating a new node in DOM
function createNode(option){
  const element = option.element
  const beforeThisElement = option.beforeThisElement
  const newClassElement = option.classElement
  const newTextInnerElement = option.textInnerElement
  element.className = newClassElement
  element.innerHTML = newTextInnerElement
  beforeThisElement.append(element)
}

function mergerCoords(element){ 
  const background = changeBackground
  const field = styleField.$el
  const targetCoords = getCoords(element.target)
  const walkerCoords = getCoords(element.walker)
  if (targetCoords === walkerCoords){
    const textWin = document.createElement('span')
    createNode({
      element: textWin,
      textInnerElement: 'Win!!!',
      classElement: 'textWin',
      beforeThisElement: field
    })
    background(field, 'green')
    finish = true
    setTimeout(() => {
      textWin.remove()
      background(field, '')
    }, 1000) 
    return
  }
  background(field, 'red')
  setTimeout(() => background(field, ''), 500)
}