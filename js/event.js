import {startWalker, mergerCoords} from './startGame.js'
import {stepNext, stepPrev} from './targetManagement.js'
import {styleTarget} from './Target.js'
import {styleWalker} from './Walker.js'

// Button keyboard event
window.addEventListener('keydown', event => {
  // Start game
  if(event.code === 'NumpadEnter') {
    startWalker()
  }
  // Shot 
  if(event.code === 'Space'){
    mergerCoords({
      target: styleTarget.$el, 
      walker: styleWalker.$el
    })
  }
  // Arrows
  if(event.code === 'ArrowUp' || 'ArrowLeft'){
    stepPrev(event.code)
  }
  if(event.code === 'ArrowRight' || 'ArrowDown'){
    stepNext(event.code)
  }
}) 

// Button mouse event
window.addEventListener('click', event => {
  const $btnLeft = document.querySelector('.js-button_left')
  const $btnRight = document.querySelector('.js-button_right')
  const $btnUp = document.querySelector('.js-button_up')
  const $btnDown = document.querySelector('.js-button_down')
  const $btnStart = document.querySelector('.js-button_start')
  const $btnShot = document.querySelector('.js-button_shot')

  // Start
  if(event.target === $btnStart){
    startWalker()
  }
  // Shot
  if(event.target === $btnShot){
    mergerCoords({
      target: styleTarget.$el, 
      walker: styleWalker.$el
    })
  }
  // Arrows
  if(event.target === $btnLeft){
    stepPrev('ArrowLeft')
  }
  if(event.target === $btnRight){
    stepNext('ArrowRight')
  }
  if(event.target === $btnUp){
    stepPrev('ArrowUp')
  }
  if(event.target === $btnDown){
    stepNext('ArrowDown')
  }
})