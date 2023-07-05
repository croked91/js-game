import img from './assets/logo.png';
import './index.scss';

console.log('###INIT###');
console.log(img);

const logo = document.querySelector('.logo');
logo.style.backgroundImage = `url(${img})`;
