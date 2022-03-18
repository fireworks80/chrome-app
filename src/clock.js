const padding = (value) => (value >= 10 ? value : `0${value}`);
const clock = document.querySelector('.clock');

const animate = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  clock.textContent = `${hour} : ${padding(minute)} : ${padding(second)}`;

  requestAnimationFrame(animate);
};

export default function init() {
  animate();
}
