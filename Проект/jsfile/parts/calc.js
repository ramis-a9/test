function calc () {
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
};

modul.exsports = calc;
