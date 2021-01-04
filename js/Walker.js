const styleWalker = new Style({
  selector: '.js-walker',
  padding: 30,
  outline: 'solid orange 1px',
  position: 'absolute',
  staticPosition: 10,
})
const walker = styleWalker
const walkerWidth = walker.$el.clientWidth