import './style.css';
import background from './background';
import clock from './clock';
import temperature from './temperature';
import greeting from './greeting';
import todo from './todo';

window.addEventListener('DOMContentLoaded', () => {
  clock();
  temperature();
  background();
  greeting();
  todo();
});
