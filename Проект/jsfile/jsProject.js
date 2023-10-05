// Первым делом мы создаем обработчки событий на всю нашу страницу.
// Скрипт может что то начать изменять на странице, а ведь там есть много картинок
//  и Функционала. Поэтому нам нужно сделать так, чтобы он не изменял
//  и ждал, пока dom полностью подгрузится

// window.addEventListener('load'); /*- здесь я говорю, js, сейчас наша страница будет загружаться  // window - Это глобальный объект
// и только после загрузки всего этого наш JS будет выполняться. но тут что то может долго грузиться
// поэтому это не совсем то , что нам нужно. Самое главное, чтобы было построено dom дерево*/

window.addEventListener('DOMContentLoaded', function() {  // Наш js Начнет срабатывать только тогда, когда DOM структура будет загружена, а картинки - фиг с ними
'use strict';

// табы - чтобы на нашей странице, раскрывало все поочередно, а не сразу всё висело
// нужны 3 Вещи - 1) Таб контент 2) Пункты таба наверху 3) И родитель всех пунктов

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    /* В css у меня уже прописаны классы, а в верстке у меня прописан класс fade (в самом начале)
    это именно та анимация, которая нужна */

    function hideTabContent(a) {  //дали название функции и дали 1 тех аргумент
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //Эти классы у нас с css
            tabContent[i].classList.add('hide'); //в css классы эти. Хз что дают. classList позволяет рабоать с классами как со строками, добавлять, удалять.
            //Этими двуми строками, мы возьмем все элементы и полностью скроем их со страницы
        }

    };
    
    hideTabContent(1); //Здесь мы запустили функцию и передали в нее 1, чтобы сохранить первый таб открытым на странице.

    function showTabContent(b) { //новая функция, чтобы показывать табы, параметр новый
        if (tabContent[b].classList.contains('hide')) { //Тут я проверяю, действительно ли элемент скрыт, ведь тогда я функцией добавлял в класс hide Элементы
            tabContent[b].classList.remove('hide'); //Здесь мы делаем наоборот, хотим показать, дабавляем show и удаляем hide
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //нам нужно определить, что отдых элемент, связан с определенным таб конентом 
            for (let i = 0; i < tab.length; i++) { // мы с помощью цикла возьмем наши табы, переберем и сравним с тем, куда мы кликнули 
                if (target == tab[i]) {
                    hideTabContent(0); //убираем все табы, ставим просто 0
                    showTabContent(i); // а тут мы покажем нужны таб. Будет зависить от цифры в i
                    break; // останавливаем выполнение
                }
            }
        }
    });
    console.log('fdfd');
    console.log(tab);
    console.log(info);
    console.log(tabContent);


 });