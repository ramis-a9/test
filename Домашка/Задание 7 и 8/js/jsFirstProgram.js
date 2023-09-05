'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'), //Тут черезе # тк. в html мы искали по типу!
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue =document.querySelector('.day-value');


let money, time;


startBtn.addEventListener('click', function() {
    time = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD","2012-12-07");
    while (isNaN(money) || money == "" || money == null || money == NaN) {
         money = +prompt("Ваш бюджет на месяц","30000").replace(/[^\d]/g, '');
    };
    appData.cash = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); // Эта команда вставит текст в нужный объект На сайте
    yearValue.value = new Date(Date.parse(time)).getFullYear();    // Если у нас есть атрибут input - мы работает с value, а не через textcontent
    // любые действия с датами делаются через Объкт date т.к. это объект, он имеет методы свои
    // Здесь Если пользователь правмльно написал дату, наша команда превратит дату в кол - во милисекунд с 1970 года. А потом эти милисекунды, он превратит в нужную нам дату. Все мы достаем через методы  
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // Делаем +1, т.к. месяца в js считаются с 0 
    dayValue.value = new Date(Date.parse(time)).getDate(); // getDate - команда !! Внимание на нее, не ДЭЙ !!
});
// console.log(expensesItem); // здесь у нас input-ы, мы будем работать с value


expensesBtn.addEventListener('click', function (){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value; //здесь мы получим значение, которое введет человек в 1ой колонке.
        let b = expensesItem[++i].value; //Здесь мы исп. префиксную форму -ПОВТООРИ Разницу!
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50) {
            console.log('Done');
            appData.expensens[a] = b; // Квадратная скобка - тут мы используем ключ и значение. И так каждый раз по циклу, неорграниченное кол во раз в цикле
            sum += +b; // += тут мы вседа прибавляем к нашей сумме значение b, +b запишет именно число
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
    });

    
optionalExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });
    

countBtn.addEventListener('click', function() {

    if (appData.cash != undefined) {
            appData.moneyPerDay = (appData.cash/30).toFixed(); //тут мы расчитываем бюджет на 1 день и сразу записываем в глобальный объект 
            dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 500) {
        levelValue.textContent = "вы относитесь к населению с низким уровнем дохода";
        } else {
        if ((appData.moneyPerDay) >= 2000) {
            levelValue.textContent = "Вы относитесь к населению с высоким уровнем дохода";
        } else {
            levelValue.textContent = "вы относитесь к населению со средним уровнем дохода";
        }
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

    /* Событие input и событие change - 
    input возникает тогда, когда мы что то вводим в поле в html, при каждом вводе символа
    change возникает тогда, когда мы убираем мышь с метса inputa (ввода текста) и где то кликаем в другом месте (таи даже фокус пропадает) (наш input изменил свое value) */

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value; // +сы чтобы преобразовать в числовой тип данных
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value; // +сы чтобы преобразовать в числовой тип данных
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
        cash:money,
        timeData:time,
        expensens:{},
        optionalExpenses:{},
        income:[],
        savings: false,
};

//  startBtn.style.fontSize = '18px'; - Команда для изменения рамера шрифта через JS в HTML 


