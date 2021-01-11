import {Style} from './Element.js'

export const styleTarget = new Style({
  selector: '.js-target',
  padding: 15,
  outline: 'solid #ffc107 3px',
  backgroundImage: 'url("../assets/img/svg/target2.svg")',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  position: 'absolute',
  staticPosition: 90,
})