class Walker  {
  constructor(options) {
    this.$el2 = document.querySelector(options.selector)
  }
}

class Style2 extends Walker{
  constructor(options){
    super(options.selector)
    this.staticPosition = options.staticPosition
    // this.$el.style.padding = options.padding + 'px'
    // this.$el2.style.outline = options.outline
    // this.$el2.style.position = options.position
    this.$el2.style.left = this.$el2.style.top = this.staticPosition + 'px'
  }
  // changeOfPositionHorizontal(num){
  //   this.$el.style.left = num + 'px'
  // }
  // changeOfPositionVertical(num){
  //   this.$el.style.top = num + 'px'
  // }
}

const style2 = new Style2({
  selector: '.js-walker',
  padding: 30,
  outline: 'solid orange 1px',
  position: 'absolute',
  staticPosition: 15,
})
