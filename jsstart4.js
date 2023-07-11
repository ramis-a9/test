'use strict';

// Функции - это наши действия js , они исп различные типы данных.

// let num = 15;
// let pim = 5;
// function showFirstMessege(text) { // (Неглассаное правило - имя функции должно быть глаголом на чем то).Здесь аргументы для функции
//     alert(text);    // здесь то, что она будет выполнять. В данном случае, мы просто выводим аргумент в функции. Как бы просто привязываем аргумент, чтобы он выводил, по фатку, он просто пустой сейчас.
// //переменные внутри функции не видно, они локальны в опр функции.
// //но внутри функции - переменные МЕНЯЮТСЯ! и сохраняются вне функций.
// num = 10; 
// let pim = 10;// если у нас уже есть глобальная переменная, и мы создаем такую же внутри, она создасться и будет работать только внутри функции
// console.log(pim); //увижу 10. Это Замыкание функции - сначала функция ищет переменную внутри себя, а потом уже во внешнем уровне (глобальном уровне). 
// } Даже var внутри функции - работает только внутри

// showFirstMessege('Здесь пишу рандомный текст, исп компанда функции'); //Здесь мы обратились к функции
// console.log(num); //Напишет 10, т.к. в функции было исправлено
// console.log(pim);

// console.log(calc(3, 5));
// console.log(calc(6, 8));

// function calc(a, b) {
//     return(a + b); //return возвращает переменные. Может вернуть переменные вне ее функции
// }


// function retVar () {
//     let num = 50;
//     return(num); //Объявили переменную и здесь мы ее вернули.
// } //return заверщает выполнение функции и возвращает ее значение

// let anotherNum = retVar();
// console.log(anotherNum); //здесь мы получим 50 и смогли вытащить значение num, которое создавали в функции
// //У функции есть понятия как -
// //function declaration - это функция, которая объявлена в потоке кода. Они создаются до начала кода и их можно вызывать до объявления и они будут работать (как var)
// // function expression - когда функцию присваеваем в переменную


// // let calc = function (a, b) { //Это функция экспрешен - ее нельзя вызвать заранее
// //     return(a + b); //даже если будет var , все равно нельзя заранее вызвать
// // } 
// let calc = (a, b) => a+b //Стрелочная функция - новый стандарт, популярен
// // у нее нет контекста вызова, поэтому чаще всего можно встретить в обработчика событий
// console.log(calc(3, 5));
// console.log(calc(6, 8));

// //Методы у строк и чисел - методы это вспомогательные функции
// //Свойства - это вспомогательные значения
// let str = "test";
// console.log(str.length); //тут мы получили 4 - это длина строки (в круглых скобках!)
// // а методы позволяют изменять эти строки
// console.log(str.toUpperCase()); //(Методы это)Перевод - мы что то берем (str) и делаем все буквы заглавными
// console.log(str.toLowerCase());// а тут наоброт

// let twelve = "12.2px";
// // console.log(Math.round(twelve)); //Метод округляет до ближайшего целого числа
// console.log(parseInt(twelve)); //Метод окргуглит до целого числа
// console.log(parseFloat(twelve)); //Метод вернул десятичное число 

function first() {
   // что то делаем. Какие то действия через определенное время
   setTimeout (function() {
    console.log(1);
   }, 500 );  // в данном случае, через пол секунды
}

function second () {
    console.log(2);
}

first();
second();  // Здесь сработала сначала функция 2ая, а не 1ая, т.к был введен Таймаут!
// CallBack - это функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение.
// Любая функция может взять другую функцию, и тогда она уже будет callback function

function learnjs(lang, callback) {
    console.log('Я учу' + lang);
    callback(); //тк мы передавали в функции callback, мы можем его вызвать внутри функции
    console.log(typeof(callback)); //это функция, название можно поменять, от слова не зависит похоже!
}

function done() {
    console.log("я прошел 3 урок!");
}

learnjs ('JavaScript', done); //Суть callback-а в том, что он идет втророй и выполнится после первой (сначала функция lang, потом callback т.к. стоит просто вторым)
