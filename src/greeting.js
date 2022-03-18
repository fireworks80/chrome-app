let wrapEl = null;

const displayName = (name) => {
  wrapEl.innerHTML = `안녕하세요 ${name}.!!`;
};

const handleInputValue = (e) => {
  const target = e.target;
  const input = e.currentTarget.querySelector('input');

  if (e.key !== 'Enter') return;

  if (!input.value.length) {
    alert('이름을 입력하세요');
    input.focus();
    return;
  }

  localStorage.setItem('name', input.value);
  displayName(input.value);
};

const insertName = () => {
  wrapEl.addEventListener('keydown', handleInputValue);
};

export default function init() {
  const name = localStorage.getItem('name');
  wrapEl = document.querySelector('.greeting');

  name ? displayName(name) : insertName();
}
