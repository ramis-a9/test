function tabs() {
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
};

modul.exports = tabs; // Сейчас мы подготовили модуль с Табами. Мы просто экспортировали, саму функции не вызвали
// мы также можем сделать и с другими фичами в нашем проекте. Теперь, когда мы вставили, на место мы должны прописать require - объявлением переменных в главное файле скрипта
