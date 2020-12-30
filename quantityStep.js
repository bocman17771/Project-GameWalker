// Pressing raises an event

let quantity = style.movingPosition
// Top
document.querySelector('.js-button_right').addEventListener('click', () => {
  quantity += 15
  style.changeOfPosition(quantity)
})
// Right
document.querySelector('.js-button_right').addEventListener('click', () => {
  quantity += 15
  style.changeOfPosition(quantity)
})
// Left
document.querySelector('.js-button_left').addEventListener('click', () => {
  if(quantity < 15 ){
    return
  }
  quantity -= 15
  style.changeOfPosition(quantity)
})
// Bottom
document.querySelector('.js-button_bottom').addEventListener('click', () => {
  quantity += 15
  style.changeOfPosition(quantity)
})


window.addEventListener('click', () => {
  console.log(window.innerWidth)
})