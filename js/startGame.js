const walker = styleWalker
const btnStart = document.querySelector('.js-button_start')
const walkerWidth = document.querySelector('.js-walker').clientWidth

btnStart.onclick = () => startWalker()

let step = 0

async function startWalker() {
  if(step === frameWidth - walkerWidth){
    return
  }
  step += 10
  console.log(step)
  walker.changeOfPositionHorizontal(step)
  setInterval(() => startWalker(), 1000)
}
