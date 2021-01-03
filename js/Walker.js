

class Walker extends Element{
  constructor(options){
    super(options.selector)
    this.staticPosition = options.staticPosition
    this.$el.style.color = options.color
    this.$el.style.padding = options.padding + 'px'
    this.$el.style.outline = options.outline
    this.$el.style.position = options.position
    this.$el.style.left = this.$el.style.top = this.staticPosition + 'px'
  }
  changeOfPositionHorizontal(num){
    this.$el.style.left = num + 'px'
  }
  changeOfPositionVertical(num){
    this.$el.style.top = num + 'px'
  }
}

const styleWalker = new Walker({
  selector: '.js-walker',
  padding: 30,
  outline: 'solid orange 1px',
  position: 'absolute',
  staticPosition: 15,
})

console.log(styleWalker.changeOfPositionHorizontal)
