'use strict';

// 1)  На мобильных устройсвах нет кликов, выводов мыши за пределы объекта и т.д.
    // там есть только Табы. Есть сайт Caniuse - там мы вбиваем целевое действие - 
    // touch, и он показывает какие браузеры поддерживают Тач на мобильных устройствах.

    // В консоле разработчки в браузере есть кнопка - Toggle device Tool Bar - слева от слова консоль
    // Мы ее нажимаеим и переходим в " Меню Адаптивности!". Наверху есть выбор - Mobile, Desktop и тд. Там выберем Мобайл и у нас появится Таб мышкой.

/* 2) События на мобильных устройствах. Все Мобильные события начинаются со слова touch
        touchstart - срабаывает при возникновении касания к элементу. По сути аналог клика
        touchmove - когда прикоснулся к элементу и перемещает палец в другую точку. 
        touchend - когда палец перестает касаться сенсора.
            Все эти 3 события мы исп. когда листаем ленту в вк.
        Событие click - также будет нормально срабатывать на мобильных устройствах. Следим за конфликтами
        tochenter - когда наш палец заходит на элемент. Пример - двигаем зажатый палец по сенсеру и палец зашел на элемент на странице. 
        tochleave - когда палец покинул пределы элемента.
        tochcancel - когда палец больше не регистрируется на поверхности. Пример - Открыт браузер на половину, но палец выходит за пределы браузера, палец в браузере больше не регистрируется.
        */

window.addEventListener('DOMContentLoaded', function() {  // Важе регистр в название события! Без него тоже работает! Нужен, чтобы была загрузка быстрее, чем загрузка страницы- хз что это.
    let box = document.getElementById('btn');
    console.log(box);

    box.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Пишем, чтобы избавиться от негативного стандартного поведения браузера
        console.log("Red Box: touchstart"); //Событие отображается и работает
        // console.log(e.touches); // Эта команда - Когда мы исп touches - мы все пальцы, которые прикоснулись к сенсорной поверхности, не зависимо от того, на какой объект они были использованы.
        // console.log(e.changedTouches); //Эта команда почти аналогична первой. Она регистриует все пацльы, которыее были во взаимодействии. 
        // console.log(e.targetTouches); // А в этой команде, мы регистрируем только те пальцы, которые взаимодействуют с опр элементом. 
        // // Здесь во всех трех - lenght = 1, тк. один палец, но если мультитач - то будет равна кол ву пальцев.
        // console.log(e.target); // Команда выведет объект - цель
        // console.log(e.touches[0].target);  // Это свойство моб событий - первый пален [0]
    });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red Box: ' + e.touches[0].pageX); //здесь мы взяли наш первый палец и будем получать координату по оси Х 
    });

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log("Red Box: touchend");
    });
});