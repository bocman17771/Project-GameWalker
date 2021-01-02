class Walker {
  constructor(options){
    this.$el = document.querySelector(options)
  }
}

class Traffic extends Walker{
  
  constructor(options){
    super(options.selector)
    this.movingPosition = options.top
    this.$el.style.padding = options.padding + 'px'
    this.$el.style.border =  options.border
    this.$el.style.borderRadius =  options.borderRadius + '%'
    this.$el.style.position = options.position
    this.$el.style.left = this.$el.style.top = this.movingPosition + 'px'
  }
  
  changeOfPosition(num){
    this.$el.style.left = num + 'px'
  }

}

const style = new Traffic({
  selector: '.js-circle',
  padding: 15 ,
  border: 'solid orange 1px',
  borderRadius: 100,
  position: 'absolute',
  top: 100,
})

