import {startWalker} from './startGame.js'

document.addEventListener('keydown', event => {
  if(event.code === 'NumpadEnter') {
    startWalker()
  }
}) 