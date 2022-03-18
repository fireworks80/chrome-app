let wrapEl = null;

const displayWeather = (result) => {
  const { name, main } = result;

  const nameEl = document.createElement('p');
  const nameText = document.createTextNode(name);
  const tempEl = document.createElement('div');
  const tempText = document.createTextNode(`${main.temp}°C`);

  nameEl.appendChild(nameText);
  tempEl.appendChild(tempText);

  wrapEl.appendChild(tempEl);
  wrapEl.appendChild(nameEl);
};

const success = (position) => {
  const { latitude, longitude } = position.coords;
  const key = 'a37c04a6b586bfd407d5942b34e0e3cd';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  const result = fetch(url)
    .then((response) => response.json())
    .then((result) => displayWeather(result));
};
const error = () => {
  alert('Sorry, no position available');
};

navigator.geolocation.getCurrentPosition(success, error);

const init = () => {
  wrapEl = document.querySelector('.weather');
};

export default init;
