//  We hang the game launch event

import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'

const $btnStart = document.querySelector('.js-button_start')
$btnStart.onclick = () => startWalker()

let finish = false

// Starts game
export function startWalker() {
  const walkerWidth = styleWalker.$el.clientWidth
  const walkerHeight = styleWalker.$el.clientHeight
  const fieldWidth = styleField.$el.clientWidth
  const fieldHeight = styleField.$el.clientHeight
  const quantity = 30

  let levelUp = 100
  let getLevelUp = levelUp
  let level = getLevelUp / 100
  
  let step = styleWalker.staticPosition
  console.log(level)
  function checkOnTheFinishGame(){
    if(finish === true){
      styleWalker.changeOfPositionHorizontal(styleWalker.staticPosition)
      styleWalker.changeOfPositionVertical(styleWalker.staticPosition)
      finish = false
      step = 0
      return
    }
  }

  function checkOnTheRandom(random) {
    if(random === 0){
      step += quantity
      styleWalker.changeOfPositionHorizontal(step)
    }
    if(random === 1){
      step -= quantity
      styleWalker.changeOfPositionHorizontal(step)
    }
    if(random === 2){
      step += quantity
      styleWalker.changeOfPositionVertical(step)
    }
    if(random === 3){
      step -= quantity
      styleWalker.changeOfPositionVertical(step)
    }
  }

  function checkOnTheBrink() {
    if(step >= fieldWidth - walkerWidth){
      step -= quantity
    }
    if(step <= 0){
      step += quantity
    }
    if(step >= fieldHeight - walkerHeight){
      step -= quantity
    }
  }

  function start() {
    checkOnTheFinishGame()
    checkOnTheRandom(getRandomInt(4))
    checkOnTheBrink()
    setTimeout(() => start(), 200)
  }

  start()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
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