import './styles/main.css';
import Annexe from './scripts/annexe.js';
import lilo from './images/lilo.png';

console.log('Webpack working well !')
const annexe = new Annexe()
console.log(lilo)

const $image = new Image()
$image.src = lilo
document.body.appendChild($image)