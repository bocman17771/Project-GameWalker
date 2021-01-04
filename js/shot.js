// Coordinate designation
const $btnShot = document.querySelector('.js-button_shot')

$btnShot.onclick = mergerCoords()

window.addEventListener('keydown', event => {
  if(event.code === 'Space'){
    console.log('space')
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
  // const sumOne = getCoords(element.target)
  // const sumTwo = getCoords(element.walker)
  // if (sumOne === sumTwo){
  //   return console.log(true)
  // }
  console.log(element)
}