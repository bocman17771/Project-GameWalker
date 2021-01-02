class Target {
  constructor(options){
    this.$el = document.querySelector(options)
  }
}

class Style extends Target{
  constructor(options){
    super(options.selector)
    this.staticPosition = options.staticPosition
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

const style = new Style({
  selector: '.js-circle',
  padding: 15 ,
  outline: 'solid orange 1px',
  position: 'absolute',
  staticPosition: 100,
})

