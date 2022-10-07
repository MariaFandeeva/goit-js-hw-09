const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
const btnEls = document.querySelectorAll('button');

let timerId;

btnStartEl.addEventListener('click', onBtnStart);
btnStopEl.addEventListener('click', onBtnStop);

function onBtnStart(event) {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onBtnStop(event) {
  clearTimeout(timerId);
  btnStopEl.disabled = true;
  btnStartEl.disabled = false;
}
btnStartEl.removeEventListener('click', onBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
