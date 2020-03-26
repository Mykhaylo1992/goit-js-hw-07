'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientItem = document.getElementById('ingredients');

ingredients.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    ingredientItem.appendChild(listItem);
});