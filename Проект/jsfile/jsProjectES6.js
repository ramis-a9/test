window.addEventListener('DOMContentLoaded', function() {  // Наш js Начнет срабатывать только тогда, когда DOM структура будет загружена, а картинки - фиг с ними

    
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
    
    
        class Options {
            constructor(height, width, bg, frontSize, textAlign) {
                this.height = height;
                this.width = width;
                this.bg = bg;
                this.frontSize = frontSize;
                this.textAlign = textAlign;
            }
            createDiv(text) {
                let newDiv = document.createElement('div');
                newDiv.textContent = text;
                newDiv.style.cssText = 'height: ${height}; width: ${width}; background: bg;';
            }
            
        };

        const div2 = new Options(100, 100, red, 100, center);
        div1(createDiv('Что вообще происходит'));
        console.log(div2);

        // Добавление нового элемента + дабвление контруктора

        class Options {
            constructor(height, width, bg, frontSize, textAlign) {
                this.height = height;
                this.width = width;
                this.background = bg;
                this.frontSize = frontSize;
                this.textAlign = textAlign;
            }
            createDiv(text = 'Кто тут') {
                let perStyle = document.querySelector('pre');
                let newDiv = document.createElement('div');
                document.body.insertBefore(newDiv, perStyle);
                newDiv.textContent = text;
                // newDiv.style.height = this.height;
                // newDiv.style.width = this.width;
                // newDiv.style.background = this.background;
                // newDiv.style.frontSize = this.frontSize;
                // newDiv.style.textAlign = this.textAlign;
                newDiv.style.cssText = `
                    background: ${this.background};
                    height: ${this.height};
                    width: ${this.width};
                    textAlign: ${this.textAlign};
                    frontSize: ${this.frontSize};
                    `;
                
                console.log(this.background);
                console.log('я работаю');
            }
            
        };

        let div3 = new Options('100px', '100px', 'red', '100px', 'center');
        div3.createDiv();
        
    });
    