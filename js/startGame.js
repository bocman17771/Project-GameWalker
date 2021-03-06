// Launch of game functionality
import {styleField} from './Field.js'
import {styleWalker} from './Walker.js'
import {getRandomInt, getCoords, changeBackground, createNode, changeNode, removeNode} from './mixin.js'
export let blockStart = false 
const maxLvl = 10
let level = 1
let finish = false


// Starts game
export function startWalker() {
  const walkerWidth = styleWalker.$el.clientWidth
  const walkerHeight = styleWalker.$el.clientHeight
  const fieldWidth = styleField.$el.clientWidth
  const fieldHeight = styleField.$el.clientHeight
  const field = styleField.$el
  const quantity = 30
  let levelAp = level * 100 - 100
  let step = styleWalker.staticPosition
  removeNode(document.querySelector('.textWin'))
  changeBackground(field, '')
  blockStart = true
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
      step -= quantity + walkerWidth
    }
    if(step <= 0){
      step += quantity + walkerWidth
    }
    if(step >= fieldHeight - walkerHeight){
      step -= quantity + walkerWidth
    }
  }
  function start() {
    if(finish){
      styleWalker.changeOfPositionHorizontal(styleWalker.staticPosition)
      styleWalker.changeOfPositionVertical(styleWalker.staticPosition)
      finish = false
      step = 0
      return
    }
    checkOnTheBrink()
    checkOnTheRandom(getRandomInt(4))
    setTimeout(() => start(), 1000 - levelAp)
  }
  start()
}

// Shot
export function mergerCoords(element){ 
  const field = styleField.$el
  const targetCoords = getCoords(element.target)
  const walkerCoords = getCoords(element.walker)
  if (targetCoords === walkerCoords){
    const $el = document.createElement('span')
    level++
    createNode({
      element: $el,
      textInnerElement: 'Win!!!',
      classElement: 'textWin',
      beforeThisElement: field
    })
    changeNode({
      element: document.querySelector('.js-thisLvl'),
      textInnerElement: level
    })
    changeBackground(field, 'green')
    finish = true
    blockStart = false

    if(level >= maxLvl){
      const $el = document.createElement('span')
      level = 1
      removeNode(document.querySelector('.textWin'))
      createNode({
        element: $el,
        textInnerElement: 'Игра окончена! Чтобы начать заново, жми старт.',
        classElement: 'textWin',
        beforeThisElement: field
      })
    }else {
      setTimeout(() => {
        changeNode({
          element: $el,
          textInnerElement: 'Жми старт!'
        })
      }, 1000) 
    }
    return
  }
  changeBackground(field, 'red')
  setTimeout(() => changeBackground(field, ''), 500)
}