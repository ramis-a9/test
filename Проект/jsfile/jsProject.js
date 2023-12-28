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


// !!!!!!!!!!!!! УСТАНОВКА ТАЙМЕРА !!!!!!!!!!!!!!!!!!!!!!!!
    // 1) Первое что нужно - это установка определенного дедлайна.
    // 2) нужно взят время в будущем, взять время, что сейчас и отнять эти 2 велечины. Именно из этой разницы мы и будем вытаскивать часы мин и сек
    // 3) Далее нужно будет сделать функцию настройщик, которая будет имзенять велечины в html файле
    // 4) Но нужная будет еще одна функция, которая будет еще и обновлять все эти данные 

    let deadline = '2023-10-28';

    function getTimerRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()); //Этот метод превращает любую дату в количество милисекунд. Любую дату можно превратить в кол во Милисек, которые прошли с 1 янв 1970 года. 2 - это дата, которая у Пользователя на данный момент. Мы взяли дату дедЛайна и дату, которая есть сейчас. Сейчас у нас в t - кол во милисек.
    // Нам нужно получить часы мин и сек, если посмотреть на верству html 
        let seconds = Math.floor((t/1000) % 60);  //Сразу окгругляем до целыых через math и метод floor. Мы поместили t - количество милисек и разделили на 1000, чтобы получить секунды, но и тут от этого числа нам нужны сек (до 60), для этого нам нужно получить просто остаток от деления !
        if (seconds < 10) {
            seconds ="0"+seconds;
        }

        let minutes = Math.floor((t/1000/60) % 60); //Здесь также взяли все милисек, получили сек, потом часы, но нам нужен опять остаток - хвостик, и поэтому взяли остаток от деления на 60 !
        if (minutes < 10) {
            minutes ="0"+minutes;
        }

        let hours = Math.floor((t/(1000*60*60))); //тут мы получили количество часов, помни про цифру 60 мин в одной минуте
        if (hours < 10) {
            hours ="0"+hours;
        }
        // let daysS = Math.floor((t/1000/60/60/24); //тут получили дни
        
        // Наша функция может дать несколько значений, но экспортировать сразу несколько переменных так не можем, но можем передать объект
        return {  //Здесь мы говорим функции что то вернуть, и этой записью мы создаем объект
            'total': t,  //В будущем мы будем исп. эту переменную для остановки таймера, как только он достигнет 0, мы таймер остановим
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds //тут уже в конце не ставим запятых
        }
        
    };

    function setClock(id, endtime) {    // Теперь напишем функцию, которая создаст из статичной верстки - динамическую. В endtime будет приходить deadLine. id - id того пункт в верстке (html) (timer), который мы будем изменять
        let timer = document.getElementById(id), //мы тут просто пишем id, но смотри, что мы пишем в вводе функции внизу! мы как раз id туда вписываем
            hours = timer.querySelector('.hours'), //мы тут ищем из под родителя
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'); //querySelector - получает первый элемент при поиске со страницы или как у нас, из под класса
        let timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() { // теперь нужно это обновлять, обновлять будем каждую секунду
            let t = getTimerRemaining(endtime); //Сюда мы вписываем deadLine, он пришел у нас как из под endtime. Теперь у нас каждую секунду будет обновляться вертска получая свежие данные из под функции
            hours.textContent = t.hours; // мы помним, что мы первой функцией получаили объект, если навести на t , то там видно, что это объект
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total <= 0) { //тут делаем так, что когда t будет равно 0 - то мы останавливаем таймер
                clearInterval(timeInterval); 
            }
        }
    };
    
    setClock('timer', deadline); //Если вызывать таким образом, мы можем создать каокй то другой блок или другой deadLine

    // Modal - Модальное окно
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block'; //В данном случае мы получили все кнопки в js , далее сделали так, чтобы по кнопке more - overlay показал себя. Идет работа с css стилями
        this.classList.add('more-splash'); // мы исп. this, чтобы сделать ссылку именно на эту кнопку - без ивента. И потом добавили анимацию опть же из css стилей. Добавили новый класс
        document.body.style.overflow = 'hidden'; // Запретим прокручивать сайт, когда включено модальное окно
    });

    close.addEventListener('click', function() { //Здесь мы просто делаем обратные операции
        overlay.style.display = 'none'; 
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // опять включаем прокрутку страницы при закрытие окна
    });


    // Form 
    // Сейчас мы будем оповещать текстовым спомобом клиента о состоянии сервера

    let message = {
        loading: 'Загрузка....',
        sucsess: 'Спасибо что оставили заявку.... МУДИЛА!',
        failure: 'ЧТо то пошло не так' // мы всегда должны сказать пользователю, что что то не так, если страница зависает
    };
    
    let form = document.querySelector('.main-form'), //нашли главную форму
        input = form.getElementsByTagName('input'), // вывели себе инпуты
        statusMessage = document.createElement('div'); // создали новый объект, чтобы добавить его на страницу, чтобы было сообщение пользователю о статусе нашей страницы

        statusMessage.classList.add('status'); // этот класс уже добавлен в css , чтобы дать стилистики сообщению, которое будет выводиться
    
    // теперь у нас задача - чтобы после нажатия кнопки оставить заявку в форме обратной связи, клиент получал нужное сообщение
    // в любой форме для отправки должна быть или Button или Input для отправки инфомрации

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        
                        let request = new XMLHttpRequest();
                        
                        request.open('POST', 'server.php');  // Метод пост, тк данные, которые вводит пользователь мы хотим отправить на сервер, чтобы они куда то записались, 2ой аргумент - адрес. Запрос закончен
                       
                        request.setRequstHeader ('Content-Type', 'application/x-www-form-urlecoded');
                        
                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {  // Это ты помнишь, статусы ответа
                                resolve() // Это мы задавали выше и вносили на страницу как ДИВ. innerHTML - вроде запись
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 3) {
                                    resolve()
                                }
                                else {
                                    reject()
                                }
                            }
                        }   
                        requst.send(data);
                    })
                }; //End Post Data
                
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = ''; // тут мы очистили после нашего submit все наши inputa в этом окне.
                    };
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => {
                        thanksModal.style.display = 'block';
                        mainModal.style.display = 'none';
                        statusMessage.innerHTML = '';
                    })
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        })
    };

    sendForm(form);
    // sendForm(formBottom); // эта функция непонятно откуда 


    //!!!!!!!!!!!!!!!! Слайдер + калькулятор !!!!!!!!!!!!!!!!
 
    // Рекализаций слайдеров можно найти множество , но нужно чтобы он автоматичеси подстраивался под адаптацию например мобилки и тд. Если исп конкретные пиксели, размеры и тд, то он не совсем универсален, тк он подходит только под что то конкретное одно
    // сейчас сделаем адаптивый слайдер на js без css, но потом нужно будет ими пользоваться 

    let slideIndex = 1, // Это переменная, отвечает за тот слайд, который показывается в текущий момент 
        slides = document.querySelectorAll(".slider-item"), // сами картинки
        prev = document.querySelector('.prev'),  // стрелочка налево
        next = document.querySelector('.next'), // стрелочка направо 
        dotsWrap = document.querySelector('.slider-dots'), // обертка наших точек 
        dots = document.querySelectorAll('.dot'); // сами точки

    // Нам нужны функции 1) Скраыть не нужные картинки, но так, чтобы она содержала аргумент с номером слайда, который надо попказать 
    // 2) При клике на стрелочки, нужно чтобы слайд индекс изменялся и показывался определенный слайд
    // 3) Функция для опр текущего слайда, чтобы показывался нужны слайд на точках
    
    // т.к у нас ФАНКШИН Декларейшен, мы можем вызвать функцию до того, как она была объявлена
    showSlides(slideIndex);
    
    function showSlides(n) { // Именно эта функция будет показывать тот слайд, который мы ей передаем  (аргумент)
                                    // Также должны изменяться и точки в соответветсвии со слайдом , как и реакция на тыкания стрелочек. А когда мы тыкаем на 3ий кружочек, мы должны понять, какой там слайд и именно его поаказть
        // Кроме того сечас сделаем так, чтобы когда мы тыкали на стрелочки в крайних положения, они переключались на противоположенные - нажали на 1, а потом назад, вкл 4ая

        if (n > slides.length) { // Тут мы говорим, если слайды закончились, то вернулись к первому 
            slideIndex = 1;

        }
        if (n < 1) {
            slideIndex = slides.length //тут мы сказали, если мы листаем слайдет назад, то возвращаемся к самому последнему слайду
        }
        slides.forEach((item) => item.style.display = 'none')  // (1ый сопособ) Переберем все слайды. Через стрелочную функцию, в скобках передаем ОДИН агрумент. Далее мы сделали так, чтобы все слайды , которые сейчас у нас на страницы скрылись 
        
        // for (let i = 0; i < slides.length; i++) {       //2ой способ, но надо через первый !
        //     slides[i].style.display = 'none'; // Квадратные скобки, тк это массив , мы же работали чере QuerySelectorALL !
        // }
        dots.forEach((item) => item.classList.remove('dot-active')); // Мы здесь удалили класс у кнопок (т.к. класс, точку ставить не нужно) удалили класс на точках, чтобы они были не активны.

                // Теперь мы должны показать нужный слайд 
        slides[slideIndex - 1].style.display = 'block'; // Мы должны конвектировать нормальную нумерацию в JS нумерацию. Первоначалоьно там просто 1 на slidIndex
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n) // Увеличиваем тут на знаечение n. Мы специально подставили эту функциЮ, чтобы после имзенения, вызвалась функция, но уже с 2ойкой showslides, а там уже выполнятся остальные команды и все будет верно показываться 
    }

    function currentSlide(n) {
        showSlides(slideIndex = n); // Тут, когда мы кликнем на 4ую строчку, туда передастся событие 4 
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    // мы сейчас исп делегиррование
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {  // здесь наш ДОТС +1 прописано для (не понял, но это связано с повторением циклаЮ внизу у меня i-1)
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) { // При делегировании событий мы проверяем элемент на опр параметры И только потом что то делаем. Тут мы проверяем, что мы кликнули именно на точку. Contains позволяет проверить что мы попали именно в точку
                currentSlide(i); 
            }
        }
    });


        //  Calc Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],  // Сначала получаем 2 инпута. Тк мы получаем 2 элемента, сразу ставим квадратные скобки и указываем что это (нулевой - первый) элемент
        restDays = document.querySelectorAll('.counter-block-input')[1], // а это количество дней которое
        place = document.getElementById('select'), // Место поездки
        totalValue = document.getElementById('total'), //Сумма
        personsSum = 0, // Сюда помместим количество людей
        daysSum = 0, // Количество дней
        total = 0;  // Тут будет храниться последнее значение после всех математических операций и мы будем его записывать в итог

        // Сразу сначала исправим сумму на 0 в калькуляторе 
    totalValue.textContent = 0;  // можно и через innerHTML

    // Логика - мы должны отслидить через событие input или change, что вводит пользователь в калькулятор и далее записать это все в переменнные, коотрые мы только что создали ы
    // далее просто все подсчитать и выводим тотальную сумму вот в конец
    // Но если поле не заполенно, одно из, сумма не должна сама меняться

    persons.addEventListener('change', function() { //здесь будем использовать change. НО нельзя использовать стрелочную функцию, тк. мы будем исп контекст вызова this ВОТ БЛЯТЬ ЧТО ЭТО ТАКОЕ !! стрелочные фнукции с this Не используются 
        personsSum = +this.value; //при помощи this мы получаем тот элемент с которым мы общаемся, где происходит наше собыите 
        total = (daysSum + personsSum)*4000; //Просто формула, которую нам дал заказчик

        if (restDays.value == '') {
            totalValue.innerHTML = 0; // тут мы говорим, если у нас пустой второй инпут, мы ничего не передаем в тотал
        } else if (persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() { // Повторяем тоже самое для второго инпута 
        daysSum = +this.value; 
        total = (daysSum + personsSum)*4000; 

        if (persons.value == '') {
            totalValue.innerHTML = 0; 
        } else if (restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    // ТЕперь делаем выбор базы - Мумбай, Кералла, там внутри ест разные значения value 1 , 1.5 , 1,8 их мы и будем использовать в коде
    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total; // мы создаем здесь промежуточную переменную. Выбор базы (мумбай и тд) модифицирует общую стоимость. Если бы мы уже забили данные и переключали выборы базы отдыха, то тотл бы увеличивался постоянно, а тут мы играем только с тех переменной
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;   // Здесь мы увеличиваем тотал на определенный value в коде при выборе базы отдыха. Мы пошли черезе this.option (там html так отображаются базы) - то на что мы используем событие далее вписали как по коду через квадратные скобки. Не знаю почему но вписали. 
        }
    }); 



}); //domContenLoader