const walker = styleWalker
const btnStart = document.querySelector('.js-button_start')
const walkerWidth = document.querySelector('.js-walker').clientWidth

btnStart.onclick = () => startWalker()

let sum = 0

async function startWalker() {
  if(sum === frameWidth - walkerWidth){
    return
  }
  sum += 10
  console.log(sum)
  walker.changeOfPositionHorizontal(sum)
  setInterval(() => startWalker(), 1000)
}
