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
    
    let appData = {
        cash:money,
        timeData:time,
        expensens:{},
        optionalExpenses:{},
        income:[],
        savings:{},
        chooseExpenses: function () {
            
            
        },
        detectDayBudget: function () {
            appData.moneyPerDay = ((appData.cash+appData.monthIncome)/ 30).toFixed(); //он округлит до целого, если вписать в скобки число, то до этого числа после запятой. НО он в любом случае даст строковое значение!
            alert("Ежедневный бюджет " + appData.moneyPerDay);
        },
        detectLevel: function () {
            if ((Number(money)+Number(appData.monthIncome)) <= 10000) {
                alert ("Так как Ваш ежемесячный бюджет с доходом от банка меньше " + (Number(money)+Number(appData.monthIncome)) + " вы относитесь к населению с низким уровнем дохода");
            } else {
                if ((Number(money)+Number(appData.monthIncome)) >= 100000) {
                alert ("Так как Ваш ежемесячный бюджет с доходом от банка больше " + (Number(money)+Number(appData.monthIncome)) + " вы относитесь к населению с высоким уровнем дохода");
                } else {
                alert ("Так как Ваш ежемесячный бюджет с доходом от банка до 100 000 руб, вы относитесь к населению со средним уровнем дохода");
                }
            }
        },
        checkSavings: function (){
            appData.savings = confirm("Eсть ли у Вас накопления в банке под процент?");
            if (appData.savings == true) {
                let save = +prompt("Какова Сумма накоплений"),
                    percent = +prompt("Под какой процент?").replace(/,/, ".");
                appData.monthIncome = (((save/100/12)*(percent)).toFixed());
                console.log(appData.monthIncome+'!!!!!!!!!!!!!!!!!!!!!');
                appData.monthIncome = Number(appData.monthIncome);
                alert("Доход в месяц с Вашего депозита " + appData.monthIncome);
                console.log(appData.monthIncome+'!!!!!!!!!!!!!!!!!!!!!');
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 2; i++) {
                let opt = prompt("Введите статью необязательных расходов","Пример: Одежда, отдых, гуляш мясной");
                
            }
        },
        chooseIncomeFunc: function () {
            let chooseIncome = prompt("Ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
            while (chooseIncome == false || chooseIncome == null || chooseIncome == "") {
                chooseIncome = prompt("Обязательно ведите дополнительне источники дохода","Пример: Преподавание танцев, продажа домашних пирожков и т.д.");
            }
        appData.income = chooseIncome.split(",");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
            chooseIncome.split(",").forEach(function(item, i, massChooseIncome) {
                console.log("Спобосбы дополнительного заработка " + (i+1) + ": " + item);
            })
        }
    };



    // appData.chooseExpenses();
    // appData.chooseOptExpenses();
    // appData.checkSavings();
    // appData.chooseIncomeFunc();
    // appData.detectDayBudget();
    // appData.detectLevel();
    //  startBtn.style.fontSize = '18px'; - Команда для изменения рамера шрифта через JS в HTML 


