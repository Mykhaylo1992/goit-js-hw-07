'use strict';

const categories = document.querySelector('#categories');
console.log(`В списке: ${categories.children.length} категории.`);
const items = document.querySelectorAll('.item');
items.forEach(item => console.log(`Категория: ${item.firstElementChild.innerHTML}.`));
items.forEach(item => console.log(`Количество элементов: ${item.lastElementChild.children.length}`));