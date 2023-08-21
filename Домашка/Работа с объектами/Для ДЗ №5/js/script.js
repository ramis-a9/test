'use strict';

let menuItem = document.querySelectorAll('.menu-item'),
    menuClass = document.querySelector('.menu'),
    titleId = document.getElementById('title'),
    advDelete = document.querySelector('.adv'),
    promptId = document.getElementById('prompt');
    

menuClass.insertBefore(menuItem[2], menuItem[1]);
titleId.textContent ='Мы продаем только подлинную технику Apple';
advDelete.remove();
// promptId.textContent = prompt('Как вы относитесь к тенхнике Apple?');

console.log(menuClass);
console.log(titleId);
console.log(advDelete);
console.log(promptId);


