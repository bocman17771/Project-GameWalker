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

// Сhange a node in DOM
function changeNode(option) {
  const element = option.element
  const newTextInnerElement = option.textInnerElement
  element.innerHTML = newTextInnerElement
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export {getRandomInt, getCoords, changeBackground, createNode, changeNode}