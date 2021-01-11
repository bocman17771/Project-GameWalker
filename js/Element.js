class Element {
  constructor(options){
    this.$el = document.querySelector(options)
  }
}
export class Style extends Element{
  constructor(options){
    super(options.selector)
    this.staticPosition = options.staticPosition
    this.$el.style.position = options.position
    this.$el.style.left = this.$el.style.top = this.staticPosition + 'px'
    this.$el.style.padding = options.padding + 'px'
    this.$el.style.margin = options.margin
    this.$el.style.marginBottom = options.marginBottom
    this.$el.style.width = options.width
    this.$el.style.height = options.height
    this.$el.style.outline = options.outline
    this.$el.style.background = options.background
    this.$el.style.backgroundImage = options.backgroundImage
    this.$el.style.backgroundSize = options.backgroundSize
    this.$el.style.backgroundPosition = options.backgroundPosition
    this.$el.style.color = options.color
  }
  changeOfPositionHorizontal(num){
    this.$el.style.left = num + 'px'
  }
  changeOfPositionVertical(num){
    this.$el.style.top = num + 'px'
  }
}