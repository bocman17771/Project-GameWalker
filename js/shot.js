// // Coordinate designation

// import {styleTarget} from './Target.js'
// import {styleWalker} from './Walker.js'
// import {styleField} from './Field.js'
// const field = styleField.$el
// const $btnShot = document.querySelector('.js-button_shot')

// $btnShot.onclick = () => mergerCoords({
//   target: styleTarget.$el, 
//   walker: styleWalker.$el
// })

// window.addEventListener('keydown', event => {
//   if(event.code === 'Space'){
//     mergerCoords({
//       target: styleTarget.$el, 
//       walker: styleWalker.$el
//     })
//   }
// })

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect()
//   return box.top + box.left
// }

// function fieldChangeBackground(color) {
//   field.style.background = color
// }

// export let stepFinish = false
// function mergerCoords(element){ 
//   const background = fieldChangeBackground
//   const targetCoords = getCoords(element.target)
//   const walkerCoords = getCoords(element.walker)
//   if (targetCoords === walkerCoords){
//     const field = styleField.$el
//     const win = document.createElement('span')
//     win.className = 'textWin'
//     win.innerHTML = 'Win!'
//     field.append(win)
//     background('green')
//     stepFinish = true
//     setTimeout(() => {
//       win.remove()
//       background('')
//     }, 500) 
//     return
//   }
//   background('red')
//   setTimeout(() => background(''), 300)
// }