const walker = styleWalker
const walkerWidth = walker.$el.clientWidths
const btnStart = document.querySelector('.js-button_start')

btnStart.onclick = () => startWalker()

let step = 0

function startWalker() {
  if(step === frameWidth - walkerWidth){
    return
  }
  step += 10
  walker.changeOfPositionHorizontal(step)
  setTimeout(() => startWalker(), 1000)
}


