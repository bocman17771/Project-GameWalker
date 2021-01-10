import {startWalker, mergerCoords} from './startGame.js'
import {styleTarget} from './Target.js'
import {styleWalker} from './Walker.js'


window.addEventListener('keydown', event => {
  if(event.code === 'NumpadEnter') {
    startWalker()
  }
  if(event.code === 'Space'){
    mergerCoords({
      target: styleTarget.$el, 
      walker: styleWalker.$el
    })
  }
}) 

const $btnStart = document.querySelector('.js-button_start')
$btnStart.onclick = () => startWalker()

const $btnShot = document.querySelector('.js-button_shot')
$btnShot.onclick = () => mergerCoords({
  target: styleTarget.$el, 
  walker: styleWalker.$el
})