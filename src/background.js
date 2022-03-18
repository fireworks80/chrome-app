import './images/0.jpeg';
import './images/1.jpeg';
import './images/2.jpeg';

export default function background() {
  const wrap = document.querySelector('.wrap');
  const randomImg = Math.floor(Math.random() * 3);
  wrap.style.background = `url(./images/${randomImg}.jpeg) no-repeat center top / cover`;
}
