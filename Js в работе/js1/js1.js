'use strict';

//  Управление временем выполнения скриптов и Делегирование событий

// setTimeout(sayhello, 3000);  //Позволит запустить что то через какое то время. Первый аргумент - Функция, второй аргумент - задержка в милисекундах. А третий аргументы через запятую, укажется аргумент, который мы хотим использовать в нашей функции.

// let timerId = setTimeout(sayhello, 3000); // Здесь я поместил таймер в опр коробку. Так мы запишем число идентификатор. 
// clearTimeout(timerId);  // Благодаря коробки, здесь у нас больше ничего не произайдет и скрипт не сработает. Он останавливает setTimeout

// let timerId = setInterval(sayhello, 3000); //Здесь функция будет повторяться каждые 3сек.
// // clearTimeout(timerId);

// function sayhello() {
//     console.log('Hello World'); 
// };


/* Чем рекурсинвый setTimout лучше, чем setInterval ? 
Рекурсивный - когда функция вызывает саму себя. Например, функции для работы нужно
5 секунд для обращение на сервер и т.д. А мы ставим интервал 3 сек, в итоге, мы постоянно заного вызывает функцию
*/

// let timerId = setTimeout(function log () {
//     console.log('Hello');
//     setTimeout(log, 10000);  // Здесь мы сделаем некую рекурсию, функция будет вызывать саму себя 
// }); // Рекурсивный метод будет надежнее, если мы не уверены в setInterval, вдруг там есть задержка, а здесь, мы эту задержку будем учитываьть

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
btn.textContent = 'СТАРТ';


// function myAnimation() {
//     let pos = 0;  // На данный момент параметры TOP и Left = 0, если они будут изменяться пропорционально, то, квадрат будет смещаться вниз по диагонали.

//     let id = setInterval(frame, 50); //Изначально позиция равна 0. После этого, кадлые 10 милисек, мы запускаем функцию frame.
//     function frame () { //Эту функцию мы будем запускать каждый раз исп. setInterval
//             if (pos == 300) {    //Если достигнет 300 пикселей
//                 alert('ПОШЕЛ НАХУЙ');
//                 clearInterval(id); //здесь мы вписали id, чтобы таймер остановился 
//             } else {
//                 pos++;
//                 elem.style.top = pos + 'px'; //здесь я так понял ставил наш элемент на по координатам.
//                 elem.style.left = pos + 'px';
//             }
//     }
// };

// btn.addEventListener('click', myAnimation);

btn.addEventListener('click', function() {
    let a = 0;  
    let rek = setTimeout(function start () {
            if (a == 300) {
                console.log('Done');
                return;
            } else {
                a = a + 10;
                elem.style.top = a + 'px';
                elem.style.left = a + 'px';
                console.log(a);
            }
    setTimeout(start, 50);
    })
});   




/* Делегирование - у нас там несколько кнопок, мы хотим, чтобы они работали все одинаково.
Для этого мы берем Родителя этих кнопок и будем назначить только с ним. Будем назначать функции для его потомков!
Это для того, чтобы не писать на кажду кнопку действие, ведь могут появляться и новые кнопки */

let btnBlock = document.querySelector('.btn-block'), // Через точку, т.к. это класс
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(e) {  //Делаем Делегирование
//    if (e.target && e.target.tagName == 'BUTTON') { // Здесь мы должны проверить, ткнул ли именно на кнопку, а не на обертку и выполняем действие
//         console.log('Hello');  // Event.target - тут понятно (цель), e.target.tagName имеют ТЭГ - BUTTON, но работает и без первого условия 
//         }
// });

// btnBlock.addEventListener('click', function(e) {  
//     if (e.target && e.target.classList.contains('first')) { //Здесь мы сделали акцент именно на название класса (там в файле написано было), а не на все кнопки
//          console.log('Hello');  
//          }
//  });

 btnBlock.addEventListener('click', function(e) { 
    if (e.target && e.target.matches('button.first')) { // А это метод с поиском опр кнопки и классом 
         console.log('Hello');  
         }
 }); 
 // Делегирование событий отлично подходит, когда есть много элементов у родителя, чем мы экономи место и память браузера

 