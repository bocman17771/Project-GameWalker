const styleTarget = new Style({
  selector: '.js-circle',
  padding: 15,
  outline: 'solid orange 1px',
  position: 'absolute',
  staticPosition: 100,
})

const targetWidth = styleTarget.$el.clientWidth
const targetHeight = styleTarget.$el.clientHeight