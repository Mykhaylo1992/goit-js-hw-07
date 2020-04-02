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

const Allmart = ingredients.map((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem
});
ingredientIte.append(...Allmart);