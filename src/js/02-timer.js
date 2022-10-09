import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');
const numbersEls = document.querySelectorAll('.value');
let timerId = null;
let startTime = null;
let endTime = null;

startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    endTime = selectedDates[0].getTime();
    startTime = new Date().getTime();

    if (endTime > startTime) {
      startBtnEl.disabled = false;
    } else {
      Notify.warning('Please choose a date in the future');
      return;
    }
  },
};

flatpickr('#datetime-picker', options);
startBtnEl.disabled = true;
startBtnEl.addEventListener('click', startTimer);

function startTimer() {
  startBtnEl.disabled = true;
  inputEl.disabled = true;
  timerId = setInterval(onTimer, 1000);
}

function onTimer() {
  startTime = new Date().getTime();
  if (endTime <= startTime) {
    clearInterval(timerId);
    inputEl.disabled = false;
    return;
  }
  const time = endTime - startTime;
  const timeObj = addLeadingZero(convertMs(time));
  numberHandler(timeObj);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function numberHandler(timeObj) {
  let i = 0;
  for (const key in timeObj) {
    numbersEls[i].textContent = timeObj[key];
    i += 1;
  }
}
