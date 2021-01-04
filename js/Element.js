class Element {
  constructor(options){
    this.$el = document.querySelector(options)
  }
}
class Style extends Element{
  constructor(options){
    super(options.selector)
    this.staticPosition = options.staticPosition
    this.$el.style.color = options.color
    this.$el.style.padding = options.padding + 'px'
    this.$el.style.margin = options.margin
    this.$el.style.width = options.width
    this.$el.style.height = options.height
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