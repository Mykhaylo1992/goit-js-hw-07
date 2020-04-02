'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");
let counterValue = 0;
const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};
const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);