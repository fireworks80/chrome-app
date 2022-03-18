let wrap = null;
let datas = [];

const deleteTodo = (e) => {
  const target = e.target;
  if (target.nodeName !== 'BUTTON') return;

  const id = target.dataset.id;
  localStorage.setItem('todos', JSON.stringify(datas.filter((item) => item.id !== parseInt(id))));
  displayList();
};

const displayList = () => {
  const ul = wrap.querySelector('.todo__list');
  datas = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  const result = datas
    .map((item) => `<li>${item.title} <button data-id=${item.id} type="button">삭제</button></li>`)
    .join('');
  ul.innerHTML = result;

  ul.addEventListener('click', deleteTodo);
};

const addTodo = (e) => {
  const target = e.target;
  const input = e.currentTarget.querySelector('input');
  let currentId = localStorage.getItem('currentId');
  currentId = currentId ? parseInt(currentId) : 0;

  if (target.nodeName !== 'BUTTON') return;

  const value = input.value.trim();

  datas.push({ id: (currentId += 1), title: value });
  localStorage.setItem('todos', JSON.stringify(datas));
  localStorage.setItem('currentId', currentId);
  input.value = '';

  displayList();
};

const insertData = () => {
  const inputs = wrap.querySelector('.todo__input');

  inputs.addEventListener('click', addTodo);
};

export default function init() {
  wrap = document.querySelector('.todo');

  insertData();
  displayList();
}
