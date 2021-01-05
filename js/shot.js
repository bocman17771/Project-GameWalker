// Coordinate designation

import {styleTarget} from './Target.js'
import {styleWalker} from './Walker.js'

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

function mergerCoords(element){ 
  const sumOne = getCoords(element.target)
  const sumTwo = getCoords(element.walker)
  if (sumOne === sumTwo){
    return console.log(true)
  }
  console.log(false)
}